export const SITE_URL = "https://www.harshavedic.in";

export const SITE_NAME = "Harsha Vedic";
export const SITE_TAGLINE =
  "Ayurveda Clinic & Wellness Center in Medavakkam, Chennai";

/** Keep ≤70 chars so search engines do not truncate the SERP title. */
export const DEFAULT_TITLE =
  "Harsha Vedic | Ayurveda Clinic & Wellness Center in Medavakkam, Chennai";

export const SURROUNDING_AREAS = [
  "Tambaram",
  "Pallikaranai",
  "Velachery",
  "Perumbakkam",
] as const;

export const LOCAL_AREAS =
  "Medavakkam, Tambaram, Pallikaranai, Velachery, and Perumbakkam";

/** Keep ≤155 chars so search engines do not truncate the SERP snippet. */
export const DEFAULT_DESCRIPTION =
  "Ayurvedic Clinic & Wellness Center in Medavakkam, Chennai by Dr. Harsita Devi J.K. Kerala Panchakarma, pain care & women's health. Book in-person or online.";

export const SEO_KEYWORDS =
  "Ayurvedic clinic in Medavakkam, Ayurveda clinic Medavakkam, Ayurvedic doctor Medavakkam, Ayurveda treatment Medavakkam, Panchakarma Medavakkam, Ayurvedic consultation Medavakkam, Ayurvedic wellness centre Medavakkam, Harsha Vedic, Chennai";

/** Target local search themes — distribute naturally across pages, not in Business Profile description. */
export const LOCAL_SEO_KEYWORDS = {
  core: [
    "Ayurvedic clinic in Medavakkam",
    "Ayurveda clinic Medavakkam",
    "Ayurvedic doctor Medavakkam",
    "Ayurveda treatment Medavakkam",
    "Panchakarma Medavakkam",
    "Ayurvedic consultation Medavakkam",
  ],
  therapy: [
    "Abhyanga Medavakkam",
    "Shirodhara Medavakkam",
    "Ayurvedic massage Medavakkam",
    "Panchakarma therapy Chennai",
    "Ayurvedic wellness centre Medavakkam",
  ],
  conditions: [
    "PCOS Ayurveda Medavakkam",
    "PCOD Ayurveda Medavakkam",
    "Ayurvedic weight management Chennai",
    "Ayurvedic joint pain care",
    "Ayurvedic skin and hair care",
    "women's wellness Ayurveda",
  ],
} as const;

export const BUSINESS = {
  name: SITE_NAME,
  doctor: "Dr. Harsita Devi J.K.",
  email: "harshavedic@gmail.com",
  phone: "+91-7904094949",
  phoneTel: "tel:+917904094949",
  whatsapp: "https://wa.me/917904094949",
  address: {
    street: "Plot no 4, shop no 7, 1st floor, Velachery main road, Medavakkam",
    city: "Chennai",
    region: "Tamil Nadu",
    postalCode: "600100",
    country: "IN",
  },
  geo: {
    latitude: 12.9193,
    longitude: 80.1873,
  },
  hours: [
    {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "20:30",
    },
    { days: ["Sunday"], opens: "10:00", closes: "17:00" },
  ],
  social: {
    instagram: "https://www.instagram.com/harsha_vedic",
    linkedin: "https://www.linkedin.com/in/dr-harsita-kamlesh-335a4b238/",
  },
  rating: {
    value: 4.9,
    count: 100,
  },
} as const;

export const FORMATTED_ADDRESS = `${BUSINESS.address.street}, ${BUSINESS.address.city} - ${BUSINESS.address.postalCode}`;

export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.851904383731!2d80.1872607763563!3d12.917238387393244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d1df7440411%3A0x1bbbbda3e6ba5d18!2sHarsha%20Vedic%20Ayurveda%20Clinic%20%26%20Wellness%20Center!5e0!3m2!1sen!2sin!4v1787947168322!5m2!1sen!2sin";

