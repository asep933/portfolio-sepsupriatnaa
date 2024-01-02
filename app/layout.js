import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './navbar/page'
import Footer from './footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'sepsupriatnaa',
  description: 'Portfolio sepsupriatnaa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth m-0">
      <body className={`${inter.className} overflow-x-hidden bg-slate-200 m-0 w-full`}>
        <Navbar className="w-full" />
          <div className='w-full'>{children}</div>
        <Footer className="w-full" />
      </body>
    </html>
  )
}
