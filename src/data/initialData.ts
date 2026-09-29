import { Creation, Collection, JournalArticle, SiteSettings, Service, Testimonial, FAQItem } from '../types';

export const INITIAL_SITE_SETTINGS: SiteSettings = {
  brandName: 'Junior Zeus Style',
  founderName: 'Ariel Junior Nzesseu (« Junior Zeus »)',
  tagline: {
    fr: 'Maison de création de mode et haute confection sur mesure à Yaoundé.',
    en: 'Contemporary fashion house and bespoke couture atelier in Yaoundé.'
  },
  manifesto: {
    fr: 'Des silhouettes pensées avec intention, façonnées pour marquer les esprits.',
    en: 'Silhouettes designed with intent, tailored to leave an enduring mark.'
  },
  primaryPhone: '+237 691 087 382',
  secondaryPhone: '+237 671 621 140', // To validate with owner
  whatsappNumber: '237691087382',
  officialEmail: 'contact@juniorzeusstyle.com',
  backupEmail: 'juniortamno13@gmail.com',
  addressPrimary: {
    fr: 'Descente Éleveur, en face de Turbo, Yaoundé, Cameroun',
    en: 'Descente Éleveur, opposite Turbo, Yaoundé, Cameroon'
  },
  addressSecondary: {
    fr: 'Yaoundé, Ngousso (adresse complémentaire à confirmer)',
    en: 'Yaoundé, Ngousso (supplementary address to be confirmed)'
  },
  openingHours: {
    fr: 'Lundi – Samedi : 09h00 – 19h00 · Sur rendez-vous pour les essayages',
    en: 'Monday – Saturday: 09:00 – 19:00 · By appointment for bespoke fittings'
  },
  socials: {
    tiktok: 'https://tiktok.com/@juniorzeusstyle',
    facebook: 'https://facebook.com/juniorzeusstyle',
    whatsapp: 'https://wa.me/237691087382'
  },
  whatsappTemplateCatalog: {
    fr: 'Bonjour Junior Zeus Style, je souhaite obtenir des informations sur la création : [NOM_DE_LA_CREATION].',
    en: 'Hello Junior Zeus Style, I would like more information about this creation: [CREATION_NAME].'
  },
  whatsappTemplateGeneral: {
    fr: 'Bonjour Junior Zeus Style, je souhaiterais avoir plus d’informations sur vos créations et les rendez-vous sur mesure.',
    en: 'Hello Junior Zeus Style, I would like more information about your creations and bespoke appointments.'
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
    coverImage: '/src/assets/images/hero_atelier_couture_1790586086146.jpg',
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
    coverImage: '/src/assets/images/atelier_fitting_space_1790586126242.jpg',
    piecesCount: 8
  }
];

