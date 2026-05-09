# 02 – Design System

Stand: Startseite finalisiert. Gilt als verbindliche visuelle Grundlage für ryska.html und datenschutz.html.

---

## Grundstimmung

Die Website soll eine ruhige, warme und hochwertige App-Landingpage sein.

Schlagworte:

- cozy
- reduziert
- freundlich
- sanft
- naturverbunden
- hell
- vertrauenswürdig
- modern
- nicht technisch-kühl
- nicht laut
- nicht werblich-aggressiv

---

## Farbpalette

### Implementierte CSS-Variablen

```css
:root {
  /* Grundfarben */
  --color-cream:       #F7F4EC;   /* Seitenhintergrund, helle Sektionen */
  --color-dark-green:  #26352F;   /* Feature-Sektion, Überschriften, Buttons */

  /* Weitere Grundfarben */
  --color-muted:       #C3C4BD;   /* Trennlinien, dezente Ränder */
  --color-mid-green:   #8F958E;   /* sekundärer Text, gedämpfte Elemente */
  --color-text-soft:   #5A655E;   /* Fließtext weich */

  /* Akzentfarben */
  --color-sage:        #A7C1B2;   /* Kopfzeile, Zielgruppenabschnitt, Badges */
  --color-sage-dark:   #6F8B79;   /* Hover-Zustände, sekundäre Akzente */
  --color-white:       #FFFFFF;
  --color-sage-light:  #C8D3CC;   /* Mobile-Navigation Hintergrund */

  /* Aliase */
  --color-text:        var(--color-dark-green);
  --color-border-soft: var(--color-muted);
  --color-card:        var(--color-white);
}
```

### Verwendung der Farben nach Bereich

| Bereich | Hintergrund | Textfarbe |
|---|---|---|
| Body / helle Sektionen | `#F7F4EC` (cream) | `#26352F` (dark-green) |
| Header | `#A7C1B2` (sage) | `#26352F` (dark-green) |
| Zielgruppenabschnitt | `#A7C1B2` (sage) | h2: `#26352F`, p: `#F7F4EC` |
| Feature-Sektion | `#26352F` (dark-green) | `#F7F4EC` (cream) |
| Footer | `#F7F4EC` (cream) | `#26352F` (dark-green) |
| Mobile-Nav | `#C8D3CC` (sage-light) | `#26352F` (dark-green) |

---

## Schriften

### Überschriften: Caudex

Verwendung:
- Header-Schriftzug (LoopLeaf, Ryska Productions)
- H1, H2, H3 auf der Startseite
- Footer-Schriftzüge (groß)
- Zwischenüberschriften im Feature-Bereich

### Fließtext und UI: Montserrat (Avenir-Ersatz)

Montserrat ist der rechtlich sichere Ersatz für Avenir LT W01 (proprietäre Wix-Schrift).

Verwendung:
- Fließtexte
- Navigation
- Footer-Kleintext
- Feature-Nummern
- Buttons

Gewichte:
- `font-weight: 300` für normalen Fließtext
- `font-weight: 400` für Nav-Links, Labels
- `font-weight: 700` für das kleine Footer-Heading „LoopLeaf"

### CSS-Variablen

```css
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
```

### Font-Einbindung

Fonts sind lokal eingebunden aus `/assets/fonts/`:
- Montserrat: Variable Font (wght 100–900), lokal
- Caudex: 4 statische TTF-Dateien (Regular, Bold, Italic, BoldItalic), lokal

Keine externen Font-Dienste aktiv. Bei zukünftiger Aktivierung Google Fonts in die Datenschutzerklärung aufnehmen.

---

## Typografie-Referenzwerte (Desktop)

Diese Werte stammen aus DevTools-Messungen der Wix-Referenz und sind in der Startseite umgesetzt.

### Header

| Element | Font | Größe | Weight | Letter-Spacing | Farbe |
|---|---|---|---|---|---|
| LoopLeaf-Schriftzug | Caudex | 50px | 400 | −2px | #26352F |
| Nav-Links | Montserrat | 18px | 300 | −0.36px | #26352F |

Header-Höhe:
- Mobile: 64px
- Tablet (640px+): 80px
- Desktop (1024px+): 117px

### Hero

| Element | Font | Größe | Line-Height | Letter-Spacing | Farbe |
|---|---|---|---|---|---|
| H1 | Caudex | 100px | 110px | −5px | #26352F |
| Intro-Text | Montserrat | 24px | ~29px | −0.02em | #26352F |

### Zielgruppenabschnitt

