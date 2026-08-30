import {
  BUSINESS,
  FAQ_ITEMS,
  LOCAL_AREAS,
  SERVICES,
  SITE_NAME,
  SITE_URL,
  SURROUNDING_AREAS,
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
      "@type": ["MedicalBusiness", "MedicalClinic", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      description:
        `Harsha Vedic is an Ayurvedic clinic in Medavakkam, Chennai serving ${LOCAL_AREAS}. Kerala Panchakarma detox therapy, pain management, women's health care, stress relief, and natural healing by Dr. Harsita Devi J.K.`,
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
      areaServed: [
        { "@type": "Place", name: "Medavakkam, Chennai" },
        ...SURROUNDING_AREAS.map((area) => ({
          "@type": "Place",
          name: `${area}, Chennai`,
        })),
      ],
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
            ...("url" in service && service.url
              ? { url: `${SITE_URL}${service.url}` }
              : {}),
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
        "Experienced Ayurveda doctor at Harsha Vedic, Medavakkam, Chennai. Personalized natural healing through Ayurvedic consultation — in-person and online.",
      url: SITE_URL,
      medicalSpecialty: "Ayurvedic medicine",
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${SITE_NAME} – Ayurvedic Clinic in Medavakkam, Chennai`,
      description:
        "Kerala Panchakarma detox therapy, pain management, women's health, stress relief, and Ayurvedic consultation by Dr. Harsita Devi J.K.",
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
