import {
  BUSINESS,
  SITE_NAME,
  SITE_URL,
} from "../config/seo";
import { getBlogPostUrl, type BlogPost } from "../config/blogPosts";

type BlogStructuredDataProps = {
  post: BlogPost;
};

export function BlogStructuredData({ post }: BlogStructuredDataProps) {
  const pageUrl = getBlogPostUrl(post.slug);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}/#article`,
        headline: post.h1,
        name: post.title,
        description: post.metaDescription,
        url: pageUrl,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        author: {
          "@type": "Person",
          name: post.author,
          jobTitle: "Certified Ayurvedic Physician",
          worksFor: {
            "@type": "MedicalBusiness",
            name: SITE_NAME,
            url: SITE_URL,
          },
        },
        publisher: {
          "@type": "MedicalBusiness",
          name: SITE_NAME,
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/og-image.jpg`,
          },
        },
        image: `${SITE_URL}/og-image.jpg`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        inLanguage: "en-IN",
        articleSection: post.category,
        keywords: post.keywords,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Articles",
            item: `${SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.h1,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "MedicalBusiness",
        "@id": `${SITE_URL}/#clinic`,
        name: SITE_NAME,
        url: SITE_URL,
        telephone: BUSINESS.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.address.street,
          addressLocality: BUSINESS.address.city,
          addressRegion: BUSINESS.address.region,
          postalCode: BUSINESS.address.postalCode,
          addressCountry: BUSINESS.address.country,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
