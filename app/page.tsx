import Header from "@/components/site/Header"
import HeroSection from "@/components/site/HeroSection"
import DienstenSection from "@/components/site/DienstenSection"
import OverMijSection from "@/components/site/OverMijSection"
import ContactSection from "@/components/site/ContactSection"
import Footer from "@/components/site/Footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <DienstenSection />
        <OverMijSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
