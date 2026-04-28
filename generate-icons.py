#!/usr/bin/env python3
"""
INTERY Icon Generation Tool
Converts SVG favicons to PNG formats for cross-browser compatibility
Requires: Pillow, cairosvg (optional for better SVG rendering)
"""

import os
import sys
from pathlib import Path

try:
    from PIL import Image, ImageDraw
    import io
except ImportError:
    print("Error: Pillow not found. Install with: pip install Pillow")
    sys.exit(1)

# Try to import cairosvg for better SVG rendering
try:
    import cairosvg
    HAS_CAIRO = True
except ImportError:
    HAS_CAIRO = False
    print("Note: cairosvg not installed. Using basic SVG rendering.")
    print("For better results, install: pip install cairosvg")

def create_icon_from_svg(svg_file, width, height, output_file):
    """Convert SVG to PNG icon."""

    if not os.path.exists(svg_file):
        print(f"✗ {svg_file} not found!")
        return False

    try:
        if HAS_CAIRO:
            # Use cairosvg for high-quality rendering
            png_bytes = io.BytesIO()
            cairosvg.svg2png(url=svg_file, write_to=png_bytes, output_width=width, output_height=height)
            png_bytes.seek(0)
            img = Image.open(png_bytes)
        else:
            # Fallback: Create a simple icon from scratch
            # This is a basic approach - for production, cairosvg is recommended
            img = Image.new('RGBA', (width, height), (0, 0, 0, 0))

            # Read SVG and create a simple representation
            # (In production, use cairosvg or svglib)
            draw = ImageDraw.Draw(img)

            # Create a simple circle with lightning bolt (matching favicon design)
            bg_color = (3, 105, 161, 255)  # #0369A1

            # Draw circle background
            margin = 10
            draw.ellipse(
                [(margin, margin), (width - margin, height - margin)],
                fill=bg_color
            )

            # Draw lightning bolt
            bolt_color = (255, 255, 255, 255)
            center_x, center_y = width // 2, height // 2

            # Simple lightning shape
            points = [
                (center_x, center_y - int(height * 0.25)),
                (center_x + int(width * 0.15), center_y),
                (center_x - int(width * 0.05), center_y),
                (center_x + int(width * 0.2), center_y + int(height * 0.3)),
                (center_x - int(width * 0.1), center_y),
                (center_x, center_y + int(height * 0.1)),
            ]
            draw.polygon(points, fill=bolt_color)

        # Convert to RGB if needed (for PNG compatibility)
        if img.mode == 'RGBA':
            if 'maskable' not in output_file:
                # For standard icons with white background
                if width >= 192:
                    img = img  # Keep transparent for 192+
            # For masked icons, keep RGBA

        # Save the image
        img.save(output_file, 'PNG', optimize=True)
        print(f"✓ {os.path.basename(output_file)} created ({width}×{height})")
        return True

    except Exception as e:
        print(f"✗ Error creating {output_file}: {e}")
        return False

def main():
    """Generate all required favicon sizes."""

    print("\n╔════════════════════════════════════════╗")
    print("║  INTERY Icon Generation Tool (Python)  ║")
    print("║  Generating PNG icons from SVG         ║")
    print("╚════════════════════════════════════════╝\n")

    site_dir = Path(__file__).parent

    # Define icon specifications
    icons = [
        ('img/favicon.svg', 16, 16, 'img/favicon-16.png'),
        ('img/favicon.svg', 32, 32, 'img/favicon-32.png'),
        ('img/favicon.svg', 192, 192, 'img/icon-192.png'),
        ('img/favicon.svg', 512, 512, 'img/icon-512.png'),
        ('img/favicon.svg', 192, 192, 'img/icon-192-maskable.png'),
        ('img/favicon.svg', 512, 512, 'img/icon-512-maskable.png'),
        ('img/apple-touch-icon.svg', 180, 180, 'img/apple-touch-icon-180.png'),
    ]

    print("Generating favicon PNG icons...\n")

    success_count = 0
    for svg_file, width, height, output_file in icons:
        svg_path = site_dir / svg_file
        output_path = site_dir / output_file

        if create_icon_from_svg(str(svg_path), width, height, str(output_path)):
            success_count += 1

    print(f"\n╔════════════════════════════════════════╗")
    print(f"✓ Generated {success_count}/{len(icons)} icons successfully")
    print(f"╚════════════════════════════════════════╝\n")

    print("Generated files:")
    for _, _, _, output_file in icons:
        output_path = site_dir / output_file
        if output_path.exists():
            size = output_path.stat().st_size
            print(f"  • {output_file} ({size:,} bytes)")

    print("\n✓ Icon generation complete!")
    print("\nNext steps:")
    print("1. Test icons in browsers (favicon should appear in tabs)")
    print("2. Test PWA installation on Android/iOS")
    print("3. Verify in Google Search Console")
    print("4. Deploy to production\n")

    return success_count == len(icons)

if __name__ == '__main__':
    success = main()
    sys.exit(0 if success else 1)
