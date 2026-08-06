import { Link } from "react-router";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Phone,
  User,
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingCTA } from "../components/FloatingCTA";
import { OnlineConsultation } from "../components/OnlineConsultation";
import { SeoHead } from "../components/SeoHead";
import { BlogStructuredData } from "../components/BlogStructuredData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  getBlogPost,
  getReadingTimeMinutes,
  type BlogPost,
} from "../config/blogPosts";
import { getServicePage } from "../config/servicePages";
import { BUSINESS } from "../config/seo";

type BlogPostPageProps = {
  slug: string;
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ArticleBody({ post }: { post: BlogPost }) {
  return (
    <div className="space-y-10">
      {post.sections.map((section, i) => (
        <section key={i}>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            {section.heading}
          </h2>
          {section.paragraphs?.map((paragraph, j) => (
            <p
              key={j}
              className="text-gray-700 leading-relaxed text-base md:text-lg mb-4 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
          {section.bullets && (
            <ul className="space-y-3 mt-2">
              {section.bullets.map((bullet, j) => (
                <li key={j} className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-600 flex-shrink-0 mt-1"
                    size={18}
                  />
                  <span className="text-gray-700 leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

export function BlogPostPageView({ slug }: BlogPostPageProps) {
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h1>
          <Link to="/blog" className="text-green-700 hover:underline">
            Browse all articles
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = post.relatedSlugs
    .map((s) => getBlogPost(s))
    .filter(Boolean);

  const relatedServices = post.relatedServiceSlugs
    .map((s) => getServicePage(s))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SeoHead
        title={post.title}
        description={post.metaDescription}
        keywords={post.keywords}
        path={`/blog/${post.slug}`}
        ogType="article"
        publishedTime={post.publishedAt}
        author={post.author}
      />
      <BlogStructuredData post={post} />
      <Header />
      <main id="main-content" className="min-w-0">
        <section className="relative pt-24 pb-8 md:pt-32 md:pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-amber-50 to-green-100" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
                <li>
                  <Link to="/" className="hover:text-green-700 transition">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link to="/blog" className="hover:text-green-700 transition">
                    Articles
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-green-700 font-medium line-clamp-1">
                  {post.category}
                </li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <Badge className="bg-green-700 hover:bg-green-700 text-white border-0 mb-4">
                {post.category}
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {post.h1}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1.5">
                  <User size={16} className="text-green-600" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={16} className="text-green-600" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={16} className="text-green-600" />
                  {getReadingTimeMinutes(post)} min read
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-lg mb-10">
                <ImageWithFallback
                  src={post.heroImage}
                  alt={post.h1}
                  className="w-full h-56 md:h-72 object-cover"
                />
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium border-l-4 border-green-600 pl-4 mb-10">
                {post.excerpt}
              </p>
              <ArticleBody post={post} />
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 bg-gradient-to-br from-green-50 to-amber-50">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-green-100 text-center">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Need Personalized Ayurvedic Care?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Every body is different. Book a consultation with{" "}
                {post.author} for a treatment plan tailored to your
                constitution and health goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg"
                >
                  <a href="#consultation">
                    Book Consultation
                    <ArrowRight className="ml-2" size={18} />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-green-600 text-green-700"
                >
                  <a href={BUSINESS.phoneTel}>
                    <Phone className="mr-2" size={18} />
                    Call {BUSINESS.phone.replace("+91-", "")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {post.faq.length > 0 && (
          <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {post.faq.map((item, i) => (
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
        )}

        {relatedPosts.length > 0 && (
          <section className="py-12 md:py-16 bg-gradient-to-br from-white via-green-50 to-amber-50">
            <div className="container mx-auto px-4 sm:px-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {relatedPosts.map(
                  (related) =>
                    related && (
                      <Link
                        key={related.slug}
                        to={`/blog/${related.slug}`}
                        className="group bg-white p-5 rounded-xl shadow-sm hover:shadow-lg transition-all border border-green-100 hover:border-green-300"
                      >
                        <Badge
                          variant="outline"
                          className="text-green-700 border-green-300 mb-2"
                        >
                          {related.category}
                        </Badge>
                        <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                          {related.h1}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                          {related.excerpt}
                        </p>
                      </Link>
                    ),
                )}
              </div>
            </div>
          </section>
        )}

        {relatedServices.length > 0 && (
          <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                Related Treatments at Harsha Vedic
              </h2>
              <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {relatedServices.map(
                  (service) =>
                    service && (
                      <Link
                        key={service.slug}
                        to={`/${service.slug}`}
                        className="group bg-gradient-to-br from-green-50 to-amber-50 p-5 rounded-xl shadow-sm hover:shadow-lg transition-all border border-green-100 hover:border-green-300"
                      >
                        <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                          {service.h1
                            .replace(" in Chennai", "")
                            .replace(" in Medavakkam, Chennai", "")}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                          {service.subtitle}
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
