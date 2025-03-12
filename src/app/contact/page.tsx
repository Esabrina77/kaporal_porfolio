import ContactForm from '@/components/Contact/ContactForm';
import { Metadata } from 'next';
import styles from '@/styles/app/home/page.module.css';

export const metadata: Metadata = {
  title: 'Contact | Sabrina Eloundou',
  description: 'Contactez-moi pour discuter de vos projets ou opportunités.',
};

export default function ContactPage() {
  return (
    <div className={`${styles.pageContainer} py-16 sm:py-24`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div>
    </div>
  );
} 