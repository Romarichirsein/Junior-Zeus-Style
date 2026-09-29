import React from 'react';
import { useApp } from '../../context/AppContext';
import { SAVOIR_FAIRE_STEPS } from '../../data/initialData';
import { EditorialImage } from '../common/EditorialImage';
import { TailorScissorsAnimation, MeasuringTapeAnimation } from '../lottie/LottieAnimations';
import { motion } from 'motion/react';

export const SavoirFaireSection: React.FC = () => {
  const { language, t } = useApp();

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#EFEAE0] dark:bg-[#070708] border-y border-[#3C2C26]/10 dark:border-[#C8B79C]/10 transition-colors">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Tailor Scissors Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between max-w-4xl mb-16 gap-4"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#9C7A4B] font-bold block mb-2">
              {language === 'fr' ? 'Artisanat & Méthode' : 'Artisanship & Method'}
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#0B0B0C] dark:text-[#F5F1E8] font-bold tracking-tight">
              {language === 'fr' ? 'Le geste de l’atelier' : 'The Atelier Craft'}
            </h2>
            <p className="mt-4 text-sm sm:text-base font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80 leading-relaxed text-balance">
              {language === 'fr'
                ? 'Chaque vêtement réalisé chez Junior Zeus Style est le fruit d’un processus rigoureux en cinq temps, mené dans notre atelier à Yaoundé.'
                : 'Every garment crafted at Junior Zeus Style is the outcome of an uncompromising five-stage method, executed inside our Yaoundé atelier.'}
            </p>
          </div>

          <div className="shrink-0 p-3 bg-[#F5F1E8] dark:bg-[#111113] rounded-xs border border-[#9C7A4B]/30 shadow-md flex items-center justify-center">
            <TailorScissorsAnimation size={58} />
          </div>
        </motion.div>

        {/* Content Split: Left Image / Right Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="rounded-xs overflow-hidden shadow-xl border border-[#3C2C26]/10 dark:border-[#C8B79C]/10 group">
              <EditorialImage
                src="/src/assets/images/textile_craft_detail_1790586114656.jpg"
                alt="Finitions brodées au fil bronze sur lainage"
                aspectRatio="4:3"
              />
            </div>
            
            <div className="mt-5 p-5 border-l-2 border-[#9C7A4B] bg-[#F5F1E8]/80 dark:bg-[#111113]/80 rounded-r-xs shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <MeasuringTapeAnimation size={32} />
                <span className="text-xs uppercase font-sans tracking-wider font-bold text-[#9C7A4B]">
                  {language === 'fr' ? 'Précision au millimètre' : 'Millimeter Precision'}
                </span>
              </div>
              <p className="text-xs font-sans italic text-[#3C2C26]/90 dark:text-[#C8B79C]/90 leading-relaxed">
                {language === 'fr'
                  ? '« La coupe ne pardonne rien. Si la ligne n’est pas juste dès le premier trait de craie, le vêtement perd son âme. »'
                  : '“The cut forgives nothing. If the master line is not true from the first chalk strike, the garment loses its soul.”'}
              </p>
              <p className="text-[11px] font-sans uppercase tracking-wider font-bold text-[#0B0B0C] dark:text-[#F5F1E8] mt-2">
                — Ariel Junior Nzesseu (Junior Zeus)
              </p>
            </div>
          </motion.div>

          {/* Editorial Steps with subtle hover lifts */}
          <div className="lg:col-span-7 space-y-8">
            {SAVOIR_FAIRE_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group border-b border-[#3C2C26]/10 dark:border-[#C8B79C]/10 pb-8 last:border-b-0 transition-all duration-300 hover:translate-x-1"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-editorial text-2xl font-bold text-[#9C7A4B]">
                    {step.number}
                  </span>
                  <h3 className="font-editorial text-xl sm:text-2xl font-semibold text-[#0B0B0C] dark:text-[#F5F1E8] group-hover:text-[#9C7A4B] transition-colors">
                    {t(step.title)}
                  </h3>
                </div>
                <p className="text-sm font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80 leading-relaxed pl-10">
                  {t(step.description)}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
