# 04 – Page Structure

## Empfohlene Projektstruktur

```text
/
├── index.html
├── ryska.html
├── datenschutz.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   ├── logos/
│   ├── icons/
│   └── fonts/
├── docs/
└── reference/
    └── screenshots/
```

## Gemeinsame Seitenelemente

Jede Seite soll enthalten:

- Header
- Navigation
- Hauptinhalt
- Footer

## Header

Desktop (1024px+):

- LoopLeaf-Schriftzug links (Caudex, ~50px) + Logo (~100px)
- Navigation rechts (Montserrat, 18px, 2 Links)
- Höhe: 117px
- Hintergrund: #A7C1B2 (sage)
- Text und Logo: #26352F (dunkel)

Tablet (640px–1023px):

- wie Desktop, aber Höhe 80px, Logo + Schriftzug skaliert
- Navigation ausgeblendet, Hamburger-Button sichtbar

Mobile (< 640px):

- Logo + Schriftzug links, Hamburger-Button rechts
- ausklappbare Navigation
- Höhe: 64px

CSS-Variable: `--header-height` (64px / 80px / 117px je Breakpoint)

## Header-Verhalten beim Scrollen

Die Kopfzeile soll sich ruhig und modern verhalten:

- Beim Scrollen nach unten soll die Kopfzeile aus dem sichtbaren Bereich verschwinden.
- Beim Scrollen nach oben soll die Kopfzeile wieder erscheinen.
- Am Seitenanfang soll die Kopfzeile sichtbar sein.
- Wenn das mobile Menü geöffnet ist, darf die Kopfzeile nicht automatisch verschwinden.
- Die Animation soll dezent und nicht hektisch wirken.
- Die Kopfzeile soll nicht dauerhaft zu viel Platz auf Mobile einnehmen.
- Die Umsetzung soll mit einfachem JavaScript und CSS erfolgen, ohne externe Bibliothek.
- Für Barrierearmut soll das Verhalten nicht verhindern, dass Navigation und Links per Tastatur erreichbar bleiben.
- `prefers-reduced-motion` soll berücksichtigt werden.

Technischer Hinweis:

```text
Empfohlen: Header sticky/fixed mit CSS-Transition.
JavaScript erkennt Scrollrichtung und setzt z. B. die Klasse:
.site-header--hidden
```

## Navigation

Empfohlene Links:

```text
LoopLeaf
Ryska Productions
Datenschutz
Impressum
Kontakt
```

Technische Zielpfade:

```text
LoopLeaf → index.html
Ryska Productions → ryska.html
Datenschutz → datenschutz.html
Impressum → https://mein.online-impressum.de/ryska-productions/
Kontakt → mailto:ryskaproductions@gmail.com
```

## Startseite: index.html

Status: finalisiert – dient als visuelle Grundlage für alle weiteren Seiten.

Abschnitte:

1. Header (sage-grün, dunkles Logo + Text)
2. Hero (cream, H1 Caudex 100px, zentriert, Bild volle Breite)
3. Zielgruppenabschnitt (sage-grün Hintergrund, Caudex, zentriert)
4. Sofa-Bild (full-width, object-fit cover)
5. Feature-Bereich (dunkelgrüner Hintergrund, 7 Feature-Reihen mit Scroll-Reveal)
6. Footer (cream, obere Branding-Zeile + unterer Textblock)

Feature-Reihen-Layout Desktop: `grid-template-columns: 56px 1fr 240px` (Zahl | Content | Bild)

Footer-Struktur:
- Obere Zeile: `.footer-brand-row` mit zwei `.footer-brand-item`-Gruppen
- Unterer Block: `.footer-meta` mit `.footer-small-heading`, `.footer-subline`, `.footer-nav`, `.footer-note`, `.footer-copyright`

## Ryska-Seite: ryska.html

Status: Inhalte ausstehend (Schritt 4).

Abschnitte:

1. Header (identisch mit index.html)
2. Intro
3. Bild-/Textkachel-Raster
4. Abschnitte über Ryska Productions
5. Feedback-Button
6. Footer (identisch mit index.html)

Wichtig: Header, Footer, Farben, Schriften, Abstände und responsive Grundlogik von der Startseite wiederverwenden.

## Datenschutzseite: datenschutz.html

Status: finalisiert (Schritt 5).

Abschnitte:

1. Header (identisch mit index.html)
2. Datenschutztext (`.privacy-page` → `.privacy-content`), Reihenfolge:
   - H1: Datenschutzerklärung / Stand
   - Abschnitt 1: Datenschutz auf einen Blick
   - Abschnitt 2: Hosting (Vercel Inc.)
   - Abschnitt 3: Allgemeine Hinweise und Pflichtinformationen
   - Abschnitt 4: Datenerfassung auf dieser Website
   - **Quellenangabe** (`.privacy-source`): „Quelle der Abschnitte 1 bis 4: e-recht24.de" – steht direkt nach Abschnitt 4
   - **Eigener Hinweis** (h3): „Keine Cookies, keine Analyse-Tools und kein Tracking" – steht nach der Quellenangabe, ist damit klar als eigener Zusatz erkennbar
   - Abschnitt 5: Externer Impressumslink und zweiter Kontaktweg
   - Abschnitt 6: Datenschutz in der iOS-App „LoopLeaf"
3. Footer (identisch mit index.html)

Wichtig: Quellenangabe bezieht sich ausschließlich auf Abschnitte 1–4. Der eigene Hinweis steht bewusst nach der Quellenangabe, damit er nicht fälschlicherweise als Teil der eRecht24-Quelle gelesen wird.

## Externes Impressum

Keine eigene Impressumsseite erstellen.

Der Link soll extern bleiben:

```text
https://mein.online-impressum.de/ryska-productions/
```
