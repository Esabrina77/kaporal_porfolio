import ContactForm from '@/components/Contact/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Sabrina ELOUNDOU - Collaborons sur vos Projets Tech',
  description: 'Contactez-moi pour discuter de vos projets innovants, opportunités entrepreneuriales ou collaborations techniques. Fondatrice de Kaporelo,  DevOps & IoT.',
  keywords: ['contact', 'collaboration', 'projets tech', 'opportunités', 'Kaporelo', 'consulting tech'],
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div>
    </div>
  );
} 