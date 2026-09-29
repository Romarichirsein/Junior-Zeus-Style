import React from 'react';
import { useApp } from '../../context/AppContext';
import { MessageCircle, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { LuxuryStarAnimation } from '../lottie/LottieAnimations';
import { motion } from 'motion/react';
import { TypewriterTitle } from './TypewriterTitle';

export const Hero: React.FC = () => {
  const { language, setActivePage, getWhatsAppUrl } = useApp();

  return (
    <section className="relative min-h-[94vh] flex items-center justify-center overflow-hidden">
      {/* Background atelier visual with high-end measured scrim */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src="/src/assets/images/hero_atelier_couture_1790586086146.jpg"
          alt="Atelier de création Junior Zeus Style à Yaoundé"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark scrim for high contrast legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/80 to-[#0B0B0C]/45" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center text-[#FBFAF7]">
        
        {/* Lottie Animated Luxury Emblem & Kicker */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col items-center justify-center mb-6"
        >
          <LuxuryStarAnimation size={48} className="mb-3 opacity-95 drop-shadow-md" />
          <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-sans tracking-[0.25em] uppercase text-[#C8B79C] font-semibold">
            <span>Yaoundé</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span>Cameroun</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span>Atelier de Haute Confection</span>
          </div>
        </motion.div>

        {/* Hero Title with Typewriter Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.14] text-balance drop-shadow-sm min-h-[2.4em] sm:min-h-[2.2em] flex items-center justify-center"
        >
          <TypewriterTitle />
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-6 text-base sm:text-lg lg:text-xl font-sans font-normal text-[#E8E2D5] max-w-2xl mx-auto leading-relaxed text-balance"
        >
          {language === 'fr'
            ? 'Maison de stylisme et création de mode fondée par Ariel Junior Nzesseu. Silhouettes singulières, architecture sartoriale et confection sur mesure.'
            : 'Fashion house and bespoke tailoring founded by Ariel Junior Nzesseu in Yaoundé. Singular silhouettes, architectural craft, and bespoke attire.'}
        </motion.p>

        {/* 3 Luxury CTAs with smooth hover & transitions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
        >
          <button
            onClick={() => setActivePage('rendez-vous')}
            className="w-full sm:w-auto px-7 py-4 bg-[#9C7A4B] hover:bg-[#b08d59] text-white font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2 group cursor-pointer border border-[#C8B79C]/40"
          >
            <Calendar className="w-4 h-4 text-[#F5F1E8]" />
            <span>{language === 'fr' ? 'Prendre Rendez-vous / Devis' : 'Book Appointment / Quote'}</span>
          </button>

          <button
            onClick={() => setActivePage('catalogue')}
            className="w-full sm:w-auto px-7 py-4 bg-[#F5F1E8] text-[#0B0B0C] hover:bg-[#C8B79C] font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>{language === 'fr' ? 'Découvrir les créations' : 'Explore creations'}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </button>

          <a
            href={getWhatsAppUrl('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 bg-transparent hover:bg-white/10 text-white border border-[#F5F1E8]/40 hover:border-white font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>{language === 'fr' ? 'WhatsApp Direct' : 'Direct WhatsApp'}</span>
          </a>
        </motion.div>

        {/* Location trust indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-14 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs font-sans text-[#C8B79C]/90 font-medium"
        >
          <span>Descente Éleveur, en face de Turbo, Yaoundé</span>
          <span className="hidden sm:inline opacity-40" aria-hidden="true">·</span>
          <span>Contact direct : +237 691 087 382</span>
        </motion.div>

      </div>
    </section>
  );
};
