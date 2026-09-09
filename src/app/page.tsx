import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Rockets from "@/components/Rockets";
import Timeline from "@/components/Timeline";
import Faq from "@/components/Faq";
import LearnMore from "@/components/LearnMore";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Rockets />
        <Timeline />
        <Faq />
        <LearnMore />
      </main>
      <Footer />
    </>
  );
}
