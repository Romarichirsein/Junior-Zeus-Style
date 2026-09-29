import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Language,
  Theme,
  Creation,
  Collection,
  JournalArticle,
  SiteSettings,
  LocalizedString,
  ActivePage,
  Service,
  Testimonial,
  FAQItem,
  RendezVousBooking
} from '../types';
import {
  INITIAL_SITE_SETTINGS,
  INITIAL_COLLECTIONS,
  INITIAL_CREATIONS,
  INITIAL_ARTICLES,
  INITIAL_SERVICES,
  INITIAL_TESTIMONIALS,
  INITIAL_FAQS
} from '../data/initialData';
import { sanityClient } from '../sanity/client';
import { allCreationsQuery, siteSettingsQuery } from '../sanity/groqQueries';

export type { ActivePage };

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  creations: Creation[];
  collections: Collection[];
  articles: JournalArticle[];
  services: Service[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  siteSettings: SiteSettings;
  selectedCreation: Creation | null;
  setSelectedCreation: (creation: Creation | null) => void;
  selectedArticle: JournalArticle | null;
  setSelectedArticle: (article: JournalArticle | null) => void;
  prefilledBookingData: Partial<RendezVousBooking> | null;
  setPrefilledBookingData: (data: Partial<RendezVousBooking> | null) => void;
  t: (localizedObj: LocalizedString | undefined) => string;
  getWhatsAppUrl: (type: 'general' | 'creation', item?: Creation) => string;
  getWhatsAppAppointmentUrl: (booking: RendezVousBooking) => string;
  updateCreation: (creation: Creation) => void;
  addCreation: (creation: Creation) => void;
  updateArticle: (article: JournalArticle) => void;
  updateSiteSettings: (settings: Partial<SiteSettings>) => void;
  resetToDefault: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Language State
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('jzs_language');
      if (saved === 'fr' || saved === 'en') return saved;
    }
    return 'fr';
  });

  // Theme State
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('jzs_theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  // Navigation State
  const [activePage, setActivePage] = useState<ActivePage>('accueil');
  const [selectedCreation, setSelectedCreation] = useState<Creation | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  // Live Data State (persisted so CMS simulator works seamlessly)
  const [creations, setCreations] = useState<Creation[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('jzs_creations_v1');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) { /* fallback */ }
      }
    }
    return INITIAL_CREATIONS;
  });

  const [collections] = useState<Collection[]>(INITIAL_COLLECTIONS);

  const [articles, setArticles] = useState<JournalArticle[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('jzs_articles_v1');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) { /* fallback */ }
      }
    }
    return INITIAL_ARTICLES;
  });

  const [services] = useState<Service[]>(INITIAL_SERVICES);
  const [testimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [faqs] = useState<FAQItem[]>(INITIAL_FAQS);
  const [prefilledBookingData, setPrefilledBookingData] = useState<Partial<RendezVousBooking> | null>(null);

  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('jzs_settings_v1');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) { /* fallback */ }
      }
    }
    return INITIAL_SITE_SETTINGS;
  });

  // Apply Theme to DOM
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('jzs_theme', theme);
  }, [theme]);

  // Attempt live sync with Sanity project nx00t04k
  useEffect(() => {
    let isMounted = true;
    async function syncSanity() {
      try {
        const remoteSettings = await sanityClient.fetch(siteSettingsQuery);
        if (remoteSettings && remoteSettings.brandName && isMounted) {
          setSiteSettings(prev => ({ ...prev, ...remoteSettings }));
        }
      } catch (err) {
        // Fallback safely to initial state
      }

      try {
        const remoteCreations = await sanityClient.fetch(allCreationsQuery);
        if (remoteCreations && Array.isArray(remoteCreations) && remoteCreations.length > 0 && isMounted) {
          const mapped: Creation[] = remoteCreations.map((rc: any) => ({
            id: rc._id || rc.slug || String(Math.random()),
            slug: rc.slug || 'piece',
            title: rc.title || { fr: 'Création', en: 'Creation' },
            category: rc.category || 'sur-mesure',
            collectionId: rc.collection?.slug || 'col-ongola',
            collectionName: rc.collection?.title || { fr: 'Collection', en: 'Collection' },
            year: rc.year || 2026,
            status: rc.status || 'sur_commande',
            summary: rc.summary || { fr: '', en: '' },
            description: rc.description || { fr: '', en: '' },
            materials: rc.materials || { fr: '', en: '' },
            craftDetails: rc.craftDetails || { fr: '', en: '' },
            coverImage: rc.coverImageUrl || '/src/assets/images/creation_ceremonie_gold_1790588810602.jpg',
            gallery: rc.galleryUrls && rc.galleryUrls.length > 0 ? rc.galleryUrls : [rc.coverImageUrl || '/src/assets/images/creation_ceremonie_gold_1790588810602.jpg'],
            isFeatured: !!rc.isFeatured,
            priceEstimate: rc.priceEstimate || 'Sur devis atelier',
            needsRealPhoto: false
          }));
          setCreations(mapped);
        }
      } catch (err) {
        // Fallback safely to initial state
      }
    }
    syncSanity();
    return () => { isMounted = false; };
  }, []);

  // Persist language
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('jzs_language', lang);
    document.documentElement.lang = lang;
  };

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Helper for localization
  const t = (localizedObj: LocalizedString | undefined): string => {
    if (!localizedObj) return '';
    return localizedObj[language] || localizedObj.fr || '';
  };

  // Helper for WhatsApp link generation
  const getWhatsAppUrl = (type: 'general' | 'creation', item?: Creation): string => {
    const number = siteSettings.whatsappNumber;
    let message = '';

    if (type === 'creation' && item) {
      const itemName = t(item.title);
      const template = siteSettings.whatsappTemplateCatalog[language] ||
        (language === 'en'
          ? 'Hello Junior Zeus Style, I would like more information about this creation: [CREATION_NAME].'
          : 'Bonjour Junior Zeus Style, je souhaite obtenir des informations sur la création : [NOM_DE_LA_CREATION].');
      message = template.replace('[NOM_DE_LA_CREATION]', itemName).replace('[CREATION_NAME]', itemName);
    } else {
      message = siteSettings.whatsappTemplateGeneral[language] ||
        (language === 'en'
          ? 'Hello Junior Zeus Style, I would like more information about your creations.'
          : 'Bonjour Junior Zeus Style, je souhaiterais avoir plus d’informations sur vos créations.');
    }

    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  // Helper for structured Appointment & Quote Request on WhatsApp
  const getWhatsAppAppointmentUrl = (booking: RendezVousBooking): string => {
    const number = siteSettings.whatsappNumber;
    const isEn = language === 'en';

    const lines = [
      isEn ? '✨ *BESPOKE APPOINTMENT & QUOTE REQUEST - JUNIOR ZEUS STYLE*' : '✨ *DEMANDE DE RENDEZ-VOUS & DEVIS - JUNIOR ZEUS STYLE*',
      '',
      isEn ? `👤 *Client Name:* ${booking.fullName}` : `👤 *Nom complet :* ${booking.fullName}`,
      isEn ? `📞 *WhatsApp / Phone:* ${booking.phone}` : `📞 *Téléphone / WhatsApp :* ${booking.phone}`,
      booking.city ? (isEn ? `📍 *City / Country:* ${booking.city}` : `📍 *Ville / Localisation :* ${booking.city}`) : '',
      isEn ? `✂️ *Selected Service:* ${booking.serviceType}` : `✂️ *Service souhaité :* ${booking.serviceType}`,
      booking.budget ? (isEn ? `💰 *Budget range:* ${booking.budget}` : `💰 *Fourchette budgétaire :* ${booking.budget}`) : '',
      booking.preferredDate ? (isEn ? `📅 *Preferred Date:* ${booking.preferredDate}` : `📅 *Date souhaitée :* ${booking.preferredDate}`) : '',
      booking.timeSlot ? (isEn ? `⏰ *Time Slot:* ${booking.timeSlot}` : `⏰ *Créneau horaire :* ${booking.timeSlot}`) : '',
      booking.notes ? (isEn ? `📝 *Details / Measurements:* ${booking.notes}` : `📝 *Précisions / Mensurations :* ${booking.notes}`) : '',
      '',
      isEn
        ? 'Message sent from the official Junior Zeus Style platform (Yaoundé).'
        : 'Message transmis depuis le site officiel de Junior Zeus Style (Yaoundé).'
    ].filter(Boolean);

    const message = lines.join('\n');
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  // CRUD actions for live CMS tester
  const updateCreation = (updated: Creation) => {
    const newItems = creations.map(c => c.id === updated.id ? updated : c);
    setCreations(newItems);
    localStorage.setItem('jzs_creations_v1', JSON.stringify(newItems));
    if (selectedCreation?.id === updated.id) {
      setSelectedCreation(updated);
    }
  };

  const addCreation = (newCreation: Creation) => {
    const newItems = [newCreation, ...creations];
    setCreations(newItems);
    localStorage.setItem('jzs_creations_v1', JSON.stringify(newItems));
  };

  const updateArticle = (updated: JournalArticle) => {
    const newItems = articles.map(a => a.id === updated.id ? updated : a);
    setArticles(newItems);
    localStorage.setItem('jzs_articles_v1', JSON.stringify(newItems));
    if (selectedArticle?.id === updated.id) {
      setSelectedArticle(updated);
    }
  };

  const updateSiteSettings = (newSettings: Partial<SiteSettings>) => {
    const merged = { ...siteSettings, ...newSettings };
    setSiteSettings(merged);
    localStorage.setItem('jzs_settings_v1', JSON.stringify(merged));
  };

  const resetToDefault = () => {
    localStorage.removeItem('jzs_creations_v1');
    localStorage.removeItem('jzs_articles_v1');
    localStorage.removeItem('jzs_settings_v1');
    setCreations(INITIAL_CREATIONS);
    setArticles(INITIAL_ARTICLES);
    setSiteSettings(INITIAL_SITE_SETTINGS);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        toggleTheme,
        activePage,
        setActivePage: (p) => {
          setActivePage(p);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        creations,
        collections,
        articles,
        services,
        testimonials,
        faqs,
        siteSettings,
        selectedCreation,
        setSelectedCreation,
        selectedArticle,
        setSelectedArticle,
        prefilledBookingData,
        setPrefilledBookingData,
        t,
        getWhatsAppUrl,
        getWhatsAppAppointmentUrl,
        updateCreation,
        addCreation,
        updateArticle,
        updateSiteSettings,
        resetToDefault
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
