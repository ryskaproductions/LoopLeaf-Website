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
- [ ] Warum-LoopLeaf-Seite funktioniert
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
- [x] OG-Bild `OG-Bild-LoopLeaf-1200x630-komp.jpg` ist unter `assets/images/` vorhanden (1200×630 px, JPG, ~150 KB)
- [x] OG-Bild unter `https://www.loopleaf.de/assets/images/OG-Bild-LoopLeaf-1200x630-komp.jpg` live erreichbar (HTTP 200, `image/jpeg`)
- [x] WhatsApp-Linkvorschau erfolgreich getestet – Vorschaubild und Titel werden korrekt angezeigt
- [ ] iMessage oder Discord testen (optional, WhatsApp-Test gilt als Hauptnachweis)
- [ ] Favicon und Apple-Touch-Icon werden korrekt angezeigt

**Hinweis OpenGraph.xyz:** Das Tool zeigt ggf. weiterhin einen Fehler an. Technische Analyse (curl, alle User-Agents) hat keine Ursache auf Serverseite ergeben – HTTP 200, korrekte Meta-Tags, kein Bot-Blocking, valides SSL. Ursache ist sehr wahrscheinlich ein gecachtes Fehlerergebnis oder ein infrastrukturelles Problem von OpenGraph.xyz selbst. WhatsApp-Test und curl-Prüfung gelten als zuverlässigere Nachweise.

## Rechtliches

- [x] Datenschutztext vollständig aus finaler Quelldatei übernommen (Abschnitte 5, 5a und 6 aktualisiert + Abschnitt 7 neu eingefügt; Abschnitt 6 erneut aktualisiert auf Basis `Datenschutzerklaerung_LoopLeaf_Vercel_iOS_und_Android_8Juni2026.docx`, Stand 07.06.2026)
- [x] Abschnitt 7 „Datenschutzhinweise für unser Instagram-Profil @loopleaf.app" eingefügt (nur Text, keine technische Instagram-Einbindung)
- [x] Datenschutztext nicht automatisch umformuliert
- [x] Impressum verlinkt korrekt extern
- [x] Kontaktadresse stimmt (c/o Online-Impressum #7924, Europaring 90, 53757 St. Augustin)
- [x] Instagram-Link im Footer: in `.footer-nav` nach „Kontakt" eingebettet (Datenschutz · Impressum · Kontakt · [Icon]); einfacher ausgehender Link, kein Plugin, kein Embed, kein Script; Icon lokal aus `assets/icons/Instagram_Glyph_Black.png` (lowercase Pfad); `rel="noopener noreferrer"`, `referrerpolicy="no-referrer"`, `aria-label` gesetzt
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
