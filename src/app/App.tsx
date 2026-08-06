import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ServicePageView } from "./pages/ServicePage";
import { BlogIndexPage } from "./pages/BlogIndexPage";
import { BlogPostPageView } from "./pages/BlogPostPage";
import { ScrollToHash } from "./components/ScrollToHash";
import { SERVICE_PAGES } from "./config/servicePages";
import { BLOG_POSTS } from "./config/blogPosts";

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        {BLOG_POSTS.map((post) => (
          <Route
            key={post.slug}
            path={`/blog/${post.slug}`}
            element={<BlogPostPageView slug={post.slug} />}
          />
        ))}
        {SERVICE_PAGES.map((page) => (
          <Route
            key={page.slug}
            path={`/${page.slug}`}
            element={<ServicePageView slug={page.slug} />}
          />
        ))}
      </Routes>
    </>
  );
}
