import React, { useState } from 'react';
import { useApp, ActivePage } from '../../context/AppContext';
import { Sun, Moon, Menu, X, MessageCircle } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    language,
    setLanguage,
    theme,
    toggleTheme,
    activePage,
    setActivePage,
    getWhatsAppUrl
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActivePage; labelFr: string; labelEn: string; isCta?: boolean }[] = [
    { id: 'accueil', labelFr: 'Accueil', labelEn: 'Home' },
    { id: 'catalogue', labelFr: 'Catalogue', labelEn: 'Creations' },
    { id: 'services', labelFr: 'Services', labelEn: 'Services' },
    { id: 'rendez-vous', labelFr: 'Rendez-vous', labelEn: 'Book Fitting', isCta: true },
    { id: 'a-propos', labelFr: 'À Propos', labelEn: 'About' },
    { id: 'journal', labelFr: 'Journal', labelEn: 'Journal' },
    { id: 'contact', labelFr: 'Contact', labelEn: 'Contact' }
  ];

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#3C2C26]/10 dark:border-[#C8B79C]/15 bg-[#F5F1E8]/92 dark:bg-[#0B0B0C]/92 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Logo & Brand Wordmark */}
        <button
          onClick={() => handleNavClick('accueil')}
          className="text-left group focus:outline-none cursor-pointer flex items-center gap-2.5 sm:gap-3 py-1"
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center rounded-full overflow-hidden border border-[#9C7A4B]/40 bg-black/5 dark:bg-white/5 shadow-xs group-hover:scale-105 group-hover:border-[#9C7A4B] transition-all duration-300">
            <img
              src="/Logo.png"
              alt="Junior Zeus Style Logo"
              className="w-full h-full object-contain p-0.5"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-lg sm:text-2xl tracking-tight text-[#0B0B0C] dark:text-[#F5F1E8] font-bold uppercase transition-colors group-hover:text-[#9C7A4B] leading-none">
              Junior Zeus Style
            </span>
            <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.22em] uppercase text-[#9C7A4B] font-semibold mt-0.5 sm:mt-1">
              Haute Couture
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-sans tracking-wide">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            if (item.isCta) {
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-xs text-xs uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#9C7A4B] text-white shadow-sm'
                      : 'border border-[#9C7A4B]/60 text-[#9C7A4B] hover:bg-[#9C7A4B] hover:text-white'
                  }`}
                >
                  {language === 'fr' ? item.labelFr : item.labelEn}
                </button>
              );
            }
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1.5 transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-[#0B0B0C] dark:text-[#F5F1E8] font-semibold scale-[1.02]'
                    : 'text-[#3C2C26]/75 dark:text-[#C8B79C]/75 hover:text-[#0B0B0C] dark:hover:text-[#F5F1E8]'
                }`}
              >
                {language === 'fr' ? item.labelFr : item.labelEn}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#9C7A4B] rounded-full animate-fade-in" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Language, Theme & WhatsApp) */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Language toggle */}
          <div className="flex items-center text-xs font-sans tracking-wider border border-[#3C2C26]/20 dark:border-[#C8B79C]/25 rounded-sm p-0.5 shadow-xs">
            <button
              onClick={() => setLanguage('fr')}
              className={`px-2.5 py-1 rounded-xs transition-all duration-150 cursor-pointer ${
                language === 'fr'
                  ? 'bg-[#0B0B0C] text-[#F5F1E8] dark:bg-[#F5F1E8] dark:text-[#0B0B0C] font-bold shadow-xs'
                  : 'text-[#3C2C26]/70 dark:text-[#C8B79C]/70 hover:text-[#0B0B0C] dark:hover:text-[#F5F1E8]'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-xs transition-all duration-150 cursor-pointer ${
                language === 'en'
                  ? 'bg-[#0B0B0C] text-[#F5F1E8] dark:bg-[#F5F1E8] dark:text-[#0B0B0C] font-bold shadow-xs'
                  : 'text-[#3C2C26]/70 dark:text-[#C8B79C]/70 hover:text-[#0B0B0C] dark:hover:text-[#F5F1E8]'
              }`}
            >
              EN
            </button>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
            className="p-2 text-[#3C2C26] dark:text-[#C8B79C] hover:text-[#9C7A4B] transition-colors rounded-sm cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* WhatsApp Primary CTA */}
          <a
            href={getWhatsAppUrl('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-sans font-semibold uppercase tracking-wider text-white bg-[#0B0B0C] dark:bg-[#F5F1E8] dark:text-[#0B0B0C] rounded-sm hover:bg-[#9C7A4B] dark:hover:bg-[#9C7A4B] dark:hover:text-white transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu de navigation"
            className="lg:hidden p-2 text-[#0B0B0C] dark:text-[#F5F1E8] focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#3C2C26]/10 dark:border-[#C8B79C]/15 bg-[#F5F1E8] dark:bg-[#0B0B0C] px-6 py-6 space-y-4 animate-fade-in">
          <nav className="flex flex-col space-y-4 text-base font-sans">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-1 tracking-wide transition-colors ${
                    isActive
                      ? 'text-[#9C7A4B] font-bold'
                      : 'text-[#0B0B0C] dark:text-[#F5F1E8]'
                  }`}
                >
                  {language === 'fr' ? item.labelFr : item.labelEn}
                </button>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/15 flex flex-col gap-3">
            <a
              href={getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 text-xs font-sans uppercase tracking-wider text-white bg-[#0B0B0C] dark:bg-[#F5F1E8] dark:text-[#0B0B0C] rounded-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Contacter sur WhatsApp (+237 691 087 382)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
