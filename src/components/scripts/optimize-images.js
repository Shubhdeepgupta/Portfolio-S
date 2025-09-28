// scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const input = path.resolve(__dirname, '../public/images/me.jpg'); // adjust if your source path is different
const outDir = path.resolve(__dirname, '../public/images');
const sizes = [320, 800, 1200];

(async () => {
  try {
    if (!fs.existsSync(input)) {
      console.error('Input file not found:', input);
      process.exit(1);
    }
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    for (const size of sizes) {
      const outWebp = path.join(outDir, `me-${size}.webp`);
      const outJpg = path.join(outDir, `me-${size}.jpg`);
      // create webp
      await sharp(input)
        .resize(size)
        .webp({ quality: 75 })
        .toFile(outWebp);
      // create jpeg
      await sharp(input)
        .resize(size)
        .jpeg({ quality: 78 })
        .toFile(outJpg);
      console.log(`Written: me-${size}.webp  me-${size}.jpg`);
    }
    console.log('All sizes generated successfully.');
  } catch (err) {
    console.error('Error during image processing:', err);
    process.exit(1);
  }
})();
