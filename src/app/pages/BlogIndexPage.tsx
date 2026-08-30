import { Link } from "react-router";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingCTA } from "../components/FloatingCTA";
import { SeoHead } from "../components/SeoHead";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { getAllBlogPosts, getReadingTimeMinutes } from "../config/blogPosts";
import { BlogIndexStructuredData } from "../components/BlogIndexStructuredData";
import { SITE_NAME } from "../config/seo";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SeoHead
        title={`Ayurveda Articles & Health Guides | ${SITE_NAME}`}
        description="Expert Ayurveda articles on Panchakarma, chronic conditions, diet, and natural remedies. Written by Dr. Harsita Devi J.K. — your trusted Ayurvedic physician in Chennai."
        keywords="Ayurveda articles, Panchakarma guide, Ayurvedic health tips, Ayurveda blog Chennai, natural remedies Ayurveda"
        path="/blog"
      />
      <BlogIndexStructuredData />
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
                <li className="text-green-700 font-medium">Articles</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-green-800 rounded-full text-sm shadow-lg border border-green-200 mb-6">
                <BookOpen size={16} className="text-green-600" />
                <span className="font-semibold">Ayurveda Health Guides</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Ayurveda Articles & Wellness Guides
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Evidence-informed Ayurvedic insights on Panchakarma, chronic
                conditions, diet, and natural remedies — written by{" "}
                {SITE_NAME}'s certified physician to help you make informed health
                decisions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col bg-white rounded-2xl shadow-sm border border-green-100 hover:shadow-lg hover:border-green-300 transition-all overflow-hidden"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={post.heroImage}
                        alt={post.h1}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-green-700/90 hover:bg-green-700 text-white border-0">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                  </Link>
                  <div className="flex flex-col flex-1 p-5 md:p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {getReadingTimeMinutes(post)} min read
                      </span>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-snug mb-2">
                        {post.h1}
                      </h2>
                    </Link>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-green-700 font-semibold text-sm hover:gap-2 transition-all"
                    >
                      Read article
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
