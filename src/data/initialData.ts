import { Creation, Collection, JournalArticle, SiteSettings, Service, Testimonial, FAQItem } from '../types';

export const INITIAL_SITE_SETTINGS: SiteSettings = {
  brandName: 'Junior Zeus Style',
  founderName: 'Ariel Junior Nzesseu (« Junior Zeus »)',
  tagline: {
    fr: 'Ma passion vous sublimer · Haute couture mixte, confection & création sur mesure à Yaoundé.',
    en: 'My passion is to sublimate you · Haute couture & bespoke tailoring atelier in Yaoundé.'
  },
  manifesto: {
    fr: 'Ma passion vous sublimer — Votre beauté, notre satisfaction. Des silhouettes pensées avec intention, façonnées pour marquer les esprits.',
    en: 'My passion is to sublimate you — Your beauty, our satisfaction. Silhouettes designed with intent, tailored to leave an enduring mark.'
  },
  primaryPhone: '+237 691 087 382',
  secondaryPhone: '+237 691 087 382',
  whatsappNumber: '237691087382',
  officialEmail: 'juniortamno13@gmail.com',
  backupEmail: 'contact@juniorzeusstyle.com',
  addressPrimary: {
    fr: 'Yaoundé - Descente Éleveur, face Turbo Distribution Center',
    en: 'Yaoundé - Descente Éleveur, opposite Turbo Distribution Center'
  },
  addressSecondary: {
    fr: 'Descente Éleveur, face Turbo Distribution Center, Yaoundé, Cameroun',
    en: 'Descente Éleveur, opposite Turbo Distribution Center, Yaoundé, Cameroon'
  },
  openingHours: {
    fr: 'Lundi – Samedi : 09h00 – 19h00 · Sur rendez-vous pour les essayages',
    en: 'Monday – Saturday: 09:00 – 19:00 · By appointment for bespoke fittings'
  },
  socials: {
    facebook: 'https://facebook.com/juniorzeusstyle',
    instagram: 'https://instagram.com/juniorzeusstyle',
    whatsapp: 'https://wa.me/237691087382',
    tiktok: 'https://tiktok.com/@juniorzeusstyle'
  },
  whatsappTemplateCatalog: {
    fr: 'Bonjour Junior Zeus Style, je souhaite obtenir des informations sur la création : [NOM_DE_LA_CREATION].',
    en: 'Hello Junior Zeus Style, I would like more information about this creation: [CREATION_NAME].'
  },
  whatsappTemplateGeneral: {
    fr: 'Bonjour Junior Zeus Style, je souhaiterais avoir plus d’informations sur vos prestations (haute couture, robes de mariée, tenues de ville ou formation).',
    en: 'Hello Junior Zeus Style, I would like more information about your services (haute couture, bridal gowns, urban wear or training).'
  }
};

export const INITIAL_COLLECTIONS: Collection[] = [
  {
    id: 'col-ongola',
    slug: 'renaissance-ongola',
    title: {
      fr: 'Renaissance Ongola',
      en: 'Ongola Renaissance'
    },
    season: {
      fr: 'Haute Couture 2026',
      en: 'Haute Couture 2026'
    },
    year: 2026,
    description: {
      fr: 'Une exploration des lignes impériales et de la posture contemporaine camerounaise, alliant laines peignées et finitions brodées au fil bronze.',
      en: 'An exploration of imperial lines and contemporary Cameroonian posture, blending worsted wools with bronze-threaded artisanal finishes.'
    },
    coverImage: encodeURI('/Junior Zeus Style/hero.jpg'),
    piecesCount: 6
  },
  {
    id: 'col-ligne-zeus',
    slug: 'ligne-zeus-sartorial',
    title: {
      fr: 'Ligne Zeus Sartoriale',
      en: 'Zeus Sartorial Line'
    },
    season: {
      fr: 'Édition Permanente',
      en: 'Permanent Edition'
    },
    year: 2025,
    description: {
      fr: 'Costumes de cérémonie, vestes asymétriques et tenues de prestige taillées sur les mensurations précises de chaque client.',
      en: 'Ceremonial suits, asymmetric lapel jackets, and prestige attire cut to the precise anatomical measurements of each patron.'
    },
    coverImage: encodeURI('/Junior Zeus Style/hero 1.jpg'),
    piecesCount: 8
  }
];

