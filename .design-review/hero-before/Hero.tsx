import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__content container">
        <div className="hero__copy">
          <p className="hero__eyebrow">Installazione · Posa · Precisione</p>
          <h1 id="hero-title">
            Porte, infissi<br />
            e serramenti.<br />
            <span>Posati a<br />regola d’arte.</span>
          </h1>
          <p className="hero__description">
            Installazioni professionali curate in ogni dettaglio,
            dalla posa alle finiture.
          </p>
          <div className="hero__actions">
            <a href="#preventivo" className="hero__button">
              Richiedi un preventivo <span aria-hidden="true">↗</span>
            </a>
            <a href="#servizi" className="hero__secondary">
              Scopri cosa installiamo <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="hero__signature">Precisione nella posa. Cura nelle finiture.</p>
        </div>
        <figure className="hero__visual">
          <img
            className="hero__image"
            src="/images/hero-vetrate.webp"
            srcSet="/images/hero-vetrate-720.webp 720w, /images/hero-vetrate.webp 1448w"
            sizes="(min-width: 1280px) 630px, (min-width: 900px) 51vw, (min-width: 768px) calc(100vw - 80px), calc(100vw - 40px)"
            width="1448"
            height="1086"
            alt="Installatore CF al lavoro su una grande vetrata scorrevole durante la posa."
            fetchPriority="high"
            loading="eager"
          />
          <figcaption className="hero__caption">
            <span>Il nostro lavoro, da vicino.</span>
            <span>Posa di una vetrata scorrevole</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
