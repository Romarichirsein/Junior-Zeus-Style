import React, { useState, useEffect, useCallback } from 'react';
import { useApp } from '../../context/AppContext';
import {
  GraduationCap,
  Scissors,
  Sparkles,
  Award,
  Users,
  CheckCircle2,
  Calendar,
  MessageCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Play,
  Pause,
  Maximize2,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LuxuryStarAnimation } from '../lottie/LottieAnimations';

interface FormationHeroSlide {
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

const FORMATION_HERO_SLIDES: FormationHeroSlide[] = [
  {
    src: encodeURI('/Junior Zeus Style/hero formation.jpg'),
    fallbackSrc: '/images/hero/hero-formation.jpg',
    alt: 'Formation en stylisme et coupe - Junior Zeus Style Yaoundé',
    tagline: {
      fr: 'Maîtrise de la Coupe & du Patronage Anatomique',
      en: 'Mastery of Cutting & Anatomical Pattern Drafting'
    },
    kicker: {
      fr: 'Académie Junior Zeus Style · Yaoundé',
      en: 'Junior Zeus Style Academy · Yaoundé'
    }
  },
  {
    src: encodeURI('/Junior Zeus Style/hero 1 formation.jpg'),
    fallbackSrc: '/images/hero/hero-1-formation.jpg',
    alt: 'Atelier de formation pratique - Junior Zeus Style',
    tagline: {
      fr: 'Pratique Intensive en Atelier & Finitions Haute Couture',
      en: 'Intensive Workshop Practice & Haute Couture Finishes'
    },
    kicker: {
      fr: 'Transmission du Savoir-Faire Sartorial',
      en: 'Sartorial Transmission & Craft'
    }
  }
];

const GALLERY_PHOTOS = [
  {
    src: '/images/formation/atelier-formation-1.jpg',
    alt: 'Apprentissage des techniques de coupe à l’atelier Junior Zeus Style',
    caption: 'Traçage et coupe anatomique sur tissu noble'
  },
  {
    src: '/images/formation/atelier-formation-2.jpg',
    alt: 'Séance de couture et montage machine professionnelle',
    caption: 'Maîtrise des machines industrielles et piqûres régulières'
  },
  {
    src: '/images/formation/atelier-formation-3.jpg',
    alt: 'Supervision directe par le maître tailleur Ariel Junior Nzesseu',
    caption: 'Accompagnement personnalisé et corrections gestuelles'
  },
  {
    src: '/images/formation/atelier-formation-4.jpg',
    alt: 'Finitions main et boutonnières de prestige',
    caption: 'Exigence du détail et finitions invisibles'
  },
  {
    src: '/images/formation/atelier-formation-5.jpg',
    alt: 'Travail des étudiants en atelier à Yaoundé',
    caption: 'Immersion quotidienne dans le rythme d’un atelier professionnel'
  },
  {
    src: '/images/formation/atelier-formation-6.jpg',
    alt: 'Assemblage de robes et silhouettes de cérémonie',
    caption: 'Confection de tenues de gala et drapés féminins'
  },
  {
    src: '/images/formation/atelier-formation-7.jpg',
    alt: 'Présentation des pièces confectionnées par les apprentis',
    caption: 'Validation finale du tombé sur mannequin d’atelier'
  }
];

const TRAINING_MODULES = [
  {
    id: 'mod-initiation',
    badge: 'Niveau Débutant',
    duration: '3 Mois',
    title: {
      fr: 'Initiation & Fondamentaux de la Couture',
      en: 'Sewing Fundamentals & Machine Mastery'
    },
    tagline: {
      fr: 'Poser les bases indispensables pour maîtriser le vêtement.',
      en: 'Build essential foundations to master garment construction.'
    },
    description: {
      fr: 'Prise en main complète des machines industrielles, réglage des tensions, repassage de forme, premiers assemblages de précision (jupes droites, chemises classiques, pantalons simples).',
      en: 'Complete handling of industrial sewing machines, thread tensions, iron pressing shapes, and initial precision assemblies.'
    },
    skills: [
      'Maîtrise des machines à coudre industrielles & surjeteuses',
      'Prise de mesures corporelles de base',
      'Coutures d’assemblage, surpiqûres et ourlets invisibles',
      'Confection autonome de pièces du quotidien'
    ]
  },
  {
    id: 'mod-modelisme',
    badge: 'Niveau Intermédiaire',
    duration: '6 Mois',
    isPopular: true,
    title: {
      fr: 'Stylisme, Modélisme & Coupe Anatomique',
      en: 'Fashion Design & Anatomical Pattern Making'
    },
    tagline: {
      fr: 'Donner vie à vos idées par le patronage sur mesure.',
      en: 'Bring design sketches to life through custom pattern drafting.'
    },
    description: {
      fr: 'Conception de patrons sur papier et toile d’essai selon 24 points de mesure anatomiques. Étude des tombés de tissus, cols officiers asymétriques, emmanchures et vestes tailleur.',
      en: 'Drafting master paper patterns and canvas toiles from 24 anatomical metrics. Fabric drape study, mandarin collars, and structured tailor jackets.'
    },
    skills: [
      'Patronage à plat & gradation des tailles',
      'Coupe directe à la craie sur drap de laine et cotons lourds',
      'Architecture des vestes cintrées et vestiaires mixtes',
      'Adaptation aux différentes morphologies africaines et internationales'
    ]
  },
  {
    id: 'mod-haute-confection',
    badge: 'Niveau Avancé · Pro',
    duration: '9 Mois',
    title: {
      fr: 'Haute Confection & Tenues de Cérémonie',
      en: 'Haute Bespoke Couture & Ceremonial Attire'
    },
    tagline: {
      fr: 'L’excellence sartoriale et les pièces d’apparat.',
      en: 'Sartorial perfection and prestige gala garments.'
    },
    description: {
      fr: 'La formation phare de Junior Zeus Style : entoilage traditionnel en crin de cheval, corseterie invisible, robes de mariée grandioses, broderies au fil bronze et smoking sur mesure.',
      en: 'The signature Junior Zeus Style program: traditional horsehair canvas, concealed corsetry, wedding gowns, and bronze embroidery.'
    },
    skills: [
      'Entoilage plastron semi-traditionnel et montage des cols',
      'Boutonnières milanaises cousues au fil de soie',
      'Corseterie, drapés satinés et silhouettes de gala',
      'Lancement d’une collection capsule et mentorat de marque'
    ]
  },
  {
    id: 'mod-intensif',
    badge: 'Masterclass Express',
    duration: '1 Mois Accéléré',
    title: {
      fr: 'Masterclass Perfectionnement & Reconversion',
      en: 'Intensive Masterclass & Professional Refinement'
    },
    tagline: {
      fr: 'Un stage intensif d’immersion pour affûter vos finitions.',
      en: 'Immersion bootcamp designed to elevate your craft.'
    },
    description: {
      fr: 'Conçu pour les couturiers en activité, stylistes émergents ou professionnels souhaitant corriger leurs défauts de coupe, gagner en rapidité et maîtriser les finitions de luxe.',
      en: 'Tailored for practicing tailors and designers wishing to eliminate cutting flaws and master luxury standards.'
    },
    skills: [
      'Correction des défauts de cambrure et plis indésirables',
      'Techniques d’ajustement rapide d’atelier',
      'Optimisation des coûts de métrage textile',
      'Conseil direct en gestion d’atelier de mode'
    ]
  }
];

const SLIDE_DURATION = 5500;

export const FormationView: React.FC = () => {
  const { language, siteSettings } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % FORMATION_HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + FORMATION_HERO_SLIDES.length) % FORMATION_HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPlaying, isHovered, nextSlide]);

  const activeSlideData = FORMATION_HERO_SLIDES[currentSlide];

  const getWhatsAppRegistrationUrl = (moduleName?: string) => {
    const text = moduleName
      ? `Bonjour Junior Zeus Style, je souhaite m'inscrire / me renseigner sur la formation : "${moduleName}". Pouvez-vous me communiquer les modalités et dates de la prochaine session ?`
      : `Bonjour Junior Zeus Style, je souhaite obtenir des informations sur vos formations professionnelles en stylisme et haute confection à Yaoundé.`;
    return `https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-[#F5F1E8] dark:bg-[#0B0B0C] text-[#0B0B0C] dark:text-[#F5F1E8] transition-colors duration-200">
      
      {/* 1. HERO SLIDER SECTION (hero formation.jpg & hero 1 formation.jpg) */}
      <section
        className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden select-none bg-[#0B0B0C]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Slider Hero de la formation Junior Zeus Style"
      >
        {/* Animated Background Slides */}
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
                initial={{ scale: 1.12 }}
                animate={{ scale: 1.02 }}
                transition={{ duration: 6.5, ease: 'easeOut' }}
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

          {/* High-end Dark Scrims for Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/85 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/80 to-[#0B0B0C]/40 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(11,11,12,0.7)_100%)] pointer-events-none" />
        </div>

        {/* Side Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Diapositive précédente"
          className="hidden md:flex absolute left-4 lg:left-8 z-30 p-3 rounded-full bg-black/35 hover:bg-[#9C7A4B] text-white/80 hover:text-white border border-[#C8B79C]/25 backdrop-blur-md transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Diapositive suivante"
          className="hidden md:flex absolute right-4 lg:right-8 z-30 p-3 rounded-full bg-black/35 hover:bg-[#9C7A4B] text-white/80 hover:text-white border border-[#C8B79C]/25 backdrop-blur-md transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Main Hero Slide Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center text-[#FBFAF7]">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center mb-5"
          >
            <div className="p-3 rounded-full bg-[#9C7A4B]/20 border border-[#9C7A4B]/40 mb-3 shadow-lg backdrop-blur-xs">
              <GraduationCap className="w-7 h-7 text-[#C8B79C]" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans tracking-[0.25em] uppercase text-[#C8B79C] font-semibold"
              >
                <span>{language === 'fr' ? activeSlideData.kicker.fr : activeSlideData.kicker.en}</span>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.18] max-w-4xl mx-auto"
          >
            {language === 'fr'
              ? 'L’Art de la Haute Couture & du Stylisme à Yaoundé'
              : 'The Art of Haute Couture & Bespoke Tailoring in Yaoundé'}
          </motion.h1>

          {/* Dynamic Slide Tagline Pill */}
          <div className="mt-4 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.35 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B0B0C]/70 backdrop-blur-md border border-[#9C7A4B]/40 text-[#E8E2D5] text-xs uppercase tracking-[0.2em] font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#9C7A4B] animate-pulse" />
                <span>{language === 'fr' ? activeSlideData.tagline.fr : activeSlideData.tagline.en}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35 }}
            className="mt-6 text-sm sm:text-base lg:text-lg font-sans text-[#E8E2D5]/90 max-w-2xl mx-auto leading-relaxed"
          >
            {language === 'fr'
              ? 'Formations certifiantes, modélisme et perfectionnement sur mesure dispensés par Ariel Junior Nzesseu. Devenez créateur de mode accompli au sein d’un véritable atelier de confection.'
              : 'Professional tailoring, pattern making, and haute couture training mentored by Ariel Junior Nzesseu. Become an accomplished fashion creator inside an active atelier.'}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
          >
            <a
              href={getWhatsAppRegistrationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 bg-[#9C7A4B] hover:bg-[#b08d59] text-white font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 group cursor-pointer border border-[#C8B79C]/40"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>{language === 'fr' ? 'S’inscrire via WhatsApp' : 'Enroll via WhatsApp'}</span>
            </a>

            <a
              href="#programmes"
              className="w-full sm:w-auto px-7 py-4 bg-[#F5F1E8] text-[#0B0B0C] hover:bg-[#C8B79C] font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{language === 'fr' ? 'Découvrir les programmes' : 'View Training Modules'}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Quick Stats Badges */}
          <div className="mt-12 pt-7 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans text-[#C8B79C]">
            <div className="p-2">
              <span className="block text-xl sm:text-2xl font-editorial font-bold text-white">100%</span>
              <span className="opacity-80">Pratique en atelier</span>
            </div>
            <div className="p-2">
              <span className="block text-xl sm:text-2xl font-editorial font-bold text-white">24</span>
              <span className="opacity-80">Points de mesure anatomique</span>
            </div>
            <div className="p-2">
              <span className="block text-xl sm:text-2xl font-editorial font-bold text-white">4</span>
              <span className="opacity-80">Modules de formation</span>
            </div>
            <div className="p-2">
              <span className="block text-xl sm:text-2xl font-editorial font-bold text-white">Yaoundé</span>
              <span className="opacity-80">Descente Éleveur</span>
            </div>
          </div>

        </div>

        {/* Slide Bottom Controls */}
        <div className="absolute bottom-5 sm:bottom-7 left-0 right-0 z-30 flex items-center justify-center gap-4 sm:gap-6 px-4">
          <div className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase font-bold text-[#C8B79C] tabular-nums bg-black/40 px-2.5 py-1 rounded-sm border border-white/10 backdrop-blur-xs">
            <span>0{currentSlide + 1}</span>
            <span className="opacity-40 mx-1.5">/</span>
            <span className="opacity-70">0{FORMATION_HERO_SLIDES.length}</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            {FORMATION_HERO_SLIDES.map((_, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Aller au visuel ${index + 1}`}
                  className="relative py-2 focus:outline-none cursor-pointer"
                >
                  <div className={`h-1.5 rounded-full transition-all duration-300 overflow-hidden ${
                    isActive ? 'w-12 bg-white/20' : 'w-5 bg-white/25 hover:bg-white/45'
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

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Mettre en pause' : 'Lecture'}
            className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-[#C8B79C] hover:text-white border border-white/10 backdrop-blur-xs transition-colors cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </section>

      {/* 2. PEDAGOGICAL PILLARS SECTION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <LuxuryStarAnimation size={22} />
            <span className="text-xs uppercase tracking-[0.25em] font-sans text-[#9C7A4B] font-bold">
              {language === 'fr' ? 'La Méthode Junior Zeus' : 'The Junior Zeus Methodology'}
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#0B0B0C] dark:text-[#F5F1E8]">
            {language === 'fr' ? 'Pourquoi Se Former à l’Atelier ?' : 'Why Train in Our Atelier?'}
          </h2>
          <p className="mt-4 text-sm sm:text-base font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80 leading-relaxed">
            {language === 'fr'
              ? 'Contrairement aux formations purement théoriques, l’Académie Junior Zeus Style plonge chaque apprenant au cœur même de la production réelle, entouré de tissus d’exception et d’outils professionnels.'
              : 'Unlike abstract theory classrooms, Junior Zeus Style Academy immerses students directly inside a working high-fashion workshop.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#EFEAE0]/50 dark:bg-[#121214] p-8 rounded-xs border border-[#3C2C26]/10 dark:border-[#C8B79C]/12 space-y-4 hover:border-[#9C7A4B]/50 transition-colors">
            <div className="w-12 h-12 rounded-sm bg-[#9C7A4B]/15 text-[#9C7A4B] flex items-center justify-center">
              <Scissors className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8]">
              {language === 'fr' ? 'Coupe Anatomique' : 'Anatomical Cutting'}
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#3C2C26]/75 dark:text-[#C8B79C]/75 leading-relaxed">
              {language === 'fr'
                ? 'Apprenez à observer la posture, la cambrure et la morphologie pour adapter chaque tracé sans défaut de tombé.'
                : 'Learn to read posture and anatomical poise to draft bespoke patterns with zero flaws.'}
            </p>
          </div>

          <div className="bg-[#EFEAE0]/50 dark:bg-[#121214] p-8 rounded-xs border border-[#3C2C26]/10 dark:border-[#C8B79C]/12 space-y-4 hover:border-[#9C7A4B]/50 transition-colors">
            <div className="w-12 h-12 rounded-sm bg-[#9C7A4B]/15 text-[#9C7A4B] flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8]">
              {language === 'fr' ? 'Finitions Haute Couture' : 'Haute Couture Finishing'}
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#3C2C26]/75 dark:text-[#C8B79C]/75 leading-relaxed">
              {language === 'fr'
                ? 'Boutonnières milanaises main, doublures gansées, toilage plastron et repassage de forme au fer lourd.'
                : 'Hand-sewn Milanese buttonholes, bound seams, floating canvas chests, and heavy iron pressing.'}
            </p>
          </div>

          <div className="bg-[#EFEAE0]/50 dark:bg-[#121214] p-8 rounded-xs border border-[#3C2C26]/10 dark:border-[#C8B79C]/12 space-y-4 hover:border-[#9C7A4B]/50 transition-colors">
            <div className="w-12 h-12 rounded-sm bg-[#9C7A4B]/15 text-[#9C7A4B] flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8]">
              {language === 'fr' ? 'Effectifs Réduits' : 'Small Classes'}
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#3C2C26]/75 dark:text-[#C8B79C]/75 leading-relaxed">
              {language === 'fr'
                ? 'Chaque apprenant bénéficie de son propre poste de travail et d’un suivi individuel quotidien par Ariel Junior Nzesseu.'
                : 'Each student receives a personal workstation and daily individual guidance directly with the master cutter.'}
            </p>
          </div>

          <div className="bg-[#EFEAE0]/50 dark:bg-[#121214] p-8 rounded-xs border border-[#3C2C26]/10 dark:border-[#C8B79C]/12 space-y-4 hover:border-[#9C7A4B]/50 transition-colors">
            <div className="w-12 h-12 rounded-sm bg-[#9C7A4B]/15 text-[#9C7A4B] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8]">
              {language === 'fr' ? 'Lancement Professionnel' : 'Brand Launch Mentorship'}
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#3C2C26]/75 dark:text-[#C8B79C]/75 leading-relaxed">
              {language === 'fr'
                ? 'Conseils pour fixer ses tarifs, gérer sa clientèle, sourcer les tissus et monter son propre atelier de mode.'
                : 'Practical coaching on pricing, client management, textile sourcing, and launching your independent brand.'}
            </p>
          </div>
        </div>
      </section>

      {/* 3. TRAINING MODULES SECTION */}
      <section id="programmes" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/15">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-sans text-[#9C7A4B] font-bold block mb-2">
            {language === 'fr' ? 'Cursus & Formations Disponibles' : 'Curriculum & Programs'}
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8]">
            {language === 'fr' ? 'Choisissez Votre Formule d’Apprentissage' : 'Choose Your Learning Path'}
          </h2>
          <p className="mt-4 text-xs sm:text-sm font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80">
            {language === 'fr'
              ? 'Des modules conçus aussi bien pour les débutants motivés que pour les tailleurs souhaitant atteindre le niveau haute couture.'
              : 'Tailored programs for passionate beginners and working seamstresses aiming for haute couture standard.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TRAINING_MODULES.map((mod) => (
            <motion.article
              key={mod.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative p-8 sm:p-10 rounded-xs border flex flex-col justify-between transition-all duration-300 ${
                mod.isPopular
                  ? 'bg-[#EFEAE0] dark:bg-[#151518] border-[#9C7A4B] shadow-xl ring-1 ring-[#9C7A4B]/40'
                  : 'bg-[#EFEAE0]/40 dark:bg-[#111113] border-[#3C2C26]/10 dark:border-[#C8B79C]/12 hover:border-[#9C7A4B]/50'
              }`}
            >
              {mod.isPopular && (
                <div className="absolute -top-3 right-6 bg-[#9C7A4B] text-white text-[10px] font-sans uppercase tracking-widest font-bold px-3 py-1 rounded-xs shadow-md">
                  {language === 'fr' ? 'Programme Recommandé' : 'Recommended Path'}
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs uppercase font-sans tracking-widest font-bold text-[#9C7A4B]">
                    {mod.badge}
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-xs font-sans text-[#3C2C26]/70 dark:text-[#C8B79C]/70 bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-sm">
                    <Clock className="w-3.5 h-3.5 text-[#9C7A4B]" />
                    <span>{mod.duration}</span>
                  </div>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8]">
                  {language === 'fr' ? mod.title.fr : mod.title.en}
                </h3>

                <p className="text-xs sm:text-sm font-sans italic text-[#9C7A4B]">
                  « {language === 'fr' ? mod.tagline.fr : mod.tagline.en} »
                </p>

                <p className="text-xs sm:text-sm font-sans text-[#3C2C26]/85 dark:text-[#C8B79C]/85 leading-relaxed">
                  {language === 'fr' ? mod.description.fr : mod.description.en}
                </p>

                <div className="pt-3 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10 space-y-2">
                  <span className="text-[11px] uppercase tracking-wider font-sans font-semibold text-[#0B0B0C] dark:text-[#F5F1E8] block">
                    {language === 'fr' ? 'Compétences acquises :' : 'Skills acquired:'}
                  </span>
                  {mod.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs font-sans text-[#3C2C26]/85 dark:text-[#C8B79C]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#9C7A4B] shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10 flex flex-wrap items-center gap-4">
                <a
                  href={getWhatsAppRegistrationUrl(language === 'fr' ? mod.title.fr : mod.title.en)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 bg-[#9C7A4B] hover:bg-[#b08d59] text-white font-sans text-xs uppercase tracking-widest font-bold rounded-sm text-center transition-all shadow-md hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>{language === 'fr' ? 'Demander le dossier d’inscription' : 'Apply on WhatsApp'}</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 4. REAL ATELIER GALLERY (Photos from Junior Zeus Style/formation) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/15">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <LuxuryStarAnimation size={22} />
            <span className="text-xs uppercase tracking-[0.25em] font-sans text-[#9C7A4B] font-bold">
              {language === 'fr' ? 'Coulisses de l’Apprentissage' : 'Inside the Training Atelier'}
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8]">
            {language === 'fr' ? 'La Vie à l’Atelier en Images' : 'Atelier Life & Students in Action'}
          </h2>
          <p className="mt-4 text-xs sm:text-sm font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80">
            {language === 'fr'
              ? 'Découvrez les apprenants de la maison Junior Zeus Style en pleine pratique sur les tables de coupe et les machines à Yaoundé.'
              : 'Explore our apprentices practicing anatomical drafting and machine stitching inside the Yaoundé atelier.'}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {GALLERY_PHOTOS.map((photo, pIdx) => (
            <motion.div
              key={pIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: pIdx * 0.08 }}
              onClick={() => setSelectedPhoto(photo.src)}
              className="group relative rounded-xs overflow-hidden border border-[#3C2C26]/15 dark:border-[#C8B79C]/15 bg-black/10 aspect-4/3 cursor-pointer shadow-md hover:shadow-xl hover:border-[#9C7A4B] transition-all duration-300"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white text-xs font-sans font-medium">
                  {photo.caption}
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-[#C8B79C] uppercase tracking-wider font-semibold">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Agrandir</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal for Gallery Photo */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Fermer la photo"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] rounded-sm overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto}
              alt="Photo atelier Junior Zeus Style"
              className="w-full h-full object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}

      {/* 5. PRACTICAL INFORMATION & REGISTRATION BANNER */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16">
        <div className="bg-[#EFEAE0] dark:bg-[#131316] p-8 sm:p-14 rounded-xs border border-[#9C7A4B]/40 shadow-xl space-y-8 text-center">
          
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#9C7A4B]/15 text-[#9C7A4B] mb-2">
            <Calendar className="w-7 h-7" />
          </div>

          <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8]">
            {language === 'fr' ? 'Prochaine Session : Inscriptions Ouvertes' : 'Next Intake: Registrations Open'}
          </h3>

          <p className="text-xs sm:text-sm font-sans text-[#3C2C26]/85 dark:text-[#C8B79C]/85 max-w-2xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'Les places sont strictement limitées pour garantir la qualité de l’encadrement. Contactez directement l’atelier à Yaoundé pour visiter les locaux, échanger avec le maître créateur et réserver votre place.'
              : 'Spaces are strictly limited to preserve personal mentoring quality. Contact the Yaoundé atelier directly to visit the facilities and reserve your enrollment.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80 pt-2">
            <div className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#9C7A4B]" />
              <span>Descente Éleveur, en face de Turbo, Yaoundé</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp : +237 691 087 382</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppRegistrationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#9C7A4B] hover:bg-[#b08d59] text-white font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>{language === 'fr' ? 'Réserver ma place sur WhatsApp' : 'Reserve Spot on WhatsApp'}</span>
            </a>

            <a
              href="tel:+237691087382"
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 border border-[#3C2C26]/20 dark:border-[#C8B79C]/25 text-[#0B0B0C] dark:text-[#F5F1E8] font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>{language === 'fr' ? 'Appeler l’Atelier' : 'Call the Atelier'}</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
