import sharp from "sharp";
import { readdir, unlink, stat } from "fs/promises";
import path from "path";

const assetsDir = path.resolve("src/assets");

const photoTargets = [
  { file: "panchakarma-detox.png", maxWidth: 1200 },
  { file: "chronic-disease-management.png", maxWidth: 1200 },
  { file: "stress-and-anxiety-relief.png", maxWidth: 1200 },
  { file: "ayurvedic-diabetes-treatment.png", maxWidth: 1200 },
  { file: "ayurvedic-fatty-liver-treatment.png", maxWidth: 1200 },
  { file: "diet-management.png", maxWidth: 1200 },
  { file: "pcos-treatment.png", maxWidth: 1200 },
  { file: "ayurvedic-skin-care.png", maxWidth: 1200 },
  { file: "therapeutic-massages.png", maxWidth: 1200 },
  { file: "herbal-treatments.png", maxWidth: 1200 },
  { file: "doctor-harsita-devi.png", maxWidth: 900 },
  { file: "ayurveda-flower.jpeg", maxWidth: 900 },
];

async function formatSize(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${bytes} B`;
}

async function compressPhoto({ file, maxWidth }) {
  const input = path.join(assetsDir, file);
  const output = path.join(assetsDir, file.replace(/\.(png|jpe?g)$/i, ".webp"));

  const before = (await stat(input)).size;

  await sharp(input)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(output);

  const after = (await stat(output)).size;

  if (output !== input) {
    await unlink(input);
  }

  console.log(
    `${file} -> ${path.basename(output)}: ${await formatSize(before)} -> ${await formatSize(after)}`,
  );
}

async function compressLogoPng(file, maxWidth) {
  const input = path.join(assetsDir, file);
  const temp = path.join(assetsDir, `.${file}.tmp`);
  const before = (await stat(input)).size;

  await sharp(input)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 })
    .toFile(temp);

  const { rename } = await import("fs/promises");
  await rename(temp, input);

  const after = (await stat(input)).size;
  console.log(`${file}: ${await formatSize(before)} -> ${await formatSize(after)}`);
}

async function main() {
  console.log("Compressing photo assets to WebP...\n");
  for (const target of photoTargets) {
    await compressPhoto(target);
  }

  console.log("\nOptimizing logo PNGs...\n");
  await compressLogoPng("logo.png", 512);
  await compressLogoPng("logo-with-title.png", 612);

  const files = await readdir(assetsDir);
  const total = files
    .filter((f) => /\.(webp|png|jpe?g)$/i.test(f))
    .reduce(async (sumPromise, f) => {
      const sum = await sumPromise;
      const size = (await stat(path.join(assetsDir, f))).size;
      return sum + size;
    }, Promise.resolve(0));

  console.log(`\nTotal assets size: ${await formatSize(await total)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
