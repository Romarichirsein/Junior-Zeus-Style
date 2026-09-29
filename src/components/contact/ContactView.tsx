import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MessageCircle, Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle, Send, Calendar } from 'lucide-react';
import { ContactInquiry } from '../../types';
import { WhatsAppRadarAnimation, LuxuryStarAnimation } from '../lottie/LottieAnimations';
import { motion } from 'motion/react';

export const ContactView: React.FC = () => {
  const { language, siteSettings, t, getWhatsAppUrl, setActivePage } = useApp();

  const [formData, setFormData] = useState<ContactInquiry>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: 'sur-mesure',
    message: '',
    consent: false,
    language: language
  });

  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Honeypot anti-spam check
    if (honeypot) {
      // Bot detected silently
      setIsSubmitting(false);
      setIsSubmitted(true);
      return;
    }

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage(
        language === 'fr'
          ? 'Veuillez renseigner tous les champs obligatoires.'
          : 'Please complete all required fields.'
      );
      return;
    }

    if (!formData.consent) {
      setErrorMessage(
        language === 'fr'
          ? 'Veuillez accepter la politique de confidentialité pour transmettre votre demande.'
          : 'Please accept the privacy policy to submit your inquiry.'
      );
      return;
    }

    setIsSubmitting(true);

    // Simulate secure request dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
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
            {language === 'fr' ? 'Atelier & Rendez-vous' : 'Atelier & Consultation'}
          </span>
        </div>
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#0B0B0C] dark:text-[#F5F1E8] font-bold tracking-tight">
          {language === 'fr' ? 'Prendre Contact' : 'Get in Touch'}
        </h1>
        <p className="mt-4 text-sm sm:text-base font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80 leading-relaxed">
          {language === 'fr'
            ? 'Pour toute demande de confection sur mesure, commande de pièce de cérémonie ou rendez-vous d’essayage dans notre atelier de Yaoundé.'
            : 'For bespoke tailoring commissions, ceremonial attire inquiries, or fitting appointments at our Yaoundé atelier.'}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Coordinates & Direct WhatsApp */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-5 space-y-8"
        >
          
          {/* Dominant WhatsApp Card with Lottie radar pulse */}
          <div className="p-6 sm:p-8 bg-[#0B0B0C] text-[#F5F1E8] rounded-xs border border-[#9C7A4B]/40 shadow-2xl space-y-4 relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center p-2 rounded-full bg-[#25D366]/10">
                <WhatsAppRadarAnimation size={36} />
                <MessageCircle className="w-5 h-5 text-[#25D366] absolute" />
              </div>
              <div>
                <h3 className="font-editorial text-2xl font-bold text-white">WhatsApp Officiel</h3>
                <p className="text-xs font-sans text-[#C8B79C]">Réponse directe & échange personnalisé</p>
              </div>
            </div>

            <p className="text-xs font-sans text-[#E8E2D5] leading-relaxed">
              {language === 'fr'
                ? 'Le canal privilégié par Junior Zeus Style pour envoyer vos photos d’inspiration, fixer un rendez-vous d’essayage ou demander un devis rapide.'
                : 'The fastest channel for Junior Zeus Style to review inspiration photos, schedule a private fitting, or receive a quotation.'}
            </p>

            <div className="space-y-2.5 pt-1">
              <a
                href={getWhatsAppUrl('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-[#0B0B0C] rounded-sm text-xs font-sans uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{language === 'fr' ? 'Échanger sur WhatsApp (+237 691 087 382)' : 'Message on WhatsApp (+237 691 087 382)'}</span>
              </a>

              <button
                onClick={() => setActivePage('rendez-vous')}
                className="w-full py-3 px-4 bg-[#9C7A4B] hover:bg-[#b08d59] text-white rounded-sm text-xs font-sans uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>{language === 'fr' ? 'Formulaire Demande de Devis / RDV' : 'Bespoke Quote & Booking Form'}</span>
              </button>
            </div>
          </div>

          {/* Practical Atelier Information */}
          <div className="p-6 bg-[#EFEAE0]/80 dark:bg-[#111113]/80 rounded-xs border border-[#3C2C26]/10 dark:border-[#C8B79C]/10 space-y-5">
            <h3 className="text-xs font-sans uppercase tracking-widest font-semibold text-[#9C7A4B]">
              {language === 'fr' ? 'Coordonnées de l’Atelier' : 'Atelier Coordinates'}
            </h3>

            <div className="space-y-4 text-xs font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#9C7A4B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#0B0B0C] dark:text-[#F5F1E8]">
                    {language === 'fr' ? 'Adresse à Yaoundé :' : 'Yaoundé Studio Address:'}
                  </span>
                  <p className="mt-0.5">{t(siteSettings.addressPrimary)}</p>
                  <p className="opacity-75 text-[11px] mt-0.5">{t(siteSettings.addressSecondary)}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#9C7A4B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#0B0B0C] dark:text-[#F5F1E8]">
                    {language === 'fr' ? 'Téléphone & Appels :' : 'Telephone:'}
                  </span>
                  <p className="mt-0.5">
                    <a href="tel:+237691087382" className="hover:underline">
                      +237 691 087 382
                    </a>{' '}
                    <span className="opacity-40">/</span>{' '}
                    <a href="tel:+237671621140" className="hover:underline opacity-80">
                      +237 671 621 140
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#9C7A4B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#0B0B0C] dark:text-[#F5F1E8]">
                    {language === 'fr' ? 'E-mail professionnel :' : 'Official Email:'}
                  </span>
                  <p className="mt-0.5">
                    <a href="mailto:contact@juniorzeusstyle.com" className="hover:underline text-[#9C7A4B]">
                      contact@juniorzeusstyle.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#9C7A4B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#0B0B0C] dark:text-[#F5F1E8]">
                    {language === 'fr' ? 'Horaires d’accueil :' : 'Operating Hours:'}
                  </span>
                  <p className="mt-0.5">{t(siteSettings.openingHours)}</p>
                </div>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Right Column: Contact Form with Validation & Honeypot */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <div className="p-6 sm:p-10 bg-[#FBFAF7] dark:bg-[#111113] rounded-xs border border-[#3C2C26]/10 dark:border-[#C8B79C]/10 shadow-xs">
            
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in flex flex-col items-center">
                <LuxuryStarAnimation size={56} className="mb-2" />
                <h3 className="font-editorial text-3xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8]">
                  {language === 'fr' ? 'Votre message a été transmis' : 'Your inquiry has been received'}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80 max-w-md mx-auto leading-relaxed">
                  {language === 'fr'
                    ? 'Merci d’avoir contacté la maison Junior Zeus Style. Ariel Junior Nzesseu ou un membre de l’atelier vous répondra sous 24h ouvrées.'
                    : 'Thank you for reaching out to Junior Zeus Style. Ariel Junior Nzesseu or an atelier associate will reply within 24 business hours.'}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        subject: '',
                        inquiryType: 'sur-mesure',
                        message: '',
                        consent: false,
                        language
                      });
                    }}
                    className="text-xs font-sans uppercase tracking-widest text-[#9C7A4B] font-bold hover:underline cursor-pointer"
                  >
                    {language === 'fr' ? 'Envoyer une autre demande' : 'Send another inquiry'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8] mb-1">
                    {language === 'fr' ? 'Formulaire de demande d’atelier' : 'Atelier Inquiry Form'}
                  </h3>
                  <p className="text-xs font-sans text-[#3C2C26]/70 dark:text-[#C8B79C]/70">
                    {language === 'fr'
                      ? 'Remplissez ce formulaire pour les demandes détaillées ou les projets nécessitant un échange écrit.'
                      : 'Complete this form for tailored inquiries requiring formal exchange.'}
                  </p>
                </div>

                {/* Honeypot field (hidden from humans, catches automated spam) */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="website_url_check"
                    tabIndex={-1}
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400 text-xs font-sans flex items-center gap-2 rounded-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-medium text-[#0B0B0C] dark:text-[#F5F1E8] mb-1">
                      {language === 'fr' ? 'Nom complet *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={language === 'fr' ? 'Ex: Samuel Eto’o' : 'Ex: John Doe'}
                      className="w-full px-3.5 py-2.5 text-xs font-sans bg-[#EFEAE0]/50 dark:bg-[#1C1C1E] border border-[#3C2C26]/15 dark:border-[#C8B79C]/15 rounded-xs focus:outline-none focus:border-[#9C7A4B] text-[#0B0B0C] dark:text-[#F5F1E8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-medium text-[#0B0B0C] dark:text-[#F5F1E8] mb-1">
                      {language === 'fr' ? 'Adresse e-mail *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nom@exemple.com"
                      className="w-full px-3.5 py-2.5 text-xs font-sans bg-[#EFEAE0]/50 dark:bg-[#1C1C1E] border border-[#3C2C26]/15 dark:border-[#C8B79C]/15 rounded-xs focus:outline-none focus:border-[#9C7A4B] text-[#0B0B0C] dark:text-[#F5F1E8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-medium text-[#0B0B0C] dark:text-[#F5F1E8] mb-1">
                      {language === 'fr' ? 'Téléphone / WhatsApp (facultatif)' : 'Phone / WhatsApp (optional)'}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+237 ..."
                      className="w-full px-3.5 py-2.5 text-xs font-sans bg-[#EFEAE0]/50 dark:bg-[#1C1C1E] border border-[#3C2C26]/15 dark:border-[#C8B79C]/15 rounded-xs focus:outline-none focus:border-[#9C7A4B] text-[#0B0B0C] dark:text-[#F5F1E8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-medium text-[#0B0B0C] dark:text-[#F5F1E8] mb-1">
                      {language === 'fr' ? 'Nature de votre demande *' : 'Inquiry Purpose *'}
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs font-sans bg-[#EFEAE0]/50 dark:bg-[#1C1C1E] border border-[#3C2C26]/15 dark:border-[#C8B79C]/15 rounded-xs focus:outline-none focus:border-[#9C7A4B] text-[#0B0B0C] dark:text-[#F5F1E8]"
                    >
                      <option value="sur-mesure">
                        {language === 'fr' ? 'Création sur mesure & Cérémonie' : 'Bespoke Couture & Ceremony'}
                      </option>
                      <option value="catalogue">
                        {language === 'fr' ? 'Renseignements sur une pièce du catalogue' : 'Question regarding a catalogue piece'}
                      </option>
                      <option value="rendez-vous">
                        {language === 'fr' ? 'Rendez-vous essayage à l’atelier' : 'Atelier fitting appointment'}
                      </option>
                      <option value="collaboration">
                        {language === 'fr' ? 'Presse, événement & collaboration' : 'Press & collaboration'}
                      </option>
                      <option value="autre">
                        {language === 'fr' ? 'Autre requête' : 'Other'}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans font-medium text-[#0B0B0C] dark:text-[#F5F1E8] mb-1">
                    {language === 'fr' ? 'Sujet du message' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={language === 'fr' ? 'Ex: Confection costume de mariage pour décembre' : 'Ex: Wedding suit commission for December'}
                    className="w-full px-3.5 py-2.5 text-xs font-sans bg-[#EFEAE0]/50 dark:bg-[#1C1C1E] border border-[#3C2C26]/15 dark:border-[#C8B79C]/15 rounded-xs focus:outline-none focus:border-[#9C7A4B] text-[#0B0B0C] dark:text-[#F5F1E8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-medium text-[#0B0B0C] dark:text-[#F5F1E8] mb-1">
                    {language === 'fr' ? 'Votre message & précisions *' : 'Message & Context *'}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                      language === 'fr'
                        ? 'Décrivez votre projet, la date de votre événement ou vos préférences de matières...'
                        : 'Describe your vision, milestone date, or textile preferences...'
                    }
                    className="w-full px-3.5 py-2.5 text-xs font-sans bg-[#EFEAE0]/50 dark:bg-[#1C1C1E] border border-[#3C2C26]/15 dark:border-[#C8B79C]/15 rounded-xs focus:outline-none focus:border-[#9C7A4B] text-[#0B0B0C] dark:text-[#F5F1E8]"
                  />
                </div>

                {/* Consent checkbox */}
                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-0.5 accent-[#9C7A4B]"
                  />
                  <label htmlFor="consent" className="text-[11px] font-sans text-[#3C2C26]/70 dark:text-[#C8B79C]/70 leading-normal">
                    {language === 'fr'
                      ? 'J’accepte que les informations saisies soient utilisées par la maison Junior Zeus Style pour traiter ma demande conformément à la politique de confidentialité.'
                      : 'I agree that the information submitted will be processed by Junior Zeus Style to handle my inquiry in accordance with the privacy policy.'}
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#0B0B0C] dark:bg-[#F5F1E8] text-white dark:text-[#0B0B0C] hover:bg-[#9C7A4B] dark:hover:bg-[#9C7A4B] dark:hover:text-white rounded-sm text-xs font-sans uppercase tracking-widest font-semibold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{language === 'fr' ? 'Transmission en cours...' : 'Sending...'}</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>{language === 'fr' ? 'Transmettre à l’Atelier' : 'Send to the Atelier'}</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </motion.div>

      </div>

    </div>
  );
};
