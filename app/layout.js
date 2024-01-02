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
    <html lang="en" className="scroll-smooth bg-slate-200 w-full">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
          <div>{children}</div>
        <Footer/>
      </body>
    </html>
  )
}
