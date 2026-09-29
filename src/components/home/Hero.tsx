import React, { useState, useEffect, useCallback } from 'react';
import { useApp } from '../../context/AppContext';
import { MessageCircle, ArrowRight, Calendar, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { LuxuryStarAnimation } from '../lottie/LottieAnimations';
import { motion, AnimatePresence } from 'motion/react';
import { TypewriterTitle } from './TypewriterTitle';

interface HeroSlide {
  src: string;
  fallbackSrc: string;
  alt: string;
  tagline: {
    fr: string;
    en: string;
  };
  kicker: {
    fr: string;
    en: string;
  };
}

const HERO_SLIDES: HeroSlide[] = [
  {
    src: encodeURI('/Junior Zeus Style/hero.jpg'),
    fallbackSrc: '/images/hero/hero.jpg',
    alt: 'Haute Confection & Lignes Impériales - Junior Zeus Style Yaoundé',
    tagline: {
      fr: 'Haute Confection & Lignes Impériales',
      en: 'Haute Couture & Imperial Lines'
    },
    kicker: {
      fr: 'Yaoundé · Cameroun · Maison de Création',
      en: 'Yaoundé · Cameroon · Fashion House'
    }
  },
  {
    src: encodeURI('/Junior Zeus Style/hero 1.jpg'),
    fallbackSrc: '/images/hero/hero-1.jpg',
    alt: "L'Art du Sur-Mesure & Coupe Anatomique - Junior Zeus Style",
    tagline: {
      fr: "L'Art du Sur-Mesure & Coupe Anatomique",
      en: 'The Art of Bespoke & Anatomical Precision'
    },
    kicker: {
      fr: 'Atelier Sartorial · Confection Personnalisée',
      en: 'Sartorial Atelier · Personalized Tailoring'
    }
  },
  {
    src: encodeURI('/Junior Zeus Style/hero 2.jpg'),
    fallbackSrc: '/images/hero/hero-2.jpg',
    alt: 'Allure Majestueuse & Étoffes Nobles - Junior Zeus Style',
    tagline: {
      fr: 'Allure Majestueuse & Étoffes Nobles',
      en: 'Commanding Stance & Noble Textiles'
    },
    kicker: {
      fr: 'Élégance Contemporaine · Finitions Main',
      en: 'Contemporary Elegance · Hand Finishes'
    }
  },
  {
    src: encodeURI('/Junior Zeus Style/hero 3.jpg'),
    fallbackSrc: '/images/hero/hero-3.jpg',
    alt: 'Créations Cérémonie & Silhouettes Singulières - Junior Zeus Style',
    tagline: {
      fr: 'Créations Cérémonie & Silhouettes Singulières',
      en: 'Ceremonial Designs & Signature Silhouettes'
    },
    kicker: {
      fr: 'Galas & Célébrations · Présence Altière',
      en: 'Galas & Celebrations · Imposing Poise'
    }
  },
  {
    src: encodeURI('/Junior Zeus Style/hero 4.jpg'),
    fallbackSrc: '/images/hero/hero-4.jpg',
    alt: "Savoir-Faire d'Exception à Yaoundé - Junior Zeus Style",
    tagline: {
      fr: "Savoir-Faire d'Exception & Transmission",
      en: 'Exceptional Craftsmanship & Mastery'
    },
    kicker: {
      fr: 'Atelier de Haute Confection & Formation',
      en: 'Haute Couture Workshop & Academy'
    }
  }
];

const SLIDE_DURATION = 6000; // 6 seconds per slide

export const Hero: React.FC = () => {
  const { language, setActivePage, getWhatsAppUrl } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Automatic slideshow timer
  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPlaying, isHovered, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative min-h-[94vh] flex items-center justify-center overflow-hidden select-none bg-[#0B0B0C]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Galerie Hero de la maison Junior Zeus Style"
    >
      {/* Background Animated Slider Layers with Ken Burns effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <motion.img
              initial={{ scale: 1.14 }}
              animate={{ scale: 1.03 }}
              transition={{ duration: 7, ease: 'easeOut' }}
              src={activeSlideData.src}
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== activeSlideData.fallbackSrc) {
                  target.src = activeSlideData.fallbackSrc;
                }
              }}
              alt={activeSlideData.alt}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* High-end Multi-Layered Luxury Scrims */}
        {/* Top subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/85 via-transparent to-transparent pointer-events-none" />
        {/* Main contrast gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/75 to-[#0B0B0C]/40 pointer-events-none" />
        {/* Radial vignette for cinematic richness */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(11,11,12,0.7)_100%)] pointer-events-none" />
      </div>

      {/* Side Arrow Navigation (Desktop & Tablet) */}
      <button
        onClick={prevSlide}
        aria-label="Image précédente"
        className="hidden md:flex absolute left-4 lg:left-8 z-30 p-3 lg:p-3.5 rounded-full bg-black/30 hover:bg-[#9C7A4B] text-white/80 hover:text-white border border-[#C8B79C]/25 backdrop-blur-md transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 group cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Image suivante"
        className="hidden md:flex absolute right-4 lg:right-8 z-30 p-3 lg:p-3.5 rounded-full bg-black/30 hover:bg-[#9C7A4B] text-white/80 hover:text-white border border-[#C8B79C]/25 backdrop-blur-md transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 group cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center text-[#FBFAF7]">
        
        {/* Lottie Animated Luxury Emblem & Slide Kicker */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col items-center justify-center mb-5"
        >
          <LuxuryStarAnimation size={46} className="mb-2.5 opacity-95 drop-shadow-md" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-sans tracking-[0.25em] uppercase text-[#C8B79C] font-semibold"
            >
              <span>{language === 'fr' ? activeSlideData.kicker.fr : activeSlideData.kicker.en}</span>
            </motion.div>
          </AnimatePresence>
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

        {/* Dynamic Slide Tagline Pill */}
        <div className="mt-4 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B0B0C]/60 backdrop-blur-md border border-[#9C7A4B]/40 text-[#E8E2D5] text-xs uppercase tracking-[0.2em] font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#9C7A4B] animate-pulse" />
              <span>{language === 'fr' ? activeSlideData.tagline.fr : activeSlideData.tagline.en}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-6 text-base sm:text-lg lg:text-xl font-sans font-normal text-[#E8E2D5] max-w-2xl mx-auto leading-relaxed text-balance"
        >
          {language === 'fr'
            ? '« Ma passion vous sublimer » — Haute couture mixte, robes de mariées & soirée, tenues africaines et formation professionnelle à Yaoundé.'
            : '« My passion is to sublimate you » — Haute couture, bridal & evening gowns, African heritage tailoring, and professional training in Yaoundé.'}
        </motion.p>

        {/* 3 Luxury CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
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
          className="mt-12 pt-7 border-t border-white/15 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-sans text-[#C8B79C]/90 font-medium"
        >
          <span>Yaoundé - Descente Éleveur, face Turbo Distribution Center</span>
          <span className="hidden sm:inline opacity-40" aria-hidden="true">·</span>
          <span>Contact direct : +237 691 087 382</span>
          <span className="hidden sm:inline opacity-40" aria-hidden="true">·</span>
          <span>E-mail : juniortamno13@gmail.com</span>
        </motion.div>

      </div>

      {/* Bottom Slider Control Bar (Progress bars, Counter, Play/Pause) */}
      <div className="absolute bottom-5 sm:bottom-7 left-0 right-0 z-30 flex items-center justify-center gap-4 sm:gap-6 px-4">
        
        {/* Slide Counter (e.g. 01 / 05) */}
        <div className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase font-bold text-[#C8B79C] tabular-nums bg-black/40 px-2.5 py-1 rounded-sm border border-white/10 backdrop-blur-xs">
          <span>0{currentSlide + 1}</span>
          <span className="opacity-40 mx-1.5">/</span>
          <span className="opacity-70">0{HERO_SLIDES.length}</span>
        </div>

        {/* Visual Progress Segments */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Aller à la diapositive ${index + 1}`}
                className="relative py-2 focus:outline-none cursor-pointer group"
              >
                <div className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 overflow-hidden ${
                  isActive ? 'w-10 sm:w-14 bg-white/20' : 'w-4 sm:w-6 bg-white/25 hover:bg-white/45'
                }`}>
                  {isActive && (
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{
                        duration: SLIDE_DURATION / 1000,
                        ease: 'linear',
                        repeat: 0
                      }}
                      className="h-full bg-[#9C7A4B]"
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Mettre en pause le diaporama' : 'Lancer le diaporama'}
          className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-[#C8B79C] hover:text-white border border-white/10 backdrop-blur-xs transition-colors cursor-pointer"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>

      </div>
    </section>
  );
};
