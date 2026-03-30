const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const root = process.cwd();
const tmpDir = path.join(root, "tmp", "pdfs");
const outDir = path.join(root, "output", "pdf");

fs.mkdirSync(tmpDir, { recursive: true });
fs.mkdirSync(outDir, { recursive: true });

const pngPath = path.join(tmpDir, "app-summary.png");
const jpgPath = path.join(tmpDir, "app-summary.jpg");
const pdfPath = path.join(outDir, "sharna-app-summary.pdf");

const lines = [
  { type: "title", text: "App Summary" },
  { type: "meta", text: "Repo: sharna" },
  { type: "section", text: "What it is" },
  {
    type: "body",
    text:
      "A personal portfolio website built as a React single-page app. It presents Sharna's profile, projects, resume access, and contact options with animated visuals."
  },
  { type: "section", text: "Who it's for" },
  {
    type: "body",
    text:
      "Primary persona: recruiters, hiring managers, collaborators, and clients evaluating Sharna's software engineering background and project work."
  },
  { type: "section", text: "What it does" },
  { type: "bullet", text: "Shows a landing section with branded logo, intro text, and scroll cue." },
  { type: "bullet", text: "Provides an About section with background details and preferred technologies." },
  { type: "bullet", text: "Lists portfolio projects as clickable cards linking to external work." },
  { type: "bullet", text: "Offers GitHub, LinkedIn, CodePen, and Stack Overflow profile links." },
  { type: "bullet", text: "Links directly to a hosted resume PDF from the navigation menu." },
  { type: "bullet", text: "Includes a contact form with animated send states and email copy-to-clipboard." },
  { type: "bullet", text: "Uses responsive navigation and fixed contact info for larger screens." },
  { type: "section", text: "How it works" },
  {
    type: "body",
    text:
      "Frontend: React 16 renders App, which composes Navbar, StarrySky, Home, About, Portfolio, Contact, Footer, and desktop-only FixedInfo. State: Redux creates a store with one loaded reducer tracking logo/model flags, though the active UI mostly uses local component state. Effects: anime.js and GSAP drive menu, form, and fade animations; public/index.html initializes EmailJS, but the checked-in Form component has the actual send call commented out, so no active backend or API flow was found in repo. Assets: local SVGs, fonts, screenshots, and a Three.js astronaut model exist; the About component currently comments out the astronaut render path."
  },
  { type: "section", text: "How to run" },
  { type: "bullet", text: "Install dependencies: npm install" },
  { type: "bullet", text: "Start locally: npm start" },
  { type: "bullet", text: "Build for production: npm run build" },
  { type: "bullet", text: "Deploy clue from repo: netlify.toml runs npm run build" },
  { type: "foot", text: "Not found in repo: backend service code, API server, database, authentication, or tested deployment instructions beyond package scripts and Netlify build command." }
];

