$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing
[System.Environment]::SetEnvironmentVariable('DOTNET_SYSTEM_DRAWING_ENABLE_WINDOWS_COMPATIBILITY','1','Process') | Out-Null

$root = (Get-Location).Path
$tmpDir = Join-Path $root "tmp\pdfs"
$outDir = Join-Path $root "output\pdf"
New-Item -ItemType Directory -Force -Path $tmpDir | Out-Null
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$pngPath = Join-Path $tmpDir "app-summary.png"
$jpgPath = Join-Path $tmpDir "app-summary.jpg"
$pdfPath = Join-Path $outDir "sharna-app-summary.pdf"

$content = @(
  @{ Type = "title"; Text = "App Summary" },
  @{ Type = "meta"; Text = "Repo: sharna" },
  @{ Type = "section"; Text = "What it is" },
  @{ Type = "body"; Text = "A personal portfolio website built as a React single-page app. It presents Sharna's profile, projects, resume access, and contact options with animated visuals." },
  @{ Type = "section"; Text = "Who it's for" },
  @{ Type = "body"; Text = "Primary persona: recruiters, hiring managers, collaborators, and clients evaluating Sharna's software engineering background and project work." },
  @{ Type = "section"; Text = "What it does" },
  @{ Type = "bullet"; Text = "Shows a landing section with branded logo, intro text, and scroll cue." },
  @{ Type = "bullet"; Text = "Provides an About section with background details and preferred technologies." },
  @{ Type = "bullet"; Text = "Lists portfolio projects as clickable cards linking to external work." },
  @{ Type = "bullet"; Text = "Offers GitHub, LinkedIn, CodePen, and Stack Overflow profile links." },
  @{ Type = "bullet"; Text = "Links directly to a hosted resume PDF from the navigation menu." },
  @{ Type = "bullet"; Text = "Includes a contact form with animated send states and email copy-to-clipboard." },
  @{ Type = "bullet"; Text = "Uses responsive navigation and fixed contact info for larger screens." },
  @{ Type = "section"; Text = "How it works" },
  @{ Type = "bullet"; Text = "Components: React 16 mounts App from index.js and renders Navbar, StarrySky, Home, About, Portfolio, Contact, Footer, and desktop-only FixedInfo." },
  @{ Type = "bullet"; Text = "State: Redux creates a store with one loaded reducer for logo/model flags, while the active UI mostly relies on local component state." },
  @{ Type = "bullet"; Text = "Effects and services: anime.js and GSAP animate the menu, form, and fade behavior; public/index.html initializes EmailJS, but Form.js comments out the actual send call." },
  @{ Type = "bullet"; Text = "Data flow: static project/profile content lives in components and local assets; no active backend, database, auth, or API request flow was found in repo. A Three.js astronaut model exists but its About-section render path is commented out." },
  @{ Type = "section"; Text = "How to run" },
  @{ Type = "bullet"; Text = "Install dependencies: npm install" },
  @{ Type = "bullet"; Text = "Start locally: npm start" },
  @{ Type = "bullet"; Text = "Build for production: npm run build" },
  @{ Type = "bullet"; Text = "Deploy clue from repo: netlify.toml runs npm run build" },
  @{ Type = "foot"; Text = "Not found in repo: backend service code, API server, database, authentication, or tested deployment instructions beyond package scripts and Netlify build command." }
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
  $rect = New-Object System.Drawing.RectangleF($X, $Y, $Width, ([Math]::Ceiling($size.Height) + 6))
  $Graphics.DrawString($Text, $Font, $Brush, $rect, $Format)
  return [Math]::Ceiling($size.Height)
}

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
$panel = [System.Drawing.Color]::White
$muted = [System.Drawing.Color]::FromArgb(102, 112, 133)

$titleFont = New-Object System.Drawing.Font("Segoe UI Semibold", 37, [System.Drawing.FontStyle]::Bold)
$sectionFont = New-Object System.Drawing.Font("Segoe UI Semibold", 20, [System.Drawing.FontStyle]::Bold)
$bodyFont = New-Object System.Drawing.Font("Segoe UI", 14)
$bodyBold = New-Object System.Drawing.Font("Segoe UI Semibold", 14, [System.Drawing.FontStyle]::Bold)
$metaFont = New-Object System.Drawing.Font("Segoe UI", 12)
$footFont = New-Object System.Drawing.Font("Segoe UI", 10)

$titleBrush = New-Object System.Drawing.SolidBrush $navy
$bodyBrush = New-Object System.Drawing.SolidBrush $slate
$sectionBrush = New-Object System.Drawing.SolidBrush $accent
$mutedBrush = New-Object System.Drawing.SolidBrush $muted
$panelBrush = New-Object System.Drawing.SolidBrush $panel
$bannerBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 241, 245))
$accentBrush = New-Object System.Drawing.SolidBrush $accent
$rulePen = New-Object System.Drawing.Pen $rule, 2