export const INITIAL_CREATIONS: Creation[] = [
  {
    id: 'cr-01',
    slug: 'costume-zeus-imperial',
    title: {
      fr: 'Costume Impérial Zeus',
      en: 'Imperial Zeus Ensemble'
    },
    category: 'ceremonie',
    collectionId: 'col-ongola',
    collectionName: {
      fr: 'Renaissance Ongola',
      en: 'Ongola Renaissance'
    },
    year: 2026,
    status: 'sur_commande',
    summary: {
      fr: 'Veste de cérémonie à col montant asymétrique et boutonnage dissimulé.',
      en: 'Ceremonial structured jacket with asymmetric stand-up collar and concealed placket.'
    },
    description: {
      fr: 'Pièce emblématique du styliste Ariel Junior Nzesseu. Coupe structurée avec épaulettes renforcées à l’ancienne, fente dorsale cavalière et passepoils en soie bronze.',
      en: 'Signature piece by designer Ariel Junior Nzesseu. Sculpted cut with heritage shoulder canvas, equestrian back vent, and bronze silk piping.'
    },
    materials: {
      fr: 'Laine froide 120s d’Italie, doublure jacquard satinée, boutons en corne gravée.',
      en: 'Italian super 120s cool wool, satin jacquard lining, custom engraved horn buttons.'
    },
    craftDetails: {
      fr: '28 heures de travail à l’atelier à Yaoundé. Entoilage semi-traditionnel et coutures rabattues main.',
      en: '28 workshop hours in Yaoundé. Semi-canvassed construction and hand-finished felled seams.'
    },
    estimatedLeadTime: {
      fr: '10 à 14 jours ouvrés (avec 2 essayages)',
      en: '10 to 14 business days (including 2 in-person fittings)'
    },
    coverImage: '/src/assets/images/creation_ceremonie_gold_1790588810602.jpg',
    gallery: [
      '/src/assets/images/creation_ceremonie_gold_1790588810602.jpg',
      '/src/assets/images/textile_craft_detail_1790586114656.jpg',
      '/src/assets/images/atelier_fitting_space_1790586126242.jpg'
    ],
    isFeatured: true,
    priceEstimate: '185 000 FCFA (~280 €)',
    needsRealPhoto: false
  },
  {
    id: 'cr-02',
    slug: 'veste-croisee-ebene',
    title: {
      fr: 'Veste Croisée Ébène & Bronze',
      en: 'Double-Breasted Ebony & Bronze Jacket'
    },
    category: 'sur-mesure',
    collectionId: 'col-ligne-zeus',
    collectionName: {
      fr: 'Ligne Zeus Sartoriale',
      en: 'Zeus Sartorial Line'
    },
    year: 2026,
    status: 'sur_commande',
    summary: {
      fr: 'Veste croisée à cran aigu, revers généreux et surpiqûres sellier ton sur ton.',
      en: 'Double-breasted jacket with peak lapels, generous belly, and tone-on-tone pick stitching.'
    },
    description: {
      fr: 'Conçue pour conférer une présence altière. Cette silhouette réinvente le costume d’affaires et de gala par une carrure nette et une taille cintrée sans aucune rigidité.',
      en: 'Engineered to bestow an imposing stance. Reimagining business and gala attire through clean shoulders and a sculptured waist without rigidity.'
    },
    materials: {
      fr: 'Sergé de laine noir profond, fils de soie guipés, doublure respirante cupro.',
      en: 'Deep black wool twill, wrapped silk thread, breathable cupro lining.'
    },
    craftDetails: {
      fr: 'Boutonnières milanaises faites à l’aiguille fine par le maître tailleur.',
      en: 'Hand-sewn Milanese buttonholes executed with fine needle by the master cutter.'
    },
    estimatedLeadTime: {
      fr: '12 jours ouvrés',
      en: '12 business days'
    },
    coverImage: '/src/assets/images/creation_sartorial_suit_1790588825616.jpg',
    gallery: [
      '/src/assets/images/creation_sartorial_suit_1790588825616.jpg',
      '/src/assets/images/hero_atelier_couture_1790586086146.jpg'
    ],
    isFeatured: true,
    priceEstimate: '145 000 FCFA (~220 €)',
    needsRealPhoto: false
  },
  {
    id: 'cr-03',
    slug: 'ensemble-grand-boubou-contemporain',
    title: {
      fr: 'Tunique & Pantalon Contemporain',
      en: 'Contemporary Tunic & Trousers Set'
    },
    category: 'sur-mesure',
    collectionId: 'col-ongola',
    collectionName: {
      fr: 'Renaissance Ongola',
      en: 'Ongola Renaissance'
    },
    year: 2025,
    status: 'disponible',
    summary: {
      fr: 'Ensemble deux pièces minimaliste à col officier et fentes géométriques latérales.',
      en: 'Minimalist two-piece set with mandarin collar and geometric lateral vents.'
    },
    description: {
      fr: 'Le vêtement d’apparat africain dans son épure la plus contemporaine. Lignes droites, drapé fluide, zéro surcharge pour laisser parler la perfection du tombé.',
      en: 'Ceremonial African attire in its purest contemporary form. Straight lines, fluid drape, and zero visual clutter to honor the natural fabric drape.'
    },
    materials: {
      fr: 'Coton peigné lourd damassé teinté artisanalement.',
      en: 'Heavy combed cotton damask with artisanal dyeing.'
    },
    craftDetails: {
      fr: 'Col officier renforcé à la toile de lin naturel, finitions intérieures gansées.',
      en: 'Stand collar reinforced with natural linen canvas, bias-bound interior seams.'
    },
    estimatedLeadTime: {
      fr: '7 à 10 jours ouvrés',
      en: '7 to 10 business days'
    },
    coverImage: '/src/assets/images/atelier_fitting_space_1790586126242.jpg',
    gallery: [
      '/src/assets/images/atelier_fitting_space_1790586126242.jpg'
    ],
    isFeatured: true,
    priceEstimate: '95 000 FCFA (~145 €)',
    needsRealPhoto: true
  },
  {
    id: 'cr-04',
    slug: 'manteau-officier-sable-doux',
    title: {
      fr: 'Manteau Officier Sable Doux',
      en: 'Soft Sand Officer Overcoat'
    },
    category: 'pret-a-porter',
    collectionId: 'col-ongola',
    collectionName: {
      fr: 'Renaissance Ongola',
      en: 'Ongola Renaissance'
    },
    year: 2026,
    status: 'piece_unique',
    summary: {
      fr: 'Manteau mi-long droit en drap de laine beige sable avec col convertible.',
      en: 'Mid-length straight overcoat in sandy wool melton with convertible storm collar.'
    },
    description: {
      fr: 'Une pièce d’exception taillée en exemplaire unique. Équilibre rare entre élégance voyageuse et structure architecturale.',
      en: 'A one-of-a-kind garment crafted as an exclusive single edition. Rare equilibrium between traveler elegance and architectural form.'
    },
    materials: {
      fr: 'Drap de laine et cachemire sable doux, boutons militaires laiton brossé.',
      en: 'Soft sand wool and cashmere blend, brushed brass custom buttons.'
    },
    craftDetails: {
      fr: 'Poches passepoilées à rabat biais, doublure contrastée brun cacao.',
      en: 'Slanted flap double welt pockets, contrasting cacao brown lining.'
    },
    estimatedLeadTime: {
      fr: 'Pièce unique disponible immédiatement à l’atelier',
      en: 'Unique piece immediately available at the Yaoundé atelier'
    },
    coverImage: '/src/assets/images/creation_robe_draping_1790588840264.jpg',
    gallery: [
      '/src/assets/images/creation_robe_draping_1790588840264.jpg',
      '/src/assets/images/textile_craft_detail_1790586114656.jpg'
    ],
    isFeatured: true,
    priceEstimate: '220 000 FCFA (~335 €)',
    needsRealPhoto: false
  },
  {
    id: 'cr-05',
    slug: 'veste-saharienne-cacao-couture',
    title: {
      fr: 'Saharienne Couture Cacao',
      en: 'Cacao Couture Safari Jacket'
    },
    category: 'pret-a-porter',
    collectionId: 'col-ligne-zeus',
    collectionName: {
      fr: 'Ligne Zeus Sartoriale',
      en: 'Zeus Sartorial Line'
    },
    year: 2025,
    status: 'sur_commande',
    summary: {
      fr: 'Quatre poches soufflet à rabats structurés et ceinture sous passants intégrés.',
      en: 'Four bellows pockets with tailored flaps and integrated loop belt.'
    },
    description: {
      fr: 'Interprétation urbaine de la saharienne classique, pensée pour le climat équatorial de Yaoundé tout en conservant une coupe tailleur affûtée.',
      en: 'Urban interpretation of the classic safari jacket, designed for the equatorial Yaoundé climate while keeping a razor-sharp tailor cut.'
    },
    materials: {
      fr: 'Lin irlandais lourd 380g couleur brun cacao et surpiqûres bronze.',
      en: 'Heavy 380g Irish linen in cacao brown with bronze contrast topstitching.'
    },
    craftDetails: {
      fr: 'Dos à plis d’aisance pour une liberté totale de mouvement au volant ou en marche.',
      en: 'Pleated action back ensuring complete mobility while driving or walking.'
    },
    coverImage: '/src/assets/images/hero_atelier_couture_1790586086146.jpg',
    gallery: [
      '/src/assets/images/hero_atelier_couture_1790586086146.jpg'
    ],
    isFeatured: true,
    priceEstimate: '110 000 FCFA (~168 €)',
    needsRealPhoto: true
  },
  {
    id: 'cr-06',
    slug: 'gilet-d-apparat-broderies-fil-bronze',
    title: {
      fr: 'Gilet d’Apparat Broderies Bronze',
      en: 'Ceremonial Waistcoat with Bronze Embroidery'
    },
    category: 'accessoires',
    collectionId: 'col-ongola',
    collectionName: {
      fr: 'Renaissance Ongola',
      en: 'Ongola Renaissance'
    },
    year: 2025,
    status: 'archives',
    summary: {
      fr: 'Gilet croisé sans col à cinq boutons fermés et broderies linéaires.',
      en: 'Collarless five-button double-breasted waistcoat with geometric linear needlework.'
    },
    description: {
      fr: 'Créé pour un gala diplomatique à Yaoundé. Archives conservées pour illustrer le savoir-faire de broderie main de la maison Junior Zeus Style.',
      en: 'Created for a diplomatic gala in Yaoundé. Kept in the brand archives to exemplify Junior Zeus Style hand-embroidery expertise.'
    },
    materials: {
      fr: 'Soie sauvage ivoire chaud et fils métalliques bronze.',
      en: 'Warm ivory raw silk and metallic bronze embroidery filaments.'
    },
    craftDetails: {
      fr: 'Dos en satin doublé de coton avec martingale de serrage en laiton gravé.',
      en: 'Cotton-lined satin back with engraved brass cinch buckle.'
    },
    coverImage: '/src/assets/images/textile_craft_detail_1790586114656.jpg',
    gallery: [
      '/src/assets/images/textile_craft_detail_1790586114656.jpg'
    ],
    isFeatured: false,
    priceEstimate: '65 000 FCFA (~100 €)',
    needsRealPhoto: true
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
    coverImage: '/src/assets/images/designer_portrait_1790586101363.jpg',
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
    title: 'Adresse physique définitive de l’atelier',
    detail: 'L’annuaire Ayila’a indique : "Descente Éleveur, en face de Turbo, Yaoundé", tandis que le contact utilisateur mentionne "Yaoundé, Ngousso". À faire valider par Junior Zeus.',
    status: 'pending'
  },
  {
    id: 'chk-phone',
    category: 'Contact',
    title: 'Numéro de téléphone secondaire (+237 671 621 140)',
    detail: 'Le numéro WhatsApp principal est validé (+237 691 087 382). Vérifier si le second numéro doit rester public ou réservé aux urgences.',
    status: 'pending'
  },
  {
    id: 'chk-email',
    category: 'Contact',
    title: 'Boîte e-mail officielle de réception',
    detail: 'Privilégier contact@juniorzeusstyle.com (adresse professionnelle du domaine). Conserver juniortamno13@gmail.com en adresse de secours interne.',
    status: 'pending'
  },
  {
    id: 'chk-photos',
    category: 'Contenu & Visuels',
    title: 'Photographies réelles des pièces portées et shootings de collection',
    detail: 'Remplacer les repères éditoriaux et photos d’atelier temporaires par les photographies haute résolution réelles fournies par Junior Zeus.',
    status: 'pending'
  },
  {
    id: 'chk-pricing',
    category: 'Commerce',
    title: 'Politique de devis et acomptes sur mesure',
    detail: 'Confirmer si les prix indicatifs doivent être affichés ou si tout passe par un devis personnalisé sur WhatsApp après prise de contact.',
    status: 'confirmed'
  },
  {
    id: 'chk-hours',
    category: 'Horaires',
    title: 'Horaires de réception des clients sans rendez-vous',
    detail: 'Valider les créneaux d’ouverture publique : 09h00 - 19h00 du lundi au samedi.',
    status: 'pending'
  }
];

