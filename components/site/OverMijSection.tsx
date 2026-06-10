import { siteConfig } from "@/lib/config"

export default function OverMijSection() {
  const { overMij } = siteConfig

  return (
    <section id="over-mij" className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Foto-placeholder */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#1d3461] flex items-end order-2 md:order-1">
            {/* Vervang dit blok door een <Image> als de foto beschikbaar is */}
            <div className="absolute inset-0 flex items-center justify-center text-white/20 text-8xl font-black font-serif select-none">
              {overMij.naam.charAt(0)}
            </div>
            <div className="relative z-10 p-6 bg-gradient-to-t from-[#1d3461] to-transparent w-full">
              <p className="font-serif font-black text-white text-xl">{overMij.naam}</p>
              <p className="text-white/70 text-sm font-semibold">{overMij.functie}</p>
            </div>
          </div>

          {/* Tekst */}
          <div className="order-1 md:order-2 flex flex-col gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-[#c70015] mb-3">
                Over mij
              </p>
              <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#1d3461] leading-tight mb-4">
                {overMij.naam}
              </h2>
              <p className="text-sm font-bold text-[#5e99f7] uppercase tracking-wide">
                {overMij.functie}
              </p>
            </div>

            <p className="text-[#888880] leading-relaxed text-base">
              {overMij.bio}
            </p>

            {/* Contactknop */}
            <a
              href={`tel:${siteConfig.contact.tel.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-3 bg-[#f8f8f6] border border-[#e8e8e4] text-[#1d3461] font-semibold px-5 py-3 rounded-xl hover:border-[#5e99f7] transition-colors w-fit"
            >
              <svg className="w-4 h-4 text-[#5e99f7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              {siteConfig.contact.tel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
