import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import Back from "./components/back/page";
import { ThemeProvider } from "./themes-provider/page";
import LoadingFirst from "./first-loading/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "sepsupriatnaa",
  description: "Portfolio sepsupriatnaa",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth m-0 overflow-x-hidden ${classNames(
        fontSans.variable,
        "light"
      )}`}
      style={{ colorScheme: "light" }}
    >
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          sizes="any"
          href="../public/images/favicon.png"
        />
      </head>
      <body className={`${inter.className} overflow-hidden bg-slate-200`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <LoadingFirst />

          <div className="w-full">{children}</div>

          <Back />

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
