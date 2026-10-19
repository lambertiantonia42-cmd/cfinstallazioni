import './Services.css'
import { imageSizes } from '../data/imageSizes'

const services = [
  {
    number: '01',
    title: 'Porte e portoni blindati',
    description:
      'Installazione di porte interne e portoni blindati, con posa precisa e cura delle finiture.',
    image: 'portariga',
    alt: 'Porta grigia con incisioni geometriche integrate nella parete.',
  },
  {
    number: '02',
    title: 'Infissi e serramenti',
    description:
      'Installazione di infissi di tutti i modelli e marche, persiane tradizionali e blindate, tapparelle e zanzariere.',
    image: 'fotomare',
    alt: 'Grande serramento con telaio scuro che incornicia il mare, con montanti e soglia visibili.',
  },
  {
    number: '03',
    title: 'Pavimenti e manutenzione',
    description:
      'Posa di pavimenti in laminato, SPC e LVT. Riparazione, regolazione e manutenzione di tutti gli elementi installati.',
    image: 'fotogru',
    alt: 'Sollevamento di un grande serramento con una gru.',
  },
]

export default function Services() {
  return (
    <section className="services section" id="servizi">
      <div className="container">

        <div className="services__heading">
          <div>
            <p className="eyebrow">I nostri servizi</p>

            <h2>
              Il nostro lavoro
              <span> è installare.</span>
            </h2>
          </div>

          <p>
            Competenza e precisione per installazioni curate in ogni dettaglio.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>

              <div className="service-card__image">
                <img src={`/images/optimized/${service.image}-1200.webp`} srcSet={`/images/optimized/${service.image}-640.webp ${imageSizes[service.image].smallWidth}w, /images/optimized/${service.image}-1200.webp ${imageSizes[service.image].width}w`} sizes="(min-width: 900px) 30vw, (min-width: 650px) 45vw, calc(100vw - 40px)" alt={service.alt} width={imageSizes[service.image].width} height={imageSizes[service.image].height} loading="lazy" decoding="async" />

                <div className="service-card__number">
                  {service.number}
                </div>
              </div>

              <div className="service-card__content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
