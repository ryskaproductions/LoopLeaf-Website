# 09 – Launch Checklist

## Domain & Redirects

- [x] `vercel.json` angelegt mit permanentem Redirect: `loopleaf.de/*` → `https://www.loopleaf.de/*` (308 permanent)
- [ ] Redirect nach Deployment verifizieren: `curl -sI https://loopleaf.de/` zeigt `HTTP/2 308` und `location: https://www.loopleaf.de/`
- [ ] Pfade bleiben erhalten (z. B. `/datenschutz.html` → `https://www.loopleaf.de/datenschutz.html`)

## Technische Prüfung

- [ ] Website startet lokal
- [ ] Keine Konsolenfehler
- [ ] Alle CSS-Dateien werden geladen
- [ ] Alle JS-Dateien werden geladen
- [ ] Alle Bildpfade funktionieren
- [ ] Keine fehlenden Assets ohne TODO
- [ ] Keine Wix-Editor-Reste im Code
- [ ] Kein „Powered and secured by Wix“
- [ ] Keine unnötigen externen Trackingdienste

## Seitenprüfung

- [ ] Startseite funktioniert
- [ ] Ryska-Seite funktioniert
- [ ] Datenschutzseite funktioniert
- [ ] Impressumslink funktioniert extern
- [ ] Kontaktlink öffnet Mailprogramm
- [ ] Feedbacklink öffnet Mailprogramm

## Navigation und Header

- [ ] Desktop-Navigation funktioniert
- [ ] Mobile-Navigation funktioniert
- [ ] Aktive Seite wird dezent markiert
- [ ] Kein horizontales Scrollen
- [ ] Header verschwindet beim Scrollen nach unten
- [ ] Header erscheint beim Scrollen nach oben
- [ ] Header ist am Seitenanfang sichtbar
- [ ] Header bleibt sichtbar, wenn das mobile Menü geöffnet ist
- [ ] Header-Animation ist ruhig und nicht hektisch
- [ ] `prefers-reduced-motion` wird berücksichtigt

## Startseite – Visuelle Prüfung

- [ ] Hero-Bild nicht seitlich abgeschnitten
- [ ] Zielgruppenabschnitt zentriert (Überschrift + Fließtext)
- [ ] Fließtext im Zielgruppenabschnitt creme/weiß (#F7F4EC)
- [ ] Feature-Nummern links neben der Überschrift (nicht darüber)
- [ ] Feature-Bilder rechts: gleiche Breite, keine seitliche Beschneidung
- [ ] Feature-Bilder: Scroll-Reveal-Animation funktioniert
- [ ] Ohne JavaScript: Feature-Bilder sofort sichtbar
- [ ] Bei prefers-reduced-motion: keine Bewegungsanimation
- [ ] Footer: obere Branding-Zeile mit LoopLeaf links + Ryska Productions rechts
- [ ] Footer-Logos ca. 82×66px, nicht verzerrt

## Responsive Prüfung

- [ ] Desktop geprüft
- [ ] Tablet geprüft
- [ ] Smartphone hochkant geprüft
- [ ] kleine Smartphone-Breite geprüft
- [ ] Bilder werden sinnvoll zugeschnitten
- [ ] Texte sind gut lesbar

## Cookie-/Consent-Banner

Aktuell kein Cookie-Banner erforderlich, da keine einwilligungspflichtigen Cookies, Tracking-, Analytics- oder Marketingdienste eingesetzt werden. Dieser Abschnitt entfällt bis auf Weiteres.

## Social Preview / Open Graph

- [x] Finale live-URL `https://www.loopleaf.de` in allen drei HTML-Dateien als `og:url` + Bildpfad eingetragen
- [ ] OG-Bild `OG-Bild-LoopLeaf-1200x630-komp.jpg` ist unter `assets/images/` vorhanden
- [ ] Linkvorschau in WhatsApp, iMessage oder Discord testen (z. B. über https://opengraph.xyz)
- [ ] Startseite zeigt korrektes Vorschaubild und Titel
- [ ] Favicon und Apple-Touch-Icon werden korrekt angezeigt

## Rechtliches

- [ ] Datenschutztext vollständig aus finaler Datei übernommen
- [ ] Datenschutztext nicht automatisch umformuliert
- [ ] Impressum verlinkt korrekt extern
- [ ] Kontaktadresse stimmt
- [ ] Cookie-Banner und Datenschutz vor Veröffentlichung noch einmal geprüft

## Inhalte

- [ ] Texte final geprüft
- [ ] Rechtschreibung geprüft
- [ ] „Kontakt“ korrekt geschrieben
- [ ] Bildrechte geklärt
- [ ] Alt-Texte ergänzt
- [ ] App Store Button nur verwenden, wenn sinnvoll
- [ ] Falls App noch nicht veröffentlicht: keine irreführenden Store-Links

## Sicherung

- [ ] Projektordner sichern
- [ ] Git-Commit erstellen
- [ ] Assets sichern
- [ ] Docs-Ordner sichern
- [ ] Datenschutz-Originaldatei sichern
