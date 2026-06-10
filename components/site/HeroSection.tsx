import Link from "next/link"
import { siteConfig } from "@/lib/config"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#1d3461] text-white overflow-hidden pt-16">

      {/* Decoratieve orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="site-hero-orb site-hero-orb--a absolute" />
        <div className="site-hero-orb site-hero-orb--b absolute" />
        <div className="site-hero-orb site-hero-orb--c absolute" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-24 flex flex-col gap-8">

        {/* Kicker label */}
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full w-fit backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5e99f7] inline-block" />
          {siteConfig.overMij.functie}
        </span>

        {/* Titel */}
        <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-2xl">
          {siteConfig.hero.titel}
        </h1>

        {/* Subtitel */}
        <p className="text-lg sm:text-xl text-white/75 max-w-xl leading-relaxed">
          {siteConfig.hero.subtitel}
        </p>

        {/* CTA knoppen */}
        <div className="flex flex-wrap gap-4 mt-2">
          <Link
            href={siteConfig.hero.ctaHref}
            className="bg-[#c70015] text-white font-bold text-base px-8 py-4 rounded-xl hover:opacity-90 shadow-lg"
          >
            {siteConfig.hero.ctaTekst}
          </Link>
          <Link
            href="#diensten"
            className="bg-white/10 text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-white/20 border border-white/20 backdrop-blur-sm"
          >
            Bekijk diensten
          </Link>
        </div>

        {/* Contactbalk */}
        <div className="flex flex-wrap gap-6 mt-4 text-sm text-white/60">
          {siteConfig.contact.locatie && (
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              {siteConfig.contact.locatie}
            </span>
          )}
          {siteConfig.contact.tel && (
            <a href={`tel:${siteConfig.contact.tel.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              {siteConfig.contact.tel}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