export const INITIAL_CREATIONS: Creation[] = [
  {
    id: "cr-mariee-reine-astrid",
    slug: "robe-mariee-reine-astrid",
    title: {
      fr: "Robe de Mariée Princesse Impériale \"Reine Astrid\"",
      en: "Imperial Princess Bridal Gown \"Queen Astrid\""
    },
    category: "robe-mariee",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Haute Cérémonie Nuptiale",
      en: "Haute Bridal Ceremony"
    },
    year: 2026,
    status: "disponible",
    summary: {
      fr: "Robe de mariée grand volume féerique avec bustier finement perlé et traîne royale.",
      en: "Fairytale royal ballgown with intricately beaded corset bodice and majestic chapel train."
    },
    description: {
      fr: "Confection d’exception pensée pour sublimer la mariée lors de son grand jour. Corset structuré baleiné à la main épousant parfaitement la taille, orné de dentelle perlée et de cristaux scintillants, s’ouvrant sur une jupe monumentale en organza et tulle de soie.",
      en: "Exceptional creation tailored to magnify the bride on her unforgettable day. Hand-boned corset contouring the waistline, embellished with beaded lace and crystals, cascading into a sweeping organza and silk tulle skirt."
    },
    materials: {
      fr: "Dentelle de Calais perlée main, tulle de soie multicouche, organza satiné, doublure coton peigné.",
      en: "Hand-beaded Calais lace, multi-tiered silk tulle, satin organza, breathable combed cotton lining."
    },
    craftDetails: {
      fr: "65 heures de main-d’œuvre d’art à l’atelier de Yaoundé. Finitions coutures anglaises et baleinage haute précision.",
      en: "65 hours of master craft in our Yaoundé atelier. French seams and high-precision anatomical boning."
    },
    estimatedLeadTime: {
      fr: "Sur mesure : 15 à 21 jours ouvrés · Location : Disponible immédiatement avec retouches",
      en: "Bespoke: 15 to 21 business days · Rental: Available immediately with in-house fitting"
    },
    coverImage: "/Junior%20Zeus%20Style/robe%20marriage/494678242_1262847085847760_4109750348111974452_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/robe%20marriage/494678242_1262847085847760_4109750348111974452_n.jpg",
      "/Junior%20Zeus%20Style/robe%20marriage/494695914_1262847289181073_8559951881502044025_n.jpg"
    ],
    isFeatured: true,
    priceEstimate: "Location : 95 000 FCFA · Confection sur mesure : 550 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-mariee-etoile-celeste",
    slug: "robe-mariee-sirene-etoile-celeste",
    title: {
      fr: "Robe Nuptiale Sirène Majestueuse \"Étoile Céleste\"",
      en: "Majestic Mermaid Bridal Gown \"Celestial Star\""
    },
    category: "robe-mariee",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Haute Cérémonie Nuptiale",
      en: "Haute Bridal Ceremony"
    },
    year: 2026,
    status: "disponible",
    summary: {
      fr: "Coupe sirène galbante soulignant la cambrure avec buste orné de nacre et traîne cathédrale.",
      en: "Figure-hugging mermaid silhouette highlighting posture with mother-of-pearl bodice and cathedral train."
    },
    description: {
      fr: "Une ode à la féminité et à la prestance. Cette robe sirène sculpte la silhouette avec une fluidité remarquable, prolongeant la démarche d’une somptueuse traîne bordée d’appliques florales cousues à la main.",
      en: "An ode to grace and majesty. This mermaid gown contours the silhouette with remarkable fluidity, extending movement into an opulent train edged with hand-stitched floral appliqués."
    },
    materials: {
      fr: "Satin mikado ivoire pur, guipure brodée, perles de verre et nacre fine.",
      en: "Pure ivory mikado satin, embroidered guipure, glass seed pearls and fine mother-of-pearl."
    },
    craftDetails: {
      fr: "Boutonnage dos à brides recouvertes de satin et découpe princesse ajustée au millimètre.",
      en: "Loop-fastened satin-covered back buttons and princess seam tailored to anatomical perfection."
    },
    estimatedLeadTime: {
      fr: "Sur mesure : 18 à 25 jours · Location : Disponible à l’atelier",
      en: "Bespoke: 18 to 25 days · Rental: Available at the atelier"
    },
    coverImage: "/Junior%20Zeus%20Style/robe%20marriage/494695914_1262847289181073_8559951881502044025_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/robe%20marriage/494695914_1262847289181073_8559951881502044025_n.jpg"
    ],
    isFeatured: true,
    priceEstimate: "Location : 110 000 FCFA · Confection sur mesure : 620 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-mariee-feerie-ongola",
    slug: "robe-nuptiale-feerie-ongola",
    title: {
      fr: "Robe Nuptiale Couture \"Féerie d’Ongola\"",
      en: "Couture Bridal Gown \"Ongola Reverie\""
    },
    category: "robe-mariee",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Haute Cérémonie Nuptiale",
      en: "Haute Bridal Ceremony"
    },
    year: 2026,
    status: "disponible",
    summary: {
      fr: "Décolleté cœur gracieux, corset drapé à la main et jupon vaporeux à volants déstructurés.",
      en: "Sweetheart neckline, hand-draped corset bodice and ethereal ruffled flowing skirt."
    },
    description: {
      fr: "Élégance aérienne et romantique pour les mariages contemporains. Le travail minutieux du drapé met en valeur le port de tête tout en garantissant un confort royal tout au long de la célébration.",
      en: "Airy romantic sophistication for contemporary weddings. Meticulous hand-draping frames posture while ensuring royal comfort throughout the joyous celebration."
    },
    materials: {
      fr: "Mousseline de soie, tulle illusion diamant, baleinage souple et doublure satin.",
      en: "Silk chiffon, diamond illusion tulle, flexible boning, and satin lining."
    },
    craftDetails: {
      fr: "Drapé asymétrique exécuté sur mannequin bois selon les règles traditionnelles du grand atelier.",
      en: "Asymmetric drapery constructed on wooden bust form following grand atelier heritage rules."
    },
    estimatedLeadTime: {
      fr: "Sur mesure : 14 à 20 jours ouvrés · Location : Prête à porter avec retouches",
      en: "Bespoke: 14 to 20 business days · Rental: Ready-to-wear with custom alterations"
    },
    coverImage: "/Junior%20Zeus%20Style/robe%20marriage/496126411_1266321042167031_236859799978794159_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/robe%20marriage/496126411_1266321042167031_236859799978794159_n.jpg"
    ],
    isFeatured: false,
    priceEstimate: "Location : 85 000 FCFA · Confection sur mesure : 480 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-mariee-royale-souveraine",
    slug: "robe-mariee-royale-souveraine",
    title: {
      fr: "Robe de Mariée Royale Grand Apparat \"Souveraine\"",
      en: "Royal Grand Apparat Bridal Gown \"Sovereign\""
    },
    category: "robe-mariee",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Haute Cérémonie Nuptiale",
      en: "Haute Bridal Ceremony"
    },
    year: 2026,
    status: "piece_unique",
    summary: {
      fr: "Chef-d’œuvre d’apparat aux incrustations florales 3D, manches royales et traîne impériale de 3 mètres.",
      en: "Grand apparat masterpiece with 3D floral inlays, royal statement sleeves and 3-meter imperial train."
    },
    description: {
      fr: "La quintessence de l’art couturier de Junior Zeus Style. Chaque pétale a été découpé et façonné un à un à la chaleur de fer à repasser en cuivre, créant un relief sculptural digne des plus grands mariages princiers.",
      en: "The pinnacle of Junior Zeus Style couture craftsmanship. Every single petal was shaped individually with heated brass irons, delivering sculptured relief worthy of princely celebrations."
    },
    materials: {
      fr: "Organza triple épaisseur, dentelle brodée de fils d’argent et paillettes mates, soie lourde.",
      en: "Triple-layer organza, silver-threaded embroidered lace with matte sequins, heavy silk."
    },
    craftDetails: {
      fr: "Plus de 90 heures de travail manuel. Pièce d’art unique entièrement montée dans nos ateliers de Yaoundé.",
      en: "Over 90 hours of manual craft. Unique art piece fully constructed in our Yaoundé atelier."
    },
    estimatedLeadTime: {
      fr: "Sur mesure : 25 à 35 jours · Location exclusive : Dès 150 000 FCFA",
      en: "Bespoke: 25 to 35 days · Exclusive rental: From 150,000 FCFA"
    },
    coverImage: "/Junior%20Zeus%20Style/robe%20marriage/557165903_1402493751883092_3002146552148991567_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/robe%20marriage/557165903_1402493751883092_3002146552148991567_n.jpg"
    ],
    isFeatured: true,
    priceEstimate: "Location exclusive : 150 000 FCFA · Confection sur mesure : 750 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-soiree-emeraude-sculptee",
    slug: "fourreau-de-gala-emeraude-traine-sculptee",
    title: {
      fr: "Fourreau de Gala Émeraude & Traîne Sculptée",
      en: "Emerald Gala Sheath & Sculpted Train"
    },
    category: "robe-soiree",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Soirées & Galas de Prestige",
      en: "Prestige Evening & Gala"
    },
    year: 2026,
    status: "disponible",
    summary: {
      fr: "Fourreau d’exception en satin vert émeraude intense avec fente haute et drapé croisé.",
      en: "Exceptional sheath in deep emerald satin featuring high leg slit and overlapping crossover drape."
    },
    description: {
      fr: "Une silhouette audacieuse conçue pour les tapis rouges et les grands galas. La teinte émeraude capte subtilement les projecteurs tandis que l’architecture du bustier assure une allure souveraine.",
      en: "A bold silhouette crafted for red carpets and grand galas. The deep emerald tone captures stage lights while structural corsetry imparts sovereign poise."
    },
    materials: {
      fr: "Satin lourd duchesse vert émeraude, doublure soie, baleines souples.",
      en: "Heavy emerald duchess satin, silk lining, flexible stays."
    },
    craftDetails: {
      fr: "Drapé sculpté à la main, fermeture éclair invisible et ourlet invisible cousu à la main.",
      en: "Hand-sculpted draping, invisible zipper and hand-stitched blind hem."
    },
    estimatedLeadTime: {
      fr: "Sur mesure : 10 à 14 jours ouvrés · Location : Disponible immédiatement",
      en: "Bespoke: 10 to 14 business days · Rental: Available immediately"
    },
    coverImage: "/Junior%20Zeus%20Style/robe%20de%20soiree/robe%201.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/robe%20de%20soiree/robe%201.jpg",
      "/Junior%20Zeus%20Style/robe%20de%20soiree/robe%201%20gallery.jpg"
    ],
    isFeatured: true,
    priceEstimate: "Location : 65 000 FCFA · Confection sur mesure : 260 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-soiree-velours-cristaux",
    slug: "robe-sirene-velours-nuit-cristaux",
    title: {
      fr: "Robe Sirène Velours Nuit & Cristaux Dorés",
      en: "Night Velvet Mermaid Gown & Golden Crystals"
    },
    category: "robe-soiree",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Soirées & Galas de Prestige",
      en: "Prestige Evening & Gala"
    },
    year: 2026,
    status: "disponible",
    summary: {
      fr: "Velours royal noir profond réhaussé de cristaux dorés appliqués en cascade lumineuse.",
      en: "Deep royal black velvet illuminated by cascading warm golden crystal inlays."
    },
    description: {
      fr: "Le contraste sublime du velours dense et des étincelles dorées. Cette robe sirène épouse chaque mouvement avec une grâce impériale lors des soirées de remise de prix et dîners d’État.",
      en: "The sublime contrast of rich plush velvet and golden sparkles. This mermaid gown accompanies every movement with imperial dignity at state dinners and awards galas."
    },
    materials: {
      fr: "Velours de soie extensible noir onyx, cristaux Swarovski ambre et or, doublure satin respirante.",
      en: "Onyx black stretch silk velvet, amber and gold crystals, breathable satin lining."
    },
    craftDetails: {
      fr: "Pose minutieuse des cristaux à chaud et surpiqûres or à l’atelier de Yaoundé.",
      en: "Meticulous heat-set crystal setting and golden topstitching in our Yaoundé atelier."
    },
    estimatedLeadTime: {
      fr: "Sur mesure : 12 à 16 jours · Location : Disponible à l’atelier",
      en: "Bespoke: 12 to 16 days · Rental: Available at the atelier"
    },
    coverImage: "/Junior%20Zeus%20Style/robe%20de%20soiree/robe%202.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/robe%20de%20soiree/robe%202.jpg",
      "/Junior%20Zeus%20Style/robe%20de%20soiree/robe%202%20gallery.jpg"
    ],
    isFeatured: true,
    priceEstimate: "Location : 70 000 FCFA · Confection sur mesure : 290 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-soiree-cocktail-asymetrique",
    slug: "robe-cocktail-haute-voltige-asymetrique",
    title: {
      fr: "Robe Cocktail Haute Voltige Asymétrique",
      en: "Asymmetric High-Chic Cocktail Dress"
    },
    category: "robe-soiree",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Soirées & Galas de Prestige",
      en: "Prestige Evening & Gala"
    },
    year: 2026,
    status: "disponible",
    summary: {
      fr: "Coupe midi asymétrique, épaule unique architecturée et tombé impeccable en crêpe fluide.",
      en: "Midi asymmetric cut, architectural one-shoulder neckline, and pristine fluid crepe drape."
    },
    description: {
      fr: "Une silhouette contemporaine pensée pour les réceptions prestigieuses et cocktails dinatoires. L’épaulette sculptée donne une assurance magnétique sans alourdir le mouvement.",
      en: "A contemporary silhouette designed for prestige receptions and cocktail events. The sculpted shoulder line delivers magnetic poise with complete ease of motion."
    },
    materials: {
      fr: "Crêpe lourd de soie, renfort épaule thermo-formé, doublure anti-froissement.",
      en: "Heavy silk crepe, thermo-formed shoulder structure, crease-resistant lining."
    },
    craftDetails: {
      fr: "Coupe biseautée au millimètre, finitions bord franc doublé à la main.",
      en: "Precision bias cut, hand-lined clean edge finishes."
    },
    estimatedLeadTime: {
      fr: "Sur mesure : 7 à 10 jours ouvrés · Location : Prête en boutique",
      en: "Bespoke: 7 to 10 business days · Rental: Ready in store"
    },
    coverImage: "/Junior%20Zeus%20Style/robe%20de%20soiree/robe%203.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/robe%20de%20soiree/robe%203.jpg",
      "/Junior%20Zeus%20Style/robe%20de%20soiree/robe%203%20gallery.jpg"
    ],
    isFeatured: false,
    priceEstimate: "Location : 55 000 FCFA · Confection sur mesure : 185 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-soiree-rubis-imperial",
    slug: "robe-soiree-satin-duchesse-rubis-imperial",
    title: {
      fr: "Robe de Soirée Satin Duchesse Rubis Impérial",
      en: "Imperial Ruby Duchess Satin Evening Gown"
    },
    category: "robe-soiree",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Soirées & Galas de Prestige",
      en: "Prestige Evening & Gala"
    },
    year: 2026,
    status: "disponible",
    summary: {
      fr: "Couleur rouge rubis profond, décolleté glamour sculpté et volume royal théâtral.",
      en: "Deep ruby red glow, sculpted glamour neckline, and dramatic royal sweep."
    },
    description: {
      fr: "L’incarnation même du faste et de la passion selon Junior Zeus Style. Le satin duchesse réfléchit la lumière avec une intensité envoûtante, faisant de celle qui la porte la reine indétrônable de la soirée.",
      en: "The very embodiment of pageantry and passion by Junior Zeus Style. The duchess satin reflects light with mesmerizing depth, commanding every gaze across the ballroom."
    },
    materials: {
      fr: "Satin duchesse lourd 420g coloris rubis impérial, baleinage anatomique.",
      en: "Heavy 420g duchess satin in imperial ruby, anatomical corsetry stays."
    },
    craftDetails: {
      fr: "Poches invisibles latérales intégrées dans les plis, ourlet rigide d’apparat.",
      en: "Concealed side seam pockets nestled in structured pleats, weighted hem."
    },
    estimatedLeadTime: {
      fr: "Sur mesure : 12 à 15 jours · Location : Disponible immédiatement",
      en: "Bespoke: 12 to 15 days · Rental: Available immediately"
    },
    coverImage: "/Junior%20Zeus%20Style/robe%20de%20soiree/robe%204.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/robe%20de%20soiree/robe%204.jpg",
      "/Junior%20Zeus%20Style/robe%20de%20soiree/robe%204%20gallery.jpg"
    ],
    isFeatured: true,
    priceEstimate: "Location : 75 000 FCFA · Confection sur mesure : 320 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-soiree-aura-doree",
    slug: "robe-soiree-drape-aura-doree",
    title: {
      fr: "Robe de Soirée Drapée \"Aura Dorée\"",
      en: "Draped Evening Gown \"Golden Aura\""
    },
    category: "robe-soiree",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Soirées & Galas de Prestige",
      en: "Prestige Evening & Gala"
    },
    year: 2026,
    status: "disponible",
    summary: {
      fr: "Drapé oblique enveloppant aux reflets dorés chauds avec taille marquée et traîne fluide.",
      en: "Wrapped bias drapery with shimmering warm golden tones, defined waist and fluid train."
    },
    description: {
      fr: "Une pièce de gala qui marie souplesse et structure. Son drapé flatte toutes les morphologies avec une aisance rare et une élégance intemporelle.",
      en: "A gala creation marrying softness and structure. Its draped lines flatter silhouettes with effortless ease and enduring timeless chic."
    },
    materials: {
      fr: "Lamé de soie métallisé doré, jersey de soie, doublure microfibre douce.",
      en: "Metallic gold silk lamé, silk jersey, soft microfiber lining."
    },
    craftDetails: {
      fr: "Fronces réalisées à la main pour une répartition harmonique des volumes.",
      en: "Hand-gathered pleats ensuring balanced harmonious volume distribution."
    },
    estimatedLeadTime: {
      fr: "Sur mesure : 10 à 12 jours · Location : Dès 60 000 FCFA",
      en: "Bespoke: 10 to 12 days · Rental: From 60,000 FCFA"
    },
    coverImage: "/Junior%20Zeus%20Style/robe%20de%20soiree/600338396_1472902794842187_917739426772011426_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/robe%20de%20soiree/600338396_1472902794842187_917739426772011426_n.jpg"
    ],
    isFeatured: false,
    priceEstimate: "Location : 60 000 FCFA · Confection sur mesure : 240 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-soiree-noire-constellation",
    slug: "robe-fourreau-noire-broderies-constellation",
    title: {
      fr: "Robe Fourreau Noire & Broderies Constellation",
      en: "Black Sheath Gown with Constellation Embroidery"
    },
    category: "robe-soiree",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Soirées & Galas de Prestige",
      en: "Prestige Evening & Gala"
    },
    year: 2026,
    status: "disponible",
    summary: {
      fr: "Fourreau noir épuré souligné de broderies délicates au fil d’or rappelant les étoiles.",
      en: "Refined black column sheath illuminated with delicate gold needlework reminiscent of stars."
    },
    description: {
      fr: "L’élégance du noir sublimée par des motifs astronomiques brodés par nos artisans. Discrète et captivante, elle convient parfaitement aux cérémonies officielles et soirées d’ambassade.",
      en: "The eternal allure of black elevated by hand-embroidered celestial motifs. Subtle yet commanding, ideal for state receptions and diplomatic galas."
    },
    materials: {
      fr: "Crêpe georgette double retors, fil de cannetille or, mousseline de soie.",
      en: "Double-twisted georgette crepe, gold bullion wire, silk chiffon."
    },
    craftDetails: {
      fr: "Broderie artisanale au crochet de Lunéville exécutée avec précision.",
      en: "Artisanal Lunéville hook embroidery executed with meticulous precision."
    },
    estimatedLeadTime: {
      fr: "Sur mesure : 12 à 15 jours ouvrés · Location : En atelier",
      en: "Bespoke: 12 to 15 business days · Rental: In atelier"
    },
    coverImage: "/Junior%20Zeus%20Style/robe%20de%20soiree/484492931_1217155983750204_580069441649787067_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/robe%20de%20soiree/484492931_1217155983750204_580069441649787067_n.jpg"
    ],
    isFeatured: false,
    priceEstimate: "Location : 50 000 FCFA · Confection sur mesure : 210 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-soiree-sirene-minuit",
    slug: "robe-sirene-elegance-epuree-minuit",
    title: {
      fr: "Robe Sirène d’Élégance Épurée \"Minuit\"",
      en: "Midnight Pure Line Mermaid Gown"
    },
    category: "robe-soiree",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Soirées & Galas de Prestige",
      en: "Prestige Evening & Gala"
    },
    year: 2026,
    status: "disponible",
    summary: {
      fr: "Ligne sirène sculptée sans artifice, col montant graphique et dos échancré.",
      en: "Sculpted minimal mermaid line, graphic high neck and dramatic cut-out back."
    },
    description: {
      fr: "Une pièce minimaliste d’une rare intensité. La pureté de la ligne met en valeur le port altier et la grâce naturelle du corps.",
      en: "A minimalist piece of striking intensity. Line purity celebrates erect posture and unforced natural body grace."
    },
    materials: {
      fr: "Crêpe lourd stretch haute tenue, doublure seconde peau.",
      en: "Heavy stretch crepe with superior recovery, second-skin lining."
    },
    craftDetails: {
      fr: "Pinces invisibles et entoilage thermo-fusionné pour une tenue infaillible.",
      en: "Concealed darts and tailored fusing ensuring immaculate hold."
    },
    estimatedLeadTime: {
      fr: "Sur mesure : 9 à 12 jours · Location : Disponible",
      en: "Bespoke: 9 to 12 days · Rental: Available"
    },
    coverImage: "/Junior%20Zeus%20Style/robe%20de%20soiree/485701924_1221639269968542_6175706825688128196_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/robe%20de%20soiree/485701924_1221639269968542_6175706825688128196_n.jpg"
    ],
    isFeatured: false,
    priceEstimate: "Location : 55 000 FCFA · Confection sur mesure : 195 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-soiree-ceremonie-saphir",
    slug: "robe-ceremonie-saphir-decoupes-geometriques",
    title: {
      fr: "Robe de Cérémonie Saphir & Découpes Géométriques",
      en: "Sapphire Ceremony Gown with Geometric Cutouts"
    },
    category: "robe-soiree",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Soirées & Galas de Prestige",
      en: "Prestige Evening & Gala"
    },
    year: 2026,
    status: "disponible",
    summary: {
      fr: "Bleu saphir électrique, corsage orné de bandes géométriques et traîne de soie.",
      en: "Electric sapphire blue, geometric paneling bodice, and silk sweep."
    },
    description: {
      fr: "Inspirée de la force architecturale des gratte-ciel contemporains et du prestige camerounais. Les découpes mettent en valeur la taille avec modernité.",
      en: "Inspired by modern architectural angles and Cameroonian grandeur. Tailored cuts define the waistline with sharp contemporary flair."
    },
    materials: {
      fr: "Mikado bleu saphir royal, tulle illusion, zip invisible doré.",
      en: "Royal sapphire mikado, illusion tulle, gold concealed zipper."
    },
    craftDetails: {
      fr: "Surpiqûres sellier précises et renfort de taille intérieur en gros-grain.",
      en: "Saddler topstitching and interior grosgrain waiststay."
    },
    estimatedLeadTime: {
      fr: "Sur mesure : 11 à 14 jours · Location : Disponible",
      en: "Bespoke: 11 to 14 days · Rental: Available"
    },
    coverImage: "/Junior%20Zeus%20Style/robe%20de%20soiree/488786254_1238452691620533_3130574291762972006_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/robe%20de%20soiree/488786254_1238452691620533_3130574291762972006_n.jpg"
    ],
    isFeatured: false,
    priceEstimate: "Location : 60 000 FCFA · Confection sur mesure : 230 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-soiree-gala-sculptee",
    slug: "robe-gala-couture-epaulettes-sculptees",
    title: {
      fr: "Robe de Gala Couture à Épaulettes Sculptées",
      en: "Haute Gala Gown with Sculpted Shoulder Structure"
    },
    category: "robe-soiree",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Soirées & Galas de Prestige",
      en: "Prestige Evening & Gala"
    },
    year: 2026,
    status: "disponible",
    summary: {
      fr: "Carrure impériale rehaussée d’épaulettes pointues couture, taille ceinturée et drapé majestueux.",
      en: "Commanding shoulder line with peaked couture epaulettes, cinched waist, and majestic drape."
    },
    description: {
      fr: "Une robe faite pour dominer l’espace. L’audace de la coupe d’épaules alliée au tombé gracieux de la jupe affirme une puissance stylistique incomparable.",
      en: "A gown built to own the room. Daring peak shoulders paired with soft cascading skirts articulate unyielding stylistic authority."
    },
    materials: {
      fr: "Drap de soie lourd, doublure satin soyeuse, feutre structuré.",
      en: "Heavy silk cloth, silken satin lining, structured shoulder tailoring canvas."
    },
    craftDetails: {
      fr: "Montage d’épaules tailleur selon la tradition sartoriale masculine adapté à la haute robe féminine.",
      en: "Men’s bespoke shoulder pad construction applied to feminine haute couture."
    },
    estimatedLeadTime: {
      fr: "Sur mesure : 14 à 18 jours · Location : Dès 80 000 FCFA",
      en: "Bespoke: 14 to 18 days · Rental: From 80,000 FCFA"
    },
    coverImage: "/Junior%20Zeus%20Style/robe%20de%20soiree/494927791_1263260855806383_288526690001212628_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/robe%20de%20soiree/494927791_1263260855806383_288526690001212628_n.jpg"
    ],
    isFeatured: false,
    priceEstimate: "Location : 80 000 FCFA · Confection sur mesure : 340 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-soiree-prestige-cape",
    slug: "robe-prestige-cape-amovible-soie",
    title: {
      fr: "Robe de Prestige & Cape Amovible en Soie",
      en: "Prestige Evening Gown with Detachable Silk Cape"
    },
    category: "robe-soiree",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Soirées & Galas de Prestige",
      en: "Prestige Evening & Gala"
    },
    year: 2026,
    status: "piece_unique",
    summary: {
      fr: "Silhouette 2-en-1 avec cape théâtrale amovible brodée et robe sirène ajustée.",
      en: "2-in-1 convertible creation featuring theatrical embroidered detachable cape and sleek mermaid gown."
    },
    description: {
      fr: "Prévue pour les entrées royales : arrivez drapée dans une cape monumentale puis retirez-la pour dévoiler un fourreau époustouflant taillé au millimètre.",
      en: "Crafted for royal entrances: arrive draped in a monumental cape, then detach it to reveal a breath-taking bespoke sheath."
    },
    materials: {
      fr: "Satin duchesse, organza de soie, attaches bijoux laiton doré.",
      en: "Duchess satin, silk organza, gold brass jewelry clasp closures."
    },
    craftDetails: {
      fr: "Système d’attache invisible breveté atelier permettant une transformation instantanée.",
      en: "Atelier concealed fast-release clasp allowing instant transformation."
    },
    estimatedLeadTime: {
      fr: "Sur mesure : 16 à 20 jours ouvrés · Location : 85 000 FCFA",
      en: "Bespoke: 16 to 20 business days · Rental: 85,000 FCFA"
    },
    coverImage: "/Junior%20Zeus%20Style/robe%20de%20soiree/499924055_1282184883913980_1845691874363500593_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/robe%20de%20soiree/499924055_1282184883913980_1845691874363500593_n.jpg"
    ],
    isFeatured: true,
    priceEstimate: "Location : 85 000 FCFA · Confection sur mesure : 360 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-trad-royal-ndop",
    slug: "ensemble-royal-ndop-soie-noire",
    title: {
      fr: "Ensemble Royal Ndop & Soie Noire",
      en: "Royal Ndop & Black Silk Ensemble"
    },
    category: "robe-traditionnelle",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Héritage & Coutume",
      en: "Heritage & Customary Couture"
    },
    year: 2026,
    status: "sur_commande",
    summary: {
      fr: "Hommage aux chefferies de l’Ouest Cameroun alliant le textile sacré Ndop et la haute couture contemporaine.",
      en: "Tribute to Western Cameroon kingdoms combining sacred Ndop textile with contemporary couture lines."
    },
    description: {
      fr: "Une réinterprétation majestueuse du pagne royal Ndop des Grassfields. Rehaussé de passepoils en soie noire et de boutons métalliques gravés, cet ensemble incarne la dignité ancestrale sublimée par le style Zeus.",
      en: "A regal reinterpretation of sacred Grassfields Ndop cloth. Outlined with black silk pipings and engraved metal buttons, this attire embodies royal ancestry through Zeus tailoring."
    },
    materials: {
      fr: "Tissu traditionnel Ndop authentique teint à l’indigo naturel, faille de soie noire.",
      en: "Authentic Ndop royal cloth dyed with natural indigo, black silk faille."
    },
    craftDetails: {
      fr: "Respect scrupuleux du sens des symboles rituels lors de la découpe et assemblage manuel soigné.",
      en: "Rigorous alignment of customary symbols during hand cutting and tailored assembly."
    },
    estimatedLeadTime: {
      fr: "Confection sur mesure : 10 à 14 jours ouvrés",
      en: "Bespoke commission: 10 to 14 business days"
    },
    coverImage: "/Junior%20Zeus%20Style/robe%20traditionnele/480673124_1216626153803187_4718876397748933247_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/robe%20traditionnele/480673124_1216626153803187_4718876397748933247_n.jpg"
    ],
    isFeatured: true,
    priceEstimate: "Confection sur mesure : 160 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-trad-heritage-grassfields",
    slug: "robe-ceremonielle-coutumiere-heritage-grassfields",
    title: {
      fr: "Robe Cérémonielle Coutumière \"Héritage des Grassfields\"",
      en: "Customary Ceremonial Gown \"Grassfields Heritage\""
    },
    category: "robe-traditionnelle",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Héritage & Coutume",
      en: "Heritage & Customary Couture"
    },
    year: 2026,
    status: "sur_commande",
    summary: {
      fr: "Robe d’apparat pour dot et intronisations ornée de motifs graphiques ancestraux.",
      en: "Regal customary dress for traditional dowry and royal coronations."
    },
    description: {
      fr: "Idéale pour les mariages traditionnels, les cérémonies de dot et les festivités coutumières au Cameroun. Elle confère à celle qui la porte une prestance inégalée.",
      en: "Perfect for traditional marriages, dowry rites and customary ceremonies across Cameroon. Imparts unrivalled dignity and poise."
    },
    materials: {
      fr: "Tissage traditionnel enrichi de fils de coton d’Afrique, doublure fine respirante.",
      en: "Traditional weave enriched with African cotton filaments, breathable lining."
    },
    craftDetails: {
      fr: "Broderies traditionnelles en relief exécutées à la main par nos artisans maîtres.",
      en: "Embossed traditional needlecraft completed by master artisans."
    },
    estimatedLeadTime: {
      fr: "12 à 15 jours ouvrés à l’atelier de Yaoundé",
      en: "12 to 15 business days at the Yaoundé atelier"
    },
    coverImage: "/Junior%20Zeus%20Style/robe%20traditionnele/482030010_1215552617243874_3350988383809882595_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/robe%20traditionnele/482030010_1215552617243874_3350988383809882595_n.jpg"
    ],
    isFeatured: false,
    priceEstimate: "Confection sur mesure : 185 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-trad-reine-mere",
    slug: "robe-mariage-traditionnel-reine-mere",
    title: {
      fr: "Robe de Mariage Traditionnel \"Reine Mère\"",
      en: "Traditional Bridal Gown \"Queen Mother\""
    },
    category: "robe-traditionnelle",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Héritage & Coutume",
      en: "Heritage & Customary Couture"
    },
    year: 2026,
    status: "sur_commande",
    summary: {
      fr: "Robe d’apparat magistrale pensée pour la mariée coutumière ou les figures d’autorité familiale.",
      en: "Magisterial ceremony gown designed for the customary bride and matriarch figures."
    },
    description: {
      fr: "Une splendeur textile consacrée aux noces coutumières. La structure offre une allure imposante tout en assurant une totale liberté de mouvement pendant les rituels et danses traditionnelles.",
      en: "Textile splendor dedicated to customary celebrations. The structure imparts commanding presence while offering complete agility during rituals and dances."
    },
    materials: {
      fr: "Brocart d’art aux fils d’or, velours noir profond, broderies artisanales perlées.",
      en: "Fine art brocade with gold threads, deep black velvet, beaded artisanal needlework."
    },
    craftDetails: {
      fr: "Plus de 40 heures d’ouvrage manuel sur le plastron et le bas de robe.",
      en: "Over 40 hours of meticulous hand needlecraft across the plastron and hem."
    },
    estimatedLeadTime: {
      fr: "14 à 20 jours ouvrés selon le calendrier de l’événement",
      en: "14 to 20 business days tailored to your event schedule"
    },
    coverImage: "/Junior%20Zeus%20Style/robe%20traditionnele/484353563_1219005670231902_8307857946750703536_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/robe%20traditionnele/484353563_1219005670231902_8307857946750703536_n.jpg"
    ],
    isFeatured: true,
    priceEstimate: "Confection sur mesure : 220 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-trad-afritude-basques",
    slug: "ensemble-afritude-moderne-basques-sculptees",
    title: {
      fr: "Ensemble Afritude Moderne à Basques Sculptées",
      en: "Modern Afritude Ensemble with Sculpted Peplum"
    },
    category: "robe-traditionnelle",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Héritage & Coutume",
      en: "Heritage & Customary Couture"
    },
    year: 2026,
    status: "sur_commande",
    summary: {
      fr: "Veste cintrée à basques évasées et jupe crayon assortie aux empiècements géométriques.",
      en: "Tailored flared peplum jacket with matching pencil skirt and geometric customary insets."
    },
    description: {
      fr: "L’union du chic urbain international et de l’identité africaine fière. Une silhouette prisée pour les cultes solennels, cérémonies d’action de grâce et réceptions familiales.",
      en: "The marriage of international tailored chic and proud African identity. A favorite silhouette for Thanksgiving celebrations and high-society family milestones."
    },
    materials: {
      fr: "Coton peigné texturé 300g, incrustations Wax hollandais véritable, boutons coordonnés.",
      en: "Textured combed 300g cotton, genuine Dutch Wax insets, coordinated bespoke buttons."
    },
    craftDetails: {
      fr: "Basques rigidifiées à la toile de tailleur traditionnelle pour un galbe net et durable.",
      en: "Structured canvas-backed peplum retaining razor-sharp definition."
    },
    estimatedLeadTime: {
      fr: "8 à 12 jours ouvrés",
      en: "8 to 12 business days"
    },
    coverImage: "/Junior%20Zeus%20Style/robe%20traditionnele/488703470_1236559648476504_7226305529250703607_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/robe%20traditionnele/488703470_1236559648476504_7226305529250703607_n.jpg"
    ],
    isFeatured: false,
    priceEstimate: "Confection sur mesure : 135 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-trad-princesse-sawa",
    slug: "robe-traditionnelle-apparat-princesse-sawa",
    title: {
      fr: "Robe Traditionnelle d’Apparat \"Princesse Sawa\"",
      en: "Traditional Ceremonial Gown \"Sawa Princess\""
    },
    category: "robe-traditionnelle",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Héritage & Coutume",
      en: "Heritage & Customary Couture"
    },
    year: 2026,
    status: "sur_commande",
    summary: {
      fr: "Inspirée du Kaba d’apparat princier avec drapé noble et broderies de cérémonie.",
      en: "Inspired by princely ceremonial Kaba with noble drape and ceremonial needlework."
    },
    description: {
      fr: "Une création qui sublime l’élégance côtière camerounaise. L’ampleur royale du tissu et le raffinement des découpes traduisent une noblesse sans égale.",
      en: "A creation honoring coastal Cameroonian royalty. The regal volume of cloth and refined seam lines communicate unmatched grandeur."
    },
    materials: {
      fr: "Soie damassée lourde, fil d’or antique, boutons de nacre travaillés.",
      en: "Heavy damask silk, antique gold thread, sculpted mother-of-pearl buttons."
    },
    craftDetails: {
      fr: "Plis religieuse réalisés au millimètre et col montant impérial.",
      en: "Millimeter-precise pin-tuck pleats and stand imperial collar."
    },
    estimatedLeadTime: {
      fr: "12 à 16 jours ouvrés",
      en: "12 to 16 business days"
    },
    coverImage: "/Junior%20Zeus%20Style/robe%20traditionnele/494582470_1262721892526946_4169431208078102087_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/robe%20traditionnele/494582470_1262721892526946_4169431208078102087_n.jpg"
    ],
    isFeatured: false,
    priceEstimate: "Confection sur mesure : 210 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-couple-apparat-royal",
    slug: "duo-apparat-couple-ceremonie-coutumiere",
    title: {
      fr: "Duo d’Apparat Couple Cérémonie & Mariage Coutumier",
      en: "Royal Couple Ensemble for Customary Wedding & Ceremony"
    },
    category: "tenue-couple",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Harmonie & Couple",
      en: "Harmony & Couple Ensembles"
    },
    year: 2026,
    status: "sur_commande",
    summary: {
      fr: "Ensemble coordonné 2 silhouettes pour elle et lui, coupes harmonisées et broderies jumelles.",
      en: "Coordinated two-silhouette couple ensemble for her and him with harmonized tailoring."
    },
    description: {
      fr: "Pour sceller l’union avec une prestance royale. Ce duo comprend la robe de mariée traditionnelle pour madame et la tunique d’apparat avec pantalon sartorial pour monsieur, tous deux confectionnés dans les mêmes étoffes nobles et finis avec les mêmes broderies complices.",
      en: "To seal matrimony with regal authority. This duo features the customary ceremonial gown for her and matching tailored apparat tunic with trousers for him, crafted in harmonized textiles and signature matching embroidery."
    },
    materials: {
      fr: "Tissu royal coordonné, broderies fil d’or et bronze, doublure satin soyeux pour les deux pièces.",
      en: "Harmonized royal cloth, gold and bronze needlework, silk satin lining across both garments."
    },
    craftDetails: {
      fr: "Double prise de mesure en tandem à l’atelier pour un équilibre visuel parfait du couple.",
      en: "Tandem anatomical measurements in atelier ensuring harmonious aesthetic balance."
    },
    estimatedLeadTime: {
      fr: "Duo complet : 18 à 25 jours ouvrés",
      en: "Complete duo: 18 to 25 business days"
    },
    coverImage: "/Junior%20Zeus%20Style/tenue%20couple/495627554_1266321848833617_597126451158312933_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/tenue%20couple/495627554_1266321848833617_597126451158312933_n.jpg"
    ],
    isFeatured: true,
    priceEstimate: "Confection duo complet (Elle & Lui) : 380 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-ville-tailleur-fusele",
    slug: "ensemble-tailleur-veste-pantalon-business-chic",
    title: {
      fr: "Ensemble Tailleur Veste & Pantalon \"Business Chic\"",
      en: "Tailored Blazer & Tapered Trouser \"Business Chic\""
    },
    category: "tenue-ville",
    collectionId: "col-ligne-zeus",
    collectionName: {
      fr: "Ligne Zeus Sartoriale",
      en: "Zeus Sartorial Line"
    },
    year: 2026,
    status: "sur_commande",
    summary: {
      fr: "Veste tailleur cintrée à revers en pointe et pantalon fuselé à pli permanent.",
      en: "Fitted blazer with peaked lapels and crisp tapered crease-front trousers."
    },
    description: {
      fr: "L’élégance au quotidien pour les leaders et cadres exigeants de Yaoundé. Une coupe nette qui inspire le respect en réunion comme en cocktail d’affaires.",
      en: "Everyday elegance for demanding leaders and executives in Yaoundé. Sharp lines commanding respect in boardrooms and business events."
    },
    materials: {
      fr: "Laine froide Super 120s italienne respirante, boutons en corne naturelle.",
      en: "Breathable Italian Super 120s cool wool, natural horn buttons."
    },
    craftDetails: {
      fr: "Demi-entoilage traditionnel garantissant une tenue impeccable tout au long de la journée.",
      en: "Traditional half-canvas construction maintaining clean drape throughout long days."
    },
    estimatedLeadTime: {
      fr: "8 à 10 jours ouvrés",
      en: "8 to 10 business days"
    },
    coverImage: "/Junior%20Zeus%20Style/tenue%20de%20ville/491925436_1246264554172680_7767893932304329360_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/tenue%20de%20ville/491925436_1246264554172680_7767893932304329360_n.jpg"
    ],
    isFeatured: true,
    priceEstimate: "Confection sur mesure : 110 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-ville-costume-yaounde",
    slug: "costume-deux-pieces-urbain-yaounde-chic",
    title: {
      fr: "Costume Deux Pièces Urbain Coupe Slim \"Yaoundé Chic\"",
      en: "Urban Slim Two-Piece Suit \"Yaoundé Chic\""
    },
    category: "tenue-ville",
    collectionId: "col-ligne-zeus",
    collectionName: {
      fr: "Ligne Zeus Sartoriale",
      en: "Zeus Sartorial Line"
    },
    year: 2026,
    status: "sur_commande",
    summary: {
      fr: "Veste contemporaine 2 boutons et pantalon moderne sans pinces taillé sur mesure.",
      en: "Contemporary 2-button jacket and modern flat-front tailored trousers."
    },
    description: {
      fr: "Le costume indispensable du vestiaire masculin moderne. Confectionné sur mesure pour épouser votre morphologie sans aucune tension indésirable.",
      en: "The essential tailored suit for the modern wardrobe. Custom cut to mirror your anatomy without unwanted tension."
    },
    materials: {
      fr: "Sergé de laine mélangée bleu nuit, doublure satin soyeuse cupro.",
      en: "Midnight blue wool-blend twill, cupro silken satin lining."
    },
    craftDetails: {
      fr: "Fentes latérales d’aisance, poches passepoilées avec rabats fins.",
      en: "Dual side vents, double-welt pockets with refined clean flaps."
    },
    estimatedLeadTime: {
      fr: "10 à 12 jours ouvrés",
      en: "10 to 12 business days"
    },
    coverImage: "/Junior%20Zeus%20Style/tenue%20de%20ville/492079576_1253585603440575_799118771042201339_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/tenue%20de%20ville/492079576_1253585603440575_799118771042201339_n.jpg"
    ],
    isFeatured: false,
    priceEstimate: "Confection sur mesure : 135 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-ville-tunique-epuree",
    slug: "ensemble-moderne-tunique-epuree",
    title: {
      fr: "Ensemble Moderne Deux Pièces Tunique Épurée",
      en: "Modern Two-Piece Clean Line Tunic Set"
    },
    category: "tenue-ville",
    collectionId: "col-ligne-zeus",
    collectionName: {
      fr: "Ligne Zeus Sartoriale",
      en: "Zeus Sartorial Line"
    },
    year: 2026,
    status: "disponible",
    summary: {
      fr: "Tunique contemporaine à col officier épuré et pantalon droit coordonné.",
      en: "Contemporary stand-collar clean tunic paired with tailored matching trousers."
    },
    description: {
      fr: "L’élégance décontractée haut de gamme. Parfaite pour les dimanches chics, réceptions de jour et sorties décontractées raffinées.",
      en: "High-end relaxed elegance. Tailored for smart Sundays, daylight receptions and refined casual outings."
    },
    materials: {
      fr: "Lin coton premium beige mastic, boutons nacrés.",
      en: "Premium putty-beige linen-cotton blend, mother-of-pearl buttons."
    },
    craftDetails: {
      fr: "Surpiqûres ton sur ton soignées et fentes d’aisance latérales.",
      en: "Tone-on-tone fine topstitching and tailored side ease vents."
    },
    estimatedLeadTime: {
      fr: "7 à 9 jours ouvrés",
      en: "7 to 9 business days"
    },
    coverImage: "/Junior%20Zeus%20Style/tenue%20de%20ville/494636348_1270344861764649_5743478493316092602_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/tenue%20de%20ville/494636348_1270344861764649_5743478493316092602_n.jpg"
    ],
    isFeatured: false,
    priceEstimate: "Confection sur mesure : 90 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-ville-col-minimaliste",
    slug: "tenue-ville-contemporaine-col-minimaliste",
    title: {
      fr: "Tenue de Ville Contemporaine & Col Tailleur Minimaliste",
      en: "Contemporary Urban Attire with Minimalist Lapel"
    },
    category: "tenue-ville",
    collectionId: "col-ligne-zeus",
    collectionName: {
      fr: "Ligne Zeus Sartoriale",
      en: "Zeus Sartorial Line"
    },
    year: 2026,
    status: "disponible",
    summary: {
      fr: "Ligne vestimentaire épurée, col tailleur compact et finition contemporaine.",
      en: "Streamlined silhouette, compact notch lapel, and contemporary clean finishing."
    },
    description: {
      fr: "La modernité à l’état pur. Une coupe concise conçue pour s’adapter aux journées actives sans rien sacrifier au raffinement sartorial.",
      en: "Purity of form. A concise cut engineered for active days without sacrificing tailored sartorial distinction."
    },
    materials: {
      fr: "Gabardine de coton souple lavée, finitions biais de coton.",
      en: "Soft washed cotton gabardine, cotton-bias inner bindings."
    },
    craftDetails: {
      fr: "Coutures rabattues à double aiguille pour une résistance durable.",
      en: "Double-needle felled seams engineered for long-lasting resilience."
    },
    estimatedLeadTime: {
      fr: "6 à 8 jours ouvrés",
      en: "6 to 8 business days"
    },
    coverImage: "/Junior%20Zeus%20Style/tenue%20de%20ville/495172093_1270344888431313_5464599962785037775_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/tenue%20de%20ville/495172093_1270344888431313_5464599962785037775_n.jpg"
    ],
    isFeatured: false,
    priceEstimate: "Confection sur mesure : 85 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-defile-empereur-zeus",
    slug: "piece-maitresse-defile-empereur-zeus-traine-spectaculaire",
    title: {
      fr: "Pièce Maîtresse Défilé \"Empereur Zeus\" & Traîne Spectaculaire",
      en: "Runway Masterpiece \"Emperor Zeus\" with Spectacle Train"
    },
    category: "defile",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Haute Couture Défilé",
      en: "Runway Haute Couture"
    },
    year: 2026,
    status: "piece_unique",
    summary: {
      fr: "Création podium suprême révélée lors du défilé officiel, traîne théâtrale et plastron sculptural orné.",
      en: "Supreme runway showpiece revealed on official fashion week, dramatic train and sculpted ornate plastron."
    },
    description: {
      fr: "L’apogée créative d’Ariel Junior Nzesseu sur les podiums. Cette création d’art transcende les frontières du vêtement pour devenir une véritable œuvre sculpturale portée, saluée par les critiques de mode.",
      en: "The artistic culmination of Ariel Junior Nzesseu on the runway. This piece transcends conventional couture into wearable sculpture, celebrated by international fashion critics."
    },
    materials: {
      fr: "Brocart lourd fil d’or 24k, velours d’art texturé, structure d’arceau légère en titane couturier.",
      en: "24k gold threaded heavy brocade, textured velvet art cloth, lightweight titanium runway hooping."
    },
    craftDetails: {
      fr: "110 heures de confection haute couture à la main par le maître créateur.",
      en: "110 hours of manual haute couture construction by the master designer himself."
    },
    estimatedLeadTime: {
      fr: "Pièce d’art unique d’exposition · Confection sur commande spéciale : 30 jours",
      en: "Unique exhibition piece · Special commission: 30 business days"
    },
    coverImage: "/Junior%20Zeus%20Style/defile/586919821_1446801877452279_4480509304638377918_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/defile/586919821_1446801877452279_4480509304638377918_n.jpg",
      "/Junior%20Zeus%20Style/defile/585647902_1446801794118954_2686359696356746202_n.jpg"
    ],
    isFeatured: true,
    priceEstimate: "Confection exclusive sur commande : 720 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-defile-sculpture-volumetrique",
    slug: "robe-defile-sculpture-volumetrique-plisse",
    title: {
      fr: "Robe Défilé Sculpture Volumétrique & Plissé Haute Couture",
      en: "Runway Sculptural Gown & Haute Couture Pleats"
    },
    category: "defile",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Haute Couture Défilé",
      en: "Runway Haute Couture"
    },
    year: 2026,
    status: "piece_unique",
    summary: {
      fr: "Jeux de volumes 3D audacieux, plissé soleil artisanal et structure avant-gardiste.",
      en: "Daring 3D volume interplay, hand sunburst pleating, and avant-garde silhouette."
    },
    description: {
      fr: "Présentée sur les planches des plus grands défilés de mode camerounais. Chaque pli a été modelé pour capturer la dynamique de la marche et magnifier les jeux d’ombres et de lumières.",
      en: "Presented on premier Cameroonian fashion week runways. Every pleat engineered to capture motion dynamics and dramatize shadow and light interplay."
    },
    materials: {
      fr: "Taffetas de soie plissé à la vapeur, baleinage d’art, organza translucide.",
      en: "Steam-pleated silk taffeta, sculptural couture boning, translucent organza."
    },
    craftDetails: {
      fr: "Plissé au moule traditionnel en carton fort exécuté selon la méthode ancestrale.",
      en: "Pleated in traditional heavy cardstock molds following heritage French-atelier methods."
    },
    estimatedLeadTime: {
      fr: "Sur commande spéciale : 25 jours ouvrés",
      en: "Special commission: 25 business days"
    },
    coverImage: "/Junior%20Zeus%20Style/defile/585647902_1446801794118954_2686359696356746202_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/defile/585647902_1446801794118954_2686359696356746202_n.jpg"
    ],
    isFeatured: true,
    priceEstimate: "Confection exclusive : 680 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-defile-soleil-noir",
    slug: "creation-podium-soleil-noir-epaulettes-aiguisees",
    title: {
      fr: "Création Podium \"Soleil Noir\" & Épaulettes Aiguisées",
      en: "Runway Masterwork \"Black Sun\" & Razor Epaulettes"
    },
    category: "defile",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Haute Couture Défilé",
      en: "Runway Haute Couture"
    },
    year: 2026,
    status: "piece_unique",
    summary: {
      fr: "Architecture sombre et puissante avec épaulettes acérées et taille ceinturée de bronze.",
      en: "Dark, commanding architecture with razor shoulders and bronze cinched waist."
    },
    description: {
      fr: "Une force visuelle électrisante. Cette pièce maîtresse explore le magnétisme du noir profond et l’autorité de la coupe sartoriale poussée à son extrême.",
      en: "An electric visual force. This runway centerpiece explores the magnetism of deep black and sartorial authority taken to its artistic edge."
    },
    materials: {
      fr: "Laine texturée dense 450g, cuir sellier bronze, garnitures métalliques.",
      en: "Heavy textured 450g wool, bronze saddlery leather, custom metallic accents."
    },
    craftDetails: {
      fr: "Moulage sous vide des épaulettes et coutures doublées à la main.",
      en: "Vacuum-formed shoulder sculpts and double hand-tailored seams."
    },
    estimatedLeadTime: {
      fr: "Sur commande : 20 à 25 jours",
      en: "On commission: 20 to 25 days"
    },
    coverImage: "/Junior%20Zeus%20Style/defile/560907742_1402493125216488_1050509077707239851_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/defile/560907742_1402493125216488_1050509077707239851_n.jpg"
    ],
    isFeatured: false,
    priceEstimate: "Confection exclusive : 590 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-defile-corseterie-art",
    slug: "silhouette-defile-metallisee-corseterie-art",
    title: {
      fr: "Silhouette Défilé Métallisée & Corseterie d’Art",
      en: "Metallic Runway Silhouette & Art Corsetry"
    },
    category: "defile",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Haute Couture Défilé",
      en: "Runway Haute Couture"
    },
    year: 2026,
    status: "piece_unique",
    summary: {
      fr: "Corset sculpté métallique orné d’incrustations miroir et jupe fluide à reflets changeants.",
      en: "Metallic sculpted corset adorned with mirror inlays and iridescent flowing skirt."
    },
    description: {
      fr: "Une expérimentation stylistique récompensée sur les podiums. La structure rigide du bustier contraste magistralement avec la fluidité vaporeuse de l’étoffe.",
      en: "An award-winning runway experimentation. The rigid sculpted bustier contrasts masterfully with the fluid lightness of silk."
    },
    materials: {
      fr: "Lamé métallique souple, plaques souples réfléchissantes, mousseline de soie.",
      en: "Flexible metallic lamé, mirrored flexible plates, silk chiffon."
    },
    craftDetails: {
      fr: "Assemblage de corseterie d’art à 28 baleines spiralées en acier inoxydable.",
      en: "Art-corsetry construction featuring 28 spiral stainless steel stays."
    },
    estimatedLeadTime: {
      fr: "Sur commande : 18 à 22 jours ouvrés",
      en: "On commission: 18 to 22 business days"
    },
    coverImage: "/Junior%20Zeus%20Style/defile/559648667_1402493515216449_9034899907434683358_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/defile/559648667_1402493515216449_9034899907434683358_n.jpg"
    ],
    isFeatured: false,
    priceEstimate: "Confection exclusive : 540 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-defile-fourreau-or",
    slug: "grand-fourreau-podium-velours-broderies-or",
    title: {
      fr: "Grand Fourreau de Podium Velours & Broderies Fil d’Or",
      en: "Grand Runway Column Gown in Velvet & Gold Embroidery"
    },
    category: "defile",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Haute Couture Défilé",
      en: "Runway Haute Couture"
    },
    year: 2026,
    status: "piece_unique",
    summary: {
      fr: "Somptueux velours texturé rehaussé d’arabesques d’or brodées à la main.",
      en: "Sumptuous textured velvet illuminated by hand-stitched golden arabesques."
    },
    description: {
      fr: "Un hommage aux grands rois et reines d’Afrique. La noblesse du velours et la richesse de la broderie manuelle confèrent une prestance inoubliable.",
      en: "A tribute to the majestic kings and queens of Africa. Noble velvet and rich manual needlework impart unforgettable poise."
    },
    materials: {
      fr: "Velours royal de soie, fils d’or métallisés, doublure satin champagne.",
      en: "Royal silk velvet, metallic gold embroidery threads, champagne satin lining."
    },
    craftDetails: {
      fr: "75 heures de broderie d’art réalisées fil à fil à l’atelier de Yaoundé.",
      en: "75 hours of manual needlework crafted thread by thread in Yaoundé."
    },
    estimatedLeadTime: {
      fr: "Sur commande spéciale : 22 à 28 jours",
      en: "Special commission: 22 to 28 days"
    },
    coverImage: "/Junior%20Zeus%20Style/defile/558774983_1402492568549877_7900447169000786279_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/defile/558774983_1402492568549877_7900447169000786279_n.jpg"
    ],
    isFeatured: false,
    priceEstimate: "Confection exclusive : 610 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-defile-lumiere-ongola",
    slug: "ensemble-scenique-haute-couture-lumiere-ongola",
    title: {
      fr: "Ensemble Scénique Haute Couture \"Lumière d’Ongola\"",
      en: "Haute Couture Stage Ensemble \"Light of Ongola\""
    },
    category: "defile",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Haute Couture Défilé",
      en: "Runway Haute Couture"
    },
    year: 2026,
    status: "piece_unique",
    summary: {
      fr: "Ensemble scénique défilé aux reflets prismatiques et coupes déstructurées audacieuses.",
      en: "Prismatic runway stage creation featuring daring deconstructed silhouettes."
    },
    description: {
      fr: "Conçu pour briller sous les projecteurs des défilés internationaux, cet ensemble réconcilie l’audace moderne et la rigueur de la confection sur mesure.",
      en: "Designed to radiate under international runway spotlamps, bridging avant-garde daring and bespoke structural discipline."
    },
    materials: {
      fr: "Étoffe satinée réflective, organza texturé, doublure douce.",
      en: "Reflective satin textile, textured organza, soft lining."
    },
    craftDetails: {
      fr: "Asymétrie étudiée pour flatter la silhouette en mouvement sur le podium.",
      en: "Calibrated asymmetry engineered to flatter human posture in dynamic motion."
    },
    estimatedLeadTime: {
      fr: "18 à 22 jours ouvrés",
      en: "18 to 22 business days"
    },
    coverImage: "/Junior%20Zeus%20Style/defile/557542300_1402492398549894_2838079049768727856_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/defile/557542300_1402492398549894_2838079049768727856_n.jpg"
    ],
    isFeatured: false,
    priceEstimate: "Confection exclusive : 460 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-defile-eclipse",
    slug: "creation-defile-avant-garde-eclipse",
    title: {
      fr: "Création Défilé Avant-Garde \"Éclipse\"",
      en: "Avant-Garde Runway Gown \"Eclipse\""
    },
    category: "defile",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Haute Couture Défilé",
      en: "Runway Haute Couture"
    },
    year: 2026,
    status: "piece_unique",
    summary: {
      fr: "Fourreau noir graphique traversé d’une fente lumière argentée asymétrique.",
      en: "Graphic black gown sliced by an asymmetric silver light ray slit."
    },
    description: {
      fr: "Une déclaration artistique forte qui a marqué le défilé Junior Zeus Style. La coupe épurée et le contraste saisissant créent un impact visuel inoubliable.",
      en: "A commanding artistic statement from the Junior Zeus runway. The refined lines and striking contrast create an unforgettable aesthetic signature."
    },
    materials: {
      fr: "Drap de soie lourd noir minuit, lamé argent haute résistance.",
      en: "Heavy midnight black silk cloth, high-resilience silver lamé."
    },
    craftDetails: {
      fr: "Incrustation biseautée au fer à repasser de tailleur sans aucune couture apparente.",
      en: "Bespoke iron-pressed seamless inlaid facet without visible surface stitching."
    },
    estimatedLeadTime: {
      fr: "16 à 20 jours ouvrés",
      en: "16 to 20 business days"
    },
    coverImage: "/Junior%20Zeus%20Style/defile/499993321_1278675477598254_978064014177508531_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/defile/499993321_1278675477598254_978064014177508531_n.jpg"
    ],
    isFeatured: false,
    priceEstimate: "Confection exclusive : 420 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-innov-sculpture-vortex",
    slug: "creation-sculpturale-innovante-vortex",
    title: {
      fr: "Création Sculpturale Innovante \"Vortex\"",
      en: "Sculptural Innovation Silhouette \"Vortex\""
    },
    category: "innovation",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Innovations & Art Couture",
      en: "Innovations & Art Couture"
    },
    year: 2026,
    status: "piece_unique",
    summary: {
      fr: "Ligne sculpturale tridimensionnelle aux volumes ondulatoires audacieux défiant la gravité.",
      en: "Three-dimensional wave-like sculptural silhouette defying gravity with innovative drapery."
    },
    description: {
      fr: "La recherche et développement de l’atelier Junior Zeus Style au service de l’art vestimentaire. Une création qui explore la rencontre entre la géométrie architecturale et la souplesse du corps humain.",
      en: "Atelier Junior Zeus Style R&D dedicated to wearable art. Exploring the intersection between architectural geometry and organic bodily grace."
    },
    materials: {
      fr: "Textile technique sculptable à mémoire de forme, soie naturelle, inserts rigides légers.",
      en: "Shape-memory sculptural techno-textile, natural silk, lightweight internal supports."
    },
    craftDetails: {
      fr: "Modelage thermique exclusif mis au point à l’atelier de Yaoundé.",
      en: "Exclusive thermal molding technique perfected in our Yaoundé atelier."
    },
    estimatedLeadTime: {
      fr: "Sur commande d’art exclusive : 20 à 30 jours",
      en: "Exclusive art commission: 20 to 30 days"
    },
    coverImage: "/Junior%20Zeus%20Style/innovation/557452931_1402493685216432_1023208288924938565_n.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/innovation/557452931_1402493685216432_1023208288924938565_n.jpg"
    ],
    isFeatured: true,
    priceEstimate: "Confection d’art sur commande : 450 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-innov-constellation",
    slug: "robe-conceptuelle-innovante-constellation",
    title: {
      fr: "Robe Conceptuelle Innovante \"Constellation Morphologique\"",
      en: "Conceptual Innovation Gown \"Morphologic Constellation\""
    },
    category: "innovation",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Innovations & Art Couture",
      en: "Innovations & Art Couture"
    },
    year: 2026,
    status: "sur_commande",
    summary: {
      fr: "Recherche morphologique innovante alliant découpe laser et assemblage traditionnel sur mesure.",
      en: "Innovative morphological research combining precision laser cutting with bespoke craftsmanship."
    },
    description: {
      fr: "Une pièce visionnaire qui repousse les standards de la haute confection au Cameroun. Les découpes précises épousent la courbure anatomique avec un équilibre saisissant.",
      en: "A visionary creation pushing haute couture boundaries in Cameroon. Tailored cuts wrap around anatomical posture with gripping poise."
    },
    materials: {
      fr: "Satin technique thermo-stabilisé, soie mate et fils réfléchissants.",
      en: "Thermo-stabilized technical satin, matte silk, and reflective micro-filaments."
    },
    craftDetails: {
      fr: "Découpe numérique complétée d’un montage et roulotté intégralement exécutés à la main.",
      en: "Precision cutting complemented by fully hand-rolled edge construction."
    },
    estimatedLeadTime: {
      fr: "16 à 20 jours ouvrés",
      en: "16 to 20 business days"
    },
    coverImage: "/Junior%20Zeus%20Style/innovation/robe%201.jpg",
    gallery: [
      "/Junior%20Zeus%20Style/innovation/robe%201.jpg",
      "/Junior%20Zeus%20Style/innovation/robe%201%20gallery.jpg"
    ],
    isFeatured: false,
    priceEstimate: "Confection sur commande : 380 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-zeus-tunique-rouge",
    slug: "tunique-imperiale-ecarlate-broderies",
    title: {
      fr: "Tunique Impériale Écarlate & Broderies Florales",
      en: "Imperial Scarlet Tunic with Floral Embroidery"
    },
    category: "sur-mesure",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Haute Couture Signature",
      en: "Signature Haute Couture"
    },
    year: 2026,
    status: "sur_commande",
    summary: {
      fr: "Silhouette iconique portée par Junior Zeus : col officier net, boutonnage asymétrique et somptueuses broderies florales.",
      en: "Iconic creation worn by Junior Zeus: clean stand collar, asymmetric line, and exquisite floral embroidery."
    },
    description: {
      fr: "Pièce maîtresse emblématique de la maison Junior Zeus Style, immortalisée sur l’affiche officielle de l’atelier. Confectionnée dans un sergé satiné carmin avec une majestueuse cascade de fleurs brodées au fil d’or et ivoire sur le buste.",
      en: "Signature masterpiece of Junior Zeus Style as showcased on the official atelier poster. Tailored in crimson satin twill with cascading ivory and gold floral embroideries."
    },
    materials: {
      fr: "Sergé de coton et soie rouge impérial, broderies guipure florales, boutons dissimulés.",
      en: "Imperial red cotton-silk twill, floral guipure embroidery, concealed buttoning."
    },
    craftDetails: {
      fr: "32 heures de confection minutieuse à l’atelier de Yaoundé. Broderies et surpiqûres exécutées à la main.",
      en: "32 atelier craft hours in Yaoundé. Hand-guided embroidery and tailored felled seams."
    },
    estimatedLeadTime: {
      fr: "10 à 12 jours ouvrés",
      en: "10 to 12 business days"
    },
    coverImage: "/affiche-junior-zeus.jpg",
    gallery: [
      "/affiche-junior-zeus.jpg"
    ],
    isFeatured: true,
    priceEstimate: "Confection sur mesure : 175 000 FCFA",
    needsRealPhoto: false
  },
  {
    id: "cr-robe-sirene-azur",
    slug: "robe-sirene-azur-roses-sculptees",
    title: {
      fr: "Robe Sirène Azur & Roses Sculptées",
      en: "Celestial Azure Mermaid Gown with Sculpted Roses"
    },
    category: "robe-soiree",
    collectionId: "col-ongola",
    collectionName: {
      fr: "Soirées & Galas de Prestige",
      en: "Prestige Evening & Gala"
    },
    year: 2026,
    status: "disponible",
    summary: {
      fr: "Robe de soirée et gala bleu ciel en coupe sirène avec roses tridimensionnelles sculpturales.",
      en: "Sky blue gala evening gown in sculpted mermaid cut with handcrafted 3D roses."
    },
    description: {
      fr: "Modèle issu de l’affiche officielle Junior Zeus Style. Coupe sirène ajustée qui sublime la démarche, confectionnée en satin duchesse lumineux et rehaussée de volumineuses roses en tissu modelées à la main.",
      en: "Design from the official Junior Zeus Style poster. Tailored mermaid cut accentuating posture, crafted in radiant duchess satin with handmade 3D fabric roses."
    },
    materials: {
      fr: "Satin duchesse bleu azur ciel, doublure douce respirante, baleinage anatomique.",
      en: "Celestial azure duchess satin, breathable lining, anatomical corsetry stays."
    },
    craftDetails: {
      fr: "Pétales modelés un par un à chaud pour une fleur en relief immortelle.",
      en: "Individually heat-shaped petals creating enduring 3D sculpted floral relief."
    },
    estimatedLeadTime: {
      fr: "Sur mesure : 12 à 15 jours ouvrés · Location : Disponible",
      en: "Bespoke: 12 to 15 business days · Rental: Available"
    },
    coverImage: "/affiche-junior-zeus.jpg",
    gallery: [
      "/affiche-junior-zeus.jpg"
    ],
    isFeatured: true,
    priceEstimate: "Location : 75 000 FCFA · Confection sur mesure : 260 000 FCFA",
    needsRealPhoto: false
  }
];

