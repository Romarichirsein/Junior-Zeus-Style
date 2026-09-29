import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashScreenProps {
  duration?: number; // duration in milliseconds (default 5000)
  onFinish?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  duration = 5000,
  onFinish
}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Prevent background scrolling while splashscreen is active
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setShow(false);
    }, duration);

    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, [duration]);

  const handleSkip = () => {
    setShow(false);
  };

  const handleExitComplete = () => {
    document.body.style.overflow = '';
    if (onFinish) onFinish();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {show && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070708] select-none cursor-default overflow-hidden"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 45%, rgba(156, 122, 75, 0.22) 0%, rgba(11, 11, 12, 0.95) 55%, #070708 100%)
            `
          }}
        >
          {/* Subtle luxury ambient gold particles / glow */}
          <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen bg-[radial-gradient(#C8B79C_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Skip Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            onClick={handleSkip}
            className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20 px-3.5 py-1.5 rounded-full border border-[#9C7A4B]/40 text-[#C8B79C] hover:text-white hover:border-[#9C7A4B] text-xs font-sans tracking-widest uppercase transition-all duration-200 cursor-pointer backdrop-blur-xs"
          >
            Passer
          </motion.button>

          {/* Central Showcase */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg">
            
            {/* Logo Wrapper with Golden Glow & Luxury Aura */}
            <motion.div
              initial={{ scale: 0.82, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6"
            >
              {/* Backlight pulsing aura */}
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.35, 0.65, 0.35]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-tr from-[#9C7A4B] via-[#D4AF37] to-[#F5E6BE] -z-10"
              />

              <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center">
                <img
                  src="/Logo.png"
                  alt="Junior Zeus Style"
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(212,175,55,0.45)]"
                />
              </div>
            </motion.div>

            {/* Brand Name Written Below the Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.18em] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F5E6BE] via-[#D4AF37] to-[#C8B79C] drop-shadow-md">
                Junior Zeus Style
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xs sm:text-sm font-sans tracking-[0.28em] uppercase text-[#C8B79C]/90 font-medium"
              >
                Maison de Haute Confection & Sur-Mesure
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-[11px] sm:text-xs font-sans italic text-[#EFEAE0]/75 pt-1"
              >
                « Ma passion vous sublimer, votre beauté mon ambition »
              </motion.p>
            </motion.div>

            {/* 5-second Luxury Progress Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full mt-8 overflow-hidden"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: duration / 1000, ease: "linear" }}
                className="h-full bg-gradient-to-r from-[#9C7A4B] via-[#F5E6BE] to-[#D4AF37] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.7)]"
              />
            </motion.div>

          </div>

          {/* Bottom subtle copyright / location marker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-6 sm:bottom-8 text-[10px] font-sans tracking-[0.25em] uppercase text-[#C8B79C]"
          >
            Yaoundé · Cameroun
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