export const INITIAL_SERVICES: Service[] = [
  {
    id: 'srv-sur-mesure',
    slug: 'sur-mesure-sartorial',
    title: {
      fr: 'Haute Confection & Sur-Mesure Sartorial',
      en: 'Haute Bespoke Sartorial Tailoring'
    },
    tagline: {
      fr: 'L’art du costume architectural taillé à vos proportions anatomiques.',
      en: 'Architectural suit craftsmanship calibrated to your anatomical poise.'
    },
    description: {
      fr: 'Costumes deux et trois pièces, vestes croisées impériales, pantalons ajustés à plis français. Chaque pièce fait l’objet d’un patronage individuel, d’un entoilage semi-traditionnel en crin et de finitions soignées à la main.',
      en: 'Two and three-piece bespoke suits, imperial double-breasted jackets, tailored trousers with French pleats. Individually drafted patterns, semi-canvassed horsehair chest, and meticulous hand finishes.'
    },
    features: [
      { fr: 'Prise de 24 mesures corporelles détaillées', en: '24 precise anatomical measurements' },
      { fr: 'Sélection de laines froides 120s à 150s et doublures jacquard', en: 'Curated 120s to 150s cool wools and jacquard linings' },
      { fr: '2 essayages d’ajustement à l’atelier de Yaoundé', en: '2 dedicated fitting sessions at Yaoundé atelier' },
      { fr: 'Boutonnières milanaises et surpiqûres sellier faites main', en: 'Handcrafted Milanese buttonholes and pick stitching' }
    ],
    startingPrice: '140 000 FCFA (~215 €)',
    leadTime: {
      fr: '10 à 14 jours ouvrés',
      en: '10 to 14 business days'
    },
    iconName: 'Scissors',
    image: '/src/assets/images/creation_sartorial_suit_1790588825616.jpg',
    isPopular: true
  },
  {
    id: 'srv-robes-apparat',
    slug: 'robes-ceremonie-apparat',
    title: {
      fr: 'Robes de Cérémonie & Soirée d’Apparat',
      en: 'Ceremonial & Evening Haute Couture Gowns'
    },
    tagline: {
      fr: 'Des silhouettes féminines majestueuses sculptées pour les grandes occasions.',
      en: 'Majestic feminine silhouettes sculpted for exceptional occasions.'
    },
    description: {
      fr: 'Création de robes de gala, tenues de cocktail et silhouettes d’apparat. Alliance de coupes contemporaines, corseterie invisible, drapés fluides et incrustations de dentelles ou broderies artisanales.',
      en: 'Custom gala dresses, cocktail silhouettes, and evening attire. Blending contemporary lines, concealed corset architecture, flowing draping, and fine hand-embroidery.'
    },
    features: [
      { fr: 'Stylisme sur mesure selon votre morphologie', en: 'Custom styling adapted to your unique silhouette' },
      { fr: 'Soies sauvages, satins duchesse, crêpes lourds et velours', en: 'Raw silks, duchess satins, heavy crepes, and velvets' },
      { fr: 'Ajustements millimétrés et tombé parfait garanti', en: 'Millimetric adjustments and guaranteed flawless drape' },
      { fr: 'Finitions intérieures doublées de confort', en: 'Comfort-lined interior artisanal finishes' }
    ],
    startingPrice: '120 000 FCFA (~185 €)',
    leadTime: {
      fr: '10 à 15 jours ouvrés',
      en: '10 to 15 business days'
    },
    iconName: 'Sparkles',
    image: '/src/assets/images/creation_robe_draping_1790588840264.jpg',
    isPopular: true
  },
  {
    id: 'srv-afritude',
    slug: 'tenues-traditionnelles-afritude',
    title: {
      fr: 'Tenues Traditionnelles Revisitées (Afritude)',
      en: 'Contemporary African Heritage Attire'
    },
    tagline: {
      fr: 'La noblesse du vêtement traditionnel camerounais magnifiée par une coupe moderne.',
      en: 'Noble Cameroonian heritage attire reimagined with sleek modern tailoring.'
    },
    description: {
      fr: 'Boubous contemporains épurés, ensembles tuniques à cols officiers asymétriques, vestes d’inspiration africaine rehaussées de broderies au fil bronze. Une élégance identitaire sans folklore superflu.',
      en: 'Sleek contemporary boubous, tunic sets with asymmetric mandarin collars, and African-inspired jackets adorned with bronze filament needlework.'
    },
    features: [
      { fr: 'Cotons damassés lourds, bazins riches et lins nobles', en: 'Heavy damask cottons, rich bazin, and fine noble linens' },
      { fr: 'Broderies géométriques artisanales faites à l’atelier', en: 'Atelier hand-guided geometric embroidery motifs' },
      { fr: 'Coupes épurées confortables adaptées au climat', en: 'Streamlined breathable cuts designed for local climate' },
      { fr: 'Tailles personnalisées de la silhouette fine aux grandes carrures', en: 'Custom sizing from slender to commanding physiques' }
    ],
    startingPrice: '85 000 FCFA (~130 €)',
    leadTime: {
      fr: '7 à 10 jours ouvrés',
      en: '7 to 10 business days'
    },
    iconName: 'Crown',
    image: '/src/assets/images/atelier_fitting_space_1790586126242.jpg',
    isPopular: false
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
    isPopular: true
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
  },
  {
    id: 'srv-conseil',
    slug: 'conseil-style-direction-artistique',
    title: {
      fr: 'Conseil en Style & Direction Vestimentaire',
      en: 'Personal Styling & Wardrobe Direction'
    },
    tagline: {
      fr: 'Définissez votre signature visuelle avec le créateur Ariel Junior Nzesseu.',
      en: 'Define your personal sartorial signature with designer Ariel Junior Nzesseu.'
    },
    description: {
      fr: 'Entretien individuel privé à l’atelier ou par appel vidéo pour les clients de la diaspora. Analyse de votre morphologie, choix des couleurs qui subliment votre teint, sélection de tissus et élaboration d’une garde-robe personnalisée.',
      en: 'One-on-one private consultation at the atelier or video call for diaspora patrons. Silhouette analysis, skin-tone color harmony, fabric curation, and curated capsule wardrobe design.'
    },
    features: [
      { fr: 'Séance privée de 90 minutes avec le créateur', en: '90-minute private consultation with the head designer' },
      { fr: 'Carnet de style personnalisé avec croquis recommandés', en: 'Personalized style book with customized sketch proposals' },
      { fr: 'Échantillonnage tactile des étoffes et boutons rares', en: 'Hands-on tactile sampling of luxury fabrics and rare buttons' },
      { fr: 'Montant déductible en cas de commande sur mesure', en: 'Fee deductible against subsequent bespoke commissions' }
    ],
    startingPrice: '35 000 FCFA (~55 €)',
    leadTime: {
      fr: 'Sur rendez-vous préalable',
      en: 'By advance appointment'
    },
    iconName: 'UserCheck',
    image: '/src/assets/images/designer_portrait_1790586101363.jpg',
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
      fr: 'Vous êtes accueilli personnellement par Ariel Junior Nzesseu dans notre espace d’essayage (Descente Éleveur, en face de Turbo). Durant 30 à 45 minutes, nous échangeons sur votre silhouette, l’occasion pour laquelle vous commandez, et nous prenons l’ensemble de vos mensurations. Vous pouvez toucher et sélectionner les étoffes directement sur place.',
      en: 'You are welcomed personally by Ariel Junior Nzesseu at our fitting room (Descente Éleveur, opposite Turbo). During 30-45 minutes, we discuss your silhouette and occasion, take comprehensive measurements, and let you touch and select fabric bolts on-site.'
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
    id: 'faq-04',
    question: {
      fr: 'Quelles sont les modalités d’acompte et les moyens de paiement acceptés ?',
      en: 'What are the deposit terms and accepted payment methods?'
    },
    answer: {
      fr: 'La mise en coupe débute après le versement d’un acompte de 50 % du montant du devis, le solde étant réglé lors de la livraison ou de l’essayage final. Nous acceptons Orange Money (+237 691 087 382), MTN Mobile Money (+237 671 621 140), les espèces à l’atelier ainsi que les virements bancaires ou transferts internationaux (Western Union, MoneyGram, Ria) pour la diaspora.',
      en: 'Cutting begins upon receipt of a 50% deposit, with the remainder payable upon final fitting or delivery. We accept Orange Money (+237 691 087 382), MTN Mobile Money (+237 671 621 140), cash at the atelier, and bank wires or international remittances (Western Union, MoneyGram, Ria).'
    },
    category: 'tarifs'
  },
  {
    id: 'faq-05',
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
    id: 'faq-06',
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
