import { Access } from "@/components/access";
import { Club } from "@/components/club";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Join } from "@/components/join";
import { Pricing } from "@/components/pricing";
import { Ranges } from "@/components/ranges";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenu">
        <Hero />
        <Ranges />
        <Access />
        <Pricing />
        <Join />
        <Club />
        <Footer />
      </main>
    </>
  );
}
