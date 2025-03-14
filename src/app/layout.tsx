import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import "@/styles/globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Sabrina Eloundou | Portfolio',
  description: 'Développeuse passionnée par les technologies web et l\'innovation',
  keywords: ['développeur', 'full-stack', 'Vue.js', 'Next.js', 'Three.js', 'TypeScript', 'Python', 'Data Science'],
  authors: [{ name: 'Sabrina Eloundou' }],
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
    type: 'website',
    locale: 'fr_FR',
    url: 'https://kaporelo.com',
    siteName: 'Sabrina Eloundou Portfolio',
    title: 'Sabrina Eloundou | Développeuse',
    description: 'Portfolio de Sabrina Eloundou, développeuse passionnée par les technologies web et l\'innovation. En stage chez Link2Brain.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sabrina Eloundou Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sabrina Eloundou | Développeuse',
    description: 'Portfolio de Sabrina Eloundou, développeuse passionnée par les technologies web et l\'innovation. En stage chez Link2Brain.',
    images: ['/images/og-image.jpg'],
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
      <body className={poppins.variable}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
