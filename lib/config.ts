// ─── Klantconfiguratie ────────────────────────────────────────────────────────
// Pas dit bestand aan voor elke klant. Alle site-specifieke waarden staan hier.

export const siteConfig = {
  // Identiteit
  naam: "Klant Naam",
  tagline: "Jouw pakkende tagline hier",
  beschrijving: "Korte beschrijving van de diensten voor SEO en social sharing.",
  url: "https://www.jouwdomein.nl",

  // Kleurenpalet (CSS hex-waarden)
  kleuren: {
    primair:      "#1d3461", // hoofdkleur — koppen, knoppen, nav
    accent:       "#5e99f7", // accenten, actieve states, links
    cta:          "#c70015", // call-to-action knoppen
    success:      "#2d6a4f", // bevestiging, positief
    achtergrond:  "#f8f8f6", // pagina-achtergrond
    rand:         "#e8e8e4", // borders
    tekst:        "#1a1a1a", // bodytekst
    gedempt:      "#888880", // muted text, subtitels
  },

  // Navigatielinks
  nav: [
    { label: "Home",      href: "/" },
    { label: "Diensten",  href: "#diensten" },
    { label: "Over mij",  href: "#over-mij" },
    { label: "Contact",   href: "#contact" },
  ],

  // Hero-sectie
  hero: {
    titel:    "Welkom bij Klant Naam",
    subtitel: "Beschrijving van wat je doet, voor wie, en wat het oplevert.",
    ctaTekst: "Neem contact op",
    ctaHref:  "#contact",
  },

  // Diensten
  diensten: [
    {
      id:           "dienst-1",
      naam:         "Dienst 1",
      beschrijving: "Korte beschrijving van wat deze dienst inhoudt en wat de klant ervan krijgt.",
      duur:         "60 min",
      prijs:        "€60",
      icon:         "💪",
    },
    {
      id:           "dienst-2",
      naam:         "Dienst 2",
      beschrijving: "Korte beschrijving van wat deze dienst inhoudt en wat de klant ervan krijgt.",
      duur:         "90 min",
      prijs:        "€85",
      icon:         "🧘",
    },
    {
      id:           "dienst-3",
      naam:         "Dienst 3",
      beschrijving: "Korte beschrijving van wat deze dienst inhoudt en wat de klant ervan krijgt.",
      duur:         "45 min",
      prijs:        "€45",
      icon:         "✨",
    },
  ],

  // Over mij
  overMij: {
    naam:     "Voornaam Achternaam",
    functie:  "Personal Trainer / Coach",
    bio:      "Vertel hier wie je bent, wat je achtergrond is en waarom je doet wat je doet. Wat drijft je? Wat maakt jou anders? Wees persoonlijk.",
    // foto:  "/images/profielfoto.jpg", // zet foto in /public/images/
  },

  // Contactgegevens
  contact: {
    tel:       "+31 6 00 00 00 00",
    email:     "info@jouwdomein.nl",
    locatie:   "Plaatsnaam, Nederland",
    whatsapp:  "+31600000000",
  },

  // Social media (leeg laten als niet van toepassing)
  social: {
    instagram: "",
    facebook:  "",
    linkedin:  "",
  },

  // Supabase tabel-prefix — verander per klant om botsingen te voorkomen
  dbPrefix: "ktv_",
} as const

export type SiteConfig = typeof siteConfig
