import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { PrakritiAssessment } from "../components/PrakritiAssessment";
import { Services } from "../components/Services";
import { ClinicFacilities } from "../components/ClinicFacilities";
import { Testimonials } from "../components/Testimonials";
import { LatestArticles } from "../components/LatestArticles";
import { OnlineConsultation } from "../components/OnlineConsultation";
import { Footer } from "../components/Footer";
import { FloatingCTA } from "../components/FloatingCTA";
import { SeoStructuredData } from "../components/SeoStructuredData";
import { FaqSection } from "../components/FaqSection";
import { SeoHead } from "../components/SeoHead";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SEO_KEYWORDS } from "../config/seo";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SeoHead
        title={DEFAULT_TITLE}
        description={DEFAULT_DESCRIPTION}
        keywords={SEO_KEYWORDS}
        path="/"
      />
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
        <ClinicFacilities />
        <Testimonials />
        <LatestArticles />
        <FaqSection />
        <OnlineConsultation />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
