import { ReactNode } from 'react';
export const metadata: Metadata = {
  title: "Ussop",
  description: "A website to catch with people via meetings",
  icons: {
    icon: "/icons/logo.png",
  },
};

import StreamVideoProvider from '@/providers/StreamClientProvider';
import { Metadata } from 'next';

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;