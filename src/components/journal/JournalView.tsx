import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { EditorialImage } from '../common/EditorialImage';
import { ArrowLeft, Clock, Calendar, User, Share2, MessageCircle } from 'lucide-react';
import { JournalArticle } from '../../types';

export const JournalView: React.FC = () => {
  const {
    language,
    articles,
    t,
    selectedArticle,
    setSelectedArticle,
    getWhatsAppUrl
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelFr: 'Tous les articles', labelEn: 'All Stories' },
    { id: 'Coulisses', labelFr: 'Coulisses Atelier', labelEn: 'Behind the Scenes' },
    { id: 'Savoir-faire', labelFr: 'Savoir-faire & Coupe', labelEn: 'Craft & Cut' },
    { id: 'Inspiration', labelFr: 'Inspirations & Guides', labelEn: 'Guides & Ideas' },
    { id: 'Collection', labelFr: 'Collections', labelEn: 'Collections' }
  ];

  const filteredArticles = articles.filter(
    (a) => selectedCategory === 'all' || a.category === selectedCategory
  );

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

  // If viewing single article
  if (selectedArticle) {
    const article = selectedArticle;
    const related = articles.filter((a) => a.id !== article.id).slice(0, 2);

    return (
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        
        {/* Back Button */}
        <button
          onClick={() => setSelectedArticle(null)}
          className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#9C7A4B] hover:text-[#0B0B0C] dark:hover:text-white transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'fr' ? 'Retour au Journal' : 'Back to Journal'}</span>
        </button>

        {/* Article Header */}
        <header className="space-y-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-sans text-[#9C7A4B]">
            <span className="uppercase tracking-widest font-semibold">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{formatDate(article.publishedAt)}</span>
            <span aria-hidden="true">·</span>
            <span>{t(article.readTime)}</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#0B0B0C] dark:text-[#F5F1E8] font-light leading-tight">
            {t(article.title)}
          </h1>

          <p className="text-base sm:text-lg font-serif italic text-[#3C2C26]/85 dark:text-[#C8B79C]/85 leading-relaxed pt-2">
            « {t(article.excerpt)} »
          </p>

          <div className="flex items-center gap-4 text-xs font-sans text-[#3C2C26]/60 dark:text-[#C8B79C]/60 pt-4 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#9C7A4B]" />
              <span>{article.author}</span>
            </span>
            <span>Yaoundé, Cameroun</span>
          </div>
        </header>

        {/* Cover Image */}
        <div className="rounded-xs overflow-hidden mb-12 shadow-lg border border-[#3C2C26]/10 dark:border-[#C8B79C]/10">
          <EditorialImage
            src={article.coverImage}
            alt={t(article.title)}
            aspectRatio="16:9"
            needsRealPhoto={article.needsRealPhoto}
          />
        </div>

        {/* Body Content */}
        <div className="space-y-6 text-sm sm:text-base font-sans leading-relaxed text-[#3C2C26]/90 dark:text-[#EFEAE0]/90">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="first-of-type:text-lg first-of-type:font-serif first-of-type:leading-relaxed">
              {t(paragraph)}
            </p>
          ))}
        </div>

        {/* Inquiry CTA in Article */}
        <div className="mt-14 p-6 sm:p-8 bg-[#EFEAE0] dark:bg-[#111113] rounded-xs border border-[#3C2C26]/10 dark:border-[#C8B79C]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-editorial text-2xl text-[#0B0B0C] dark:text-[#F5F1E8]">
              {language === 'fr' ? 'Une question sur cette pièce ou ce savoir-faire ?' : 'Curious about this craft or custom order?'}
            </h3>
            <p className="text-xs font-sans text-[#3C2C26]/75 dark:text-[#C8B79C]/75 mt-1">
              {language === 'fr' ? 'Échangez directement avec Ariel Junior Nzesseu sur WhatsApp.' : 'Discuss directly with Ariel Junior Nzesseu on WhatsApp.'}
            </p>
          </div>
          <a
            href={getWhatsAppUrl('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#0B0B0C] dark:bg-[#F5F1E8] text-white dark:text-[#0B0B0C] hover:bg-[#9C7A4B] text-xs font-sans uppercase tracking-widest font-semibold rounded-sm whitespace-nowrap inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10">
            <h2 className="font-editorial text-2xl text-[#0B0B0C] dark:text-[#F5F1E8] mb-6">
              {language === 'fr' ? 'À lire également' : 'Related Stories'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    setSelectedArticle(rel);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="cursor-pointer group border border-[#3C2C26]/10 dark:border-[#C8B79C]/10 p-4 rounded-xs"
                >
                  <span className="text-[11px] font-sans text-[#9C7A4B] uppercase tracking-wider block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="font-editorial text-lg text-[#0B0B0C] dark:text-[#F5F1E8] group-hover:text-[#9C7A4B] transition-colors">
                    {t(rel.title)}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    );
  }

  // Articles List View
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Title */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#9C7A4B] font-semibold block mb-2">
          {language === 'fr' ? 'Chronique & Pensée Sartoriale' : 'Chronicles & Sartorial Notes'}
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#0B0B0C] dark:text-[#F5F1E8] font-bold tracking-tight">
          {language === 'fr' ? 'Le Journal de Junior Zeus Style' : 'The Junior Zeus Style Journal'}
        </h1>
        <p className="mt-4 text-sm sm:text-base font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80 leading-relaxed">
          {language === 'fr'
            ? 'Plongez dans les coulisses de la création à Yaoundé, la philosophie des coupes et nos réflexions sur la mode masculine et cérémonielle.'
            : 'Explore inside our Yaoundé tailoring studio, the philosophy of structure, and reflections on contemporary ceremony.'}
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-[#3C2C26]/10 dark:border-[#C8B79C]/10 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 text-xs font-sans whitespace-nowrap rounded-sm transition-colors cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#0B0B0C] text-[#F5F1E8] dark:bg-[#F5F1E8] dark:text-[#0B0B0C] font-semibold'
                : 'bg-[#EFEAE0]/80 dark:bg-[#1C1C1E] text-[#3C2C26]/75 dark:text-[#C8B79C]/75 hover:text-[#0B0B0C] dark:hover:text-[#F5F1E8]'
            }`}
          >
            {language === 'fr' ? cat.labelFr : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            onClick={() => {
              setSelectedArticle(article);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group cursor-pointer flex flex-col justify-between border border-transparent hover:border-[#9C7A4B]/30 hover:bg-[#EFEAE0]/40 dark:hover:bg-[#18181A]/40 p-4 rounded-xs pb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div>
              <div className="rounded-xs overflow-hidden mb-4 shadow-sm">
                <EditorialImage
                  src={article.coverImage}
                  alt={t(article.title)}
                  aspectRatio="16:9"
                  needsRealPhoto={article.needsRealPhoto}
                />
              </div>

              {/* Zero-Pill Unboxed Metadata */}
              <div className="flex items-center gap-2 text-[11px] font-sans text-[#3C2C26]/60 dark:text-[#C8B79C]/60 mb-2">
                <span className="text-[#9C7A4B] font-bold">{article.category}</span>
                <span aria-hidden="true">·</span>
                <span>{formatDate(article.publishedAt)}</span>
                <span aria-hidden="true">·</span>
                <span>{t(article.readTime)}</span>
              </div>

              <h2 className="font-editorial text-2xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8] group-hover:text-[#9C7A4B] transition-colors leading-snug">
                {t(article.title)}
              </h2>

              <p className="mt-2 text-xs font-sans text-[#3C2C26]/75 dark:text-[#C8B79C]/75 line-clamp-3 leading-relaxed">
                {t(article.excerpt)}
              </p>
            </div>

            <div className="mt-6 pt-3 flex items-center justify-between text-xs font-sans text-[#9C7A4B]">
              <span className="uppercase tracking-wider group-hover:underline">
                {language === 'fr' ? 'Découvrir l’article' : 'Read narrative'}
              </span>
              <span className="text-[11px] text-[#3C2C26]/50 dark:text-[#C8B79C]/50">
                {article.author}
              </span>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
};
