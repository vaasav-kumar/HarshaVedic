import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const width = 1200;
const height = 630;

const bg = await sharp(path.join(root, "src/assets/clinic-exterior.jpg"))
  .resize(width, height, { fit: "cover", position: "centre" })
  .modulate({ brightness: 0.55, saturation: 0.9 })
  .toBuffer();

const logo = await sharp(path.join(root, "public/logo.png"))
  .resize(160, 160, { fit: "inside" })
  .png()
  .toBuffer();

const svg = Buffer.from(`
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#14532d" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#166534" stop-opacity="0.75"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <text x="80" y="300" fill="#ffffff" font-family="Georgia, serif" font-size="64" font-weight="700">Harsha Vedic</text>
  <text x="80" y="360" fill="#dcfce7" font-family="Arial, sans-serif" font-size="32">Ayurveda Clinic in Medavakkam, Chennai</text>
  <text x="80" y="420" fill="#bbf7d0" font-family="Arial, sans-serif" font-size="24">Kerala Panchakarma · Pain Care · Women's Health</text>
</svg>`);

await sharp(bg)
  .composite([
    { input: svg, top: 0, left: 0 },
    { input: logo, top: 60, left: 80 },
  ])
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(path.join(root, "public/og-image.jpg"));

console.log("wrote public/og-image.jpg");