export const INITIAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-01',
    slug: 'la-precision-du-geste-dans-l-atelier-de-yaounde',
    title: {
      fr: 'La précision du geste : coulisses de l’atelier à Yaoundé',
      en: 'The Precision of Craft: Inside the Yaoundé Atelier'
    },
    category: 'Coulisses',
    publishedAt: '2026-03-12',
    readTime: {
      fr: '4 min de lecture',
      en: '4 min read'
    },
    excerpt: {
      fr: 'Chaque silhouette Junior Zeus Style naît d’une rencontre entre l’anatomie du client, la craie du maître tailleur et des étoffes choisies sans compromis.',
      en: 'Every Junior Zeus Style silhouette begins with a convergence of client anatomy, the master cutter’s chalk, and uncompromising textiles.'
    },
    content: [
      {
        fr: 'Dans notre atelier situé à Yaoundé, chaque création débute par une prise de mesure rigoureuse. Au-delà des simples centimètres, Ariel Junior Nzesseu observe la posture, le port de tête et l’allure naturelle de la personne. Le vêtement doit magnifier son port altier sans jamais contraindre le corps.',
        en: 'In our Yaoundé atelier, every creation starts with rigorous anatomical measurements. Beyond simple tape metrics, Ariel Junior Nzesseu observes posture, head carriage, and natural stride. The garment must elevate personal presence without restricting movement.'
      },
      {
        fr: 'La craie blanche trace alors sur le drap de laine les lignes maîtresses. Chaque revers est coupé à la main avec nos cisailles en laiton lourd. Ce temps long de la confection artisanale est l’antithèse de la mode jetable : nous construisons des pièces destinées à traverser les saisons.',
        en: 'White tailor chalk traces master lines onto cool wool cloth. Every lapel is carved by hand with heavy brass shears. This measured slowness is the deliberate antithesis of fast fashion: we build enduring garments meant to outlast seasons.'
      },
      {
        fr: 'Nos clients à Yaoundé, Douala ou de la diaspora reviennent pour cette exigence tactile : sentir une doublure posée au millimètre, une fente qui retombe impeccablement au pas, une boutonnière cousue au fil de soie.',
        en: 'Clients from Yaoundé, Douala, and abroad seek this tactile discipline: experiencing lining tailored to the millimeter, a jacket vent that falls cleanly with each stride, and silk-stitched buttonholes.'
      }
    ],
    coverImage: '/src/assets/images/hero_atelier_couture_1790586086146.jpg',
    author: 'Junior Zeus Style',
    featured: true,
    needsRealPhoto: false
  },
  {
    id: 'art-02',
    slug: 'le-sur-mesure-africain-contemporain',
    title: {
      fr: 'Le sur-mesure contemporain : affirmer son identité par le vestiaire',
      en: 'Contemporary Bespoke: Asserting Identity Through Sartorial Form'
    },
    category: 'Savoir-faire',
    publishedAt: '2026-02-18',
    readTime: {
      fr: '3 min de lecture',
      en: '3 min read'
    },
    excerpt: {
      fr: 'Comment réconcilier les codes sartoriaux internationaux et la prestance des coupes camerounaises ? Réflexion d’Ariel Junior Nzesseu.',
      en: 'Reconciling international sartorial discipline with the commanding majesty of Cameroonian cuts: insights by Ariel Junior Nzesseu.'
    },
    content: [
      {
        fr: 'Loin des reproductions stéréotypées, la mode africaine contemporaine s’exprime aujourd’hui par la netteté de sa structure et la noblesse de ses matières. Chez Junior Zeus Style, nous croyons qu’un costume ou une tunique de cérémonie doit traduire l’ambition et la force tranquille de celui qui la porte.',
        en: 'Far from stereotyped tropes, contemporary African couture commands attention through sharp structural geometry and noble textiles. At Junior Zeus Style, we believe ceremonial suits and tunics must articulate the ambition and quiet authority of their wearer.'
      },
      {
        fr: 'Le choix d’une palette noir encre, ivoire chaud et bronze permet de mettre en valeur les visages et les carnations sans bruit visuel. Le luxe véritable réside dans le tombé de l’étoffe et l’exactitude de l’emmanchure.',
        en: 'A curated palette of ink black, warm ivory, and bronze illuminates skin tones and facial expressions without visual distraction. True luxury lives in the drape of cloth and armhole precision.'
      }
    ],
    coverImage: encodeURI('/Junior Zeus Style/hero 3.jpg'),
    author: 'Ariel Junior Nzesseu',
    featured: true,
    needsRealPhoto: false
  },
  {
    id: 'art-03',
    slug: 'guide-du-premier-essayage-a-l-atelier',
    title: {
      fr: 'Préparer son premier rendez-vous de création sur mesure',
      en: 'Preparing for Your First Bespoke Tailoring Appointment'
    },
    category: 'Inspiration',
    publishedAt: '2026-01-25',
    readTime: {
      fr: '5 min de lecture',
      en: '5 min read'
    },
    excerpt: {
      fr: 'Délais, choix des tissus, prise de mensurations et étapes clés avant le grand jour : le guide d’accueil de notre atelier à Yaoundé.',
      en: 'Timelines, cloth curation, measurements, and milestones before the event: our Yaoundé atelier appointment guide.'
    },
    content: [
      {
        fr: 'Commander une pièce sur mesure chez Junior Zeus Style est un parcours collaboratif. Nous recommandons de nous contacter via WhatsApp environ 3 à 4 semaines avant votre événement (mariage, gala, investiture ou cérémonies).',
        en: 'Commissioning a bespoke garment at Junior Zeus Style is a collaborative journey. We recommend contacting us on WhatsApp 3 to 4 weeks prior to your milestone date (wedding, gala, or ceremonial event).'
      },
      {
        fr: 'Lors du premier échange, vous définissez vos envies avec le styliste : silhouette souhaitée, palette de couleurs, contexte d’usage et saisonnalité. Un prototype ou toile d’essayage permet ensuite d’ajuster l’équilibre des volumes avant la coupe définitive du tissu précieux.',
        en: 'During your initial consultation, you review intentions directly with the designer: preferred silhouette, chromatic palette, event context, and climate. A canvas fitting then refines volumes before final shears touch the luxury cloth.'
      }
    ],
    coverImage: '/src/assets/images/atelier_fitting_space_1790586126242.jpg',
    author: 'Junior Zeus Style',
    featured: false,
    needsRealPhoto: false
  }
];

