import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Menu, Play, X } from 'lucide-react'
import './styles.css'

const projects = [
  { id: 1, title: "Hauwee's Bridal Shower", category: 'Wedding', year: '2026', duration: '00:58', description: 'A celebration of quiet glances, loud laughter, and the promise of a lifetime.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/5304e5c86629531bf7c1942cc1f535b1/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/5304e5c86629531bf7c1942cc1f535b1/iframe', orientation: 'portrait' },
  { id: 2, title: 'SAHA26 Nupe Day Highlight', category: 'Wedding', year: '2026', duration: '00:56', description: 'An intimate union told through the people and details that made the day theirs.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/21ed6b517683cef49d8e52cd9e75b491/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/21ed6b517683cef49d8e52cd9e75b491/iframe', orientation: 'portrait' },
  { id: 3, title: 'Golden Hour Vows', category: 'Wedding', year: '2025', duration: '00:51', description: 'A warm, sunlit portrait of a day that seemed to stand still.', image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=1800&q=85' },
  { id: 13, title: 'The First Dance', category: 'Wedding', year: '2026', duration: '00:53', description: 'One room, two people, and a moment that belongs only to them.', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=85' },
  { id: 14, title: 'Forever Starts Here', category: 'Wedding', year: '2026', duration: '00:57', description: 'A joyful beginning captured with warmth, movement, and intimacy.', image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1800&q=85' },
  { id: 4, title: 'Impactful Representation', category: 'Documentary', year: '2026', duration: '00:52', description: 'A brief study of people, place, and the moments that carry a story forward.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/a13053ad2d06695c549242a1cc237c9d/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/a13053ad2d06695c549242a1cc237c9d/iframe', orientation: 'landscape' },
  { id: 5, title: 'Documentary 33', category: 'Documentary', year: '2026', duration: '00:57', description: 'The people behind the work, observed in their own rhythm and environment.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/cce97d1080d52e6d65135d76bf136a0c/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/cce97d1080d52e6d65135d76bf136a0c/iframe', orientation: 'portrait' },
  { id: 6, title: 'Everyday Lagos', category: 'Documentary', year: '2025', duration: '00:54', description: 'A moving portrait of a city told in gestures, faces, and passing light.', image: 'https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=1800&q=85' },
  { id: 15, title: 'Voices of the City', category: 'Documentary', year: '2026', duration: '00:50', description: 'Street-level stories from the people shaping the city every day.', image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1800&q=85' },
  { id: 16, title: 'Built by Hand', category: 'Documentary', year: '2026', duration: '00:55', description: 'A portrait of patience, process, and pride in making things well.', image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1800&q=85' },
  { id: 7, title: 'OPL Book Launch', category: 'Event', year: '2026', duration: '00:45', description: 'A night of movement, music, and the electric moments between them.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/87bfced1518484663c7fe979389614e5/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/87bfced1518484663c7fe979389614e5/iframe', orientation: 'landscape' },
  { id: 8, title: 'Grace Unspeakable Launch', category: 'Event', year: '2026', duration: '00:48', description: 'The energy of a live audience distilled into sixty unforgettable seconds.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/52d65e2b3096595e9a50928999cc866c/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/52d65e2b3096595e9a50928999cc866c/iframe', orientation: 'landscape' },
  { id: 9, title: 'Nasa Space App Challenge', category: 'Event', year: '2026', duration: '00:42', description: 'A vivid record of ideas, collaboration, and people building toward the future.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/c887be418d5a2dfb22adb79f2eda9556/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/c887be418d5a2dfb22adb79f2eda9556/iframe', orientation: 'landscape' },
  { id: 17, title: 'She Commerce', category: 'Event', year: '2026', duration: '00:46', description: 'A gathering built around enterprise, connection, and women moving business forward.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/20331c793fe045b0fe52d1ebdcbb2f43/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/20331c793fe045b0fe52d1ebdcbb2f43/iframe', orientation: 'landscape' },
  { id: 18, title: 'The Gathering', category: 'Event', year: '2025', duration: '00:44', description: 'People and purpose brought together in one vibrant room.', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=85' },
  { id: 10, title: 'Yarynn Tales', category: 'Brand Story', year: '2026', duration: '00:59', description: 'A focused brand film built to communicate purpose, personality, and value.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/431ebaec143beb17b54bf24c1e814858/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/431ebaec143beb17b54bf24c1e814858/iframe', orientation: 'portrait' },
  { id: 11, title: 'Adorn By Nay', category: 'Brand Story', year: '2026', duration: '00:55', description: 'A concise visual story designed to make the brand memorable and human.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/4c2095f3babb053c6c79c29dfe5e945f/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/4c2095f3babb053c6c79c29dfe5e945f/iframe', orientation: 'portrait' },
  { id: 12, title: 'Itinochi Revolution', category: 'Brand Story', year: '2026', duration: '00:49', description: 'Product, people, and purpose brought together in one clear narrative.', image: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/6255890ba65883f543da8bcfac5f9c3b/thumbnails/thumbnail.jpg?height=900', streamUrl: 'https://customer-r2x8yw6vqa83jpkp.cloudflarestream.com/6255890ba65883f543da8bcfac5f9c3b/iframe', orientation: 'portrait' },
  { id: 19, title: 'Brand Story 04', category: 'Brand Story', year: '2026', duration: '00:52', description: 'A premium visual introduction shaped around the character of the business.', image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1800&q=85' },
  { id: 20, title: 'Brand Story 05', category: 'Brand Story', year: '2026', duration: '00:58', description: 'A confident campaign film created to move the brand’s vision forward.', image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1800&q=85' },
  { id: 21, title: 'Setting the Frame', category: 'Behind the Scenes', year: '2026', duration: '00:47', description: 'A look at the decisions and details that shape every finished frame.', image: '/jumbotron2.jpeg' },
  { id: 22, title: 'On Location', category: 'Behind the Scenes', year: '2026', duration: '00:54', description: 'From arrival to action: how a production comes together on location.', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=85' },
  { id: 23, title: 'Before the Take', category: 'Behind the Scenes', year: '2026', duration: '00:43', description: 'The preparation, collaboration, and calm before the camera rolls.', image: '/jumbotron2.jpeg' },
  { id: 24, title: 'Light and Motion', category: 'Behind the Scenes', year: '2026', duration: '00:51', description: 'Building the visual atmosphere one light, movement, and adjustment at a time.', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=85' },
  { id: 25, title: 'That’s a Wrap', category: 'Behind the Scenes', year: '2026', duration: '00:49', description: 'The crew, craft, and unseen moments behind the final production.', image: '/jumbotron2.jpeg' },
]

const categories = ['Wedding', 'Documentary', 'Event', 'Brand Story', 'Behind the Scenes']

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
    {project.streamUrl ? <div className={`streamPlayer ${project.orientation === 'portrait' ? 'portrait' : ''}`}>
      <iframe src={`${project.streamUrl}?poster=${encodeURIComponent(project.image)}`} loading="lazy" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture" allowFullScreen title={project.title} />
    </div> : <div className="playerPlaceholder" style={{ backgroundImage: `url(${project.image})` }}>
      <div className="placeholderCopy"><Play fill="currentColor" /><span>Cloudflare video coming soon</span></div>
    </div>}
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
          <div className="aboutGrid"><h2>Not just how it looked.<br /><em>How it felt.</em></h2><div><p>PrimeTime Visuals creates thoughtful films with a pulse—observing the honest details, finding the rhythm, and shaping each story with intention.</p><p className="muted">Available for weddings, documentaries, live events and brand stories in Abuja and beyond.</p></div></div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">Have a story in mind?</p><h2>Let’s make it<br /><em>worth replaying.</em></h2>
          <a href="mailto:hello@primetimevisuals.com">hello@primetimevisuals.com <ArrowUpRight /></a>
        </section>
      </main>
      <footer><Logo /><p>© {new Date().getFullYear()} PrimeTime Visuals</p><div><a href="#">Instagram</a><a href="#">Vimeo</a></div></footer>
    </div>
    <VideoModal project={selected} onClose={() => setSelected(null)} />
  </>
}

createRoot(document.getElementById('root')).render(<App />)
