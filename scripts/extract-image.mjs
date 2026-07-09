import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'base.html'), 'utf8');
const match = html.match(/src="data:image\/jpeg;base64,([^"]+)"/);

if (!match) {
  console.error('No base64 image found in base.html');
  process.exit(1);
}

const outDir = path.join(root, 'public', 'images');
fs.mkdirSync(outDir, { recursive: true });
const buf = Buffer.from(match[1], 'base64');
fs.writeFileSync(path.join(outDir, 'profile.jpg'), buf);
console.log(`Extracted ${buf.length} bytes to public/images/profile.jpg`);
