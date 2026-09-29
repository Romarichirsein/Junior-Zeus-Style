import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { SplashScreen } from './components/common/SplashScreen';
import { WhatsAppFloatingButton } from './components/common/WhatsAppFloatingButton';
import { Hero } from './components/home/Hero';
import { BrandManifesto } from './components/home/BrandManifesto';
import { FeaturedCreations } from './components/home/FeaturedCreations';
import { ServicesSection } from './components/home/ServicesSection';
import { SavoirFaireSection } from './components/home/SavoirFaireSection';
import { SignatureSection } from './components/home/SignatureSection';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { FaqSection } from './components/home/FaqSection';
import { LatestJournal } from './components/home/LatestJournal';
import { CatalogueView } from './components/catalogue/CatalogueView';
import { CreationDetailModal } from './components/catalogue/CreationDetailModal';
import { ServicesView } from './components/services/ServicesView';
import { RendezVousView } from './components/rendezvous/RendezVousView';
import { AboutView } from './components/about/AboutView';
import { JournalView } from './components/journal/JournalView';
import { ContactView } from './components/contact/ContactView';
import { LegalView } from './components/legal/LegalView';

const AppContent: React.FC = () => {
  const { activePage } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] dark:bg-[#0B0B0C] text-[#0B0B0C] dark:text-[#F5F1E8] font-sans selection:bg-[#9C7A4B] selection:text-white transition-colors duration-200">
      
      {/* 5-second Splash Screen on site launch */}
      <SplashScreen duration={5000} />

      {/* 3-Zone Top Bar */}
      <Header />

      {/* Main View Router */}
      <main className="flex-1">
        {activePage === 'accueil' && (
          <>
            <Hero />
            <BrandManifesto />
            <FeaturedCreations />
            <ServicesSection />
            <SavoirFaireSection />
            <SignatureSection />
            <TestimonialsSection />
            <FaqSection />
            <LatestJournal />
          </>
        )}

        {activePage === 'catalogue' && <CatalogueView />}

        {activePage === 'services' && <ServicesView />}

        {activePage === 'rendez-vous' && <RendezVousView />}

        {activePage === 'a-propos' && <AboutView />}

        {activePage === 'journal' && <JournalView />}

        {activePage === 'contact' && <ContactView />}

        {activePage === 'mentions-legales' && <LegalView />}
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Floating Elements & Modals */}
      <CreationDetailModal />
      <WhatsAppFloatingButton />

    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
