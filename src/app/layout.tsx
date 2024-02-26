import './globals.css'
import type { Metadata } from 'next'
import "react-multi-carousel/lib/styles.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Oswald, Roboto } from 'next/font/google'
import Footer from './(mainsite)/components/misc/Footer/Footer';
import Navbar from './(mainsite)/components/misc/Navbar/Navbar';
import Script from 'next/script';

// BUTTON STYLES - .main-button
import "./(mainsite)/components/styling_sheets/links/mainlink.css"


const primaryFont = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500", "900"], display: "swap", variable: "--primary-font",
adjustFontFallback: false, })
const secondaryFont = Oswald({ subsets: ['latin'], weight: ["300", "500", "700"], display: "swap", variable: "--secondary-font",
adjustFontFallback: false, })

export const metadata: Metadata = {
  title: 'Icon Homes Construction | #1 Rated Construction Contractor Newcastle KZN South Africa',
  description: 'Icon Homes Construction | #1 Rated Construction Contractor Newcastle KZN South Africa'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${primaryFont.variable} ${secondaryFont.variable}`}>

      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>

        <Navbar />

        {children}

        <Footer />
        
        </body>
    </html>
  )
}