export const SAVOIR_FAIRE_STEPS = [
  {
    number: '01',
    title: {
      fr: 'L’Écoute & le Croquis',
      en: 'Consultation & Sketch'
    },
    description: {
      fr: 'Échange intime sur votre morphologie, vos aspirations et l’occasion. Ébauche des lignes de force et sélection des étoffes.',
      en: 'In-depth consultation on your silhouette, intent, and occasion. Sketching master lines and curating textile weights.'
    }
  },
  {
    number: '02',
    title: {
      fr: 'La Coupe Anatomique',
      en: 'Anatomical Cutting'
    },
    description: {
      fr: 'Prise de 24 points de mesure. Tracé direct à la craie sur le tissu et découpe manuelle respectant le droit-fil.',
      en: 'Recording 24 anatomical metrics. Direct tailor chalk mapping and precise manual cutting along the fabric grain.'
    }
  },
  {
    number: '03',
    title: {
      fr: 'L’Entoilage & Assemblage',
      en: 'Canvassing & Assembly'
    },
    description: {
      fr: 'Montage traditionnel des plastrons en crin de cheval et toiles souples pour assurer un tombé durable qui épouse le buste.',
      en: 'Traditional horsehair canvas chest construction providing lasting structure that sculpts seamlessly to the chest.'
    }
  },
  {
    number: '04',
    title: {
      fr: 'L’Essayage Atelier',
      en: 'Atelier Fitting'
    },
    description: {
      fr: 'Rendez-vous à Yaoundé ou ajustements à distance selon gabarit. Vérification de l’aisance, du cintrage et de la longueur.',
      en: 'In-person Yaoundé fitting or structured remote fitting. Fine-tuning poise, waist taper, and cuff fall.'
    }
  },
  {
    number: '05',
    title: {
      fr: 'Les Finitions Haute Couture',
      en: 'Haute Couture Finishing'
    },
    description: {
      fr: 'Boutonnières cousues main, surpiqûres sellier, repassage de forme au fer lourd et housse de protection siglée.',
      en: 'Hand-worked buttonholes, saddle pick stitching, heavy iron shape-setting, and branded garment bag presentation.'
    }
  }
];

