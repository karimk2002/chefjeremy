// Renders proposal.html to ../Proposal-Jeremy-Gillon-Essence-Experience.pdf
// Usage: node proposal/pdf/render.mjs  (needs playwright; link it into proposal/pdf/node_modules)
import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(dir, '..', 'Proposal-Jeremy-Gillon-Essence-Experience.pdf');

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage();
await page.goto(pathToFileURL(path.join(dir, 'proposal.html')).href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.pdf({
  path: out,
  format: 'A4',
  printBackground: true,
  preferCSSPageSize: true,
});
await browser.close();
console.log(out);