export const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.geo.latitude},${BUSINESS.geo.longitude}`;

export const SERVICES = [
  {
    name: "Kerala Panchakarma & Detox Therapy",
    description:
      "Authentic Kerala Panchakarma detox therapy for deep cleansing, toxin elimination, and natural healing",
    url: "/panchakarma",
  },
  {
    name: "Pain Management",
    description:
      "Ayurvedic joint pain care for knee pain, arthritis, and stiffness at our clinic in Medavakkam, Chennai",
    url: "/knee-pain-treatment",
  },
  {
    name: "Migraine Ayurvedic Treatment",
    description:
      "Root-cause Ayurvedic treatment for chronic migraines and headaches",
    url: "/migraine-treatment",
  },
  {
    name: "Women's Health",
    description:
      "Women's wellness Ayurveda for PCOS, PCOD, hormonal balance, and fertility support by an experienced Ayurveda doctor in Medavakkam",
    url: "/pcos-treatment",
  },
  {
    name: "Weight Loss Ayurveda",
    description:
      "Ayurvedic weight management through metabolic balance and detox — sustainable results in Chennai",
    url: "/weight-loss",
  },
  {
    name: "Ayurvedic Skin Care",
    description:
      "Ayurvedic skin and hair care for acne, eczema, pigmentation, hair fall, and rejuvenation",
    url: "/skin-care",
  },
  {
    name: "Back Pain Ayurvedic Treatment",
    description:
      "Natural Ayurvedic back pain treatment for sciatica, lumbar pain, and cervical spondylosis at our clinic in Medavakkam, Chennai",
    url: "/back-pain-treatment",
  },
  {
    name: "Ayurvedic Diabetes Treatment",
    description:
      "Holistic Ayurvedic diabetes treatment for blood sugar management and metabolic balance",
    url: "/diabetes-treatment",
  },
  {
    name: "Ayurvedic Fatty Liver Treatment",
    description:
      "Natural Ayurvedic fatty liver treatment with liver detox, herbal medicine, and diet management",
    url: "/fatty-liver-treatment",
  },
  {
    name: "Herbal Treatments",
    description:
      "Custom herbal formulations prepared according to your specific health needs",
  },
  {
    name: "Therapeutic Massages",
    description:
      "Ayurvedic massage in Medavakkam — Abhyanga, Shirodhara, and traditional therapeutic bodywork",
  },
  {
    name: "Stress Relief",
    description:
      "Ayurvedic therapies for stress relief, anxiety, and emotional balance through natural healing",
  },
  {
    name: "Ayurvedic Consultation",
    description:
      "Book an Ayurvedic consultation Medavakkam with Dr. Harsita Devi J.K. — in-person at our wellness centre or online",
  },
  {
    name: "Wellness Programs",
    description:
      "Personalised multi-day Ayurvedic wellness programmes — weekend rejuvenation, 7-day reset, women's wellness, and lifestyle management in Medavakkam, Chennai",
    url: "/wellness-programs",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Gowsalya",
    location: "Madurai",
    text: "After years of suffering from migraines, Dr. Harsita Devi J.K.'s Ayurvedic treatment gave me relief within weeks. Her personalized approach made all the difference.",
    rating: 5,
  },
  {
    name: "Promod",
    location: "Chennai",
    text: "The Panchakarma detox program was life-changing. I feel energized and my digestive problems have completely resolved. Highly recommend!",
    rating: 5,
  },
  {
    name: "Prathiba",
    location: "Madurai",
    text: "The holistic treatments and Dr. Harsita's compassionate care helped me overcome anxiety naturally. I'm grateful for the online consultation option.",
    rating: 5,
  },
  {
    name: "Vikram",
    location: "Chennai",
    text: "My arthritis pain reduced significantly with the Ayurvedic therapies. The herbal oils and massages work wonders. Thank you, Harsha Vedic!",
    rating: 5,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is Ayurveda and how can it help me?",
    answer:
      "Ayurveda is a 5,000-year-old holistic healing system from India that treats the root cause of illness rather than symptoms. At Harsha Vedic, our Ayurvedic clinic in Medavakkam, Chennai, Dr. Harsita Devi J.K. uses personalized natural healing treatments based on your unique body constitution (Prakriti) to restore balance and promote long-term wellness.",
  },
  {
    question: "How do I book an Ayurvedic consultation?",
    answer:
      "You can book an Ayurvedic consultation directly on this website using the consultation form, call us at +91-7904094949, or message us on WhatsApp. Dr. Harsita Devi J.K., an experienced Ayurveda doctor, offers video consultations with the same personalized care as in-person visits at our Medavakkam clinic.",
  },
  {
    question: "What is a Prakriti assessment?",
    answer:
      "Prakriti is your unique Ayurvedic body constitution determined by the balance of three doshas: Vata, Pitta, and Kapha. Our Prakriti assessment helps identify your constitution and current imbalances, enabling Dr. Harsita Devi J.K. to create a tailored treatment and diet plan.",
  },
  {
    question: "What conditions does Harsha Vedic treat?",
    answer:
      "We treat a wide range of conditions including chronic migraines, digestive disorders, arthritis, diabetes, stress, anxiety, skin and hair issues, PCOS, and lifestyle-related imbalances. Our Ayurveda treatment in Medavakkam includes Kerala Panchakarma, Ayurvedic joint pain care, women's wellness, Abhyanga and Shirodhara therapies, herbal medicine, and personalized diet management.",
  },
  {
    question: "Where is Harsha Vedic clinic located?",
    answer: `Harsha Vedic is located at Plot no 4, shop no 7, 1st floor, Velachery main road, Medavakkam, Chennai – 600100. We serve patients from ${LOCAL_AREAS}, and across Chennai. We are open Mon–Sat 10:00 AM – 8:30 PM and Sun 10:00 AM – 5:00 PM. Online consultations are available for patients across India.`,
  },
  {
    question: "Are Ayurvedic treatments safe?",
    answer:
      "Yes. When prescribed by a certified Ayurvedic physician like Dr. Harsita Devi J.K., treatments use natural herbs and therapies tailored to your constitution. All treatments are personalized after a thorough consultation to ensure safety and effectiveness.",
  },
] as const;
