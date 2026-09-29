import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { RendezVousBooking } from '../../types';
import {
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Copy,
  Scissors,
  Sparkles,
  Phone,
  Send
} from 'lucide-react';
import { motion } from 'motion/react';
import { LuxuryStarAnimation } from '../lottie/LottieAnimations';

export const RendezVousView: React.FC = () => {
  const {
    language,
    siteSettings,
    prefilledBookingData,
    setPrefilledBookingData,
    getWhatsAppAppointmentUrl,
    setActivePage
  } = useApp();

  const [formData, setFormData] = useState<RendezVousBooking>({
    fullName: '',
    phone: '',
    city: 'Yaoundé',
    serviceType: prefilledBookingData?.serviceType || 'Haute Confection & Sur-Mesure Sartorial',
    budget: '150 000 – 300 000 FCFA',
    preferredDate: '',
    timeSlot: 'Après-midi (13h – 16h)',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');
  const [copied, setCopied] = useState(false);

  // Sync if prefilled data changes
  useEffect(() => {
    if (prefilledBookingData?.serviceType) {
      setFormData((prev) => ({ ...prev, serviceType: prefilledBookingData.serviceType! }));
    }
  }, [prefilledBookingData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMessage(
        language === 'fr'
          ? 'Veuillez renseigner votre nom complet ainsi que votre numéro WhatsApp.'
          : 'Please provide both your full name and your WhatsApp contact.'
      );
      return;
    }

    const waUrl = getWhatsAppAppointmentUrl(formData);
    setLastWhatsAppUrl(waUrl);
    setIsSubmitted(true);

    // Open WhatsApp directly in new window/tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    if (!lastWhatsAppUrl) return;
    try {
      const urlObj = new URL(lastWhatsAppUrl);
      const text = urlObj.searchParams.get('text') || '';
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      // Fallback
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setPrefilledBookingData(null);
    setFormData({
      fullName: '',
      phone: '',
      city: 'Yaoundé',
      serviceType: 'Haute Couture Mixte',
      budget: '150 000 – 300 000 FCFA',
      preferredDate: '',
      timeSlot: 'Après-midi (13h – 16h)',
      notes: ''
    });
  };

  const serviceOptions = [
    { fr: 'Haute Couture Mixte (Sur mesure Homme & Femme)', en: 'Bespoke Haute Couture (Men & Women)' },
    { fr: 'Confection et Location de Robes de Mariées et de Soirée', en: 'Bridal & Evening Gown Tailoring and Rental' },
    { fr: 'Confection de Tenues Africaines et de Ville', en: 'African Heritage & Modern City Wear' },
    { fr: 'Formation Professionnelle (Couture, Modélisme & Stylisme)', en: 'Professional Couture & Fashion Design Training' },
    { fr: 'Mariages & Habillage de Cortège', en: 'Weddings & Groom Party Tailoring' },
    { fr: 'Retouches Haut de Gamme & Remise à Mesure', en: 'Master Alterations & Bespoke Resizing' },
    { fr: 'Autre projet sur mesure', en: 'Other bespoke commission' }
  ];

  const budgetOptions = [
    { label: 'Moins de 75 000 FCFA (~115 €)' },
    { label: '75 000 – 150 000 FCFA (~115 € – 230 €)' },
    { label: '150 000 – 300 000 FCFA (~230 € – 460 €)' },
    { label: '300 000 – 500 000 FCFA (~460 € – 760 €)' },
    { label: '500 000+ FCFA (Haute Cérémonie / Cortège Complet)' }
  ];

  const timeSlotOptions = [
    { fr: 'Matinée (09h00 – 12h00)', en: 'Morning (09:00 – 12:00)' },
    { fr: 'Après-midi (13h00 – 16h00)', en: 'Afternoon (13:00 – 16:00)' },
    { fr: 'Fin de journée (16h00 – 19h00)', en: 'Evening (16:00 – 19:00)' }
  ];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Title Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <div className="flex items-center gap-2 mb-2">
          <LuxuryStarAnimation size={22} />
          <span className="text-xs uppercase tracking-[0.25em] font-sans text-[#9C7A4B] font-bold">
            {language === 'fr' ? 'Atelier Yaoundé & Devis Direct' : 'Yaoundé Atelier & Quote Booking'}
          </span>
        </div>
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#0B0B0C] dark:text-[#F5F1E8] font-bold tracking-tight">
          {language === 'fr' ? 'Prendre Rendez-vous & Devis' : 'Book Appointment & Quote'}
        </h1>
        <p className="mt-4 text-sm sm:text-base font-sans text-[#3C2C26]/85 dark:text-[#C8B79C]/85 leading-relaxed">
          {language === 'fr'
            ? 'Remplissez ce formulaire sur mesure. Votre demande est instantanément formatée et transmise sur le WhatsApp officiel du styliste Ariel Junior Nzesseu (+237 691 087 382) pour une confirmation rapide.'
            : 'Complete this bespoke consultation form. Your specifications are instantly formatted and dispatched directly to designer Ariel Junior Nzesseu’s WhatsApp (+237 691 087 382).'}
        </p>
      </motion.div>

      {/* Main Grid: Form + Info Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Interactive Form */}
        <div className="lg:col-span-8">
          
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-12 rounded-xs bg-[#EFEAE0] dark:bg-[#151517] border border-[#9C7A4B]/40 text-center space-y-6 shadow-xl"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366]">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8]">
                  {language === 'fr' ? 'Demande prête à l’envoi sur WhatsApp !' : 'Quote Request Prepared for WhatsApp!'}
                </h2>
                <p className="text-xs sm:text-sm font-sans text-[#3C2C26]/80 dark:text-[#C8B79C]/80 max-w-lg mx-auto leading-relaxed">
                  {language === 'fr'
                    ? 'Une fenêtre WhatsApp s’est ouverte avec votre récapitulatif complet. Si elle ne s’est pas affichée automatiquement, cliquez sur le bouton ci-dessous.'
                    : 'A WhatsApp chat window has launched with your complete details. If it was blocked, click the direct button below.'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href={lastWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans text-xs uppercase tracking-widest font-bold rounded-sm inline-flex items-center justify-center gap-2 transition-all shadow-lg hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{language === 'fr' ? 'Ouvrir WhatsApp' : 'Open WhatsApp'}</span>
                </a>

                <button
                  onClick={handleCopyMessage}
                  className="w-full sm:w-auto px-6 py-4 border border-[#3C2C26]/20 dark:border-[#C8B79C]/25 text-[#0B0B0C] dark:text-[#F5F1E8] hover:border-[#9C7A4B] font-sans text-xs uppercase tracking-widest font-bold rounded-sm inline-flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Copy className="w-4 h-4 text-[#9C7A4B]" />
                  <span>{copied ? (language === 'fr' ? 'Copié !' : 'Copied!') : (language === 'fr' ? 'Copier le texte' : 'Copy Message')}</span>
                </button>
              </div>

              <div className="pt-6 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10 flex items-center justify-center gap-6">
                <button
                  onClick={handleReset}
                  className="text-xs font-sans text-[#9C7A4B] hover:underline cursor-pointer font-semibold uppercase tracking-wider"
                >
                  {language === 'fr' ? '← Remplir une nouvelle demande' : '← Submit another request'}
                </button>
                <button
                  onClick={() => setActivePage('catalogue')}
                  className="text-xs font-sans text-[#3C2C26]/70 dark:text-[#C8B79C]/70 hover:underline cursor-pointer"
                >
                  {language === 'fr' ? 'Voir le catalogue' : 'Browse creations'}
                </button>
              </div>

            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="bg-[#EFEAE0]/50 dark:bg-[#131315] p-6 sm:p-10 rounded-xs border border-[#3C2C26]/12 dark:border-[#C8B79C]/15 shadow-md space-y-6"
            >
              {errorMessage && (
                <div className="p-4 rounded-xs bg-red-900/20 border border-red-500/40 text-red-700 dark:text-red-300 text-xs font-sans flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Row 1: Full Name & WhatsApp Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#0B0B0C] dark:text-[#F5F1E8] mb-2">
                    {language === 'fr' ? 'Votre Nom complet *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={language === 'fr' ? 'Ex: M. Jean-Paul Mbarga' : 'e.g. Jean-Paul Mbarga'}
                    className="w-full px-4 py-3 text-xs sm:text-sm font-sans bg-[#F5F1E8] dark:bg-[#1C1C1F] border border-[#3C2C26]/20 dark:border-[#C8B79C]/20 rounded-xs text-[#0B0B0C] dark:text-[#F5F1E8] focus:outline-none focus:border-[#9C7A4B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#0B0B0C] dark:text-[#F5F1E8] mb-2">
                    {language === 'fr' ? 'Téléphone / WhatsApp *' : 'WhatsApp Phone *'}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={language === 'fr' ? '+237 6XX XX XX XX' : '+237 / +33 / +1...'}
                    className="w-full px-4 py-3 text-xs sm:text-sm font-sans bg-[#F5F1E8] dark:bg-[#1C1C1F] border border-[#3C2C26]/20 dark:border-[#C8B79C]/20 rounded-xs text-[#0B0B0C] dark:text-[#F5F1E8] focus:outline-none focus:border-[#9C7A4B]"
                  />
                </div>
              </div>

              {/* Row 2: City / Location & Service Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#0B0B0C] dark:text-[#F5F1E8] mb-2">
                    {language === 'fr' ? 'Ville / Pays de résidence' : 'City / Location'}
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder={language === 'fr' ? 'Ex: Yaoundé (Bastos), Douala, Paris...' : 'e.g. Yaoundé, Douala, Paris, Montreal...'}
                    className="w-full px-4 py-3 text-xs sm:text-sm font-sans bg-[#F5F1E8] dark:bg-[#1C1C1F] border border-[#3C2C26]/20 dark:border-[#C8B79C]/20 rounded-xs text-[#0B0B0C] dark:text-[#F5F1E8] focus:outline-none focus:border-[#9C7A4B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#0B0B0C] dark:text-[#F5F1E8] mb-2">
                    {language === 'fr' ? 'Service / Type de tenue souhaitée' : 'Service / Garment Type'}
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-xs sm:text-sm font-sans bg-[#F5F1E8] dark:bg-[#1C1C1F] border border-[#3C2C26]/20 dark:border-[#C8B79C]/20 rounded-xs text-[#0B0B0C] dark:text-[#F5F1E8] focus:outline-none focus:border-[#9C7A4B] cursor-pointer"
                  >
                    {serviceOptions.map((opt, i) => (
                      <option key={i} value={language === 'fr' ? opt.fr : opt.en}>
                        {language === 'fr' ? opt.fr : opt.en}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Budget Range & Preferred Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#0B0B0C] dark:text-[#F5F1E8] mb-2">
                    {language === 'fr' ? 'Budget estimatif' : 'Estimated Budget'}
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-xs sm:text-sm font-sans bg-[#F5F1E8] dark:bg-[#1C1C1F] border border-[#3C2C26]/20 dark:border-[#C8B79C]/20 rounded-xs text-[#0B0B0C] dark:text-[#F5F1E8] focus:outline-none focus:border-[#9C7A4B] cursor-pointer"
                  >
                    {budgetOptions.map((b, i) => (
                      <option key={i} value={b.label}>
                        {b.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#0B0B0C] dark:text-[#F5F1E8] mb-2">
                    {language === 'fr' ? 'Date souhaitée de rendez-vous ou événement' : 'Preferred Date / Event Deadline'}
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-xs sm:text-sm font-sans bg-[#F5F1E8] dark:bg-[#1C1C1F] border border-[#3C2C26]/20 dark:border-[#C8B79C]/20 rounded-xs text-[#0B0B0C] dark:text-[#F5F1E8] focus:outline-none focus:border-[#9C7A4B]"
                  />
                </div>
              </div>

              {/* Row 4: Time Slot */}
              <div>
                <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#0B0B0C] dark:text-[#F5F1E8] mb-2">
                  {language === 'fr' ? 'Créneau horaire préféré pour l’essayage' : 'Preferred Time Slot'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {timeSlotOptions.map((slot, i) => (
                    <label
                      key={i}
                      className={`flex items-center gap-2.5 p-3 rounded-xs border cursor-pointer transition-all text-xs font-sans ${
                        formData.timeSlot === (language === 'fr' ? slot.fr : slot.en)
                          ? 'border-[#9C7A4B] bg-[#9C7A4B]/10 font-semibold text-[#9C7A4B]'
                          : 'border-[#3C2C26]/15 dark:border-[#C8B79C]/20 bg-[#F5F1E8] dark:bg-[#1C1C1F]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="timeSlot"
                        value={language === 'fr' ? slot.fr : slot.en}
                        checked={formData.timeSlot === (language === 'fr' ? slot.fr : slot.en)}
                        onChange={handleChange}
                        className="text-[#9C7A4B] focus:ring-0"
                      />
                      <span>{language === 'fr' ? slot.fr : slot.en}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Row 5: Notes & Details */}
              <div>
                <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#0B0B0C] dark:text-[#F5F1E8] mb-2">
                  {language === 'fr' ? 'Précisions, mensurations ou inspirations' : 'Details, Measurements, Inspirations'}
                </label>
                <textarea
                  rows={4}
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder={
                    language === 'fr'
                      ? 'Ex: Mariage prévu le 15 août, je souhaite un ensemble costume 3 pièces noir avec doublure bronze, mensurations approximatives ou tissu déjà en ma possession...'
                      : 'e.g. Wedding scheduled on August 15th, looking for a 3-piece tuxedo with bronze accents...'
                  }
                  className="w-full px-4 py-3 text-xs sm:text-sm font-sans bg-[#F5F1E8] dark:bg-[#1C1C1F] border border-[#3C2C26]/20 dark:border-[#C8B79C]/20 rounded-xs text-[#0B0B0C] dark:text-[#F5F1E8] focus:outline-none focus:border-[#9C7A4B]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-8 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans text-xs uppercase tracking-widest font-bold rounded-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>
                    {language === 'fr'
                      ? 'Envoyer la demande sur WhatsApp (+237 691 087 382)'
                      : 'Send Request Directly via WhatsApp (+237 691 087 382)'}
                  </span>
                </button>
                <p className="mt-2 text-[11px] font-sans text-center text-[#3C2C26]/60 dark:text-[#C8B79C]/60">
                  {language === 'fr'
                    ? '✓ Aucun paiement en ligne requis · Devis gratuit établi sous 2 heures par le créateur.'
                    : '✓ No online payment required · Complimentary quote confirmed within 2 hours by the designer.'}
                </p>
              </div>

            </motion.form>
          )}

        </div>

        {/* Right Column: Atelier Trust & Practical Info */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Card 1: Direct Hotline */}
          <div className="p-6 sm:p-7 rounded-xs bg-[#EFEAE0]/60 dark:bg-[#151517] border border-[#3C2C26]/10 dark:border-[#C8B79C]/12 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9C7A4B] font-bold">
              <Phone className="w-4 h-4" />
              <span>{language === 'fr' ? 'Ligne Directe Atelier' : 'Atelier Hotline'}</span>
            </div>
            <div>
              <div className="font-editorial text-2xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8]">
                +237 691 087 382
              </div>
              <div className="text-xs font-sans text-[#3C2C26]/70 dark:text-[#C8B79C]/70 mt-1">
                Ligne WhatsApp officielle & appels atelier
              </div>
            </div>
            <div className="text-xs font-sans text-[#3C2C26]/75 dark:text-[#C8B79C]/75 pt-2 border-t border-[#3C2C26]/10 dark:border-[#C8B79C]/10">
              <span className="font-semibold">{language === 'fr' ? 'E-mail officiel : ' : 'Official email: '}</span>
              <a href="mailto:juniortamno13@gmail.com" className="hover:underline text-[#9C7A4B] font-medium">juniortamno13@gmail.com</a>
            </div>
          </div>

          {/* Card 2: Physical Location */}
          <div className="p-6 sm:p-7 rounded-xs bg-[#EFEAE0]/60 dark:bg-[#151517] border border-[#3C2C26]/10 dark:border-[#C8B79C]/12 space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9C7A4B] font-bold">
              <MapPin className="w-4 h-4" />
              <span>{language === 'fr' ? 'Localisation de l’Atelier' : 'Atelier Location'}</span>
            </div>
            <p className="font-editorial text-xl font-bold text-[#0B0B0C] dark:text-[#F5F1E8]">
              Yaoundé, Cameroun
            </p>
            <p className="text-xs font-sans text-[#3C2C26]/85 dark:text-[#C8B79C]/85 leading-relaxed">
              Yaoundé - Descente Éleveur, face Turbo Distribution Center.<br />
              <span className="italic opacity-80">(Boutique & atelier de haute confection)</span>
            </p>
          </div>

          {/* Card 3: Opening Hours & Fittings */}
          <div className="p-6 sm:p-7 rounded-xs bg-[#EFEAE0]/60 dark:bg-[#151517] border border-[#3C2C26]/10 dark:border-[#C8B79C]/12 space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9C7A4B] font-bold">
              <Clock className="w-4 h-4" />
              <span>{language === 'fr' ? 'Horaires d’Accueil' : 'Atelier Hours'}</span>
            </div>
            <div className="text-xs font-sans text-[#3C2C26]/85 dark:text-[#C8B79C]/85 space-y-1.5">
              <p><strong>Lundi – Vendredi :</strong> 09h00 – 19h00</p>
              <p><strong>Samedi :</strong> 09h00 – 18h00</p>
              <p><strong>Dimanche :</strong> Fermé (Urgences cérémonies sur RDV)</p>
            </div>
          </div>

          {/* Card 4: Diaspora Remote Service */}
          <div className="p-6 rounded-xs bg-[#9C7A4B]/10 border border-[#9C7A4B]/30 space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9C7A4B] font-bold">
              <Sparkles className="w-4 h-4" />
              <span>{language === 'fr' ? 'Service Diaspora' : 'Diaspora Service'}</span>
            </div>
            <p className="text-xs font-sans text-[#3C2C26]/85 dark:text-[#C8B79C]/85 leading-relaxed">
              {language === 'fr'
                ? 'Vous êtes en France, au Canada ou aux États-Unis ? Nous assurons la prise de mesure par appel vidéo et l’expédition express par DHL.'
                : 'Residing in France, Canada, or the USA? We conduct video measurement sessions and provide global DHL express dispatch.'}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
