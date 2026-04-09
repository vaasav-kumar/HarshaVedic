/**
 * Injects JSON-LD structured data for SEO (MedicalBusiness + Physician).
 * Helps search engines understand the clinic and show rich results.
 */
const SITE_URL = "https://harshavedic.vercel.app/";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: "Harsha Vedic",
      description:
        "Authentic Ayurvedic treatments by Dr. Harsita Devi. Book online or in-person consultation. Prakriti assessment, holistic wellness, and personalized care.",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      sameAs: [
        "https://www.instagram.com/harsha_vedic",
        "https://www.linkedin.com/in/harsita-kamlesh-335a4b238/",
      ],
      medicalSpecialty: "Ayurvedic medicine",
    },
    {
      "@type": "Physician",
      "@id": `${SITE_URL}/#physician`,
      name: "Dr. Harsita Devi",
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
      name: "Harsha Vedic – Ayurvedic Clinic",
      description:
        "Authentic Ayurvedic treatments by Dr. Harsita Devi. Book online or in-person consultation.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
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
