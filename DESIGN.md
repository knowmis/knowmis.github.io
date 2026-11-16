---
name: KnowMIS
description: A Roman/Byzantine tessera mosaic where coarse tiles of data resolve into understanding, set in flat colour fields divided by grout.
colors:
  grout: "#14110f"
  grout-2: "#221d19"
  ink: "#171310"
  ivory: "#efe6d2"
  ivory-2: "#e2d6bb"
  paper: "#f6efdf"
  paper-alt-1: "#e9dcbd"
  paper-alt-2: "#efe4cb"
  lapis: "#1b3a8c"
  terra: "#a9402c"
  terra-tile: "#c8553d"
  malachite: "#1f6246"
  ochre: "#e3a72f"
  ochre-hover: "#f0b83f"
  muted-on-light: "#4a4036"
  muted-on-dark: "#c9bfa9"
  accent-text-light: "#9a3a27"
  accent-line-light: "#b9791a"
  tile-stop-light: "#c4b79a"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8.6vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(1.8rem, 3.6vw, 3.2rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.4vw, 3rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  title-small:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  tile: "2px"
  none: "0px"
spacing:
  gutter: "clamp(18px, 4vw, 56px)"
  section: "clamp(48px, 7vw, 96px)"
  gap-sm: "6px"
  gap-md: "14px"
  gap-lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.ochre}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "16px 22px"
  button-primary-hover:
    backgroundColor: "{colors.ochre-hover}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.tile}"
    padding: "16px 22px"
  button-ink-hover:
    backgroundColor: "{colors.grout-2}"
  button-quiet:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 0 8px"
  control-toggle:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "9px 11px"
  control-toggle-pressed:
    backgroundColor: "{colors.ochre}"
    textColor: "{colors.ink}"
  domain-tile:
    backgroundColor: "{colors.ochre}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "9px 13px"
  act-field-lapis:
    backgroundColor: "{colors.lapis}"
    textColor: "{colors.ivory}"
    padding: "clamp(22px, 2.6vw, 40px)"
  act-field-terra:
    backgroundColor: "{colors.terra}"
    textColor: "{colors.ivory}"
    padding: "clamp(22px, 2.6vw, 40px)"
  act-field-malachite:
    backgroundColor: "{colors.malachite}"
    textColor: "{colors.ivory}"
    padding: "clamp(22px, 2.6vw, 40px)"
  group-panel-lapis:
    backgroundColor: "{colors.lapis}"
    textColor: "{colors.ivory}"
    padding: "clamp(24px, 3vw, 44px)"
  group-panel-terra:
    backgroundColor: "{colors.terra}"
    textColor: "{colors.ivory}"
    padding: "clamp(24px, 3vw, 44px)"
---

# Design System: KnowMIS

## Overview

**Creative North Star: "The Tessera Floor"**

The page is a mosaic floor laid out in bands. Every surface is either a flat, saturated field of one pigment (lapis, terracotta, malachite, ochre, ivory) or the dark grout that holds them together. Nothing is blended: no gradients on surfaces, no soft shadows, no glass. Depth comes from adjacency and from resolution, because the hero and the three act canvases are real tesserae drawn on canvas that sharpen from coarse tiles into a legible image. The page behaves like the lab's idea: granular computing, where coarse data becomes understanding as the grain gets finer.

The mood is confident, warm and mineral. Display type is a heavy, tightly set grotesk with character; body is a plain readable grotesk. The brush wordmark logo is the only script on the page. Rules are grout lines, 1 to 3px, and nothing else divides content. The three Situation Awareness acts now read as one compact band: three equal columns, lapis, terracotta and malachite, each a flat field holding one canvas, one headline and one short paragraph. The research groups repeat the same move as two equal blocks, lapis (KnowMIS-SA) and terracotta (KnowMIS-DSS). Headings and section padding are deliberately modest so the colour fields, not the type, carry the scale.

A light theme is the default (warm paper ground, ink text). A dark switch re-maps the same tokens to grout ground and ivory text; the pigment fields (lapis, terracotta, malachite, ochre) do not change between themes.

**Key Characteristics:**
- Flat colour fields with one pigment each; the three acts sit side by side as one band.
- Equal-weight pairing for the two research groups: lapis and terracotta blocks of the same size and structure.
- Grout (`#14110f`) is the only line colour in the system's own language: 1px hairlines, 3px section rules.
- Canvas-rendered tesserae with visible grout joints at four granularities.
- Near-square corners (2px), like cut stone.
- Ochre is the single action colour; ink buttons act on ochre fields.
- Heavy variable grotesk display against a quiet text face.

