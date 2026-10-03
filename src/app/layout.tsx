import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Old Spice Agro Fresh LLP | Fresh Organic Fruit & Vegetable',
  description:
    "We are a farmers' collective combining age-old wisdom with modern technology to grow and export organic vegetables and fruits. It's all about nature.",
  keywords: [
    'Old Spice Agro Fresh LLP',
    'Organic Vegetables Exporter',
    'Organic Fruits India',
    'Maharashtra Agro Export',
    'Otur Farmers Collective',
    'Fresh Organic Produce',
  ],
  icons: {
    icon: '/assets/logo/logo.png',
    apple: '/assets/logo/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-nature-paper text-stone-900 antialiased min-h-screen flex flex-col">
        <SmoothScroll>
          <CustomCursor />
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
