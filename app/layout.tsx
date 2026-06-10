import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { siteConfig } from "@/lib/config"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: siteConfig.naam,
  description: siteConfig.beschrijving,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.naam,
    description: siteConfig.beschrijving,
    url: siteConfig.url,
    siteName: siteConfig.naam,
    locale: "nl_NL",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans bg-[#f8f8f6] text-[#1a1a1a] antialiased">
        {children}
      </body>
    </html>
  )
}
