/**
 * Post-build SEO shells: inject 200+ words of unique crawlable HTML into each
 * public route. Audit tools that skip JavaScript otherwise see an empty #root
 * on this SPA and flag "less than 200 words".
 *
 * React replaces #root on mount for real users. Run after `vite build`.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

const SITE_NAME = "Harsha Vedic";
const SITE_URL = "https://www.harshavedic.in";
const DOCTOR = "Dr. Harsita Devi J.K.";
const LOCAL_AREAS =
  "Medavakkam, Tambaram, Pallikaranai, Velachery, and Perumbakkam";
const ADDRESS =
  "Plot no 4, shop no 7, 1st floor, Velachery main road, Medavakkam, Chennai - 600100";

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function resolveTemplate(str) {
  return str
    .replace(/\$\{SITE_NAME\}/g, SITE_NAME)
    .replace(/\$\{LOCAL_AREAS\}/g, LOCAL_AREAS)
    .replace(/\$\{FORMATTED_ADDRESS\}/g, ADDRESS)
    .replace(/\$\{BUSINESS\.doctor\}/g, DOCTOR)
    .replace(/\$\{SITE_URL\}/g, SITE_URL);
}

function extractStringField(block, key) {
  const re = new RegExp(`${key}:\\s*([\\\`'"'])`);
  const m = block.match(re);
  if (!m) return "";
  const quote = m[1];
  const start = m.index + m[0].length;
  let i = start;
  let out = "";
  while (i < block.length) {
    const ch = block[i];
    if (ch === "\\" && quote !== "`") {
      out += block[i + 1] ?? "";
      i += 2;
      continue;
    }
    if (quote === "`" && ch === "\\" && block[i + 1] === "`") {
      out += "`";
      i += 2;
      continue;
    }
    if (ch === quote) break;
    out += ch;
    i += 1;
  }
  return resolveTemplate(out);
}

function extractStringArray(block, key) {
  const re = new RegExp(`${key}:\\s*\\[([\\s\\S]*?)\\n\\s*\\]`);
  const m = block.match(re);
  if (!m) return [];
  const items = [];
  const itemRe = /([`"'])([\s\S]*?)\1/g;
  let match;
  while ((match = itemRe.exec(m[1])) !== null) {
    items.push(resolveTemplate(match[2]));
  }
  return items;
}

function extractQuotedPairs(slice, keyA, keyB) {
  const items = [];
  const startRe = new RegExp(
    `${keyA}:\\s*([\`"'])([\\s\\S]*?)\\1\\s*,\\s*${keyB}:\\s*([\`"'])`,
    "g",
  );
  let m;
  while ((m = startRe.exec(slice)) !== null) {
    const answerQuote = m[3];
    let i = m.index + m[0].length;
    let answer = "";
    while (i < slice.length) {
      const ch = slice[i];
      if (ch === "\\" && answerQuote !== "`") {
        answer += slice[i + 1] ?? "";
        i += 2;
        continue;
      }
      if (answerQuote === "`" && ch === "\\" && slice[i + 1] === "`") {
        answer += "`";
        i += 2;
        continue;
      }
      if (ch === answerQuote) break;
      answer += ch;
      i += 1;
    }
    items.push({
      question: resolveTemplate(m[2]),
      answer: resolveTemplate(answer),
    });
  }
  return items;
}

function extractFaq(block) {
  const faqStart = block.indexOf("faq:");
  if (faqStart < 0) return [];
  return extractQuotedPairs(block.slice(faqStart), "question", "answer");
}

function parseHomeFaq(seoContent) {
  const start = seoContent.indexOf("export const FAQ_ITEMS");
  if (start < 0) return [];
  return extractQuotedPairs(seoContent.slice(start), "question", "answer");
}

function splitObjects(content) {
  return content.split(/\n  \{\n    slug:/).slice(1).map((p) => "slug:" + p);
}

function parseServicePages(content) {
  return splitObjects(content).map((block) => {
    const treatmentsBlock = block.match(
      /treatments:\s*\[([\s\S]*?)\n\s*\],\s*\n\s*whyChooseUs:/,
    );
    const treatments = [];
    if (treatmentsBlock) {
      const tRe =
        /name:\s*[`"']([\s\S]*?)[`"']\s*,\s*description:\s*[`"']([\s\S]*?)[`"']/g;
      let tm;
      while ((tm = tRe.exec(treatmentsBlock[1])) !== null) {
        treatments.push({
          name: resolveTemplate(tm[1]),
          description: resolveTemplate(tm[2]),
        });
      }
    }
    return {
      slug: extractStringField(block, "slug"),
      title: extractStringField(block, "title"),
      metaDescription: extractStringField(block, "metaDescription"),
      h1: extractStringField(block, "h1"),
      subtitle: extractStringField(block, "subtitle"),
      overview: extractStringField(block, "overview"),
      benefits: extractStringArray(block, "benefits"),
      treatments,
      whyChooseUs: extractStringArray(block, "whyChooseUs"),
      faq: extractFaq(block),
    };
  });
}

function parseBlogPosts(content) {
  return splitObjects(content).map((block) => {
    const sections = [];
    const sectionsMatch = block.match(
      /sections:\s*\[([\s\S]*?)\n\s*\],\s*\n\s*faq:/,
    );
    if (sectionsMatch) {
      const sectionBlocks = sectionsMatch[1].split(/\n\s*\{\n\s*heading:/);
      for (const sb of sectionBlocks.slice(1)) {
        const heading = resolveTemplate(
          (sb.match(/^[`"']([\s\S]*?)[`"']/) || [])[1] || "",
        );
        const paragraphs = [];
        const pMatch = sb.match(/paragraphs:\s*\[([\s\S]*?)\]/);
        if (pMatch) {
          const pRe = /([`"'])([\s\S]*?)\1/g;
          let pm;
          while ((pm = pRe.exec(pMatch[1])) !== null) {
            paragraphs.push(resolveTemplate(pm[2]));
          }
        }
        const bullets = [];
        const bMatch = sb.match(/bullets:\s*\[([\s\S]*?)\]/);
        if (bMatch) {
          const bRe = /([`"'])([\s\S]*?)\1/g;
          let bm;
          while ((bm = bRe.exec(bMatch[1])) !== null) {
            bullets.push(resolveTemplate(bm[2]));
          }
        }
        sections.push({ heading, paragraphs, bullets });
      }
    }
    return {
      slug: extractStringField(block, "slug"),
      title: extractStringField(block, "title"),
      metaDescription: extractStringField(block, "metaDescription"),
      h1: extractStringField(block, "h1"),
      excerpt: extractStringField(block, "excerpt"),
      sections,
      faq: extractFaq(block),
    };
  });
}

function mediaAndLinksHtml() {
  return `
  <p>
    <img src="/logo.png" width="120" height="120" alt="Harsha Vedic Ayurveda Clinic logo in Medavakkam, Chennai" />
    <img src="/og-image.jpg" width="600" height="315" alt="Harsha Vedic – Ayurveda Clinic and Wellness Center in Medavakkam, Chennai with Dr. Harsita Devi J.K." />
  </p>
  <p>
    <a href="https://www.instagram.com/harsha_vedic" rel="noopener noreferrer">Follow Harsha Vedic on Instagram</a> ·
    <a href="https://www.linkedin.com/in/dr-harsita-kamlesh-335a4b238/" rel="noopener noreferrer">Dr. Harsita Devi J.K. on LinkedIn</a> ·
    <a href="https://maps.google.com/?q=Harsha+Vedic+Ayurveda+Clinic+Medavakkam" rel="noopener noreferrer">Find us on Google Maps</a> ·
    <a href="https://wa.me/917904094949" rel="noopener noreferrer">WhatsApp consultation</a>
  </p>`;
}

function countWords(html) {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text ? text.split(" ").length : 0;
}

function listHtml(items) {
  if (!items.length) return "";
  return `<ul>${items.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>`;
}

function faqHtml(faqs) {
  if (!faqs.length) return "";
  return `<section><h2>Frequently Asked Questions</h2>${faqs
    .map(
      (f) =>
        `<h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p>`,
    )
    .join("")}</section>`;
}

function homeBody(faqs, services) {
  const serviceLinks = services
    .map(
      (s) =>
        `<li><a href="/${escapeHtml(s.slug)}">${escapeHtml(s.h1)}</a> — ${escapeHtml(s.subtitle)}</li>`,
    )
    .join("");
  return `
<main id="seo-fallback">
  <h1>Natural Healing at Harsha Vedic — Ayurveda Clinic in Medavakkam, Chennai</h1>
  <p>Harsha Vedic is a trusted Ayurveda Clinic &amp; Wellness Center in Medavakkam, Chennai, easily accessible from Tambaram, Pallikaranai, Velachery, and Perumbakkam. Led by ${escapeHtml(DOCTOR)}, an experienced Ayurveda doctor, we offer authentic Kerala Panchakarma, detox therapy, pain management, women's health care, stress relief, and personalized natural healing — in-person or through online Ayurvedic consultation.</p>
  <p>At our clinic we combine classical Ayurvedic wisdom with careful modern assessment. Every patient receives a Prakriti-based plan that addresses the root cause of imbalance rather than masking symptoms. Whether you need joint pain care, PCOS and hormonal support, metabolic and liver health, skin and hair rejuvenation, or a full Panchakarma program, our Medavakkam wellness centre is equipped for authentic therapies including Abhyanga, Shirodhara, and herbal steam.</p>
  <h2>About ${escapeHtml(DOCTOR)}</h2>
  <p>${escapeHtml(DOCTOR)} is a certified Ayurvedic physician providing patient-centric care for families across South Chennai. Consultations focus on constitution, digestion (Agni), lifestyle, and herbal protocols tailored to your goals. Online consultations are available for patients who cannot visit the clinic in person, with the same thoroughness as an in-clinic visit.</p>
  <h2>Ayurvedic Treatments We Offer</h2>
  <ul>${serviceLinks}</ul>
  <h2>Visit Our Wellness Centre</h2>
  <p>Our clinic at ${escapeHtml(ADDRESS)} features dedicated Panchakarma and Shirodhara treatment rooms, herbal steam therapy, and a calm space designed for authentic care. We welcome patients from ${escapeHtml(LOCAL_AREAS)} and across Chennai. Open Monday–Saturday 10:00 AM – 8:30 PM and Sunday 10:00 AM – 5:00 PM. Call +91-7904094949 or book a consultation online.</p>
  ${faqHtml(faqs)}
  ${mediaAndLinksHtml()}
  <p><a href="/treatments">Explore all Ayurvedic treatments</a> · <a href="/blog">Read Ayurveda health articles</a> · <a href="/#consultation">Book a consultation</a> · <a href="/panchakarma">Kerala Panchakarma</a> · <a href="/pcos-treatment">PCOS Ayurveda</a></p>
</main>`;
}

function treatmentsIndexBody(services) {
  return `
<main id="seo-fallback">
  <h1>Ayurvedic Treatments in Medavakkam, Chennai</h1>
  <p>Harsha Vedic offers specialized Ayurveda treatment in Medavakkam for joint pain, women's wellness, metabolic conditions, skin and hair care, and authentic Kerala Panchakarma therapy. ${escapeHtml(DOCTOR)} provides personalized natural healing for patients from ${escapeHtml(LOCAL_AREAS)}, and across Chennai — in-person at our Velachery Main Road clinic or through online consultation.</p>
  <p>Each treatment plan begins with a detailed assessment of your Prakriti (body constitution) and current dosha imbalances. From there we may recommend herbal medicine, therapeutic massage such as Abhyanga and Shirodhara, dietary guidance, lifestyle changes, or a structured Panchakarma detox program. Our goal is sustainable relief and long-term wellness, not quick temporary fixes.</p>
  <p>Explore the treatments below to learn how Ayurveda addresses common conditions at the root cause. If you are unsure where to start, book a consultation and we will guide you to the right therapy for your health goals.</p>
  <h2>Our Treatment Pages</h2>
  <ul>${services
    .map(
      (s) =>
        `<li><a href="/${escapeHtml(s.slug)}"><strong>${escapeHtml(s.h1)}</strong></a> — ${escapeHtml(s.subtitle)}. ${escapeHtml(s.overview.slice(0, 180))}…</li>`,
    )
    .join("")}</ul>
  <p>Clinic address: ${escapeHtml(ADDRESS)}. Phone: +91-7904094949.</p>
  ${mediaAndLinksHtml()}
  <p><a href="/">Home</a> · <a href="/blog">Ayurveda articles</a> · <a href="/#consultation">Book a consultation</a></p>
</main>`;
}

function blogIndexBody(posts) {
  return `
<main id="seo-fallback">
  <h1>Ayurveda Articles &amp; Wellness Guides</h1>
  <p>Evidence-informed Ayurvedic insights on Panchakarma, chronic conditions, diet, and natural remedies — written by ${escapeHtml(SITE_NAME)}'s certified physician ${escapeHtml(DOCTOR)} to help you make informed health decisions. These guides complement in-person and online care at our Medavakkam clinic serving ${escapeHtml(LOCAL_AREAS)}.</p>
  <p>Use these articles to understand how classical therapies work, what to expect during treatment, and which lifestyle habits support lasting results. For personalized advice, always follow up with a consultation rather than self-prescribing strong detox procedures.</p>
  <h2>Latest Articles</h2>
  <ul>${posts
    .map(
      (p) =>
        `<li><a href="/blog/${escapeHtml(p.slug)}"><strong>${escapeHtml(p.h1)}</strong></a> — ${escapeHtml(p.excerpt)}</li>`,
    )
    .join("")}</ul>
  ${mediaAndLinksHtml()}
  <p><a href="/">Home</a> · <a href="/treatments">View Ayurvedic treatments</a> · <a href="/#consultation">Book a consultation</a></p>
</main>`;
}

function serviceBody(page) {
  const treatmentItems = page.treatments.map(
    (t) =>
      `<li><strong>${escapeHtml(t.name)}</strong> — ${escapeHtml(t.description)}</li>`,
  );
  return `
<main id="seo-fallback">
  <h1>${escapeHtml(page.h1)}</h1>
  <p>${escapeHtml(page.subtitle)}</p>
  <p>${escapeHtml(page.overview)}</p>
  <h2>Key Benefits</h2>
  ${listHtml(page.benefits)}
  <h2>Therapies &amp; Approaches</h2>
  <ul>${treatmentItems.join("")}</ul>
  <h2>Why Choose ${escapeHtml(SITE_NAME)}</h2>
  ${listHtml(page.whyChooseUs)}
  ${faqHtml(page.faq)}
  <p>Visit us at ${escapeHtml(ADDRESS)} or book an Ayurvedic consultation with ${escapeHtml(DOCTOR)}. Serving patients from ${escapeHtml(LOCAL_AREAS)}.</p>
  ${mediaAndLinksHtml()}
  <p><a href="/">Home</a> · <a href="/treatments">All treatments</a> · <a href="/blog">Health articles</a> · <a href="/#consultation">Book consultation</a></p>
</main>`;
}

function blogBody(post) {
  const sectionsHtml = post.sections
    .map((s) => {
      const paras = (s.paragraphs || [])
        .map((p) => `<p>${escapeHtml(p)}</p>`)
        .join("");
      const bullets = listHtml(s.bullets || []);
      return `<h2>${escapeHtml(s.heading)}</h2>${paras}${bullets}`;
    })
    .join("");
  return `
<main id="seo-fallback">
  <h1>${escapeHtml(post.h1)}</h1>
  <p>${escapeHtml(post.excerpt)}</p>
  ${sectionsHtml}
  ${faqHtml(post.faq)}
  ${mediaAndLinksHtml()}
  <p>Written for patients of ${escapeHtml(SITE_NAME)} in Medavakkam, Chennai. <a href="/">Home</a> · <a href="/blog">More articles</a> · <a href="/treatments">Treatments</a> · <a href="/#consultation">Book a consultation</a></p>
</main>`;
}

function assertMetaLength(label, text, max) {
  if (text.length > max) {
    console.warn(
      `prerender-seo: ${label} is ${text.length} chars (recommended ≤${max}): ${text.slice(0, 80)}…`,
    );
  }
}

function patchHtml(template, { title, description, path: pagePath, body }) {
  let html = template;
  const canonical = `${SITE_URL}${pagePath === "/" ? "/" : pagePath}`;
  assertMetaLength(`title ${pagePath}`, title, 70);
  assertMetaLength(`description ${pagePath}`, description, 160);

  html = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(title)}</title>`,
  );
  html = html.replace(
    /(<meta\s+name="description"\s+content=")[^"]*(")/i,
    `$1${escapeHtml(description)}$2`,
  );
  html = html.replace(
    /(<link\s+rel="canonical"\s+href=")[^"]*(")/i,
    `$1${canonical}$2`,
  );
  html = html.replace(
    /(<meta\s+property="og:url"\s+content=")[^"]*(")/i,
    `$1${canonical}$2`,
  );
  html = html.replace(
    /(<meta\s+property="og:title"\s+content=")[^"]*(")/i,
    `$1${escapeHtml(title)}$2`,
  );
  html = html.replace(
    /(<meta\s+property="og:description"\s+content=")[^"]*(")/i,
    `$1${escapeHtml(description)}$2`,
  );
  html = html.replace(
    /(<meta\s+name="twitter:url"\s+content=")[^"]*(")/i,
    `$1${canonical}$2`,
  );
  html = html.replace(
    /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/i,
    `$1${escapeHtml(title)}$2`,
  );
  html = html.replace(
    /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/i,
    `$1${escapeHtml(description)}$2`,
  );

  if (!/<div id="root">[\s\S]*?<\/div>/i.test(html)) {
    throw new Error("Could not find #root container in dist/index.html");
  }
  html = html.replace(
    /<div id="root">[\s\S]*?<\/div>/i,
    `<div id="root">${body}</div>`,
  );
  return html;
}

function writeRoute(relPath, html) {
  if (relPath === "/") {
    fs.writeFileSync(path.join(distDir, "index.html"), html);
    return path.join(distDir, "index.html");
  }
  const dir = path.join(distDir, relPath.replace(/^\//, ""));
  fs.mkdirSync(dir, { recursive: true });
  const outFile = path.join(dir, "index.html");
  fs.writeFileSync(outFile, html);
  return outFile;
}

function main() {
  const templatePath = path.join(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error("prerender-seo: dist/index.html not found. Run vite build first.");
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, "utf8");
  const services = parseServicePages(read("src/app/config/servicePages.ts"));
  const posts = parseBlogPosts(read("src/app/config/blogPosts.ts"));
  const homeFaqs = parseHomeFaq(read("src/app/config/seo.ts"));

  const homeTitle =
    read("src/app/config/seo.ts").match(
      /DEFAULT_TITLE\s*=\s*\n?\s*"([^"]+)"/,
    )?.[1] ?? `${SITE_NAME} | Ayurveda Clinic in Medavakkam, Chennai`;

  const homeDescription =
    read("src/app/config/seo.ts").match(
      /DEFAULT_DESCRIPTION\s*=\s*\n?\s*"([^"]+)"/,
    )?.[1] ??
    `${SITE_NAME} is your trusted Ayurvedic clinic in Medavakkam, Chennai.`;

  const routes = [];

  const homeHtmlBody = homeBody(homeFaqs, services);
  writeRoute(
    "/",
    patchHtml(template, {
      title: homeTitle,
      description: homeDescription,
      path: "/",
      body: homeHtmlBody,
    }),
  );
  routes.push({ path: "/", words: countWords(homeHtmlBody) });

  const treatmentsBody = treatmentsIndexBody(services);
  writeRoute(
    "/treatments",
    patchHtml(template, {
      title: `Ayurvedic Treatments in Medavakkam, Chennai | ${SITE_NAME}`,
      description:
        "Ayurveda treatments in Medavakkam at Harsha Vedic — Panchakarma, joint pain, Shirodhara, PCOS care, weight management & skin therapy.",
      path: "/treatments",
      body: treatmentsBody,
    }),
  );
  routes.push({ path: "/treatments", words: countWords(treatmentsBody) });

  const blogIdx = blogIndexBody(posts);
  writeRoute(
    "/blog",
    patchHtml(template, {
      title: `Ayurveda Articles & Health Guides | ${SITE_NAME}`,
      description:
        "Expert Ayurveda articles on Panchakarma, chronic conditions, diet, and natural remedies. Written by Dr. Harsita Devi J.K.",
      path: "/blog",
      body: blogIdx,
    }),
  );
  routes.push({ path: "/blog", words: countWords(blogIdx) });

  for (const page of services) {
    const body = serviceBody(page);
    writeRoute(
      `/${page.slug}`,
      patchHtml(template, {
        title: page.title,
        description: page.metaDescription,
        path: `/${page.slug}`,
        body,
      }),
    );
    routes.push({ path: `/${page.slug}`, words: countWords(body) });
  }

  for (const post of posts) {
    const body = blogBody(post);
    writeRoute(
      `/blog/${post.slug}`,
      patchHtml(template, {
        title: post.title,
        description: post.metaDescription,
        path: `/blog/${post.slug}`,
        body,
      }),
    );
    routes.push({ path: `/blog/${post.slug}`, words: countWords(body) });
  }

  console.log(`prerender-seo: wrote ${routes.length} HTML shells:`);
  for (const r of routes) {
    console.log(`  ${r.path.padEnd(42)} ${r.words} words`);
  }

  const thin = routes.filter((r) => r.words < 200);
  if (thin.length) {
    console.error(
      `\nERROR: ${thin.length} route(s) under 200 words:`,
      thin.map((t) => `${t.path} (${t.words})`).join(", "),
    );
    process.exit(1);
  }
  console.log("\nAll routes have 200+ crawlable words.");
}

main();
