import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { EditorialImage } from '../common/EditorialImage';
import { Search, MessageCircle, SlidersHorizontal } from 'lucide-react';
import { Creation } from '../../types';
import { motion } from 'motion/react';
import { LuxuryStarAnimation } from '../lottie/LottieAnimations';

export const CatalogueView: React.FC = () => {
  const {
    language,
    creations,
    t,
    setSelectedCreation,
    getWhatsAppUrl
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', labelFr: 'Toutes les créations', labelEn: 'All Creations' },
    { id: 'robe-mariee', labelFr: 'Robes de Mariée', labelEn: 'Bridal Gowns' },
    { id: 'robe-soiree', labelFr: 'Robes de Soirée & Gala', labelEn: 'Evening & Gala' },
    { id: 'robe-traditionnelle', labelFr: 'Traditionnel & Afritude', labelEn: 'Heritage & Afritude' },
    { id: 'tenue-couple', labelFr: 'Tenues de Couple', labelEn: 'Couple Ensembles' },
    { id: 'tenue-ville', labelFr: 'Tenues de Ville & Chic', labelEn: 'Urban & Sartorial Chic' },
    { id: 'defile', labelFr: 'Haute Couture Défilé', labelEn: 'Runway Couture' },
    { id: 'innovation', labelFr: 'Innovations & Art', labelEn: 'Innovations & Art' }
  ];

  const statuses = [
    { id: 'all', labelFr: 'Tous statuts', labelEn: 'All Statuses' },
    { id: 'sur_commande', labelFr: 'Sur commande', labelEn: 'Made to Order' },
    { id: 'disponible', labelFr: 'Disponible', labelEn: 'Available' },
    { id: 'piece_unique', labelFr: 'Pièce unique', labelEn: 'One of a Kind' },
    { id: 'archives', labelFr: 'Archives', labelEn: 'Archives' }
  ];

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'robe-mariee': return language === 'fr' ? 'Robe de Mariée' : 'Bridal Gown';
      case 'robe-soiree': return language === 'fr' ? 'Robe de Soirée' : 'Evening Gown';
      case 'robe-traditionnelle': return language === 'fr' ? 'Traditionnel & Afritude' : 'Heritage & Afritude';
      case 'tenue-couple': return language === 'fr' ? 'Tenue de Couple' : 'Couple Ensemble';
      case 'tenue-ville': return language === 'fr' ? 'Tenue de Ville' : 'Urban Chic';
      case 'defile': return language === 'fr' ? 'Haute Couture Défilé' : 'Runway Couture';
      case 'innovation': return language === 'fr' ? 'Innovation & Art' : 'Innovation & Art';
      case 'ceremonie': return language === 'fr' ? 'Cérémonie' : 'Ceremony';
      case 'sur-mesure': return language === 'fr' ? 'Sur-mesure' : 'Bespoke';
      case 'pret-a-porter': return language === 'fr' ? 'Prêt-à-porter' : 'Ready to wear';
      case 'accessoires': return language === 'fr' ? 'Accessoires' : 'Accessories';
      default: return cat;
    }
  };

  const filteredCreations = useMemo(() => {
    return creations.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        t(item.title).toLowerCase().includes(query) ||
        t(item.materials).toLowerCase().includes(query) ||
        t(item.summary).toLowerCase().includes(query) ||
        getCategoryLabel(item.category).toLowerCase().includes(query);

      return matchesCategory && matchesStatus && matchesSearch;
    });
  }, [creations, selectedCategory, selectedStatus, searchQuery, t, language]);

  const getStatusBadge = (status: Creation['status']) => {
    switch (status) {
      case 'disponible': return language === 'fr' ? 'Disponible à l’atelier' : 'Available';
      case 'sur_commande': return language === 'fr' ? 'Sur commande' : 'Made to order';
      case 'piece_unique': return language === 'fr' ? 'Pièce unique' : 'Unique piece';
      case 'archives': return language === 'fr' ? 'Archives' : 'Archives';
    }
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Title Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mb-12"
      >
        <div className="flex items-center gap-2 mb-2">
          <LuxuryStarAnimation size={20} />
          <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#9C7A4B] font-bold">
            {language === 'fr' ? 'Confection & Archives' : 'Couture & Archives'}
          </span>
        </div>
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#0B0B0C] dark:text-[#F5F1E8] font-bold tracking-tight">
          {language === 'fr' ? 'Le Catalogue des Silhouettes' : 'The Silhouette Catalogue'}
        </h1>
        <p className="mt-4 text-sm sm:text-base font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80 leading-relaxed">
          {language === 'fr'
            ? 'Chaque pièce présentée peut être confectionnée à vos mesures précises ou servir d’inspiration pour une création exclusive.'
            : 'Each garment featured can be tailored to your anatomical measurements or serve as inspiration for an exclusive creation.'}
        </p>
      </motion.div>

      {/* Filter Bar */}
      <div className="space-y-4 mb-12 pb-8 border-b border-[#3C2C26]/10 dark:border-[#C8B79C]/10">
        
        {/* Top Filter Row: Category Segmented Controls & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-sans whitespace-nowrap rounded-sm transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0B0B0C] text-[#F5F1E8] dark:bg-[#F5F1E8] dark:text-[#0B0B0C] font-semibold'
                    : 'bg-[#EFEAE0]/80 dark:bg-[#1C1C1E] text-[#3C2C26]/75 dark:text-[#C8B79C]/75 hover:text-[#0B0B0C] dark:hover:text-[#F5F1E8]'
                }`}
              >
                {language === 'fr' ? cat.labelFr : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#3C2C26]/50 dark:text-[#C8B79C]/50 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'fr' ? 'Rechercher un tissu, une coupe...' : 'Search textile, cut, name...'}
              className="w-full pl-9 pr-4 py-2 text-xs font-sans bg-[#EFEAE0]/80 dark:bg-[#1C1C1E] border border-[#3C2C26]/15 dark:border-[#C8B79C]/15 rounded-sm focus:outline-none focus:border-[#9C7A4B] text-[#0B0B0C] dark:text-[#F5F1E8]"
            />
          </div>

        </div>

        {/* Sub-filters: Status */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-sans text-[#3C2C26]/70 dark:text-[#C8B79C]/70">
          <span className="flex items-center gap-1 mr-2 text-[11px] uppercase tracking-wider text-[#9C7A4B] font-semibold">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            {language === 'fr' ? 'Disponibilité :' : 'Availability:'}
          </span>
          {statuses.map((st) => (
            <button
              key={st.id}
              onClick={() => setSelectedStatus(st.id)}
              className={`px-2.5 py-1 text-[11px] rounded-xs transition-colors cursor-pointer ${
                selectedStatus === st.id
                  ? 'border-b-2 border-[#9C7A4B] text-[#0B0B0C] dark:text-[#F5F1E8] font-medium'
                  : 'hover:text-[#0B0B0C] dark:hover:text-[#F5F1E8]'
              }`}
            >
              {language === 'fr' ? st.labelFr : st.labelEn}
            </button>
          ))}
        </div>

      </div>

      {/* Grid of pieces */}
      {filteredCreations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCreations.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.6) }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedCreation(item)}
              className="group cursor-pointer flex flex-col justify-between border border-transparent hover:border-[#9C7A4B]/35 hover:bg-[#EFEAE0]/50 dark:hover:bg-[#18181A]/50 p-4 rounded-xs pb-6 transition-all duration-300 hover:shadow-2xl"
            >
              <div>
                <div className="rounded-xs overflow-hidden mb-4 shadow-sm bg-neutral-900">
                  <EditorialImage
                    src={item.coverImage}
                    alt={t(item.title)}
                    aspectRatio="3:4"
                    needsRealPhoto={item.needsRealPhoto}
                  />
                </div>

                {/* Zero-Pill Unboxed Metadata */}
                <div className="flex items-center gap-2 text-[11px] font-sans text-[#3C2C26]/60 dark:text-[#C8B79C]/60 mb-2">
                  <span className="uppercase tracking-wider font-bold text-[#9C7A4B]">{getCategoryLabel(item.category)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.year}</span>
                  <span aria-hidden="true">·</span>
                  <span>{getStatusBadge(item.status)}</span>
                </div>

                <h3 className="font-editorial text-2xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8] group-hover:text-[#9C7A4B] transition-colors leading-snug">
                  {t(item.title)}
                </h3>

                <p className="mt-2 text-xs font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80 line-clamp-2 leading-relaxed">
                  {t(item.summary)}
                </p>

                <p className="mt-2 text-[11px] font-sans text-[#3C2C26]/60 dark:text-[#C8B79C]/60 italic">
                  {t(item.materials)}
                </p>
              </div>

              {/* Bottom Footer Action */}
              <div className="mt-6 pt-4 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10 flex items-center justify-between">
                <span className="text-xs font-sans text-[#9C7A4B] font-medium">
                  {item.priceEstimate || (language === 'fr' ? 'Sur devis' : 'Upon quote')}
                </span>

                <a
                  href={getWhatsAppUrl('creation', item)}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-[#0B0B0C] dark:text-[#F5F1E8] hover:text-[#25D366] transition-colors font-bold"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>{language === 'fr' ? 'Commander' : 'Inquire'}</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center text-[#3C2C26]/70 dark:text-[#C8B79C]/70">
          <p className="font-editorial text-2xl mb-2">
            {language === 'fr' ? 'Aucune création ne correspond à vos filtres.' : 'No creations match your current filters.'}
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedStatus('all');
              setSearchQuery('');
            }}
            className="text-xs font-sans uppercase tracking-widest text-[#9C7A4B] hover:underline"
          >
            {language === 'fr' ? 'Réinitialiser les filtres' : 'Reset all filters'}
          </button>
        </div>
      )}

    </div>
  );
};
