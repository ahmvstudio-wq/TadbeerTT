import React from 'react';

import alHarrasi      from '../assets/clients/al-harrasi-rope-factory.png';
import omanAir        from '../assets/clients/oman-air.png';
import tamimahTelecom from '../assets/clients/tamimah-telecom.png';
import mafranMeat     from '../assets/clients/mafran-meat.png';
import gloriaJeans    from '../assets/clients/gloria-jeans.png';
import alQurumPerfumes from '../assets/clients/al-qurum-perfumes.png';
import sultanateOfMarble from '../assets/clients/sultanate-of-marble.png';
import ministryOfAwqaf from '../assets/clients/ministry-of-awqaf.png';
import amecAlmusharfi from '../assets/clients/amec-almusharfi.png';
import atiin          from '../assets/clients/atiin.png';
import troxy          from '../assets/clients/troxy.png';
import yalla          from '../assets/clients/yalla.png';
import oudhAlKabir    from '../assets/clients/oudh-al-kabir.png';
import yallaPass      from '../assets/clients/yalla-pass.jpg';

const Clients = () => {
  const clients = [
    { name: "Al Harrasi Rope Factory",    logo: alHarrasi,    darkBg: true  },
    { name: "Oman Air",                   logo: omanAir                      },
    { name: "Tamimah Telecom",            logo: tamimahTelecom               },
    { name: "Mafran Meat",                logo: mafranMeat                   },
    { name: "Gloria Jean's",              logo: gloriaJeans                  },
    { name: "Al Qurum Perfumes",          logo: alQurumPerfumes              },
    { name: "Sultanate of Marble",        logo: sultanateOfMarble            },
    { name: "Ministry of Awqaf",          logo: ministryOfAwqaf              },
    { name: "AMEC Almusharfi Engineering",logo: amecAlmusharfi               },
    { name: "Atiin",                      logo: atiin,        darkBg: true  },
    { name: "Troxy",                      logo: troxy                        },
    { name: "Oudh Al Kabir",              logo: oudhAlKabir                  },
    { name: "Yalla Pass",                 logo: yallaPass                    },
    { name: "Yalla",                      logo: yalla                        },
  ];

  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '0.5rem' }}>
          <span className="section-label">Trusted by leading businesses across Oman &amp; the GCC</span>
        </div>

        <div className="marquee-container">
          <div className="marquee-content">
            {clients.map((client, index) => (
              <div key={index} className={`client-logo-wrapper${client.darkBg ? ' client-logo-wrapper--dark' : ''}`}>
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo-img"
                  title={client.name}
                />
                <span className="client-logo-name">{client.name}</span>
              </div>
            ))}
            {clients.map((client, index) => (
              <div key={`dup-${index}`} className={`client-logo-wrapper${client.darkBg ? ' client-logo-wrapper--dark' : ''}`}>
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo-img"
                  title={client.name}
                />
                <span className="client-logo-name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          {['🍽️ F&B', '🏛️ Government', '🏭 Manufacturing', '📡 Telecom', '🏗️ Construction', '🛒 Retail'].map((tag, i) => (
            <span key={i} style={{ padding: '0.35rem 0.75rem', background: 'rgba(202,169,76,0.06)', borderRadius: '50px', border: '1px solid var(--border)' }}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
