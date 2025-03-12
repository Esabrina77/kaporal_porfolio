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
  
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://kaporelo.com',
    siteName: 'Sabrina Eloundou Portfolio',
    title: 'Sabrina Eloundou | Développeuse',
    description: 'Portfolio de Sabrina Eloundou, développeuse passionnée par les technologies web et l\'innovation. En stage chez Link2Brain.',
    images: [
      {
        url: '/images/og-image.jpg', // Créez cette image
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
