export const SITE_URL = "https://www.harshavedic.in";

export const SITE_NAME = "Harsha Vedic";
export const SITE_TAGLINE =
  "Ayurveda Clinic & Wellness Center in Medavakkam, Chennai";

export const DEFAULT_TITLE =
  "Harsha Vedic | Ayurveda Clinic & Wellness Center in Medavakkam, Chennai – Kerala Panchakarma, Pain Management & Women's Health";

export const SURROUNDING_AREAS = [
  "Tambaram",
  "Pallikaranai",
  "Velachery",
  "Perumbakkam",
] as const;

export const LOCAL_AREAS =
  "Medavakkam, Tambaram, Pallikaranai, Velachery, and Perumbakkam";

export const DEFAULT_DESCRIPTION =
  "Harsha Vedic is your trusted Ayurvedic clinic in Medavakkam, Chennai, serving Tambaram, Pallikaranai, Velachery, Perumbakkam, and surrounding areas. Dr. Harsita Devi offers Kerala Panchakarma detox therapy, pain management, women's health care, stress relief, and natural healing through personalized Ayurvedic consultation — in-person or online.";

export const SEO_KEYWORDS =
  "Harsha Vedic, Ayurvedic Clinic, Wellness Center, Panchakarma, Ayurveda Doctor, Natural Healing, Ayurvedic Consultation, Kerala Panchakarma, Detox Therapy, Pain Management, Women's Health, Stress Relief, Chennai, Medavakkam, Tambaram, Pallikaranai, Velachery, Perumbakkam";

export const BUSINESS = {
  name: SITE_NAME,
  doctor: "Dr. Harsita Devi",
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
      opens: "09:00",
      closes: "19:00",
    },
    { days: ["Sunday"], opens: "10:00", closes: "16:00" },
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
      "Natural pain management for knee pain, arthritis, and joint stiffness at our Ayurvedic clinic in Medavakkam, Chennai",
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
      "Holistic women's health care for PCOS, hormonal balance, and fertility support by an experienced Ayurveda doctor",
    url: "/pcos-treatment",
  },
  {
    name: "Weight Loss Ayurveda",
    description:
      "Sustainable Ayurvedic weight management through metabolic balance and detox",
    url: "/weight-loss",
  },
  {
    name: "Ayurvedic Skin Care",
    description:
      "Natural Ayurvedic skin treatments for acne, eczema, pigmentation, and rejuvenation",
    url: "/skin-care",
  },
  {
    name: "Herbal Treatments",
    description:
      "Custom herbal formulations prepared according to your specific health needs",
  },
  {
    name: "Therapeutic Massages",
    description:
      "Traditional Ayurvedic massages including Abhyanga, Shirodhara, and more",
  },
  {
    name: "Stress Relief",
    description:
      "Ayurvedic therapies for stress relief, anxiety, and emotional balance through natural healing",
  },
  {
    name: "Ayurvedic Consultation",
    description:
      "Book an Ayurvedic consultation with Dr. Harsita Devi — in-person at Medavakkam, Chennai or online",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Gowsalya",
    location: "Madurai",
    text: "After years of suffering from migraines, Dr. Harsita Devi's Ayurvedic treatment gave me relief within weeks. Her personalized approach made all the difference.",
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
      "Ayurveda is a 5,000-year-old holistic healing system from India that treats the root cause of illness rather than symptoms. At Harsha Vedic, our Ayurvedic clinic in Medavakkam, Chennai, Dr. Harsita Devi uses personalized natural healing treatments based on your unique body constitution (Prakriti) to restore balance and promote long-term wellness.",
  },
  {
    question: "How do I book an Ayurvedic consultation?",
    answer:
      "You can book an Ayurvedic consultation directly on this website using the consultation form, call us at +91-7904094949, or message us on WhatsApp. Dr. Harsita Devi, an experienced Ayurveda doctor, offers video consultations with the same personalized care as in-person visits at our Medavakkam clinic.",
  },
  {
    question: "What is a Prakriti assessment?",
    answer:
      "Prakriti is your unique Ayurvedic body constitution determined by the balance of three doshas: Vata, Pitta, and Kapha. Our Prakriti assessment helps identify your constitution and current imbalances, enabling Dr. Harsita Devi to create a tailored treatment and diet plan.",
  },
  {
    question: "What conditions does Harsha Vedic treat?",
    answer:
      "We treat a wide range of conditions including chronic migraines, digestive disorders, arthritis, diabetes, stress, anxiety, skin issues, and lifestyle-related imbalances. Our services include Kerala Panchakarma detox therapy, pain management, women's health care, stress relief, herbal medicine, therapeutic massages, and diet management.",
  },
  {
    question: "Where is Harsha Vedic clinic located?",
    answer: `Harsha Vedic is located at Plot no 4, shop no 7, 1st floor, Velachery main road, Medavakkam, Chennai – 600100. We serve patients from ${LOCAL_AREAS}, and across Chennai. We are open Monday to Saturday, 9:00 AM – 7:00 PM, and Sunday, 10:00 AM – 4:00 PM. Online consultations are available for patients across India.`,
  },
  {
    question: "Are Ayurvedic treatments safe?",
    answer:
      "Yes. When prescribed by a certified Ayurvedic physician like Dr. Harsita Devi, treatments use natural herbs and therapies tailored to your constitution. All treatments are personalized after a thorough consultation to ensure safety and effectiveness.",
  },
] as const;
