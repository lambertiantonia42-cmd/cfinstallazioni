import ArrowIcon from './ArrowIcon'
import { useEffect, useRef, useState } from 'react'
import { categories, projects, homepageCount, type Category, type Project } from '../data/projects'
import './Projects.css'
import { imageSizes } from '../data/imageSizes'

export default function Projects() {
  const [category, setCategory] = useState<Category>('Tutti')
  const [expanded, setExpanded] = useState(false)
  const [selected, setSelected] = useState<Project | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const filtered = projects.filter((project) => category === 'Tutti' || project.category === category)
  const visible = expanded || category !== 'Tutti' ? filtered : filtered.slice(0, homepageCount)
  useEffect(() => {
    if (selected) dialog.current?.showModal()
    else dialog.current?.close()
  }, [selected])
  return (
    <section className="projects section" id="realizzazioni" aria-labelledby="projects-title">
      <div className="container">
        <div className="projects__heading">
          <div><p className="eyebrow">Le realizzazioni</p><h2 id="projects-title">Il lavoro parla.<br /><span>Nei dettagli.</span></h2></div>
          <p>Vetro, legno, pietra e metallo. Una selezione delle nostre installazioni, viste da vicino.</p>
        </div>
        <div className="projects__filters" role="group" aria-label="Filtra le realizzazioni">
          {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => { setCategory(item); setExpanded(false) }}>{item}</button>)}
        </div>
        <p className="projects__count" role="status">{visible.length} di {filtered.length} fotografie{category !== 'Tutti' ? ` · ${category}` : ''}</p>
        <div className={`projects__grid${category !== 'Tutti' ? ' projects__grid--filtered' : ''}`} id="projects-grid">
          {visible.map((project) => (
            <figure key={project.image} className={`project${project.layout === 'wide' ? ' project--wide' : ''}`}>
              <button type="button" className="project__image-button" onClick={() => setSelected(project)} aria-label={`Ingrandisci: ${project.title}`}>
                <img src={project.originalSrc ?? `/images/optimized/${project.image}-1200.webp`} srcSet={project.originalSrc ? undefined : `/images/optimized/${project.image}-640.webp ${imageSizes[project.image].smallWidth}w, /images/optimized/${project.image}-1200.webp ${imageSizes[project.image].width}w`} sizes="(min-width: 1280px) 720px, (min-width: 768px) 60vw, calc(100vw - 40px)" width={imageSizes[project.image].width} height={imageSizes[project.image].height} loading="lazy" decoding="async" alt={project.alt} />
                <span className="project__zoom" aria-hidden="true">
                  Ingrandisci
                  <ArrowIcon />
                </span>
              </button>
              <figcaption><span>{project.category}</span><h3>{project.title}</h3></figcaption>
            </figure>
          ))}
        </div>
        {!expanded && category === 'Tutti' && filtered.length > homepageCount && <button type="button" className="projects__more" aria-controls="projects-grid" onClick={() => setExpanded(true)}>Vedi tutte le realizzazioni <span aria-hidden="true"><ArrowIcon /></span></button>}
      </div>
      <dialog ref={dialog} className="project-dialog" aria-label={selected?.title ?? 'Dettaglio realizzazione'} onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) setSelected(null) }}>
        {selected && <div className="project-dialog__content">
          <button type="button" className="project-dialog__close" onClick={() => setSelected(null)} autoFocus>Chiudi <span aria-hidden="true">×</span></button>
          <img src={selected.originalSrc ?? `/images/optimized/${selected.image}-1200.webp`} alt={selected.alt} decoding="async" width={imageSizes[selected.image].width} height={imageSizes[selected.image].height} />
          <p>{selected.title} <span>— {selected.category}</span></p>
        </div>}
      </dialog>
    </section>
  )
}
