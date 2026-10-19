import ArrowIcon from './ArrowIcon'
import './Hero.css'
import { contact } from '../data/contact'

export default function Hero() {
  return (
    <section className="hero" id="inizio" aria-labelledby="hero-title">
      <div className="hero__content container">
        <div className="hero__copy">
          <p className="hero__eyebrow">Installazione • Posa • Precisione</p>
          <h1 id="hero-title">
            Porte, infissi<br />
            e serramenti.<br />
            <span>Posati a<br />regola d’arte.</span>
          </h1>
          <p className="hero__description">
            Installazione, posa e riparazione con precisione
            e cura delle finiture.
          </p>
          <div className="hero__actions">
            <a href={contact.whatsappUrl} className="hero__button">
              Richiedi un preventivo
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
            <a href="#servizi" className="hero__secondary">
              Scopri cosa installiamo <span aria-hidden="true"><ArrowIcon /></span>
            </a>
          </div>
          <p className="hero__signature">Precisione nella posa. Cura nelle finiture.</p>
        </div>
        <div className="hero__visual">
          <img
            className="hero__image"
            src="/images/fotoF/fotovetrate2.jpg"
            srcSet="/images/fotoF/fotovetrate2.jpg"
            sizes="100vw"
            width="1448"
            height="1086"
            alt="Installatore CF al lavoro su una grande vetrata scorrevole durante la posa."
            fetchPriority="high"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
