# 04 – Page Structure

## Empfohlene Projektstruktur

```text
/
├── index.html
├── warum.html
├── neuigkeiten.html
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

Desktop- und Mobile-Navigation (finaler Stand):

```text
Startseite
Warum LoopLeaf?
Neuigkeiten
Über Ryska Productions
```

Mobile-Nav enthält zusätzlich: Datenschutz · Impressum · Kontakt

Technische Zielpfade:

```text
Startseite        → index.html
Warum LoopLeaf?   → warum.html
Neuigkeiten       → neuigkeiten.html
Über Ryska Productions → ryska.html
Datenschutz       → datenschutz.html
Impressum         → https://mein.online-impressum.de/ryska-productions/
Kontakt           → mailto:ryskaproductions@gmail.com
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
- Unterer Block: `.footer-meta` – zweispaltig auf Desktop (ab 768 px), gestapelt auf Mobile
  - `.footer-meta-left`: `.footer-small-heading`, `.footer-subline`, `.footer-nav`, `.footer-note`, `.footer-copyright`
  - `.footer-meta-right`: `.footer-download-heading` („LoopLeaf laden") + `.footer-store-badges` mit **beiden** Store-Badges (App Store + Google Play); vertikal ausgerichtet mit `Ein Projekt von Ryska Productions.`
- `.footer-nav` enthält: Datenschutz · Impressum · Kontakt · [Instagram-Icon-Link]
- Instagram-Icon: `assets/icons/Instagram_Glyph_Black.png` (lokal, 20×20 px, schwarzes Glyph), kein Plugin, kein Script
- Store-Badges im Footer (beide lokal, kein externes Script, kein Tracking, keine Datenübertragung beim Laden):
  - App Store Badge: `assets/icons/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg` — Link unverändert (`https://apps.apple.com/de/app/loopleaf/id6767885278`)
  - Google Play Badge **ergänzt**: `assets/icons/GetItOnGooglePlay_Badge_Web_color_German.png`, Klasse `.store-badge--play-footer`; Link `https://play.google.com/store/apps/details?id=com.ryska.loopleaf&hl=de&gl=DE`
  - höhengleich skaliert (App Store 155 px, Google Play 174 px breit, Ratio 3,366:1, Seitenverhältnis erhalten); Breiten parent-gescopt (`.footer-store-badges .store-badge--…`) → immun gegen die Hero-`.store-badge`-Regel
  - `.footer-store-badges` responsiv: Mobile gestapelt/linksbündig, Tablet (≥ 768 px) gestapelt/rechtsbündig, Desktop (≥ 1024 px) nebeneinander/rechtsbündig (`flex-wrap` bei Bedarf)
- Footer auf allen fünf Seiten identisch (index, warum, neuigkeiten, ryska, datenschutz)

Hero-Download-Gruppe (index.html):
- Reihenfolge: H1-Headline → Intro-Text → Status-Pill → Store-Badges
- Status-Pill: „LoopLeaf ist da – für iOS und Android" (beide Plattformen verfügbar)
- Zwei Store-Badges als gemeinsame Download-Gruppe (`.hero-store-badges`, Flex): Mobile gestapelt/zentriert, ab 640 px nebeneinander (`flex-wrap`), Desktop nebeneinander
  - App Store Badge (lokales SVG): 190 px (Mobile/Tablet) bzw. 230 px (≥ 1024 px) breit
  - Google Play Badge: `assets/icons/GetItOnGooglePlay_Badge_Web_color_German.png` (lokal); Klasse `.store-badge--play`, höhengleich zum App-Store-Badge skaliert (214 px bzw. 259 px breit, Ratio 3,366:1), Seitenverhältnis erhalten
  - Google-Play-Link: `https://play.google.com/store/apps/details?id=com.ryska.loopleaf&hl=de&gl=DE`
  - beide Badges lokal eingebunden, kein externes Script, keine Datenübertragung beim Laden
- Download-Gruppe steht nach dem Intro-Text, vor dem App-Mockup-Bild

## Warum-Seite: warum.html

Status: finalisiert.

OG/Twitter: `og:url` = `https://www.loopleaf.de/warum.html`, gemeinsames OG-Bild.

Hero-Bild: `assets/images/young-woman-with-dog-cozy.PNG`

Abschnitte (Farb-Abfolge):

1. `.warum-hero` — Cream: Logo + Label „Die Idee hinter LoopLeaf" + H1 + 4 Statement-Zeilen (Montserrat Light) + Bild
2. `.warum-personal` — Sage: H2-Tagline „Kontakte bedeuten nicht weniger…" + Lead + Fließtext (persönliche Geschichte)
3. `.warum-recognition` — Dark Green: Überschrift mit Linien links/rechts + 10 Blockquote-Statements (alternierend links/rechts ab 768px)
4. `.warum-neuro` — Cream: H2 „Nicht jeder Kopf fühlt gleich." + 5 Absätze
5. `.warum-individual` — Sage: H2 „Nicht jeder pflegt Beziehungen…" + Text + 2×2-Moments-Grid + Textideen-Note
6. `.warum-transition-image` — Übergangs-Bild: `Emotional-scene- connection-with-distance.png`, vollbreit, `object-fit: cover`, `clamp(300px, 50vw, 640px)` Höhe
7. `.warum-closing` — Dark Green: zentrierter Abschlusstext, eingerahmt von feinen Cream-Linien oben und unten

CSS: Eigener Abschnitt `/* WARUM-SEITE */` am Ende von `css/styles.css`.
Responsive: Desktop- und Mobile-Navigation beide aktualisiert (`aria-current="page"` auf warum.html gesetzt).

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

## Neuigkeiten-Seite: neuigkeiten.html

Status: finalisiert (Erstveröffentlichung mit zwei sichtbaren Einträgen).

Zweck: kleine, ruhige Update-Chronik rund um LoopLeaf. **Kein echter Blog** — keine Kommentare, keine Autor:innenboxen, keine Lesedauer, keine Einzelbeitragsseiten, keine „Weiterlesen"-Links. Neueste Einträge stehen oben.

Aufbau:

1. Header (identisch mit anderen Seiten)
2. `.news-hero` — Cream: zentriertes LoopLeaf-Logo (`.news-hero-logo`), Label „Aktuelles rund um LoopLeaf" (`.news-hero-label`), H1 „Neuigkeiten", Einleitungstext (`.news-hero-intro`). Übernimmt visuell die Werte der Warum-Hero (eigene Klassen, ohne CSS-Duplikate).
3. `.news-section` — Cream: enthält `.news-list` (`<ol>`) mit einzelnen `.news-card`-Einträgen.
4. Footer (identisch mit anderen Seiten)

Karten-Struktur (`.news-card`):

```text
.news-card
  .news-card__media   → .news-card__image (Bild)
  .news-card__body
    .news-card__date  → <time datetime="…">
    .news-card__badges (ul → li.news-card__badge)
    .news-card__title (h2)
    .news-card__text  (p)
```

- Hintergrund: `--color-sage`
- Pills („Badges"): Cream-Hintergrund, Dark-Green-Text, Pill-Rundung
- Desktop (≥ 768 px): Bild links (38 %), Text rechts (62 %)
- Mobile: Bild oben (8:5-Verhältnis), Text darunter
- Sanfte Rundungen (`--radius-md`), keine harten Schatten

Sichtbare Einträge (neuester oben):

1. **10. Juni 2026** – „LoopLeaf ist jetzt auch für Android da" (Bild: `assets/images/news_android_release.PNG`; zentrierter Crop, kein Modifier – zwei mittig komponierte Smartphones)
2. **7. Juni 2026** – „LoopLeaf bekommt einen Dark Mode für iOS" (Bild: `assets/images/news_darkmode_ios.PNG`)
3. **28. Mai 2026** – „LoopLeaf ist im App Store gestartet" (Bild: `assets/images/news_ios_release3.PNG`; Modifier `news-card__image--focus-right` für rechtsbetonten Crop in der Tablet-Ansicht)

Der Android-Release-Eintrag wurde am 10. Juni 2026 sichtbar veröffentlicht (zuvor als vorbereiteter HTML-Kommentar hinterlegt). Es gibt aktuell keinen versteckten/vorbereiteten Eintrag mehr.

SEO:

- `<title>` = „Neuigkeiten | LoopLeaf"
- Meta-Beschreibung und OG/Twitter-Tags analog zu den anderen Seiten gesetzt
- `og:url` = `https://www.loopleaf.de/neuigkeiten.html`
- Eintrag in `sitemap.xml` ergänzt
