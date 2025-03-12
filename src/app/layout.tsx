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
    // Favicons pour le thème sombre (par défaut)
    apple: [
      { url: '/favicon/dark/apple-icon-57x57.png', sizes: '57x57', media: '(prefers-color-scheme: dark)' },
      { url: '/favicon/dark/apple-icon-60x60.png', sizes: '60x60', media: '(prefers-color-scheme: dark)' },
      { url: '/favicon/dark/apple-icon-72x72.png', sizes: '72x72', media: '(prefers-color-scheme: dark)' },
      { url: '/favicon/dark/apple-icon-76x76.png', sizes: '76x76', media: '(prefers-color-scheme: dark)' },
      { url: '/favicon/dark/apple-icon-114x114.png', sizes: '114x114', media: '(prefers-color-scheme: dark)' },
      { url: '/favicon/dark/apple-icon-120x120.png', sizes: '120x120', media: '(prefers-color-scheme: dark)' },
      { url: '/favicon/dark/apple-icon-144x144.png', sizes: '144x144', media: '(prefers-color-scheme: dark)' },
      { url: '/favicon/dark/apple-icon-152x152.png', sizes: '152x152', media: '(prefers-color-scheme: dark)' },
      { url: '/favicon/dark/apple-icon-180x180.png', sizes: '180x180', media: '(prefers-color-scheme: dark)' },
      
      // Version claire des icônes Apple
      { url: '/favicon/light/apple-icon-57x57.png', sizes: '57x57', media: '(prefers-color-scheme: light)' },
      { url: '/favicon/light/apple-icon-60x60.png', sizes: '60x60', media: '(prefers-color-scheme: light)' },
      { url: '/favicon/light/apple-icon-72x72.png', sizes: '72x72', media: '(prefers-color-scheme: light)' },
      { url: '/favicon/light/apple-icon-76x76.png', sizes: '76x76', media: '(prefers-color-scheme: light)' },
      { url: '/favicon/light/apple-icon-114x114.png', sizes: '114x114', media: '(prefers-color-scheme: light)' },
      { url: '/favicon/light/apple-icon-120x120.png', sizes: '120x120', media: '(prefers-color-scheme: light)' },
      { url: '/favicon/light/apple-icon-144x144.png', sizes: '144x144', media: '(prefers-color-scheme: light)' },
      { url: '/favicon/light/apple-icon-152x152.png', sizes: '152x152', media: '(prefers-color-scheme: light)' },
      { url: '/favicon/light/apple-icon-180x180.png', sizes: '180x180', media: '(prefers-color-scheme: light)' },
    ],
    // Autres icônes (Android, favicon standard)
    other: [
      // Android icons - Dark
      { rel: 'icon', url: '/favicon/dark/android-icon-192x192.png', sizes: '192x192', media: '(prefers-color-scheme: dark)' },
      // Android icons - Light
      { rel: 'icon', url: '/favicon/light/android-icon-192x192.png', sizes: '192x192', media: '(prefers-color-scheme: light)' },
      
      // Standard favicons - Dark
      { rel: 'icon', url: '/favicon/dark/favicon-32x32.png', sizes: '32x32', media: '(prefers-color-scheme: dark)' },
      { rel: 'icon', url: '/favicon/dark/favicon-96x96.png', sizes: '96x96', media: '(prefers-color-scheme: dark)' },
      { rel: 'icon', url: '/favicon/dark/favicon-16x16.png', sizes: '16x16', media: '(prefers-color-scheme: dark)' },
      
      // Standard favicons - Light
      { rel: 'icon', url: '/favicon/light/favicon-32x32.png', sizes: '32x32', media: '(prefers-color-scheme: light)' },
      { rel: 'icon', url: '/favicon/light/favicon-96x96.png', sizes: '96x96', media: '(prefers-color-scheme: light)' },
      { rel: 'icon', url: '/favicon/light/favicon-16x16.png', sizes: '16x16', media: '(prefers-color-scheme: light)' },
    ],
  },
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
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
        <main className="pt-16">
        {children}
        </main>
      </body>
    </html>
  );
}
