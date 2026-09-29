import React from 'react';
import { useApp } from '../../context/AppContext';
import { EditorialImage } from '../common/EditorialImage';
import { MessageCircle, Calendar } from 'lucide-react';
import { MeasuringTapeAnimation } from '../lottie/LottieAnimations';
import { motion } from 'motion/react';

export const SignatureSection: React.FC = () => {
  const { language, getWhatsAppUrl, setActivePage } = useApp();

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Editorial Text */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#9C7A4B] font-bold block">
              {language === 'fr' ? 'La Signature de la Maison' : 'The House Signature'}
            </span>
          </div>
          
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#0B0B0C] dark:text-[#F5F1E8] font-bold tracking-tight leading-tight">
            {language === 'fr'
              ? 'L’art de la silhouette singulière.'
              : 'The Art of the Singular Silhouette.'}
          </h2>

          <p className="text-sm sm:text-base font-sans text-[#3C2C26]/85 dark:text-[#C8B79C]/85 leading-relaxed">
            {language === 'fr'
              ? 'Fidèle à sa devise « Ma passion vous sublimer », la maison Junior Zeus Style s’adresse aux dames comme aux messieurs. Chaque création est pensée comme une œuvre sartoriale : elle affine la posture, honore les matières nobles et magnifie la singularité de celui ou celle qui la porte.'
              : 'True to its motto « My passion is to sublimate you », Junior Zeus Style creates for both women and men. Each garment is crafted as sartorial art: calibrating posture, honoring noble textiles, and elevating individual poise.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10 text-xs font-sans">
            <div className="p-3.5 bg-[#EFEAE0]/60 dark:bg-[#111113]/60 rounded-xs border border-[#3C2C26]/10 dark:border-[#C8B79C]/10 shadow-xs">
              <h3 className="font-bold uppercase tracking-wider text-[#9C7A4B] mb-1">
                {language === 'fr' ? 'Haute Couture Mixte' : 'Bespoke Haute Couture'}
              </h3>
              <p className="text-[#3C2C26]/75 dark:text-[#C8B79C]/75 leading-relaxed text-[11px]">
                {language === 'fr'
                  ? 'Costumes d’apparat, complets et tailleurs sur mesure pour hommes et femmes.'
                  : 'Ceremonial suits, bespoke tailoring for men and women.'}
              </p>
            </div>

            <div className="p-3.5 bg-[#EFEAE0]/60 dark:bg-[#111113]/60 rounded-xs border border-[#3C2C26]/10 dark:border-[#C8B79C]/10 shadow-xs">
              <h3 className="font-bold uppercase tracking-wider text-[#9C7A4B] mb-1">
                {language === 'fr' ? 'Robes de Mariées & Soirée' : 'Bridal & Gala Gowns'}
              </h3>
              <p className="text-[#3C2C26]/75 dark:text-[#C8B79C]/75 leading-relaxed text-[11px]">
                {language === 'fr'
                  ? 'Confection sur mesure exclusive et location clé en main avec retouches.'
                  : 'Exclusive bespoke creations and convenient gown rental with adjustments.'}
              </p>
            </div>

            <div className="p-3.5 bg-[#EFEAE0]/60 dark:bg-[#111113]/60 rounded-xs border border-[#3C2C26]/10 dark:border-[#C8B79C]/10 shadow-xs">
              <h3 className="font-bold uppercase tracking-wider text-[#9C7A4B] mb-1">
                {language === 'fr' ? 'Tenues Africaines & Ville' : 'African & City Wear'}
              </h3>
              <p className="text-[#3C2C26]/75 dark:text-[#C8B79C]/75 leading-relaxed text-[11px]">
                {language === 'fr'
                  ? 'Tuniques brodées signature, boubous modernes et complets urbains élégants.'
                  : 'Signature embroidered tunics, modern boubous, and urban chic sets.'}
              </p>
            </div>

            <div className="p-3.5 bg-[#EFEAE0]/60 dark:bg-[#111113]/60 rounded-xs border border-[#3C2C26]/10 dark:border-[#C8B79C]/10 shadow-xs">
              <h3 className="font-bold uppercase tracking-wider text-[#9C7A4B] mb-1">
                {language === 'fr' ? 'Formation Professionnelle' : 'Vocational Training'}
              </h3>
              <p className="text-[#3C2C26]/75 dark:text-[#C8B79C]/75 leading-relaxed text-[11px]">
                {language === 'fr'
                  ? 'Apprentissage pratique de la coupe, du modélisme et de la couture de luxe.'
                  : 'Hands-on training in pattern drafting, cutting, and luxury tailoring.'}
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#0B0B0C] dark:bg-[#F5F1E8] text-white dark:text-[#0B0B0C] hover:bg-[#9C7A4B] dark:hover:bg-[#9C7A4B] dark:hover:text-white rounded-sm text-xs font-sans uppercase tracking-widest font-bold inline-flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>{language === 'fr' ? 'Prendre contact sur WhatsApp' : 'Dialogue on WhatsApp'}</span>
            </a>

            <button
              onClick={() => setActivePage('contact')}
              className="px-6 py-3.5 border border-[#3C2C26]/30 dark:border-[#C8B79C]/30 text-[#0B0B0C] dark:text-[#F5F1E8] hover:border-[#9C7A4B] hover:text-[#9C7A4B] rounded-sm text-xs font-sans uppercase tracking-widest font-bold inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#9C7A4B]" />
              <span>{language === 'fr' ? 'Formulaire de rendez-vous' : 'Book an Appointment'}</span>
            </button>
          </div>

        </motion.div>

        {/* Right Column: Visual Frame */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6"
        >
          <div className="rounded-xs overflow-hidden shadow-2xl border border-[#3C2C26]/10 dark:border-[#C8B79C]/10 group">
            <EditorialImage
              src="/src/assets/images/atelier_fitting_space_1790586126242.jpg"
              alt="Salon d’essayage et espace de confection Junior Zeus Style à Yaoundé"
              aspectRatio="4:3"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
