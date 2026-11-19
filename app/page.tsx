import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Showreel from "@/components/sections/Showreel";
import Works from "@/components/sections/Works";
import Reputation from "@/components/sections/Reputation";
import Services from "@/components/sections/Services";
import Numbers from "@/components/sections/Numbers";
import Faq from "@/components/sections/Faq";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Articles from "@/components/sections/Articles";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Showreel />
        <Works />
        <Reputation />
        <Services />
        <Numbers />
        <Faq />
        <Pricing />
        <Testimonials />
        <Articles />
        <Footer />
      </main>
    </>
  );
}
