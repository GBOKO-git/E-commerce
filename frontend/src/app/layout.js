import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Hearder";
import Footer from "@/Components/Footer";
import { Providers } from "@/Redux/Provider";
import InitUser from "@/Redux/InitUsers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const dynamiqueFooter = "min-h-screen flex flex-col"
export const metadata = {
  title: "AZshop",
  description: "Ma première plateforme e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${dynamiqueFooter}`}
      >
        <Providers>
          <InitUser/>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
