import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const SANITY_CONFIG = {
  projectId: 'nx00t04k',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // `false` if you want to ensure fresh data
};

export const sanityClient = createClient(SANITY_CONFIG);

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

/**
 * Safe fetcher from Sanity with instant fallback if project dataset isn't populated yet
 */
export async function fetchSanityData<T>(query: string, params: Record<string, any> = {}, fallback: T): Promise<T> {
  try {
    const data = await sanityClient.fetch(query, params);
    if (data && (Array.isArray(data) ? data.length > 0 : Object.keys(data).length > 0)) {
      return data;
    }
    return fallback;
  } catch (err) {
    // If dataset is uninitialized or private, seamlessly use the initial curated state
    return fallback;
  }
}
