import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Sabrina Eloundou - Portfolio',
  description: 'Développeuse Web Front-End spécialisée en Vue.js, Next.js et Three.js',
  keywords: ['développeur web', 'front-end', 'Vue.js', 'Next.js', 'Three.js', 'TypeScript'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
