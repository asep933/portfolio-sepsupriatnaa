import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './navbar/page'
import Footer from './footer/page'
import Back from "@/components/back/page";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'sepsupriatnaa',
  description: 'Portfolio sepsupriatnaa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth m-0 overflow-x-hidden">
      <body className={`${inter.className} overflow-hidden bg-slate-200`}>
        <Navbar />
          <div className='w-full'>{children}</div>
          <Back />
        <Footer />
      </body>
    </html>
  )
}
