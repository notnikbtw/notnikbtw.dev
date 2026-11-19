import localFont from 'next/font/local';

export const ibmPlexMono = localFont({
  src: [
    {
      path: '../assets/fonts/ibm-plex-mono/IBMPlexMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ibm-plex-mono/IBMPlexMono-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ibm-plex-mono/IBMPlexMono-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ibm-plex-mono/IBMPlexMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  preload: false,
});

export const departureMono = localFont({
  src: '../assets/fonts/DepartureMono-1.500/DepartureMono-Regular.woff2',
  variable: '--font-departure-mono',
  weight: '400',
  style: 'normal',
  display: 'swap',
});
