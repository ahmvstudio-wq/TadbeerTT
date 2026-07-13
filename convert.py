import os

with open('src/components/OnyxAssistant.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('OnyxAssistant', 'OryxAssistant')
content = content.replace('OnyxIcon', 'OryxIcon')
content = content.replace('Onyx', 'Oryx')
content = content.replace('onyx', 'oryx')

header_old = """<div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <OryxIcon size={24} />
                  </div>"""
header_new = """<div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img src='/mascot.png.png' alt='Oryx' style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%', transform: 'scale(1.4)' }} />
                  </div>"""
content = content.replace(header_old, header_new)

trigger_old = "{isOpen ? <X size={24} /> : <OryxIcon size={26} />}"
trigger_new = """{isOpen ? <X size={24} /> : (
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden' }}>
              <img src='/mascot.png.png' alt='Oryx' style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%', transform: 'scale(1.4)' }} />
            </div>
          )}"""
content = content.replace(trigger_old, trigger_new)

with open('src/components/OryxAssistant.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

os.remove('src/components/OnyxAssistant.jsx')
