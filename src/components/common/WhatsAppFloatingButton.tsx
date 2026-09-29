import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MessageCircle, X } from 'lucide-react';
import { WhatsAppRadarAnimation } from '../lottie/LottieAnimations';

export const WhatsAppFloatingButton: React.FC = () => {
  const { language, getWhatsAppUrl } = useApp();
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 group">
      {/* Editorial floating tooltip on first glance */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-[#0B0B0C] dark:bg-[#FBFAF7] text-[#F5F1E8] dark:text-[#0B0B0C] rounded-sm text-xs font-sans shadow-lg border border-[#9C7A4B]/30 max-w-xs animate-fade-in">
          <span>
            {language === 'fr'
              ? 'Échangez directement avec le créateur'
              : 'Direct dialogue with the designer'}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setTooltipDismissed(true);
            }}
            className="p-0.5 opacity-60 hover:opacity-100 cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button with Lottie radar pulse */}
      <a
        href={getWhatsAppUrl('general')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Junior Zeus Style sur WhatsApp"
        className="flex items-center gap-2.5 px-4 py-2.5 bg-[#0B0B0C] text-white hover:bg-[#1E1E20] dark:bg-[#1C1C1E] dark:text-[#F5F1E8] rounded-full shadow-2xl border border-[#9C7A4B]/40 hover:border-[#9C7A4B] transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0"
      >
        <div className="relative flex items-center justify-center">
          <WhatsAppRadarAnimation size={24} />
          <MessageCircle className="w-4 h-4 text-[#25D366] absolute" />
        </div>
        <span className="text-xs font-sans uppercase tracking-wider font-bold">
          {language === 'fr' ? 'WhatsApp Atelier' : 'Atelier WhatsApp'}
        </span>
      </a>
    </div>
  );
};
