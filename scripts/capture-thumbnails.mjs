import { chromium } from "playwright";
import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

const projects = [
  {
    id: "techlearn",
    url: "https://techlearn-pi.vercel.app/",
    filename: "techlearn-thumbnail",
  },
  {
    id: "network-three-tau",
    url: "https://network-three-tau.vercel.app/",
    filename: "network-three-tau-thumbnail",
  },
  {
    id: "artful-bice",
    url: "https://artful-bice.vercel.app/",
    filename: "artful-bice-thumbnail",
  },
  {
    id: "taxease",
    url: "https://taxease-one.vercel.app/",
    filename: "taxease-thumbnail",
  },
  {
    id: "pharma-three-rho",
    url: "https://pharma-three-rho.vercel.app/",
    filename: "pharma-thumbnail",
  },
];

const outputDir = path.resolve(process.cwd(), "public");
const viewport = { width: 1440, height: 900 };

const ensureDir = async (dir) => {
  await fs.mkdir(dir, { recursive: true });
};

const captureScreenshots = async () => {
  await ensureDir(outputDir);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize(viewport);

  for (const project of projects) {
    const pngPath = path.join(outputDir, `${project.filename}.png`);
    const webpPath = path.join(outputDir, `${project.filename}.webp`);

    console.log(`Capturing ${project.id} from ${project.url}`);
    await page.goto(project.url, { waitUntil: "networkidle", timeout: 90000 });
    await page.waitForTimeout(3000);

    const screenshotBuffer = await page.screenshot({
      fullPage: false,
      type: "png",
      clip: { x: 0, y: 0, width: viewport.width, height: viewport.height },
    });

    const resizedBuffer = await sharp(screenshotBuffer)
      .resize(1280, 720, { fit: "cover", position: "centre" })
      .png({ quality: 95, compressionLevel: 9 })
      .toBuffer();

    await fs.writeFile(pngPath, resizedBuffer);
    await sharp(resizedBuffer).webp({ quality: 80 }).toFile(webpPath);
    console.log(`Saved ${pngPath} and ${webpPath}`);
  }

  await browser.close();
};

captureScreenshots().catch((error) => {
  console.error("Failed to capture thumbnails", error);
  process.exitCode = 1;
});
