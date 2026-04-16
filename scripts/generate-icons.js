const sharp = require('sharp');
const path = require('path');

const svgPath = path.join(__dirname, '../public/icons/icon.svg');
const outDir = path.join(__dirname, '../public/icons');

const sizes = [192, 512];

(async () => {
  for (const size of sizes) {
    await sharp(svgPath)
      .resize(size, size)
      .png()
      .toFile(path.join(outDir, `icon-${size}.png`));
    console.log(`✅ icon-${size}.png généré`);
  }
  console.log('🎉 Icônes PWA prêtes !');
})();
