import {
  BUSINESS,
  FAQ_ITEMS,
  SERVICES,
  SITE_NAME,
  SITE_URL,
  TESTIMONIALS,
} from "../config/seo";

function openingHoursSpecification() {
  return BUSINESS.hours.map(({ days, opens, closes }) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: days,
    opens,
    closes,
  }));
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      description:
        "Authentic Ayurvedic treatments by Dr. Harsita Devi. Book online or in-person consultation. Prakriti assessment, holistic wellness, and personalized care.",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/og-image.jpg`,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      priceRange: "$$",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, UPI, Bank Transfer",
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.region,
        postalCode: BUSINESS.address.postalCode,
        addressCountry: BUSINESS.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.geo.latitude,
        longitude: BUSINESS.geo.longitude,
      },
      openingHoursSpecification: openingHoursSpecification(),
      sameAs: [BUSINESS.social.instagram, BUSINESS.social.linkedin],
      medicalSpecialty: "Ayurvedic medicine",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Ayurvedic Services",
        itemListElement: SERVICES.map((service, index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "MedicalTherapy",
            name: service.name,
            description: service.description,
          },
        })),
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: BUSINESS.rating.value,
        reviewCount: BUSINESS.rating.count,
        bestRating: 5,
        worstRating: 1,
      },
      review: TESTIMONIALS.map((t) => ({
        "@type": "Review",
        author: { "@type": "Person", name: t.name },
        reviewRating: {
          "@type": "Rating",
          ratingValue: t.rating,
          bestRating: 5,
        },
        reviewBody: t.text,
      })),
    },
    {
      "@type": "Physician",
      "@id": `${SITE_URL}/#physician`,
      name: BUSINESS.doctor,
      description:
        "Experienced and certified Ayurvedic physician. Personalized care for holistic wellness, in-person and online consultation.",
      url: SITE_URL,
      medicalSpecialty: "Ayurvedic medicine",
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${SITE_NAME} – Ayurvedic Clinic`,
      description:
        "Authentic Ayurvedic treatments by Dr. Harsita Devi. Book online or in-person consultation.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
      ],
    },
  ],
};

export function SeoStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
