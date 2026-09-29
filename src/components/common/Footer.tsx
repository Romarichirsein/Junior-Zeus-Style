import React from 'react';
import { useApp } from '../../context/AppContext';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const {
    language,
    setLanguage,
    setActivePage,
    siteSettings,
    t
  } = useApp();

  return (
    <footer className="w-full border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/15 bg-[#EFEAE0] dark:bg-[#070708] text-[#0B0B0C] dark:text-[#F5F1E8] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Brand Manifesto & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full border border-[#9C7A4B]/40 overflow-hidden bg-black/5 dark:bg-white/5 p-1 flex items-center justify-center shadow-xs">
                <img
                  src="/Logo.png"
                  alt="Junior Zeus Style Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="font-editorial text-2xl sm:text-3xl uppercase tracking-tight text-[#0B0B0C] dark:text-[#F5F1E8] font-bold">
                  Junior Zeus Style
                </h2>
                <p className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#9C7A4B] font-semibold">
                  Maison de Création & Sur-Mesure
                </p>
              </div>
            </div>
            <p className="text-sm font-sans italic text-[#3C2C26]/80 dark:text-[#C8B79C]/90 max-w-md leading-relaxed text-balance">
              « {t(siteSettings.manifesto)} »
            </p>
            <p className="text-xs font-sans text-[#3C2C26]/70 dark:text-[#C8B79C]/70 max-w-sm">
              {language === 'fr'
                ? 'Maison de création de mode fondée par Ariel Junior Nzesseu. Confection sur mesure, silhouettes contemporaines et finitions d’exception à Yaoundé, Cameroun.'
                : 'Contemporary fashion house founded by Ariel Junior Nzesseu. Bespoke sartorial tailoring and exceptional silhouettes based in Yaoundé, Cameroon.'}
            </p>
          </div>

          {/* Atelier & Locations */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-sans uppercase tracking-widest font-semibold text-[#9C7A4B]">
              {language === 'fr' ? 'Atelier & Accueil' : 'Atelier & Visits'}
            </h3>
            
            <div className="space-y-3 text-xs font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9C7A4B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#0B0B0C] dark:text-[#F5F1E8]">
                    {t(siteSettings.addressPrimary)}
                  </p>
                  <p className="opacity-75 mt-0.5">
                    {t(siteSettings.addressSecondary)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#9C7A4B] shrink-0" />
                <div className="flex flex-wrap gap-x-3">
                  <a href={`tel:${siteSettings.primaryPhone.replace(/\s+/g, '')}`} className="hover:underline font-semibold">
                    {siteSettings.primaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#9C7A4B] shrink-0" />
                <a href={`mailto:${siteSettings.officialEmail}`} className="hover:underline font-medium">
                  {siteSettings.officialEmail}
                </a>
              </div>

              {/* Social Channels from flyer */}
              <div className="pt-2 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10 flex flex-wrap gap-3 text-[11px]">
                <a
                  href="https://facebook.com/juniorzeusstyle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#1877F2] font-semibold"
                >
                  Fb : Junior Zeus style
                </a>
                <span className="opacity-40">·</span>
                <a
                  href="https://instagram.com/juniorzeusstyle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#E4405F] font-semibold"
                >
                  IG : Junior Zeus style
                </a>
              </div>

              <div className="pt-1 text-[11px] leading-relaxed opacity-75">
                {t(siteSettings.openingHours)}
              </div>
            </div>
          </div>

          {/* Navigation & Administration */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-sans uppercase tracking-widest font-semibold text-[#9C7A4B]">
              {language === 'fr' ? 'Navigation' : 'Navigation'}
            </h3>

            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button
                  onClick={() => setActivePage('catalogue')}
                  className="hover:text-[#9C7A4B] transition-colors cursor-pointer"
                >
                  {language === 'fr' ? 'Catalogue des créations' : 'Creation catalogue'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('services')}
                  className="hover:text-[#9C7A4B] transition-colors cursor-pointer"
                >
                  {language === 'fr' ? 'Nos services de confection' : 'Bespoke tailoring services'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('formation')}
                  className="hover:text-[#9C7A4B] transition-colors cursor-pointer"
                >
                  {language === 'fr' ? 'Académie & Formations' : 'Academy & Training'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('rendez-vous')}
                  className="hover:text-[#9C7A4B] transition-colors font-semibold text-[#9C7A4B] cursor-pointer"
                >
                  {language === 'fr' ? 'Prendre rendez-vous / Devis' : 'Book appointment / Quote'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('a-propos')}
                  className="hover:text-[#9C7A4B] transition-colors cursor-pointer"
                >
                  {language === 'fr' ? 'Le créateur & L’atelier' : 'The Designer & Atelier'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('journal')}
                  className="hover:text-[#9C7A4B] transition-colors cursor-pointer"
                >
                  {language === 'fr' ? 'Journal & Coulisses' : 'Journal & News'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('contact')}
                  className="hover:text-[#9C7A4B] transition-colors cursor-pointer"
                >
                  {language === 'fr' ? 'Contact & Accès' : 'Contact & Directions'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('mentions-legales')}
                  className="hover:text-[#9C7A4B] transition-colors opacity-75 cursor-pointer"
                >
                  {language === 'fr' ? 'Mentions légales & Confidentialité' : 'Legal & Privacy policy'}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#3C2C26]/60 dark:text-[#C8B79C]/60">
          <p>
            © {new Date().getFullYear()} Junior Zeus Style. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'} Yaoundé, Cameroun.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="opacity-60">{language === 'fr' ? 'Langue :' : 'Language:'}</span>
              <button
                onClick={() => setLanguage('fr')}
                className={`hover:text-[#0B0B0C] dark:hover:text-[#F5F1E8] ${language === 'fr' ? 'font-semibold text-[#9C7A4B]' : ''}`}
              >
                Français
              </button>
              <span className="opacity-30">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={`hover:text-[#0B0B0C] dark:hover:text-[#F5F1E8] ${language === 'en' ? 'font-semibold text-[#9C7A4B]' : ''}`}
              >
                English
              </button>
            </div>
            
            <a
              href="https://wa.me/237691087382"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#25D366] hover:underline font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
