import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LuxuryStarAnimation } from '../lottie/LottieAnimations';

export const TestimonialsSection: React.FC = () => {
  const { language, testimonials, t, setActivePage } = useApp();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10 overflow-hidden">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <LuxuryStarAnimation size={24} />
          <span className="text-xs uppercase tracking-[0.25em] font-sans text-[#9C7A4B] font-bold">
            {language === 'fr' ? 'Confiance & Reconnaissance' : 'Patron Testimonials'}
          </span>
        </div>
        <h2 className="font-editorial text-3xl sm:text-5xl text-[#0B0B0C] dark:text-[#F5F1E8] font-bold tracking-tight">
          {language === 'fr' ? 'La voix de nos clients d’exception' : 'Words from Distinguished Patrons'}
        </h2>
        <p className="mt-4 text-xs sm:text-sm font-sans text-[#3C2C26]/75 dark:text-[#C8B79C]/75 leading-relaxed">
          {language === 'fr'
            ? 'De Yaoundé et Douala aux capitales internationales, nos créations accompagnent des moments charnières de vie et de représentation.'
            : 'From Yaoundé and Douala to international capitals, our bespoke garments accompany landmark life and ceremonial moments.'}
        </p>
      </motion.div>

      {/* Testimonials Desktop Grid (3 cards) & Carousel controls */}
      <div className="hidden lg:grid grid-cols-3 gap-8 mb-12">
        {testimonials.slice(0, 3).map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="flex flex-col justify-between p-8 rounded-xs bg-[#EFEAE0]/50 dark:bg-[#141416] border border-[#3C2C26]/10 dark:border-[#C8B79C]/12 relative shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div>
              {/* Star Rating & Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1 text-[#9C7A4B]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#9C7A4B]/30 shrink-0" />
              </div>

              {/* Quote Text */}
              <p className="text-sm font-sans leading-relaxed text-[#0B0B0C]/90 dark:text-[#F5F1E8]/90 italic">
                « {t(item.quote)} »
              </p>
            </div>

            {/* Author info */}
            <div className="mt-8 pt-5 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10">
              <div className="font-editorial text-lg font-bold text-[#0B0B0C] dark:text-[#F5F1E8]">
                {item.clientName}
              </div>
              <div className="text-xs font-sans text-[#9C7A4B] font-semibold">
                {t(item.role)} · {item.location}
              </div>
              <div className="mt-1 text-[11px] font-sans text-[#3C2C26]/60 dark:text-[#C8B79C]/60 truncate">
                {t(item.pieceMade)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile & Tablet Slider */}
      <div className="lg:hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-8 rounded-xs bg-[#EFEAE0]/60 dark:bg-[#141416] border border-[#3C2C26]/10 dark:border-[#C8B79C]/12"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1 text-[#9C7A4B]">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <Quote className="w-6 h-6 text-[#9C7A4B]/30" />
            </div>

            <p className="text-sm font-sans leading-relaxed text-[#0B0B0C]/90 dark:text-[#F5F1E8]/90 italic mb-6">
              « {t(testimonials[currentIndex].quote)} »
            </p>

            <div className="pt-4 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10">
              <div className="font-editorial text-lg font-bold text-[#0B0B0C] dark:text-[#F5F1E8]">
                {testimonials[currentIndex].clientName}
              </div>
              <div className="text-xs font-sans text-[#9C7A4B] font-semibold">
                {t(testimonials[currentIndex].role)} · {testimonials[currentIndex].location}
              </div>
              <div className="mt-1 text-[11px] font-sans text-[#3C2C26]/60 dark:text-[#C8B79C]/60">
                {t(testimonials[currentIndex].pieceMade)}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Navigation buttons */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            aria-label="Témoignage précédent"
            className="p-2.5 rounded-full border border-[#3C2C26]/20 dark:border-[#C8B79C]/25 text-[#0B0B0C] dark:text-[#F5F1E8] hover:bg-[#9C7A4B] hover:text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-sans text-[#3C2C26]/60 dark:text-[#C8B79C]/60">
            {currentIndex + 1} / {testimonials.length}
          </span>
          <button
            onClick={nextSlide}
            aria-label="Témoignage suivant"
            className="p-2.5 rounded-full border border-[#3C2C26]/20 dark:border-[#C8B79C]/25 text-[#0B0B0C] dark:text-[#F5F1E8] hover:bg-[#9C7A4B] hover:text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom CTA to Book */}
      <div className="mt-12 text-center">
        <button
          onClick={() => setActivePage('rendez-vous')}
          className="px-8 py-3.5 bg-[#0B0B0C] dark:bg-[#F5F1E8] text-white dark:text-[#0B0B0C] hover:bg-[#9C7A4B] dark:hover:bg-[#9C7A4B] dark:hover:text-white rounded-sm text-xs font-sans uppercase tracking-widest font-bold transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
        >
          {language === 'fr' ? 'Rejoindre nos clients privilégiés' : 'Commission Your Silhouette'}
        </button>
      </div>

    </section>
  );
};
