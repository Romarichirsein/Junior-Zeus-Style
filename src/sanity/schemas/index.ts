export const siteSettingsSchema = {
  name: 'siteSettings',
  title: 'Paramètres du Site / Site Settings',
  type: 'document',
  fields: [
    {
      name: 'brandName',
      title: 'Nom de la marque',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      initialValue: 'Junior Zeus Style'
    },
    {
      name: 'founderName',
      title: 'Fondateur / Styliste',
      type: 'string',
      initialValue: 'Ariel Junior Nzesseu'
    },
    {
      name: 'tagline',
      title: 'Slogan / Tagline',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Français', type: 'string' },
        { name: 'en', title: 'Anglais', type: 'string' }
      ]
    },
    {
      name: 'manifesto',
      title: 'Manifeste de marque',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Français', type: 'text', rows: 2 },
        { name: 'en', title: 'Anglais', type: 'text', rows: 2 }
      ]
    },
    {
      name: 'primaryPhone',
      title: 'Téléphone WhatsApp Principal',
      type: 'string',
      initialValue: '+237 691 087 382'
    },
    {
      name: 'secondaryPhone',
      title: 'Téléphone secondaire (à confirmer)',
      type: 'string',
      initialValue: '+237 671 621 140'
    },
    {
      name: 'officialEmail',
      title: 'E-mail professionnel public',
      type: 'string',
      initialValue: 'contact@juniorzeusstyle.com'
    },
    {
      name: 'addressPrimary',
      title: 'Adresse physique principale (Yaoundé)',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Français', type: 'string' },
        { name: 'en', title: 'Anglais', type: 'string' }
      ]
    },
    {
      name: 'socialLinks',
      title: 'Réseaux Sociaux',
      type: 'object',
      fields: [
        { name: 'tiktok', title: 'Lien TikTok', type: 'url' },
        { name: 'facebook', title: 'Lien Facebook / Messenger', type: 'url' },
        { name: 'whatsapp', title: 'Lien direct WhatsApp', type: 'url' }
      ]
    },
    {
      name: 'seoGlobal',
      title: 'SEO & Référencement Global',
      type: 'object',
      fields: [
        { name: 'metaTitleFr', title: 'Titre SEO FR', type: 'string' },
        { name: 'metaTitleEn', title: 'Titre SEO EN', type: 'string' },
        { name: 'metaDescriptionFr', title: 'Meta Description FR', type: 'text', rows: 2 },
        { name: 'metaDescriptionEn', title: 'Meta Description EN', type: 'text', rows: 2 },
        { name: 'ogImage', title: 'Image de partage social (Open Graph)', type: 'image' }
      ]
    }
  ]
};

export const creationSchema = {
  name: 'creation',
  title: 'Création / Garment',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nom de la création',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Titre FR', type: 'string', validation: (Rule: any) => Rule.required() },
        { name: 'en', title: 'Titre EN', type: 'string' }
      ]
    },
    {
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: {
        source: 'title.fr',
        maxLength: 96
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Haute Couture & Cérémonie', value: 'ceremonie' },
          { title: 'Sur-mesure Sartorial', value: 'sur-mesure' },
          { title: 'Prêt-à-porter d’Apparat', value: 'pret-a-porter' },
          { title: 'Accessoires & Broderies', value: 'accessoires' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'collection',
      title: 'Collection associée',
      type: 'reference',
      to: [{ type: 'collection' }]
    },
    {
      name: 'year',
      title: 'Année de création',
      type: 'number',
      initialValue: 2026
    },
    {
      name: 'status',
      title: 'Statut de disponibilité',
      type: 'string',
      options: {
        list: [
          { title: 'Disponible', value: 'disponible' },
          { title: 'Sur commande (Sur-mesure)', value: 'sur_commande' },
          { title: 'Pièce unique', value: 'piece_unique' },
          { title: 'Archives atelier', value: 'archives' }
        ]
      },
      initialValue: 'sur_commande'
    },
    {
      name: 'summary',
      title: 'Résumé court',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Résumé FR', type: 'string' },
        { name: 'en', title: 'Résumé EN', type: 'string' }
      ]
    },
    {
      name: 'description',
      title: 'Description narrative de la pièce',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Description FR', type: 'text', rows: 4 },
        { name: 'en', title: 'Description EN', type: 'text', rows: 4 }
      ]
    },
    {
      name: 'materials',
      title: 'Matières & Étoffes',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Matières FR', type: 'string' },
        { name: 'en', title: 'Matières EN', type: 'string' }
      ]
    },
    {
      name: 'craftDetails',
      title: 'Détails de confection / Savoir-faire',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Détails FR', type: 'string' },
        { name: 'en', title: 'Détails EN', type: 'string' }
      ]
    },
    {
      name: 'coverImage',
      title: 'Photographie principale (réelle)',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Texte alternatif descriptif', type: 'string' }
      ]
    },
    {
      name: 'gallery',
      title: 'Galerie d’angles & détails (3 à 5 photos)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    },
    {
      name: 'isFeatured',
      title: 'Mettre en lumière sur la page d’accueil',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'priceEstimate',
      title: 'Mention tarifaire (ex: "Sur devis atelier")',
      type: 'string'
    }
  ]
};

