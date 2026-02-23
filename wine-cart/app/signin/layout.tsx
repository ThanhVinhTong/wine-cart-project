'use client';

import { WSButton, FooterContent } from '@/components';
import Image from 'next/image';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="h-[84px] bg-brown flex items-center">
          <div className="w-default-width m-auto">
            <div className="flex justify-between">
              <div className="flex">
                <WSButton href="/" className="flex items-center">
                  <Image src="/images/Logo2.png" alt="Wine Cart logo" width={230} height={40} />
                </WSButton>
                <div className="text-2xl text-white font-bold whitespace-nowrap flex items-center">Sign In</div>
              </div>
              <WSButton className="flex justify-end text-white">Are You Need Help ?</WSButton>
            </div>
          </div>
        </header>
        {children}
        <FooterContent />
      </body>
    </html>
  );
}
