import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import StockQuote from "@/components/StockQuote";
import NewsFeed from "@/components/NewsFeed";
import Rockets from "@/components/Rockets";
import Ecosystem from "@/components/Ecosystem";
import Timeline from "@/components/Timeline";
import Faq from "@/components/Faq";
import DeveloperNote from "@/components/DeveloperNote";
import LearnMore from "@/components/LearnMore";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StockQuote />
        <NewsFeed />
        <Rockets />
        <Ecosystem />
        <Timeline />
        <Faq />
        <DeveloperNote />
        <LearnMore />
      </main>
      <Footer />
    </>
  );
}
