import './globals.css'
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-Inter"
});

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-montserrat"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} mx-32 my-12`}>
        {children}
      </body>
    </html>
  )
}
