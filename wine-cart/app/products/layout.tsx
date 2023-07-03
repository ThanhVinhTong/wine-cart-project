import { FooterContent, HeaderContent } from '@/components';

export const metadata = {
  title: 'Wine Cart',
  description: 'Discover your desired wines',
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="relative">
        <HeaderContent />
        <main className="grow">{children}</main>
        <FooterContent />
      </body>
    </html>
  );
}
