import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  Camera,
  ChevronDown,
  Clock3,
  Globe2,
  MapPin,
  Menu,
  Navigation,
  TrainFront,
  X
} from 'lucide-react'
import './styles.css'

const translations = {
  pa: {
    label: 'ਪੰਜਾਬੀ',
    nav: { home: 'ਮੁੱਖ ਪੰਨਾ', history: 'ਇਤਿਹਾਸ', gallery: 'ਗੈਲਰੀ', visit: 'ਕਿਵੇਂ ਪਹੁੰਚੀਏ', news: 'ਖ਼ਬਰਾਂ' },
    heroEyebrow: 'ਸਾਡੀ ਵਿਰਾਸਤ • ਸਾਡੀ ਪਛਾਣ',
    heroTitle: 'ਧੰਮਤਾਨ ਸਾਹਿਬ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ',
    heroText: 'ਇਤਿਹਾਸ, ਆਸਥਾ ਅਤੇ ਸਾਡੀ ਸਾਂਝੀ ਵਿਰਾਸਤ ਨੂੰ ਇੱਕ ਥਾਂ ਜਾਣੋ।',
    explore: 'ਜਾਣਕਾਰੀ ਵੇਖੋ',
    visit: 'ਕਿਵੇਂ ਪਹੁੰਚੀਏ',
    aboutEyebrow: 'ਧੰਮਤਾਨ ਸਾਹਿਬ ਬਾਰੇ',
    aboutTitle: 'ਇਤਿਹਾਸ ਨਾਲ ਜੁੜੀ ਇੱਕ ਪਵਿੱਤਰ ਧਰਤੀ',
    aboutText: 'ਇੱਥੇ ਧੰਮਤਾਨ ਸਾਹਿਬ ਦੇ ਇਤਿਹਾਸ, ਮਹੱਤਵ ਅਤੇ ਸਥਾਨਕ ਵਿਰਾਸਤ ਬਾਰੇ ਜਾਣਕਾਰੀ ਸਾਂਝੀ ਕੀਤੀ ਜਾਵੇਗੀ। ਇਹ ਹਿੱਸਾ ਬਾਅਦ ਵਿੱਚ CMS ਰਾਹੀਂ ਆਸਾਨੀ ਨਾਲ ਅੱਪਡੇਟ ਕੀਤਾ ਜਾ ਸਕੇਗਾ।',
    readMore: 'ਹੋਰ ਪੜ੍ਹੋ',
    highlights: 'ਮੁੱਖ ਜਾਣਕਾਰੀ',
    history: 'ਇਤਿਹਾਸ',
    historyText: 'ਧੰਮਤਾਨ ਸਾਹਿਬ ਨਾਲ ਜੁੜੀ ਇਤਿਹਾਸਕ ਜਾਣਕਾਰੀ।',
    gallery: 'ਫੋਟੋ ਗੈਲਰੀ',
    galleryText: 'ਧੰਮਤਾਨ ਸਾਹਿਬ ਅਤੇ ਆਸ-ਪਾਸ ਦੀਆਂ ਤਸਵੀਰਾਂ।',
    directions: 'ਕਿਵੇਂ ਪਹੁੰਚੀਏ',
    directionsText: 'ਸੜਕ, ਰੇਲ ਅਤੇ ਹੋਰ ਯਾਤਰਾ ਜਾਣਕਾਰੀ।',
    latest: 'ਤਾਜ਼ਾ ਜਾਣਕਾਰੀ',
    latestText: 'ਖ਼ਬਰਾਂ, ਸਮਾਗਮਾਂ ਅਤੇ ਮਹੱਤਵਪੂਰਨ ਐਲਾਨ ਇੱਥੇ ਦਿਖਾਏ ਜਾਣਗੇ।',
    viewAll: 'ਸਭ ਵੇਖੋ',
    visitor: 'ਯਾਤਰੀ ਜਾਣਕਾਰੀ',
    location: 'ਸਥਾਨ',
    railway: 'ਰੇਲਵੇ',
    map: 'ਨਕਸ਼ਾ',
    footer: 'ਇਤਿਹਾਸ • ਆਸਥਾ • ਵਿਰਾਸਤ',
  },
  hi: {
    label: 'हिन्दी',
    nav: { home: 'होम', history: 'इतिहास', gallery: 'गैलरी', visit: 'कैसे पहुँचें', news: 'समाचार' },
    heroEyebrow: 'हमारी विरासत • हमारी पहचान',
    heroTitle: 'धमतान साहिब में आपका स्वागत है',
    heroText: 'इतिहास, आस्था और हमारी साझा विरासत को एक ही स्थान पर जानें।',
    explore: 'जानकारी देखें',
    visit: 'कैसे पहुँचें',
    aboutEyebrow: 'धमतान साहिब के बारे में',
    aboutTitle: 'इतिहास से जुड़ी एक पवित्र धरती',
    aboutText: 'यहाँ धमतान साहिब के इतिहास, महत्व और स्थानीय विरासत की जानकारी साझा की जाएगी। इस हिस्से को बाद में CMS के माध्यम से आसानी से अपडेट किया जा सकेगा।',
    readMore: 'और पढ़ें',
    highlights: 'मुख्य जानकारी',
    history: 'इतिहास',
    historyText: 'धमतान साहिब से जुड़ी ऐतिहासिक जानकारी।',
    gallery: 'फोटो गैलरी',
    galleryText: 'धमतान साहिब और आसपास की तस्वीरें।',
    directions: 'कैसे पहुँचें',
    directionsText: 'सड़क, रेल और अन्य यात्रा संबंधी जानकारी।',
    latest: 'नवीनतम जानकारी',
    latestText: 'समाचार, कार्यक्रम और महत्वपूर्ण घोषणाएँ यहाँ दिखाई जाएँगी।',
    viewAll: 'सभी देखें',
    visitor: 'यात्री जानकारी',
    location: 'स्थान',
    railway: 'रेलवे',
    map: 'नक्शा',
    footer: 'इतिहास • आस्था • विरासत',
  },
  en: {
    label: 'English',
    nav: { home: 'Home', history: 'History', gallery: 'Gallery', visit: 'How to Reach', news: 'News' },
    heroEyebrow: 'Our heritage • Our identity',
    heroTitle: 'Welcome to Dhamtan Sahib',
    heroText: 'Discover history, faith and our shared heritage in one place.',
    explore: 'Explore',
    visit: 'How to Reach',
    aboutEyebrow: 'About Dhamtan Sahib',
    aboutTitle: 'A sacred place shaped by history',
    aboutText: 'This section will share the history, significance and local heritage of Dhamtan Sahib. It can later be updated easily through the CMS.',
    readMore: 'Read more',
    highlights: 'Explore',
    history: 'History',
    historyText: 'Historical information about Dhamtan Sahib.',
    gallery: 'Photo Gallery',
    galleryText: 'Photos of Dhamtan Sahib and the surrounding area.',
    directions: 'How to Reach',
    directionsText: 'Road, railway and other visitor information.',
    latest: 'Latest Information',
    latestText: 'News, events and important announcements will appear here.',
    viewAll: 'View all',
    visitor: 'Visitor Information',
    location: 'Location',
    railway: 'Railway',
    map: 'Map',
    footer: 'History • Faith • Heritage',
  }
}

