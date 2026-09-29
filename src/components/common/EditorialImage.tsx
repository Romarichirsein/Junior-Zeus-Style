import React, { useState } from 'react';
import { Camera } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '3:4' | '1:1';
  needsRealPhoto?: boolean;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = '4:3',
  needsRealPhoto = false
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClass =
    aspectRatio === '16:9' ? 'aspect-video' :
    aspectRatio === '3:4' ? 'aspect-[3/4]' :
    aspectRatio === '1:1' ? 'aspect-square' : 'aspect-[4/3]';

  return (
    <div className={`relative overflow-hidden bg-[#E8E2D5] dark:bg-[#18181B] ${aspectClass} ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-[#E2DDD3] to-[#D5CDBD] dark:from-[#18181A] dark:to-[#0B0B0C] text-[#3C2C26] dark:text-[#C8B79C]">
          <Camera className="w-6 h-6 mb-2 opacity-50" />
          <span className="text-xs uppercase tracking-widest font-sans opacity-70">Atelier Junior Zeus</span>
          <span className="text-xs font-serif italic mt-1 max-w-[200px] truncate">{alt}</span>
        </div>
      )}

      {/* Subtle indicator when waiting for real client collection photo */}
      {needsRealPhoto && (
        <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
          <div className="px-2.5 py-1 text-[11px] font-sans tracking-wide uppercase bg-[#0B0B0C]/75 text-[#F5F1E8] backdrop-blur-md border border-[#9C7A4B]/40 inline-flex items-center gap-1.5 rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9C7A4B] animate-pulse"></span>
            <span>Shooting réel en attente</span>
          </div>
        </div>
      )}
    </div>
  );
};
