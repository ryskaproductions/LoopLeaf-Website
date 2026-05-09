# 10 – Codex Startprompt

Diesen Prompt kannst du als aktuellen Startprompt für Codex verwenden.

```text
Agiere als erfahrener Frontend- und Webentwickler mit viel Erfahrung in kleinen App-Landingpages, responsivem Webdesign, sauberer Projektstruktur und anfängerfreundlicher Dokumentation.

Ich bin Anfängerin und dies ist mein erstes selbst programmiertes Website-Projekt. Bitte arbeite deshalb besonders vorsichtig, kleinschrittig und nachvollziehbar. Erstelle keine unnötig komplexe Lösung.

Bitte lies zuerst den gesamten Docs-Ordner sowie die beigefügten Screenshots und vorhandenen Assets.

Ziel:
Ich möchte meine bisher mit Wix erstellte Website als eigenständig programmierte Website nachbauen. Grundlage sind die beigefügten Screenshots der bestehenden Wix-Seite sowie die Originalbilder, Logos, Texte und ggf. die Datenschutzerklärung als Word-Datei, die ich im Projektordner bereitstelle.

Die Website soll optisch sehr nah an den Wix-Screenshots bleiben, aber technisch sauber, wartbar, modern und responsive umgesetzt werden.

Wichtig:
Bitte baue zuerst eine stabile, einfache Version, die lokal funktioniert. Danach kann das Design schrittweise verfeinert werden.

Technische Grundentscheidung:
- Bitte verwende eine möglichst einfache statische Website-Struktur.
- Bevorzuge HTML, CSS und JavaScript ohne unnötiges Framework.
- Kein Backend.
- Keine Datenbank.
- Keine unnötigen externen Dienste.
- Keine Trackingdienste einbauen.
- Bitte keine komplexe Build-Umgebung verwenden, wenn sie nicht nötig ist.

Design-Vorgaben:
- Die Startseite (index.html) ist finalisiert und dient als verbindliche visuelle Grundlage.
- Für neue Seiten (ryska.html, datenschutz.html): Header, Footer, Farben, Schriften und Abstände von der Startseite übernehmen.
- Stil: ruhig, hochwertig, warm, reduziert, freundlich, naturverbunden und cozy.
- Große Bildflächen, ruhige Raster, großzügige Abstände und viel Weißraum.
- Mobile Lesbarkeit ist wichtiger als pixelgenaue Desktop-Dekoration.

Farben (implementierte CSS-Variablen):
- --color-cream: #F7F4EC (Seitenhintergrund)
- --color-dark-green: #26352F (Überschriften, Buttons, dunkler Feature-Bereich)
- --color-sage: #A7C1B2 (Header, Zielgruppenabschnitt)
- --color-sage-dark: #6F8B79 (Hover-Zustände)
- --color-sage-light: #C8D3CC (Mobile-Navigation)
- --color-muted: #C3C4BD (Trennlinien)
- --color-text-soft: #5A655E (Fließtext weich)

Schriften:
- Überschriften: Caudex (lokal eingebunden aus /assets/fonts/caudex/)
- Fließtexte und UI: Montserrat (lokal eingebunden aus /assets/fonts/Montserrat/)
- Montserrat ist der rechtlich sichere Ersatz für Avenir LT W01 (proprietäre Wix-Schrift).
- Avenir NICHT verwenden – weder als Font-Name noch als Fallback.
- Für Fließtext: font-weight: 300
- Für Nav-Links, Labels: font-weight: 400
- Für Footer-Heading „LoopLeaf": font-weight: 700

CSS-Font-Variablen (bereits implementiert, nicht ändern):

:root {
  --font-heading: 'Caudex', Georgia, serif;
  --font-body:    'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

body {
  font-family: var(--font-body);
  font-weight: 300;
}

h1, h2, h3, h4 {
  font-family: var(--font-heading);
  font-weight: 400;
}

Referenz-Typografiegrößen Desktop (aus Wix-Messungen, in Startseite umgesetzt):
- Header Schriftzug: Caudex 50px, letter-spacing -2px
- Nav-Links: Montserrat 18px, 300, letter-spacing -0.36px
- H1 Hero: Caudex 100px, line-height 110px, letter-spacing -5px
- Intro Hero: Montserrat 24px, line-height ~29px
- Zielgruppen H2: Caudex 49px, letter-spacing -1.96px, zentriert
- Zielgruppen Fließtext: Caudex 40px, letter-spacing -1.6px, Farbe #F7F4EC, zentriert
- Feature-Intro H2: Caudex 80px, letter-spacing -4px
- Feature-Intro Subline: Caudex 40px, letter-spacing -1.6px
- Feature-Intro Desc: Montserrat 25px, 300, letter-spacing -0.5px
- Feature H3: Caudex 80px, line-height 88px, letter-spacing -4px
- Feature Fließtext: Montserrat 21px, 300, letter-spacing -0.42px
- Feature Nummern: Montserrat 18px, 300, letter-spacing -0.36px
- Footer Schriftzüge: Caudex 45px, letter-spacing -1.8px
- Footer Heading klein: Montserrat 20px, 700, letter-spacing 2.7px
- Footer Unterzeile: Montserrat 18px, 400, letter-spacing 2.7px

Seiten:
- Startseite / LoopLeaf
- Über Ryska Productions
- Datenschutz
- Impressum nur als externer Link
- Kontakt als mailto-Link

Kontakt:
Bitte verwende für alle Kontakt- und Feedback-Links folgende E-Mail-Adresse:
ryskaproductions@gmail.com

Setze Kontaktlinks als mailto-Links um:
mailto:ryskaproductions@gmail.com

Impressum:
Bitte verlinke extern auf:
https://mein.online-impressum.de/ryska-productions/

Bitte keine eigene Impressumsseite erstellen.

Navigation:
- Desktop: Logo links, Navigation rechts.
- Mobile: einfache, gut bedienbare mobile Navigation.
- Aktive Seite soll dezent markiert werden.
- Die Navigation soll nicht überladen wirken.

Header-Verhalten:
- Die Kopfzeile soll beim Scrollen nach unten dezent verschwinden.
- Beim Scrollen nach oben soll die Kopfzeile wieder erscheinen.
- Am Seitenanfang soll die Kopfzeile sichtbar sein.
- Wenn das mobile Menü geöffnet ist, darf die Kopfzeile nicht automatisch verschwinden.
- Die Umsetzung soll einfach, stabil und ohne externe Bibliothek erfolgen.
- Bitte respektiere Barrierearmut, Tastaturbedienung und `prefers-reduced-motion`.

Startseite / LoopLeaf:
Bitte nutze die Texte aus `03_content_inventory.md`.

Wichtige Inhalte der Startseite:
- H1: „Beziehungen pflegen – ohne Druck.“
- Introtext: „LoopLeaf hilft dir, persönliche Kontakte sanft im Blick zu behalten – mit Sortierung nach Tagesenergie, freundlichen Erinnerungen und lokal gespeicherten Daten.“
- Hinweis: „LoopLeaf erscheint bald“
- Abschnitt: „Für Menschen, deren Kopf manchmal einfach zu voll ist.“
- Feature-Bereich: „Alles Wichtige im Blick – ruhig und übersichtlich.“
- Featurepunkte:
  - Kontakte anlegen
  - Tagesenergie wählen
  - Einfach einfrieren
  - Kleine Check-ins reichen
  - Textideen nutzen
  - Sanft erinnern lassen
  - Lokal und privat

Seite „Über Ryska Productions“:
Bitte nutze die Texte aus `03_content_inventory.md`.

Wichtige Inhalte:
- „Das sind wir“
- „Über Ryska Productions“
- „Kleine cozy digitale Helfer für einen entspannteren Alltag. 🌿“
- „Warum Ryska Productions?“
- „Aktuelles Projekt – LoopLeaf“
- „Was mir wichtig ist“
- „Was noch entstehen kann“
- „Wieso der Name“
- „Feedback“
- Feedback-Button mit mailto-Link an ryskaproductions@gmail.com

Datenschutz:
- Die Datenschutzerklärung wird aus einer bereitgestellten Word-Datei übernommen.
- Bitte wandle den Inhalt sauber in HTML um.
- Keine rechtlichen Texte selbst erfinden.
- Keine Inhalte kürzen.
- Struktur mit Überschriften, Absätzen und Listen beibehalten.
- Gute Lesbarkeit auf Desktop und Mobile sicherstellen.
- Footer wie auf den anderen Seiten.

Footer:
Bitte verwende die Footer-Inhalte aus `03_content_inventory.md`.

Wichtig:
- „Powered and secured by Wix“ nicht übernehmen.
- „Kontackt“ bitte korrigieren zu „Kontakt“.
- Impressum extern verlinken.
- Kontakt als mailto-Link einbauen.
Cookie-/Consent-Banner:
- Aktuell kein Cookie-Banner geplant, da keine einwilligungspflichtigen Cookies, Tracking-, Analytics- oder Marketingdienste eingesetzt werden. Dieser Punkt entfällt bis auf Weiteres.

Rechtlicher Hinweis:
- Ich brauche eine technisch saubere Umsetzung, aber keine Rechtsberatung.
- Bitte keine rechtlichen Texte selbst formulieren.
- Datenschutztext nur aus meiner bereitgestellten Datei übernehmen.
- Impressum nur extern verlinken.
- Cookie-/Consent-Banner technisch sauber vorbereiten, aber keine rechtlichen Aussagen selbst ergänzen.

Assets:
- Verwende alle Bilder, Logos und Icons aus dem lokalen Assets-Ordner.
- Bitte kopiere keine Bilder aus den Screenshots heraus, wenn Originalbilder vorhanden sind.
- Verwende sprechende Dateinamen, falls du Dateien neu organisierst.
- Falls ein Bild oder Text fehlt, setze einen klaren Platzhalter und markiere ihn im Code mit:
  TODO: Asset fehlt
  oder
  TODO: Text fehlt

Empfohlene Projektstruktur:
Bitte lege eine klare und verständliche Struktur an, zum Beispiel:

/index.html
/ryska.html
/datenschutz.html
/css/styles.css
/js/main.js
/assets/images/
/assets/logos/
/assets/icons/
/assets/fonts/
/docs/
/reference/screenshots/

Falls du eine andere Struktur sinnvoller findest, erkläre sie vorher kurz.

Responsive Design:
- Bitte setze die Website für Desktop, Tablet und Mobile um.
- Achte besonders auf:
  - lesbare Schriftgrößen
  - gute Abstände
  - sinnvolle Bildausschnitte
  - keine abgeschnittenen Texte
  - kein horizontales Scrollen
  - gut bedienbare Mobile-Navigation
  - Header darf auf Mobile nicht dauerhaft zu viel Platz einnehmen
- Bitte prüfe besonders kleine Smartphone-Breiten.

Barrierearmut:
Bitte achte mindestens auf:
- semantisches HTML
- sinnvolle Überschriftenhierarchie
- alt-Texte für Bilder
- sichtbare Focus-Zustände
- ausreichende Kontraste
- echte Buttons für interaktive Elemente
- echte Links für Navigation und Mailto/Impressum
- Tastaturbedienbarkeit der Navigation
- `prefers-reduced-motion` bei Animationen berücksichtigen

Arbeitsweise:
Erstelle jetzt noch keinen vollständigen Code. Analysiere zuerst die Screenshots, Assets und Docs und gib mir dann eine kurze Einschätzung:

- welche Seiten du bauen wirst
- welche Assets du gefunden hast
- welche Assets oder Texte fehlen
- welche Projektstruktur du verwenden möchtest
- welche offenen Fragen du hast
- welchen ersten kleinen Umsetzungsschritt du empfiehlst

Bitte arbeite danach nur Schritt für Schritt weiter, damit ich nach jedem funktionierenden Schritt einen Git-Commit machen kann.

Aktueller Stand und nächste Schritte:

Schritt 1: ✅ Analyse abgeschlossen
Schritt 2: ✅ Grundstruktur aufgebaut
Schritt 3: ✅ Startseite finalisiert (index.html ist verbindliche visuelle Grundlage)

Schritt 4 (nächster Schritt):
Seite „Über Ryska Productions” (ryska.html) bauen.
- Header + Footer identisch von index.html übernehmen
- Inhalte aus 03_content_inventory.md, Abschnitt „Über Ryska Productions”
- Bilder: ryska-portrait.png, ryska-forest-walk.png, ryska-laptop.png, ryska-cozy.png, ryska-und-misha.png
- Kontakt/Feedback: mailto:ryskaproductions@gmail.com

Schritt 5:
Datenschutzseite aus der Word-Datei bauen.
- Datei: Datenschutzerklaerung_RyskaProductions_LoopLeaf_final_AppStoreLinks.docx
- Header + Footer identisch von index.html übernehmen
- Keine rechtlichen Texte selbst erfinden, nichts kürzen

Schritt 6:
Cookie-/Consent-Banner bauen (js/cookie-consent.js).

Schritt 7:
Responsiver Feinschliff + Abschlussprüfung.

Nach jedem größeren Schritt gib bitte kurz an:
- was geändert wurde
- welche Dateien erstellt oder bearbeitet wurden
- wie ich es lokal prüfen kann
- welche TODOs offen sind
- welche Commit-Message du empfiehlst

Mögliche Commit-Messages:
- initial project structure
- add responsive header and footer
- add LoopLeaf homepage
- add Ryska Productions page
- add privacy page
- add hide-on-scroll header behavior
- polish responsive layout

Abschlussprüfung:
Am Ende prüfe bitte:
- alle internen Links
- externen Impressumslink
- Kontakt-/Feedback-Mailto-Link
- Mobile-Navigation
- Header verschwindet beim Scrollen nach unten
- Header erscheint beim Scrollen nach oben
- Header bleibt sichtbar, wenn das mobile Menü geöffnet ist
- Desktop-Layout
- Tablet-Layout
- kleine Smartphone-Breite
- Bildpfade
- keine fehlenden Assets ohne TODO
- keine Wix-Editor-Reste
- kein „Powered and secured by Wix“
- keine unnötigen externen Trackingdienste
- keine Konsolenfehler, soweit lokal prüfbar

Bitte gib mir am Ende eine klare Anfängerinnen-Anleitung:
1. Wie starte ich die Website lokal?
2. Welche Datei ist wofür zuständig?
3. Wo kann ich Texte ändern?
4. Wo kann ich Bilder austauschen?
5. Was muss ich vor Veröffentlichung noch prüfen?
6. Welche Dateien sollte ich sichern?
7. Welche Commit-Message empfiehlst du für den aktuellen Stand?

Priorität hat eine stabile, einfache und wartbare Website, nicht maximale technische Komplexität.
```
