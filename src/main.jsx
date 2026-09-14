import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Menu, Play, X } from 'lucide-react'
import './styles.css'

const projects = [
  { id: 1, title: "Hauwee's Bridal Shower", category: 'Wedding', year: '2026', duration: '00:58', description: 'A celebration of quiet glances, loud laughter, and the promise of a lifetime.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/5304e5c86629531bf7c1942cc1f535b1/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/5304e5c86629531bf7c1942cc1f535b1/iframe', orientation: 'portrait' },
  { id: 2, title: 'SAHA26 Nupe Day Highlight', category: 'Wedding', year: '2026', duration: '00:56', description: 'An intimate union told through the people and details that made the day theirs.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/21ed6b517683cef49d8e52cd9e75b491/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/21ed6b517683cef49d8e52cd9e75b491/iframe', orientation: 'portrait' },
  { id: 3, title: 'Funmi & Haqq', category: 'Wedding', year: '2026', duration: '00:51', description: 'A warm, intimate portrait of a celebration shaped by joy and connection.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/1e3a9b585b951dc6ecedc909af88367b/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/1e3a9b585b951dc6ecedc909af88367b/iframe', orientation: 'portrait' },
  { id: 13, title: "Salma's Transition", category: 'Wedding', year: '2026', duration: '00:53', description: 'A personal milestone captured with warmth, movement, and attention to detail.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/53145bced178d1b8399994c0530a7bb3/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/53145bced178d1b8399994c0530a7bb3/iframe', orientation: 'portrait' },
  { id: 4, title: 'Impactful Representation', category: 'Documentary', year: '2026', duration: '00:52', description: 'A brief study of people, place, and the moments that carry a story forward.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/a13053ad2d06695c549242a1cc237c9d/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/a13053ad2d06695c549242a1cc237c9d/iframe', orientation: 'landscape' },
  { id: 5, title: 'Documentary 33', category: 'Documentary', year: '2026', duration: '00:57', description: 'The people behind the work, observed in their own rhythm and environment.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/cce97d1080d52e6d65135d76bf136a0c/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/cce97d1080d52e6d65135d76bf136a0c/iframe', orientation: 'portrait' },
  { id: 6, title: 'Tomatos Jos', category: 'Documentary', year: '2026', duration: '00:54', description: 'A grounded story of place, production, and the people behind the process.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/b927458b11a934342ea585cd8ccb6a97/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/b927458b11a934342ea585cd8ccb6a97/iframe', orientation: 'landscape' },
  { id: 15, title: 'Usman DAM', category: 'Documentary', year: '2026', duration: '00:50', description: 'A grounded documentary portrait of people, place, and lasting impact.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/520721d80c20283eccae039dca618658/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/520721d80c20283eccae039dca618658/iframe', orientation: 'landscape' },
  { id: 16, title: 'ECN Water Project', category: 'Documentary', year: '2026', duration: '00:55', description: 'A clear account of infrastructure, community, and the value of access to water.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/829f30265e1d93a8b26e38a476721d1d/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/829f30265e1d93a8b26e38a476721d1d/iframe', orientation: 'landscape' },
  { id: 7, title: 'OPL Book Launch', category: 'Event', year: '2026', duration: '00:45', description: 'A night of movement, music, and the electric moments between them.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/87bfced1518484663c7fe979389614e5/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/87bfced1518484663c7fe979389614e5/iframe', orientation: 'landscape' },
  { id: 8, title: 'Grace Unspeakable Launch', category: 'Event', year: '2026', duration: '00:48', description: 'The energy of a live audience distilled into sixty unforgettable seconds.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/52d65e2b3096595e9a50928999cc866c/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/52d65e2b3096595e9a50928999cc866c/iframe', orientation: 'landscape' },
  { id: 9, title: 'Nasa Space App Challenge', category: 'Event', year: '2026', duration: '00:42', description: 'A vivid record of ideas, collaboration, and people building toward the future.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/c887be418d5a2dfb22adb79f2eda9556/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/c887be418d5a2dfb22adb79f2eda9556/iframe', orientation: 'landscape' },
  { id: 17, title: 'She Commerce', category: 'Event', year: '2026', duration: '00:46', description: 'A gathering built around enterprise, connection, and women moving business forward.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/20331c793fe045b0fe52d1ebdcbb2f43/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/20331c793fe045b0fe52d1ebdcbb2f43/iframe', orientation: 'landscape' },
  { id: 18, title: 'Davido 5alive Tour', category: 'Event', year: '2026', duration: '00:44', description: 'The scale, performance, and crowd energy of a major live music experience.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/637d54e987b4023dcf374d8444ce1fd3/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/637d54e987b4023dcf374d8444ce1fd3/iframe', orientation: 'landscape' },
  { id: 10, title: 'Yarynn Tales', category: 'Brand Story', year: '2026', duration: '00:59', description: 'A focused brand film built to communicate purpose, personality, and value.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/431ebaec143beb17b54bf24c1e814858/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/431ebaec143beb17b54bf24c1e814858/iframe', orientation: 'portrait' },
  { id: 11, title: 'Adorn By Nay', category: 'Brand Story', year: '2026', duration: '00:55', description: 'A concise visual story designed to make the brand memorable and human.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/4c2095f3babb053c6c79c29dfe5e945f/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/4c2095f3babb053c6c79c29dfe5e945f/iframe', orientation: 'portrait' },
  { id: 12, title: 'Itinochi Revolution', category: 'Brand Story', year: '2026', duration: '00:49', description: 'Product, people, and purpose brought together in one clear narrative.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/6255890ba65883f543da8bcfac5f9c3b/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/6255890ba65883f543da8bcfac5f9c3b/iframe', orientation: 'portrait' },
  { id: 19, title: 'A Seat at The Table', category: 'Brand Story', year: '2026', duration: '00:52', description: 'A brand-led story about presence, perspective, and creating space for meaningful voices.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/9c23db7f08184819672e51deb303c968/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/9c23db7f08184819672e51deb303c968/iframe', orientation: 'portrait' },
  { id: 26, title: 'Gusto', category: 'Promotional', year: '2026', duration: '00:50', description: 'A vibrant promotional film shaped to catch attention and move with the brand.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/7042ce3e9d11d1581931cf36a6835706/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/7042ce3e9d11d1581931cf36a6835706/iframe', orientation: 'portrait' },
  { id: 27, title: 'Khairan Veils', category: 'Promotional', year: '2026', duration: '00:50', description: 'Elegant product storytelling designed for a refined, contemporary audience.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/1ed10d5a78956c883d94483ba7b59ef9/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/1ed10d5a78956c883d94483ba7b59ef9/iframe', orientation: 'portrait' },
  { id: 28, title: 'Stones Sparkle', category: 'Promotional', year: '2026', duration: '00:50', description: 'A polished product film focused on detail, brilliance, and visual appeal.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/475acc3c6555cac4d0ebba3edea50df4/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/475acc3c6555cac4d0ebba3edea50df4/iframe', orientation: 'portrait' },
  { id: 29, title: 'Princetonian Guzape', category: 'Promotional', year: '2026', duration: '00:50', description: 'A purposeful campaign film created to turn attention into action.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/f53e3ac9ad69a5f47ae4f90f0248e10c/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/f53e3ac9ad69a5f47ae4f90f0248e10c/iframe', orientation: 'portrait' },
  { id: 30, title: 'Jack Sila 01', category: 'Promotional', year: '2026', duration: '00:50', description: 'A concise promotional story built around the product and its audience.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/40c0af5339a482fa47ee8cea70e548a0/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/40c0af5339a482fa47ee8cea70e548a0/iframe', orientation: 'portrait' },
  { id: 31, title: 'Jack Sila 02', category: 'Promotional', year: '2026', duration: '00:50', description: 'A second campaign cut extending the story with a fresh promotional focus.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/328c08675ab276eba4627a61c93884c2/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/328c08675ab276eba4627a61c93884c2/iframe', orientation: 'portrait' },
  { id: 32, title: 'Denam Properties Hiring', category: 'Promotional', year: '2026', duration: '00:50', description: 'A focused recruitment campaign designed to attract people ready to build and grow.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/c81d3064d680aa4eb832dd7af909d6bb/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/c81d3064d680aa4eb832dd7af909d6bb/iframe', orientation: 'portrait' },
]

