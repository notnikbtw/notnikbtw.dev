import type { Metadata } from 'next';
import { PrivacyHeader } from '@/components/privacy/privacy-header';
import { PrivacySections } from '@/components/privacy/privacy-sections';

export const metadata: Metadata = {
  title: 'Privacy & Terms',
  description:
    'Privacy policy, terms of use, and open source disclosure for !Nik.',
};

export default function PrivacyPage() {
  return (
    <div className="page">
      <PrivacyHeader />
      <PrivacySections />
    </div>
  );
}
