# CF Installazioni — intervento identità, Hero e realizzazioni

## Marchio
Analizzati `fotoF/logo.JPG` e `fotoF/LOGO2.0.png`. Il secondo è una tavola di varianti, non un singolo asset. Le versioni trasparenti in `public/images/optimized/logo-light.png` e `logo-green.png` derivano dai pixel scuri di `logo.JPG`: rimozione del fondo e del bordo chiaro esterno, ritaglio e applicazione di un colore uniforme, senza ridisegno del monogramma. Originali conservati. Per la massima precisione futura è preferibile un SVG/PDF vettoriale originale del marchio; l’asset attuale resta una derivazione raster del JPG.

## Tipografia
Barlow Condensed 600/700 per H1/H2, Barlow 400/600/700/800 per corpo e UI. Titoli compatti e decisi, corpo aperto e leggibile. File WOFF2 latini locali (includono caratteri italiani), font-display swap, due pesi principali precaricati; licenza conservata in public/fonts. Nessuna chiamata Google Fonts durante la navigazione.

## Otto foto iniziali, nell’ordine
1. `fotoF/vetrataesterna.JPG`: vetrata, pietra e legno; fotografia di apertura del portfolio.
2. `fotoF/fotolegno.JPG`: porta accanto al rivestimento in legno; accostamento di materiali.
3. `fotoF/vetratalunga.JPG`: struttura verticale su più livelli; installazione particolare.
4. `fotoF/portariga.JPG`: incisioni e geometrie della porta.
5. `fotoF/IMG_4767.JPG`: grande serramento e affaccio sul mare.
6. `fotoF/portoneesterno.JPG`: ingresso leggibile e inquadratura frontale.
7. `public/images/fotogru.png`: sollevamento del serramento, più leggibile delle foto di gru a distanza in fotoF.
8. `fotoF/portabagno.JPG`: contrasto tra porta scura e rivestimento grigio.

`fotoF/fotovetrate.png` è riservata alla Hero (la stessa fotografia era già presente in public/images); non ripetuta nella gallery.

## Selezione ampliata
Al click su “Vedi tutte le realizzazioni” si passa a 14 fotografie, aggiungendo IMG_4744 (porta vetrata), IMG_4764 (scorrevole a riquadri), IMG_4779 (portone con mattoni), IMG_4784 (serramento esterno), IMG_4772 (porte in legno), IMG_4768 (persona al lavoro). Queste foto arricchiscono la gamma, ma sono secondarie rispetto agli otto soggetti principali. I filtri accedono direttamente a tutta la selezione della categoria.

## Escluse dalla selezione pubblicata, conservate
- IMG_4756 2 e IMG_4775 2: copie delle corrispondenti immagini senza “2”.
- IMG_4746: stesso soggetto di vetratalunga; preferito il file rinominato.
- IMG_4755, IMG_4756: dettagli simili alla porta di portariga; evitata ripetizione iniziale.
- IMG_4758, IMG_4759: altri rivestimenti in legno; fotolegno ha priorità e racconta già il materiale.
- IMG_4765: molto simile a IMG_4764.
- IMG_4783: stessa vetrata nella pietra; preferita vetrataesterna.
- IMG_4775: gru distante con molti elementi di contorno; fotogru mostra meglio il sollevamento.
- IMG_4742, IMG_4749, IMG_4750, IMG_4751, IMG_4773, IMG_4777, IMG_4778, IMG_4785: altre finestre/aperture; minore varietà aggiunta rispetto a IMG_4767 e IMG_4784, oppure soggetto meno leggibile e maggiore contesto domestico.
- IMG_4743, IMG_4747, IMG_4748, IMG_4752, IMG_4753, IMG_4754, IMG_4761, IMG_4762, IMG_4766, IMG_4769, IMG_4770, IMG_4771, IMG_4774, IMG_4780, IMG_4781, IMG_4786, IMG_4787, IMG_4788: altre porte o corridoi, esclusi per contenere la selezione e privilegiare i file rinominati; conservati per futuri approfondimenti.
- IMG_4760: cantiere con elementi che coprono il serramento; meno leggibile dei soggetti principali.
- IMG_4763: scala/ringhiera; meno rappresentativa dei servizi descritti sul sito.

Nessun originale rinominato, spostato o cancellato. Le versioni ottimizzate sono separate, con due risoluzioni WebP e orientamento fotografico applicato.

## Interfaccia
Griglia CSS con rapporto 3/2 tra colonne e sfalsamenti controllati su tablet/desktop; singola colonna mobile. Cinque filtri: Tutti, Infissi e serramenti, Porte, Vetrate, Installazioni speciali. Immagini lazy e spazio riservato. Ingrandimento con dialog nativo, chiusura da pulsante, sfondo o Esc e ripristino del focus. Nessuna libreria aggiunta.

Hero precedente salvata in `.design-review/hero-before/`. Testi conservati; sfondo fotografico con gradiente verde direzionale, verticale su mobile e orizzontale su desktop.

## Contatti e problemi preesistenti
Corretti: menu mobile senza comportamento, link #preventivo/#realizzazioni/#contatti senza destinazione, marchio sostituito da lettere di font, lingua HTML inglese e favicon generica. Tutte le CTA preventivo usano WhatsApp 393394714202 con il messaggio concordato. Footer compatto con WhatsApp e telefono. Email nullable in src/data/contact.ts e resa condizionale nel footer, senza recapiti inventati.

I segnaposto in Chi siamo e Servizi sono stati sostituiti da immagini pertinenti, conservandone contenuti e struttura. Aggiornati spaziatura tipografica e contrasto dei testi di servizio.

## Verifiche eseguite
- `npm run build`: TypeScript e Vite superati.
- `npm run lint`: superato.
- Console browser: nessun warning/error rilevato durante navigazione, filtri e dialog.
- Verifiche viewport: 360, 390, 430, 768, 1440 px; nessun overflow orizzontale rilevato, Hero e gallery ispezionate visivamente.
- Tutti gli href interni risolvono un ID esistente. URL WhatsApp e messaggio verificati, senza inviare messaggi.
- Menu mobile apre, chiude e si richiude seguendo un link.
- Filtri verificati: Porte 6, Infissi 2, Vetrate 3, Speciali 3; Tutti 8 iniziali, 14 dopo espansione.
- Dialog verificato su desktop e mobile, chiusura da pulsante ed Esc, focus restituito al trigger.
- Asset statici verificati; tutte le immagini derivate decodificabili. Immagini con dimensioni/spazio riservato; Hero eager/high e gallery lazy. Nessun punteggio Lighthouse o misura CLS strumentale dichiarati.
