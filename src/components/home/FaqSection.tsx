import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Plus, Minus, MessageCircle, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LuxuryStarAnimation } from '../lottie/LottieAnimations';

export const FaqSection: React.FC = () => {
  const { language, faqs, t, getWhatsAppUrl, setActivePage } = useApp();
  const [openId, setOpenId] = useState<string | null>('faq-01');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelFr: 'Toutes les questions', labelEn: 'All Questions' },
    { id: 'essayages', labelFr: 'Essayages & Atelier', labelEn: 'Fittings & Atelier' },
    { id: 'commande', labelFr: 'Délais & Commande', labelEn: 'Orders & Timelines' },
    { id: 'tarifs', labelFr: 'Tarifs & Règlements', labelEn: 'Pricing & Deposits' },
    { id: 'diaspora', labelFr: 'Clients Diaspora', labelEn: 'Diaspora Patrons' }
  ];

  const filteredFaqs = faqs.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <LuxuryStarAnimation size={24} />
          <span className="text-xs uppercase tracking-[0.25em] font-sans text-[#9C7A4B] font-bold">
            {language === 'fr' ? 'Questions Fréquentes' : 'Frequently Asked Questions'}
          </span>
        </div>
        <h2 className="font-editorial text-3xl sm:text-5xl text-[#0B0B0C] dark:text-[#F5F1E8] font-bold tracking-tight">
          {language === 'fr' ? 'Tout savoir avant votre commande' : 'Everything You Need to Know'}
        </h2>
        <p className="mt-4 text-xs sm:text-sm font-sans text-[#3C2C26]/75 dark:text-[#C8B79C]/75 leading-relaxed">
          {language === 'fr'
            ? 'Prise de mesures, délais, commandes à distance depuis l’international ou paiements : retrouvez toutes les réponses claires sur le fonctionnement de l’atelier.'
            : 'Fittings, timelines, remote orders from abroad, or payments: explore comprehensive answers regarding atelier operations.'}
        </p>
      </motion.div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-1.5 text-xs font-sans rounded-xs transition-all duration-200 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#0B0B0C] text-[#F5F1E8] dark:bg-[#F5F1E8] dark:text-[#0B0B0C] font-semibold shadow-xs'
                : 'bg-[#EFEAE0]/80 dark:bg-[#1C1C1E] text-[#3C2C26]/70 dark:text-[#C8B79C]/70 hover:text-[#0B0B0C] dark:hover:text-[#F5F1E8]'
            }`}
          >
            {language === 'fr' ? cat.labelFr : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Accordion Items */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openId === faq.id;
          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="border border-[#3C2C26]/12 dark:border-[#C8B79C]/15 rounded-xs overflow-hidden bg-[#EFEAE0]/30 dark:bg-[#121214]"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#EFEAE0]/70 dark:hover:bg-[#1A1A1D] transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-editorial text-lg sm:text-xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8] leading-snug">
                  {t(faq.question)}
                </span>
                <span className="p-1 rounded-full text-[#9C7A4B] bg-[#F5F1E8] dark:bg-[#202024] shrink-0">
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm font-sans text-[#3C2C26]/85 dark:text-[#C8B79C]/85 leading-relaxed border-t border-[#3C2C26]/8 dark:border-[#C8B79C]/10 pt-4">
                      {t(faq.answer)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Direct Contact Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-14 p-6 sm:p-8 rounded-xs bg-[#EFEAE0] dark:bg-[#171719] border border-[#9C7A4B]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
      >
        <div className="space-y-1">
          <h4 className="font-editorial text-xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8]">
            {language === 'fr' ? 'Une question sur mesure ?' : 'Have a Specific Request?'}
          </h4>
          <p className="text-xs font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80">
            {language === 'fr'
              ? 'Le créateur Ariel Junior Nzesseu vous répond personnellement sur WhatsApp.'
              : 'Designer Ariel Junior Nzesseu answers you directly on WhatsApp.'}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppUrl('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans text-xs uppercase tracking-wider font-bold rounded-sm inline-flex items-center gap-2 transition-all shadow-md hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => setActivePage('rendez-vous')}
            className="px-6 py-3 bg-[#0B0B0C] dark:bg-[#F5F1E8] text-white dark:text-[#0B0B0C] hover:bg-[#9C7A4B] dark:hover:bg-[#9C7A4B] dark:hover:text-white font-sans text-xs uppercase tracking-wider font-bold rounded-sm transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            {language === 'fr' ? 'Formulaire RDV' : 'Booking Form'}
          </button>
        </div>
      </motion.div>

    </section>
  );
};
