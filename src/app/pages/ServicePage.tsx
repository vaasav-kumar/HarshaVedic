import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingCTA } from "../components/FloatingCTA";
import { OnlineConsultation } from "../components/OnlineConsultation";
import { SeoHead } from "../components/SeoHead";
import { ServiceStructuredData } from "../components/ServiceStructuredData";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { BUSINESS, FORMATTED_ADDRESS } from "../config/seo";
import { CLINIC_LOCATION_TEXT, getServicePage } from "../config/servicePages";

type ServicePageProps = {
  slug: string;
};

export function ServicePageView({ slug }: ServicePageProps) {
  const page = getServicePage(slug);

  if (!page) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <Link to="/" className="text-green-700 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedPages = page.relatedSlugs
    .map((s) => getServicePage(s))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SeoHead
        title={page.title}
        description={page.metaDescription}
        keywords={page.keywords}
        path={`/${page.slug}`}
      />
      <ServiceStructuredData page={page} />
      <Header />
      <main id="main-content" className="min-w-0">
        {/* Hero */}
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
                <li>
                  <Link
                    to="/treatments"
                    className="hover:text-green-700 transition"
                  >
                    Treatments
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-green-700 font-medium">{page.h1}</li>
              </ol>
            </nav>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-green-800 rounded-full text-sm shadow-lg border border-green-200">
                  <Sparkles size={16} className="text-green-600" />
                  <span className="font-semibold">
                    Ayurvedic Treatment in Chennai
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {page.h1}
                </h1>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {page.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg"
                  >
                    <a href="#consultation">
                      Book Consultation
                      <ArrowRight className="ml-2" size={18} />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-green-600 text-green-700">
                    <a href={BUSINESS.phoneTel}>
                      <Phone className="mr-2" size={18} />
                      Call {BUSINESS.phone.replace("+91-", "")}
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={page.heroImage}
                  alt={page.h1}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                About This Treatment
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {page.overview}
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-green-50 to-amber-50">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Benefits
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {page.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm"
                >
                  <CheckCircle
                    className="text-green-600 flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatments / Programs */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-white via-green-50/50 to-amber-50/50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {page.treatmentsSectionTitle ?? "Our Treatment Approach"}
              </h2>
              {page.treatmentsSectionSubtitle && (
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {page.treatmentsSectionSubtitle}
                </p>
              )}
            </div>
            <div
              className={
                page.treatments.some((t) => t.image)
                  ? "grid sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6 max-w-7xl mx-auto"
                  : "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
              }
            >
              {page.treatments.map((treatment, i) =>
                treatment.image ? (
                  <Card
                    key={i}
                    className="group overflow-hidden border-0 bg-white shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                  >
                    <div className="relative h-44 sm:h-48 overflow-hidden">
                      <ImageWithFallback
                        src={treatment.image}
                        alt={treatment.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      {treatment.duration && (
                        <span className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-green-800 text-xs font-semibold rounded-full shadow-sm">
                          {treatment.duration}
                        </span>
                      )}
                      <span className="absolute bottom-3 left-3 w-8 h-8 bg-green-600/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {i + 1}
                      </span>
                    </div>
                    <CardHeader className="pb-2 pt-5">
                      <CardTitle className="text-base sm:text-lg text-green-800 leading-snug group-hover:text-green-700 transition-colors">
                        {treatment.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 pb-5">
                      <CardDescription className="text-gray-600 leading-relaxed text-sm">
                        {treatment.description}
                      </CardDescription>
                    </CardContent>
                    <div className="h-1 bg-gradient-to-r from-green-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Card>
                ) : (
                  <Card
                    key={i}
                    className="border-green-100 hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg text-green-800">
                        {treatment.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {treatment.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Why Choose Us + Location */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-green-900 to-green-800 text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Why Choose Harsha Vedic?
                </h2>
                <ul className="space-y-4">
                  {page.whyChooseUs.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle
                        className="text-amber-400 flex-shrink-0 mt-0.5"
                        size={20}
                      />
                      <span className="text-green-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Visit Our Clinic
                </h2>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="text-amber-400 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="text-green-100 leading-relaxed">
                      {FORMATTED_ADDRESS}
                    </p>
                    <p className="text-green-200 text-sm mt-2">
                      {CLINIC_LOCATION_TEXT}
                    </p>
                  </div>
                </div>
                <p className="text-green-200 text-sm">
                  Looking for an Ayurvedic doctor near me? We serve patients across
                  South Chennai with both in-person and online consultations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {page.faq.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-gray-900">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Related Treatments */}
        {relatedPages.length > 0 && (
          <section className="py-12 md:py-16 bg-gradient-to-br from-white via-green-50 to-amber-50">
            <div className="container mx-auto px-4 sm:px-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                Related Ayurvedic Treatments
              </h2>
              <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {relatedPages.map(
                  (related) =>
                    related && (
                      <Link
                        key={related.slug}
                        to={`/${related.slug}`}
                        className="group bg-white p-5 rounded-xl shadow-sm hover:shadow-lg transition-all border border-green-100 hover:border-green-300"
                      >
                        <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                          {related.h1}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                          {related.subtitle}
                        </p>
                      </Link>
                    ),
                )}
              </div>
            </div>
          </section>
        )}

        <OnlineConsultation />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
