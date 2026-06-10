# -*- coding: utf-8 -*-
import re

with open('company-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

pages = html.split('<!-- ================= PAGE ')

keep_indices = [1, 4, 10, 11, 12, 13, 14, 15, 18, 19]

new_pages = [pages[0]]
current_page_num = 1

for idx in keep_indices:
    page_content = pages[idx]
    new_num = str(current_page_num).zfill(2)
    page_content = re.sub(r'<span class=\"page-number\">\d+</span>', f'<span class=\"page-number\">{new_num}</span>', page_content)
    page_content = re.sub(r'^\d+: ', f'{new_num}: ', page_content)
    new_pages.append(page_content)
    current_page_num += 1

short_html = '<!-- ================= PAGE '.join(new_pages)

# Fix title using standard ASCII hyphen
short_html = re.sub(r'<title>.*?</title>', '<title>Tadbeer Transformation - Executive Summary (10 Pages)</title>', short_html)

with open('company-profile/short.html', 'w', encoding='utf-8') as f:
    f.write(short_html)

print('Generated 10-page short.html deck.')
