# 05 – Assets Checklist

## Benötigte Assets

### Logos

- LoopLeaf Logo
- LoopLeaf App Icon
- Ryska Productions Logo oder Icon, falls vorhanden

Empfohlener Ordner:

```text
/assets/logos/
```

### Bilder Startseite

- Hero-Bild / App-Mockup
- Bild mit Misha / Smartphone / Kontaktkarten
- Bild für Abschnitt „Für Menschen, deren Kopf manchmal einfach zu voll ist.“
- Feature-Bilder:
  - Kontakte
  - Tagesenergie
  - Pausetag
  - Kontakt abgehakt
  - Textideen
  - Benachrichtigungen
  - Lokal und privat

Empfohlener Ordner:

```text
/assets/images/
```

### Bilder Ryska-Seite

- Ryska Blick
- Cozy Ryska
- Kaska und Ryska
- Projekte
- Ryska Portrait
- Ryska und Misha
- Feedback-Bild

Empfohlener Ordner:

```text
/assets/images/ryska/
```

### Icons

- LoopLeaf-Icon
- Ryska Productions-Icon
- kleine Feature-Icons, falls vorhanden
- Menü-Icon, falls nicht per CSS/HTML umgesetzt
- Cookie-/Consent-Icon optional

Empfohlener Ordner:

```text
/assets/icons/
```

### Schriften

Falls lokale Fontdateien vorhanden:

- Caudex
- Montserrat Light / 300
- Montserrat Regular / 400 optional
- Montserrat Medium / 500 optional

Empfohlener Ordner:

```text
/assets/fonts/
```

## Dateinamen

Bitte sprechende Dateinamen verwenden, zum Beispiel:

```text
loopleaf-logo.svg
loopleaf-app-icon.png
loopleaf-hero-misha.png
loopleaf-sofa-scene.jpg
feature-kontakte.jpg
feature-tagesenergie.jpg
ryska-blick.jpg
ryska-portrait.jpg
ryska-und-misha.jpg
```

## Wichtige Hinweise

- Keine Bilder aus Screenshots ausschneiden, wenn Originalbilder vorhanden sind.
- Bilder für Web optimieren.
- Große Bilder nicht unnötig riesig einbinden.
- Für jedes Bild ein sinnvolles `alt`-Attribut setzen.
- Bildrechte vor Veröffentlichung prüfen.

## TODO-System für fehlende Assets

Wenn ein Asset fehlt, im Code so markieren:

```html
<!-- TODO: Asset fehlt: loopleaf-hero-misha.png -->
```

oder:

```html
<img src="assets/images/placeholder.jpg" alt="TODO: Bildbeschreibung ergänzen">
```