const psScript = `
Add-Type -AssemblyName System.Drawing
[System.Environment]::SetEnvironmentVariable('DOTNET_SYSTEM_DRAWING_ENABLE_WINDOWS_COMPATIBILITY','1','Process') | Out-Null

$pngPath = '${pngPath.replace(/'/g, "''")}'
$jpgPath = '${jpgPath.replace(/'/g, "''")}'

$width = 1275
$height = 1650
$bmp = New-Object System.Drawing.Bitmap $width, $height
$graphics = [System.Drawing.Graphics]::FromImage($bmp)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$graphics.Clear([System.Drawing.Color]::FromArgb(248, 250, 252))

$navy = [System.Drawing.Color]::FromArgb(16, 24, 40)
$slate = [System.Drawing.Color]::FromArgb(71, 84, 103)
$accent = [System.Drawing.Color]::FromArgb(233, 30, 99)
$rule = [System.Drawing.Color]::FromArgb(208, 213, 221)
$panel = [System.Drawing.Color]::FromArgb(255, 255, 255)
$muted = [System.Drawing.Color]::FromArgb(102, 112, 133)

$titleFont = New-Object System.Drawing.Font('Segoe UI Semibold', 32, [System.Drawing.FontStyle]::Bold)
$sectionFont = New-Object System.Drawing.Font('Segoe UI Semibold', 17, [System.Drawing.FontStyle]::Bold)
$bodyFont = New-Object System.Drawing.Font('Segoe UI', 12)
$bodyBold = New-Object System.Drawing.Font('Segoe UI Semibold', 12, [System.Drawing.FontStyle]::Bold)
$metaFont = New-Object System.Drawing.Font('Segoe UI', 10)
$footFont = New-Object System.Drawing.Font('Segoe UI', 9)

$titleBrush = New-Object System.Drawing.SolidBrush $navy
$bodyBrush = New-Object System.Drawing.SolidBrush $slate
$sectionBrush = New-Object System.Drawing.SolidBrush $accent
$mutedBrush = New-Object System.Drawing.SolidBrush $muted
$panelBrush = New-Object System.Drawing.SolidBrush $panel
$rulePen = New-Object System.Drawing.Pen $rule, 2
$accentPen = New-Object System.Drawing.Pen $accent, 5

$graphics.FillRectangle($panelBrush, 60, 55, 1155, 1540)
$graphics.DrawRectangle($rulePen, 60, 55, 1155, 1540)
$graphics.FillRectangle((New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 241, 245))), 60, 55, 1155, 96)
$graphics.FillRectangle((New-Object System.Drawing.SolidBrush $accent), 60, 55, 12, 1540)

$stringFormat = New-Object System.Drawing.StringFormat
$stringFormat.Trimming = [System.Drawing.StringTrimming]::Word

$x = 105
$y = 95
$maxWidth = 1055

$content = @(
${lines
  .map((line) => {
    const escaped = line.text.replace(/'/g, "''");
    return `    [PSCustomObject]@{ Type='${line.type}'; Text='${escaped}' }`;
  })
  .join(",\n")}
)

function Draw-WrappedText {
  param(
    [System.Drawing.Graphics]$Graphics,
    [string]$Text,
    [System.Drawing.Font]$Font,
    [System.Drawing.Brush]$Brush,
    [float]$X,
    [float]$Y,
    [float]$Width,
    [System.Drawing.StringFormat]$Format
  )
  $size = $Graphics.MeasureString($Text, $Font, [int]$Width, $Format)
  $rect = New-Object System.Drawing.RectangleF($X, $Y, $Width, [Math]::Ceiling($size.Height) + 6)
  $Graphics.DrawString($Text, $Font, $Brush, $rect, $Format)
  return [Math]::Ceiling($size.Height)
}

foreach ($item in $content) {
  switch ($item.Type) {
    'title' {
      $graphics.DrawString($item.Text, $titleFont, $titleBrush, $x, $y)
      $y += 52
    }
    'meta' {
      $graphics.DrawString($item.Text, $metaFont, $mutedBrush, $x, $y)
      $y += 28
      $graphics.DrawLine($rulePen, $x, $y, $x + $maxWidth, $y)
      $y += 28
    }
    'section' {
      $graphics.DrawString($item.Text, $sectionFont, $sectionBrush, $x, $y)
      $y += 30
    }
    'body' {
      $h = Draw-WrappedText -Graphics $graphics -Text $item.Text -Font $bodyFont -Brush $bodyBrush -X $x -Y $y -Width $maxWidth -Format $stringFormat
      $y += $h + 16
    }
    'bullet' {
      $graphics.DrawString([char]0x2022, $bodyBold, $sectionBrush, $x, $y - 1)
      $h = Draw-WrappedText -Graphics $graphics -Text $item.Text -Font $bodyFont -Brush $bodyBrush -X ($x + 24) -Y $y -Width ($maxWidth - 24) -Format $stringFormat
      $y += $h + 9
    }
    'foot' {
      $y += 8
      $graphics.DrawLine($rulePen, $x, $y, $x + $maxWidth, $y)
      $y += 14
      $h = Draw-WrappedText -Graphics $graphics -Text $item.Text -Font $footFont -Brush $mutedBrush -X $x -Y $y -Width $maxWidth -Format $stringFormat
      $y += $h + 8
    }
  }
}

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoder = [System.Drawing.Imaging.Encoder]::Quality
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters 1
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($encoder, 92L)

$bmp.Save($pngPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Save($jpgPath, $jpegCodec, $encoderParams)

$graphics.Dispose()
$bmp.Dispose()
`;

execFileSync("powershell", ["-NoProfile", "-Command", psScript], { stdio: "inherit" });

const jpg = fs.readFileSync(jpgPath);

const objects = [];
const addObject = (content) => {
  objects.push(content);
  return objects.length;
};

addObject("<< /Type /Catalog /Pages 2 0 R >>");
addObject("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
addObject("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /XObject << /Im0 5 0 R >> >> /Contents 4 0 R >>");

const contentStream = "q\n612 0 0 792 0 0 cm\n/Im0 Do\nQ";
addObject(`<< /Length ${Buffer.byteLength(contentStream, "ascii")} >>\nstream\n${contentStream}\nendstream`);

addObject(`<< /Type /XObject /Subtype /Image /Width 1275 /Height 1650 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpg.length} >>\nstream\n`);

const header = "%PDF-1.4\n";
const chunks = [Buffer.from(header, "ascii")];
const offsets = [0];

for (let i = 0; i < objects.length; i++) {
  offsets.push(Buffer.concat(chunks).length);
  if (i === 4) {
    chunks.push(Buffer.from(`${i + 1} 0 obj\n`, "ascii"));
    chunks.push(Buffer.from(objects[i], "ascii"));
    chunks.push(jpg);
    chunks.push(Buffer.from("\nendstream\nendobj\n", "ascii"));
  } else {
    chunks.push(Buffer.from(`${i + 1} 0 obj\n${objects[i]}\nendobj\n`, "ascii"));
  }
}

const xrefOffset = Buffer.concat(chunks).length;
let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (let i = 1; i <= objects.length; i++) {
  xref += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

chunks.push(Buffer.from(xref + trailer, "ascii"));
fs.writeFileSync(pdfPath, Buffer.concat(chunks));

console.log(`PNG: ${pngPath}`);
console.log(`JPG: ${jpgPath}`);
console.log(`PDF: ${pdfPath}`);
