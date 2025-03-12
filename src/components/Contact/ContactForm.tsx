"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from '@/styles/components/Contact.module.css';

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Une erreur est survenue');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Me Contacter</h1>
      
      <p className={styles.description}>
        Vous avez un projet en tête ou une opportunité à discuter ? 
        N&apos;hésitez pas à me contacter via ce formulaire.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Nom</label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className={styles.input}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={styles.input}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subject" className={styles.label}>Sujet</label>
          <input
            type="text"
            id="subject"
            {...register('subject')}
            className={styles.input}
          />
          {errors.subject && (
            <span className={styles.error}>{errors.subject.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            id="message"
            {...register('message')}
            className={styles.textarea}
            rows={6}
          />
          {errors.message && (
            <span className={styles.error}>{errors.message.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
        </button>

        {submitStatus === 'success' && (
          <p className={styles.successMessage}>
            Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
          </p>
        )}

        {submitStatus === 'error' && (
          <p className={styles.errorMessage}>
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
} 