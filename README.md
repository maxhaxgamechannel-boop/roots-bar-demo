# ROOTS | Bar und Deli – Website-Entwurf (DEMO)

> **Unverbindlicher Demo-Entwurf.** Dies ist **keine** offizielle Website von ROOTS.
> Der Entwurf soll dem Betrieb vorgestellt werden und darf ohne dessen Zustimmung
> nicht als offizielle Website ausgegeben werden.

Statische Seite ohne Build, Backend, Datenbank, Formulare, Cookies oder Tracking.
Keine externen Schriften, Skripte oder Bilder – alles liegt lokal.

## Lokal ansehen
- `index.html` direkt im Browser öffnen, oder
- in diesem Ordner `npx serve -l 8080` ausführen und http://localhost:8080 öffnen.

## Struktur
| Datei | Inhalt |
|---|---|
| `index.html` | Alle Texte, Speisekarte, Öffnungszeiten (Abschnitte mit `<!-- ===== … ===== -->` markiert) |
| `css/styles.css` | Gestaltung; Farben und Schriften oben in `:root` |
| `js/app.js` | Mobiles Menü, Animationen, Hervorhebung des heutigen Tages |
| `_headers` | Sicherheits-Header für Netlify/Cloudflare Pages (GitHub Pages ignoriert die Datei) |
| `favicon.svg` | Vorläufiges Symbol (eigene Grafik, nicht das ROOTS-Logo) |

## Anpassen nach Feedback
- **Speisekarte:** in `index.html` im Abschnitt „3. Speisekarte“. Jede Position ist ein `<li>` mit Name, Preis, Beschreibung.
- **Öffnungszeiten:** Tabelle im Abschnitt „4.“; `data-days` = Wochentag (0 = Sonntag … 6 = Samstag).
- **Farben:** `--orange`, `--orange-dark` usw. in `css/styles.css`.
- **Wechselnde Wörter im Einstieg:** Liste `words` in `js/app.js`.
- **Fehlende Angaben** sind als gestrichelte Markierung „noch zu ergänzen“ (`<span class="todo">`) sichtbar.

## Animationen
Dezent: Einblenden des Einstiegs, wechselndes Wort, langsam drehender Simit-Ring, Einblenden beim Scrollen.
Bei der Systemeinstellung „Bewegung reduzieren“ sind alle Animationen aus. Ohne JavaScript ist alles sofort sichtbar.

## Demo-Hinweis entfernen (erst nach Freigabe durch ROOTS)
Alle Stellen sind mit `DEMO-HINWEIS` kommentiert:
1. `<p class="demo-hinweis">` im Kopfbereich löschen.
2. `<p class="foot-demo">` in der Fußzeile löschen.
3. `<meta name="robots" content="noindex, nofollow">` entfernen.
4. „DEMO-Entwurf“ aus `<title>`, `description`, `og:*` und `twitter:*` entfernen.
5. Optional den Block `DEMO-HINWEIS` in `css/styles.css` löschen.

## Quellen der Angaben (Stand: 03.11.2026)
- Adresse, Konzept (Kaffee, Naturwein, belegte Simit, Snacks), zwei Gründerinnen, Chrom-Interieur,
  Außenplätze: Mit Vergnügen Köln (September 2026), Instagram-Bio @roots.cgn
- Öffnungszeiten: Mit Vergnügen Köln und neueroeffnung.info – übereinstimmend mit den Angaben des Auftraggebers
- Telefon +49 173 5302908: laut Google-Maps-Eintrag (vom Auftraggeber geprüft); sonst öffentlich nicht gefunden
- Speisekarte (Simit, Snacks): Instagram-Highlight „OUR MENU“, Screenshot vom Auftraggeber,
  **von Hand abgeschrieben** – Texte und Preise unverändert übernommen

## Zu den bereitgestellten Speisekartenbildern
Die Dateien `меню 1.png`, `меню 2.png`, `меню 3.png` (Downloads) sind nur **112 × 112 Pixel** groß
(Vorschaubilder). Der Text ist darauf nicht lesbar. Sie wurden deshalb **nicht** eingebunden und
nicht in das Projekt kopiert. Stattdessen steht die Speisekarte als Text auf der Seite (barrierearm, gut lesbar).
Den Screenshot selbst (mit Handy-Oberfläche) enthält das Projekt ebenfalls nicht.

## Offene Punkte vor einer echten Veröffentlichung
- [ ] Zustimmung von ROOTS zu Entwurf, Texten und Gestaltung
- [ ] Speisekarte gegen das Original prüfen (Schreibweisen, z. B. „Kasar-Käse“ / „Kaşar-Käse“, Preise)
- [ ] Getränkekarte (Kaffee, Tee, Wein usw.) – fehlt noch
- [ ] Ob die Telefonnummer öffentlich auf der Website stehen soll
- [ ] Öffnungszeiten aktuell bestätigen
- [ ] Echte Fotos mit Nutzungsrechten; Logo und Schrift von ROOTS (aktuell eigene Grafik)
- [ ] Impressum und Datenschutzerklärung (vom Betrieb bzw. rechtlich geprüft – nicht erfunden)
- [ ] Domain, Hosting, Vorschaubild (`og:image`, braucht absolute URL)
- [ ] Demo-Hinweis und `noindex` entfernen (siehe oben)
