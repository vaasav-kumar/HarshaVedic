import { Link } from "react-router";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { getAllBlogPosts, getReadingTimeMinutes } from "../config/blogPosts";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function LatestArticles() {
  const posts = getAllBlogPosts().slice(0, 6);

  return (
    <section
      id="articles"
      className="py-16 md:py-20 bg-gradient-to-br from-white via-green-50/40 to-amber-50/40"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-green-800 rounded-full text-sm shadow-sm border border-green-200 mb-4">
            <BookOpen size={16} className="text-green-600" />
            <span className="font-semibold">Ayurveda Health Guides</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Latest Ayurveda Articles
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert insights on Panchakarma, chronic conditions, and natural
            remedies from Dr. Harsita Devi J.K.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col bg-white rounded-2xl shadow-sm border border-green-100 hover:shadow-lg hover:border-green-300 transition-all overflow-hidden"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="relative h-44 overflow-hidden">
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
              <div className="flex flex-col flex-1 p-5">
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
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-snug mb-2 line-clamp-2">
                    {post.h1}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4 line-clamp-2">
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

        <div className="text-center mt-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl shadow-md transition-colors"
          >
            View all articles
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