const gallery = [
  { src: 'img/img3.png?auto=format&fit=crop&w=1000&q=85', alt: 'Heritage architecture' },
  { src: 'img/img4.jpg?auto=format&fit=crop&w=1000&q=85', alt: 'Temple architecture' },
  { src: 'img/img5.jpg?auto=format&fit=crop&w=1000&q=85', alt: 'Indian heritage' },
]

function App() {
  const [lang, setLang] = useState('pa')
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const t = translations[lang]

  useEffect(() => {
    document.documentElement.lang = lang === 'pa' ? 'pa' : lang
    document.title = lang === 'pa'
      ? 'Dhamtan Sahib | ਧੰਮਤਾਨ ਸਾਹਿਬ'
      : lang === 'hi'
        ? 'Dhamtan Sahib | धमतान साहिब'
        : 'Dhamtan Sahib | Welcome'
  }, [lang])

  const changeLang = (next) => {
    setLang(next)
    setLangOpen(false)
    setMenuOpen(false)
  }

  const navItems = [
    ['home', '#home'],
    ['history', '#history'],
    ['gallery', '#gallery'],
    ['visit', '#visit'],
    ['news', '#news'],
  ]

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#home" aria-label="Dhamtan Sahib home">
          <span className="brand-mark">ਧ</span>
          <span>
            <strong>Dhamtan Sahib</strong>
            <small>ਧੰਮਤਾਨ ਸਾਹਿਬ</small>
          </span>
        </a>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          {navItems.map(([key, href]) => (
            <a key={key} href={href} onClick={() => setMenuOpen(false)}>{t.nav[key]}</a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="language">
            <button className="language-btn" onClick={() => setLangOpen(v => !v)} aria-expanded={langOpen}>
              <Globe2 size={17} />
              {t.label}
              <ChevronDown size={15} />
            </button>
            {langOpen && (
              <div className="language-menu">
                {Object.entries(translations).map(([code, item]) => (
                  <button
                    key={code}
                    className={lang === code ? 'active' : ''}
                    onClick={() => changeLang(code)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-overlay" />
          <div className="hero-content container">
            <span className="eyebrow hero-eyebrow">{t.heroEyebrow}</span>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroText}</p>
            <div className="hero-buttons">
              <a href="#history" className="btn btn-primary">{t.explore} <ArrowRight size={17} /></a>
              <a href="#visit" className="btn btn-light"><Navigation size={17} /> {t.visit}</a>
            </div>
          </div>
          <div className="hero-scroll">SCROLL <span /></div>
        </section>

        <section id="history" className="section about">
          <div className="container split">
            <div className="image-frame">
              <img src="img/img2.jpg?auto=format&fit=crop&w=1200&q=85" alt="Dhamtan Sahib heritage placeholder" />
              <div className="image-caption"><span>ਧ</span> {t.footer}</div>
            </div>
            <div className="section-copy">
              <span className="eyebrow">{t.aboutEyebrow}</span>
              <h2>{t.aboutTitle}</h2>
              <p>{t.aboutText}</p>
              <a className="text-link" href="#news">{t.readMore} <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="section highlights">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">{t.highlights}</span>
                <h2>{t.heroTitle}</h2>
              </div>
            </div>
            <div className="cards">
              <FeatureCard icon={<Clock3 />} title={t.history} text={t.historyText} href="#history" />
              <FeatureCard icon={<Camera />} title={t.gallery} text={t.galleryText} href="#gallery" />
              <FeatureCard icon={<TrainFront />} title={t.directions} text={t.directionsText} href="#visit" />
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">{t.gallery}</span>
                <h2>{t.gallery}</h2>
              </div>
              <a className="text-link" href="#gallery">{t.viewAll} <ArrowRight size={16} /></a>
            </div>
            <div className="gallery-grid">
              {gallery.map((item, index) => (
                <figure className={`gallery-item gallery-${index + 1}`} key={item.src}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  {index === 0 && <figcaption><Camera size={17} /> {t.gallery}</figcaption>}
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="visit" className="section visit-section">
          <div className="container visit-grid">
            <div>
              <span className="eyebrow">{t.visitor}</span>
              <h2>{t.directions}</h2>
              <p>{t.directionsText}</p>
              <div className="info-list">
                <div><MapPin /><span><b>{t.location}</b><small>Dhamtan Sahib, Haryana, India</small></span></div>
                <div><TrainFront /><span><b>{t.railway}</b><small>Railway information will be added in Phase 2.</small></span></div>
              </div>
            </div>
            <div className="map-placeholder">
               <img src="img/map.png?auto=format&fit=crop&w=550&q=390" alt="Dhamtan Sahib heritage placeholder" />

            </div>
          </div>
        </section>

        <section id="news" className="section news-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">{t.latest}</span>
                <h2>{t.latest}</h2>
              </div>
              <a className="text-link" href="#news">{t.viewAll} <ArrowRight size={16} /></a>
            </div>
            <article className="news-card">
              <div className="news-date"><strong>01</strong><span>NEWS</span></div>
              <div>
                <h3>{t.latest}</h3>
                <p>{t.latestText}</p>
              </div>
              <ArrowRight className="news-arrow" />
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="brand-mark">ਧ</span>
            <div><strong>Dhamtan Sahib</strong><small>ਧੰਮਤਾਨ ਸਾਹਿਬ</small></div>
          </div>
          <p>{t.footer}</p>
          <span>© {new Date().getFullYear()} Dhamtan Sahib</span>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, text, href }) {
  return (
    <a className="feature-card" href={href}>
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span><ArrowRight size={17} /></span>
    </a>
  )
}

createRoot(document.getElementById('root')).render(<App />)
