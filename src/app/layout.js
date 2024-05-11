import { Faustina } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

 
const faustina = Faustina({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Nexus",
  description: "Recruiting Agency for LATAM professionals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={faustina.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
