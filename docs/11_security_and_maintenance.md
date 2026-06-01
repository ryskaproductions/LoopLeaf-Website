# 11 – Sicherheit, Wartung und aktuelle Projektregeln

Dieses Dokument beschreibt den aktuellen Sicherheits- und Wartungsstand der LoopLeaf-Website sowie Regeln für künftige Änderungen.

---

## Projektcharakter

Die Website ist aktuell eine **vollständig statische Website**:

- Keine Formulare, keine Logins, keine Nutzerkonten
- Keine Datenbankzugriffe, keine API-Calls, keine serverseitigen Funktionen
- Keine externen Skripte, keine externen Fonts, keine iFrames
- Kein Analytics, kein Tracking, kein Cookie-Banner erforderlich
- Alle Bilder, Fonts, CSS- und JS-Dateien werden lokal aus dem Projekt geladen
- Kontakt läuft über einen `mailto:`-Link
- Impressum wird als externer Link geöffnet, nicht als eingebettetes iFrame oder Script

---

## Security Headers (vercel.json)

Die Security Headers werden über `vercel.json` für alle Routen (`/(.*)`") gesetzt.

### Gesetzte Headers

| Header | Wert |
|---|---|
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), interest-cohort=()` |
| `Content-Security-Policy` | siehe unten |

**HSTS:** Wird von Vercel automatisch ausgeliefert (`strict-transport-security: max-age=63072000`). Nicht manuell in `vercel.json` konfiguriert.

Die Security Headers binden keine externen Dienste ein und setzen keine Cookies.

---

## Content Security Policy (CSP)

Die aktive CSP lautet:

```
default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'none'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'none'
```

### Bedeutung der Direktiven

- Die Website lädt ausschließlich eigene Ressourcen von `'self'`.
- Externe Skripte, Styles, Bilder, Fonts, Frames und Netzwerkverbindungen sind nicht erlaubt.
- `connect-src 'none'`: keine API-Calls, keine Formulare, keine externen Dienste.
- `frame-src 'none'`: keine eingebetteten Inhalte.
- `form-action 'none'`: kein Kontaktformular vorhanden.
- `base-uri 'self'`: verhindert Manipulation der Basis-URL.

### Testprozess

Die CSP wurde zunächst im `Content-Security-Policy-Report-Only`-Modus getestet. Nach bestätigtem Fehlerfreiheit (alle vier Seiten, Desktop und Mobile, ohne CSP-Warnungen in der Browserkonsole) wurde der aktive Header gesetzt.

---

## Regel: Externe Dienste und CSP-Anpassungen

Wenn künftig externe Dienste ergänzt werden sollen (z. B. Kontaktformular, Cookie-Banner, Analytics, Captcha, externe Fonts, externe Skripte, eingebettete Inhalte, App-Store-Widgets oder andere Drittanbieter-Komponenten), **muss vorher geprüft werden**:

1. Welche externen Domains der Dienst lädt.
2. Welche CSP-Direktiven angepasst werden müssten (`script-src`, `style-src`, `img-src`, `font-src`, `connect-src`, `frame-src` usw.).
3. Ob die neue Quelle wirklich notwendig ist.
4. Ob die Einbindung datenschutzrechtlich zulässig ist.
5. Ob Datenschutzerklärung, Cookie-Hinweis, Einwilligung oder AV-Vertrag angepasst werden müssen.
6. Ob die Änderung zunächst wieder im `Content-Security-Policy-Report-Only`-Modus getestet werden sollte, bevor sie aktiv blockierend eingesetzt wird.

---

## Footer-Konsistenz

Der Footer ist auf allen vier Seiten (`index.html`, `warum.html`, `ryska.html`, `datenschutz.html`) konsistent aufgebaut.

### Aktuelle Struktur

```
div.footer-meta
  ├── div.footer-meta-left   (Heading, Subline, Nav, Note, Copyright)
  └── div.footer-meta-right  (LoopLeaf laden + App Store Badge)
```

- Der App-Store-Bereich ist auf allen vier Seiten vorhanden.
- Bei künftigen Footer-Änderungen müssen alle statischen HTML-Seiten konsistent aktualisiert werden.
- `datenschutz.html` hat im Footer-Nav `aria-current="page"` auf dem Datenschutz-Link. Das ist korrekt und soll erhalten bleiben.

---

## Mobile Navigation – Fokusmanagement

Das mobile Drei-Striche-Menü wird über `js/main.js` gesteuert.

- Beim Schließen des mobilen Menüs wird geprüft, ob der Fokus noch innerhalb der mobilen Navigation liegt.
- Falls ja, wird der Fokus auf den Menü-Button zurückgesetzt, **bevor** `aria-hidden="true"` auf `#mobile-nav` gesetzt wird.
- Dadurch wird verhindert, dass ein fokussiertes Element in einem `aria-hidden`-Bereich verbleibt.
- Bei zukünftigen Änderungen an der mobilen Navigation muss dieses Fokusmanagement erhalten bleiben.
- Die Desktop-Navigation ist davon unabhängig.

---

## Farbsystem

Das Farbsystem ist in `css/styles.css` über CSS Custom Properties im `:root` definiert.

### Ergänzte Tokens

| Token | Verwendung |
|---|---|
| `--color-dark-green-deep` | Button-Hover-Schattierung (dunkleres Dark-Green) |
| `--color-surface-tinted` | Getönter Infohintergrund (z. B. Datenschutz-Adressblock) |

### Reserve-Tokens (bewusst kommentiert erhalten)

- `--color-mid-green` – Reserve für sekundären Text / gedämpfte Elemente
- `--color-border-soft` – Reserve für zukünftige Designvarianten
- `--color-card` – Reserve für zukünftige Designvarianten

### Opacity-Konvention

Für rgba-Werte auf dunklen Sektionen gilt folgende Konvention (im CSS kommentiert):

- `--color-cream` mit niedriger Opacity (0.15–0.25): dezente Border-/Trennlinien
- `--color-cream` mit hoher Opacity (0.8–0.95): Sekundärtext auf dunklen Sektionen
- `--color-dark-green` mit niedriger Opacity (0.18): dezente Trennlinien auf hellen Sektionen

### Regel

Bei künftigen Farbänderungen sollen nach Möglichkeit **bestehende Tokens genutzt** oder neue Tokens sauber benannt werden, statt neue verstreute Hex-Werte einzubauen.
