import type { Metadata } from 'next';
import { AboutHeader } from '@/components/about/about-header';
import { AboutWhoami } from '@/components/about/about-whoami';
import { AboutWorkstation } from '@/components/about/about-workstation';
import { AboutConnect } from '@/components/about/about-connect';

export const metadata: Metadata = {
  title: 'About',
  description: 'A page about me, my engineering background, and my setup.',
};

export default function AboutPage() {
  return (
    <div className="page">
      <AboutHeader />
      <AboutWhoami />
      <AboutWorkstation />
      <AboutConnect />
    </div>
  );
}
