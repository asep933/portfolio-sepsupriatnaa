import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import Back from "./components/back/page";
import LoadingFirst from "./first-loading/page";
import Provider from "./provider/page";
import LinkWhatsapp from "./components/LinkWhatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "sepsupriatnaa",
  description: "Portfolio sepsupriatnaa",
  // width: "device-width",
  // initialScale: 1,
  // maximumScale: 1,
  // userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="m-0 resize-none overflow-x-hidden scroll-smooth">
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          sizes="any"
          href="../public/images/favicon.png"
        />
      </head>
      <body
        className={`${inter.className} overflow-hidden bg-primary dark:bg-slate-900`}
      >
        <Provider attribute="class">
          <header>
            <Navbar />
          </header>
          <section>
            <LoadingFirst />
          </section>
          <main className="w-full">{children}</main>

          <LinkWhatsapp />
          <Back />

          <footer>
            <Footer />
          </footer>
        </Provider>
      </body>
    </html>
  );
}
