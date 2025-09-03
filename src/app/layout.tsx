import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import "@/styles/globals.css";

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sabrina ELOUNDOU - Architecte de Solutions Numériques & Entrepreneuse Tech',
  description: 'Fondatrice de Kaporelo et créatrice de Kawepla. Expert DevOps, IoT et développement full-stack. Transforme des défis complexes en solutions technologiques innovantes.',
  keywords: [
    'Sabrina Eloundou',
    'Développeuse Full-Stack',
    'Entrepreneuse Tech',
    'DevOps Engineer',
    'IoT Developer',
    'Kaporelo',
    'Kawepla',
    'Architecture Logicielle',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'Docker',
    'pfSense',
    'MQTT',
    'ESP8266'
  ],
  authors: [{ name: 'Sabrina ELOUNDOU' }],
  creator: 'Sabrina ELOUNDOU',
  publisher: 'Kaporelo',
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon/apple-icon.png' },
      { url: '/favicon/apple-icon-180x180.png', sizes: '180x180' }
    ],
    other: [
      { rel: 'android-icon', url: '/favicon/android-icon-192x192.png', sizes: '192x192' }
    ]
  },
  manifest: '/manifest.json',
  themeColor: '#000000',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Kaporelo'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5
  },
  openGraph: {
    title: 'Sabrina ELOUNDOU - Architecte de Solutions Numériques',
    description: 'Fondatrice de Kaporelo et innovatrice tech. Expert DevOps, IoT et développement full-stack.',
    url: 'https://www.kaporelo.com',
    siteName: 'Portfolio Sabrina ELOUNDOU',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: '/images/kaporelo.jpg',
        width: 1200,
        height: 630,
        alt: 'Sabrina ELOUNDOU - Entrepreneuse Tech'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sabrina ELOUNDOU - Architecte de Solutions Numériques',
    description: 'Fondatrice de Kaporelo et innovatrice tech. Expert DevOps, IoT et développement full-stack.',
    images: ['/images/kaporelo.jpg'],
  },
  verification: {
    google: 'votre-code-verification-google', // Ajoutez votre code de vérification Google Search Console
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={montserrat.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
