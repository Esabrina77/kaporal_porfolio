"use client";
import { useState, useEffect } from 'react';
import styles from '@/styles/components/TypingQuote.module.css';

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  {
    text: "L'innovation, c'est une situation qu'on choisit parce qu'on a une passion brûlante pour quelque chose.",
    author: "Steve Jobs"
  },
  {
    text: "L'ambition nourrit l'innovation : visez grand, car au pire, ça marche !",
    author: "Xavier Niel"
  },
  {
    text: "L'innovation est ce qui distingue un leader d'un suiveur.",
    author: "Steve Jobs"
  },
  {
    text: "Tout est changement, non pas pour ne plus être, mais pour devenir ce qui n'est pas encore.",
    author: "Epictète"
  },
  {
    text: "Soyez le changement que vous voulez voir dans le monde.",
    author: "Gandhi"
  },
  {
    text: "Gutenberg n'a pas attendu le développement du marché du livre pour inventer l'imprimerie.",
    author: "Nicole Notat"
  },
  {
    text: "Celui qui n'a jamais commis d'erreur n'a jamais tenté d'innover.",
    author: "Albert Einstein"
  },
  {
    text: "L'innovation systématique requiert la volonté de considérer le changement comme une opportunité.",
    author: "Peter Drucker"
  },
  {
    text: "Mieux vaut prendre le changement par la main avant qu'il ne vous prenne par la gorge.",
    author: "Winston Churchill"
  },
  {
    text: "Focalisez-vous sur ce que vous pouvez changer, pas sur ce que vous ne pouvez pas.",
    author: "Tom Clancy"
  }
];

export default function TypingQuote() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [displayedAuthor, setDisplayedAuthor] = useState('');
  const [isTypingText, setIsTypingText] = useState(true);

  const currentQuote = quotes[currentQuoteIndex];

  useEffect(() => {
    let textIndex = 0;
    let authorIndex = 0;

    // Reset
    setDisplayedText('');
    setDisplayedAuthor('');
    setIsTypingText(true);

    // Typing de la citation
    const textInterval = setInterval(() => {
      if (textIndex < currentQuote.text.length) {
        setDisplayedText(currentQuote.text.substring(0, textIndex + 1));
        textIndex++;
      } else {
        clearInterval(textInterval);
        setIsTypingText(false);
        
        // Commencer le typing de l'auteur après un court délai
        setTimeout(() => {
          const authorInterval = setInterval(() => {
            if (authorIndex < currentQuote.author.length) {
              setDisplayedAuthor(currentQuote.author.substring(0, authorIndex + 1));
              authorIndex++;
            } else {
              clearInterval(authorInterval);
            }
          }, 50);
        }, 300);
      }
    }, 30); // Vitesse de typing pour le texte

    // Changer de citation après 30 secondes
    const quoteTimeout = setTimeout(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 30000);

    return () => {
      clearInterval(textInterval);
      clearTimeout(quoteTimeout);
    };
  }, [currentQuoteIndex, currentQuote.text, currentQuote.author]);

  return (
    <div className={styles.quoteContainer}>
      <p className={styles.quoteText}>
         
         &ldquo;{displayedText}
        {isTypingText && <span className={styles.cursor}>|</span>}
        &rdquo;
      </p>
      <p className={styles.quoteAuthor}>
        {displayedAuthor}
        {!isTypingText && displayedAuthor.length < currentQuote.author.length && (
          <span className={styles.cursor}>|</span>
        )}
      </p>
    </div>
  );
}

