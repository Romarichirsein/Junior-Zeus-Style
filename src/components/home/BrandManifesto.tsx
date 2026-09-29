import React from 'react';
import { useApp } from '../../context/AppContext';
import { LuxuryStarAnimation } from '../lottie/LottieAnimations';
import { motion } from 'motion/react';

export const BrandManifesto: React.FC = () => {
  const { language, siteSettings, t } = useApp();

  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#F5F1E8] dark:bg-[#0B0B0C] border-b border-[#3C2C26]/10 dark:border-[#C8B79C]/10 transition-colors relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#9C7A4B]/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        
        {/* Lottie Shimmer Star */}
        <div className="flex justify-center mb-4">
          <LuxuryStarAnimation size={44} />
        </div>

        {/* Subtle kicker */}
        <span className="text-xs uppercase tracking-[0.25em] font-sans text-[#9C7A4B] font-bold block mb-6">
          {language === 'fr' ? 'Manifeste de la Maison' : 'House Manifesto'}
        </span>

        {/* Large quote in Poppins font with warm elegance */}
        <blockquote className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B0B0C] dark:text-[#F5F1E8] leading-tight text-balance tracking-tight">
          « {t(siteSettings.manifesto)} »
        </blockquote>

        {/* Attribution */}
        <div className="mt-10 flex flex-col items-center">
          <div className="w-12 h-[1px] bg-[#9C7A4B]/40 mb-4" />
          <span className="font-sans text-xs tracking-widest uppercase font-bold text-[#0B0B0C] dark:text-[#F5F1E8]">
            {siteSettings.founderName}
          </span>
          <span className="text-xs font-sans italic text-[#3C2C26]/70 dark:text-[#C8B79C]/70 mt-1">
            {language === 'fr' ? 'Fondateur & Styliste de Junior Zeus Style, Yaoundé' : 'Founder & Designer at Junior Zeus Style, Yaoundé'}
          </span>
        </div>

      </motion.div>
    </section>
  );
};
