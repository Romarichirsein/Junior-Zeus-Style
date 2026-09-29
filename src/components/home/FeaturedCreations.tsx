import React from 'react';
import { useApp } from '../../context/AppContext';
import { EditorialImage } from '../common/EditorialImage';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Creation } from '../../types';
import { motion } from 'motion/react';
import { LuxuryStarAnimation } from '../lottie/LottieAnimations';

export const FeaturedCreations: React.FC = () => {
  const {
    language,
    creations,
    t,
    setSelectedCreation,
    setActivePage,
    getWhatsAppUrl
  } = useApp();

  const featured = creations.filter(c => c.isFeatured).slice(0, 4);

  const getStatusLabel = (status: Creation['status']) => {
    switch (status) {
      case 'disponible': return language === 'fr' ? 'Disponible à l’atelier' : 'Available in atelier';
      case 'sur_commande': return language === 'fr' ? 'Sur commande' : 'Made to order';
      case 'piece_unique': return language === 'fr' ? 'Pièce unique' : 'One of a kind';
      case 'archives': return language === 'fr' ? 'Archives de commande' : 'Archive piece';
    }
  };

  const getCategoryLabel = (category: Creation['category']) => {
    switch (category) {
      case 'ceremonie': return language === 'fr' ? 'Haute Cérémonie' : 'Haute Ceremony';
      case 'sur-mesure': return language === 'fr' ? 'Sur-mesure' : 'Bespoke';
      case 'pret-a-porter': return language === 'fr' ? 'Prêt-à-porter' : 'Ready to wear';
      case 'accessoires': return language === 'fr' ? 'Broderie & Détails' : 'Embroidery & Craft';
    }
  };

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
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
              {language === 'fr' ? 'Sélection de la Maison' : 'Curated Selection'}
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#0B0B0C] dark:text-[#F5F1E8] font-bold tracking-tight">
            {language === 'fr' ? 'Créations en lumière' : 'Featured Silhouettes'}
          </h2>
        </div>

        <button
          onClick={() => setActivePage('catalogue')}
          className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#0B0B0C] dark:text-[#F5F1E8] hover:text-[#9C7A4B] transition-colors pb-1 border-b-2 border-current self-start md:self-auto cursor-pointer font-bold"
        >
          <span>{language === 'fr' ? 'Explorer tout le catalogue' : 'View full catalogue'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </motion.div>

      {/* Grid of Creations with Stagger */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featured.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col justify-between cursor-pointer p-3 rounded-xs border border-transparent hover:border-[#9C7A4B]/35 hover:bg-[#EFEAE0]/50 dark:hover:bg-[#18181A]/50 transition-all duration-300 hover:shadow-2xl"
            onClick={() => setSelectedCreation(item)}
          >
            <div>
              {/* Media Frame */}
              <div className="relative overflow-hidden mb-4 rounded-xs shadow-sm bg-neutral-900">
                <EditorialImage
                  src={item.coverImage}
                  alt={t(item.title)}
                  aspectRatio="3:4"
                  needsRealPhoto={item.needsRealPhoto}
                />
              </div>

              {/* Zero-Pill Unboxed Metadata */}
              <div className="flex items-center gap-2 text-[11px] font-sans text-[#3C2C26]/60 dark:text-[#C8B79C]/60 mb-2">
                <span>{getCategoryLabel(item.category)}</span>
                <span aria-hidden="true">·</span>
                <span>{item.year}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#9C7A4B] font-bold">{getStatusLabel(item.status)}</span>
              </div>

              {/* Title */}
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8] group-hover:text-[#9C7A4B] transition-colors leading-snug">
                {t(item.title)}
              </h3>

              {/* Summary */}
              <p className="mt-2 text-xs font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80 line-clamp-2 leading-relaxed">
                {t(item.summary)}
              </p>
            </div>

            {/* Quick Actions Footer */}
            <div className="mt-5 pt-4 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10 flex items-center justify-between">
              <span className="text-xs font-sans text-[#9C7A4B] font-bold">
                {item.priceEstimate || (language === 'fr' ? 'Sur devis' : 'Upon inquiry')}
              </span>

              <a
                href={getWhatsAppUrl('creation', item)}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                title={language === 'fr' ? 'Demander cette pièce sur WhatsApp' : 'Inquire on WhatsApp'}
                className="inline-flex items-center gap-1.5 text-[11px] font-sans uppercase tracking-wider text-[#0B0B0C] dark:text-[#F5F1E8] hover:text-[#25D366] transition-colors font-bold"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>

    </section>
  );
};
