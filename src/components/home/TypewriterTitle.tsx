import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

interface TypewriterTitleProps {
  className?: string;
}

export const TypewriterTitle: React.FC<TypewriterTitleProps> = ({ className = '' }) => {
  const { language } = useApp();

  const phrases = language === 'fr'
    ? [
        'L’élégance africaine dans son épure la plus contemporaine.',
        'L’art de la haute confection sur mesure à Yaoundé.',
        'Des silhouettes pensées pour marquer les esprits.',
        'La signature sartoriale d’Ariel Junior Nzesseu.'
      ]
    : [
        'African elegance sculpted in its purest contemporary form.',
        'The art of bespoke haute couture tailoring in Yaoundé.',
        'Silhouettes crafted with intent to leave an enduring mark.',
        'The bespoke sartorial signature of Ariel Junior Nzesseu.'
      ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(70);

  // Reset text when language toggles
  useEffect(() => {
    setDisplayText('');
    setIsDeleting(false);
    setPhraseIndex(0);
  }, [language]);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
          setTypingSpeed(45 + Math.random() * 35); // Organic typing rhythm
        } else {
          // Pause at the end of full phrase
          setTimeout(() => setIsDeleting(true), 2800);
        }
      } else {
        // Backspacing
        if (displayText.length > 0) {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
          setTypingSpeed(25);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(250);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, phrases, typingSpeed]);

  return (
    <span className={`inline-block relative ${className}`}>
      <span>{displayText}</span>
      {/* Blinking gold cursor */}
      <span
        aria-hidden="true"
        className="inline-block w-[3px] h-[0.9em] ml-1 bg-[#9C7A4B] align-baseline animate-pulse transition-opacity duration-200"
      />
    </span>
  );
};
