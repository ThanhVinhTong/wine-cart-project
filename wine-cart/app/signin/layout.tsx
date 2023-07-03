'use client';

import { WSButton, FooterContent } from '@/components';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="h-[84px] bg-brown flex items-center">
          <div className="w-default-width m-auto">
            <div className="flex justify-between">
              <div className="flex">
                <WSButton href="/" className="flex items-center">
                  <img src="../../../images/Logo2.png" alt="" className="w-[230px] h-[40px]" />
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