export const collectionSchema = {
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre de la collection',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Titre FR', type: 'string', validation: (Rule: any) => Rule.required() },
        { name: 'en', title: 'Titre EN', type: 'string' }
      ]
    },
    {
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: { source: 'title.fr', maxLength: 96 }
    },
    {
      name: 'season',
      title: 'Saison / Édition',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Saison FR (ex: Haute Couture 2026)', type: 'string' },
        { name: 'en', title: 'Saison EN', type: 'string' }
      ]
    },
    {
      name: 'year',
      title: 'Année',
      type: 'number'
    },
    {
      name: 'description',
      title: 'Texte éditorial de présentation',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Description FR', type: 'text', rows: 3 },
        { name: 'en', title: 'Description EN', type: 'text', rows: 3 }
      ]
    },
    {
      name: 'coverImage',
      title: 'Visuel de campagne de la collection',
      type: 'image',
      options: { hotspot: true }
    }
  ]
};

export const postSchema = {
  name: 'post',
  title: 'Actualité / Journal Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre de l’article',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Titre FR', type: 'string', validation: (Rule: any) => Rule.required() },
        { name: 'en', title: 'Titre EN', type: 'string' }
      ]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title.fr', maxLength: 96 }
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          'Collection',
          'Coulisses',
          'Savoir-faire',
          'Événement',
          'Inspiration'
        ]
      }
    },
    {
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'date'
    },
    {
      name: 'readTime',
      title: 'Temps de lecture',
      type: 'object',
      fields: [
        { name: 'fr', title: 'FR (ex: 4 min de lecture)', type: 'string' },
        { name: 'en', title: 'EN (ex: 4 min read)', type: 'string' }
      ]
    },
    {
      name: 'excerpt',
      title: 'Extrait / Chapô',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Extrait FR', type: 'text', rows: 2 },
        { name: 'en', title: 'Extrait EN', type: 'text', rows: 2 }
      ]
    },
    {
      name: 'body',
      title: 'Contenu riche de l’article',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }]
    },
    {
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'featured',
      title: 'Article vedette',
      type: 'boolean',
      initialValue: false
    }
  ]
};

export const aboutPageSchema = {
  name: 'aboutPage',
  title: 'Page À Propos',
  type: 'document',
  fields: [
    {
      name: 'portraitImage',
      title: 'Portrait réel du créateur (Ariel Junior Nzesseu)',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'biography',
      title: 'Histoire & Vision du créateur',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Texte FR', type: 'text', rows: 5 },
        { name: 'en', title: 'Texte EN', type: 'text', rows: 5 }
      ]
    },
    {
      name: 'atelierGallery',
      title: 'Photos authentiques de l’atelier à Yaoundé',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    }
  ]
};

export const contactPageSchema = {
  name: 'contactPage',
  title: 'Page Contact',
  type: 'document',
  fields: [
    {
      name: 'instructions',
      title: 'Consignes de rendez-vous',
      type: 'object',
      fields: [
        { name: 'fr', title: 'FR', type: 'text', rows: 3 },
        { name: 'en', title: 'EN', type: 'text', rows: 3 }
      ]
    }
  ]
};

export const schemaTypes = [
  siteSettingsSchema,
  creationSchema,
  collectionSchema,
  postSchema,
  aboutPageSchema,
  contactPageSchema
];
