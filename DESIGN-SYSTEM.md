# CF Installazioni — direzione visiva

Artigianalità, architettura, tecnica e design contemporaneo. Il sito deve essere solido, curato e di carattere. Il WOW nasce da fotografie reali, composizione, tipografia, spazi e contrasti; mai a scapito di chiarezza, velocità e affidabilità.

- Fotografie reali di lavori, persone, strumenti e materiali: sono la componente rustica. Niente texture finte, font vintage o decorazioni country.
- UI moderna: griglia precisa, linee pulite, spazi generosi, verde CF dosato, warm white, stone e antracite. Riutilizzare i token in `src/styles/global.css`.
- Navigazione convenzionale, contatti e preventivo facilmente accessibili. Link comprensibili senza hover, target touch comodi, focus visibile, contrasto e alt descrittivi.
- Niente cursori personalizzati, scroll bloccato, movimento continuo o dipendenze per effetti semplici. Preferire CSS e rispettare reduced motion.
- Hero con immagine prioritaria e dimensioni riservate; fotografie successive lazy loaded. Usare immagini ottimizzate e responsive, evitare layout shift.
- Procedere una sezione alla volta, partendo dalla Hero. Non aggiungere sezioni per ottenere impatto visivo.
- Prima di modificare leggere struttura e stili; cambiare solo il necessario senza duplicare CSS.
- Dopo gli interventi verificare TypeScript, build Vite, console, asset, link e CTA, responsive e overflow a mobile piccolo, mobile standard, tablet e desktop. Dichiarare eventuali verifiche incomplete e problemi preesistenti.

## Identità e componenti attuali
- Monogramma originale da `public/images/fotoF/logo.JPG`; varianti web trasparenti in `public/images/optimized`. Non sostituire con lettere di font e non ridisegnare.
- Titoli Barlow Condensed, corpo/UI Barlow. Font WOFF2 locali; massimo queste due famiglie.
- Hero immersiva: foto dell’installatore nella vetrata e gradiente verde direzionale; testi approvati da conservare.
- WhatsApp principale: dati centralizzati in `src/data/contact.ts`; email assente finché non fornita.
- Portfolio: otto fotografie iniziali, selezione ampliata di quattordici, cinque filtri, dialog nativo. Non pubblicare automaticamente l’intera cartella fotoF.
- Selezione e motivazioni in `.design-review/SELEZIONE-E-VERIFICHE.md`; originali da conservare.

## Revisione fotografica 02
Fotopettorina è la seconda fotografia narrativa in Chi siamo. Portfolio iniziale: porta geometrica, parete in pietra, mare incorniciato dal serramento, portone, fotoverde, vetrata verticale, gru, porta bagno. Conservare le proporzioni native in gallery e il portone 3:4 nei servizi. Fotoverde una sola volta. Dettagli e verifiche in `.design-review/ART-DIRECTION-02.md`.
