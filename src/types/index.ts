export type Language = 'fr' | 'en';
export type Theme = 'light' | 'dark';
export type ActivePage = 'accueil' | 'catalogue' | 'services' | 'formation' | 'rendez-vous' | 'a-propos' | 'journal' | 'contact' | 'mentions-legales';

export type CreationStatus = 'disponible' | 'sur_commande' | 'piece_unique' | 'archives';

export interface LocalizedString {
  fr: string;
  en: string;
}

export interface Creation {
  id: string;
  slug: string;
  title: LocalizedString;
  category: 'sur-mesure' | 'ceremonie' | 'pret-a-porter' | 'accessoires';
  collectionId?: string;
  collectionName?: LocalizedString;
  year: number;
  status: CreationStatus;
  summary: LocalizedString;
  description: LocalizedString;
  materials: LocalizedString;
  craftDetails: LocalizedString;
  estimatedLeadTime?: LocalizedString;
  coverImage: string;
  gallery: string[];
  isFeatured: boolean;
  priceEstimate?: string;
  needsRealPhoto?: boolean;
}

export interface Collection {
  id: string;
  slug: string;
  title: LocalizedString;
  season: LocalizedString;
  year: number;
  description: LocalizedString;
  coverImage: string;
  piecesCount: number;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: LocalizedString;
  category: 'Collection' | 'Coulisses' | 'Savoir-faire' | 'Événement' | 'Inspiration';
  publishedAt: string;
  readTime: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString[];
  coverImage: string;
  author: string;
  featured: boolean;
  needsRealPhoto?: boolean;
}

export interface SiteSettings {
  brandName: string;
  founderName: string;
  tagline: LocalizedString;
  manifesto: LocalizedString;
  primaryPhone: string;
  secondaryPhone: string;
  whatsappNumber: string;
  officialEmail: string;
  backupEmail: string;
  addressPrimary: LocalizedString;
  addressSecondary: LocalizedString;
  openingHours: LocalizedString;
  socials: {
    facebook: string;
    instagram: string;
    whatsapp: string;
    tiktok?: string;
  };
  whatsappTemplateCatalog: LocalizedString;
  whatsappTemplateGeneral: LocalizedString;
}

export interface ContactInquiry {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  inquiryType: 'sur-mesure' | 'catalogue' | 'rendez-vous' | 'collaboration' | 'autre';
  message: string;
  consent: boolean;
  language: Language;
}

export interface Service {
  id: string;
  slug: string;
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  features: LocalizedString[];
  startingPrice: string;
  leadTime: LocalizedString;
  iconName: string;
  image: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: LocalizedString;
  location: string;
  quote: LocalizedString;
  rating: number;
  pieceMade: LocalizedString;
}

export interface FAQItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
  category: 'commande' | 'essayages' | 'tarifs' | 'diaspora';
}

export interface RendezVousBooking {
  fullName: string;
  phone: string;
  city: string;
  serviceType: string;
  budget: string;
  preferredDate: string;
  timeSlot: string;
  notes: string;
}

