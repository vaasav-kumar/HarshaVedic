import { useEffect } from "react";
import { SITE_NAME, SITE_URL } from "../config/seo";

type SeoHeadProps = {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  author?: string;
};

function setMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export function SeoHead({
  title,
  description,
  keywords,
  path = "/",
  ogType = "website",
  publishedTime,
  author,
}: SeoHeadProps) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const ogTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setLink("canonical", url);

    setMeta("og:type", ogType, true);
    setMeta("og:url", url, true);
    setMeta("og:title", ogTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:image", `${SITE_URL}/og-image.jpg`, true);
    setMeta("og:site_name", SITE_NAME, true);
    if (publishedTime) {
      setMeta("article:published_time", publishedTime, true);
    }
    if (author) {
      setMeta("article:author", author, true);
    }

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:url", url);
    setMeta("twitter:title", ogTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", `${SITE_URL}/og-image.jpg`);
  }, [title, description, keywords, url, ogTitle, ogType, publishedTime, author]);

  return null;
}
