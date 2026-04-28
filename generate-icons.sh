#!/bin/bash

# INTERY Icon Generation Script
# Generates PNG favicon and PWA app icons from SVG source
# Prerequisites: ImageMagick (convert command)

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║  INTERY Icon Generation Tool           ║${NC}"
echo -e "${BLUE}║  Generating PNG icons from SVG         ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}\n"

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
  echo -e "${YELLOW}⚠ ImageMagick not found. Installing...${NC}"
  if [[ "$OSTYPE" == "darwin"* ]]; then
    brew install imagemagick
  elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    sudo apt-get install imagemagick
  else
    echo -e "${YELLOW}Please install ImageMagick manually: https://imagemagick.org/script/download.php${NC}"
    exit 1
  fi
fi

# Create img directory if it doesn't exist
mkdir -p img

# Check if source SVG exists
if [ ! -f "img/favicon.svg" ]; then
  echo -e "${YELLOW}✗ img/favicon.svg not found!${NC}"
  exit 1
fi

echo -e "${BLUE}Generating favicon PNG icons...${NC}\n"

# 1. Generate 192x192 icon (Android, PWA)
echo -e "${BLUE}→ Generating icon-192.png${NC}"
convert img/favicon.svg \
  -background transparent \
  -density 300 \
  -resize 192x192 \
  img/icon-192.png
echo -e "${GREEN}✓ icon-192.png created${NC}"

# 2. Generate 512x512 icon (PWA splash screens)
echo -e "${BLUE}→ Generating icon-512.png${NC}"
convert img/favicon.svg \
  -background transparent \
  -density 300 \
  -resize 512x512 \
  img/icon-512.png
echo -e "${GREEN}✓ icon-512.png created${NC}"

# 3. Generate 180x180 for Apple (iOS, iPad)
echo -e "${BLUE}→ Generating apple-touch-icon-180.png${NC}"
convert img/apple-touch-icon.svg \
  -background '#f8fafc' \
  -density 300 \
  -resize 180x180 \
  -extent 180x180 \
  -gravity center \
  img/apple-touch-icon-180.png
echo -e "${GREEN}✓ apple-touch-icon-180.png created${NC}"

# 4. Generate maskable icons (adaptive Android)
echo -e "${BLUE}→ Generating icon-192-maskable.png${NC}"
convert img/favicon.svg \
  -background 'rgba(0,0,0,0)' \
  -density 300 \
  -resize 192x192 \
  -background white \
  -gravity center \
  -extent 192x192 \
  img/icon-192-maskable.png
echo -e "${GREEN}✓ icon-192-maskable.png created${NC}"

echo -e "${BLUE}→ Generating icon-512-maskable.png${NC}"
convert img/favicon.svg \
  -background 'rgba(0,0,0,0)' \
  -density 300 \
  -resize 512x512 \
  -background white \
  -gravity center \
  -extent 512x512 \
  img/icon-512-maskable.png
echo -e "${GREEN}✓ icon-512-maskable.png created${NC}"

# 5. Generate 16x16 favicon for older browsers
echo -e "${BLUE}→ Generating favicon-16.png${NC}"
convert img/favicon.svg \
  -background transparent \
  -density 300 \
  -resize 16x16 \
  img/favicon-16.png
echo -e "${GREEN}✓ favicon-16.png created${NC}"

# 6. Generate 32x32 favicon
echo -e "${BLUE}→ Generating favicon-32.png${NC}"
convert img/favicon.svg \
  -background transparent \
  -density 300 \
  -resize 32x32 \
  img/favicon-32.png
echo -e "${GREEN}✓ favicon-32.png created${NC}"

echo -e "\n${BLUE}Optimizing images...${NC}\n"

# Optimize PNG files with ImageMagick (strip metadata, compress)
for file in img/icon-*.png img/apple-touch-icon-*.png img/favicon-*.png; do
  if [ -f "$file" ]; then
    echo -e "${BLUE}→ Optimizing $(basename $file)${NC}"
    convert "$file" -strip -interlace Plane "$file"
  fi
done

echo -e "${GREEN}✓ All images optimized${NC}"

# Summary
echo -e "\n${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}✓ Icon generation complete!${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}\n"

echo -e "${BLUE}Generated files:${NC}"
ls -lh img/icon-*.png img/apple-touch-icon-*.png img/favicon-*.png 2>/dev/null || true

echo -e "\n${BLUE}Next steps:${NC}"
echo "1. Update manifest.json icon paths if needed"
echo "2. Test icons in browsers and PWA"
echo "3. Run Google PageSpeed Insights to verify"
echo "4. Deploy to production\n"

echo -e "${GREEN}All set! Your INTERY icons are ready.${NC}\n"
