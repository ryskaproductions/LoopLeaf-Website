# 07 – Cookie Consent & Legal Notes

## Aktueller Status

Aktuell kein Cookie-Banner geplant, da diese Website keine einwilligungspflichtigen Cookies, Tracking-, Analytics- oder Marketingdienste einsetzt. Die folgenden Abschnitte dokumentieren die ursprüngliche Planung als Referenz für den Fall, dass sich das ändert.

---

## Ursprüngliches Ziel (Referenz, aktuell nicht umgesetzt)

Die Website sollte ein Cookie-/Consent-Banner enthalten, das technisch auf EU/GDPR/ePrivacy-Anforderungen ausgerichtet ist.

## Wichtig

Dies ist keine Rechtsberatung. Die technische Umsetzung soll sauber sein, aber rechtliche Texte müssen separat geprüft werden.

## Grundprinzip

Keine nicht notwendigen Cookies oder Skripte laden, bevor die Zustimmung erfolgt.

## Banner-Buttons

Das Banner soll drei gleichwertig erreichbare Optionen enthalten:

```text
Alle akzeptieren
Ablehnen
Einstellungen
```

## Kategorien

### Notwendige Cookies

- dürfen nicht deaktiviert werden
- dienen z. B. dem Speichern der Consent-Auswahl

### Statistik / Analyse

- standardmäßig aus
- aktuell keine Analyse laden, falls kein Dienst verwendet wird

### Marketing / Externe Medien

- standardmäßig aus
- aktuell keine externen Medien laden, falls kein Dienst verwendet wird

## Footer-Link

Im Footer muss ein Link vorhanden sein:

```text
Cookie-Einstellungen
```

Dieser öffnet die Consent-Einstellungen erneut.

## Kein Dark Pattern

- „Ablehnen“ muss genauso einfach sein wie „Alle akzeptieren“
- keine versteckten Ablehnen-Optionen
- keine vorausgewählten optionalen Kategorien
- klare Sprache

## Technischer Speicher

Die Auswahl kann z. B. in `localStorage` gespeichert werden.

Beispielname:

```text
loopleaf_cookie_consent
```

## Platzhalter für spätere Dienste

Wenn später Analyse oder externe Medien ergänzt werden, im Code klar kommentieren:

```js
// TODO: Optionales Analyse-Skript hier erst nach Consent laden.
```

## Datenschutz

Der Datenschutztext soll aus der bereitgestellten Word-Datei übernommen werden.

Nicht:

- automatisch umformulieren
- rechtliche Aussagen selbst ergänzen
- Inhalte kürzen

---

## Änderungshistorie Datenschutzerklärung

### 07.06.2026 – Abschnitt 6 aktualisiert

Abschnitt 6 „Datenschutz in den mobilen Apps ‚LoopLeaf'" auf Basis der Quelldatei `Datenschutzerklaerung_LoopLeaf_Vercel_iOS_und_Android_8Juni2026.docx` vollständig ersetzt. Stand-Datum aktualisiert auf 07.06.2026. Abschnitte 1–4, 5, 5a und 7 sowie Footer/Navigation unverändert.

**Inhaltliche Ergänzungen in Abschnitt 6:**

- Lokal gespeicherte Hell-/Dunkelmodus- bzw. Appearance-Einstellung (`Darstellungseinstellung für Hell-/Dunkelmodus`) ergänzt – sowohl in der Liste der lokal gespeicherten Daten als auch als eigener erläuternder Absatz im Unterabschnitt „App-Einstellungen, Sortierung, Filter und optionale Kontaktfelder"
- Lokaler „Was ist neu"-Hinweis bzw. Versionsstatus ergänzt – als Eintrag in der Liste lokal gespeicherter Daten und als eigener erläuternder Absatz
- Hinweis ergänzt, dass die Planung lokaler Erinnerungen ausdrücklich „innerhalb der App" erfolgt
- Unterabschnitt „Lokale Benachrichtigungen" um den Hinweis erweitert, dass Systemberechtigungen für Benachrichtigungen vom Betriebssystem verwaltet werden und durch „Alle Daten löschen" nicht zurückgesetzt werden
- Unterabschnitt „Externe Links innerhalb der App und Verlinkung zur LoopLeaf-Webseite" erweitert: App-Store-/Google-Play-Bewertungsfunktion (Rate-App-Link) als eigene Erläuterung ergänzt; längerer Absatz in mehrere Absätze aufgeteilt
- Unterabschnitt „Löschen lokaler App-Daten" erweitert: `Pausetage` ergänzt um `bzw. Freeze-Daten`; Rücksetzung der Darstellungseinstellung auf „System" ergänzt; Hinweis zu Rücksetzung der „Was ist neu"-Statusinformation ergänzt; Hinweis ergänzt, dass Android-Systemberechtigungen für Benachrichtigungen durch „Alle Daten löschen" nicht zurückgesetzt werden

**Hinweis:** Die aktualisierte Datenschutzerklärung liegt zum Abgleich zusätzlich im Docs-Ordner unter `Datenschutzerklaerung_LoopLeaf_Vercel_iOS_und_Android_8Juni2026.docx`.

### 27.05.2026 – Abschnitt 7 neu eingefügt

Abschnitt 7 „Datenschutzhinweise für unser Instagram-Profil @loopleaf.app" aus der Quelldatei `Datenschutzerklaerung_LoopLeaf_Vercel_iOS_und_Android_27Mai26.docx` direkt nach Abschnitt 6 in `datenschutz.html` eingefügt. Abschnitte 1–6 vollständig unverändert. Stand-Datum bleibt 27.05.2026.

