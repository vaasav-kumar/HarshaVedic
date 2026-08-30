import { SITE_NAME, SITE_URL } from "../config/seo";
import { getAllBlogPosts } from "../config/blogPosts";

const posts = getAllBlogPosts();

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": `${SITE_URL}/blog/#blog`,
      url: `${SITE_URL}/blog`,
      name: `Ayurveda Articles | ${SITE_NAME}`,
      description:
        "Expert Ayurveda articles on Panchakarma, chronic conditions, diet, and natural remedies by Dr. Harsita Devi J.K.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/blog/#webpage`,
      url: `${SITE_URL}/blog`,
      name: `Ayurveda Articles & Health Guides | ${SITE_NAME}`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/blog/#blog` },
      inLanguage: "en-IN",
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/blog/#list`,
      name: "Ayurveda Articles",
      numberOfItems: posts.length,
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.h1,
        url: `${SITE_URL}/blog/${post.slug}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/blog/#breadcrumb`,
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
      ],
    },
  ],
};

export function BlogIndexStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
