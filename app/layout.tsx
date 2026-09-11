import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Qur’an Studio — Read, Listen, Recite',
  description: 'Premium Qur’an reading and recitation practice studio.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="id"><body>{children}</body></html>;
}