## Colors

A pigment palette of five tile colours on an ivory/paper and grout-black ground. Colour is applied as whole fields, not tints.

### Primary
- **Ochre Tile** (`ochre`, #e3a72f): the action colour. Primary button, pressed state of toggles, first domain chip, text selection, skip link, the full-bleed Join field, reached-granularity swatches, dark-theme accent and focus. Always carries Ink text.
- **Lapis Field** (`lapis`, #1b3a8c): Act 1 field and the KnowMIS-SA group block. Carries Ivory text.

### Secondary
- **Terracotta Field** (`terra`, #a9402c): Act 2 field and the KnowMIS-DSS group block. Carries Ivory text.
- **Terracotta Tile** (`terra-tile`, #c8553d): the lighter tile variant used inside canvas scenes (sun core, roofs, boat hull), not for page chrome.
- **Malachite Field** (`malachite`, #1f6246): Act 3 field. Carries Ivory text.

### Neutral
- **Grout Black** (`grout`, #14110f): dark-theme ground, seam background, canvas joints. **Grout Umber** (`grout-2`, #221d19) is the hover state of Ink buttons.
- **Ink** (`ink`, #171310): light-theme text, text on ochre, paper-alt fields and chips, ink buttons, 3px section rules.
- **Ivory** (`ivory`, #efe6d2) and **Ivory Stone** (`ivory-2`, #e2d6bb): text on pigment fields and on dark ground; tile colours in scenes. These two swap in as the alternating section grounds in dark theme.
- **Warm Paper** (`paper`, #f6efdf): light-theme page ground. **Paper Alt 1** (`paper-alt-1`, #e9dcbd) grounds Groups; **Paper Alt 2** (`paper-alt-2`, #efe4cb) grounds Partners.
- **Muted on Light** (`muted-on-light`, #4a4036) and **Muted on Dark** (`muted-on-dark`, #c9bfa9): secondary text, one per ground family.
- **Accent Text** (`accent-text-light`, #9a3a27) and **Accent Line** (`accent-line-light`, #b9791a): light-theme link hover text and underline/border accent, and the 3px rule above the SA intro. In dark theme both become Ochre.

### Named Rules
**The One Pigment Per Field Rule.** A field (an act, a group block, the Join section) is one flat pigment. No gradients, no two-tone splits, no tints on a field. A second colour appears only as text, as chips on it, or as tiles inside the canvas.

**The Ochre Is Action Rule.** Ochre marks what the visitor can do or has chosen (primary button, pressed toggle, selection, focus in dark theme). On the Join field, where ochre is the ground, actions switch to Ink buttons. Ochre is not decoration on content.

**The Theme Moves Ground, Not Pigment Rule.** The dark switch re-maps ground, text, line and accent tokens only. Lapis, terracotta, malachite and ochre fields are identical in both themes.

## Typography

**Display Font:** Bricolage Grotesque (with Arial Narrow, system-ui fallback), weights 500 to 800, width axis 75 to 100 (hero headline set at `wdth` 90).
**Body Font:** Hanken Grotesk (with system-ui stack), weights 400, 500, 700.

**Character:** A compressed, heavy grotesk with slightly odd forms for headlines, paired with a clean, neutral text face. The brush wordmark logo is an image asset and the only script voice.

### Hierarchy
- **Display** (800, `clamp(3rem, 8.6vw, 6rem)`, 0.95, -0.03em): the director's name only (`name-xl`). Display is no longer used for act headlines.
- **Headline** (800, `clamp(1.8rem, 3.6vw, 3.2rem)`, 1.0, -0.02em): every section h2 (SA intro, Groups, People, Partners), capped at 20 to 22ch, balanced wrapping. The hero h1 is larger (`clamp(2.1rem, 4.9vw, 4.4rem)`, 0.98, max 14ch). Join's h2 is `clamp(2.2rem, 5vw, 4rem)`.
- **Title** (800, `clamp(2rem, 3.4vw, 3rem)`, 1.0, -0.03em on acts): act h3 and group h3 (KnowMIS-SA / KnowMIS-DSS, with a lighter 500 subtitle span at max(1.05rem, 0.45em)). On mobile act h3 drops to 1.7rem.
- **Title small** (700 to 800, 1.4 to 1.7rem, 1.0, -0.01em): partner column heads (1.5rem), join column heads (1.7rem), team names (1.4rem).
- **Body** (400, 1.0625rem, 1.6): running text, capped at 65ch; act paragraphs 1rem capped at 36ch (0.95rem on mobile); hero side copy 1.1rem; the `.hero-dir` director line is 500 at 1rem in full foreground colour with a bold linked name.
- **Label** (700, 0.8 to 1rem, 0.04 to 0.08em): language and theme toggles, buttons (1rem), partner category tags (0.78rem, 0.08em), domain chips (0.92rem, no tracking), granularity stops (500, 0.9rem). Tracking is applied to toggle and tag labels only.

### Named Rules
**The Heavy Display, Quiet Text Rule.** Headings are always Bricolage 800 with negative tracking (700 only for small list titles); everything that is read in sentences is Hanken at 400. Do not use display weight for body or body face for headlines.

**The Modest Headline Rule.** Section headlines top out at 3.2rem. Scale is carried by colour fields and canvases, not by oversized type; only the hero h1, the Join h2 and the director's name step above that ceiling.

**The Script Is The Logo Rule.** No script, italic display or handwritten face is set in type. The hand-lettered KnowMIS wordmark is the only script on the page.

## Layout

A single-column stack of sections, each padded by the shared gutter (`clamp(18px, 4vw, 56px)`) left and right and `clamp(48px, 7vw, 96px)` top and bottom (the hero uses `clamp(40px, 7vw, 96px)` below, the SA intro `clamp(40px, 6vw, 80px)` above). The SA acts are the exception: a single `.acts` band of three equal columns (`repeat(3, minmax(0, 1fr))`), flush to the viewport edges, each act padded `clamp(22px, 2.6vw, 40px)` with the canvas at full column width on top (equal heights follow from the shared canvas aspect), then the h3 and a short paragraph. Other grids are asymmetric 12-part ratios: 7/5 (hero copy, SA intro, people), 6/3.4/4 (partners). Groups are two equal columns (`repeat(2, 1fr)`, stretch-aligned, gap `clamp(16px, 2vw, 28px)`), and Join is three equal plain columns with a 3px Ink top rule each, followed by a neutral `.join-contact` row (3px Ink top rule, lead line plus Ink buttons) with 6 to 14px gaps. Row and column gaps follow `clamp()` values from 16px to 80px.

At 880px and below every grid collapses to one column and the nav drops to a second row and scrolls horizontally. Each act becomes a row: canvas in a 40% left column spanning both rows, headline and text stacked in the right column (`align-content: center`, 20px vertical padding, 18px column gap). At 480px team entries stack. The header is a three-column grid (logo, nav, controls).

## Elevation & Depth

Flat. There are no box-shadows anywhere in the system. Depth is carried by field-against-field contrast, by the 3px section rules (`border-top: 3px solid` in accent-line or ink), and by the seam band. Interaction feedback is a 2px upward translate on buttons and a thickening underline on the director link, not a shadow.

### Named Rules
**The Grout Is The Only Rule.** Dividers are 1px hairlines (`--line`) or 3px solid section rules in grout/ink/accent-line. No shadows, no blurs, no dividers in another colour.

**The Seam Rule.** Between the Partners and Join fields, and between Join and the footer, a 30px seam band repeats the hero logo's border: two rows of alternating 20x10px tiles (terracotta/ivory-stone, lapis/ochre) with a black middle row, cut by grout joints every 10px. Reuse it only as a transition between fields.

## Shapes

Cut stone: every tile-like control and chip is a rectangle with a 2px radius, and the quiet link button, group blocks, acts and all section fields are 0. Borders are 1.5px (controls) or 1px/3px (rules). The recurring silhouette is a grid of square tiles separated by grout joints (22px granularity swatches with 1.5px joints, 2px to 10px canvas cells). Nothing is pill-shaped or circular except the sun inside the canvas scene.

## Components

### Buttons
- **Shape:** 2px corners, 16px 22px padding, 700 weight, 1rem, no icon.
- **Primary:** Ochre fill, Ink text. Hover lightens to `#f0b83f` and lifts 2px. Used in the hero.
- **Ink:** Ink fill, Ivory text, for use on the ochre Join field. Hover shifts to Grout Umber. Appears as a row of contact buttons (two people, the DIEM lab page) in `.join-contact`.
- **Quiet:** No fill, 2px bottom border in accent-line, 0 radius, no horizontal padding.
- **Focus:** 3px solid outline, 3px offset. Colour is Ink on light fields and on Join/Groups/Partners, Ivory on the pigment acts, Ochre in dark theme.

### Toggles (language, theme)
- **Style:** Transparent, 1.5px `--line` border, 2px radius, 700 0.8rem, 0.08em tracking (language) or 0.04em (theme, with a 15px stroked inline SVG icon).
- **State:** Pressed is an Ochre fill with Ochre border and Ink text. Hover on unpressed shifts the border to accent-line.

### Granularity control (signature)
Four buttons (Data, Understanding, Awareness, Decision) each with a 22px swatch showing 1, 2, 3 or 5 grout-jointed tiles. Unpressed: transparent with a stop-border. Reached: swatch turns Ochre. Pressed: inverted fill (`--pressed-bg`/`--pressed-fg`). A caption beside it describes the current step.

### Tesserae canvas (signature)
Hero and act canvases are drawn on canvas as grout-jointed tiles snapped to a fixed pigment palette (ivory, ivory-stone, ink, lapis, sky, terracotta tile, ochre, peach, tan, brown, malachite, malachite-deep), each tile given one of five slight shade offsets (-7% to +7%) for a hand-set look. The hero resolves through block factors 16, 8, 3, 1, and a pointer lens refines tiles under the cursor to the finest level. The three act canvases show the same coastal scene at final block factors 10, 5 and 2 (each stepping through 3x, 2x, 1x of its final factor), so the band reads left to right as coarse to fine. Respects reduced motion by skipping the animation.

### Act band (`.acts` / `.act`)
Three adjacent flat fields (lapis, terracotta, malachite), one column each, no gaps or dividers between them. Each stacks canvas, an h3 (20px above, 10px below) and a paragraph in Ivory. Compact: no minimum viewport height. On mobile each act is a two-column row with the canvas at 40% width.

### Navigation
Plain text links, 500 weight, 0.95rem, with a 2px transparent bottom border that becomes accent-line on hover. No fills.

### Group blocks and domain chips
KnowMIS-SA (lapis) and KnowMIS-DSS (terracotta) are equal blocks with Ivory text, an h3 with a lighter subtitle, a bold lead line, a paragraph and a `.domains` chip list below. Chips are 2px-radius, 700 0.92rem, 9px 13px, 6px apart, in the tile pigments ochre, ivory, peach, sky, sage with Ink text. Both groups use the same chip list structure.

### People and partners lists
Rows separated by 1px hairlines with a 3px Ink heading rule above each partner column. Team names are Bricolage 700 1.4rem with the role right-aligned in Hanken 0.95rem muted. The director's name is display size with an accent-line underline that thickens on hover.

### Join columns and contact row
Three plain columns on the ochre field, each with a 3px Ink top rule, 20px top padding, a 1.7rem h3 and 1.05rem copy. Beneath, a neutral contact row repeats the 3px Ink rule: bold lead text and Ink buttons, wrapping with 14px by 28px gaps.

## Do's and Don'ts

### Do:
- **Do** give each field (act, group block, Join) one flat pigment from the token set and one idea.
- **Do** keep the three acts as one compact equal-column band, and the two research groups as equal blocks of the same structure.
- **Do** use Ochre for action and selection, with Ink text on it; use Ink buttons where the ground is ochre.
- **Do** keep corners at 2px on tiles and chips and 0 on fields.
- **Do** use grout hairlines (1px) or 3px solid rules as the only dividers.
- **Do** swap theme by changing `data-theme` on the root; fields stay put, ground/text/line/accent tokens move.
- **Do** keep the canvas tiles visibly jointed and snapped to the mosaic palette.
- **Do** keep section headlines at or below 3.2rem and body copy at 65ch or less.

### Don't:
- **Don't** add box-shadows, blurs, glass, or gradient fills to surfaces.
- **Don't** introduce a second action colour; one pigment (ochre) means "do this".
- **Don't** set display type lighter than 700 or body type heavier than 700.
- **Don't** use rounded corners above 2px or pill shapes on controls.
- **Don't** use network-node art, equal icon cards or a navy hero; the page's thesis rejects that lab-site default.
- **Don't** use any script face other than the logo asset.

## Not canonized

Known token debt the build carries, not house style for new surfaces:
- The domain chips hard-code three colours with no token: `#e8b58f` (peach), `#7fa6d6` (sky), `#8fc3a5` (sage). They are copies of canvas pigments and should become named tokens before chips are reused elsewhere.
- The seam band hard-codes its hex stack (`#14110f`, `#171310`, `#a9402c`, `#e2d6bb`, `#1b3a8c`, `#e3a72f`) instead of reading the custom properties; these equal grout, ink, terra, ivory-2, lapis and ochre today but would not follow a token change.
- `#f0b83f` button hover is a literal, recorded only because it is the shipped value (`ochre-hover`).
- Canvas-scene gradients (sky, sea) are scene art, not surface treatment.
