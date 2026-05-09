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
