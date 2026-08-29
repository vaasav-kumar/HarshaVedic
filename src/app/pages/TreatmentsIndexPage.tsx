import { Link } from "react-router";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingCTA } from "../components/FloatingCTA";
import { SeoHead } from "../components/SeoHead";
import { TreatmentsIndexStructuredData } from "../components/TreatmentsIndexStructuredData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { LOCAL_AREAS, SITE_NAME } from "../config/seo";
import { SERVICE_PAGES } from "../config/servicePages";

export function TreatmentsIndexPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SeoHead
        title={`Ayurvedic Treatments in Medavakkam, Chennai | ${SITE_NAME}`}
        description={`Explore Ayurvedic treatments at Harsha Vedic — Kerala Panchakarma, knee pain, back pain, migraine, PCOS, diabetes, fatty liver, weight loss & skin care. Dr. Harsita Devi, Medavakkam, Chennai.`}
        keywords="Ayurvedic treatments Chennai, Panchakarma Medavakkam, knee pain Ayurveda, back pain treatment, PCOS Ayurveda, diabetes Ayurveda, fatty liver Ayurveda, Ayurvedic doctor near me"
        path="/treatments"
      />
      <TreatmentsIndexStructuredData />
      <Header />
      <main id="main-content" className="min-w-0">
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-amber-50 to-green-100" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-gray-600">
                <li>
                  <Link to="/" className="hover:text-green-700 transition">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-green-700 font-medium">Treatments</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-green-800 rounded-full text-sm shadow-lg border border-green-200 mb-6">
                <Stethoscope size={16} className="text-green-600" />
                <span className="font-semibold">Ayurvedic Treatments</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Ayurvedic Treatments in Medavakkam, Chennai
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Harsha Vedic offers specialized Ayurvedic treatments for pain
                management, women's health, metabolic conditions, and detox
                therapy. Dr. Harsita Devi provides personalized natural healing
                for patients from {LOCAL_AREAS}, and across Chennai — in-person
                or online.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {SERVICE_PAGES.map((page) => (
                <article
                  key={page.slug}
                  className="group flex flex-col bg-white rounded-2xl shadow-sm border border-green-100 hover:shadow-lg hover:border-green-300 transition-all overflow-hidden"
                >
                  <Link to={`/${page.slug}`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={page.heroImage}
                        alt={page.h1}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <div className="flex flex-col flex-1 p-5 md:p-6">
                    <Link to={`/${page.slug}`}>
                      <h2 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-snug mb-2">
                        {page.h1}
                      </h2>
                    </Link>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                      {page.subtitle}
                    </p>
                    <Link
                      to={`/${page.slug}`}
                      className="inline-flex items-center gap-1 text-green-700 font-semibold text-sm hover:gap-2 transition-all"
                    >
                      Learn more
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