const categories = ['Wedding', 'Documentary', 'Event', 'Brand Story', 'Promotional']

function Logo() {
  return <a className="logo" href="#top" aria-label="PrimeTime Visuals home"><span>Prime<span className="logoDot">•</span>Time</span><small>Visuals</small></a>
}

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="header">
    <Logo />
    <button className="menuButton" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'nav open' : 'nav'} onClick={() => setOpen(false)}>
      <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
      <a className="navCta" href="mailto:hello@primetimevisuals.com">Start a project <ArrowUpRight size={16} /></a>
    </nav>
  </header>
}

function VideoModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    document.body.style.overflow = 'hidden'
    const close = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', close)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', close) }
  }, [project, onClose])
  if (!project) return null
  return <div className="modal" role="dialog" aria-modal="true" aria-label={`${project.title} video`} onMouseDown={e => e.target === e.currentTarget && onClose()}>
    <button className="modalClose" onClick={onClose} aria-label="Close video"><X /></button>
    <div className={`streamPlayer ${project.orientation === 'portrait' ? 'portrait' : ''}`}>
      <iframe src={`${project.streamUrl}?poster=${encodeURIComponent(project.image)}`} loading="lazy" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture" allowFullScreen title={project.title} />
    </div>
    <div className="modalMeta"><h2>{project.title}</h2><span>{project.category} · {project.duration}</span></div>
  </div>
}

