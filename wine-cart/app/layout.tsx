import './globals.css'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

export const metadata = {
  title: 'Wine Cart',
  description: 'Discover your desired wines',
}

export default function RootLayout({ children }:any) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}