export const BRAND_VALUES = [
  {
    title: {
      fr: 'Exigence du tombé',
      en: 'Architectural Drape'
    },
    description: {
      fr: 'Aucun compromis sur la coupe. Chaque veste et chaque ensemble est équilibré pour flatter la stature sans raideur.',
      en: 'No compromise on the cut. Each jacket and garment is calibrated to enhance presence with effortless ease.'
    }
  },
  {
    title: {
      fr: 'Matières d’exception',
      en: 'Noble Textiles'
    },
    description: {
      fr: 'Laines fines, cotons peignés lourds, lins denses et jacquards sélectionnés pour leur tenue thermique et leur lustre sobre.',
      en: 'Fine wools, heavy combed cottons, dense linens, and jacquards selected for thermal performance and discreet luster.'
    }
  },
  {
    title: {
      fr: 'Proximité & Écoute',
      en: 'Personalized Kinship'
    },
    description: {
      fr: 'Une relation directe avec le créateur Ariel Junior Nzesseu. Chaque client est accompagné pas à pas via WhatsApp et à l’atelier.',
      en: 'Direct dialogue with designer Ariel Junior Nzesseu. Every client is guided closely via WhatsApp and in the workshop.'
    }
  },
  {
    title: {
      fr: 'Ancrage & Modernité',
      en: 'Heritage & Modernity'
    },
    description: {
      fr: 'Enraciné à Yaoundé, ouvert sur le monde. Une vision contemporaine qui transcende les frontières culturelles.',
      en: 'Rooted in Yaoundé, commanding worldwide resonance. Contemporary vision transcending geographical boundaries.'
    }
  }
];

