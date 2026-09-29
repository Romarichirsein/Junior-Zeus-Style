import React, { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { EditorialImage } from '../common/EditorialImage';
import { X, MessageCircle, Clock, Sparkles, Scissors, ShieldCheck } from 'lucide-react';
import { Creation } from '../../types';
import { motion, AnimatePresence } from 'motion/react';
import { LuxuryStarAnimation } from '../lottie/LottieAnimations';

export const CreationDetailModal: React.FC = () => {
  const {
    selectedCreation,
    setSelectedCreation,
    language,
    t,
    getWhatsAppUrl,
    setActivePage,
    setPrefilledBookingData
  } = useApp();

  const [activeImage, setActiveImage] = React.useState<string | null>(null);

  useEffect(() => {
    if (selectedCreation) {
      setActiveImage(selectedCreation.coverImage);
    }
  }, [selectedCreation]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCreation(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSelectedCreation]);

  if (!selectedCreation) return null;

  const item = selectedCreation;

  const getStatusText = (status: Creation['status']) => {
    switch (status) {
      case 'disponible': return language === 'fr' ? 'Disponible immédiatement à l’atelier' : 'Available immediately at atelier';
      case 'sur_commande': return language === 'fr' ? 'Confection sur commande (Mesures personnalisées)' : 'Made to order (Custom anatomical fit)';
      case 'piece_unique': return language === 'fr' ? 'Pièce unique haute couture' : 'One of a kind couture piece';
      case 'archives': return language === 'fr' ? 'Archives de confection (Non disponible)' : 'Atelier archives (Reference only)';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#0B0B0C]/85 backdrop-blur-md overflow-y-auto"
      onClick={() => setSelectedCreation(null)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-5xl bg-[#F5F1E8] dark:bg-[#111113] text-[#0B0B0C] dark:text-[#F5F1E8] border border-[#3C2C26]/20 dark:border-[#C8B79C]/20 rounded-xs shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedCreation(null)}
          className="absolute top-4 right-4 z-20 p-2 text-[#0B0B0C] dark:text-[#F5F1E8] hover:text-[#9C7A4B] transition-colors rounded-sm bg-[#F5F1E8]/90 dark:bg-[#111113]/90 backdrop-blur-xs cursor-pointer shadow-sm"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Visual Gallery */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-[#EFEAE0] dark:bg-[#070708] flex flex-col gap-4">
            <div className="rounded-xs overflow-hidden shadow-md bg-neutral-900 border border-[#3C2C26]/10 dark:border-[#C8B79C]/10">
              <EditorialImage
                src={activeImage || item.coverImage}
                alt={t(item.title)}
                aspectRatio="3:4"
                needsRealPhoto={item.needsRealPhoto}
              />
            </div>

            {/* Supplementary detail thumbnails - clickable */}
            {item.gallery && item.gallery.length > 1 && (
              <div>
                <p className="text-[11px] font-sans text-[#3C2C26]/60 dark:text-[#C8B79C]/60 mb-2">
                  {language === 'fr' ? 'Vues détaillées (cliquez pour agrandir) :' : 'Detail views (click to view):'}
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {item.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`rounded-xs overflow-hidden border transition-all cursor-pointer ${
                        (activeImage || item.coverImage) === img
                          ? 'border-[#9C7A4B] ring-2 ring-[#9C7A4B]/40 scale-[1.03]'
                          : 'border-[#3C2C26]/20 dark:border-[#C8B79C]/20 opacity-75 hover:opacity-100'
                      }`}
                    >
                      <EditorialImage
                        src={img}
                        alt={`${t(item.title)} vue ${idx + 1}`}
                        aspectRatio="1:1"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Specification & Inquiry */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-sans text-[#9C7A4B] font-bold uppercase tracking-wider">
                <LuxuryStarAnimation size={18} />
                <span>{item.collectionName ? t(item.collectionName) : 'Junior Zeus Style'}</span>
                <span>·</span>
                <span>{item.year}</span>
              </div>

              <h2 className="font-editorial text-2xl sm:text-4xl font-bold tracking-tight text-[#0B0B0C] dark:text-[#F5F1E8]">
                {t(item.title)}
              </h2>

              {/* Price Banner */}
              <div className="p-3.5 bg-[#9C7A4B]/12 border border-[#9C7A4B]/30 rounded-xs flex items-center justify-between">
                <span className="text-xs font-sans uppercase tracking-wider text-[#3C2C26]/80 dark:text-[#C8B79C]/80 font-semibold">
                  {language === 'fr' ? 'Tarif indicatif :' : 'Price estimate:'}
                </span>
                <span className="font-editorial text-lg sm:text-xl font-bold text-[#9C7A4B]">
                  {item.priceEstimate || (language === 'fr' ? 'Sur devis atelier' : 'Upon inquiry')}
                </span>
              </div>

              <div className="p-3 bg-[#EFEAE0]/80 dark:bg-[#1C1C1E]/80 rounded-xs text-xs font-sans border-l-2 border-[#9C7A4B]">
                <span className="font-bold text-[#9C7A4B]">
                  {language === 'fr' ? 'Disponibilité : ' : 'Availability: '}
                </span>
                <span>{getStatusText(item.status)}</span>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm font-sans leading-relaxed text-[#3C2C26]/90 dark:text-[#C8B79C]/90">
                <div>
                  <h3 className="text-xs uppercase font-sans tracking-wider text-[#9C7A4B] font-bold mb-1">
                    {language === 'fr' ? 'Description de la pièce' : 'Garment Description'}
                  </h3>
                  <p>{t(item.description)}</p>
                </div>

                <div>
                  <h3 className="text-xs uppercase font-sans tracking-wider text-[#9C7A4B] font-bold mb-1">
                    {language === 'fr' ? 'Matières & Étoffes' : 'Textiles & Materials'}
                  </h3>
                  <p>{t(item.materials)}</p>
                </div>

                {item.craftDetails && (
                  <div>
                    <h3 className="text-xs uppercase font-sans tracking-wider text-[#9C7A4B] font-bold mb-1">
                      {language === 'fr' ? 'Savoir-faire atelier' : 'Atelier Craftmanship'}
                    </h3>
                    <p>{t(item.craftDetails)}</p>
                  </div>
                )}

                {item.estimatedLeadTime && (
                  <div className="flex items-center gap-2 pt-2 text-xs text-[#3C2C26]/80 dark:text-[#C8B79C]/80">
                    <Clock className="w-4 h-4 text-[#9C7A4B] shrink-0" />
                    <span>{t(item.estimatedLeadTime)}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10 space-y-3">
              <a
                href={getWhatsAppUrl('creation', item)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-sm text-xs font-sans uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {language === 'fr'
                    ? 'Commander cette pièce sur WhatsApp'
                    : 'Inquire this piece on WhatsApp'}
                </span>
              </a>

              <button
                onClick={() => {
                  setPrefilledBookingData({
                    serviceType: `${t(item.title)} (Sur-mesure)`,
                    notes: `Demande de confection pour : ${t(item.title)} (Réf : ${item.slug}) - Prix indicatif : ${item.priceEstimate}`
                  });
                  setSelectedCreation(null);
                  setActivePage('rendez-vous');
                }}
                className="w-full py-3.5 px-6 bg-[#0B0B0C] dark:bg-[#F5F1E8] text-white dark:text-[#0B0B0C] hover:bg-[#9C7A4B] dark:hover:bg-[#9C7A4B] dark:hover:text-white rounded-sm text-xs font-sans uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <span>
                  {language === 'fr'
                    ? 'Demander un devis / Prendre RDV d’essayage'
                    : 'Book Fitting / Request Bespoke Quote'}
                </span>
              </button>

              <p className="text-[11px] font-sans text-center text-[#3C2C26]/60 dark:text-[#C8B79C]/60">
                {language === 'fr'
                  ? 'Atelier situé à Yaoundé (Descente Éleveur). Essayages sur rendez-vous et expédition internationale par DHL.'
                  : 'Atelier located in Yaoundé (Descente Éleveur). Fittings by appointment & global DHL express dispatch.'}
              </p>
            </div>

          </div>

        </div>
      </motion.div>
    </div>
  );
};
