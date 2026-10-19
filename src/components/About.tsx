import ArrowIcon from './ArrowIcon'
import './About.css'

export default function About() {
  return (
    <section className="about section" id="chi-siamo">
      <div className="container about__container">

        <div className="about__content">
          <p className="eyebrow">Chi siamo</p>

          <h2>
            Specializzati
            <br />
            <span>nella posa.</span>
          </h2>

          <p className="about__lead">
            CF Installazioni è l'attività di Franco Cristofanilli, specializzato
            nell'installazione, posa e riparazione, con particolare attenzione
            alla precisione e alla cura delle finiture.
          </p>

          <p className="about__text">
            Esperto Posatore PosaClima · UNI 11673-3
          </p>

          <a href="/?pagina=chi-siamo" className="about__link">
            Conosci CF Installazioni <span aria-hidden="true"><ArrowIcon /></span>
          </a>
        </div>

        <div className="about__visual">
          <img className="about__image" src="/images/optimized/fotopettorina-1200.webp" srcSet="/images/optimized/fotopettorina-640.webp 640w, /images/optimized/fotopettorina-1200.webp 1086w" sizes="(min-width: 900px) 45vw, 100vw" width="1086" height="1448" loading="lazy" decoding="async" alt="Installatore CF con casco e pettorina durante la movimentazione di un serramento con la gru." />

          <div className="about__badge">
            <img src="/images/optimized/logo-light.png" width="307" height="400" alt="CF" loading="lazy" />
            <span>Installazioni</span>
          </div>
        </div>


      </div>
    </section>
  )
}