| Element | Font | Größe | Line-Height | Letter-Spacing | Farbe |
|---|---|---|---|---|---|
| H2 | Caudex | 49px | ~54px | −1.96px | #26352F |
| Fließtext | Caudex | 40px | 44px | −1.6px | #F7F4EC |

Ausrichtung: zentriert.

### Feature-Einleitung (dunkler Bereich)

| Element | Font | Größe | Letter-Spacing | Farbe |
|---|---|---|---|---|
| H2 Hauptüberschrift | Caudex | 80px | −4px | #F7F4EC |
| Zwischenüberschrift | Caudex | 40px | −1.6px | #F7F4EC |
| Beschreibungstext | Montserrat 300 | 25px | −0.5px | #F7F4EC (80%) |

### Feature-Reihen

| Element | Font | Größe | Line-Height | Letter-Spacing | Farbe |
|---|---|---|---|---|---|
| H3 Überschrift | Caudex | 80px | 88px | −4px | #F7F4EC |
| Fließtext | Montserrat 300 | 21px | 25.2px | −0.42px | #F7F4EC (85%) |
| Nummer | Montserrat 300 | 18px | ~22px | −0.36px | #F7F4EC |

### Footer

| Element | Font | Größe | Line-Height | Letter-Spacing | Farbe |
|---|---|---|---|---|---|
| Großer Schriftzug | Caudex | 45px | ~50px | −1.8px | #26352F |
| Kleines Heading „LoopLeaf" | Montserrat 700 | 20px | 27px | 2.7px | #26352F |
| Unterzeile | Montserrat 400 | 18px | 27px | 2.7px | #26352F |
| Links / Hinweistext | Montserrat 400 | 14px | — | — | #26352F / #5A655E |

---

## Abstände

```css
:root {
  --space-xs:  0.5rem;   /*  8px */
  --space-sm:  1rem;     /* 16px */
  --space-md:  1.5rem;   /* 24px */
  --space-lg:  2.5rem;   /* 40px */
  --space-xl:  4rem;     /* 64px */
  --space-2xl: 7rem;     /* 112px */
}
```

---

## Rundungen

```css
:root {
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-pill: 999px;
}
```

---

## Layoutprinzipien

- viel Weißraum
- großzügige Bildflächen
- klare Raster (CSS Grid für Feature-Reihen, Flexbox für Header/Footer)
- weiche Abstände
- keine harten Kanten
- dezente Rundungen
- ruhige Übergänge
- Desktop großzügig, Mobile klar untereinander

---

## Feature-Reihen-Layout (Desktop)

Drei Spalten pro Feature-Reihe:

```
[Zahl-Spalte: 56px] [Content-Spalte: 1fr] [Bild-Spalte: 240px]
```

- Zahl: Montserrat, links neben der Überschrift, `padding-top` für optische Ausrichtung
- Content: H3 + Fließtext, volle Flexibilität
- Bild: feste Breite, `align-self: stretch`, `object-fit: contain` (keine seitliche Beschneidung)

---

## Scroll-Reveal-Animation (Feature-Bilder)

Nur Feature-Bilder (`.feature-image`) haben eine Scroll-Einblendanimation.

Technik: IntersectionObserver + CSS transitions (keine externe Bibliothek).

Progressive Enhancement:
- Ohne JavaScript: Bilder vollständig sichtbar
- Mit JavaScript: `html.js-enabled` gesetzt → Startzustand `opacity: 0.18`, `filter: brightness(0.55)`, `translateY(12px)`
- Beim Einblenden: `is-visible`-Klasse → volle Sichtbarkeit, 900ms ease

Accessibility: `prefers-reduced-motion: reduce` → kein Transform, kein Filter, nur dezentes Opacity-Fade.

---

## Bildstil

- große, hochwertige Bildflächen
- warmes Licht, natürliche Farben, cozy Atmosphäre
- Hero-Bild: volle Breite, keine seitliche Beschneidung (`width: 100%; height: auto`)
- Sofa-Bild: full-width, `object-fit: cover`, feste Höhe
- Feature-Bilder: einheitliche Breite (~220–240px Desktop), `object-fit: contain`

---

## Buttons

```css
.btn-primary {
  background: var(--color-dark-green);
  color: var(--color-cream);
  border-radius: var(--radius-pill);
}
```

---

## Mobile Design

Priorität auf Mobile:
- Lesbarkeit
- saubere Abstände
- kein horizontales Scrollen
- Bilder sinnvoll dargestellt
- Navigation gut bedienbar
- Header nicht dauerhaft zu groß