$graphics.FillRectangle($panelBrush, 60, 55, 1155, 1540)
$graphics.DrawRectangle($rulePen, 60, 55, 1155, 1540)
$graphics.FillRectangle($bannerBrush, 60, 55, 1155, 96)
$graphics.FillRectangle($accentBrush, 60, 55, 12, 1540)

$format = New-Object System.Drawing.StringFormat
$format.Trimming = [System.Drawing.StringTrimming]::Word

$x = 105
$y = 95
$maxWidth = 1055

foreach ($item in $content) {
  switch ($item.Type) {
    "title" {
      $graphics.DrawString($item.Text, $titleFont, $titleBrush, $x, $y)
      $y += 60
    }
    "meta" {
      $graphics.DrawString($item.Text, $metaFont, $mutedBrush, $x, $y)
      $y += 32
      $graphics.DrawLine($rulePen, $x, $y, $x + $maxWidth, $y)
      $y += 32
    }
    "section" {
      $graphics.DrawString($item.Text, $sectionFont, $sectionBrush, $x, $y)
      $y += 38
    }
    "body" {
      $h = Draw-WrappedText -Graphics $graphics -Text $item.Text -Font $bodyFont -Brush $bodyBrush -X $x -Y $y -Width $maxWidth -Format $format
      $y += $h + 20
    }
    "bullet" {
      $graphics.DrawString([char]0x2022, $bodyBold, $sectionBrush, $x, $y - 1)
      $h = Draw-WrappedText -Graphics $graphics -Text $item.Text -Font $bodyFont -Brush $bodyBrush -X ($x + 24) -Y $y -Width ($maxWidth - 24) -Format $format
      $y += $h + 12
    }
    "foot" {
      $y += 8
      $graphics.DrawLine($rulePen, $x, $y, $x + $maxWidth, $y)
      $y += 14
      $h = Draw-WrappedText -Graphics $graphics -Text $item.Text -Font $footFont -Brush $mutedBrush -X $x -Y $y -Width $maxWidth -Format $format
      $y += $h + 8
    }
  }
}

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$qualityEncoder = [System.Drawing.Imaging.Encoder]::Quality
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters 1
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($qualityEncoder, 92L)

$bmp.Save($pngPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Save($jpgPath, $jpegCodec, $encoderParams)

$graphics.Dispose()
$bmp.Dispose()

$jpegBytes = [System.IO.File]::ReadAllBytes($jpgPath)

$objects = New-Object System.Collections.Generic.List[string]
[void]$objects.Add("<< /Type /Catalog /Pages 2 0 R >>")
[void]$objects.Add("<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
[void]$objects.Add("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /XObject << /Im0 5 0 R >> >> /Contents 4 0 R >>")
$contentStream = "q`n612 0 0 792 0 0 cm`n/Im0 Do`nQ"
[void]$objects.Add("<< /Length $([System.Text.Encoding]::ASCII.GetByteCount($contentStream)) >>`nstream`n$contentStream`nendstream")
[void]$objects.Add("<< /Type /XObject /Subtype /Image /Width 1275 /Height 1650 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length $($jpegBytes.Length) >>`nstream`n")

$utf8 = [System.Text.Encoding]::ASCII
$stream = New-Object System.IO.MemoryStream
$offsets = New-Object System.Collections.Generic.List[int]

function Write-Ascii {
  param([System.IO.MemoryStream]$Target, [string]$Text)
  $bytes = $utf8.GetBytes($Text)
  $Target.Write($bytes, 0, $bytes.Length)
}

Write-Ascii $stream "%PDF-1.4`n"
$offsets.Add(0) | Out-Null

for ($i = 0; $i -lt $objects.Count; $i++) {
  $offsets.Add([int]$stream.Position) | Out-Null
  if ($i -eq 4) {
    Write-Ascii $stream "$($i + 1) 0 obj`n"
    Write-Ascii $stream $objects[$i]
    $stream.Write($jpegBytes, 0, $jpegBytes.Length)
    Write-Ascii $stream "`nendstream`nendobj`n"
  } else {
    Write-Ascii $stream "$($i + 1) 0 obj`n$($objects[$i])`nendobj`n"
  }
}

$xrefOffset = [int]$stream.Position
Write-Ascii $stream "xref`n0 $($objects.Count + 1)`n0000000000 65535 f `n"
for ($i = 1; $i -le $objects.Count; $i++) {
  Write-Ascii $stream ("{0:0000000000} 00000 n `n" -f $offsets[$i])
}
Write-Ascii $stream "trailer`n<< /Size $($objects.Count + 1) /Root 1 0 R >>`nstartxref`n$xrefOffset`n%%EOF`n"

[System.IO.File]::WriteAllBytes($pdfPath, $stream.ToArray())
$stream.Dispose()

Write-Output "PNG: $pngPath"
Write-Output "JPG: $jpgPath"
Write-Output "PDF: $pdfPath"
