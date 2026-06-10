import { siteConfig } from "@/lib/config"

export default function DienstenSection() {
  return (
    <section id="diensten" className="py-20 sm:py-28 bg-[#f8f8f6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Sectie-header */}
        <div className="mb-14 max-w-xl">
          <p className="text-xs font-black uppercase tracking-widest text-[#c70015] mb-3">
            Wat ik aanbied
          </p>
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#1d3461] leading-tight mb-4">
            Mijn diensten
          </h2>
          <p className="text-[#888880] text-base leading-relaxed">
            Kies de dienst die bij jouw doel past. Neem contact op voor een vrijblijvend kennismakingsgesprek.
          </p>
        </div>

        {/* Diensten grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.diensten.map(dienst => (
            <div
              key={dienst.id}
              className="bg-white rounded-2xl border border-[#e8e8e4] p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Icon */}
              <span className="text-3xl">{dienst.icon}</span>

              {/* Naam */}
              <h3 className="font-serif font-black text-xl text-[#1d3461] leading-tight">
                {dienst.naam}
              </h3>

              {/* Beschrijving */}
              <p className="text-[#888880] text-sm leading-relaxed flex-1">
                {dienst.beschrijving}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-2 border-t border-[#e8e8e4]">
                <span className="text-xs font-semibold text-[#888880]">{dienst.duur}</span>
                <span className="text-base font-black text-[#1d3461]">{dienst.prijs}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={siteConfig.hero.ctaHref}
            className="inline-block bg-[#1d3461] text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            Maak een afspraak
          </a>
        </div>
      </div>
    </section>
  )
}
