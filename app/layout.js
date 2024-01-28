import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import Back from "./components/back/page";
import LoadingFirst from "./first-loading/page";
import Provider from "./provider/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "sepsupriatnaa",
  description: "Portfolio sepsupriatnaa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="m-0 overflow-x-hidden scroll-smooth">
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          sizes="any"
          href="../public/images/favicon.png"
        />
      </head>
      <body
        className={`${inter.className} overflow-hidden bg-slate-200 dark:bg-slate-900`}
      >
        <Provider attribute="class">
          <Navbar />
          <LoadingFirst />
          <div className="w-full">{children}</div>
          <Back />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
