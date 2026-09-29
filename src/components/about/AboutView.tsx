import React from 'react';
import { useApp } from '../../context/AppContext';
import { EditorialImage } from '../common/EditorialImage';
import { BRAND_VALUES } from '../../data/initialData';
import { MessageCircle, MapPin, Sparkles, Scissors, Clock } from 'lucide-react';
import { TailorScissorsAnimation, LuxuryStarAnimation } from '../lottie/LottieAnimations';
import { motion } from 'motion/react';

export const AboutView: React.FC = () => {
  const { language, t, siteSettings, getWhatsAppUrl, setActivePage } = useApp();

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      
      {/* Hero Split: Designer Portrait & Bio */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <div className="rounded-xs overflow-hidden shadow-2xl border border-[#3C2C26]/10 dark:border-[#C8B79C]/10 bg-neutral-900">
            <EditorialImage
              src="/src/assets/images/designer_portrait_1790586101363.jpg"
              alt="Ariel Junior Nzesseu, créateur et styliste de Junior Zeus Style"
              aspectRatio="3:4"
            />
          </div>
          <div className="mt-3 text-center sm:text-left text-xs font-sans text-[#3C2C26]/60 dark:text-[#C8B79C]/60 flex items-center justify-between">
            <span className="font-semibold">Ariel Junior Nzesseu (« Junior Zeus »)</span>
            <span>Yaoundé, Cameroun</span>
          </div>
        </motion.div>

        {/* Right Column: Narrative Biography */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#9C7A4B] font-bold block">
              {language === 'fr' ? 'La Maison & Le Créateur' : 'The House & The Designer'}
            </span>
            <TailorScissorsAnimation size={36} />
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl text-[#0B0B0C] dark:text-[#F5F1E8] font-bold tracking-tight leading-tight">
            {language === 'fr'
              ? 'L’art sartorial réinventé au cœur de Yaoundé.'
              : 'Sartorial Artistry Reimagined in Yaoundé.'}
          </h1>

          <p className="text-sm sm:text-base font-sans text-[#3C2C26]/85 dark:text-[#C8B79C]/85 leading-relaxed">
            {language === 'fr'
              ? 'Fondée par Ariel Junior Nzesseu, connu sous le nom de Junior Zeus, la maison de mode Junior Zeus Style est née d’une passion inconditionnelle pour la confection d’exception, l’exactitude des proportions et la noblesse des étoffes.'
              : 'Founded by Ariel Junior Nzesseu, publicly known as Junior Zeus, the fashion house Junior Zeus Style was born of an uncompromising passion for exceptional tailoring, proportional accuracy, and noble textiles.'}
          </p>

          <p className="text-sm sm:text-base font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80 leading-relaxed">
            {language === 'fr'
              ? 'Installé à Yaoundé (Descente Éleveur / Ngousso), l’atelier s’est rapidement distingué par ses créations sur mesure pour cérémonies, réceptions officielles et vestiaire contemporain. Chaque silhouette est un dialogue intime entre les mensurations du client et la main du maître tailleur.'
              : 'Established in Yaoundé (Descente Éleveur / Ngousso), the atelier distinguishes itself through bespoke attire for ceremonies, galas, and contemporary wardrobes. Every silhouette is an intimate dialogue between patron anatomy and the cutter’s hand.'}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#0B0B0C] dark:bg-[#F5F1E8] text-white dark:text-[#0B0B0C] hover:bg-[#9C7A4B] dark:hover:bg-[#9C7A4B] dark:hover:text-white rounded-sm text-xs font-sans uppercase tracking-widest font-bold inline-flex items-center gap-2 transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>{language === 'fr' ? 'Échanger avec Ariel Junior' : 'Connect with Ariel Junior'}</span>
            </a>

            <button
              onClick={() => setActivePage('contact')}
              className="px-6 py-3.5 border border-[#3C2C26]/20 dark:border-[#C8B79C]/20 text-[#0B0B0C] dark:text-[#F5F1E8] hover:border-[#9C7A4B] hover:text-[#9C7A4B] rounded-sm text-xs font-sans uppercase tracking-widest font-bold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              {language === 'fr' ? 'Localiser l’atelier' : 'Locate the atelier'}
            </button>
          </div>
        </motion.div>

      </section>

      {/* House Values */}
      <section className="border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10 pt-16">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#9C7A4B] font-semibold block mb-2">
            {language === 'fr' ? 'Nos Principes' : 'Our Principles'}
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#0B0B0C] dark:text-[#F5F1E8] font-light">
            {language === 'fr' ? 'Les Piliers de Junior Zeus Style' : 'The Pillars of the House'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRAND_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#EFEAE0]/60 dark:bg-[#111113]/60 border border-[#3C2C26]/10 dark:border-[#C8B79C]/10 rounded-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-editorial text-2xl text-[#9C7A4B] block mb-3">
                  0{idx + 1}
                </span>
                <h3 className="font-editorial text-2xl text-[#0B0B0C] dark:text-[#F5F1E8] mb-2">
                  {t(val.title)}
                </h3>
                <p className="text-xs font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80 leading-relaxed">
                  {t(val.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Atelier Gallery & Atmosphere */}
      <section className="border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10 pt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#9C7A4B] font-semibold block mb-2">
              {language === 'fr' ? 'Coulisses & Création' : 'Behind the Scenes'}
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#0B0B0C] dark:text-[#F5F1E8] font-light">
              {language === 'fr' ? 'L’Espace de Confection à Yaoundé' : 'The Tailoring Studio in Yaoundé'}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-sans text-[#9C7A4B]">
            <MapPin className="w-4 h-4" />
            <span>Descente Éleveur, en face de Turbo</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xs overflow-hidden border border-[#3C2C26]/10 dark:border-[#C8B79C]/10">
            <EditorialImage
              src="/src/assets/images/hero_atelier_couture_1790586086146.jpg"
              alt="Table de coupe artisanale à l'atelier"
              aspectRatio="4:3"
            />
            <div className="p-3 bg-[#EFEAE0]/50 dark:bg-[#111113]/50 text-xs font-sans text-center text-[#3C2C26]/70 dark:text-[#C8B79C]/70">
              {language === 'fr' ? 'La table de coupe et patronage' : 'Master cutting table'}
            </div>
          </div>

          <div className="rounded-xs overflow-hidden border border-[#3C2C26]/10 dark:border-[#C8B79C]/10">
            <EditorialImage
              src="/src/assets/images/textile_craft_detail_1790586114656.jpg"
              alt="Broderies et piqûres au fil d'or"
              aspectRatio="4:3"
            />
            <div className="p-3 bg-[#EFEAE0]/50 dark:bg-[#111113]/50 text-xs font-sans text-center text-[#3C2C26]/70 dark:text-[#C8B79C]/70">
              {language === 'fr' ? 'Détails des points rabattus à la main' : 'Hand-stitched seam details'}
            </div>
          </div>

          <div className="rounded-xs overflow-hidden border border-[#3C2C26]/10 dark:border-[#C8B79C]/10">
            <EditorialImage
              src="/src/assets/images/atelier_fitting_space_1790586126242.jpg"
              alt="Salon d'accueil et d'essayage"
              aspectRatio="4:3"
            />
            <div className="p-3 bg-[#EFEAE0]/50 dark:bg-[#111113]/50 text-xs font-sans text-center text-[#3C2C26]/70 dark:text-[#C8B79C]/70">
              {language === 'fr' ? 'Le salon d’essayage privé' : 'Private fitting salon'}
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="bg-[#0B0B0C] text-[#F5F1E8] p-8 sm:p-12 lg:p-16 rounded-xs relative overflow-hidden">
        <div className="max-w-2xl relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#9C7A4B] font-semibold block">
            {language === 'fr' ? 'Expérience Sur-Mesure' : 'Bespoke Experience'}
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white leading-tight">
            {language === 'fr'
              ? 'Concevons ensemble votre prochaine silhouette.'
              : 'Let us shape your next commanding silhouette.'}
          </h2>
          <p className="text-sm font-sans text-[#E8E2D5] leading-relaxed">
            {language === 'fr'
              ? 'Pour planifier un rendez-vous à l’atelier de Yaoundé ou initier un devis à distance, le moyen le plus direct et réactif est notre WhatsApp officiel.'
              : 'To schedule an appointment at the Yaoundé studio or request a remote commission, the most direct and responsive channel is our official WhatsApp.'}
          </p>
          <a
            href={getWhatsAppUrl('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5F1E8] text-[#0B0B0C] hover:bg-[#C8B79C] text-xs font-sans uppercase tracking-widest font-semibold rounded-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>{language === 'fr' ? 'Échanger sur WhatsApp (+237 691 087 382)' : 'Message on WhatsApp (+237 691 087 382)'}</span>
          </a>
        </div>
      </section>

    </div>
  );
};
