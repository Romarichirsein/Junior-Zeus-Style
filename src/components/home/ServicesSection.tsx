import React from 'react';
import { useApp } from '../../context/AppContext';
import { Scissors, Sparkles, Crown, HeartHandshake, Wrench, UserCheck, GraduationCap, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { LuxuryStarAnimation } from '../lottie/LottieAnimations';
import { EditorialImage } from '../common/EditorialImage';

export const ServicesSection: React.FC = () => {
  const { language, services, t, setActivePage, setPrefilledBookingData } = useApp();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors': return <Scissors className="w-5 h-5 text-[#9C7A4B]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#9C7A4B]" />;
      case 'Crown': return <Crown className="w-5 h-5 text-[#9C7A4B]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-[#9C7A4B]" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#9C7A4B]" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-[#9C7A4B]" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#9C7A4B]" />;
      default: return <Scissors className="w-5 h-5 text-[#9C7A4B]" />;
    }
  };

  const handleBookService = (serviceTitle: string) => {
    setPrefilledBookingData({ serviceType: serviceTitle });
    setActivePage('rendez-vous');
  };

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <LuxuryStarAnimation size={24} />
            <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#9C7A4B] font-bold">
              {language === 'fr' ? 'Prestations de la Maison' : 'House Disciplines'}
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#0B0B0C] dark:text-[#F5F1E8] font-bold tracking-tight">
            {language === 'fr' ? 'Nos Services de Haute Confection' : 'Bespoke Sartorial Services'}
          </h2>
        </div>

        <button
          onClick={() => setActivePage('services')}
          className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#0B0B0C] dark:text-[#F5F1E8] hover:text-[#9C7A4B] transition-colors pb-1 border-b-2 border-current self-start md:self-auto cursor-pointer font-bold"
        >
          <span>{language === 'fr' ? 'Découvrir tous les services' : 'Explore all services'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </motion.div>

      {/* Services Grid with Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((srv, index) => (
          <motion.div
            key={srv.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col justify-between bg-[#EFEAE0]/60 dark:bg-[#151517] border border-[#3C2C26]/12 dark:border-[#C8B79C]/15 hover:border-[#9C7A4B]/40 rounded-xs p-6 sm:p-7 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
          >
            {/* Popular Badge */}
            {srv.isPopular && (
              <div className="absolute top-0 right-0 bg-[#9C7A4B] text-white text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xs">
                {language === 'fr' ? 'Signature' : 'Popular'}
              </div>
            )}

            <div>
              {/* Icon & Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xs bg-[#F5F1E8] dark:bg-[#202024] shadow-xs">
                  {getIcon(srv.iconName)}
                </div>
                <div className="text-xs font-sans text-[#9C7A4B] font-semibold tracking-wide">
                  {srv.startingPrice}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-editorial text-2xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8] group-hover:text-[#9C7A4B] transition-colors leading-snug">
                {t(srv.title)}
              </h3>

              {/* Tagline */}
              <p className="mt-2 text-xs font-sans italic text-[#3C2C26]/70 dark:text-[#C8B79C]/70">
                {t(srv.tagline)}
              </p>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-sm font-sans text-[#3C2C26]/85 dark:text-[#C8B79C]/85 leading-relaxed line-clamp-3">
                {t(srv.description)}
              </p>

              {/* Lead Time indicator */}
              <div className="mt-4 flex items-center gap-2 text-[11px] font-sans text-[#3C2C26]/70 dark:text-[#C8B79C]/70">
                <Clock className="w-3.5 h-3.5 text-[#9C7A4B] shrink-0" />
                <span>{t(srv.leadTime)}</span>
              </div>
            </div>

            {/* Actions footer */}
            <div className="mt-6 pt-5 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10 flex items-center justify-between gap-3">
              <button
                onClick={() => handleBookService(t(srv.title))}
                className="text-xs font-sans uppercase tracking-wider font-bold text-[#0B0B0C] dark:text-[#F5F1E8] hover:text-[#9C7A4B] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>{language === 'fr' ? 'Demander un devis' : 'Request quote'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setActivePage('services')}
                className="text-[11px] font-sans text-[#3C2C26]/60 dark:text-[#C8B79C]/60 hover:underline cursor-pointer"
              >
                {language === 'fr' ? 'Détails' : 'Details'}
              </button>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
};
