import ArrowIcon from './ArrowIcon'
import { useEffect, useRef, useState } from 'react'
import { contact } from '../data/contact'
import './About.css'
import './Hero.css'
import './Projects.css'
import './AboutPage.css'

export default function AboutPage() {
  const [certificateOpen, setCertificateOpen] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Chi siamo | CF Installazioni'
    return () => { document.title = previousTitle }
  }, [])

  // Stesso dialog nativo della galleria: focus gestito dal browser e chiusura con ESC.
  useEffect(() => {
    if (certificateOpen) dialog.current?.showModal()
    else dialog.current?.close()
  }, [certificateOpen])

  return (
    <div className="about-page">
      <section className="about-page__intro" id="inizio" aria-labelledby="about-title">
        <div className="container">
          <p className="eyebrow">Chi siamo</p>
          <h1 id="about-title">La precisione nasce dall'esperienza.<br /><span>E continua con la formazione.</span></h1>
          <div className="about-page__profile">
            <img src="/images/fotoF/fotoverde.png" width="1086" height="1448" alt="Franco Cristofanilli al lavoro durante la regolazione di un serramento." fetchPriority="high" />
            <div>
              <h2>Franco Cristofanilli</h2>
              <p className="about-page__role">Titolare di CF Installazioni</p>
              <p className="about__lead">Franco segue personalmente installazioni, posa, riparazioni e interventi di CF Installazioni, con particolare attenzione alla precisione, alla funzionalità e alla cura delle finiture.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="training-title">
        <div className="container about-page__training">
          <div>
            <h2 id="training-title">Formarsi significa<br /><span>continuare a migliorare.</span></h2>
            <p className="about__text">Il lavoro sul campo si affianca a un percorso continuo di aggiornamento professionale. Corsi di formazione, incontri tecnici ed eventi di settore permettono di confrontarsi con altri professionisti, approfondire nuove soluzioni e mantenere aggiornate tecniche e competenze.</p>
          </div>
          <img src="/images/fotoF/fotoposaclima.png" width="1254" height="1254" alt="Momento di formazione professionale pratica PosaClima." loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="section about-page__qualification" aria-labelledby="qualification-title">
        <div className="container about-page__qualification-grid">
          <div>
            <p className="eyebrow">Formazione professionale</p>
            <h2 id="qualification-title">Esperto Posatore<br /><span>PosaClima</span></h2>
          </div>
          <div>
            <p className="about__text">Franco ha conseguito la qualifica di Esperto Posatore PosaClima e Tecnico per la Riqualificazione del Foro Finestra attraverso un corso professionale di posa del serramento conforme ai requisiti della norma UNI 11673-3.</p>
            <p className="about__lead">Attestato di Formazione Professionale</p>
            <button type="button" className="about__link about-page__certificate" aria-haspopup="dialog" onClick={() => setCertificateOpen(true)}>
              Visualizza attestato <span aria-hidden="true"><ArrowIcon /></span>
            </button>
          </div>
        </div>
      </section>

      <section className="section about-page__cta" aria-labelledby="about-contact-title">
        <div className="container">
          <h2 id="about-contact-title">Parliamo del tuo progetto</h2>
          <a href={contact.whatsappUrl} className="hero__button">Richiedi un preventivo <span aria-hidden="true"><ArrowIcon /></span></a>
        </div>
      </section>

      <dialog ref={dialog} className="project-dialog about-page__dialog" aria-label="Attestato di Formazione Professionale di Franco Cristofanilli" onClose={() => setCertificateOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) setCertificateOpen(false) }}>
        {certificateOpen && <div className="project-dialog__content">
          <button type="button" className="project-dialog__close" onClick={() => setCertificateOpen(false)} autoFocus>Chiudi <span aria-hidden="true">×</span></button>
          <img src="/images/fotoF/certificazione.PNG" width="1536" height="1024" alt="Attestato di Franco Cristofanilli: Esperto Posatore PosaClima e Tecnico per la Riqualificazione del Foro Finestra, corso conforme alla UNI 11673-3." />
        </div>}
      </dialog>
    </div>
  )
}
