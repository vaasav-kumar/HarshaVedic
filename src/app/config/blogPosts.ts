import PanchakarmaDetox from "../../assets/panchakarma-detox.webp";
import ChronicDiseaseManagement from "../../assets/chronic-disease-management.webp";
import DietManagement from "../../assets/diet-management.webp";
import HerbalTreatments from "../../assets/herbal-treatments.webp";
import TherapeuticMassages from "../../assets/therapeutic-massages.webp";
import StressAndAnxietyRelief from "../../assets/stress-and-anxiety-relief.webp";
import {
  BUSINESS,
  LOCAL_AREAS,
  SITE_NAME,
  SITE_URL,
} from "./seo";

export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  category: string;
  heroImage: string;
  sections: BlogSection[];
  faq: { question: string; answer: string }[];
  relatedSlugs: string[];
  relatedServiceSlugs: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "benefits-of-panchakarma",
    title: `Benefits of Panchakarma | ${SITE_NAME}`,
    metaDescription:
      "Discover the proven benefits of Panchakarma — deep detox, improved digestion, stronger immunity, and mental clarity. Learn how Kerala Panchakarma works and who should consider it.",
    keywords:
      "benefits of Panchakarma, Panchakarma detox benefits, Kerala Panchakarma, Ayurvedic detox therapy, Panchakarma Chennai, Ayurveda wellness",
    h1: "Benefits of Panchakarma: Why Ayurveda's Detox Therapy Transforms Health",
    excerpt:
      "Panchakarma is Ayurveda's most complete detox and rejuvenation program. From toxin elimination to mental clarity, here are the key benefits — and what to expect during treatment.",
    publishedAt: "2026-06-23",
    author: BUSINESS.doctor,
    category: "Panchakarma",
    heroImage: PanchakarmaDetox,
    sections: [
      {
        heading: "What Is Panchakarma?",
        paragraphs: [
          "Panchakarma — meaning 'five actions' in Sanskrit — is Ayurveda's flagship detox and rejuvenation therapy. Developed over thousands of years in Kerala, it uses five primary cleansing procedures (Vamana, Virechana, Basti, Nasya, and Raktamokshana) along with preparatory and follow-up therapies to remove accumulated toxins (Ama) from deep tissues.",
          `At ${SITE_NAME} in Medavakkam, Chennai, Dr. Harsita Devi offers authentic Kerala Panchakarma tailored to each patient's Prakriti (body constitution) and current imbalances. Unlike quick detox fads, Panchakarma works systematically — preparing the body, eliminating toxins, and restoring balance over 7 to 21 days.`,
        ],
      },
      {
        heading: "Top Benefits of Panchakarma",
        bullets: [
          "Deep toxin elimination — Removes Ama from tissues, joints, and digestive channels that regular cleansing cannot reach",
          "Restored digestive fire (Agni) — Improves metabolism, reduces bloating, and enhances nutrient absorption",
          "Stronger immunity — Rejuvenates Ojas (vital essence), making the body more resilient to seasonal illnesses",
          "Chronic condition relief — Helps manage arthritis, skin disorders, migraines, PCOS, and lifestyle-related diseases at the root cause",
          "Mental clarity and emotional balance — Shirodhara and Nasya calm the nervous system, reducing stress and anxiety",
          "Rejuvenation and anti-ageing — Rasayana therapies post-Panchakarma promote cellular renewal and vitality",
          "Weight management support — Corrects metabolic imbalances that contribute to stubborn weight gain",
          "Better sleep and energy — Patients often report deeper sleep and sustained energy within the first week",
        ],
      },
      {
        heading: "Who Should Consider Panchakarma?",
        paragraphs: [
          "Panchakarma is recommended for anyone experiencing chronic fatigue, digestive issues, recurring infections, skin problems, joint pain, hormonal imbalances, or mental stress. It is also ideal as a seasonal detox — especially during Ritu Sandhi (seasonal transitions) in spring and autumn.",
          "Even healthy individuals benefit from Panchakarma as preventive care. Regular detox every 1–2 years helps maintain optimal health and prevents the accumulation of toxins from modern diets and environmental exposure.",
        ],
      },
      {
        heading: "What Happens During a Panchakarma Program?",
        paragraphs: [
          "A typical program at our clinic follows three phases: Purvakarma (preparation with oil massage and steam), Pradhanakarma (main cleansing procedures selected for your dosha), and Paschatkarma (post-treatment diet and lifestyle guidance). Each phase is supervised by Dr. Harsita Devi to ensure safety and maximum benefit.",
          `Patients from ${LOCAL_AREAS} and across Chennai visit our Medavakkam clinic for in-person Panchakarma. Online consultations are available for pre-assessment and follow-up care.`,
        ],
      },
    ],
    faq: [
      {
        question: "How often should I do Panchakarma?",
        answer:
          "Most people benefit from Panchakarma once a year for maintenance, or twice a year during seasonal transitions. Those with chronic conditions may need a longer program initially, followed by shorter maintenance sessions.",
      },
      {
        question: "Are the benefits of Panchakarma permanent?",
        answer:
          "The benefits can be long-lasting when combined with the recommended post-treatment diet and lifestyle changes. Without follow-up care, toxins can re-accumulate over time.",
      },
      {
        question: "Can I do Panchakarma if I am on medication?",
        answer:
          "Yes, but it must be supervised by a qualified Ayurvedic physician who can coordinate with your existing treatment plan. Dr. Harsita Devi reviews all medications during your consultation.",
      },
    ],
    relatedSlugs: ["is-panchakarma-painful", "best-foods-after-panchakarma"],
    relatedServiceSlugs: ["panchakarma", "weight-loss", "skin-care"],
  },
  {
    slug: "is-panchakarma-painful",
    title: `Is Panchakarma Painful? What to Expect | ${SITE_NAME}`,
    metaDescription:
      "Worried Panchakarma might be painful? Learn what each procedure feels like, common side effects, and how Dr. Harsita Devi ensures a comfortable, safe detox experience.",
    keywords:
      "is Panchakarma painful, Panchakarma side effects, Panchakarma experience, Virechana, Basti therapy, Panchakarma Chennai",
    h1: "Is Panchakarma Painful? What Patients Actually Experience",
    excerpt:
      "Many people hesitate to try Panchakarma because they fear pain or discomfort. Here is an honest look at what each procedure feels like — and why most patients find it deeply relaxing.",
    publishedAt: "2026-06-30",
    author: BUSINESS.doctor,
    category: "Panchakarma",
    heroImage: TherapeuticMassages,
    sections: [
      {
        heading: "The Short Answer: Panchakarma Is Not Painful",
        paragraphs: [
          "Panchakarma is a therapeutic cleansing process, not a painful medical procedure. Most patients describe the experience as deeply relaxing — especially the preparatory therapies like Abhyanga (oil massage) and Shirodhara (warm oil stream on the forehead). Some procedures cause temporary discomfort, but this is manageable and monitored closely by your physician.",
          "At Harsha Vedic, Dr. Harsita Devi customizes every protocol to your tolerance level. If you feel excessive discomfort at any point, the treatment is adjusted immediately.",
        ],
      },
      {
        heading: "What Each Procedure Feels Like",
        bullets: [
          "Abhyanga (oil massage) — Warm, soothing, and deeply relaxing. Many patients fall asleep during this therapy",
          "Swedana (herbal steam) — Mild warmth and sweating. Feels like a gentle sauna session",
          "Vamana (therapeutic emesis) — Can cause nausea during the process, but is over within 1–2 hours. Patients feel lighter afterward",
          "Virechana (purgation) — Mild to moderate loose motions for several hours. Rest and hydration are provided at the clinic",
          "Basti (medicated enema) — Minimal discomfort. The warm herbal decoction often provides immediate relief from constipation and Vata pain",
          "Nasya (nasal drops) — Brief tingling or warmth in the sinuses. Very effective for headaches and sinus issues",
          "Shirodhara — Completely painless and often described as the most blissful part of Panchakarma",
        ],
      },
      {
        heading: "Common Temporary Side Effects",
        paragraphs: [
          "During Panchakarma, it is normal to experience mild fatigue, increased sleep, changes in appetite, or emotional release. These are signs that the body is actively detoxifying — not side effects to worry about. Your physician monitors you daily and adjusts food, rest, and therapies accordingly.",
          "Serious adverse effects are extremely rare when Panchakarma is performed under qualified supervision with proper preparation (Purvakarma). Self-administered or improperly performed Panchakarma is where problems occur — which is why choosing a certified clinic matters.",
        ],
      },
      {
        heading: "How We Keep You Comfortable",
        paragraphs: [
          "Our Medavakkam clinic provides a calm, private treatment environment. Each patient has a dedicated treatment room, warm herbal oils prepared fresh, and daily check-ins with Dr. Harsita Devi. We also provide detailed pre- and post-treatment dietary guidelines to minimize discomfort.",
          "If you have specific concerns — such as a low pain threshold, anxiety, or a chronic condition — share them during your consultation. Protocols can be modified without compromising effectiveness.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I work during Panchakarma?",
        answer:
          "We recommend taking leave during the main cleansing procedures (3–5 days). Preparatory and follow-up phases are gentler and some patients manage part-time work.",
      },
      {
        question: "Is Panchakarma safe for elderly patients?",
        answer:
          "Yes, with modified protocols. Gentle oleation, mild Swedana, and Basti are often preferred over stronger procedures like Vamana for older patients.",
      },
      {
        question: "What if I feel sick during treatment?",
        answer:
          "Inform your therapist or doctor immediately. Treatment intensity can be reduced, and supportive therapies like rest, warm fluids, and gentle massage are provided.",
      },
    ],
    relatedSlugs: ["benefits-of-panchakarma", "best-foods-after-panchakarma"],
    relatedServiceSlugs: ["panchakarma"],
  },
  {
    slug: "ayurveda-for-fatty-liver",
    title: `Ayurveda for Fatty Liver: Natural Treatment Guide | ${SITE_NAME}`,
    metaDescription:
      "Ayurvedic approach to fatty liver (NAFLD) — herbal medicines, diet changes, Panchakarma detox, and lifestyle tips. Root-cause treatment by Dr. Harsita Devi in Chennai.",
    keywords:
      "Ayurveda for fatty liver, fatty liver treatment Ayurveda, NAFLD Ayurvedic treatment, liver detox Ayurveda, Medavakkam Ayurvedic clinic",
    h1: "Ayurveda for Fatty Liver: A Root-Cause Approach to NAFLD",
    excerpt:
      "Fatty liver disease is rising across India, often linked to diet and lifestyle. Ayurveda treats it by correcting Pitta and Kapha imbalances, strengthening Agni, and supporting liver function naturally.",
    publishedAt: "2026-07-07",
    author: BUSINESS.doctor,
    category: "Chronic Conditions",
    heroImage: ChronicDiseaseManagement,
    sections: [
      {
        heading: "Understanding Fatty Liver in Ayurveda",
        paragraphs: [
          "In Ayurveda, fatty liver is understood as a condition involving Medodushti (fat tissue corruption), Agnimandya (weakened digestive fire), and Srotorodha (channel obstruction). Excess Kapha and Ama accumulate in the liver (Yakrit), impairing its ability to process fats and toxins.",
          "Non-alcoholic fatty liver disease (NAFLD) is increasingly common due to sedentary lifestyles, processed foods, and metabolic syndrome. Ayurveda addresses the root cause rather than only managing liver enzyme levels.",
        ],
      },
      {
        heading: "Ayurvedic Treatment for Fatty Liver",
        bullets: [
          "Herbal formulations — Kutki, Bhumi Amla, Punarnava, and Kalmegh are classical herbs that support liver function and reduce fat accumulation",
          "Diet correction — A Kapha-Pitta pacifying diet with bitter and astringent tastes (leafy greens, bitter gourd, barley, moong dal)",
          "Agni restoration — Light, warm, easily digestible meals eaten at regular times to rebuild metabolic fire",
          "Panchakarma — Virechana (Pitta cleansing) and Basti are particularly effective for liver detox",
          "Exercise and Yoga — Regular walking, Surya Namaskar, and twisting asanas improve circulation and fat metabolism",
          "Stress management — Chronic stress elevates cortisol, which worsens fatty liver. Shirodhara and meditation help",
        ],
      },
      {
        heading: "Foods to Favor and Avoid",
        bullets: [
          "Favor: Bitter gourd, fenugreek, turmeric, barley, oats, green leafy vegetables, moong dal, warm water with lemon",
          "Avoid: Fried foods, refined sugar, white bread, alcohol, excessive dairy, cold and heavy foods, late-night eating",
          "Limit: Red meat, processed snacks, sweetened beverages, and excessive fruit juice",
        ],
      },
      {
        heading: "When to Seek Professional Help",
        paragraphs: [
          "If your ultrasound or blood tests show elevated liver enzymes or grade 2–3 fatty liver, professional Ayurvedic treatment is recommended alongside regular medical monitoring. Dr. Harsita Devi creates personalized protocols based on your Prakriti, liver status, and associated conditions like diabetes or obesity.",
          `Our clinic in Medavakkam serves patients from ${LOCAL_AREAS} with both in-person treatment and online consultations for diet and herbal guidance.`,
        ],
      },
    ],
    faq: [
      {
        question: "Can Ayurveda reverse fatty liver?",
        answer:
          "Early-stage (Grade 1) fatty liver often shows significant improvement with consistent Ayurvedic treatment, diet changes, and exercise. Advanced stages require longer treatment and regular monitoring.",
      },
      {
        question: "How long does Ayurvedic fatty liver treatment take?",
        answer:
          "Most patients see improvements in liver enzymes within 3–6 months. A full reversal program typically runs 6–12 months depending on severity.",
      },
      {
        question: "Can I take Ayurvedic herbs alongside my doctor's medication?",
        answer:
          "Yes, but inform both your Ayurvedic physician and allopathic doctor. Dr. Harsita Devi coordinates treatment plans to avoid interactions.",
      },
    ],
    relatedSlugs: ["ayurveda-for-diabetes", "benefits-of-panchakarma"],
    relatedServiceSlugs: ["fatty-liver-treatment", "panchakarma", "weight-loss"],
  },
  {
    slug: "ayurveda-for-diabetes",
    title: `Ayurveda for Diabetes: Madhumeha Management | ${SITE_NAME}`,
    metaDescription:
      "Ayurvedic treatment for diabetes (Madhumeha) — herbal medicines, diet plan, Panchakarma, and lifestyle changes. Personalized care by Dr. Harsita Devi in Chennai.",
    keywords:
      "Ayurveda for diabetes, Madhumeha treatment, Ayurvedic diabetes management, diabetes diet Ayurveda, Ayurvedic doctor Chennai",
    h1: "Ayurveda for Diabetes: Managing Madhumeha Naturally",
    excerpt:
      "Diabetes (Madhumeha) in Ayurveda is a metabolic disorder rooted in Kapha and Meda vitiation. Learn how herbal medicine, diet, and Panchakarma help manage blood sugar at the root cause.",
    publishedAt: "2026-07-14",
    author: BUSINESS.doctor,
    category: "Chronic Conditions",
    heroImage: DietManagement,
    sections: [
      {
        heading: "Diabetes in Ayurveda: The Madhumeha Perspective",
        paragraphs: [
          "Ayurveda describes diabetes as Madhumeha — literally 'honey urine' — a condition where excess Kapha and Meda (fat tissue) block channels, preventing proper glucose utilization. This leads to elevated blood sugar, frequent urination, thirst, and fatigue.",
          "Unlike symptomatic management alone, Ayurveda targets the underlying doshic imbalance, weakened Agni, and Ojas depletion that drive the disease. Treatment is personalized based on whether your diabetes is primarily Kapha-type (obesity-related), Pitta-type (inflammatory), or Vata-type (lean diabetes).",
        ],
      },
      {
        heading: "Ayurvedic Treatment Approach",
        bullets: [
          "Herbal medicines — Gudmar (Gymnema sylvestre), Vijaysar, Methi, Jamun seed, and Neem are classical anti-diabetic herbs",
          "Diet management — A Kapha-reducing diet with low glycemic foods, bitter vegetables, and controlled portions",
          "Panchakarma — Virechana and Basti help remove Ama and reset metabolism. Particularly effective for Type 2 diabetes",
          "Exercise — Daily walking (30–45 minutes), Yoga, and Pranayama improve insulin sensitivity",
          "Rasayana therapy — Amalaki, Shilajit, and Chyawanprash help rebuild Ojas and prevent complications",
          "Regular monitoring — Blood sugar tracking combined with Ayurvedic pulse diagnosis (Nadi Pariksha)",
        ],
      },
      {
        heading: "Ayurvedic Diet Tips for Diabetics",
        bullets: [
          "Eat at fixed times — Regular meal timing stabilizes blood sugar better than irregular eating",
          "Start with bitter foods — Bitter gourd juice, methi water, or a small salad of raw greens before meals",
          "Choose whole grains — Barley (Yava), millet, and brown rice over refined white rice",
          "Include spices — Turmeric, cinnamon, fenugreek, and cumin improve glucose metabolism",
          "Avoid — White sugar, sweets, fried snacks, heavy dairy, fruit juices, and excessive rice portions",
          "Stay hydrated — Warm water throughout the day. Avoid cold drinks which weaken Agni",
        ],
      },
      {
        heading: "Integrating Ayurveda with Modern Diabetes Care",
        paragraphs: [
          "Ayurveda works best as a complementary approach alongside conventional diabetes management. Many patients at Harsha Vedic successfully reduce medication dependency over time under medical supervision — but never stop prescribed medications without your doctor's approval.",
          "Dr. Harsita Devi creates individualized treatment plans considering your HbA1c levels, BMI, comorbidities, and Prakriti. Regular follow-ups track progress through both blood reports and Ayurvedic assessment.",
        ],
      },
    ],
    faq: [
      {
        question: "Can Ayurveda cure Type 2 diabetes?",
        answer:
          "Early-stage Type 2 diabetes often shows significant improvement with Ayurvedic treatment, sometimes allowing reduced medication. Advanced or long-standing diabetes is managed to prevent complications and improve quality of life.",
      },
      {
        question: "Is Ayurvedic treatment safe for Type 1 diabetes?",
        answer:
          "Ayurveda can support Type 1 diabetes management through diet, stress relief, and complication prevention, but insulin remains essential. Always coordinate with your endocrinologist.",
      },
      {
        question: "Which Panchakarma is best for diabetes?",
        answer:
          "Virechana (Pitta cleansing) and Basti (Vata balancing) are most commonly recommended. The choice depends on your doshic profile and current blood sugar control.",
      },
    ],
    relatedSlugs: ["ayurveda-for-fatty-liver", "home-remedies-for-acidity"],
    relatedServiceSlugs: ["diabetes-treatment", "weight-loss", "panchakarma"],
  },
  {
    slug: "best-foods-after-panchakarma",
    title: `Best Foods After Panchakarma: Post-Detox Diet Guide | ${SITE_NAME}`,
    metaDescription:
      "What to eat after Panchakarma? Complete post-detox diet guide with recommended foods, meal timing, and foods to avoid for lasting Panchakarma benefits.",
    keywords:
      "best foods after Panchakarma, post Panchakarma diet, Paschatkarma diet, Ayurvedic diet after detox, Panchakarma recovery food",
    h1: "Best Foods After Panchakarma: Your Post-Detox Diet Guide",
    excerpt:
      "What you eat after Panchakarma is just as important as the treatment itself. Follow these dietary guidelines to preserve detox benefits and rebuild digestive strength.",
    publishedAt: "2026-07-21",
    author: BUSINESS.doctor,
    category: "Panchakarma",
    heroImage: DietManagement,
    sections: [
      {
        heading: "Why Post-Panchakarma Diet Matters",
        paragraphs: [
          "After Panchakarma, your digestive fire (Agni) is in a delicate reset state. The channels (Srotas) are open and clean, but your body is also weakened from the cleansing process. Eating the wrong foods at this stage can reintroduce toxins and undo weeks of treatment.",
          "Paschatkarma — the post-treatment phase — typically lasts 7 to 14 days after the main procedures. During this time, food is considered medicine. Dr. Harsita Devi provides a personalized diet plan based on your constitution and the Panchakarma procedures you underwent.",
        ],
      },
      {
        heading: "Best Foods to Eat After Panchakarma",
        bullets: [
          "Khichdi — The quintessential post-Panchakarma meal. Soft, warm, and tridoshic when made with moong dal, rice, ghee, and mild spices",
          "Moong dal — Lightest of all lentils, easy to digest, and excellent for rebuilding strength",
          "Basmati rice — Nourishing and gentle on the digestive system",
          "Steamed vegetables — Lauki (bottle gourd), carrots, spinach, and pumpkin — cooked soft with minimal spices",
          "Ghee — Small amounts of pure cow ghee kindle Agni and nourish tissues without overloading digestion",
          "Warm soups — Vegetable or dal-based soups provide hydration and easy nutrition",
          "Fresh fruits — Stewed apple, papaya, or pomegranate in moderation (avoid raw cold fruits initially)",
          "Herbal teas — CCF tea (Cumin-Coriander-Fennel), ginger tea, or tulsi tea aid digestion",
        ],
      },
      {
        heading: "Foods to Strictly Avoid After Panchakarma",
        bullets: [
          "Raw salads and cold foods — They shock the weakened Agni and introduce Ama",
          "Heavy, fried, and oily foods — Difficult to digest and counterproductive after detox",
          "Dairy (except ghee) — Curd, cheese, and ice cream are heavy and Kapha-increasing",
          "Non-vegetarian food — Meat is heavy and takes days to digest; avoid for at least 2 weeks",
          "Processed and packaged foods — Preservatives and additives reintroduce toxins",
          "Cold beverages and ice — Always drink room temperature or warm water",
          "Excessive spices — Avoid chili, heavy masalas, and sour pickles initially",
        ],
      },
      {
        heading: "Sample Post-Panchakarma Meal Plan",
        paragraphs: [
          "Day 1–3: Only khichdi, moong dal soup, and warm water with ginger. Small, frequent meals (5–6 times daily).",
          "Day 4–7: Add steamed vegetables, soft roti, and stewed fruits. Gradually increase portion sizes.",
          "Day 8–14: Introduce a wider variety — other dals, mild curries, and soaked nuts. Resume normal activity levels.",
          "After 14 days: Transition to your regular Ayurvedic diet based on your Prakriti. Continue avoiding processed foods and eating mindfully.",
        ],
      },
      {
        heading: "General Guidelines",
        bullets: [
          "Eat only when hungry — Do not force meals during the recovery phase",
          "Chew thoroughly — Support your weakened Agni by eating slowly",
          "Maintain meal timing — Eat at the same times daily to rebuild routine",
          "Rest adequately — Sleep 7–8 hours; avoid strenuous exercise for the first week",
          "Stay warm — Keep the body warm; avoid air conditioning directly on you",
        ],
      },
    ],
    faq: [
      {
        question: "Can I eat fruits immediately after Panchakarma?",
        answer:
          "Stick to stewed or ripe fruits like papaya and apple for the first week. Raw, cold, or sour fruits should be avoided until Agni is fully restored.",
      },
      {
        question: "When can I resume my normal diet?",
        answer:
          "Most patients return to a regular Ayurvedic diet after 2–3 weeks. However, it is best to permanently reduce processed foods, cold items, and heavy meals.",
      },
      {
        question: "Can I drink coffee or tea after Panchakarma?",
        answer:
          "Avoid coffee for at least 2 weeks as it aggravates Vata and Pitta. Mild herbal teas and ginger tea are fine from day one.",
      },
    ],
    relatedSlugs: ["benefits-of-panchakarma", "is-panchakarma-painful"],
    relatedServiceSlugs: ["panchakarma"],
  },
  {
    slug: "home-remedies-for-acidity",
    title: `Home Remedies for Acidity: Ayurvedic Solutions | ${SITE_NAME}`,
    metaDescription:
      "Simple Ayurvedic home remedies for acidity and GERD — ginger, fennel, amla, and lifestyle tips. When to try home care vs. consult an Ayurvedic doctor.",
    keywords:
      "home remedies for acidity, Ayurveda for acidity, GERD home remedies, acid reflux Ayurveda, natural acidity relief",
    h1: "Home Remedies for Acidity: Ayurvedic Solutions That Work",
    excerpt:
      "Occasional acidity can often be managed with simple Ayurvedic home remedies. Here are safe, effective solutions — and when you should see a doctor instead.",
    publishedAt: "2026-07-28",
    author: BUSINESS.doctor,
    category: "Home Remedies",
    heroImage: HerbalTreatments,
    sections: [
      {
        heading: "Acidity in Ayurveda: Amlapitta",
        paragraphs: [
          "Ayurveda describes chronic acidity as Amlapitta — a condition where aggravated Pitta dosha produces excess acid in the stomach. Common triggers include spicy and fried foods, irregular eating, stress, late-night meals, and excessive tea or coffee.",
          "While occasional acidity responds well to home remedies, chronic or severe acid reflux (GERD) needs professional evaluation to prevent complications like ulcers or Barrett's esophagus.",
        ],
      },
      {
        heading: "Effective Home Remedies for Acidity",
        bullets: [
          "Fennel seeds (Saunf) — Chew 1 teaspoon after meals. One of the simplest and most effective remedies",
          "Ginger tea — Boil fresh ginger in water. Drink 30 minutes before meals to kindle Agni without aggravating Pitta",
          "Amla (Indian gooseberry) — 1 teaspoon fresh amla juice or amla powder with honey on an empty stomach",
          "Cold milk — Half a cup of cold (not chilled) milk provides temporary relief by neutralizing stomach acid",
          "Coconut water — Naturally cooling and Pitta-pacifying. Drink fresh coconut water mid-morning",
          "Coriander-cumin-fennel tea — Boil equal parts of dhania, jeera, and saunf. Sip throughout the day",
          "Aloe vera juice — 2 tablespoons of fresh aloe juice before meals soothes the stomach lining",
          "Chewing tulsi leaves — 5–6 fresh basil leaves after meals reduce gas and acidity",
        ],
      },
      {
        heading: "Lifestyle Changes to Prevent Acidity",
        bullets: [
          "Eat on time — Skipping meals or eating late at night is a major acidity trigger",
          "Avoid lying down after meals — Wait at least 2–3 hours before sleeping",
          "Reduce spice and oil — Cut back on chili, fried foods, and heavy curries",
          "Manage stress — Practice 10 minutes of deep breathing or meditation daily",
          "Sleep with head elevated — If nighttime reflux is an issue, raise the head of your bed slightly",
          "Stay hydrated — Drink warm water between meals, not during meals",
        ],
      },
      {
        heading: "When Home Remedies Are Not Enough",
        paragraphs: [
          "Consult an Ayurvedic physician if you experience acidity more than twice a week, blood in vomit or stool, unexplained weight loss, difficulty swallowing, or if home remedies stop working after 2 weeks. These may indicate a deeper imbalance requiring herbal medicines and possibly Panchakarma.",
          "Dr. Harsita Devi treats chronic Amlapitta with personalized herbal formulations, dietary plans, and stress management therapies at our Medavakkam clinic.",
        ],
      },
    ],
    faq: [
      {
        question: "Is cold milk good for acidity?",
        answer:
          "Cold milk provides temporary relief by coating the stomach lining, but it can worsen acidity long-term by stimulating acid rebound. Use it sparingly for quick relief.",
      },
      {
        question: "Can I take antacids along with Ayurvedic remedies?",
        answer:
          "Occasional antacid use is fine alongside home remedies. For chronic acidity, Ayurvedic treatment can often reduce the need for antacids over time.",
      },
      {
        question: "Does stress cause acidity?",
        answer:
          "Yes. Stress aggravates Vata, which disturbs Agni and can push Pitta upward, causing acid reflux. Stress management is a key part of Ayurvedic acidity treatment.",
      },
    ],
    relatedSlugs: ["ayurveda-for-diabetes", "ayurveda-for-fatty-liver"],
    relatedServiceSlugs: ["panchakarma"],
  },
  {
    slug: "ayurveda-for-cervical-pain",
    title: `Ayurveda for Cervical Pain: Neck Pain Relief | ${SITE_NAME}`,
    metaDescription:
      "Ayurvedic treatment for cervical pain and spondylosis — herbal oils, Greeva Basti, Abhyanga, and exercises. Natural neck pain relief in Chennai by Dr. Harsita Devi.",
    keywords:
      "Ayurveda for cervical pain, cervical spondylosis Ayurveda, neck pain treatment Ayurveda, Greeva Basti, Ayurvedic doctor Chennai",
    h1: "Ayurveda for Cervical Pain: Natural Relief for Neck Pain",
    excerpt:
      "Cervical pain from desk work, poor posture, or spondylosis responds well to Ayurvedic therapies. Learn about Greeva Basti, medicated oils, and exercises for lasting relief.",
    publishedAt: "2026-08-04",
    author: BUSINESS.doctor,
    category: "Pain Management",
    heroImage: TherapeuticMassages,
    sections: [
      {
        heading: "Cervical Pain in Ayurveda",
        paragraphs: [
          "Cervical pain — including cervical spondylosis, muscle strain, and nerve compression — is primarily a Vata disorder in Ayurveda. Prolonged sitting, poor posture, cold exposure, and stress aggravate Vata in the neck region (Greeva), causing stiffness, pain, and reduced mobility.",
          "Many patients in Chennai suffer from tech neck due to long hours at computers and mobile phones. Ayurveda offers effective, drug-free treatment that addresses both the symptoms and the underlying Vata imbalance.",
        ],
      },
      {
        heading: "Ayurvedic Treatments for Cervical Pain",
        bullets: [
          "Greeva Basti — A warm medicated oil pool is retained on the cervical spine using a dough ring. Deeply nourishing for discs and nerves",
          "Abhyanga — Full-body or local oil massage with Mahanarayan or Karpasasthyadi tailam reduces muscle tension",
          "Swedana — Herbal steam after oil massage improves circulation and flexibility",
          "Nasya — Medicated nasal drops treat cervical pain with associated headaches or vertigo",
          "Panchakarma — Basti (medicated enema) is the most effective Panchakarma for chronic Vata disorders",
          "Herbal medicines — Yograj Guggulu, Rasna, Guggulu, and Shallaki reduce inflammation and strengthen joints",
          "Kati/Greeva Pichu — Local oil application with cotton soaked in warm medicated oil",
        ],
      },
      {
        heading: "Exercises and Lifestyle Tips",
        bullets: [
          "Neck rotations — Gentle clockwise and anticlockwise rotations, 5 times each, twice daily",
          "Chin tucks — Pull chin toward chest, hold 5 seconds, repeat 10 times to correct forward head posture",
          "Avoid pillow stacking — Use a single firm pillow that supports the natural neck curve",
          "Take breaks — Every 45 minutes of desk work, stand and stretch for 2–3 minutes",
          "Apply warm sesame oil — Self-massage the neck and shoulders before bath, especially in cold weather",
          "Yoga — Bhujangasana (Cobra), Marjariasana (Cat-Cow), and Balasana (Child's Pose) gently mobilize the cervical spine",
          "Avoid — Cold air directly on the neck, heavy bags on one shoulder, and sleeping on the stomach",
        ],
      },
      {
        heading: "When to Visit a Clinic",
        paragraphs: [
          "If cervical pain persists beyond 2 weeks, radiates to arms with numbness or tingling, or is accompanied by dizziness and headaches, professional treatment is recommended. Early intervention prevents progression to chronic spondylosis.",
          `At ${SITE_NAME} in Medavakkam, Dr. Harsita Devi offers Greeva Basti, therapeutic massage, and personalized herbal treatment for cervical pain. Patients from ${LOCAL_AREAS} and across Chennai visit us for both acute and chronic neck pain management.`,
        ],
      },
    ],
    faq: [
      {
        question: "How many Greeva Basti sessions are needed?",
        answer:
          "Typically 7–14 sessions depending on severity. Acute pain may resolve in 5 sessions; chronic spondylosis often needs 14–21 sessions combined with oral medicines.",
      },
      {
        question: "Can Ayurveda treat cervical spondylosis?",
        answer:
          "Ayurveda cannot reverse bone changes, but it effectively manages pain, stiffness, and nerve symptoms. Many patients achieve significant relief and improved mobility without surgery.",
      },
      {
        question: "Is cervical pain related to migraines?",
        answer:
          "Yes. Cervical nerve compression can trigger cervicogenic headaches. Nasya and Greeva Basti often help both neck pain and associated migraines.",
      },
    ],
    relatedSlugs: ["benefits-of-panchakarma", "home-remedies-for-acidity"],
    relatedServiceSlugs: ["back-pain-treatment", "knee-pain-treatment", "migraine-treatment"],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getBlogPostUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}`;
}

export function getAllBlogPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getBlogWordCount(post: BlogPost): number {
  return post.sections.reduce((count, section) => {
    const paragraphWords = (section.paragraphs ?? []).join(" ").split(/\s+/).length;
    const bulletWords = (section.bullets ?? []).join(" ").split(/\s+/).length;
    return count + paragraphWords + bulletWords;
  }, 0);
}

export function getReadingTimeMinutes(post: BlogPost): number {
  return Math.max(1, Math.ceil(getBlogWordCount(post) / 200));
}
