import React, { useState, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Sparkles,
  Wand2,
  Upload,
  Download,
  MessageCircle,
  RefreshCw,
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle,
  SlidersHorizontal,
  Layers,
  ArrowRight
} from 'lucide-react';
import {
  LuxuryStarAnimation,
  TailorScissorsAnimation,
  MeasuringTapeAnimation
} from '../lottie/LottieAnimations';

export const AtelierStudioModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose
}) => {
  const { language, creations, t, siteSettings, getWhatsAppUrl } = useApp();

  const [activeMode, setActiveMode] = useState<'generate' | 'edit'>('generate');
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState<'3:4' | '1:1' | '16:9'>('3:4');
  const [selectedStylePreset, setSelectedStylePreset] = useState<string>('ceremonie');

  // Edit Mode state
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Generation status
  const [isLoading, setIsLoading] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const presets = [
    {
      id: 'ceremonie',
      labelFr: 'Haute Cérémonie Yaoundé',
      labelEn: 'Ceremonial Gala',
      promptFr: 'Costume de cérémonie d’apparat pour gala à Yaoundé, coupe structurée asymétrique, finitions soignées en fil bronze sur lainage noir ébène.',
      promptEn: 'Ceremonial couture gala ensemble in Yaoundé, structured asymmetric silhouette with bronze thread needlework on deep black wool.'
    },
    {
      id: 'boubou',
      labelFr: 'Tunique Contemporaine Épurée',
      labelEn: 'Contemporary Tunic',
      promptFr: 'Tunique contemporaine minimaliste en coton damassé lourd ivoire chaud, col officier net, tombé fluide sans surcharge.',
      promptEn: 'Minimalist contemporary tunic in heavy warm ivory damask cotton, mandarin collar, fluid architectural drape.'
    },
    {
      id: 'croisee',
      labelFr: 'Veste Croisée Sartoriale',
      labelEn: 'Sartorial Double-Breasted',
      promptFr: 'Veste de costume croisée à revers généreux en pointe, drap de laine brun cacao, surpiqûres sellier faites main.',
      promptEn: 'Double-breasted jacket with wide peak lapels in cacao brown wool twill, handmade saddle topstitching.'
    },
    {
      id: 'broderie',
      labelFr: 'Détail Broderies Prestige',
      labelEn: 'Artisanal Embroidery',
      promptFr: 'Gros plan macro sur des broderies géométriques artisanales au fil d’or et bronze sur un col de veste d’apparat africaine.',
      promptEn: 'Macro close-up of geometric artisanal gold and bronze thread embroidery on the collar of an African prestige jacket.'
    }
  ];

  const handleApplyPreset = (p: typeof presets[0]) => {
    setSelectedStylePreset(p.id);
    setPrompt(language === 'fr' ? p.promptFr : p.promptEn);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setSourceImage(event.target?.result as string);
      setActiveMode('edit');
    };
    reader.readAsDataURL(file);
  };

  const handleSelectFromCatalogue = (imgUrl: string) => {
    setSourceImage(imgUrl);
    setActiveMode('edit');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);
    setResultImage(null);

    try {
      const endpoint = activeMode === 'generate' ? '/api/gemini/generate-image' : '/api/gemini/edit-image';
      const payload: any = {
        prompt,
        aspectRatio,
        style: true
      };

      if (activeMode === 'edit') {
        if (!sourceImage) {
          setError(language === 'fr' ? 'Veuillez d’abord sélectionner une image source à retoucher.' : 'Please select a source image to edit.');
          setIsLoading(false);
          return;
        }
        payload.imageBase64 = sourceImage;
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Erreur lors du traitement de l’image');
      }

      setResultImage(data.imageUrl);
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue lors de la génération de l’esquisse.');
    } finally {
      setIsLoading(false);
    }
  };

  const buildWhatsAppSketchLink = () => {
    const number = siteSettings.whatsappNumber;
    const msg =
      language === 'fr'
        ? `Bonjour Junior Zeus Style, j’ai imaginé une esquisse de création sur votre Studio Virtuel : "${prompt.slice(0, 100)}...". Pouvons-nous échanger pour réaliser cette pièce sur mesure à l’atelier ?`
        : `Hello Junior Zeus Style, I designed a bespoke concept on your Atelier Studio: "${prompt.slice(0, 100)}...". Can we discuss tailoring this custom creation at your atelier?`;
    return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B0B0C]/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#F5F1E8] dark:bg-[#111113] text-[#0B0B0C] dark:text-[#F5F1E8] border border-[#9C7A4B]/40 rounded-xs shadow-2xl p-6 sm:p-8 my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#3C2C26]/10 dark:border-[#C8B79C]/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#9C7A4B]/15 text-[#9C7A4B] rounded-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-editorial text-2xl font-bold tracking-tight text-[#0B0B0C] dark:text-[#F5F1E8]">
                  {language === 'fr' ? 'Studio de Conception & Retouche Haute Couture' : 'Bespoke Design & Tailoring Studio'}
                </h2>
                <span className="text-[10px] font-sans uppercase font-bold tracking-wider px-2 py-0.5 bg-[#9C7A4B] text-white rounded-full">
                  Atelier Virtuel
                </span>
              </div>
              <p className="text-xs font-sans text-[#3C2C26]/75 dark:text-[#C8B79C]/75">
                {language === 'fr'
                  ? 'Générez de nouvelles silhouettes exclusives ou retouchez vos croquis et pièces pour votre confection sur mesure à Yaoundé.'
                  : 'Design exclusive silhouettes or preview tailored custom garments for bespoke crafting in Yaoundé.'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#0B0B0C] dark:text-[#F5F1E8] hover:text-[#9C7A4B] transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-2 py-4 border-b border-[#3C2C26]/10 dark:border-[#C8B79C]/10 text-xs font-sans">
          <button
            onClick={() => setActiveMode('generate')}
            className={`px-4 py-2 rounded-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeMode === 'generate'
                ? 'bg-[#0B0B0C] text-[#F5F1E8] dark:bg-[#F5F1E8] dark:text-[#0B0B0C] shadow-sm'
                : 'text-[#3C2C26]/75 dark:text-[#C8B79C]/75 hover:text-[#0B0B0C] dark:hover:text-[#F5F1E8]'
            }`}
          >
            <Wand2 className="w-3.5 h-3.5 text-[#9C7A4B]" />
            <span>{language === 'fr' ? '1. Créer une nouvelle silhouette' : '1. Create New Silhouette'}</span>
          </button>

          <button
            onClick={() => setActiveMode('edit')}
            className={`px-4 py-2 rounded-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeMode === 'edit'
                ? 'bg-[#0B0B0C] text-[#F5F1E8] dark:bg-[#F5F1E8] dark:text-[#0B0B0C] shadow-sm'
                : 'text-[#3C2C26]/75 dark:text-[#C8B79C]/75 hover:text-[#0B0B0C] dark:hover:text-[#F5F1E8]'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#9C7A4B]" />
            <span>{language === 'fr' ? '2. Retoucher une pièce existante' : '2. Edit Existing Garment'}</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto py-6 pr-1 space-y-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls Column */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* If in Edit Mode: source image selector */}
              {activeMode === 'edit' && (
                <div className="p-4 bg-[#EFEAE0]/60 dark:bg-[#18181A]/60 rounded-xs border border-[#3C2C26]/10 dark:border-[#C8B79C]/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#9C7A4B]">
                      {language === 'fr' ? 'Image source à retoucher' : 'Source image to edit'}
                    </span>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="text-xs font-sans text-[#9C7A4B] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Upload className="w-3 h-3" />
                      <span>{language === 'fr' ? 'Télécharger une photo' : 'Upload photo'}</span>
                    </button>
                  </div>

                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />

                  {sourceImage ? (
                    <div className="relative aspect-[4/3] rounded-xs overflow-hidden border border-[#9C7A4B]/40 max-h-48">
                      <img src={sourceImage} alt="Source" className="w-full h-full object-cover" />
                      <button
                        onClick={() => setSourceImage(null)}
                        className="absolute top-2 right-2 p-1 bg-black/70 text-white rounded-full hover:bg-black"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-[11px] font-sans text-[#3C2C26]/70 dark:text-[#C8B79C]/70">
                        {language === 'fr'
                          ? 'Choisissez une pièce du catalogue Junior Zeus Style ou importez une photo d’essayage :'
                          : 'Select a garment from the catalogue or upload your fitting photo:'}
                      </p>
                      <div className="grid grid-cols-4 gap-2">
                        {creations.slice(0, 4).map((c) => (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => handleSelectFromCatalogue(c.coverImage)}
                            className="aspect-square rounded-xs overflow-hidden border border-[#3C2C26]/20 hover:border-[#9C7A4B] transition-colors relative group cursor-pointer"
                          >
                            <img src={c.coverImage} alt={t(c.title)} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-[10px] font-bold">
                              Choisir
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Style Presets (only in generate mode) */}
              {activeMode === 'generate' && (
                <div className="space-y-2">
                  <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#9C7A4B]">
                    {language === 'fr' ? 'Inspirations prédéfinies :' : 'Curated Style Presets:'}
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {presets.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => handleApplyPreset(p)}
                        className={`p-2.5 text-left text-xs font-sans rounded-xs border transition-all cursor-pointer ${
                          selectedStylePreset === p.id
                            ? 'border-[#9C7A4B] bg-[#9C7A4B]/10 font-bold text-[#0B0B0C] dark:text-[#F5F1E8]'
                            : 'border-[#3C2C26]/10 dark:border-[#C8B79C]/10 bg-[#FBFAF7] dark:bg-[#18181A] hover:border-[#9C7A4B]/50'
                        }`}
                      >
                        <span className="block">{language === 'fr' ? p.labelFr : p.labelEn}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Main Prompt Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-sans font-bold text-[#0B0B0C] dark:text-[#F5F1E8] mb-1.5">
                    {activeMode === 'generate'
                      ? (language === 'fr' ? 'Description détaillée de la silhouette souhaitée *' : 'Detailed prompt for the silhouette *')
                      : (language === 'fr' ? 'Consignes de retouche / modifications *' : 'Edit instructions *')}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={
                      activeMode === 'generate'
                        ? (language === 'fr'
                            ? 'Ex: Veste de costume croisée en lin brun cacao, revers larges à cran aigu, boutons laiton gravés et coupe ajustée contemporaine...'
                            : 'Ex: Double-breasted jacket in cacao brown linen, wide peak lapels, custom brass buttons, modern slim cut...')
                        : (language === 'fr'
                            ? 'Ex: Remplacer les revers par du satin bronze, ajouter des broderies fines ton sur ton sur les épaules...'
                            : 'Ex: Change lapels to bronze satin, add tonal embroidery on shoulders...')
                    }
                    className="w-full p-3 text-xs font-sans bg-[#FBFAF7] dark:bg-[#18181A] border border-[#3C2C26]/20 dark:border-[#C8B79C]/20 rounded-xs focus:outline-none focus:border-[#9C7A4B] text-[#0B0B0C] dark:text-[#F5F1E8]"
                  />
                </div>

                {/* Aspect Ratio Selector */}
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="text-[#3C2C26]/75 dark:text-[#C8B79C]/75 font-medium">
                    {language === 'fr' ? 'Format de l’image :' : 'Aspect ratio:'}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {(['3:4', '1:1', '16:9'] as const).map((ratio) => (
                      <button
                        key={ratio}
                        type="button"
                        onClick={() => setAspectRatio(ratio)}
                        className={`px-3 py-1 rounded-xs transition-colors cursor-pointer ${
                          aspectRatio === ratio
                            ? 'bg-[#9C7A4B] text-white font-bold'
                            : 'bg-[#EFEAE0] dark:bg-[#18181A] text-[#3C2C26]/75 dark:text-[#C8B79C]/75 hover:text-[#0B0B0C] dark:hover:text-[#F5F1E8]'
                        }`}
                      >
                        {ratio === '3:4' ? '3:4 (Portrait)' : ratio === '1:1' ? '1:1 (Carré)' : '16:9 (Défilé)'}
                      </button>
                    ))}
                  </div>
                </div>

                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400 text-xs font-sans rounded-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-[#0B0B0C] dark:bg-[#F5F1E8] text-white dark:text-[#0B0B0C] hover:bg-[#9C7A4B] dark:hover:bg-[#9C7A4B] dark:hover:text-white rounded-sm text-xs font-sans uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-[#9C7A4B]" />
                      <span>{language === 'fr' ? 'Création de l’esquisse en cours...' : 'Designing bespoke concept...'}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[#9C7A4B]" />
                      <span>
                        {activeMode === 'generate'
                          ? (language === 'fr' ? 'Générer la silhouette haute couture' : 'Generate Bespoke Silhouette')
                          : (language === 'fr' ? 'Appliquer les retouches sur mesure' : 'Apply Bespoke Edits')}
                      </span>
                    </>
                  )}
                </button>
              </form>

            </div>

            {/* Right Result Preview Column */}
            <div className="lg:col-span-6 bg-[#EFEAE0]/50 dark:bg-[#070708]/70 p-5 rounded-xs border border-[#3C2C26]/10 dark:border-[#C8B79C]/10 min-h-[420px] flex flex-col justify-between">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="font-bold uppercase tracking-wider text-[#9C7A4B] flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>{language === 'fr' ? 'Aperçu du rendu atelier' : 'Atelier Render Preview'}</span>
                  </span>
                  {resultImage && (
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Généré avec succès</span>
                    </span>
                  )}
                </div>

                <div className="relative aspect-[3/4] max-h-[380px] mx-auto rounded-xs overflow-hidden border border-[#3C2C26]/15 dark:border-[#C8B79C]/15 bg-[#FBFAF7] dark:bg-[#18181A] flex items-center justify-center">
                  {isLoading ? (
                    <div className="text-center p-6 space-y-3 flex flex-col items-center">
                      <TailorScissorsAnimation size={60} />
                      <p className="font-editorial text-lg font-bold text-[#0B0B0C] dark:text-[#F5F1E8]">
                        {language === 'fr' ? 'Le modèle façonne votre silhouette...' : 'Model is tailoring your silhouette...'}
                      </p>
                      <p className="text-xs font-sans text-[#3C2C26]/60 dark:text-[#C8B79C]/60 max-w-xs">
                        {language === 'fr'
                          ? 'Application des textures de lainage, proportions anatomiques et éclairage atelier.'
                          : 'Applying cloth textures, anatomical tailoring proportions, and atelier light.'}
                      </p>
                    </div>
                  ) : resultImage ? (
                    <img
                      src={resultImage}
                      alt="Résultat généré"
                      className="w-full h-full object-cover animate-fade-in"
                    />
                  ) : (
                    <div className="text-center p-8 text-[#3C2C26]/60 dark:text-[#C8B79C]/60 space-y-2">
                      <LuxuryStarAnimation size={44} className="mx-auto opacity-70" />
                      <p className="font-editorial text-base font-semibold">
                        {language === 'fr' ? 'Votre création apparaîtra ici' : 'Your creation will appear here'}
                      </p>
                      <p className="text-xs font-sans max-w-xs">
                        {language === 'fr'
                          ? 'Saisissez votre inspiration à gauche ou choisissez un modèle prédéfini pour lancer la confection virtuelle.'
                          : 'Enter your inspiration prompt on the left to launch the virtual tailoring render.'}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons if image is generated */}
              {resultImage && (
                <div className="mt-4 pt-4 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10 space-y-2">
                  <div className="flex items-center gap-3">
                    <a
                      href={buildWhatsAppSketchLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-[#0B0B0C] rounded-xs text-xs font-sans uppercase tracking-wider font-bold inline-flex items-center justify-center gap-2 transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{language === 'fr' ? 'Envoyer l’esquisse sur WhatsApp' : 'Send sketch to WhatsApp'}</span>
                    </a>

                    <a
                      href={resultImage}
                      download={`junior-zeus-esquisse-${Date.now()}.png`}
                      className="p-3 bg-[#0B0B0C] dark:bg-[#F5F1E8] text-white dark:text-[#0B0B0C] rounded-xs hover:bg-[#9C7A4B] transition-colors cursor-pointer"
                      title="Télécharger l'image haute définition"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-[11px] font-sans text-center text-[#3C2C26]/60 dark:text-[#C8B79C]/60">
                    {language === 'fr'
                      ? 'L’esquisse peut être transmise à Ariel Junior pour devis et choix des matières réelles à Yaoundé.'
                      : 'Share this design with Ariel Junior to review cloth swatches and quote in Yaoundé.'}
                  </p>
                </div>
              )}

            </div>

          </div>

        </div>

        {/* Footer info bar */}
        <div className="pt-4 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans text-[#3C2C26]/70 dark:text-[#C8B79C]/70">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>
              Maison Junior Zeus Style · Confection sur mesure à Yaoundé
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 border border-[#3C2C26]/20 dark:border-[#C8B79C]/20 rounded-xs font-bold hover:bg-[#9C7A4B] hover:text-white transition-colors cursor-pointer"
          >
            Fermer le Studio
          </button>
        </div>

      </div>
    </div>
  );
};
