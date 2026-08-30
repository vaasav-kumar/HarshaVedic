import sharp from "sharp";
import { rename, stat, unlink } from "fs/promises";
import path from "path";

const assetsDir = path.resolve("src/assets");
const file = "doctor-patient-panchakarma-conversation.gif";
const input = path.join(assetsDir, file);
const temp = path.join(assetsDir, `.${file}.tmp`);

function formatSize(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${bytes} B`;
}

const before = (await stat(input)).size;

await sharp(input, { animated: true, limitInputPixels: false })
  .resize({ width: 720, withoutEnlargement: true })
  .gif({ colours: 64, effort: 10, dither: 0.5 })
  .toFile(temp);

const after = (await stat(temp)).size;
await unlink(input);
await rename(temp, input);

const meta = await sharp(input, {
  animated: true,
  limitInputPixels: false,
}).metadata();

console.log(`${file}: ${formatSize(before)} -> ${formatSize(after)}`);
console.log(
  `Output: ${meta.width}x${Math.round(meta.height / meta.pages)} (${meta.pages} frames)`,
);
