import {
  BUSINESS,
  SITE_NAME,
  SITE_URL,
} from "../config/seo";
import { getServicePageUrl, type ServicePage } from "../config/servicePages";

type ServiceStructuredDataProps = {
  page: ServicePage;
};

export function ServiceStructuredData({ page }: ServiceStructuredDataProps) {
  const pageUrl = getServicePageUrl(page.slug);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: page.title,
        description: page.metaDescription,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: {
          "@type": "MedicalTherapy",
          name: page.h1,
          description: page.overview,
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "MedicalTherapy",
        "@id": `${pageUrl}/#therapy`,
        name: page.h1,
        description: page.overview,
        url: pageUrl,
        provider: {
          "@type": ["MedicalBusiness", "MedicalClinic", "LocalBusiness"],
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
            name: "Treatments",
            item: `${SITE_URL}/treatments`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.h1,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
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
