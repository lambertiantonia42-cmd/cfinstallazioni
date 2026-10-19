import ArrowIcon from './ArrowIcon'
import { contact } from '../data/contact'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="contatti">
      <div className="container footer__inner">
        <div><p className="eyebrow">Parliamo del tuo lavoro</p><h2>Da dove cominciamo?</h2><p>Scrivici su WhatsApp: puoi raccontarci cosa serve e inviare le foto dell’intervento.</p></div>
        <div className="footer__contacts">
          <a href={contact.whatsappUrl} className="footer__whatsapp">Richiedi un preventivo su WhatsApp <ArrowIcon /></a>
          <a href={`tel:${contact.internationalPhone}`}>Oppure chiama: {contact.phone}</a>
          {contact.email && <a href={`mailto:${contact.email}`}>{contact.email}</a>}
        </div>
        <a className="footer__brand" href="#inizio"><img src="/images/optimized/logo-light.png" width="307" height="400" alt="" />CF INSTALLAZIONI</a>
      </div>
    </footer>
  )
}