**Inhalt Abschnitt 7:**

- Verantwortlichkeit und Zweck des Instagram-Profils (inkl. Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland)
- Nutzung von Instagram in eigener Verantwortung
- Interaktionen mit unserem Instagram-Profil (Art. 6 Abs. 1 lit. f DSGVO)
- Direktnachrichten über Instagram
- Instagram-Statistiken und Insights (inkl. Art. 26 DSGVO – gemeinsame Verantwortlichkeit)
- Keine Instagram-Plugins auf unserer Website (kein Embed, kein Feed, kein Script, kein Meta Pixel, kein Like-/Share-Button)
- Speicherdauer und Löschung
- Betroffenenrechte und Privatsphäre-Einstellungen

**Hinweis:** Abschnitt 7 ist ausschließlich ein Datenschutzhinweistext. Es wurde keine technische Instagram-Einbindung vorgenommen.

### 27.05.2026 – Abschnitte 5, 5a und 6 aktualisiert

Datenschutzerklärung auf Basis der Quelldatei `Datenschutzerklaerung_LoopLeaf_Vercel_iOS_und_Android_27Mai26.docx` ab Abschnitt 5 vollständig ersetzt. Stand-Datum aktualisiert auf 27.05.2026. Abschnitte 1–4 und Footer/Navigation unverändert.

**Inhaltliche Änderungen:**

- Abschnitt 5 „Externer Impressumslink und zweiter Kontaktweg" aktualisiert: Erwähnung zusätzlicher projektbezogener Links (LoopLeaf-Website, Instagram-Profil) im Social Hub; Absätze zu Social-Hub-Links und Kontaktformular aufgeteilt; Rechtsgrundlage um transparente Verlinkung erweitert
- Abschnitt 5a „Externe Links zu Social-Media-Profilen" neu eingefügt: Beschreibt ausschließlich einfache ausgehende Links (kein Plugin, kein Embed, kein Feed, keine Scripts); @loopleaf.app Instagram-Profil explizit erwähnt; Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO
- Abschnitt 6 „Datenschutz in den mobilen Apps ‚LoopLeaf'" umfassend aktualisiert (Emoji-Auswahl, Ansichtsgrößen, Check-ins an Pausetagen, Onboarding-Detail, Emoji-Anzeigeoption bei Textideen, erweiterte Externe-Links-Beschreibung inkl. Social Hub + Instagram, detaillierteres Löschen-Verhalten)

## Instagram-Link im Footer

### 27.05.2026 – Einfacher ausgehender Instagram-Link ergänzt

In den Footer aller vier HTML-Seiten wurde ein einfacher ausgehender Link zum Instagram-Profil @loopleaf.app eingebaut.

**Technische Details:**

- URL: `https://www.instagram.com/loopleaf.app`
- Icon: lokales Asset `assets/icons/Instagram_Glyph_Black.png` (schwarzes Glyph, kein Gradient; Pfad lowercase `icons/`)
- Position: direkt in `.footer-nav` als letztes Element, nach „Kontakt", mit `·`-Trennzeichen (keine eigene Social-Zeile)
- HTML-Element: normales `<a>`-Tag mit `target="_blank"`, `rel="noopener noreferrer"`, `referrerpolicy="no-referrer"` und `aria-label="Instagram-Profil von LoopLeaf öffnen"`
- Kein Social-Media-Plugin, kein Embed, kein Widget, kein Script, kein Feed, kein Like-/Share-Button
- Beim Laden der Seite werden keine Daten an Instagram/Meta übertragen; Datenübertragung findet erst beim aktiven Klick statt

### 21.05.2026 – Abschnitt 6 aktualisiert

Abschnitt 6 „Datenschutz in den mobilen Apps ‚LoopLeaf'" wurde auf Basis der aktuellen Quelldatei vollständig ersetzt. Die Abschnitte 1–5 sowie Footer, Navigation und Layout wurden nicht verändert.

**Inhaltliche Erweiterungen gegenüber der Vorversion:**

- Liste lokal gespeicherter App-Daten ergänzt: `Check-ins` jetzt mit Angabe von Datum und Uhrzeit; neue Einträge `lokale Sortier-, Filter- und Anzeigeeinstellungen`
- Neuer Absatz: interne lokale Zeitstempel für stabile Sortierung (Anlagedatum Kontakte, Anlagedatum Textideen, Favorisierungszeitpunkt)
- Neuer Absatz: Erläuterung der „Heute kontaktiert"-Funktion und lokaler Zeitpunktspeicherung
- Abschnitt `App-Einstellungen` erweitert zu `App-Einstellungen, Sortierung, Filter und optionale Kontaktfelder` – mit Beschreibung lokaler Sortieroptionen (Kontakte-Seite) und Anzeigefilter (Textideen-Seite)
- Neuer Unterabschnitt `Textideen und Favoriten` mit Beschreibung vorinstallierter Kategorien und lokaler Zeitstempel bei eigenen Textideen/Favoriten
- Abschnitt `Zweck und Rechtsgrundlage` erweitert: Sortieren und Filtern nach Kategorien und Favoriten explizit erwähnt
- Abschnitt `Externe Links` umbenannt und erweitert: Verlinkung zur LoopLeaf-Webseite und projektbezogenen Unterseiten nun explizit beschrieben
- Abschnitt `Löschen lokaler App-Daten` erweitert: Zurücksetzen von Sortier-/Filter-/Anzeigeeinstellungen, Reminder-Einstellungen, Kontaktformular-Optionen, Kontaktverlauf und internen Zeitstempeln nun explizit aufgeführt
