import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { PrakritiAssessment } from "./components/PrakritiAssessment";
import { Services } from "./components/Services";
// import { Products } from './components/Products';
import { Testimonials } from "./components/Testimonials";
import { OnlineConsultation } from "./components/OnlineConsultation";
import { Footer } from "./components/Footer";
import { FloatingCTA } from "./components/FloatingCTA";
import { SeoStructuredData } from "./components/SeoStructuredData";
import { FaqSection } from "./components/FaqSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SeoStructuredData />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-green-700 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="min-w-0">
        <Hero />
        <About />
        <PrakritiAssessment />
        <Services />
        {/* <Products /> */}
        <Testimonials />
        <FaqSection />
        <OnlineConsultation />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
