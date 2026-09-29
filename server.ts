import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { createClient } from '@sanity/client';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Body parsers with large limits for image payloads
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Server-side Gemini Client
const geminiApiKey = process.env.GEMINI_API_KEY || '';

const ai = new GoogleGenAI({
  apiKey: geminiApiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Sanity Client
const sanityProjectId = process.env.SANITY_PROJECT_ID || 'nx00t04k';
const sanityDataset = process.env.SANITY_DATASET || 'production';
const sanityToken = process.env.SANITY_TOKEN || '';

export const sanityClient = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: '2026-03-01',
  token: sanityToken,
  useCdn: false,
});

// API: Sanity connection test & sync endpoint
app.get('/api/sanity/status', async (req, res) => {
  try {
    const testQuery = '*[_type == "creation"][0...5]';
    const data = await sanityClient.fetch(testQuery);
    return res.json({
      connected: true,
      projectId: sanityProjectId,
      dataset: sanityDataset,
      documentsCount: Array.isArray(data) ? data.length : 0,
      sample: data,
    });
  } catch (error: any) {
    return res.json({
      connected: false,
      projectId: sanityProjectId,
      dataset: sanityDataset,
      error: error.message || 'Sanity connection failed',
    });
  }
});

// API: Create new Image using gemini-3.1-flash-image
app.post('/api/gemini/generate-image', async (req, res) => {
  try {
    const { prompt, aspectRatio = '3:4', style } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const enhancedPrompt = style
      ? `${prompt}. High fashion bespoke couture atelier style, African luxury sartorial design, editorial magazine lighting, 8k resolution, authentic craftsmanship.`
      : prompt;

    // Call Gemini Image model
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image',
      contents: {
        parts: [
          {
            text: enhancedPrompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio as any,
          imageSize: '1K',
        },
      },
    });

    let generatedImageUrl = null;
    let textFeedback = '';

    const parts = response.candidates?.[0]?.content?.parts || [];
    for (const part of parts) {
      if (part.inlineData && part.inlineData.data) {
        const mime = part.inlineData.mimeType || 'image/png';
        generatedImageUrl = `data:${mime};base64,${part.inlineData.data}`;
      } else if (part.text) {
        textFeedback += part.text;
      }
    }

    if (!generatedImageUrl) {
      return res.status(500).json({
        error: 'No image was returned by the model',
        details: textFeedback || 'Please try a different prompt',
      });
    }

    return res.json({
      imageUrl: generatedImageUrl,
      feedback: textFeedback,
      prompt: enhancedPrompt,
      aspectRatio,
    });
  } catch (error: any) {
    console.error('Error generating image with Gemini:', error);
    return res.status(500).json({
      error: error.message || 'Image generation failed',
    });
  }
});

// API: Edit existing image using gemini-3.1-flash-image
app.post('/api/gemini/edit-image', async (req, res) => {
  try {
    const { prompt, imageBase64, mimeType = 'image/jpeg', aspectRatio = '3:4' } = req.body;

    if (!prompt || !imageBase64) {
      return res.status(400).json({ error: 'Both prompt and imageBase64 are required' });
    }

    // Strip data URL header if included
    const cleanBase64 = imageBase64.replace(/^data:image\/[a-zA-Z]+;base64,/, '');

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: cleanBase64,
              mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio as any,
          imageSize: '1K',
        },
      },
    });

    let editedImageUrl = null;
    let textFeedback = '';

    const parts = response.candidates?.[0]?.content?.parts || [];
    for (const part of parts) {
      if (part.inlineData && part.inlineData.data) {
        const mime = part.inlineData.mimeType || 'image/png';
        editedImageUrl = `data:${mime};base64,${part.inlineData.data}`;
      } else if (part.text) {
        textFeedback += part.text;
      }
    }

    if (!editedImageUrl) {
      return res.status(500).json({
        error: 'No edited image was returned by the model',
        details: textFeedback || 'Please try different edit instructions',
      });
    }

    return res.json({
      imageUrl: editedImageUrl,
      feedback: textFeedback,
      prompt,
    });
  } catch (error: any) {
    console.error('Error editing image with Gemini:', error);
    return res.status(500).json({
      error: error.message || 'Image editing failed',
    });
  }
});

// Setup Vite middleware in dev or static serving in prod
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Junior Zeus Style server running on http://localhost:${PORT}`);
  });
}

startServer();
