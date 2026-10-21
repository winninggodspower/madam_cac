import {
  CTA, FAQ, Footer, Hero, Navbar, Process, Services, Testimonials, TrustBar, WhatsAppFloat,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
