import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, 'public');
const MAX_WIDTH = 1920;
const QUALITY = 80;
const MIN_SIZE_KB = 500; // Only optimize files larger than 500KB

async function getFiles(dir) {
  const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return files.flat();
}

async function optimizeImages() {
  console.log('Starting image optimization...');
  const allFiles = await getFiles(PUBLIC_DIR);

  const imageFiles = allFiles.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.heic'].includes(ext); // Include HEIC if sharp supports it, otherwise it might fail gracefully
  });

  console.log(`Found ${imageFiles.length} image files.`);

  for (const file of imageFiles) {
    try {
      const stats = await fs.promises.stat(file);
      const fileSizeKB = stats.size / 1024;

      if (fileSizeKB < MIN_SIZE_KB) {
        // console.log(`Skipping ${path.basename(file)} (Too small: ${fileSizeKB.toFixed(2)}KB)`);
        continue;
      }

      const dir = path.dirname(file);
      const ext = path.extname(file);
      const name = path.basename(file, ext);
      const newFile = path.join(dir, `${name}.webp`);

      console.log(`Optimizing ${path.basename(file)} (${fileSizeKB.toFixed(2)}KB)...`);

      await sharp(file)
        .rotate() // Auto-rotate based on EXIF data
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(newFile);

      const newStats = await fs.promises.stat(newFile);
      const newSizeKB = newStats.size / 1024;

      console.log(`✅ Generated ${path.basename(newFile)} (${newSizeKB.toFixed(2)}KB) - Saved ${(fileSizeKB - newSizeKB).toFixed(2)}KB`);

    } catch (err) {
      console.error(`❌ Error optimizing ${path.basename(file)}:`, err.message);
    }
  }
  console.log('Optimization complete!');
}

optimizeImages();
