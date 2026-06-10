'use client'

import { useState } from "react"
import Link from "next/link"
import { siteConfig } from "@/lib/config"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e8e8e4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo / naam */}
        <Link href="/" className="font-serif font-black text-xl text-[#1d3461] leading-none">
          {siteConfig.naam}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {siteConfig.nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="site-nav-underline px-3 py-2 text-sm font-semibold text-[#1d3461] hover:text-[#5e99f7] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={siteConfig.hero.ctaHref}
            className="ml-3 bg-[#c70015] text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:opacity-90"
          >
            {siteConfig.hero.ctaTekst}
          </Link>
        </nav>

        {/* Mobiele menu-knop */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu openen"
        >
          <span className={`block h-0.5 w-6 bg-[#1d3461] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#1d3461] transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#1d3461] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobiel menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#e8e8e4] bg-white px-4 py-4 flex flex-col gap-1">
          {siteConfig.nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="py-2.5 px-2 text-sm font-semibold text-[#1d3461] hover:text-[#5e99f7] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={siteConfig.hero.ctaHref}
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-[#c70015] text-white text-sm font-bold px-5 py-3 rounded-xl text-center hover:opacity-90"
          >
            {siteConfig.hero.ctaTekst}
          </Link>
        </div>
      )}
    </header>
  )
}
