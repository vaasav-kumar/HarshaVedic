import { SITE_NAME, SITE_URL } from "../config/seo";
import { SERVICE_PAGES } from "../config/servicePages";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/treatments/#webpage`,
      url: `${SITE_URL}/treatments`,
      name: `Ayurvedic Treatments | ${SITE_NAME}`,
      description:
        "Specialized Ayurvedic treatments including Kerala Panchakarma, pain management, women's health, diabetes, fatty liver, and skin care in Medavakkam, Chennai.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      inLanguage: "en-IN",
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/treatments/#list`,
      name: "Ayurvedic Treatments",
      numberOfItems: SERVICE_PAGES.length,
      itemListElement: SERVICE_PAGES.map((page, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: page.h1,
        url: `${SITE_URL}/${page.slug}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/treatments/#breadcrumb`,
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
          name: "Treatments",
          item: `${SITE_URL}/treatments`,
        },
      ],
    },
  ],
};

export function TreatmentsIndexStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
