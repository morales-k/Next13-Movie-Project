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
      <body className={`${montserrat.className}`}>
        <nav>
          <ul className={`${inter.className}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