export const CHECKLIST_ITEMS_TO_CONFIRM = [
  {
    id: 'chk-address',
    category: 'Localisation',
    title: 'Adresse physique officielle de l’atelier',
    detail: 'Confirmée par l’affiche officielle : "Yaoundé - Descente Éleveur, face Turbo Distribution Center".',
    status: 'confirmed'
  },
  {
    id: 'chk-phone',
    category: 'Contact',
    title: 'Numéro de téléphone & WhatsApp principal',
    detail: 'Confirmé par l’affiche officielle : 691 08 73 82 (+237 691 08 73 82).',
    status: 'confirmed'
  },
  {
    id: 'chk-email',
    category: 'Contact',
    title: 'Boîte e-mail officielle de réception',
    detail: 'Confirmée par l’affiche officielle : juniortamno13@gmail.com.',
    status: 'confirmed'
  },
  {
    id: 'chk-socials',
    category: 'Réseaux Sociaux',
    title: 'Identifiants Facebook et Instagram',
    detail: 'Confirmés par l’affiche officielle : Facebook "Junior Zeus style" et Instagram "Junior Zeus style".',
    status: 'confirmed'
  },
  {
    id: 'chk-services',
    category: 'Prestations',
    title: 'Les 4 piliers de services de la Maison',
    detail: 'Confirmés par l’affiche officielle : 1. Haute couture mixte, 2. Confection et location de robes de mariées et de soirée, 3. Confection de tenues africaines et de ville, 4. Formation professionnelle.',
    status: 'confirmed'
  },
  {
    id: 'chk-photos',
    category: 'Contenu & Visuels',
    title: 'Affiche officielle & créations réelles',
    detail: 'Affiche officielle intégrée avec les modèles réels du créateur (tunique rouge brodée, robes de mariée et sirène).',
    status: 'confirmed'
  },
  {
    id: 'chk-pricing',
    category: 'Commerce',
    title: 'Politique de devis et acomptes sur mesure',
    detail: 'Tarifs indicatifs disponibles en ligne avec devis et validation sur mesure via WhatsApp.',
    status: 'confirmed'
  }
];

