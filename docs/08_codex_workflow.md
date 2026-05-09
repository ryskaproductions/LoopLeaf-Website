# 08 – Codex Workflow

## Grundregel

Nicht alles auf einmal bauen. Schritt für Schritt, nach jedem Schritt ein Git-Commit.

## Status der Schritte

| Schritt | Aufgabe | Status |
|---|---|---|
| 1 | Analyse (Assets, Docs, Screenshots) | ✅ abgeschlossen |
| 2 | Grundstruktur (HTML, CSS, JS, Header, Footer, Nav) | ✅ abgeschlossen |
| 3 | Startseite (index.html) vollständig finalisiert | ✅ abgeschlossen |
| 4 | Ryska-Seite (ryska.html) | ✅ abgeschlossen |
| 5 | Datenschutzseite (datenschutz.html) aus Word-Datei | ✅ abgeschlossen |
| 6 | Cookie-/Consent-Banner | ⏭️ entfällt |
| 7 | Responsive Feinschliff + Abschlussprüfung | ✅ abgeschlossen |

---

## Abgeschlossene Arbeiten (Schritt 1–3)

Die Startseite ist finalisiert und dient als visuelle Grundlage für alle weiteren Seiten.

Umgesetzt:
- Header: sage-grüner Hintergrund, Caudex-Schriftzug 50px, Logo ~100px, Montserrat-Nav 18px
- Hero: H1 Caudex 100px, Intro Montserrat 24px, Bild volle Breite ohne Beschneidung
- Zielgruppenabschnitt: #A7C1B2 Hintergrund, zentriert, Caudex 49px/40px, Textfarbe korrekt
- Sofa-Bild: full-width, object-fit cover
- Feature-Bereich: 7 Reihen, 3-Spalten-Grid, H3 80px Caudex, Bilder 240px, Scroll-Reveal-Animation
- Footer: obere Branding-Zeile (zwei Brand-Gruppen), unterer Textblock mit Caudex 45px, Montserrat-Kleintext

Alle Schriften lokal eingebunden (`/assets/fonts/`). Avenir vollständig durch Montserrat ersetzt.

---

## Nächster Schritt: Ryska-Seite

```text
Baue jetzt die Seite „Über Ryska Productions" (ryska.html) nach den Inhalten aus 03_content_inventory.md
und dem visuellen Vorbild der Startseite (index.html).

Wichtig:
- Header und Footer identisch mit index.html übernehmen.
- Farben, Schriften, Abstände und responsive Grundlogik von der Startseite wiederverwenden.
- Inhalte aus 03_content_inventory.md, Abschnitt „Seite Über Ryska Productions".
- Kontakt- und Feedback-Links: mailto:ryskaproductions@gmail.com
- Keine neuen Designs erfinden – am Stil der Startseite orientieren.
- Texte nicht umformulieren.
- Bilder aus /assets/images/ verwenden, Dateinamen: ryska-portrait.png, ryska-forest-walk.png,
  ryska-laptop.png, ryska-cozy.png, ryska-und-misha.png
```

---

## Schritt 5: Datenschutzseite

```text
Baue jetzt die Datenschutzseite (datenschutz.html).

Wichtig:
- Header und Footer identisch mit index.html übernehmen.
- Datenschutztext vollständig aus der Word-Datei übernehmen:
  Datenschutzerklaerung_RyskaProductions_LoopLeaf_final_AppStoreLinks.docx
- Keine rechtlichen Texte selbst erfinden.
- Keine Inhalte kürzen.
- Struktur (Überschriften, Absätze, Listen) sauber in HTML überführen.
- Gut lesbar auf Desktop und Mobile.
```

---

## Schritt 6: Cookie-/Consent-Banner

Aktuell kein Cookie-Banner geplant, solange die Website keine einwilligungspflichtigen Cookies, Tracking-, Analytics- oder Marketingdienste einsetzt. Der „Cookie-Einstellungen"-Link wurde aus allen Footern entfernt. Der entsprechende JS-Platzhalter und die CSS-Stile wurden ebenfalls bereinigt.

---

## Commit-Messages (Referenz)

```text
initial project structure
add responsive header and footer
add LoopLeaf homepage
refine header layout and branding fidelity
refine footer branding and layout fidelity
add subtle scroll reveal for feature images
update docs with finalized homepage design system
add Ryska Productions page
add privacy page
add cookie consent banner
polish responsive layout
```

---

## Was nach jedem Schritt geliefert werden soll

- Zusammenfassung der Änderungen
- geänderte Dateien
- offene TODOs
- empfohlene Commit-Message
