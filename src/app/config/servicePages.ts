import PanchakarmaDetox from "../../assets/panchakarma-detox.webp";
import ChronicDiseaseManagement from "../../assets/chronic-disease-management.webp";
import StressAndAnxietyRelief from "../../assets/stress-and-anxiety-relief.webp";
import AyurvedicDiabetesTreatment from "../../assets/ayurvedic-diabetes-treatment.webp";
import AyurvedicFattyLiverTreatment from "../../assets/ayurvedic-fatty-liver-treatment.webp";
import DietManagement from "../../assets/diet-management.webp";
import PCOSTreatment from "../../assets/pcos-treatment.webp";
import SkinCare from "../../assets/ayurvedic-skin-care.webp";

import {
  BUSINESS,
  FORMATTED_ADDRESS,
  LOCAL_AREAS,
  SITE_NAME,
  SITE_URL,
} from "./seo";

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
  treatments: { name: string; description: string }[];
  whyChooseUs: string[];
  faq: { question: string; answer: string }[];
  relatedSlugs: string[];
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "panchakarma",
    title: `Kerala Panchakarma in Medavakkam, Chennai | ${SITE_NAME}`,
    metaDescription: `Authentic Kerala Panchakarma detox therapy in Medavakkam, Chennai by Dr. Harsita Devi. Deep cleansing, toxin elimination & natural healing. Book Ayurvedic consultation in-person or online.`,
    keywords: `Kerala Panchakarma, Panchakarma Medavakkam, Detox Therapy Chennai, Ayurvedic Clinic Medavakkam, Ayurveda Doctor, Dr. Harsita Devi`,
    h1: "Kerala Panchakarma Treatment in Medavakkam, Chennai",
    subtitle:
      "Authentic Kerala Panchakarma detox therapy for deep cleansing, toxin elimination, and natural healing",
    heroImage: PanchakarmaDetox,
    overview: `Kerala Panchakarma is Ayurveda's most comprehensive detox therapy and rejuvenation program. At ${SITE_NAME}, our Ayurvedic clinic in Medavakkam, Chennai, Dr. Harsita Devi offers authentic Kerala Panchakarma therapies tailored to your body constitution (Prakriti) and current imbalances. Whether you live in ${LOCAL_AREAS}, our clinic is easily accessible for in-person detox therapy, and Ayurvedic consultations are available online for pre-assessment and follow-up care.`,
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
          "The most effective Panchakarma procedure for Vata disorders, using herbal oils and decoctions.",
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
      "Personalized Panchakarma protocols by certified Ayurvedic physician Dr. Harsita Devi",
      "Authentic herbal preparations and traditional therapy techniques",
      "Flexible in-person and online consultation options",
    ],
    faq: [
      {
        question: "How long does a Panchakarma program take?",
        answer:
          "A standard Panchakarma program typically runs 7 to 21 days depending on your condition and constitution. Dr. Harsita Devi will recommend the ideal duration after your initial consultation.",
      },
      {
        question: "Is Panchakarma safe?",
        answer:
          "Yes, when performed under the supervision of a qualified Ayurvedic physician. At Harsha Vedic, every Panchakarma protocol is customized after a thorough Prakriti assessment to ensure safety and effectiveness.",
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
    relatedSlugs: ["weight-loss", "skin-care", "migraine-treatment"],
  },
  {
    slug: "knee-pain-treatment",
    title: `Knee Pain Ayurvedic Treatment in Chennai | ${SITE_NAME}`,
    metaDescription: `Natural Ayurvedic knee pain treatment in Chennai by Dr. Harsita Devi. Herbal oils, Janu Basti, Panchakarma & personalized care for arthritis and joint pain. Book consultation.`,
    keywords: `Knee pain Ayurvedic treatment, Ayurvedic doctor near me, knee arthritis Chennai, Janu Basti Medavakkam, joint pain Ayurveda, Ayurvedic clinic Chennai`,
    h1: "Ayurvedic Pain Management in Chennai",
    subtitle:
      "Natural pain management for knee pain, arthritis, and joint stiffness — drug-free relief through authentic Ayurvedic therapies",
    heroImage: ChronicDiseaseManagement,
    overview: `Chronic knee pain affects mobility and quality of life. At ${SITE_NAME} in Medavakkam, Chennai, Dr. Harsita Devi treats knee pain at its root cause using Ayurvedic therapies including Janu Basti, herbal poultices, medicated oils, and Panchakarma. Patients from ${LOCAL_AREAS} and across Chennai trust our personalized approach for lasting relief from osteoarthritis, rheumatoid arthritis, and sports-related knee injuries.`,
    benefits: [
      "Reduces inflammation and joint stiffness naturally",
      "Strengthens muscles and ligaments around the knee",
      "Improves mobility without dependency on painkillers",
      "Addresses root cause rather than masking symptoms",
      "Suitable for long-term arthritis management",
    ],
    treatments: [
      {
        name: "Janu Basti",
        description:
          "Warm medicated oil retained over the knee joint in a dough ring – highly effective for osteoarthritis and chronic knee pain.",
      },
      {
        name: "Pinda Sweda (Bolus Fomentation)",
        description:
          "Herbal bolus massage to reduce inflammation, improve circulation, and relieve stiffness.",
      },
      {
        name: "Abhyanga (Therapeutic Oil Massage)",
        description:
          "Full-body or localized massage with anti-inflammatory herbal oils to nourish joints and tissues.",
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
        question: "Can Ayurveda cure knee arthritis?",
        answer:
          "Ayurveda can significantly reduce pain, improve mobility, and slow disease progression in knee arthritis. Early intervention yields the best results. Dr. Harsita Devi creates a tailored plan based on your condition severity.",
      },
      {
        question: "How many sessions of Janu Basti are needed?",
        answer:
          "Typically 7 to 14 sessions are recommended, depending on the severity of your condition. Improvement is often noticed within the first few sessions.",
      },
      {
        question: "Is Ayurvedic knee treatment safe alongside allopathy?",
        answer:
          "Yes, Ayurvedic therapies can complement conventional treatment. Inform Dr. Harsita Devi about any medications you are taking for a coordinated care plan.",
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
      "migraine-treatment",
    ],
  },
  {
    slug: "migraine-treatment",
    title: `Migraine Ayurvedic Treatment in Chennai | ${SITE_NAME}`,
    metaDescription: `Effective Ayurvedic migraine treatment in Chennai by Dr. Harsita Devi. Shirodhara, Nasya, herbal medicine & root-cause care. Clinic in Medavakkam. Book consultation today.`,
    keywords: `Migraine Ayurvedic treatment, headache Ayurveda Chennai, Shirodhara Medavakkam, Ayurvedic doctor near me, chronic migraine treatment, Ayurvedic clinic Chennai`,
    h1: "Ayurvedic Migraine & Stress Relief in Chennai",
    subtitle:
      "Root-cause treatment for chronic migraines, headaches, and stress — natural healing, not just temporary pain relief",
    heroImage: StressAndAnxietyRelief,
    overview: `Migraines are often linked to dosha imbalances, digestive issues, stress, and lifestyle factors. At ${SITE_NAME} in Medavakkam, Dr. Harsita Devi has helped patients across Chennai – including ${LOCAL_AREAS} – find lasting relief from chronic migraines through Shirodhara, Nasya, herbal formulations, and personalized diet plans. Our approach treats the underlying cause, reducing both frequency and intensity of migraine episodes.`,
    benefits: [
      "Reduces frequency and severity of migraine attacks",
      "Calms the nervous system and relieves stress-related triggers",
      "Improves sleep quality and mental clarity",
      "Addresses digestive and hormonal root causes",
      "Minimal side effects compared to long-term medication use",
    ],
    treatments: [
      {
        name: "Shirodhara",
        description:
          "Continuous stream of warm medicated oil on the forehead – deeply calming for migraine-prone nervous systems.",
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
      "Proven track record – patients report relief within weeks of starting treatment",
      "Holistic approach addressing stress, digestion, and hormonal factors",
      "Convenient Medavakkam location with online consultation for follow-ups",
      "Gentle, natural therapies suitable for long-term migraine management",
    ],
    faq: [
      {
        question: "How quickly can I expect relief from migraines?",
        answer:
          "Many patients notice improvement within 2–4 weeks of starting Ayurvedic treatment. Chronic cases may require 2–3 months of consistent therapy for significant reduction in frequency.",
      },
      {
        question: "Can Ayurveda replace my migraine medication?",
        answer:
          "Ayurveda can reduce your dependency on painkillers over time. Dr. Harsita Devi will guide you on gradually transitioning under medical supervision – never stop prescribed medication abruptly.",
      },
      {
        question: "What causes migraines according to Ayurveda?",
        answer:
          "Ayurveda links migraines to aggravated Pitta (heat/inflammation) and Vata (nervous system imbalance), often triggered by poor digestion, stress, irregular sleep, and incompatible foods.",
      },
      {
        question: "Is Shirodhara effective for migraines?",
        answer:
          "Yes, Shirodhara is one of the most effective Ayurvedic therapies for migraines. It calms the mind, balances Vata-Pitta, and provides deep nervous system relaxation.",
      },
    ],
    relatedSlugs: ["panchakarma", "pcos-treatment", "skin-care"],
  },
  {
    slug: "pcos-treatment",
    title: `PCOS Ayurvedic Treatment in Chennai | ${SITE_NAME}`,
    metaDescription: `Holistic PCOS Ayurvedic treatment in Chennai by Dr. Harsita Devi. Natural hormone balance, weight management & fertility support. Clinic in Medavakkam. Book consultation.`,
    keywords: `PCOS Ayurvedic treatment, PCOS Chennai, Ayurvedic doctor near me, hormonal imbalance Ayurveda, PCOS Medavakkam, Ayurvedic clinic Chennai, fertility Ayurveda`,
    h1: "Women's Health & PCOS Treatment in Chennai",
    subtitle:
      "Holistic women's health care for PCOS, hormonal balance, and fertility — natural healing that addresses root cause",
    heroImage: PCOSTreatment,
    overview: `Polycystic Ovary Syndrome (PCOS) affects hormonal balance, metabolism, and fertility. At ${SITE_NAME} in Medavakkam, Chennai, Dr. Harsita Devi offers comprehensive Ayurvedic PCOS treatment combining herbal medicine, Panchakarma, diet management, and lifestyle guidance. Women from ${LOCAL_AREAS} and across Chennai choose our clinic for a natural, personalized approach to managing PCOS symptoms and restoring hormonal health.`,
    benefits: [
      "Regulates menstrual cycles naturally",
      "Supports healthy weight management",
      "Reduces acne, hair fall, and skin issues linked to PCOS",
      "Improves fertility and reproductive health",
      "Addresses insulin resistance and metabolic imbalance",
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
      "Compassionate, women-focused care by Dr. Harsita Devi",
      "Integrative approach combining herbs, detox, and lifestyle modification",
      "Online consultations available for busy professionals across India",
      "Located in Medavakkam – accessible from Velachery, Tambaram, and Pallikaranai",
    ],
    faq: [
      {
        question: "Can Ayurveda cure PCOS permanently?",
        answer:
          "Ayurveda can effectively manage and significantly improve PCOS symptoms, restore regular cycles, and support fertility. Consistent treatment and lifestyle adherence are key to long-term results.",
      },
      {
        question: "How long does Ayurvedic PCOS treatment take?",
        answer:
          "Most women see noticeable improvement in 3–6 months. Treatment duration varies based on severity, age, and lifestyle factors. Dr. Harsita Devi monitors progress and adjusts the plan accordingly.",
      },
      {
        question:
          "Can I take Ayurvedic treatment alongside birth control pills?",
        answer:
          "Yes, but inform Dr. Harsita Devi about all medications. Ayurvedic herbs can complement conventional treatment, and your plan will be adjusted for safe integration.",
      },
      {
        question: "Does Ayurveda help with PCOS-related weight gain?",
        answer:
          "Yes, Ayurvedic PCOS treatment includes personalized diet plans and metabolic support herbs that address insulin resistance – a key driver of PCOS-related weight gain.",
      },
    ],
    relatedSlugs: ["weight-loss", "skin-care", "migraine-treatment"],
  },
  {
    slug: "weight-loss",
    title: `Weight Loss Ayurveda in Chennai | ${SITE_NAME}`,
    metaDescription: `Natural Ayurvedic weight loss treatment in Chennai by Dr. Harsita Devi. Metabolic detox, personalized diet & herbal support. Clinic in Medavakkam. Book consultation.`,
    keywords: `Weight loss Ayurveda, Ayurvedic weight loss Chennai, Ayurvedic doctor near me, weight management Medavakkam, Ayurvedic clinic Chennai, metabolic detox Ayurveda`,
    h1: "Ayurvedic Weight Loss Treatment in Chennai",
    subtitle:
      "Sustainable, natural weight management through metabolic balance – not crash diets or harmful supplements",
    heroImage: DietManagement,
    overview: `Ayurvedic weight loss focuses on restoring metabolic fire (Agni), eliminating toxins, and balancing Kapha dosha – the root cause of weight gain in Ayurveda. At ${SITE_NAME} in Medavakkam, Dr. Harsita Devi creates personalized weight loss programs combining herbal medicine, Udvartana (herbal powder massage), Panchakarma, and constitution-based diet plans. Patients from ${LOCAL_AREAS} and across Chennai achieve sustainable results without extreme dieting.`,
    benefits: [
      "Boosts metabolism and digestive fire naturally",
      "Reduces fat accumulation without muscle loss",
      "Eliminates water retention and bloating",
      "Improves energy levels and overall vitality",
      "Sustainable results through lifestyle transformation",
    ],
    treatments: [
      {
        name: "Udvartana (Herbal Powder Massage)",
        description:
          "Dry herbal powder massage that breaks down subcutaneous fat, improves circulation, and tones the body.",
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
      "Dr. Harsita Devi provides ongoing support and plan adjustments",
      "Convenient Medavakkam clinic with online consultation option",
    ],
    faq: [
      {
        question: "How much weight can I lose with Ayurveda?",
        answer:
          "Ayurvedic weight loss is gradual and sustainable – typically 2–4 kg per month. Results depend on your constitution, adherence to the plan, and underlying health conditions.",
      },
      {
        question: "Is Ayurvedic weight loss safe?",
        answer:
          "Yes, Ayurvedic weight loss uses natural herbs, dietary changes, and traditional therapies with no harmful side effects when prescribed by a qualified physician like Dr. Harsita Devi.",
      },
      {
        question: "Can Ayurveda help with weight gain due to PCOS or thyroid?",
        answer:
          "Absolutely. Ayurveda treats the root hormonal and metabolic imbalances causing weight gain in PCOS and hypothyroidism, not just the weight itself.",
      },
      {
        question: "Do I need to follow a strict diet?",
        answer:
          "Dr. Harsita Devi provides practical, sustainable diet guidance based on your dosha – not restrictive fad diets. The focus is on eating the right foods at the right times.",
      },
    ],
    relatedSlugs: ["panchakarma", "pcos-treatment", "knee-pain-treatment"],
  },
  {
    slug: "skin-care",
    title: `Ayurvedic Skin Care Treatment in Chennai | ${SITE_NAME}`,
    metaDescription: `Natural Ayurvedic skin care treatment in Chennai by Dr. Harsita Devi. Acne, eczema, psoriasis & pigmentation care. Herbal facials & internal medicine. Medavakkam clinic.`,
    keywords: `Ayurvedic skin care Chennai, Ayurvedic skin treatment, acne Ayurveda Medavakkam, Ayurvedic doctor near me, psoriasis Ayurveda, Ayurvedic clinic Chennai`,
    h1: "Ayurvedic Skin Care Treatment in Chennai",
    subtitle:
      "Heal skin from within with authentic Ayurvedic treatments for acne, eczema, pigmentation, and more",
    heroImage: SkinCare,
    overview: `Healthy skin reflects internal balance. At ${SITE_NAME} in Medavakkam, Chennai, Dr. Harsita Devi treats skin conditions at their root cause using Ayurvedic internal medicine, herbal facials, Panchakarma, and personalized diet plans. Whether you struggle with acne, eczema, psoriasis, pigmentation, or premature aging, our holistic approach delivers lasting results. Patients from ${LOCAL_AREAS} and across Chennai trust our natural, side-effect-free skin care treatments.`,
    benefits: [
      "Treats root cause of skin issues, not just surface symptoms",
      "Safe, natural alternatives to harsh chemical treatments",
      "Improves skin texture, tone, and natural glow",
      "Addresses acne, eczema, psoriasis, and pigmentation",
      "Anti-aging benefits through rejuvenation therapies",
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
      "Combination of external therapies and internal medicine for best results",
      "Clinic in Medavakkam – serving all of South Chennai",
    ],
    faq: [
      {
        question: "Can Ayurveda treat chronic acne?",
        answer:
          "Yes, Ayurveda effectively treats chronic acne by addressing hormonal imbalances, digestive issues, and Pitta aggravation – the root causes of persistent breakouts.",
      },
      {
        question: "How long before I see skin improvement?",
        answer:
          "Most patients notice improvement within 4–6 weeks. Chronic conditions like psoriasis or eczema may require 2–3 months of consistent treatment.",
      },
      {
        question: "Is Ayurvedic skin treatment safe for all skin types?",
        answer:
          "Yes, all treatments are customized to your skin type and dosha constitution. Dr. Harsita Devi selects herbs and therapies appropriate for sensitive, oily, or dry skin.",
      },
      {
        question: "Do you treat pigmentation and dark spots?",
        answer:
          "Yes, we treat hyperpigmentation, melasma, and dark spots using herbal facials, internal blood-purifying medicines, and sun protection guidance.",
      },
    ],
    relatedSlugs: ["panchakarma", "pcos-treatment", "migraine-treatment"],
  },
  {
    slug: "back-pain-treatment",
    title: `Back Pain Ayurvedic Treatment in Chennai | ${SITE_NAME}`,
    metaDescription: `Natural Ayurvedic back pain treatment in Chennai by Dr. Harsita Devi. Kati Basti, herbal oils, Panchakarma & personalized care for sciatica and lumbar pain. Book consultation.`,
    keywords: `Back pain Ayurvedic treatment, sciatica Ayurveda Chennai, Kati Basti Medavakkam, Ayurvedic doctor near me, lumbar pain Ayurveda, Ayurvedic clinic Chennai`,
    h1: "Ayurvedic Back Pain Treatment in Chennai",
    subtitle:
      "Natural pain management for lower back pain, sciatica, and cervical spondylosis — drug-free relief through authentic Ayurvedic therapies",
    heroImage: ChronicDiseaseManagement,
    overview: `Chronic back pain limits daily life and often stems from Vata imbalance, poor posture, or accumulated toxins. At ${SITE_NAME} in Medavakkam, Chennai, Dr. Harsita Devi treats back pain at its root using Kati Basti, Pinda Sweda, medicated oils, and Panchakarma. Patients from ${LOCAL_AREAS} and across Chennai find lasting relief from lumbar pain, sciatica, disc problems, and cervical spondylosis through our personalized Ayurvedic approach.`,
    benefits: [
      "Relieves muscle spasms and nerve compression naturally",
      "Improves spinal flexibility and posture",
      "Reduces dependency on painkillers and muscle relaxants",
      "Addresses root cause of chronic back pain",
      "Suitable for long-term management of disc and nerve issues",
    ],
    treatments: [
      {
        name: "Kati Basti",
        description:
          "Warm medicated oil retained over the lower back in a dough ring — highly effective for lumbar pain, sciatica, and disc-related discomfort.",
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
          "Yes, Ayurveda effectively treats sciatica through Kati Basti, herbal medicines, and Vata-balancing therapies. Many patients experience significant relief within 2–4 weeks of consistent treatment.",
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
          "Yes, Ayurvedic therapies complement physiotherapy well. Dr. Harsita Devi can coordinate your care plan for optimal recovery.",
      },
      {
        question: "Do you treat cervical spondylosis?",
        answer:
          "Yes, we treat neck pain and cervical spondylosis using Greeva Basti, Nasya, herbal medicine, and posture correction guidance.",
      },
    ],
    relatedSlugs: ["knee-pain-treatment", "panchakarma", "migraine-treatment"],
  },
  {
    slug: "diabetes-treatment",
    title: `Ayurvedic Diabetes Treatment in Chennai | ${SITE_NAME}`,
    metaDescription: `Holistic Ayurvedic diabetes treatment in Chennai by Dr. Harsita Devi. Blood sugar management, metabolic detox & personalized diet. Clinic in Medavakkam. Book consultation.`,
    keywords: `Ayurveda for diabetes, Ayurvedic diabetes treatment Chennai, blood sugar Ayurveda Medavakkam, Ayurvedic doctor near me, diabetes management Ayurveda, Ayurvedic clinic Chennai`,
    h1: "Ayurvedic Diabetes Treatment in Chennai",
    subtitle:
      "Natural blood sugar management through metabolic balance, herbal medicine, and lifestyle transformation — not just symptom control",
    heroImage: AyurvedicDiabetesTreatment,
    overview: `Ayurveda views diabetes (Madhumeha) as a metabolic disorder rooted in Kapha and Pitta imbalances. At ${SITE_NAME} in Medavakkam, Chennai, Dr. Harsita Devi offers comprehensive Ayurvedic diabetes treatment combining herbal formulations, Panchakarma detox, personalized diet plans, and lifestyle guidance. Patients from ${LOCAL_AREAS} and across Chennai achieve better blood sugar control and reduced medication dependency through our holistic, root-cause approach.`,
    benefits: [
      "Supports healthy blood sugar levels naturally",
      "Improves insulin sensitivity and metabolic function",
      "Reduces risk of diabetes-related complications",
      "Addresses associated symptoms like fatigue and neuropathy",
      "Sustainable results through diet and lifestyle changes",
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
      "Dr. Harsita Devi monitors progress and adjusts treatment plans regularly",
      "Focus on preventing complications, not just lowering numbers",
      "Convenient Medavakkam clinic with online consultation for follow-ups",
    ],
    faq: [
      {
        question: "Can Ayurveda cure diabetes?",
        answer:
          "Ayurveda can significantly improve blood sugar control and, in early-stage Type 2 diabetes, may help achieve remission with consistent lifestyle adherence. Dr. Harsita Devi creates realistic, personalized goals based on your condition.",
      },
      {
        question: "Is Ayurvedic diabetes treatment safe with metformin?",
        answer:
          "Yes, but inform Dr. Harsita Devi about all medications. Ayurvedic herbs can complement conventional treatment, and your plan will be adjusted for safe integration with regular blood sugar monitoring.",
      },
      {
        question: "How long before I see improvement in blood sugar?",
        answer:
          "Many patients notice improved fasting glucose within 4–8 weeks. Significant HbA1c improvement typically requires 3–6 months of consistent treatment and diet adherence.",
      },
      {
        question: "Does Ayurveda help with diabetic neuropathy?",
        answer:
          "Yes, Ayurvedic therapies including herbal medicine, Abhyanga, and Basti can help manage tingling, numbness, and nerve pain associated with diabetic neuropathy.",
      },
    ],
    relatedSlugs: ["weight-loss", "fatty-liver-treatment", "panchakarma"],
  },
  {
    slug: "fatty-liver-treatment",
    title: `Ayurvedic Fatty Liver Treatment in Chennai | ${SITE_NAME}`,
    metaDescription: `Natural Ayurvedic fatty liver treatment in Chennai by Dr. Harsita Devi. Liver detox, herbal medicine & diet management. Clinic in Medavakkam. Book consultation today.`,
    keywords: `Ayurveda for fatty liver, fatty liver treatment Chennai, liver detox Ayurveda Medavakkam, Ayurvedic doctor near me, NAFLD Ayurveda, Ayurvedic clinic Chennai`,
    h1: "Ayurvedic Fatty Liver Treatment in Chennai",
    subtitle:
      "Restore liver health naturally through detox therapy, herbal medicine, and metabolic balance — addressing NAFLD at its root",
    heroImage: AyurvedicFattyLiverTreatment,
    overview: `Fatty liver disease (NAFLD) is increasingly common and often linked to metabolic syndrome, obesity, and poor diet. At ${SITE_NAME} in Medavakkam, Chennai, Dr. Harsita Devi treats fatty liver through Ayurvedic liver detox, herbal formulations, Panchakarma, and personalized diet plans. Patients from ${LOCAL_AREAS} and across Chennai achieve improved liver function and reduced fat accumulation through our holistic approach targeting Pitta and Kapha imbalances.`,
    benefits: [
      "Supports liver detoxification and regeneration naturally",
      "Reduces fat accumulation in liver tissue",
      "Improves digestion and metabolic function",
      "Addresses associated conditions like obesity and high cholesterol",
      "Safe, side-effect-free alternative to aggressive interventions",
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
      "Combines proven Panchakarma protocols with modern diagnostic awareness",
      "Addresses obesity and diabetes — common fatty liver co-factors",
      "Located in Medavakkam — serving all of South Chennai",
    ],
    faq: [
      {
        question: "Can Ayurveda reverse fatty liver?",
        answer:
          "Yes, early and moderate fatty liver can often be reversed with consistent Ayurvedic treatment, diet changes, and weight management. Dr. Harsita Devi assesses your stage and creates a realistic recovery plan.",
      },
      {
        question: "How long does Ayurvedic fatty liver treatment take?",
        answer:
          "Most patients see improvement in liver enzymes within 2–3 months. Complete reversal of fatty liver may require 4–6 months of dedicated treatment and lifestyle adherence.",
      },
      {
        question: "Is Virechana safe for fatty liver?",
        answer:
          "Virechana is performed under strict medical supervision by Dr. Harsita Devi after a thorough assessment. It is one of the most effective Ayurvedic therapies for liver detox when properly administered.",
      },
      {
        question:
          "Can I take Ayurvedic treatment alongside my hepatologist's care?",
        answer:
          "Yes, Ayurvedic treatment complements conventional monitoring. Share your latest liver function reports with Dr. Harsita Devi for a coordinated care plan.",
      },
    ],
    relatedSlugs: ["panchakarma", "weight-loss", "diabetes-treatment"],
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return SERVICE_PAGES.find((page) => page.slug === slug);
}

export function getServicePageUrl(slug: string): string {
  return `${SITE_URL}/${slug}`;
}

export const LOCAL_SEO_KEYWORDS = [
  "Ayurvedic Clinic in Medavakkam",
  "Ayurveda Doctor Chennai",
  "Kerala Panchakarma Medavakkam",
  "Detox Therapy Chennai",
  "Pain Management Ayurveda",
  "Women's Health Ayurveda",
  "Stress Relief Chennai",
  "Ayurvedic Consultation Medavakkam",
  "Ayurvedic Clinic Tambaram",
  "Ayurvedic Clinic Pallikaranai",
  "Ayurvedic Clinic Velachery",
  "Ayurvedic Clinic Perumbakkam",
  ...SERVICE_PAGES.map((p) => p.h1),
];

export const CLINIC_LOCATION_TEXT = `${BUSINESS.name} is located at ${FORMATTED_ADDRESS}, easily accessible from ${LOCAL_AREAS}.`;
