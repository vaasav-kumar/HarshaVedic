import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { PrakritiAssessment } from "./components/PrakritiAssessment";
import { Services } from "./components/Services";
// import { Products } from './components/Products';
import { Testimonials } from "./components/Testimonials";
import { OnlineConsultation } from "./components/OnlineConsultation";
import { Footer } from "./components/Footer";
import { SeoStructuredData } from "./components/SeoStructuredData";

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SeoStructuredData />
      <Header />
      <main className="min-w-0">
        <Hero />
        <About />
        <PrakritiAssessment />
        <Services />
        {/* <Products /> */}
        <Testimonials />
        <OnlineConsultation />
      </main>
      <Footer />
    </div>
  );
}
