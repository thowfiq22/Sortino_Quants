const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const certsDir = path.join(publicDir, 'achievements and Certifications');

// Strategy: PNGs get lossless, JPEGs get high-quality lossy (visually identical)
const imagesToConvert = [
  // PNGs → Lossless WebP
  { src: 'sortino.png', dest: 'sortino.webp', lossless: true },
  { src: 'SortinoQuants.png', dest: 'SortinoQuants.webp', lossless: true },
  { src: 'SortinoQuants1.png', dest: 'SortinoQuants1.webp', lossless: true },
  { src: 'og-image.png', dest: 'og-image.webp', lossless: true },
  // JPEGs → Quality 90 lossy WebP (no visible difference)
  { src: 'sathish.jpeg', dest: 'sathish.webp', lossless: false },
  { src: 'santhosh.jpg', dest: 'santhosh.webp', lossless: false },
  { src: 'bloomberg.jpg', dest: 'bloomberg.webp', lossless: false },
  { src: 'cisi.jpg', dest: 'cisi.webp', lossless: false },
  { src: 'ftmo.jpg', dest: 'ftmo.webp', lossless: false },
  { src: 'logo.jpeg', dest: 'logo.webp', lossless: false },
];

async function convertImage(srcPath, destPath, lossless) {
  try {
    const inputStats = fs.statSync(srcPath);
    const inputSizeKB = (inputStats.size / 1024).toFixed(1);

    if (lossless) {
      await sharp(srcPath).webp({ lossless: true }).toFile(destPath);
    } else {
      // Quality 90 is visually indistinguishable from original
      await sharp(srcPath).webp({ quality: 90, effort: 6 }).toFile(destPath);
    }

    const outputStats = fs.statSync(destPath);
    const outputSizeKB = (outputStats.size / 1024).toFixed(1);
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    const mode = lossless ? 'LOSSLESS' : 'Q90';

    console.log(`✅ [${mode}] ${path.basename(srcPath)} (${inputSizeKB} KB) → ${path.basename(destPath)} (${outputSizeKB} KB) [${savings}% saved]`);
    return { inputSize: inputStats.size, outputSize: outputStats.size };
  } catch (err) {
    console.error(`❌ Failed: ${path.basename(srcPath)} — ${err.message}`);
    return null;
  }
}

async function main() {
  console.log('=== Converting Images to WebP (No Quality Loss) ===\n');

  let totalOriginal = 0;
  let totalNew = 0;

  for (const img of imagesToConvert) {
    const srcPath = path.join(publicDir, img.src);
    const destPath = path.join(publicDir, img.dest);
    if (!fs.existsSync(srcPath)) { console.log(`⏭️ Skipped: ${img.src}`); continue; }

    // Remove old webp if exists
    if (fs.existsSync(destPath)) fs.unlinkSync(destPath);

    const result = await convertImage(srcPath, destPath, img.lossless);
    if (result) { totalOriginal += result.inputSize; totalNew += result.outputSize; }
  }

  // Certification images (all JPEGs → quality 90)
  console.log('\n=== Certification Images ===\n');
  if (fs.existsSync(certsDir)) {
    const certFiles = fs.readdirSync(certsDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
    for (const file of certFiles) {
      const srcPath = path.join(certsDir, file);
      const destName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      const destPath = path.join(certsDir, destName);
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);

      const isPNG = /\.png$/i.test(file);
      const result = await convertImage(srcPath, destPath, isPNG);
      if (result) { totalOriginal += result.inputSize; totalNew += result.outputSize; }
    }
  }

  const savedKB = ((totalOriginal - totalNew) / 1024).toFixed(1);
  const savedPct = ((1 - totalNew / totalOriginal) * 100).toFixed(1);
  console.log(`\n=== RESULTS ===`);
  console.log(`Original total: ${(totalOriginal / 1024).toFixed(1)} KB`);
  console.log(`WebP total:     ${(totalNew / 1024).toFixed(1)} KB`);
  console.log(`Saved:          ${savedKB} KB (${savedPct}%)`);
}

main().catch(console.error);
