import { siteConfig } from "@/lib/config"

export default function ContactSection() {
  const { contact } = siteConfig

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#f8f8f6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Sectie-header */}
        <div className="mb-14 max-w-xl">
          <p className="text-xs font-black uppercase tracking-widest text-[#c70015] mb-3">
            Bereikbaar
          </p>
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#1d3461] leading-tight mb-4">
            Neem contact op
          </h2>
          <p className="text-[#888880] text-base leading-relaxed">
            Heb je een vraag of wil je een afspraak maken? Neem gerust contact op.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Telefoon */}
          {contact.tel && (
            <a
              href={`tel:${contact.tel.replace(/\s/g, '')}`}
              className="group bg-white rounded-2xl border border-[#e8e8e4] p-6 flex items-center gap-4 hover:border-[#5e99f7] hover:shadow-md transition-all"
            >
              <span className="w-12 h-12 rounded-xl bg-[#f8f8f6] border border-[#e8e8e4] flex items-center justify-center flex-shrink-0 group-hover:bg-[#5e99f7]/10 transition-colors">
                <svg className="w-5 h-5 text-[#5e99f7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </span>
              <div>
                <p className="text-xs font-bold text-[#888880] uppercase tracking-wide mb-0.5">Bellen</p>
                <p className="font-semibold text-[#1d3461]">{contact.tel}</p>
              </div>
            </a>
          )}

          {/* Email */}
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="group bg-white rounded-2xl border border-[#e8e8e4] p-6 flex items-center gap-4 hover:border-[#5e99f7] hover:shadow-md transition-all"
            >
              <span className="w-12 h-12 rounded-xl bg-[#f8f8f6] border border-[#e8e8e4] flex items-center justify-center flex-shrink-0 group-hover:bg-[#5e99f7]/10 transition-colors">
                <svg className="w-5 h-5 text-[#5e99f7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </span>
              <div>
                <p className="text-xs font-bold text-[#888880] uppercase tracking-wide mb-0.5">E-mail</p>
                <p className="font-semibold text-[#1d3461]">{contact.email}</p>
              </div>
            </a>
          )}

          {/* WhatsApp */}
          {contact.whatsapp && (
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl border border-[#e8e8e4] p-6 flex items-center gap-4 hover:border-[#2d6a4f] hover:shadow-md transition-all"
            >
              <span className="w-12 h-12 rounded-xl bg-[#f8f8f6] border border-[#e8e8e4] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2d6a4f]/10 transition-colors">
                <svg className="w-5 h-5 text-[#2d6a4f]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </span>
              <div>
                <p className="text-xs font-bold text-[#888880] uppercase tracking-wide mb-0.5">WhatsApp</p>
                <p className="font-semibold text-[#1d3461]">Stuur een bericht</p>
              </div>
            </a>
          )}

          {/* Locatie */}
          {contact.locatie && (
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(contact.locatie)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl border border-[#e8e8e4] p-6 flex items-center gap-4 hover:border-[#5e99f7] hover:shadow-md transition-all"
            >
              <span className="w-12 h-12 rounded-xl bg-[#f8f8f6] border border-[#e8e8e4] flex items-center justify-center flex-shrink-0 group-hover:bg-[#5e99f7]/10 transition-colors">
                <svg className="w-5 h-5 text-[#5e99f7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </span>
              <div>
                <p className="text-xs font-bold text-[#888880] uppercase tracking-wide mb-0.5">Locatie</p>
                <p className="font-semibold text-[#1d3461]">{contact.locatie}</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
