---
name: KnowMIS
description: A Roman/Byzantine tessera mosaic where coarse tiles of data resolve into understanding, set in flat full-bleed colour fields divided by grout.
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
    fontSize: "clamp(3rem, 8.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 4.2rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
  title:
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
  section: "clamp(64px, 10vw, 140px)"
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
    padding: "10px 14px"
  act-field-lapis:
    backgroundColor: "{colors.lapis}"
    textColor: "{colors.ivory}"
    padding: "clamp(48px, 8vw, 110px) 56px"
  act-field-terra:
    backgroundColor: "{colors.terra}"
    textColor: "{colors.ivory}"
  act-field-malachite:
    backgroundColor: "{colors.malachite}"
    textColor: "{colors.ivory}"
---

# Design System: KnowMIS

## Overview

**Creative North Star: "The Tessera Floor"**

The page is a mosaic floor laid out in acts. Every surface is either a flat, saturated field of one pigment (lapis, terracotta, malachite, ochre, ivory) or the dark grout that holds them together. Nothing is blended: no gradients on surfaces, no soft shadows, no glass. Depth comes from adjacency and from resolution, because the hero and the three act canvases are real tesserae drawn on canvas that sharpen from coarse tiles into a legible image. The page behaves like the lab's idea: granular computing, where coarse data becomes understanding as the grain gets finer.

The mood is confident, warm and mineral. Display type is a heavy, tightly set grotesk with character; body is a plain readable grotesk. The brush wordmark logo is the only script on the page. Rules are grout lines, 1 to 3px, and nothing else divides content. Each Situation Awareness act owns one full-bleed field and one idea, in the manner of Saul Bass: large flat colour, one headline, one image.

A light theme is the default (warm paper ground, ink text). A dark switch re-maps the same tokens to grout ground and ivory text; the pigment fields (lapis, terracotta, malachite, ochre) do not change between themes.

**Key Characteristics:**
- Flat full-bleed colour fields per act; one pigment, one idea.
- Grout (`#14110f`) is the only line colour in the system's own language: 1px hairlines, 3px section rules.
- Canvas-rendered tesserae with visible grout joints at four granularities.
- Near-square corners (2px), like cut stone.
- Ochre is the single action colour.
- Heavy variable grotesk display against a quiet text face.

## Colors

A pigment palette of five tile colours on an ivory/paper and grout-black ground. Colour is applied as whole fields, not tints.

