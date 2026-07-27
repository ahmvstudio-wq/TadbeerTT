import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.moduledrawers.pil import RoundedModuleDrawer
from qrcode.image.styles.colormasks import SolidFillColorMask
from PIL import Image, ImageDraw
import os

PRIMARY = (24, 79, 91)     # #184F5B
SECONDARY = (202, 169, 76) # #CAA94C 
BG_COLOR = (250, 249, 246) # #FAF9F6

links = [
    {"url": "https://tadbeertt.com", "file": "public/assets/qr_website.png"},
    {"url": "https://www.instagram.com/tadbeertt/", "file": "public/assets/qr_instagram.png"},
    {"url": "https://www.linkedin.com/company/tadbeertransformations", "file": "public/assets/qr_linkedin.png"}
]

logo_path = "public/oryx.png.png"

for item in links:
    qr = qrcode.QRCode(
        version=4,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=20,
        border=2,
    )
    qr.add_data(item["url"])
    qr.make(fit=True)

    qr_img = qr.make_image(
        image_factory=StyledPilImage,
        module_drawer=RoundedModuleDrawer(radius_ratio=1),
        color_mask=SolidFillColorMask(front_color=PRIMARY, back_color=BG_COLOR)
    ).convert('RGBA')

    if os.path.exists(logo_path):
        logo = Image.open(logo_path).convert("RGBA")
        qr_w, qr_h = qr_img.size
        logo_size = int(qr_w / 3.8)
        inner_size = int(logo_size * 0.8)
        
        logo_w, logo_h = logo.size
        ratio = min(inner_size / logo_w, inner_size / logo_h)
        new_w, new_h = int(logo_w * ratio), int(logo_h * ratio)
        logo = logo.resize((new_w, new_h), Image.Resampling.LANCZOS)

        logo_bg = Image.new('RGBA', (logo_size, logo_size), (255, 255, 255, 0))
        draw = ImageDraw.Draw(logo_bg)
        radius = int(logo_size * 0.25)
        
        draw.rounded_rectangle((0, 0, logo_size, logo_size), radius=radius, fill=BG_COLOR)
        draw.rounded_rectangle((0, 0, logo_size, logo_size), radius=radius, outline=SECONDARY, width=3)
        
        logo_pos = ((logo_size - new_w) // 2, (logo_size - new_h) // 2)
        logo_bg.paste(logo, logo_pos, logo)
        
        pos = ((qr_w - logo_size) // 2, (qr_h - logo_size) // 2)
        qr_img.paste(logo_bg, pos, logo_bg)

    final_img = Image.new("RGB", qr_img.size, BG_COLOR)
    final_img.paste(qr_img, (0, 0), qr_img)
    final_img.save(item["file"])
    print(f"Generated {item['file']}")
