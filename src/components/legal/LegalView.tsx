import React from 'react';
import { useApp } from '../../context/AppContext';
import { Shield, FileText, ArrowLeft } from 'lucide-react';

export const LegalView: React.FC = () => {
  const { language, siteSettings, t, setActivePage } = useApp();

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      
      <button
        onClick={() => setActivePage('accueil')}
        className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#9C7A4B] hover:text-[#0B0B0C] dark:hover:text-white transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{language === 'fr' ? 'Retour à l’accueil' : 'Return to Home'}</span>
      </button>

      <div>
        <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#9C7A4B] font-semibold block mb-2">
          {language === 'fr' ? 'Transparence & Cadre Juridique' : 'Legal & Compliance'}
        </span>
        <h1 className="font-editorial text-4xl sm:text-5xl text-[#0B0B0C] dark:text-[#F5F1E8] font-light">
          {language === 'fr' ? 'Mentions Légales & Confidentialité' : 'Legal Notice & Privacy Policy'}
        </h1>
      </div>

      <section className="space-y-4 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10 pt-8">
        <div className="flex items-center gap-2 text-lg font-editorial text-[#0B0B0C] dark:text-[#F5F1E8]">
          <FileText className="w-5 h-5 text-[#9C7A4B]" />
          <h2>{language === 'fr' ? '1. Identification de l’Éditeur' : '1. Publisher Information'}</h2>
        </div>
        <p className="text-xs sm:text-sm font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80 leading-relaxed">
          {language === 'fr' ? (
            <>
              Le présent site web <strong>juniorzeusstyle.com</strong> est édité par la maison de création <strong>Junior Zeus Style</strong>, fondée par <strong>Ariel Junior Nzesseu</strong> (Junior Zeus).<br />
              <strong>Devise de la maison :</strong> « Ma passion vous sublimer ».<br />
              <strong>Siège de l’atelier :</strong> Yaoundé - Descente Éleveur, face Turbo Distribution Center, Cameroun.<br />
              <strong>Contact téléphonique / WhatsApp :</strong> +237 691 087 382 (691 08 73 82).<br />
              <strong>Adresse e-mail officielle :</strong> juniortamno13@gmail.com.<br />
              <strong>Réseaux officiels :</strong> Facebook : Junior Zeus style · Instagram : Junior Zeus style.<br />
              <strong>Directeur de la publication :</strong> Ariel Junior Nzesseu.
            </>
          ) : (
            <>
              This website <strong>juniorzeusstyle.com</strong> is published by <strong>Junior Zeus Style</strong>, founded by <strong>Ariel Junior Nzesseu</strong> (Junior Zeus).<br />
              <strong>House Motto:</strong> « My passion is to sublimate you ».<br />
              <strong>Atelier address:</strong> Yaoundé - Descente Éleveur, opposite Turbo Distribution Center, Cameroon.<br />
              <strong>Telephone / WhatsApp:</strong> +237 691 087 382 (691 08 73 82).<br />
              <strong>Official Email:</strong> juniortamno13@gmail.com.<br />
              <strong>Official Social Channels:</strong> Facebook: Junior Zeus style · Instagram: Junior Zeus style.<br />
              <strong>Publication Director:</strong> Ariel Junior Nzesseu.
            </>
          )}
        </p>
      </section>

      <section className="space-y-4 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10 pt-8">
        <div className="flex items-center gap-2 text-lg font-editorial text-[#0B0B0C] dark:text-[#F5F1E8]">
          <Shield className="w-5 h-5 text-[#9C7A4B]" />
          <h2>{language === 'fr' ? '2. Protection des Données Personnelles' : '2. Personal Data Protection'}</h2>
        </div>
        <p className="text-xs sm:text-sm font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80 leading-relaxed">
          {language === 'fr'
            ? 'Les données transmises via le formulaire de contact ou via WhatsApp (nom, numéro de téléphone, adresse e-mail, mensurations) sont exclusivement destinées au traitement de vos commandes de création sur mesure et à la relation client personnalisée. Elles ne sont ni vendues, ni cédées à des tiers. Conformément à la législation applicable, vous disposez d’un droit d’accès, de rectification et de suppression de vos données en écrivant à juniortamno13@gmail.com.'
            : 'Personal information submitted through our contact form or WhatsApp (name, telephone, email address, measurements) is strictly used for handling bespoke garment orders and client communications. Your data is never sold or transferred to third parties. You may request access, modification, or erasure of your data at any time by contacting juniortamno13@gmail.com.'}
        </p>
      </section>

      <section className="space-y-4 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10 pt-8">
        <h2 className="text-lg font-editorial text-[#0B0B0C] dark:text-[#F5F1E8]">
          {language === 'fr' ? '3. Propriété Intellectuelle' : '3. Intellectual Property'}
        </h2>
        <p className="text-xs sm:text-sm font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80 leading-relaxed">
          {language === 'fr'
            ? 'L’ensemble des créations, coupes, croquis, photographies, textes et éléments graphiques publiés sur ce site sont la propriété exclusive de Junior Zeus Style et d’Ariel Junior Nzesseu. Toute reproduction ou imitation sans accord préalable écrit est strictement interdite.'
            : 'All bespoke creations, cuts, sketches, photographs, texts, and brand elements appearing on this site are the exclusive property of Junior Zeus Style and Ariel Junior Nzesseu. Any reproduction or unauthorized copy is strictly prohibited.'}
        </p>
      </section>

      <section className="space-y-4 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10 pt-8">
        <h2 className="text-lg font-editorial text-[#0B0B0C] dark:text-[#F5F1E8]">
          {language === 'fr' ? '4. Cookies & Respect de la Vie Privée' : '4. Cookies & Privacy Policy'}
        </h2>
        <p className="text-xs sm:text-sm font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80 leading-relaxed">
          {language === 'fr'
            ? 'Ce site n’utilise aucun traceur publicitaire intrusif. Seules vos préférences fonctionnelles (choix de la langue FR/EN et mode sombre/clair) sont enregistrées localement sur votre terminal pour garantir un confort de navigation optimal.'
            : 'This site does not use invasive advertising trackers. Only essential functional preferences (language toggle and dark/light mode preference) are retained on your device for seamless navigation.'}
        </p>
      </section>

    </div>
  );
};
