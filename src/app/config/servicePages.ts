import PanchakarmaDetox from "../../assets/panchakarma-detox.webp";
import ChronicDiseaseManagement from "../../assets/chronic-disease-management.webp";
import StressAndAnxietyRelief from "../../assets/stress-and-anxiety-relief.webp";
import AyurvedicDiabetesTreatment from "../../assets/ayurvedic-diabetes-treatment.webp";
import AyurvedicFattyLiverTreatment from "../../assets/ayurvedic-fatty-liver-treatment.webp";
import DietManagement from "../../assets/diet-management.webp";
import PCOSTreatment from "../../assets/pcos-treatment.webp";
import SkinCare from "../../assets/ayurvedic-skin-care.webp";
import TherapeuticMassages from "../../assets/therapeutic-massages.webp";
import AyurvedaFlower from "../../assets/ayurveda-flower.webp";
import HerbalTreatments from "../../assets/herbal-treatments.webp";

import {
  BUSINESS,
  FORMATTED_ADDRESS,
  LOCAL_AREAS,
  SITE_NAME,
  SITE_URL,
} from "./seo";

export type ServiceTreatment = {
  name: string;
  description: string;
  image?: string;
  duration?: string;
};

export type ServicePage = {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  benefits: string[];
  treatments: ServiceTreatment[];
  treatmentsSectionTitle?: string;
  treatmentsSectionSubtitle?: string;
  whyChooseUs: string[];
  faq: { question: string; answer: string }[];
  relatedSlugs: string[];
  relatedBlogSlugs: string[];
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "panchakarma",
    title: `Kerala Panchakarma in Medavakkam, Chennai | ${SITE_NAME}`,
    metaDescription: `Kerala Panchakarma in Medavakkam, Chennai by Dr. Harsita Devi J.K. Deep detox, toxin elimination & natural healing. Book in-person or online.`,
    keywords: `Panchakarma Medavakkam, Panchakarma therapy Chennai, Kerala Panchakarma, Ayurveda treatment Medavakkam, Ayurvedic clinic in Medavakkam, Ayurvedic consultation Medavakkam`,
    h1: "Kerala Panchakarma Treatment in Medavakkam, Chennai",
    subtitle:
      "Authentic Kerala Panchakarma detox therapy for deep cleansing, toxin elimination, and natural healing",
    heroImage: PanchakarmaDetox,
    overview: `Kerala Panchakarma is a classical Ayurvedic detox and rejuvenation programme. At ${SITE_NAME}, our Ayurvedic wellness centre in Medavakkam, Chennai, Dr. Harsita Devi J.K. offers Panchakarma selected for your body constitution (Prakriti) and current imbalances. The clinic on Velachery Main Road is accessible from ${LOCAL_AREAS}, and consultations are available online for pre-assessment and follow-up. A typical program moves through preparation (Snehana and Swedana), a main procedure such as Vamana, Virechana, Basti, or Nasya, and post-care diet guidance. People seek Panchakarma for chronic fatigue, digestive sluggishness, skin concerns, joint stiffness, stress, or a seasonal reset. The protocol is set after physician assessment.`,
    benefits: [
      "Eliminates accumulated toxins (Ama) from deep tissues",
      "Restores digestive fire (Agni) and metabolic balance",
      "Boosts immunity and natural energy levels",
      "Relieves chronic fatigue, bloating, and skin issues",
      "Rejuvenates body and mind for long-term wellness",
    ],
    treatments: [
      {
        name: "Vamana (Therapeutic Emesis)",
        description:
          "Controlled cleansing to remove excess Kapha toxins from the upper respiratory and digestive tract.",
      },
      {
        name: "Virechana (Purgation Therapy)",
        description:
          "Herbal purgation to eliminate Pitta-related toxins from the liver, gallbladder, and intestines.",
      },
      {
        name: "Basti (Medicated Enema)",
        description:
          "A primary Panchakarma procedure for Vata disorders, using herbal oils and decoctions.",
      },
      {
        name: "Nasya (Nasal Administration)",
        description:
          "Herbal oils administered through the nose to treat headaches, sinus issues, and neurological conditions.",
      },
      {
        name: "Pre-Panchakarma (Purvakarma)",
        description:
          "Snehana (oleation) and Swedana (sudation) to prepare the body for main Panchakarma procedures.",
      },
    ],
    whyChooseUs: [
      `Conveniently located on Velachery Main Road, Medavakkam – serving all of South Chennai`,
      "Panchakarma protocols planned by Ayurvedic physician Dr. Harsita Devi J.K.",
      "Authentic herbal preparations and traditional therapy techniques",
      "Flexible in-person and online consultation options",
    ],
    faq: [
      {
        question: "How long does a Panchakarma program take?",
        answer:
          "A standard Panchakarma program typically runs 7 to 21 days depending on your condition and constitution. Dr. Harsita Devi J.K. will recommend the ideal duration after your initial consultation.",
      },
      {
        question: "Is Panchakarma safe?",
        answer:
          "Panchakarma is carried out under the supervision of a qualified Ayurvedic physician. At Harsha Vedic, the protocol is set after a Prakriti assessment.",
      },
      {
        question: "Who should consider Panchakarma?",
        answer:
          "Panchakarma is beneficial for chronic fatigue, digestive disorders, skin problems, joint pain, stress, and seasonal detox. It is also recommended as a preventive wellness practice.",
      },
      {
        question: "Where is your Panchakarma clinic located?",
        answer: `Our clinic is at ${FORMATTED_ADDRESS}. We serve patients from ${LOCAL_AREAS}, and across Chennai.`,
      },
    ],
    relatedSlugs: ["weight-loss", "skin-care", "wellness-programs"],
    relatedBlogSlugs: [
      "benefits-of-panchakarma",
      "is-panchakarma-painful",
      "best-foods-after-panchakarma",
    ],
  },
  {
    slug: "knee-pain-treatment",
    title: `Ayurvedic Joint Pain Care in Medavakkam, Chennai | ${SITE_NAME}`,
    metaDescription: `Ayurvedic joint pain care in Medavakkam, Chennai by Dr. Harsita Devi J.K. Abhyanga, Janu Basti & Panchakarma for knee arthritis. Book consultation.`,
    keywords: `Ayurvedic joint pain care, knee pain Ayurvedic treatment, Abhyanga Medavakkam, Ayurvedic doctor Medavakkam, Janu Basti, Ayurveda treatment Medavakkam`,
    h1: "Ayurvedic Joint Pain Care in Medavakkam, Chennai",
    subtitle:
      "Ayurvedic joint pain care for knee pain, arthritis, and stiffness, including Abhyanga and Janu Basti",
    heroImage: ChronicDiseaseManagement,
    overview: `Chronic knee pain affects mobility and daily activity. At ${SITE_NAME} in Medavakkam, Chennai, Dr. Harsita Devi J.K. offers Ayurvedic joint care using Janu Basti, Abhyanga, herbal poultices, medicated oils, and Panchakarma. The clinic sees people from ${LOCAL_AREAS} and across Chennai for osteoarthritis, rheumatoid arthritis, and sports-related knee injuries. The plan is set after assessment, and response varies with the stage of the condition.`,
    benefits: [
      "External oil therapies and internal herbal support, chosen after assessment",
      "Care aimed at joint stiffness and day-to-day mobility",
      "May be planned alongside existing pain medication",
      "Looks at diet, activity, and dosha patterns linked with knee pain",
      "Follow-up is adjusted as the condition changes",
    ],
    treatments: [
      {
        name: "Janu Basti",
        description:
          "Warm medicated oil retained over the knee joint in a dough ring, used for osteoarthritis and chronic knee pain.",
      },
      {
        name: "Pinda Sweda (Bolus Fomentation)",
        description:
          "Herbal bolus massage to reduce inflammation, improve circulation, and relieve stiffness.",
      },
      {
        name: "Abhyanga (Therapeutic Oil Massage)",
        description:
          "Ayurvedic massage in Medavakkam — full-body or localized Abhyanga with anti-inflammatory herbal oils to nourish joints and tissues.",
      },
      {
        name: "Herbal Internal Medicine",
        description:
          "Custom Ayurvedic formulations to reduce Ama (toxins), balance Vata dosha, and support cartilage health.",
      },
      {
        name: "Diet & Lifestyle Guidance",
        description:
          "Personalized recommendations to avoid aggravating foods and activities that worsen knee pain.",
      },
    ],
    whyChooseUs: [
      "Experienced in treating arthritis, ligament injuries, and age-related knee degeneration",
      "Combination of external therapies and internal herbal medicine for comprehensive care",
      "Clinic located in Medavakkam – easy access from Velachery, Tambaram, and Pallikaranai",
      "Online follow-up consultations available for outstation patients",
    ],
    faq: [
      {
        question: "How does Ayurveda approach knee arthritis?",
        answer:
          "Ayurveda approaches knee arthritis with therapies such as Janu Basti, Abhyanga, and herbal support, chosen after assessment. Response varies with the stage of the condition and how consistently the plan is followed. Dr. Harsita Devi J.K. outlines a plan after reviewing your condition.",
      },
      {
        question: "How many sessions of Janu Basti are needed?",
        answer:
          "Typically 7 to 14 sessions are recommended, depending on the severity of your condition. Improvement is often noticed within the first few sessions.",
      },
      {
        question: "Is Ayurvedic knee treatment safe alongside allopathy?",
        answer:
          "Yes, Ayurvedic therapies can complement conventional treatment. Inform Dr. Harsita Devi J.K. about any medications you are taking for a coordinated care plan.",
      },
      {
        question: "Do you treat sports knee injuries?",
        answer:
          "Yes, we treat ligament strains, meniscus issues, and post-injury stiffness using Ayurvedic rehabilitation protocols alongside rest and herbal support.",
      },
    ],
    relatedSlugs: [
      "panchakarma",
      "back-pain-treatment",
      "weight-loss",
      "wellness-programs",
    ],
    relatedBlogSlugs: ["ayurveda-for-cervical-pain", "benefits-of-panchakarma"],
  },
  {
    slug: "migraine-treatment",
    title: `Shirodhara & Migraine Treatment in Medavakkam | ${SITE_NAME}`,
    metaDescription: `Ayurvedic migraine treatment with Shirodhara in Medavakkam, Chennai by Dr. Harsita Devi J.K. Nasya, herbs & root-cause care. Book today.`,
    keywords: `Shirodhara Medavakkam, migraine Ayurvedic treatment, headache Ayurveda Chennai, Ayurvedic doctor Medavakkam, Ayurveda treatment Medavakkam`,
    h1: "Shirodhara & Migraine Treatment in Medavakkam, Chennai",
    subtitle:
      "Ayurvedic consultation and therapies for chronic migraines, headaches, and stress",
    heroImage: StressAndAnxietyRelief,
    overview: `Ayurveda links many migraines with dosha imbalance, digestion, stress, and daily routine. At ${SITE_NAME} in Medavakkam, Dr. Harsita Devi J.K. offers Shirodhara, Nasya, herbal formulations, and diet guidance for people from ${LOCAL_AREAS} and across Chennai. Suitability and follow-up are decided after assessment. Response varies from person to person.`,
    benefits: [
      "Therapies used in Ayurvedic migraine care, selected after assessment",
      "Includes approaches aimed at stress and daily-routine triggers",
      "May look at sleep, digestion, and hormonal patterns",
      "Can be planned alongside existing migraine medication",
      "Do not stop a prescribed medicine unless the prescribing doctor advises it",
    ],
    treatments: [
      {
        name: "Shirodhara",
        description:
          "Shirodhara in Medavakkam — continuous stream of warm medicated oil on the forehead, deeply calming for migraine-prone nervous systems.",
      },
      {
        name: "Nasya Therapy",
        description:
          "Herbal oil administration through the nostrils to clear sinuses and treat headaches originating from the head and neck region.",
      },
      {
        name: "Herbal Medicine",
        description:
          "Custom formulations to balance Pitta and Vata doshas, improve digestion, and reduce migraine triggers.",
      },
      {
        name: "Panchakarma Detox",
        description:
          "Recommended for chronic migraine sufferers to eliminate deep-seated toxins contributing to recurring headaches.",
      },
      {
        name: "Diet & Trigger Management",
        description:
          "Identification and elimination of dietary and lifestyle triggers specific to your constitution.",
      },
    ],
    whyChooseUs: [
      "Shirodhara, Nasya, and herbal support selected after consultation",
      "Holistic approach addressing stress, digestion, and hormonal factors",
      "Convenient Medavakkam location with online consultation for follow-ups",
      "Gentle, natural therapies suitable for long-term migraine management",
    ],
    faq: [
      {
        question: "How is migraine care followed up?",
        answer:
          "Follow-up depends on how often attacks occur and which medicines you already take. Dr. Harsita Devi J.K. reviews your history and sets the next visit after the first consultation. Change in frequency is not the same for every person.",
      },
      {
        question: "Can Ayurvedic care be used with migraine medication?",
        answer:
          "Ayurvedic care can be planned alongside existing migraine medication. Do not stop a prescribed medicine unless the prescribing doctor advises it. Share your current medicines during consultation.",
      },
      {
        question: "What causes migraines according to Ayurveda?",
        answer:
          "Ayurveda links migraines to aggravated Pitta (heat/inflammation) and Vata (nervous system imbalance), often triggered by poor digestion, stress, irregular sleep, and incompatible foods.",
      },
      {
        question: "What is Shirodhara used for in migraine care?",
        answer:
          "Shirodhara is a therapy in which warm medicated oil flows on the forehead. It is used in Ayurvedic migraine care for the nervous system. Suitability is decided after assessment.",
      },
    ],
    relatedSlugs: ["panchakarma", "back-pain-treatment", "wellness-programs"],
    relatedBlogSlugs: [
      "ayurveda-for-cervical-pain",
      "is-panchakarma-painful",
      "benefits-of-panchakarma",
    ],
  },
  {
    slug: "pcos-treatment",
    title: `PCOS & PCOD Ayurveda in Medavakkam | ${SITE_NAME}`,
    metaDescription: `PCOS & PCOD Ayurveda in Medavakkam, Chennai by Dr. Harsita Devi J.K. Hormone balance, weight care & fertility support. Book consultation.`,
    keywords: `PCOS Ayurveda Medavakkam, PCOD Ayurveda Medavakkam, women's wellness Ayurveda, Ayurvedic doctor Medavakkam, hormonal imbalance Ayurveda, fertility Ayurveda Chennai`,
    h1: "Women's Wellness & PCOS Treatment in Medavakkam, Chennai",
    subtitle:
      "Women's wellness Ayurveda for PCOS, PCOD, hormonal balance, and fertility — natural healing that addresses root cause",
    heroImage: PCOSTreatment,
    overview: `Polycystic Ovary Syndrome (PCOS) and PCOD affect hormonal balance, metabolism, and fertility. At ${SITE_NAME} in Medavakkam, Chennai, Dr. Harsita Devi J.K. offers women's wellness Ayurveda that may include herbal medicine, Panchakarma, diet management, and lifestyle guidance. The clinic sees women from ${LOCAL_AREAS} and across Chennai. The plan is set after assessment, and changes in cycles or other symptoms vary from person to person.`,
    benefits: [
      "Herbal, diet, and lifestyle support chosen after assessment",
      "May include weight and metabolic guidance when relevant",
      "Can look at acne, hair fall, and skin changes linked with PCOS",
      "Fertility questions are discussed individually, not promised",
      "Insulin resistance and daily routine are reviewed in the consultation",
    ],
    treatments: [
      {
        name: "Herbal Formulations",
        description:
          "Custom Ayurvedic medicines to balance hormones, reduce androgen levels, and support ovarian function.",
      },
      {
        name: "Panchakarma Detox",
        description:
          "Deep cleansing to eliminate toxins, reset metabolism, and improve hormonal receptivity.",
      },
      {
        name: "Uttara Basti",
        description:
          "Specialized Ayurvedic procedure for reproductive health and uterine cleansing in selected cases.",
      },
      {
        name: "Diet & Nutrition Plan",
        description:
          "Anti-inflammatory, low-glycemic diet tailored to your dosha to manage insulin resistance and weight.",
      },
      {
        name: "Yoga & Lifestyle Guidance",
        description:
          "Stress reduction techniques and exercise recommendations to support hormonal balance.",
      },
    ],
    whyChooseUs: [
      "Compassionate, women-focused care by Dr. Harsita Devi J.K.",
      "Integrative approach combining herbs, detox, and lifestyle modification",
      "Online consultations available for busy professionals across India",
      "Located in Medavakkam – accessible from Velachery, Tambaram, and Pallikaranai",
    ],
    faq: [
      {
        question: "How does Ayurveda approach PCOS?",
        answer:
          "Ayurvedic care for PCOS may include herbal medicine, diet guidance, and selected therapies after assessment. Changes in cycles, weight, or other symptoms vary from person to person and depend on the plan followed.",
      },
      {
        question: "How long does Ayurvedic PCOS treatment take?",
        answer:
          "Duration varies with severity, age, and how consistently the plan is followed. Dr. Harsita Devi J.K. reviews progress and adjusts the plan. Change is not the same for every person.",
      },
      {
        question:
          "Can I take Ayurvedic treatment alongside birth control pills?",
        answer:
          "Yes, but inform Dr. Harsita Devi J.K. about all medications. Ayurvedic herbs can complement conventional treatment, and your plan will be adjusted for safe integration.",
      },
      {
        question: "Does Ayurveda help with PCOS-related weight gain?",
        answer:
          "Yes, Ayurvedic PCOS treatment includes personalized diet plans and metabolic support herbs that address insulin resistance – a key driver of PCOS-related weight gain.",
      },
    ],
    relatedSlugs: ["weight-loss", "skin-care", "wellness-programs"],
    relatedBlogSlugs: [
      "benefits-of-panchakarma",
      "ayurveda-for-diabetes",
      "home-remedies-for-acidity",
    ],
  },
  {
    slug: "weight-loss",
    title: `Ayurvedic Weight Management in Chennai | ${SITE_NAME}`,
    metaDescription: `Ayurvedic weight management in Chennai by Dr. Harsita Devi J.K. Diet guidance, Udvartana, and consultation at the Medavakkam clinic.`,
    keywords: `Ayurvedic weight management Chennai, weight loss Ayurveda, Ayurveda treatment Medavakkam, Ayurvedic doctor Medavakkam, metabolic detox Ayurveda`,
    h1: "Ayurvedic Weight Management in Chennai",
    subtitle:
      "Sustainable, natural weight management through metabolic balance – not crash diets or harmful supplements",
    heroImage: DietManagement,
    overview: `Ayurvedic weight management looks at metabolic fire (Agni), accumulated toxins, and Kapha dosha. At ${SITE_NAME} in Medavakkam, Dr. Harsita Devi J.K. offers programmes that may include herbal medicine, Udvartana (herbal powder massage), Panchakarma, and a constitution-based diet plan. People from ${LOCAL_AREAS} and across Chennai can attend in person. Weight change varies with constitution, other health conditions, and how consistently the plan is followed.`,
    benefits: [
      "Diet and routine guidance aimed at digestion and daily metabolism",
      "Udvartana and selected therapies after assessment",
      "Looks at bloating, water retention, and Kapha-related patterns",
      "Energy and activity are reviewed as part of the plan",
      "The approach uses diet and lifestyle changes rather than a crash diet",
    ],
    treatments: [
      {
        name: "Udvartana (Herbal Powder Massage)",
        description:
          "Dry herbal powder massage used in Ayurvedic weight management to support circulation and body tone.",
      },
      {
        name: "Panchakarma Detox",
        description:
          "Deep cleansing to reset metabolism and eliminate toxins that block effective weight loss.",
      },
      {
        name: "Herbal Metabolic Support",
        description:
          "Ayurvedic formulations to enhance Agni, reduce Kapha, and support healthy fat metabolism.",
      },
      {
        name: "Personalized Diet Plan",
        description:
          "Dosha-based nutrition guidance – what to eat, when to eat, and foods to avoid for your body type.",
      },
      {
        name: "Lifestyle & Exercise Guidance",
        description:
          "Daily routine (Dinacharya) recommendations including yoga and walking tailored to your constitution.",
      },
    ],
    whyChooseUs: [
      "No harmful supplements or extreme calorie restriction",
      "Addresses underlying causes like thyroid issues, PCOS, and slow metabolism",
      "Dr. Harsita Devi J.K. provides ongoing support and plan adjustments",
      "Convenient Medavakkam clinic with online consultation option",
    ],
    faq: [
      {
        question: "How much weight can I lose with Ayurveda?",
        answer:
          "Weight change varies with constitution, the plan followed, and other health conditions. The approach is gradual and based on diet, lifestyle, and selected therapies.",
      },
      {
        question: "Is Ayurvedic weight loss safe?",
        answer:
          "The plan uses diet changes, herbal support, and traditional therapies prescribed after consultation with Dr. Harsita Devi J.K. Share existing medicines and health conditions so the plan can be adjusted.",
      },
      {
        question: "Can Ayurveda help with weight gain due to PCOS or thyroid?",
        answer:
          "Ayurvedic weight care can look at hormonal and metabolic patterns linked with PCOS or hypothyroidism. The plan is individual, and prescribed medicine should continue unless the treating doctor changes it.",
      },
      {
        question: "Do I need to follow a strict diet?",
        answer:
          "Dr. Harsita Devi J.K. provides practical, sustainable diet guidance based on your dosha – not restrictive fad diets. The focus is on eating the right foods at the right times.",
      },
    ],
    relatedSlugs: [
      "panchakarma",
      "pcos-treatment",
      "wellness-programs",
      "fatty-liver-treatment",
    ],
    relatedBlogSlugs: [
      "benefits-of-panchakarma",
      "ayurveda-for-diabetes",
      "ayurveda-for-fatty-liver",
    ],
  },
  {
    slug: "skin-care",
    title: `Ayurvedic Skin & Hair Care in Medavakkam | ${SITE_NAME}`,
    metaDescription: `Ayurvedic skin & hair care in Medavakkam, Chennai by Dr. Harsita Devi J.K. Acne, eczema, pigmentation & hair fall treated naturally.`,
    keywords: `Ayurvedic skin and hair care, Ayurvedic skin care Chennai, acne Ayurveda Medavakkam, hair fall Ayurveda, Ayurvedic doctor Medavakkam, psoriasis Ayurveda`,
    h1: "Ayurvedic Skin & Hair Care in Medavakkam, Chennai",
    subtitle:
      "Ayurvedic skin and hair care for acne, eczema, pigmentation, and hair fall",
    heroImage: SkinCare,
    overview: `At ${SITE_NAME} in Medavakkam, Chennai, Dr. Harsita Devi J.K. offers Ayurvedic internal medicine, herbal facials, Panchakarma, and diet guidance for acne, eczema, psoriasis, hair fall, pigmentation, and premature ageing. People from ${LOCAL_AREAS} and across Chennai can attend the clinic. Response varies with the condition and the plan followed.`,
    benefits: [
      "Internal medicine and external therapies, chosen after assessment",
      "Herbal options discussed alongside any skin treatment you already use",
      "Concerns covered include texture, tone, acne, and pigmentation",
      "Also used for eczema, psoriasis, and hair fall when appropriate",
      "Rejuvenation therapies are selected individually",
    ],
    treatments: [
      {
        name: "Mukh Lepam (Herbal Facial)",
        description:
          "Custom herbal face packs to treat acne, pigmentation, and dull skin using natural ingredients.",
      },
      {
        name: "Internal Herbal Medicine",
        description:
          "Blood-purifying and skin-healing formulations to address skin issues from within.",
      },
      {
        name: "Panchakarma for Skin",
        description:
          "Detox therapies including Virechana to eliminate toxins causing chronic skin conditions.",
      },
      {
        name: "Abhyanga & Skin Rejuvenation",
        description:
          "Full-body oil massage with skin-nourishing herbal oils for overall skin health and anti-aging.",
      },
      {
        name: "Diet & Lifestyle for Clear Skin",
        description:
          "Identification of Pitta-aggravating foods and habits that trigger breakouts and inflammation.",
      },
    ],
    whyChooseUs: [
      "Gentle, natural treatments suitable for sensitive skin",
      "Experienced in treating chronic and recurring skin conditions",
      "External therapies and internal medicine are used together when appropriate",
      "Clinic in Medavakkam – serving all of South Chennai",
    ],
    faq: [
      {
        question: "Can Ayurveda treat chronic acne?",
        answer:
          "Ayurvedic acne care looks at hormones, digestion, and Pitta patterns after assessment. Response varies, and the plan may sit alongside care you already receive.",
      },
      {
        question: "How long before I see skin improvement?",
        answer:
          "Timing varies with the condition. Chronic concerns such as psoriasis or eczema often need a longer follow-up. Dr. Harsita Devi J.K. sets expectations after assessment.",
      },
      {
        question: "Is Ayurvedic skin treatment safe for all skin types?",
        answer:
          "Yes, all treatments are customized to your skin type and dosha constitution. Dr. Harsita Devi J.K. selects herbs and therapies appropriate for sensitive, oily, or dry skin.",
      },
      {
        question: "Do you treat pigmentation and dark spots?",
        answer:
          "Yes, we treat hyperpigmentation, melasma, and dark spots using herbal facials, internal blood-purifying medicines, and sun protection guidance.",
      },
    ],
    relatedSlugs: ["panchakarma", "pcos-treatment", "wellness-programs"],
    relatedBlogSlugs: [
      "benefits-of-panchakarma",
      "home-remedies-for-acidity",
      "best-foods-after-panchakarma",
    ],
  },
  {
    slug: "back-pain-treatment",
    title: `Back Pain Ayurvedic Treatment in Chennai | ${SITE_NAME}`,
    metaDescription: `Ayurvedic back pain treatment in Chennai by Dr. Harsita Devi J.K. Kati Basti, herbal oils & Panchakarma for sciatica. Clinic in Medavakkam.`,
    keywords: `Back pain Ayurvedic treatment, Ayurvedic joint pain care, Kati Basti Medavakkam, sciatica Ayurveda Chennai, Ayurvedic doctor Medavakkam, lumbar pain Ayurveda`,
    h1: "Ayurvedic Back Pain Treatment in Chennai",
    subtitle:
      "Ayurvedic care for lower back pain, sciatica, and cervical spondylosis, including Kati Basti and medicated oils",
    heroImage: ChronicDiseaseManagement,
    overview: `Ayurveda often links chronic back pain with Vata imbalance, posture, and accumulated toxins. At ${SITE_NAME} in Medavakkam, Chennai, Dr. Harsita Devi J.K. offers Kati Basti, Pinda Sweda, medicated oils, and Panchakarma for lumbar pain, sciatica, disc problems, and cervical spondylosis. People from ${LOCAL_AREAS} and across Chennai can attend. The plan is set after assessment, and response varies.`,
    benefits: [
      "Oil therapies and herbal support chosen after assessment",
      "Posture and daily activity are reviewed with the plan",
      "Can be planned alongside existing pain medication",
      "Looks at Vata patterns linked with chronic back pain",
      "Disc and nerve symptoms need an individual assessment",
    ],
    treatments: [
      {
        name: "Kati Basti",
        description:
          "Warm medicated oil retained over the lower back in a dough ring, used for lumbar pain, sciatica, and disc-related discomfort.",
      },
      {
        name: "Greeva Basti (Cervical Treatment)",
        description:
          "Localized oil retention over the neck for cervical spondylosis, neck stiffness, and upper back pain.",
      },
      {
        name: "Pinda Sweda (Bolus Fomentation)",
        description:
          "Herbal bolus massage to reduce inflammation, improve circulation, and relieve deep muscle tension.",
      },
      {
        name: "Herbal Internal Medicine",
        description:
          "Custom Ayurvedic formulations to balance Vata dosha, reduce Ama, and strengthen spinal tissues.",
      },
      {
        name: "Diet & Posture Guidance",
        description:
          "Personalized recommendations for ergonomics, stretching, and foods that support back health.",
      },
    ],
    whyChooseUs: [
      "Experienced in treating sciatica, disc bulge, and cervical spondylosis",
      "Combination of external therapies and internal herbal medicine",
      "Clinic in Medavakkam — easy access from Velachery, Tambaram, and Pallikaranai",
      "Online follow-up consultations available for outstation patients",
    ],
    faq: [
      {
        question: "Can Ayurveda treat sciatica?",
        answer:
          "Ayurvedic sciatica care may include Kati Basti, herbal medicines, and Vata-balancing therapies after assessment. Change in symptoms varies, and the plan can sit alongside other care you already receive.",
      },
      {
        question: "How many Kati Basti sessions are needed for back pain?",
        answer:
          "Typically 7 to 14 sessions are recommended depending on severity. Improvement is often noticed within the first few sessions.",
      },
      {
        question:
          "Is Ayurvedic back pain treatment safe alongside physiotherapy?",
        answer:
          "Yes, Ayurvedic therapies complement physiotherapy well. Dr. Harsita Devi J.K. can coordinate your care plan for optimal recovery.",
      },
      {
        question: "Do you treat cervical spondylosis?",
        answer:
          "Yes, we treat neck pain and cervical spondylosis using Greeva Basti, Nasya, herbal medicine, and posture correction guidance.",
      },
    ],
    relatedSlugs: [
      "knee-pain-treatment",
      "panchakarma",
      "migraine-treatment",
      "wellness-programs",
    ],
    relatedBlogSlugs: [
      "ayurveda-for-cervical-pain",
      "benefits-of-panchakarma",
      "is-panchakarma-painful",
    ],
  },
  {
    slug: "diabetes-treatment",
    title: `Ayurvedic Diabetes Treatment in Chennai | ${SITE_NAME}`,
    metaDescription: `Ayurvedic diabetes treatment in Chennai by Dr. Harsita Devi J.K. Blood sugar balance, metabolic detox & diet at our Medavakkam clinic.`,
    keywords: `Ayurveda for diabetes, Ayurvedic diabetes treatment Chennai, blood sugar Ayurveda Medavakkam, Ayurvedic doctor near me, diabetes management Ayurveda, Ayurvedic clinic Chennai`,
    h1: "Ayurvedic Diabetes Treatment in Chennai",
    subtitle:
      "Ayurvedic consultation, herbal support, diet guidance, and lifestyle advice for people with diabetes",
    heroImage: AyurvedicDiabetesTreatment,
    overview: `Ayurveda describes diabetes (Madhumeha) as a metabolic disorder linked with Kapha and Pitta imbalance. At ${SITE_NAME} in Medavakkam, Chennai, Dr. Harsita Devi J.K. offers herbal formulations, Panchakarma, diet plans, and lifestyle guidance. People from ${LOCAL_AREAS} and across Chennai can attend. Any change to prescribed diabetes medicine is decided by the treating physician. Blood sugar response varies.`,
    benefits: [
      "Diet, routine, and herbal support chosen after assessment",
      "Looks at metabolism, meals, and daily activity",
      "Complication prevention stays with your existing diabetes doctor",
      "Fatigue and nerve symptoms are reviewed in consultation",
      "Prescribed diabetes medicine continues unless that doctor changes it",
    ],
    treatments: [
      {
        name: "Herbal Formulations",
        description:
          "Time-tested Ayurvedic medicines including Gudmar, Vijaysar, and custom blends to support glucose metabolism.",
      },
      {
        name: "Panchakarma Detox",
        description:
          "Deep cleansing to eliminate Ama (toxins), reset metabolism, and improve cellular insulin response.",
      },
      {
        name: "Diet & Nutrition Plan",
        description:
          "Low-glycemic, dosha-based meal plans with timing guidance to stabilize blood sugar throughout the day.",
      },
      {
        name: "Udvartana & External Therapies",
        description:
          "Herbal powder massage and sudation therapies to improve circulation and reduce Kapha accumulation.",
      },
      {
        name: "Lifestyle & Exercise Guidance",
        description:
          "Daily routine recommendations including yoga, walking, and stress management for metabolic health.",
      },
    ],
    whyChooseUs: [
      "Integrative approach safe alongside conventional diabetes medication",
      "Dr. Harsita Devi J.K. monitors progress and adjusts treatment plans regularly",
      "Focus on preventing complications, not just lowering numbers",
      "Convenient Medavakkam clinic with online consultation for follow-ups",
    ],
    faq: [
      {
        question: "How does Ayurveda approach diabetes?",
        answer:
          "Ayurveda describes diabetes as Madhumeha and may use diet, lifestyle guidance, and herbal support after assessment. Blood sugar response varies. Do not stop or reduce prescribed diabetes medicine unless your doctor advises it.",
      },
      {
        question: "Is Ayurvedic diabetes treatment safe with metformin?",
        answer:
          "Yes, but inform Dr. Harsita Devi J.K. about all medications. Ayurvedic herbs can complement conventional treatment, and your plan will be adjusted for safe integration with regular blood sugar monitoring.",
      },
      {
        question: "How long before I see improvement in blood sugar?",
        answer:
          "Timing varies with the type of diabetes, current medicines, and how consistently diet guidance is followed. Dr. Harsita Devi J.K. reviews reports at follow-up. Do not change prescribed medicine on your own.",
      },
      {
        question: "Does Ayurveda help with diabetic neuropathy?",
        answer:
          "Herbal medicine, Abhyanga, and Basti are sometimes used when nerve symptoms are part of the picture. Suitability is decided after assessment, alongside your existing diabetes care.",
      },
    ],
    relatedSlugs: [
      "weight-loss",
      "fatty-liver-treatment",
      "panchakarma",
      "wellness-programs",
    ],
    relatedBlogSlugs: [
      "ayurveda-for-diabetes",
      "ayurveda-for-fatty-liver",
      "home-remedies-for-acidity",
    ],
  },
  {
    slug: "fatty-liver-treatment",
    title: `Ayurvedic Fatty Liver Treatment in Chennai | ${SITE_NAME}`,
    metaDescription: `Ayurvedic fatty liver treatment in Chennai by Dr. Harsita Devi J.K. Liver detox, herbs & diet support at our Medavakkam clinic. Book today.`,
    keywords: `Ayurveda for fatty liver, fatty liver treatment Chennai, liver detox Ayurveda Medavakkam, Ayurvedic doctor near me, NAFLD Ayurveda, Ayurvedic clinic Chennai`,
    h1: "Ayurvedic Fatty Liver Treatment in Chennai",
    subtitle:
      "Ayurvedic consultation, herbal support, diet guidance, and selected detox therapies for fatty liver",
    heroImage: AyurvedicFattyLiverTreatment,
    overview: `Fatty liver disease (NAFLD) is often linked with metabolic syndrome, obesity, and diet. At ${SITE_NAME} in Medavakkam, Chennai, Dr. Harsita Devi J.K. offers Ayurvedic liver support, herbal formulations, Panchakarma, and diet plans for people from ${LOCAL_AREAS} and across Chennai. Reports are reviewed at consultation. Improvement is not the same for every person and depends on the stage of the condition.`,
    benefits: [
      "Diet guidance and selected detox therapies after assessment",
      "Herbal liver support reviewed against your current medicines",
      "Digestion, weight, and daily routine are part of the plan",
      "Obesity, cholesterol, and diabetes are discussed when present",
      "Care is planned alongside conventional liver monitoring",
    ],
    treatments: [
      {
        name: "Virechana (Purgation Therapy)",
        description:
          "Controlled herbal purgation to eliminate Pitta toxins from the liver and gallbladder — a cornerstone of liver detox in Ayurveda.",
      },
      {
        name: "Herbal Liver Support",
        description:
          "Formulations with Kutki, Bhumyamalaki, and other hepatoprotective herbs to reduce inflammation and support liver regeneration.",
      },
      {
        name: "Panchakarma Detox",
        description:
          "Comprehensive detox program including Basti and dietary protocols to reset metabolism and liver function.",
      },
      {
        name: "Diet & Nutrition Plan",
        description:
          "Anti-inflammatory, liver-friendly diet eliminating processed foods, alcohol, and Pitta-aggravating items.",
      },
      {
        name: "Lifestyle Modification",
        description:
          "Weight management, exercise, and stress reduction guidance to address root causes of fatty liver.",
      },
    ],
    whyChooseUs: [
      "Experienced in treating NAFLD and metabolic liver conditions",
      "Panchakarma is considered only after reports and a clinical assessment",
      "Addresses obesity and diabetes — common fatty liver co-factors",
      "Located in Medavakkam — serving all of South Chennai",
    ],
    faq: [
      {
        question: "How does Ayurveda approach fatty liver?",
        answer:
          "Ayurvedic care for fatty liver may include diet changes, herbal support, and selected detox therapies after assessment and review of your reports. Improvement is not the same for every person and depends on the stage of the condition and follow-through.",
      },
      {
        question: "How long does Ayurvedic fatty liver treatment take?",
        answer:
          "Duration depends on the stage of fatty liver, related conditions, and how consistently diet and lifestyle guidance are followed. Dr. Harsita Devi J.K. reviews reports and sets a follow-up plan after assessment.",
      },
      {
        question: "Is Virechana safe for fatty liver?",
        answer:
          "Virechana is a classical purgation therapy used in Ayurvedic liver care. Dr. Harsita Devi J.K. offers it only after assessment and under supervision.",
      },
      {
        question:
          "Can I take Ayurvedic treatment alongside my hepatologist's care?",
        answer:
          "Yes, Ayurvedic treatment complements conventional monitoring. Share your latest liver function reports with Dr. Harsita Devi J.K. for a coordinated care plan.",
      },
    ],
    relatedSlugs: [
      "panchakarma",
      "weight-loss",
      "diabetes-treatment",
      "wellness-programs",
    ],
    relatedBlogSlugs: [
      "ayurveda-for-fatty-liver",
      "ayurveda-for-diabetes",
      "best-foods-after-panchakarma",
    ],
  },
  {
    slug: "wellness-programs",
    title: `Ayurvedic Wellness Programs in Medavakkam, Chennai | ${SITE_NAME}`,
    metaDescription: `Ayurvedic wellness programs in Medavakkam, Chennai by Dr. Harsita Devi J.K. Weekend, women's wellness, and lifestyle programmes.`,
    keywords: `Ayurvedic wellness programs Medavakkam, wellness centre Chennai, Ayurveda rejuvenation program, weekend wellness Ayurveda, women's wellness program, stress relief wellness Ayurveda, Ayurvedic lifestyle program Medavakkam`,
    h1: "Ayurvedic Wellness Programs in Medavakkam, Chennai",
    subtitle:
      "Personalised multi-day programmes that combine traditional therapies, lifestyle guidance, and rejuvenation",
    heroImage: TherapeuticMassages,
    overview: `At ${SITE_NAME}, our Ayurvedic wellness centre in Medavakkam, Chennai, Dr. Harsita Devi J.K. designs programmes that combine selected therapies such as Abhyanga, Shirodhara, and Swedana with diet guidance, daily routines, and relaxation practices. Options include a weekend programme and a two-week weight-management programme. In-person programmes take place at the Medavakkam clinic, with online consultations for assessment and follow-up for people in ${LOCAL_AREAS} and elsewhere.`,
    treatmentsSectionTitle: "Our Wellness Programs",
    treatmentsSectionSubtitle:
      "Choose a structured programme tailored to your goals — from a weekend rejuvenation to a two-week wellness journey",
    benefits: [
      "Multi-day programmes that group therapies, diet guidance, and daily routine",
      "Personalised to your body constitution (Prakriti) and wellness goals",
      "Combines therapies, diet guidance, and lifestyle recommendations",
      "Flexible durations from weekend retreats to two-week programmes",
      "Focus on prevention, rejuvenation, and sustainable daily habits",
    ],
    treatments: [
      {
        name: "Ayurveda Weekend Rejuvenation Program",
        duration: "2–3 Days",
        image: TherapeuticMassages,
        description:
          "A 2 or 3-day Ayurvedic wellness experience featuring selected therapies such as Abhyanga, Bashpa Sweda, Shiro Abhyanga, Pada Abhyanga and Shirodhara.",
      },
      {
        name: "Ayurveda Reset Program – 7 Days",
        duration: "7 Days",
        image: PanchakarmaDetox,
        description:
          "A 7-day personalised Ayurveda wellness programme combining selected therapies, lifestyle guidance, relaxation and Ayurvedic wellness practices.",
      },
      {
        name: "Women's Wellness Journey – 7 Days",
        duration: "7 Days",
        image: PCOSTreatment,
        description:
          "A 7-day personalised Ayurvedic wellness programme focusing on women's wellbeing through selected therapies, lifestyle guidance, relaxation and healthy routines.",
      },
      {
        name: "Healthy Weight Management Program – 2 Weeks",
        duration: "2 Weeks",
        image: DietManagement,
        description:
          "A 2-week personalised wellness programme combining Ayurvedic diet guidance, lifestyle recommendations and suitable therapies to support healthy weight management.",
      },
      {
        name: "Ayurvedic Rejuvenation Program",
        duration: "Personalised",
        image: AyurvedaFlower,
        description:
          "A personalised Ayurveda wellness programme combining traditional therapies, relaxation practices, diet guidance and lifestyle recommendations.",
      },
      {
        name: "Stress Relief & Wellness Program",
        duration: "Personalised",
        image: StressAndAnxietyRelief,
        description:
          "A personalised Ayurvedic wellness programme incorporating suitable therapies, relaxation practices, lifestyle guidance and healthy daily routines.",
      },
      {
        name: "Ayurvedic Lifestyle Management Program",
        duration: "Personalised",
        image: HerbalTreatments,
        description:
          "Personalised Ayurvedic guidance combining diet, daily routine, lifestyle practices and suitable therapies to support healthier long-term habits.",
      },
      {
        name: "Preventive Ayurveda & Wellness Program",
        duration: "Personalised",
        image: PanchakarmaDetox,
        description:
          "Ayurvedic wellness guidance focused on maintaining wellbeing through personalised diet, lifestyle, daily routines and traditional rejuvenation practices.",
      },
    ],
    whyChooseUs: [
      "Programmes include Abhyanga, Shirodhara, and Swedana, with diet and lifestyle guidance",
      "Every programme is personalised by Dr. Harsita Devi J.K. after Prakriti assessment",
      "Authentic therapies including Abhyanga, Shirodhara, and Swedana under physician supervision",
      "Convenient Velachery Main Road location — serving all of South Chennai",
    ],
    faq: [
      {
        question: "Which wellness program is right for me?",
        answer:
          "Dr. Harsita Devi J.K. recommends the ideal programme after assessing your constitution, health goals, and schedule. A brief consultation — in-person or online — helps determine whether a weekend rejuvenation, 7-day reset, or longer programme suits you best.",
      },
      {
        question: "How is a wellness program different from a single therapy session?",
        answer:
          "Wellness programmes combine several therapies, diet guidance, and lifestyle recommendations over a few days. A single session covers one therapy. The programme is chosen after a consultation.",
      },
      {
        question: "Can I do a wellness program while working?",
        answer:
          "Weekend rejuvenation programmes (2–3 days) are designed for busy schedules. Longer programmes may require dedicated time — Dr. Harsita Devi J.K. will help you choose an option that fits your lifestyle.",
      },
      {
        question: "Where are wellness programmes conducted?",
        answer: `All in-person programmes take place at our clinic at ${FORMATTED_ADDRESS}. We serve patients from ${LOCAL_AREAS}, and across Chennai.`,
      },
    ],
    relatedSlugs: ["panchakarma", "weight-loss", "pcos-treatment", "migraine-treatment"],
    relatedBlogSlugs: [
      "benefits-of-panchakarma",
      "is-panchakarma-painful",
      "best-foods-after-panchakarma",
    ],
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return SERVICE_PAGES.find((page) => page.slug === slug);
}

export function getServicePageUrl(slug: string): string {
  return `${SITE_URL}/${slug}`;
}

export const CLINIC_LOCATION_TEXT = `${BUSINESS.name} is located at ${FORMATTED_ADDRESS}, easily accessible from ${LOCAL_AREAS}.`;
