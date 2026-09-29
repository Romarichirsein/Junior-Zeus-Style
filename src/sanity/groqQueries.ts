/**
 * Requêtes GROQ pour Sanity CMS v3+
 * Utilisables directement dans Next.js (getStaticProps / fetch / sanityClient)
 */

export const siteSettingsQuery = `
  *[_type == "siteSettings"][0]{
    brandName,
    founderName,
    tagline,
    manifesto,
    primaryPhone,
    secondaryPhone,
    officialEmail,
    addressPrimary,
    socialLinks,
    seoGlobal{
      metaTitleFr,
      metaTitleEn,
      metaDescriptionFr,
      metaDescriptionEn,
      "ogImageUrl": ogImage.asset->url
    }
  }
`;

export const homePageCreationsQuery = `
  *[_type == "creation" && isFeatured == true] | order(year desc)[0...6]{
    _id,
    "slug": slug.current,
    title,
    category,
    year,
    status,
    summary,
    materials,
    priceEstimate,
    "coverImageUrl": coverImage.asset->url,
    "collection": collection->{
      title,
      "slug": slug.current
    }
  }
`;

export const allCreationsQuery = `
  *[_type == "creation"] | order(year desc, _createdAt desc){
    _id,
    "slug": slug.current,
    title,
    category,
    year,
    status,
    summary,
    description,
    materials,
    craftDetails,
    priceEstimate,
    "coverImageUrl": coverImage.asset->url,
    "galleryUrls": gallery[].asset->url,
    "collection": collection->{
      title,
      "slug": slug.current
    }
  }
`;

export const creationBySlugQuery = `
  *[_type == "creation" && slug.current == $slug][0]{
    _id,
    "slug": slug.current,
    title,
    category,
    year,
    status,
    summary,
    description,
    materials,
    craftDetails,
    priceEstimate,
    "coverImageUrl": coverImage.asset->url,
    "galleryUrls": gallery[].asset->url,
    "collection": collection->{
      title,
      "slug": slug.current,
      description
    },
    "similarPieces": *[_type == "creation" && category == ^.category && _id != ^._id][0...3]{
      _id,
      "slug": slug.current,
      title,
      category,
      "coverImageUrl": coverImage.asset->url
    }
  }
`;

export const allCollectionsQuery = `
  *[_type == "collection"] | order(year desc){
    _id,
    "slug": slug.current,
    title,
    season,
    year,
    description,
    "coverImageUrl": coverImage.asset->url,
    "creationsCount": count(*[_type == "creation" && references(^._id)])
  }
`;

export const latestPostsQuery = `
  *[_type == "post"] | order(publishedAt desc)[0...3]{
    _id,
    "slug": slug.current,
    title,
    category,
    publishedAt,
    readTime,
    excerpt,
    "coverImageUrl": coverImage.asset->url,
    author
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    "slug": slug.current,
    title,
    category,
    publishedAt,
    readTime,
    excerpt,
    body,
    "coverImageUrl": coverImage.asset->url,
    author,
    "relatedPosts": *[_type == "post" && category == ^.category && _id != ^._id][0...2]{
      _id,
      "slug": slug.current,
      title,
      publishedAt,
      "coverImageUrl": coverImage.asset->url
    }
  }
`;
