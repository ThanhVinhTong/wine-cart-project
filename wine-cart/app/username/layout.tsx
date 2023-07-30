import { FooterContent, HeaderContent, HeaderContent2 } from '@/components';
export const metadata = {
  title: 'Wine Cart',
  description: 'Discover your desired wines',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <HeaderContent2 />
        {children}
        <FooterContent />
      </body>
    </html>
  );
}
