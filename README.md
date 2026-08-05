# Ayurvedic Clinic Website

This is a code bundle for Ayurvedic Clinic Website. The original project is available at https://www.figma.com/design/Qyd5Mz9Tl43v8gaTyqOGnw/Ayurvedic-Clinic-Website.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## SEO

Basic SEO (meta tags, Open Graph, sitemap, robots.txt) is configured in `index.html` and `public/`.

Advanced SEO lives in:

- `src/app/config/seo.ts` — site URL, business info, services, FAQs, testimonials
- `src/app/components/SeoStructuredData.tsx` — JSON-LD schemas
- `src/app/components/FaqSection.tsx` — visible FAQ section (paired with FAQPage schema)

### Advanced SEO checklist (post-deploy)

1. **Google Search Console** — Add and verify the property at [search.google.com/search-console](https://search.google.com/search-console). Submit `sitemap.xml`.
2. **Google Business Profile** — Create or claim the listing for Harsha Vedic in Chennai. Match name, address, phone, and hours with `src/app/config/seo.ts`.
3. **Bing Webmaster Tools** — Submit the same sitemap at [bing.com/webmasters](https://www.bing.com/webmasters).
4. **OG image** — Add a 1200×630 `public/og-image.jpg` for social previews (referenced in meta tags).
5. **Core Web Vitals** — Run [PageSpeed Insights](https://pagespeed.web.dev/) and fix LCP/CLS issues (compress images, lazy-load below-fold content).
6. **Rich results test** — Validate structured data at [Google Rich Results Test](https://search.google.com/test/rich-results).
7. **Local citations** — List the clinic consistently on Justdial, Practo, and health directories using the same NAP (name, address, phone).
8. **Analytics** — Firebase Analytics is wired in `index.html`; monitor traffic and conversion from the consultation form.
9. **Custom domain** — Primary domain is `https://harshavedic.in`. In Vercel → Project → Settings → Domains, add `harshavedic.in` and `www.harshavedic.in` (www redirects to apex via `vercel.json`).
10. **Content** — Keep FAQ answers and service descriptions in `seo.ts` aligned with on-page copy; add blog or condition-specific pages for long-tail keywords when ready.
