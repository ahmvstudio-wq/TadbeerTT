# -*- coding: utf-8 -*-
import re

def fix_html(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    # 1. Add html font-size
    html = html.replace('body {', 'html { font-size: 14px; }\n    body {')
    
    # 2. Fix capability list (change to 2 columns)
    html = html.replace(
        '.capability-list { list-style: none; margin-top: 2rem; }',
        '.capability-list { list-style: none; margin-top: 2rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }'
    )
    html = html.replace(
        '.capability-list li { display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1.25rem; }',
        '.capability-list li { display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 0; }'
    )

    # 3. Fix pipeline grid (change to 3 columns horizontal)
    html = html.replace(
        '.pipeline-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-top: 2rem; }',
        '.pipeline-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 2rem; }'
    )
    html = html.replace(
        '.pipeline-step { display: flex; gap: 1.5rem; background: #fff; border: 1px solid var(--border); padding: 1.5rem; border-radius: 12px; }',
        '.pipeline-step { display: flex; flex-direction: column; gap: 1rem; background: #fff; border: 1px solid var(--border); padding: 1.5rem; border-radius: 12px; }'
    )

    # 4. Reduce margins
    html = html.replace('margin-bottom: 3rem;', 'margin-bottom: 2rem;')
    html = html.replace('margin-top: 3rem;', 'margin-top: 2rem;')
    html = html.replace('margin-top: 4rem;', 'margin-top: 2rem;')
    html = html.replace('margin-bottom: 4rem;', 'margin-bottom: 2rem;')
    html = html.replace('padding: 60px 80px;', 'padding: 40px 60px;')
    
    # 5. Fix TOC list
    html = html.replace(
        '.toc-list { list-style: none; margin-top: 3rem; }',
        '.toc-list { list-style: none; margin-top: 1rem; }'
    )
    html = html.replace('margin-top: 2.5rem;', 'margin-top: 1.5rem;')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)

fix_html('company-profile/index.html')
fix_html('company-profile/short.html')
print('Fixed layout to strictly ban continuations.')
