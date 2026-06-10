import re

with open('company-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Add CSS
css_injection = '''
    /* ===== GRAPHIC ENHANCEMENTS ===== */
    .bg-graphic-circle { position: absolute; border-radius: 50%; opacity: 0.03; z-index: 0; background: var(--primary); }
    .dark-bg .bg-graphic-circle { background: #fff; }
    .bg-graphic-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(24,79,91,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(24,79,91,0.03) 1px, transparent 1px); background-size: 60px 60px; z-index: 0; }
    .dark-bg .bg-graphic-grid { background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); }
    .huge-watermark { position: absolute; font-size: 35rem; font-weight: 700; color: rgba(202,169,76,0.04); top: 50%; right: -5%; transform: translateY(-50%); line-height: 1; z-index: 0; font-family: var(--font-en); letter-spacing: -5px; user-select: none; }
    .dark-bg .huge-watermark { color: rgba(255,255,255,0.02); }
    .aesthetic-dots { position: absolute; width: 300px; height: 300px; background-image: radial-gradient(rgba(24,79,91,0.15) 2px, transparent 2px); background-size: 20px 20px; z-index: 0; }
    .dark-bg .aesthetic-dots { background-image: radial-gradient(rgba(255,255,255,0.08) 2px, transparent 2px); }
    .page-inner > * { position: relative; z-index: 1; }
    .corner-accent { z-index: 0; }
'''
html = html.replace('  </style>', css_injection + '\n  </style>')

# 2. Inject graphics into pages
pages = html.split('<!-- ================= PAGE ')
new_pages = [pages[0]]

for page in pages[1:]:
    lines = page.split('\n')
    header = lines[0]
    
    bg_elements = ''
    if '02: INSIDE COVER' in header:
        bg_elements = '<div class=\"bg-graphic-grid\"></div><div class=\"aesthetic-dots\" style=\"top: -50px; right: 100px;\"></div>'
    elif '04: EXECUTIVE SUMMARY' in header:
        bg_elements = '<div class=\"huge-watermark\" style=\"right: 5%;\">EXEC</div><div class=\"bg-graphic-circle\" style=\"width: 600px; height: 600px; bottom: -200px; left: -200px;\"></div>'
    elif '05: WHO WE ARE' in header:
        bg_elements = '<div class=\"bg-graphic-grid\"></div><div class=\"huge-watermark\" style=\"right: -10%;\">WHO</div>'
    elif '06: VISION' in header:
        bg_elements = '<div class=\"bg-graphic-circle\" style=\"width: 800px; height: 800px; top: -300px; right: -200px;\"></div><div class=\"huge-watermark\" style=\"left: -10%; right: auto;\">CORE</div>'
    elif '07: OMAN VISION' in header:
        bg_elements = '<div class=\"huge-watermark\" style=\"right: 10%; color: rgba(202,169,76,0.06);\">2040</div><div class=\"aesthetic-dots\" style=\"bottom: 100px; right: 100px;\"></div>'
    elif '08: THE MARKET REALITY' in header:
        bg_elements = '<div class=\"bg-graphic-grid\"></div><div class=\"huge-watermark\" style=\"right: 5%; font-size: 25rem;\">GAP</div>'
    elif '09: OUR PHILOSOPHY' in header:
        bg_elements = '<div class=\"bg-graphic-circle\" style=\"width: 1000px; height: 1000px; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 2px solid rgba(255,255,255,0.05); background: transparent;\"></div><div class=\"bg-graphic-circle\" style=\"width: 700px; height: 700px; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 2px solid rgba(255,255,255,0.1); background: transparent;\"></div>'
    elif '10: THE SYNERGY' in header:
        bg_elements = '<div class=\"huge-watermark\" style=\"right: 5%;\">SYNC</div><div class=\"aesthetic-dots\" style=\"bottom: 50px; left: 50px;\"></div>'
    elif '11: PILLAR I' in header:
        bg_elements = '<div class=\"huge-watermark\">01</div><div class=\"bg-graphic-grid\"></div>'
    elif '12: PILLAR I IN ACTION' in header:
        bg_elements = '<div class=\"huge-watermark\" style=\"right: 10%; font-size: 20rem;\">GROW</div>'
    elif '13: PILLAR II' in header:
        bg_elements = '<div class=\"huge-watermark\">02</div><div class=\"bg-graphic-grid\"></div>'
    elif '14: PILLAR II IN ACTION' in header:
        bg_elements = '<div class=\"huge-watermark\" style=\"right: 10%; font-size: 20rem;\">SCALE</div>'
    elif '15: PILLAR III' in header:
        bg_elements = '<div class=\"huge-watermark\">03</div><div class=\"bg-graphic-grid\"></div>'
    elif '16: PILLAR III IN ACTION' in header:
        bg_elements = '<div class=\"huge-watermark\" style=\"right: 10%; font-size: 20rem;\">AUTO</div>'
    elif '17: PILLAR IV' in header:
        bg_elements = '<div class=\"huge-watermark\">04</div><div class=\"bg-graphic-grid\"></div>'
    elif '18: PILLAR IV IN ACTION' in header:
        bg_elements = '<div class=\"huge-watermark\" style=\"right: 10%; font-size: 20rem;\">TEAM</div>'
    elif '19: OUR PROVEN PROCESS' in header:
        bg_elements = '<div class=\"huge-watermark\" style=\"right: 0;\">FLOW</div>'
    elif '20: WHY CHOOSE' in header:
        bg_elements = '<div class=\"bg-graphic-circle\" style=\"width: 600px; height: 600px; top: -100px; right: -100px;\"></div><div class=\"aesthetic-dots\" style=\"bottom: 100px; left: 100px;\"></div>'
    elif '21: THE CHRONICLE' in header:
        bg_elements = '<div class=\"bg-graphic-grid\"></div>'
    elif '22: INDUSTRIES' in header:
        bg_elements = '<div class=\"huge-watermark\" style=\"left: 5%; right: auto;\">SEC</div>'
    elif '24: GLOBAL METRICS' in header:
        bg_elements = '<div class=\"huge-watermark\" style=\"right: 5%;\">DATA</div><div class=\"bg-graphic-grid\"></div>'
    elif '25: CONTACT' in header:
        bg_elements = '<div class=\"bg-graphic-circle\" style=\"width: 1200px; height: 1200px; bottom: -600px; right: -400px;\"></div>'
    
    if bg_elements:
        page = page.replace('<div class=\"page-inner\">', f'<div class=\"page-inner\">\n      {bg_elements}')
        page = page.replace('<div class=\"page-inner flex-col\">', f'<div class=\"page-inner flex-col\">\n      {bg_elements}')
    
    new_pages.append(page)

html = '<!-- ================= PAGE '.join(new_pages)

with open('company-profile/index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print('Enhanced 25-page deck.')
