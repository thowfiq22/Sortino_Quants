const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const htmlPath = path.join(__dirname, '..', 'source', 'sortino-quants-share.html');
const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(htmlPath)) {
  console.error(`❌ Source HTML file not found at: ${htmlPath}`);
  process.exit(1);
}

try {
  console.log('📖 Reading source HTML file...');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');

  console.log('🔍 Searching for Base64 logo data...');
  // Match the base64 string inside the src attribute of the nav-logo-img
  const match = htmlContent.match(/src="data:image\/png;base64,([^"]+)"/);

  if (!match) {
    console.error('❌ Could not find Base64 logo data in the HTML file.');
    process.exit(1);
  }

  const base64Data = match[1];
  console.log(`✅ Base64 data found (length: ${base64Data.length} characters)`);

  const buffer = Buffer.from(base64Data, 'base64');
  const tempPngPath = path.join(publicDir, 'logo_extracted_temp.png');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  console.log(`💾 Writing temporary PNG file to: ${tempPngPath}`);
  fs.writeFileSync(tempPngPath, buffer);

  const finalWebpPath = path.join(publicDir, 'logo.webp');
  console.log(`⚡ Converting PNG to optimized WebP at: ${finalWebpPath}`);

  // Convert to WebP losslessly to maintain logo transparency and sharpness
  sharp(tempPngPath)
    .webp({ lossless: true })
    .toFile(finalWebpPath)
    .then((info) => {
      const originalKB = (buffer.length / 1024).toFixed(1);
      const webpKB = (info.size / 1024).toFixed(1);
      const savings = ((1 - info.size / buffer.length) * 100).toFixed(1);

      console.log(`\n🎉 Success!`);
      console.log(`- Original Base64 Size: ${originalKB} KB`);
      console.log(`- Optimized WebP Size:  ${webpKB} KB`);
      console.log(`- Storage Savings:      ${savings}%`);

      // Clean up temporary PNG
      fs.unlinkSync(tempPngPath);
      console.log('🧹 Cleaned up temporary PNG file.');
    })
    .catch((err) => {
      console.error('❌ Failed to convert to WebP using sharp:', err.message);
      process.exit(1);
    });

} catch (error) {
  console.error('❌ Error executing script:', error.message);
  process.exit(1);
}
