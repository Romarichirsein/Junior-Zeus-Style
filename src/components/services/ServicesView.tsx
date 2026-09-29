import React from 'react';
import { useApp } from '../../context/AppContext';
import { Scissors, Sparkles, Crown, HeartHandshake, Wrench, UserCheck, Clock, CheckCircle2, MessageCircle, ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { LuxuryStarAnimation } from '../lottie/LottieAnimations';
import { EditorialImage } from '../common/EditorialImage';

export const ServicesView: React.FC = () => {
  const { language, services, t, setActivePage, setPrefilledBookingData, getWhatsAppUrl } = useApp();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors': return <Scissors className="w-6 h-6 text-[#9C7A4B]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#9C7A4B]" />;
      case 'Crown': return <Crown className="w-6 h-6 text-[#9C7A4B]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#9C7A4B]" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-[#9C7A4B]" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#9C7A4B]" />;
      default: return <Scissors className="w-6 h-6 text-[#9C7A4B]" />;
    }
  };

  const handleBookService = (serviceTitle: string) => {
    setPrefilledBookingData({ serviceType: serviceTitle });
    setActivePage('rendez-vous');
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      
      {/* Page Title & Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <div className="flex items-center gap-2 mb-2">
          <LuxuryStarAnimation size={22} />
          <span className="text-xs uppercase tracking-[0.25em] font-sans text-[#9C7A4B] font-bold">
            {language === 'fr' ? 'Atelier & Prestations' : 'Atelier & Services'}
          </span>
        </div>
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#0B0B0C] dark:text-[#F5F1E8] font-bold tracking-tight">
          {language === 'fr' ? 'Les Services de Confection' : 'Sartorial Services & Craft'}
        </h1>
        <p className="mt-4 text-sm sm:text-base font-sans text-[#3C2C26]/85 dark:text-[#C8B79C]/85 leading-relaxed">
          {language === 'fr'
            ? 'De la haute confection sur mesure au conseil stylistique personnalisé, la maison Junior Zeus Style met son savoir-faire artisanal au service de votre présence.'
            : 'From bespoke haute couture tailoring to personal image consulting, Junior Zeus Style dedicates artisanal mastery to sculpting your personal presence.'}
        </p>
      </motion.div>

      {/* Services List - Large Editorial Format */}
      <div className="space-y-16">
        {services.map((srv, index) => {
          const isEven = index % 2 === 1;
          return (
            <motion.article
              key={srv.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#EFEAE0]/40 dark:bg-[#131315] p-6 sm:p-10 rounded-xs border border-[#3C2C26]/10 dark:border-[#C8B79C]/12 hover:border-[#9C7A4B]/40 transition-all duration-300"
            >
              {/* Media Column */}
              <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                <div className="rounded-xs overflow-hidden shadow-lg border border-[#3C2C26]/10 dark:border-[#C8B79C]/15 relative group">
                  <EditorialImage
                    src={srv.image}
                    alt={t(srv.title)}
                    aspectRatio="4:3"
                  />
                  {srv.isPopular && (
                    <div className="absolute top-3 right-3 bg-[#9C7A4B] text-white text-[10px] font-sans uppercase tracking-widest font-bold px-3 py-1 rounded-xs shadow-md">
                      {language === 'fr' ? 'Prestation Signature' : 'Signature Discipline'}
                    </div>
                  )}
                </div>
              </div>

              {/* Text & Specs Column */}
              <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : ''}`}>
                
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xs bg-[#F5F1E8] dark:bg-[#1C1C1F] shadow-xs">
                    {getIcon(srv.iconName)}
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest font-sans text-[#9C7A4B] font-bold block">
                      {srv.startingPrice}
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px] font-sans text-[#3C2C26]/60 dark:text-[#C8B79C]/60">
                      <Clock className="w-3.5 h-3.5 text-[#9C7A4B]" />
                      <span>{t(srv.leadTime)}</span>
                    </div>
                  </div>
                </div>

                <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8] leading-tight">
                  {t(srv.title)}
                </h2>

                <p className="text-xs sm:text-sm font-sans italic text-[#9C7A4B]">
                  « {t(srv.tagline)} »
                </p>

                <p className="text-xs sm:text-sm font-sans text-[#3C2C26]/85 dark:text-[#C8B79C]/85 leading-relaxed">
                  {t(srv.description)}
                </p>

                {/* Features Checkpoints */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs font-sans text-[#3C2C26]/90 dark:text-[#C8B79C]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#9C7A4B] shrink-0 mt-0.5" />
                      <span>{t(feat)}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleBookService(t(srv.title))}
                    className="px-6 py-3.5 bg-[#9C7A4B] hover:bg-[#b08d59] text-white font-sans text-xs uppercase tracking-widest font-bold rounded-sm inline-flex items-center gap-2 transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#F5F1E8]" />
                    <span>{language === 'fr' ? 'Réserver ce service' : 'Book this Service'}</span>
                  </button>

                  <a
                    href={getWhatsAppUrl('general')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-transparent hover:bg-[#0B0B0C]/5 dark:hover:bg-white/5 border border-[#3C2C26]/20 dark:border-[#C8B79C]/25 text-[#0B0B0C] dark:text-[#F5F1E8] font-sans text-xs uppercase tracking-widest font-bold rounded-sm inline-flex items-center gap-2 transition-all hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>{language === 'fr' ? 'Échanger sur WhatsApp' : 'Dialogue on WhatsApp'}</span>
                  </a>
                </div>

              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Atelier Craftsmanship Process Reminder */}
      <section className="bg-[#EFEAE0] dark:bg-[#121214] p-8 sm:p-12 rounded-xs border border-[#3C2C26]/10 dark:border-[#C8B79C]/10 text-center max-w-4xl mx-auto space-y-6">
        <h3 className="font-editorial text-3xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8]">
          {language === 'fr' ? 'Un projet d’exception en tête ?' : 'A Custom Vision in Mind?'}
        </h3>
        <p className="text-xs sm:text-sm font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80 max-w-2xl mx-auto leading-relaxed">
          {language === 'fr'
            ? 'Que vous souhaitiez une pièce unique pour un mariage, un gala ou une réorganisation complète de votre garde-robe, notre formulaire en ligne transmet instantanément votre demande sur le WhatsApp de l’atelier.'
            : 'Whether you desire an exclusive single piece for a wedding or gala, our appointment portal formats and delivers your precise requirements directly to the atelier WhatsApp.'}
        </p>
        <button
          onClick={() => setActivePage('rendez-vous')}
          className="px-8 py-4 bg-[#0B0B0C] dark:bg-[#F5F1E8] text-white dark:text-[#0B0B0C] hover:bg-[#9C7A4B] dark:hover:bg-[#9C7A4B] dark:hover:text-white font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all shadow-xl hover:-translate-y-0.5 cursor-pointer inline-flex items-center gap-2"
        >
          <span>{language === 'fr' ? 'Demander un devis sur mesure' : 'Request a Bespoke Quote'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
};