function App() {
  const [filter, setFilter] = useState('Wedding')
  const [featured, setFeatured] = useState(projects[0])
  const [selected, setSelected] = useState(null)
  const filtered = projects.filter(p => p.category === filter)
  const chooseCategory = category => {
    setFilter(category)
    setFeatured(projects.find(project => project.category === category))
  }
  const stepFeatured = direction => {
    const currentIndex = filtered.findIndex(project => project.id === featured.id)
    const nextIndex = (currentIndex + direction + filtered.length) % filtered.length
    setFeatured(filtered[nextIndex])
  }
  return <>
    <div className="page" id="top">
      <Header />
      <main>
        <section className="hero">
          <p className="eyebrow">Filmmaker · Storyteller · Abuja</p>
          <h1>Your vision.<br /><em>Our lens.</em></h1>
          <div className="heroBottom">
            <p>Premium video production tailored to scale your vision.</p>
            <a href="#work" className="scrollLink"><ArrowDown size={18} /> Explore selected work</a>
          </div>
        </section>

        <section className="work" id="work">
          <div className="sectionHead"><p className="eyebrow">The portfolio</p><h2>Choose a story.<br />Step inside.</h2></div>
          <div className="filters categoryTabs" aria-label="Choose a film category">{categories.map(c => <button className={filter === c ? 'active' : ''} key={c} onClick={() => chooseCategory(c)}><span>{c}</span><sup>{String(projects.filter(p => p.category === c).length).padStart(2, '0')}</sup></button>)}</div>

          <div className="categoryFeature" key={featured.id}>
            <button className="categoryFeatureMedia" onClick={() => setSelected(featured)} aria-label={`Play ${featured.title}`}>
              <img src={featured.image} alt="" />
              <span className="featurePlay"><Play fill="currentColor" /> Watch film</span>
              <span className="featureDuration">{featured.duration}</span>
            </button>
            <div className="categoryFeatureCopy">
              <p className="featureIndex">Featured / {filter}</p>
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>
              <div className="featureFooter"><span>{featured.year} · {featured.duration}</span><div><button onClick={() => stepFeatured(-1)} aria-label="Previous film"><ArrowLeft /></button><button onClick={() => stepFeatured(1)} aria-label="Next film"><ArrowRight /></button></div></div>
            </div>
          </div>

          <div className="filmRail" aria-label={`${filter} films`}>{filtered.map((project, i) =>
            <button className={featured.id === project.id ? 'filmThumb active' : 'filmThumb'} key={project.id} onClick={() => setFeatured(project)}>
              <span className="filmThumbImage"><img src={project.image} alt="" loading="lazy" /><i>{String(i + 1).padStart(2, '0')}</i></span>
              <span className="filmThumbMeta"><strong>{project.title}</strong><small>{project.duration}</small></span>
            </button>
          )}</div>
        </section>

        <section className="about" id="about">
          <p className="eyebrow">Behind the lens</p>
          <div className="aboutGrid"><h2>Not just how it looked.<br /><em>How it felt.</em></h2><div><p>PrimeTime Visuals creates thoughtful films with a pulse—observing the honest details, finding the rhythm, and shaping each story with intention.</p><p className="muted">Available for weddings, documentaries, live events, brand stories and promotional productions in Abuja and beyond.</p></div></div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">Have a story in mind?</p><h2>Let’s make it<br /><em>worth replaying.</em></h2>
          <a href="mailto:hello@primetimevisuals.com">hello@primetimevisuals.com <ArrowUpRight /></a>
        </section>
      </main>
      <footer><Logo /><p>© {new Date().getFullYear()} PrimeTime Visuals</p><div><a href="https://www.instagram.com/primetime_visualss?stkn=MWdrNDNxYmt5YnF1Yg==" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.tiktok.com/@ameerajabdul?_r=1&_t=ZS-99j1yJVbX6q" target="_blank" rel="noreferrer">TikTok</a><a href="https://www.facebook.com/share/1HTUaUy64A/?mibextid=wwXIfr" target="_blank" rel="noreferrer">Facebook</a></div></footer>
    </div>
    <VideoModal project={selected} onClose={() => setSelected(null)} />
  </>
}

createRoot(document.getElementById('root')).render(<App />)
