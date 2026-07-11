import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.moduledrawers.pil import RoundedModuleDrawer
from qrcode.image.styles.colormasks import SolidFillColorMask
from PIL import Image, ImageDraw
import os

url = "https://tadbeer-tt.vercel.app"
logo_path = "public/oryx.png.png"
output_path = "tadbeer-qr-branded.png"

# Brand colors
PRIMARY = (24, 79, 91)     # #184F5B
SECONDARY = (202, 169, 76) # #CAA94C 
BG_COLOR = (249, 248, 243) # #F9F8F3

qr = qrcode.QRCode(
    version=5,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=40,
    border=4,
)
qr.add_data(url)
qr.make(fit=True)

# Generate styled QR code with rounded dots
qr_img = qr.make_image(
    image_factory=StyledPilImage,
    module_drawer=RoundedModuleDrawer(radius_ratio=1),
    color_mask=SolidFillColorMask(front_color=PRIMARY, back_color=BG_COLOR)
).convert('RGBA')

if os.path.exists(logo_path):
    logo = Image.open(logo_path).convert("RGBA")
    
    # Calculate sizes
    qr_w, qr_h = qr_img.size
    logo_size = int(qr_w / 3.5)
    
    # Resize logo to fit inside our rounded mask
    # We will leave a little padding
    inner_logo_size = int(logo_size * 0.8)
    # Maintain aspect ratio for the logo to prevent shrinking/squishing
    logo_w, logo_h = logo.size
    ratio = min(inner_logo_size / logo_w, inner_logo_size / logo_h)
    new_w = int(logo_w * ratio)
    new_h = int(logo_h * ratio)
    logo = logo.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Create the background/border for the logo
    logo_bg = Image.new('RGBA', (logo_size, logo_size), (255, 255, 255, 0))
    draw = ImageDraw.Draw(logo_bg)
    
    # Draw background
    # We use a rounded rectangle. The radius is roughly 25% of the size
    radius = int(logo_size * 0.25)
    
    # Fill background with BG_COLOR
    draw.rounded_rectangle((0, 0, logo_size, logo_size), radius=radius, fill=BG_COLOR)
    
    # Draw border with SECONDARY (Gold) color
    draw.rounded_rectangle((0, 0, logo_size, logo_size), radius=radius, outline=SECONDARY, width=4)
    
    # Paste the resized logo into the center of the rounded background
    logo_pos = ((logo_size - new_w) // 2, (logo_size - new_h) // 2)
    logo_bg.paste(logo, logo_pos, logo)
    
    # Paste the final logo composition into the center of the QR code
    pos = ((qr_w - logo_size) // 2, (qr_h - logo_size) // 2)
    qr_img.paste(logo_bg, pos, logo_bg)

# Create a final image with the BG_COLOR (since RGBA to RGB needs a background)
final_img = Image.new("RGB", qr_img.size, BG_COLOR)
final_img.paste(qr_img, (0, 0), qr_img)

final_img.save(output_path)
print(f"Generated beautiful branded QR code saved to {output_path}")
