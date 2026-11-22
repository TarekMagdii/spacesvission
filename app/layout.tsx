import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.spacesvision-sa.com'),
  title: {
    default: 'SPACES VISION — Technology, Infrastructure & Digital Experiences',
    template: '%s | SPACES VISION',
  },

  description: 'SPACES VISION connects ideas, technology and execution through IT infrastructure, cybersecurity, software, smart buildings, telecommunications and immersive digital experiences.',
  keywords: ['SPACES VISION', 'IT solutions', 'cybersecurity', 'IT infrastructure', 'Riyadh', 'Saudi Arabia', 'digital transformation', 'smart buildings', 'telecommunications'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'SPACES VISION — We Build What’s Next.',
    description: 'Technology, infrastructure and immersive digital experiences in Saudi Arabia.',
    url: 'https://www.spacesvision-sa.com',
    siteName: 'SPACES VISION',
    type: 'website',
    images: [{ url: '/assets/hero.jpg', width: 1200, height: 630, alt: 'SPACES VISION' }],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