### Primary
- **Ochre Tile** (`ochre`, #e3a72f): the action colour. Primary button, pressed state of toggles, domain tile, text selection, skip link, the full-bleed Join field, reached-granularity swatches, dark-theme accent and focus. Always carries Ink text.
- **Lapis Field** (`lapis`, #1b3a8c): Act 1 field and the KnowMIS-SA group panel. The SA line is the only group given this field, which is how its emphasis is expressed. Carries Ivory text.

### Secondary
- **Terracotta Field** (`terra`, #a9402c): Act 2 field. Carries Ivory text.
- **Terracotta Tile** (`terra-tile`, #c8553d): the lighter tile variant used inside canvas scenes (sun core, roofs, boat hull), not for page chrome.
- **Malachite Field** (`malachite`, #1f6246): Act 3 field. Carries Ivory text.

### Neutral
- **Grout Black** (`grout`, #14110f): dark-theme ground, seam background, canvas joints. **Grout Umber** (`grout-2`, #221d19) is the hover state of Ink buttons.
- **Ink** (`ink`, #171310): light-theme text, text on ochre and on paper-alt fields, ink buttons, 3px section rules.
- **Ivory** (`ivory`, #efe6d2) and **Ivory Stone** (`ivory-2`, #e2d6bb): text on pigment fields and on dark ground; tile colours in scenes. These two swap in as the alternating section grounds in dark theme.
- **Warm Paper** (`paper`, #f6efdf): light-theme page ground. **Paper Alt 1** (`paper-alt-1`, #e9dcbd) grounds Groups; **Paper Alt 2** (`paper-alt-2`, #efe4cb) grounds Partners.
- **Muted on Light** (`muted-on-light`, #4a4036) and **Muted on Dark** (`muted-on-dark`, #c9bfa9): secondary text, one per ground family.
- **Accent Text** (`accent-text-light`, #9a3a27) and **Accent Line** (`accent-line-light`, #b9791a): light-theme link hover text and underline/border accent. In dark theme both become Ochre.

### Named Rules
**The One Pigment Per Field Rule.** A full-bleed section is one flat pigment. No gradients, no two-tone splits, no tints on a field. A second colour appears only as text or as tiles inside the canvas.

**The Ochre Is Action Rule.** Ochre marks what the visitor can do or has chosen (primary button, pressed toggle, selection, focus in dark theme). It is not decoration on content.

**The Theme Moves Ground, Not Pigment Rule.** The dark switch re-maps ground, text, line and accent tokens only. Lapis, terracotta, malachite and ochre fields are identical in both themes.

## Typography

**Display Font:** Bricolage Grotesque (with Arial Narrow, system-ui fallback), weights 500 to 800, width axis 75 to 100 (hero headline set at `wdth` 90).
**Body Font:** Hanken Grotesk (with system-ui stack), weights 400, 500, 700.

**Character:** A compressed, heavy grotesk with slightly odd forms for headlines, paired with a clean, neutral text face. The brush wordmark logo is an image asset and the only script voice.

### Hierarchy
- **Display** (800, `clamp(3rem, 8.4vw, 6rem)`, 1.0, -0.03em): act headlines and the director's name (`name-xl` runs `clamp(3rem, 8.6vw, 6rem)`, 0.95).
- **Headline** (800, `clamp(2rem, 4.6vw, 4.2rem)`, 1.0, -0.02em): section h2s and the hero h1 (`clamp(2.1rem, 4.9vw, 4.4rem)`, 0.98). Join's h2 steps up to `clamp(2.6rem, 7vw, 6rem)`. Balanced wrapping.
- **Title** (700 to 800, 1.4 to 1.9rem, 1.0, -0.01em): group, partner and join sub-heads, team names. SA group heading scales to `clamp(2.2rem, 4.4vw, 3.8rem)`.
- **Body** (400, 1.0625rem, 1.6): running text, capped at 65ch; act paragraphs 1.15rem capped at 40ch.
- **Label** (700, 0.8 to 1rem, 0.04 to 0.08em): language and theme toggles, buttons (1rem), partner category tags (0.78rem, 0.08em), granularity stops (500, 0.9rem). Tracking is applied to toggle and tag labels only.

### Named Rules
**The Heavy Display, Quiet Text Rule.** Headings are always Bricolage 800 with negative tracking; everything that is read in sentences is Hanken at 400. Do not use display weight for body or body face for headlines.

**The Script Is The Logo Rule.** No script, italic display or handwritten face is set in type. The hand-lettered KnowMIS wordmark is the only script on the page.

## Layout

A single-column stack of full-bleed sections, each padded by the shared gutter (`clamp(18px, 4vw, 56px)`) left and right and `clamp(64px, 10vw, 140px)` top and bottom. Inside, sections use asymmetric two-column grids on 12-part ratios: 7/5 (hero copy, groups, people), 8/4 (SA intro), 5/6 and 6/5 alternating for the acts so the canvas swaps sides, 6/3.4/4 for partners, and an equal three-column join. Acts have a minimum height of `min(86svh, 760px)`. Row and column gaps follow `clamp()` values from 24px to 96px; small clusters use 6px (tile gaps) and 14px.

At 880px and below every grid collapses to one column, the nav drops to a second row and scrolls horizontally, and Act 2 moves its canvas below its text. At 480px team entries stack. The header is a three-column grid (logo, nav, controls).

## Elevation & Depth

Flat. There are no box-shadows anywhere in the system. Depth is carried by field-against-field contrast, by the 3px section rules (`border-top: 3px solid` in accent-line or ink), and by the seam band. Interaction feedback is a 2px upward translate on buttons and a thickening underline on the director link, not a shadow.

### Named Rules
**The Grout Is The Only Rule.** Dividers are 1px hairlines (`--line`) or 3px solid section rules in grout/ink/accent-line. No shadows, no blurs, no dividers in another colour.

**The Seam Rule.** Between the Partners and Join fields, and between Join and the footer, a 30px seam band repeats the hero logo's border: two rows of alternating 20x10px tiles (terracotta/ivory-stone, lapis/ochre) with a black middle row, cut by grout joints every 10px. Reuse it only as a transition between fields.

## Shapes

Cut stone: every tile-like control is a rectangle with a 2px radius, and the quiet link button and all section fields are 0. Borders are 1.5px (controls) or 1px/3px (rules). The recurring silhouette is a grid of square tiles separated by grout joints (22px granularity swatches with 1.5px joints, 5px to 10px canvas cells). Nothing is pill-shaped or circular except the sun inside the canvas scene.

## Components

### Buttons
- **Shape:** 2px corners, 16px 22px padding, 700 weight, 1rem, no icon.
- **Primary:** Ochre fill, Ink text. Hover lightens to `#f0b83f` and lifts 2px.
- **Ink:** Ink fill, Ivory text, for use on ochre fields (Join). Hover shifts to Grout Umber. Sits at the bottom of its column.
- **Quiet:** No fill, 2px bottom border in accent-line, 0 radius, no horizontal padding.
- **Focus:** 3px solid outline, 3px offset. Colour is Ink on light fields, Ivory on pigment acts, Ochre in dark theme.

### Toggles (language, theme)
- **Style:** Transparent, 1.5px `--line` border, 2px radius, 700 0.8rem, 0.08em tracking (language) or 0.04em (theme, with a 15px stroked inline SVG icon).
- **State:** Pressed is an Ochre fill with Ochre border and Ink text. Hover on unpressed shifts the border to accent-line.

### Granularity control (signature)
Four buttons (Data, Understanding, Awareness, Decision) each with a 22px swatch showing 1, 2, 3 or 5 grout-jointed tiles. Unpressed: transparent with a stop-border. Reached: swatch turns Ochre. Pressed: inverted fill (`--pressed-bg`/`--pressed-fg`). A caption beside it describes the current step.

### Tesserae canvas (signature)
Hero and act canvases are drawn on canvas as grout-jointed tiles snapped to a fixed pigment palette (ivory, ivory-stone, ink, lapis, sky, terracotta tile, ochre, peach, tan, brown, malachite, malachite-deep), each tile given one of five slight shade offsets (-7% to +7%) for a hand-set look. The hero resolves through block factors 16, 8, 3, 1, and a pointer lens refines tiles under the cursor to the finest level. Act canvases step through coarser levels to each act's own final resolution. Respects reduced motion by skipping the animation.

### Navigation
Plain text links, 500 weight, 0.95rem, with a 2px transparent bottom border that becomes accent-line on hover. No fills.

### Group panels and domain tiles
The SA group is a Lapis panel with Ivory text and 28 to 56px padding. The DSS group is unfilled with a 3px Ink top rule. Domain tiles are 2px-radius chips, 700 0.95rem, each in a different tile pigment (ochre, ivory, peach, sky, sage), 6px apart.

### People and partners lists
Rows separated by 1px hairlines with a 3px Ink heading rule above each partner column. Team names are Bricolage 700 1.4rem with the role right-aligned in Hanken 0.95rem muted. The director's name is display size with an accent-line underline that thickens on hover.

## Do's and Don'ts

### Do:
- **Do** give each full-bleed field one flat pigment from the token set and one idea.
- **Do** use Ochre for action and selection, with Ink text on it.
- **Do** keep corners at 2px on tiles and 0 on fields.
- **Do** use grout hairlines (1px) or 3px solid rules as the only dividers.
- **Do** swap theme by changing `data-theme` on the root; fields stay put, ground/text/line/accent tokens move.
- **Do** keep the canvas tiles visibly jointed and snapped to the mosaic palette.
- **Do** keep body copy at 65ch or less.

### Don't:
- **Don't** add box-shadows, blurs, glass, or gradient fills to surfaces.
- **Don't** introduce a second action colour; one pigment (ochre) means "do this".
- **Don't** set display type lighter than 700 or body type heavier than 700.
- **Don't** use rounded corners above 2px or pill shapes on controls.
- **Don't** use network-node art, equal icon cards or a navy hero; the page's thesis rejects that lab-site default.
- **Don't** use any script face other than the logo asset.

## Not canonized

The build carries a few one-off hardcoded hexes that are not part of the token system and should not be inherited as house style: the 5-tile domain palette's `#e8b58f`, `#7fa6d6`, `#8fc3a5` and the seam's literal hex stack are copies of canvas pigments rather than named tokens; the canvas-scene gradients (sky, sea) are scene art, not surface treatment; `#f0b83f` button hover is recorded only because it is the shipped hover value.
