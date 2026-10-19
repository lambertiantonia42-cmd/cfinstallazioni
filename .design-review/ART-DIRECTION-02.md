# Secondo passaggio fotografico

Originali verificati e conservati: `fotoF/fotopettorina.png`, `fotoF/fotomare.png`, `fotoF/fotoparetepietra.PNG`, `fotoverde.png`. Versioni web separate in `public/images/optimized`, 640 px e dimensione maggiore senza ingrandire l’originale.

- Hero: resta la foto `fotovetrate.png` attraverso le versioni WebP esistenti. Gradiente laterale con più punti di transizione; overlay superiore desktop ridotto da 65% a 25%. Su mobile dissolvenza distribuita su circa 330 px, foto alta 490 px e posizione 57% bottom; desktop 58% bottom. Testi e priorità di caricamento invariati.
- Seconda fotografia: fotopettorina in Chi siamo, prima del testo su mobile, grande colonna accanto al testo su desktop. Rapporto 3:4, soggetto intero.
- Servizi: portoneesterno conservato, contenitore 3:4 al posto delle altezze fisse 320/360 px. Fotomare sostituisce IMG_4767 e conserva telaio e soglia.
- Prime otto realizzazioni: portariga, fotoparetepietra, fotomare, portoneesterno, fotoverde, vetratalunga, fotogru, portabagno. Fotoverde compare una sola volta nella homepage, come quinta realizzazione a colonna larga su desktop.
- Fotoparetepietra occupa il secondo posto prima dedicato a fotolegno; l’originale del legno è conservato. Vetrataesterna resta nella selezione ampliata.
- Griglia: proporzioni fotografiche native, larghezze editoriali 2/5 e 3/5, piccoli sfalsamenti. Nessuna altezza imposta alle foto del portfolio. Filtri con griglia regolare a due colonne; mobile singola colonna. Focus gallery reso verde per contrasto sul fondo chiaro.

Verificati: 392×844, 768×1024, 1440×1000; Hero, pettorina, portone, mare, gallery e fotoverde. Nessun overflow orizzontale rilevato. Filtri, espansione 8→14, apertura e chiusura dialog con Esc funzionanti. Nessun errore/warning console osservato; riferimenti asset e decodifica immagini verificati. Tutti i link interni hanno destinazione; WhatsApp conserva numero e messaggio. Hero fetchPriority high, immagini portfolio lazy con dimensioni riservate. Build TypeScript/Vite e lint superati.