export const INITIAL_SERVICES: Service[] = [
  {
    id: 'srv-haute-couture-mixte',
    slug: 'haute-couture-mixte',
    title: {
      fr: 'Haute Couture Mixte',
      en: 'Bespoke Haute Couture (Men & Women)'
    },
    tagline: {
      fr: 'Costumes masculins et silhouettes féminines d’exception taillés à vos mesures exactes.',
      en: 'Bespoke men’s tailoring and women’s haute couture sculpted to your exact proportions.'
    },
    description: {
      fr: 'Création sartoriale haut de gamme pour femmes et hommes : costumes deux et trois pièces, vestes croisées impériales, tailleurs structurés et silhouettes de prestige. Chaque modèle bénéficie d’un patronage sur mesure individuel, d’étoffes nobles et de finitions minutieuses faites main par le maître tailleur.',
      en: 'High-end bespoke tailoring for women and men: two and three-piece suits, imperial double-breasted jackets, structured tailoring, and ceremonial ensembles with custom pattern drafting and luxury handcraft.'
    },
    features: [
      { fr: 'Patronage individuel sur mesure pour hommes et dames', en: 'Individual bespoke drafting for men and women' },
      { fr: 'Laines froides d’Italie 120s à 150s, soies et jacquards de luxe', en: 'Italian 120s to 150s cool wools, luxury silks, and jacquards' },
      { fr: '2 à 3 séances d’essayage dédiées à l’atelier de Yaoundé', en: '2 to 3 dedicated fitting sessions at Yaoundé atelier' },
      { fr: 'Boutonnières milanaises et surpiqûres sellier faites main', en: 'Handcrafted Milanese buttonholes and pick stitching' }
    ],
    startingPrice: '130 000 FCFA (~200 €)',
    leadTime: {
      fr: '10 à 14 jours ouvrés',
      en: '10 to 14 business days'
    },
    iconName: 'Scissors',
    image: '/src/assets/images/creation_sartorial_suit_1790588825616.jpg',
    isPopular: true
  },
  {
    id: 'srv-robes-mariees-soiree',
    slug: 'robes-mariees-et-soiree',
    title: {
      fr: 'Confection et Location de Robes de Mariées et de Soirée',
      en: 'Bridal & Evening Gowns Tailoring and Rental'
    },
    tagline: {
      fr: 'Robes de mariée somptueuses et tenues de gala, en confection sur mesure ou en location clé en main.',
      en: 'Majestic bridal gowns and evening gala wear, available as bespoke couture or rental.'
    },
    description: {
      fr: 'Pour le plus beau jour de votre vie et vos grands événements : robes de mariée de style princesse ou sirène, voiles brodés, corseterie sculptante, dentelles perlées et robes de soirée d’apparat. La maison vous propose au choix la confection sur mesure personnalisée ou une formule de location avec ajustements morphologiques inclus.',
      en: 'For unforgettable weddings and prestigious galas: princess and mermaid bridal gowns, embroidered veils, sculpted corsetry, and evening attire. We provide both exclusive bespoke tailoring and convenient rental with personalized alterations included.'
    },
    features: [
      { fr: 'Option confection sur mesure exclusive ou formule location clé en main', en: 'Bespoke custom creation or all-inclusive turnkey rental' },
      { fr: 'Robes de mariée princesse, coupes sirène, voiles et ornements', en: 'Princess and mermaid wedding dresses with matching veils' },
      { fr: 'Robes de soirée, galas, cocktails et demoiselles d’honneur', en: 'Evening gowns, galas, cocktails, and bridesmaids sets' },
      { fr: 'Ajustements morphologiques et mise en beauté inclus', en: 'Morphological fitting adjustments included' }
    ],
    startingPrice: 'Location dès 50 000 FCFA · Confection dès 150 000 FCFA',
    leadTime: {
      fr: 'Sur mesure : 12-18 jours · Location : Disponible immédiatement',
      en: 'Custom: 12-18 days · Rental: Immediate availability'
    },
    iconName: 'Sparkles',
    image: '/src/assets/images/creation_robe_draping_1790588840264.jpg',
    isPopular: true
  },
  {
    id: 'srv-tenues-africaines-ville',
    slug: 'tenues-africaines-et-de-ville',
    title: {
      fr: 'Confection de Tenues Africaines et de Ville',
      en: 'African Heritage & Modern City Wear Tailoring'
    },
    tagline: {
      fr: 'L’élégance africaine contemporaine et le raffinement urbain au quotidien.',
      en: 'Contemporary African poise and refined urban styling for every occasion.'
    },
    description: {
      fr: 'Des créations qui célèbrent le patrimoine avec modernité : tuniques brodées signature au fil d’or ou bronze (comme la tenue rouge emblématique du créateur), boubous contemporains épurés, complets de ville vestes et pantalons, chemises stylisées. Coupe fluide, matières respirantes et finitions d’orfèvre.',
      en: 'Garments celebrating heritage with modern flair: signature gold or bronze-embroidered tunics, contemporary boubous, urban trouser and jacket suits, and stylized shirts. Fluid drape, breathable luxury fabrics, and exquisite craftsmanship.'
    },
    features: [
      { fr: 'Tuniques brodées signature et complets afritude contemporains', en: 'Signature embroidered tunics and contemporary afritude sets' },
      { fr: 'Tenues de ville chics, vestes modernes et pantalons ajustés', en: 'Urban chic wear, modern jackets, and tailored trousers' },
      { fr: 'Sélection de bazins riches, cotons damassés et lins nobles', en: 'Rich bazin, heavy damask cotton, and fine noble linens' },
      { fr: 'Broderies géométriques et florales guidées main à l’atelier', en: 'Hand-guided geometric and floral embroidery motifs' }
    ],
    startingPrice: '75 000 FCFA (~115 €)',
    leadTime: {
      fr: '7 à 10 jours ouvrés',
      en: '7 to 10 business days'
    },
    iconName: 'Crown',
    image: '/src/assets/images/atelier_fitting_space_1790586126242.jpg',
    isPopular: true
  },
  {
    id: 'srv-formation-pro',
    slug: 'formation-professionnelle-couture',
    title: {
      fr: 'Formation Professionnelle en Couture & Stylisme',
      en: 'Professional Tailoring & Fashion Design Training'
    },
    tagline: {
      fr: 'Apprenez le métier d’art et la haute confection au sein de l’atelier Junior Zeus Style.',
      en: 'Master haute couture craftsmanship inside the Junior Zeus Style active atelier.'
    },
    description: {
      fr: 'Programme d’apprentissage pratique et intensif dispensé par Ariel Junior Nzesseu et son équipe de maîtres tailleurs à Yaoundé. De la prise de mesure au patronage, modélisme, coupe sur mesure, maniement des machines industrielles, broderie d’art et techniques d’assemblage haut de gamme.',
      en: 'Hands-on practical apprenticeship curriculum led by Ariel Junior Nzesseu and his master tailors in Yaoundé. From anatomical measuring to pattern drafting, modeling, bespoke cutting, industrial machinery, embroidery, and luxury assembly techniques.'
    },
    features: [
      { fr: 'Immersion pratique au sein d’un atelier professionnel actif', en: 'Practical immersion inside an active professional atelier' },
      { fr: 'Apprentissage du patronage, de la coupe et du modélisme', en: 'Pattern making, cutting, and fashion drafting' },
      { fr: 'Haute couture mixte (vêtements hommes, femmes, cérémonies)', en: 'Men & women haute couture and ceremonial wear' },
      { fr: 'Attestation de formation & mentorat entrepreneurial personnalisé', en: 'Completion certificate and entrepreneurial mentoring' }
    ],
    startingPrice: 'Modules dès 60 000 FCFA / mois',
    leadTime: {
      fr: 'Sessions de 3 mois, 6 mois et 12 mois',
      en: '3, 6, and 12-month training sessions'
    },
    iconName: 'GraduationCap',
    image: '/src/assets/images/hero_atelier_couture_1790586086146.jpg',
    isPopular: true
  },
  {
    id: 'srv-mariage',
    slug: 'mariage-cortege-prestige',
    title: {
      fr: 'Mariages & Habillage de Cortège',
      en: 'Weddings & Groom Party Tailoring'
    },
    tagline: {
      fr: 'Une allure inoubliable pour le marié et une harmonie parfaite pour les témoins.',
      en: 'Unforgettable poise for the groom and coordinated harmony for groomsmen.'
    },
    description: {
      fr: 'Prise en charge intégrale de la garde-robe de mariage : costume d’exception du marié (smoking, queue-de-pie revisitée ou ensemble traditionnel d’apparat), costumes assortis des témoins, pères et garçons d’honneur.',
      en: 'Complete wedding wardrobe curation: prestige tuxedo or ceremonial suit for the groom, harmonized attire for best men, fathers, and groomsmen.'
    },
    features: [
      { fr: 'Coordination chromatique complète du cortège', en: 'Full color and textile coordination for the wedding party' },
      { fr: 'Tarifs dégressifs pour les groupes à partir de 3 pièces', en: 'Preferential packages for groups of 3+ pieces' },
      { fr: 'Repassage vapeur haute pression et livraison sous housses siglées', en: 'High-pressure steam pressing and branded garment bags' },
      { fr: 'Assistance habillage le jour J disponible sur demande à Yaoundé', en: 'On-site dressing assistance available upon request in Yaoundé' }
    ],
    startingPrice: '250 000 FCFA (~380 €)',
    leadTime: {
      fr: '15 à 21 jours ouvrés (réservation recommandée 1 mois avant)',
      en: '15 to 21 business days (booking 1 month ahead recommended)'
    },
    iconName: 'HeartHandshake',
    image: '/src/assets/images/creation_ceremonie_gold_1790588810602.jpg',
    isPopular: false
  },
  {
    id: 'srv-retouches',
    slug: 'retouches-ajustements-experts',
    title: {
      fr: 'Retouches Haut de Gamme & Remise à Mesure',
      en: 'Master Alterations & Bespoke Resizing'
    },
    tagline: {
      fr: 'Donnez une seconde jeunesse et un tombé parfait à vos vêtements de valeur.',
      en: 'Restore flawless poise and precision fit to your prized luxury garments.'
    },
    description: {
      fr: 'Cintrage de vestes de costume, reprise d’épaules, raccourcissement de manches par la tête d’épaule (préservant les vraies boutonnières), ajustement de taille et d’ourlets invisibles.',
      en: 'Suit jacket waist suppression, shoulder narrowings, sleeve adjustments through armhole crown, trouser waist adjustment, and hand-finished invisible hems.'
    },
    features: [
      { fr: 'Diagnostic morphologique préalable sur pièce portée', en: 'Morphological assessment on worn garment' },
      { fr: 'Respect strict des piqûres et fils d’origine de la marque', en: 'Strict respect of original thread density and pick stitches' },
      { fr: 'Service express disponible sous 48h sur demande', en: 'Express 48h turnaround available upon request' },
      { fr: 'Contrôle qualité strict au fer lourd d’atelier', en: 'Strict quality control with heavy workshop iron' }
    ],
    startingPrice: '15 000 FCFA (~23 €)',
    leadTime: {
      fr: '2 à 4 jours ouvrés (Express 48h possible)',
      en: '2 to 4 business days (Express 48h available)'
    },
    iconName: 'Wrench',
    image: '/src/assets/images/textile_craft_detail_1790586114656.jpg',
    isPopular: false
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-01',
    clientName: 'Dr. Emmanuel M.',
    role: {
      fr: 'Haut cadre & Diplomate',
      en: 'Senior Diplomat & Executive'
    },
    location: 'Yaoundé, Quartier Bastos',
    quote: {
      fr: 'Junior Zeus a conçu mon costume pour une cérémonie officielle à l’ambassade. La précision de la coupe asymétrique et la tenue du col montant ont fait l’admiration de tous mes homologues. Une maîtrise sartoriale rare à Yaoundé.',
      en: 'Junior Zeus crafted my suit for an official embassy ceremony. The razor precision of the asymmetric cut and collar stance drew immense admiration. Truly rare sartorial mastery in Yaoundé.'
    },
    rating: 5,
    pieceMade: {
      fr: 'Costume Impérial Zeus en laine froide 130s',
      en: 'Imperial Zeus Ensemble in super 130s wool'
    }
  },
  {
    id: 't-02',
    clientName: 'Patrick & Sophie N.',
    role: {
      fr: 'Mariés 2026',
      en: 'Newlyweds 2026'
    },
    location: 'Paris (Diaspora) & Yaoundé',
    quote: {
      fr: 'Vivant en France, nous avions peur de gérer les tenues de notre mariage à distance. Ariel Junior a géré nos mensurations par visio et photos, et le résultat lors du premier essayage à Yaoundé était parfait. Mes 4 témoins étaient également impeccables.',
      en: 'Living in France, we were anxious about coordinating our wedding outfits remotely. Ariel Junior handled our measurements via video and photos, and the fitting in Yaoundé was flawless. My 4 best men looked spectacular.'
    },
    rating: 5,
    pieceMade: {
      fr: 'Smoking de Mariage Sur-mesure & Cortège 4 Témoins',
      en: 'Bespoke Wedding Tuxedo & 4-Piece Groomsmen Attire'
    }
  },
  {
    id: 't-03',
    clientName: 'Diane Carole S.',
    role: {
      fr: 'Entrepreneure Tech & Conférencière',
      en: 'Tech Entrepreneur & Keynote Speaker'
    },
    location: 'Douala / Yaoundé',
    quote: {
      fr: 'Une robe de soirée haute couture qui conjugue rigueur géométrique et aisance absolue. J’ai pu animer un gala de 4 heures tout en me sentant confiante et sublimée. Le tissu satiné réagit merveilleusement à la lumière des projecteurs.',
      en: 'A haute couture gown combining geometric rigor and effortless comfort. I hosted a 4-hour gala feeling thoroughly empowered and elegant. The lustrous satin catches stage lighting beautifully.'
    },
    rating: 5,
    pieceMade: {
      fr: 'Robe Fourreau Drapée Ébène & Fil Or',
      en: 'Draped Sheath Gown in Ebony & Gold Thread'
    }
  },
  {
    id: 't-04',
    clientName: 'Maître Cédric T.',
    role: {
      fr: 'Avocat au Barreau',
      en: 'Bar Attorney & Partner'
    },
    location: 'Yaoundé, Centre Administratif',
    quote: {
      fr: 'Je confie l’ensemble de mes vestes d’audience et de réception à Junior Zeus Style depuis plus de deux ans. Le tombé est net, la cambrure ne plisse jamais et le contact direct via WhatsApp permet de commander en toute fluidité.',
      en: 'I have entrusted all my court and reception jackets to Junior Zeus Style for over two years. The drape is immaculate, waist holds without creasing, and direct WhatsApp contact makes ordering effortless.'
    },
    rating: 5,
    pieceMade: {
      fr: 'Veste Croisée Ébène & 3 Costumes d’Affaires',
      en: 'Double-Breasted Ebony Jacket & 3 Business Suits'
    }
  },
  {
    id: 't-05',
    clientName: 'Yannick B.',
    role: {
      fr: 'Directeur Artistique',
      en: 'Creative Director'
    },
    location: 'Montréal (Canada)',
    quote: {
      fr: 'Junior Zeus Style réussit ce que beaucoup ratent : réinventer l’habit africain sans tomber dans le déjà-vu. La tunique moderne que j’ai reçue à Montréal est d’une finition digne des grandes maisons de luxe internationales.',
      en: 'Junior Zeus Style achieves what many miss: reinventing African heritage without clichés. The modern tunic I received in Montreal rivals international luxury fashion houses in craftsmanship.'
    },
    rating: 5,
    pieceMade: {
      fr: 'Ensemble Tunique Contemporaine à Col Officier',
      en: 'Contemporary Tunic Set with Mandarin Collar'
    }
  }
];

