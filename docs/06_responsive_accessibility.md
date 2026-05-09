# 06 – Responsive Design & Accessibility

## Responsive Ziele

Die Website muss funktionieren auf:

- Desktop
- Tablet
- Mobile
- sehr kleinen Smartphone-Breiten

## Wichtige Breakpoints

Empfehlung:

```css
/* Mobile first */
@media (min-width: 640px) { }
@media (min-width: 768px) { }
@media (min-width: 1024px) { }
@media (min-width: 1280px) { }
```

## Mobile Anforderungen

- kein horizontales Scrollen
- Navigation gut bedienbar
- ausreichende Button-Größen
- Text nicht zu klein
- Bilder nicht ungünstig abgeschnitten
- Kacheln untereinander statt zu eng nebeneinander
- Kopfzeile darf nicht dauerhaft zu viel Platz einnehmen

## Header auf Mobile und beim Scrollen

Das Header-Verhalten ist besonders auf kleinen Bildschirmen wichtig:

- Die Kopfzeile soll beim Scrollen nach unten verschwinden.
- Beim Scrollen nach oben soll sie wieder sichtbar werden.
- Am Seitenanfang soll die Kopfzeile sichtbar sein.
- Das Mobile-Menü muss weiterhin zuverlässig funktionieren.
- Wenn das Mobile-Menü geöffnet ist, soll der Header nicht automatisch verschwinden.
- Beim Öffnen des Menüs soll die Navigation gut lesbar und per Touch bedienbar sein.
- Interaktive Elemente müssen weiterhin per Tastatur erreichbar sein.
- Die Animation soll `prefers-reduced-motion` respektieren.

Empfohlene Umsetzung:

```css
@media (prefers-reduced-motion: reduce) {
  .site-header {
    transition: none;
  }
}
```

## Accessibility-Basis

Bitte beachten:

- semantisches HTML
- sinnvolle Überschriftenhierarchie
- `alt`-Texte für Bilder
- sichtbare Focus-Zustände
- ausreichende Kontraste
- Buttons als echte `<button>`-Elemente
- Links als echte `<a>`-Elemente
- Mobile-Menü per Tastatur nutzbar

## Überschriftenstruktur

Beispiel Startseite:

```text
h1: Beziehungen pflegen – ohne Druck.
h2: Für Menschen, deren Kopf manchmal einfach zu voll ist.
h2: Alles Wichtige im Blick – ruhig und übersichtlich.
h3: Kontakte anlegen
h3: Tagesenergie wählen
...
```

## Animationen und Scroll-Verhalten

### Feature-Bild-Scroll-Reveal

Nur die rechten Feature-Bilder (`.feature-image`) haben eine Scroll-Einblendanimation.

Technik:
- CSS transitions + IntersectionObserver
- keine externe Bibliothek
- Progressive Enhancement: ohne JavaScript bleiben Bilder sichtbar (`html.js-enabled` Gate)
- `rootMargin: '0px 0px -10% 0px'`, `threshold: 0.2`
- Animation läuft einmal; danach wird das Element aus der Beobachtung entfernt

Accessibility:
```css
@media (prefers-reduced-motion: reduce) {
  .js-enabled .feature-image {
    transform: none;
    filter: none;
    transition: opacity 500ms ease;
  }
}
```

### Header Scroll-Verhalten

```css
@media (prefers-reduced-motion: reduce) {
  .site-header {
    transition: none;
  }
}
```

## Performance

- Bilder komprimieren
- moderne Bildformate prüfen, aber einfache JPG/PNG/WebP-Struktur beibehalten
- kein unnötiges JavaScript
- keine Trackingdienste
- CSS möglichst übersichtlich halten
