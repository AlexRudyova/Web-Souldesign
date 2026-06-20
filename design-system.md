# Design System – Soul Design

## Brand feeling

* jemný luxus
* ženské butikové štúdio
* osobný prístup
* vzdušnosť
* dôvera
* elegancia

Vyhýbať sa:

* korporátnemu vzhľadu
* agresívnym kontrastom
* príliš technickému dizajnu
* preplneným sekciám

---

## Typography

### H1

* font-family: Frank Ruhl Libre
* font-weight: 500

### H2

* font-family: Frank Ruhl Libre
* font-weight: 400
* text-transform: sentence case
* font-size: clamp(26px, 3.6vw, 46px)  →  ~26px mobile / ~38px tablet / 46px desktop
* line-height: 1.15
* margin-bottom (H2 → section label): 8px

Gradient:

* aplikovať na posledné slovo vrátane interpunkcie (bodka ostáva súčasťou gradient spanu)
* použiť existujúci brand gradient
* zachovať rovnaké farby, smer a techniku gradientu

```css
background: linear-gradient(100deg, #005f7a 0%, #007599 45%, #00a3c9 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### Section label

* font-family: Lora
* font-weight: 500
* font-size: 13px
* text-transform: uppercase
* letter-spacing: 0.18em
* line-height: 1.4
* color: #007599  (var(--teal))
* margin-bottom (section label → body text): 24px

Poradie prvkov v sekcii:

1. H2
2. section label
3. body text
4. CTA (ak existuje)

### Body text

* font-family: Lora
* font-weight: 400
* font-size: 18px desktop
* font-size: 16px mobile
* line-height: 1.7

---

## Spacing

* section-to-section: 120px desktop
* section-to-section: 96px tablet
* section-to-section: 64px mobile
* H2-to-section-label: 8px
* section-label-to-body-text: 24px

---

## Components

### Buttons

* používať výhradne existujúci štýl tlačidiel, ktoré máme vytvorené v components/ui/cta-button

### Cards

* border-radius: 20px
* gap: 32px desktop
* gap: 20px mobile
* jednotný tieň
* jednotné vnútorné odsadenie
* jednotná tenká linka okolo rámčeka s fotkami ako máme implementované

### Icons

* používať tmavé varianty v štýle tlačidiel
* nepoužívať svetlé hexagóny

---

## Fonts – povolené

* Frank Ruhl Libre – headlines (H1, H2)
* Lora – body text, section labels, CTA text
* Tretí podpisový font – v hľadaní

**Zakázané:** Playfair Display, Cormorant Garamond (okrem existujúceho nav CTA – výnimka schválená)

---

## Farebná paleta

| Rola | Hodnota |
|------|---------|
| Primárna | `#007599` |
| Sekundárna | `#E9F3F6` |
| Pozadie | `#FAF8F5` (warm ivory) |
| Text | `#333333` |

Brand gradient (H2 posledné slovo + interpunkcia):
`linear-gradient(100deg, #005f7a 0%, #007599 45%, #00a3c9 100%)`

---

## Constraints

Pri každej budúcej úprave:

* meniť iba prvky uvedené v zadaní
* neupravovať nesúvisiace komponenty
* neupravovať layout bez explicitného pokynu
* neupravovať spacing mimo definovaných pravidiel
* neupravovať responzívne breakpointy
* neupravovať animácie
* neupravovať kontajnery
* neupravovať fotografie, ak nie je zadané inak