export const INITIAL_FAQS: FAQItem[] = [
  {
    id: 'faq-01',
    question: {
      fr: 'Comment se déroule un premier rendez-vous à l’atelier de Yaoundé ?',
      en: 'How does an initial consultation proceed at the Yaoundé atelier?'
    },
    answer: {
      fr: 'Vous êtes accueilli personnellement par Ariel Junior Nzesseu dans notre espace d’essayage (Yaoundé - Descente Éleveur, face Turbo Distribution Center). Durant 30 à 45 minutes, nous échangeons sur votre silhouette, l’occasion pour laquelle vous commandez, et nous prenons l’ensemble de vos mensurations. Vous pouvez toucher et sélectionner les étoffes directement sur place.',
      en: 'You are welcomed personally by Ariel Junior Nzesseu at our fitting room (Yaoundé - Descente Éleveur, opposite Turbo Distribution Center). During 30-45 minutes, we discuss your silhouette and occasion, take comprehensive measurements, and let you touch and select fabric bolts on-site.'
    },
    category: 'essayages'
  },
  {
    id: 'faq-02',
    question: {
      fr: 'Quels sont les délais moyens de confection pour une pièce sur mesure ?',
      en: 'What is the average lead time for a bespoke garment?'
    },
    answer: {
      fr: 'Le délai standard est de 10 à 14 jours ouvrés pour un costume sur mesure ou une robe d’apparat, incluant un premier essayage d’ajustement intermédiaire. Pour les tenues de mariage ou grands cortèges, nous préconisons un délai de 3 à 4 semaines. En cas d’urgence, une formule express (48h à 72h) peut être validée selon le planning de l’atelier.',
      en: 'Standard lead time is 10 to 14 business days for a bespoke suit or gown, including an intermediate fitting. For weddings or large bridal parties, 3-4 weeks is advised. An express rush service (48-72h) can be arranged subject to workshop capacity.'
    },
    category: 'commande'
  },
  {
    id: 'faq-03',
    question: {
      fr: 'Proposez-vous la location de robes de mariée et de robes de soirée ?',
      en: 'Do you offer wedding gown and evening dress rental?'
    },
    answer: {
      fr: 'Oui, tout à fait ! Conformément à nos prestations officielles, Junior Zeus Style propose à la fois la confection sur mesure exclusive et la formule de location de robes de mariée (styles princesse, sirène avec voile) et robes de soirée d’apparat. La location comprend une séance d’essayage et les retouches d’ajustement morphologique pour un tombé parfait le jour J.',
      en: 'Yes, absolutely! Junior Zeus Style provides both bespoke creation and turnkey rental for bridal gowns (princess, mermaid silhouettes with veil) and evening dresses. Rental packages include dedicated fittings and personalized alterations.'
    },
    category: 'commande'
  },
  {
    id: 'faq-04',
    question: {
      fr: 'Comment s’inscrire à la formation professionnelle en couture et stylisme ?',
      en: 'How to enroll in the professional tailoring and fashion design training?'
    },
    answer: {
      fr: 'Nos sessions de formation professionnelle accueillent les débutants passionnés comme les couturiers souhaitant se perfectionner en haute confection mixte, modélisme et patronage sur mesure. Les inscriptions se font directement à l’atelier à Yaoundé ou via WhatsApp (691 08 73 82). Des modules de 3, 6 ou 12 mois sont proposés avec remise d’attestation.',
      en: 'Our vocational training curriculum welcomes beginners and practicing tailors wishing to master haute couture for men & women, pattern drafting, and luxury garment construction. Enrollment is direct at our Yaoundé atelier or via WhatsApp (691 08 73 82).'
    },
    category: 'commande'
  },
  {
    id: 'faq-05',
    question: {
      fr: 'Je réside à l’étranger ou dans la diaspora : puis-je commander à distance ?',
      en: 'I reside abroad or in the diaspora: can I place an order remotely?'
    },
    answer: {
      fr: 'Absolument. Une part importante de notre clientèle réside en France, au Canada, aux États-Unis ou en Afrique subsaharienne. Nous vous transmettons notre guide illustré de prise de mesures à distance et organisons une brève session vidéo pour vérifier chaque point. Vos pièces confectionnées sont ensuite expédiées par transporteur express (DHL / fret sécurisé) directement à votre adresse.',
      en: 'Absolutely. A substantial portion of our patrons live in France, Canada, the USA, and across Africa. We provide an illustrated remote measurement guide and conduct a brief video call to verify metrics. Your completed garments are then shipped worldwide via DHL express.'
    },
    category: 'diaspora'
  },
  {
    id: 'faq-06',
    question: {
      fr: 'Quelles sont les modalités d’acompte et les moyens de paiement acceptés ?',
      en: 'What are the deposit terms and accepted payment methods?'
    },
    answer: {
      fr: 'La mise en coupe débute après le versement d’un acompte de 50 % du montant du devis, le solde étant réglé lors de la livraison ou de l’essayage final. Nous acceptons Orange Money (+237 691 087 382), MTN Mobile Money, les espèces à l’atelier ainsi que les virements bancaires ou transferts internationaux (Western Union, MoneyGram, Ria) pour la diaspora.',
      en: 'Cutting begins upon receipt of a 50% deposit, with the remainder payable upon final fitting or delivery. We accept Orange Money (+237 691 087 382), MTN Mobile Money, cash at the atelier, and bank wires or international remittances.'
    },
    category: 'tarifs'
  },
  {
    id: 'faq-07',
    question: {
      fr: 'Puis-je apporter mon propre tissu pour une confection ?',
      en: 'Can I bring my own fabric for bespoke garment construction?'
    },
    answer: {
      fr: 'Oui, tout à fait. Si vous disposez déjà d’un coupon de valeur (pagne traditionnel d’apparat, bazin riche, lin de famille, drap de laine ramené de voyage), Ariel Junior Nzesseu étudie le métrage et la tenue de l’étoffe lors du rendez-vous pour concevoir la silhouette idéale. Le tarif appliqué correspond alors uniquement à la prestation de coupe et haute confection.',
      en: 'Yes, absolutely. If you have your own prized fabric (family heirloom textiles, rich bazin, luxury wool bolt), Ariel Junior Nzesseu examines the fabric weight and yardage during the consultation to design the ideal silhouette. Pricing is then adjusted for bespoke cutting and labor only.'
    },
    category: 'commande'
  },
  {
    id: 'faq-08',
    question: {
      fr: 'Les retouches d’ajustement après livraison sont-elles incluses ?',
      en: 'Are post-delivery fitting alterations included?'
    },
    answer: {
      fr: 'Toute pièce confectionnée sur mesure chez Junior Zeus Style bénéficie d’une garantie d’ajustement complet : si une retouche d’aisance ou de longueur s’avère nécessaire dans les 14 jours suivant la remise du vêtement, elle est effectuée gracieusement et en priorité par notre atelier.',
      en: 'Every bespoke garment tailored at Junior Zeus Style includes our complete fitting guarantee: any minor ease or length adjustment required within 14 days of delivery is performed complimentary with top atelier priority.'
    },
    category: 'essayages'
  }
];
