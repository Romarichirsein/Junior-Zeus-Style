import React from 'react';
import { useApp } from '../../context/AppContext';
import { EditorialImage } from '../common/EditorialImage';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const LatestJournal: React.FC = () => {
  const { language, articles, t, setSelectedArticle, setActivePage } = useApp();

  const latest = articles.slice(0, 3);

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
      >
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#9C7A4B] font-bold block mb-2">
            {language === 'fr' ? 'Édition & Savoir-faire' : 'Editorial & Insights'}
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#0B0B0C] dark:text-[#F5F1E8] font-bold tracking-tight">
            {language === 'fr' ? 'Le Journal de l’Atelier' : 'The Atelier Journal'}
          </h2>
        </div>

        <button
          onClick={() => setActivePage('journal')}
          className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#0B0B0C] dark:text-[#F5F1E8] hover:text-[#9C7A4B] transition-colors pb-1 border-b-2 border-current self-start md:self-auto cursor-pointer font-bold"
        >
          <span>{language === 'fr' ? 'Tous les articles' : 'All articles'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </motion.div>

      {/* Grid of 3 articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {latest.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            whileHover={{ y: -6 }}
            className="group cursor-pointer flex flex-col justify-between p-3 rounded-xs border border-transparent hover:border-[#9C7A4B]/35 hover:bg-[#EFEAE0]/50 dark:hover:bg-[#18181A]/50 transition-all duration-300 hover:shadow-2xl"
            onClick={() => {
              setSelectedArticle(article);
              setActivePage('journal');
            }}
          >
            <div>
              <div className="rounded-xs overflow-hidden mb-4 shadow-sm bg-neutral-900">
                <EditorialImage
                  src={article.coverImage}
                  alt={t(article.title)}
                  aspectRatio="16:9"
                  needsRealPhoto={article.needsRealPhoto}
                />
              </div>

              {/* Zero-Pill Metadata */}
              <div className="flex items-center gap-2 text-[11px] font-sans text-[#3C2C26]/60 dark:text-[#C8B79C]/60 mb-2">
                <span className="text-[#9C7A4B] font-bold">{article.category}</span>
                <span aria-hidden="true">·</span>
                <span>{formatDate(article.publishedAt)}</span>
                <span aria-hidden="true">·</span>
                <span>{t(article.readTime)}</span>
              </div>

              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8] group-hover:text-[#9C7A4B] transition-colors leading-snug">
                {t(article.title)}
              </h3>

              <p className="mt-2 text-xs font-sans text-[#3C2C26]/75 dark:text-[#C8B79C]/75 line-clamp-2 leading-relaxed">
                {t(article.excerpt)}
              </p>
            </div>

            <div className="mt-4 pt-3 flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-[#9C7A4B] font-bold group-hover:translate-x-1.5 transition-transform">
              <span>{language === 'fr' ? 'Lire l’article' : 'Read story'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.article>
        ))}
      </div>

    </section>
  );
};
