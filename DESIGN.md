# Design System Strategy: The Sun-Baked Studio

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Atelier."** 

We are moving away from the cold, clinical "SaaS Blue" aesthetic toward a "Warm Minimalism" that feels like a sun-drenched, high-end studio space. This system rejects the rigid, boxed-in layouts of traditional dashboards in favor of **Organic Fluidity**. By utilizing intentional asymmetry, overlapping layers, and heavy "breathing room," we create an environment that feels premium and curated rather than mass-produced. We want the student to feel they are entering a professional craft space, not just another learning management system.

---

## 2. Colors & Tonal Depth
The palette is rooted in a "Sahara" warmth, using earthy ochres and toasted ambers contrasted against crisp, architectural neutrals.

### The "No-Line" Rule
**Borders are prohibited for sectioning.** To create a high-end editorial feel, we define boundaries exclusively through background shifts. 
- Use `surface` (#f8f6f6) for the main canvas.
- Use `surface_container_low` (#f2f0f0) for secondary sidebars.
- Use `surface_container_highest` (#dddddc) for inactive or deeply recessed utility areas.
- **Result:** The UI feels like a single, cohesive piece of sculpted material rather than a series of disconnected boxes.

### Surface Hierarchy & Nesting
Think of the UI as layers of fine paper. An "Inner Card" should sit on `surface_container_lowest` (#ffffff) to pop against a `surface_container` (#e9e8e8) section. This "recessed nesting" creates a sense of physical depth and architectural intent.

### The Glass & Gradient Rule
For high-impact elements (Floating Action Buttons, Header Overlays), use **Glassmorphism**. Combine `surface_container_lowest` at 70% opacity with a `backdrop-blur` of 20px. 
- **Signature Polish:** For primary CTAs, apply a subtle linear gradient from `primary` (#974200) to `primary_container` (#ff7a1c) at a 135-degree angle. This adds "visual soul" and prevents the flatness common in budget startups.

---

## 3. Typography: The Editorial Voice
We use **Inter** not as a default, but as a Swiss-inspired typographic tool. 

- **Display Scale (`display-lg` to `display-sm`):** Use these for milestone moments—gamification scores or "Skill Level Up" screens. Tighten letter spacing (-0.02em) to give it a "tech-premium" look.
- **Headline & Title:** These are your anchors. Pair a `headline-lg` (2rem) title with generous `32px` (8) bottom spacing to create a sense of importance and "white space luxury."
- **Labels:** Use `label-sm` (#0.6875rem) in all-caps with increased letter spacing (+0.05em) for category tags to provide a sophisticated, metadata-heavy feel that balances the warmth of the primary colors.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are often a crutch for poor layout. This system prioritizes **Tonal Layering**.

- **The Layering Principle:** Depth is achieved by "stacking." A card should not have a shadow; it should simply be a lighter surface (`surface_container_lowest`) placed on a darker one (`surface_container`).
- **Ambient Shadows:** Only use shadows for "Actionable Overlays" (Modals, Dropdowns). Use a multi-layered shadow: `0px 10px 30px rgba(46, 47, 47, 0.05)`. Note the 5% opacity—it should be felt, not seen.
- **The "Ghost Border" Fallback:** If accessibility requires a stroke, use `outline_variant` at 15% opacity. Never use a 100% opaque border; it breaks the "Sun-Baked" softness.

---

## 5. Components

### Buttons
- **Primary:** `primary` (#974200) fill with `on_primary` text. Radius: `md` (0.75rem). Use a 1px inner-glow (white at 10% opacity) on the top edge for a tactile, "glass" finish.
- **Secondary:** `secondary_container` (#ffc69b) fill. No border.
- **Tertiary:** Text only, using `primary` color, with an underline that only appears on hover.

### Cards & Lists
- **The Divider Ban:** Strictly forbid 1px horizontal lines between list items. Use the spacing scale (e.g., `spacing-4`) and alternating surface tones to distinguish items.
- **Skill Chips:** Use `tertiary_container` (#f0b119) with `on_tertiary_container` (#4b3500) text. Rounding: `full` (9999px) for a friendly, modern tech aesthetic.

### Input Fields
- **Default State:** `surface_container_low` background, no border, `sm` (0.25rem) rounding.
- **Focus State:** 2px "Ghost Border" using `surface_tint` at 40% opacity. This creates a "glow" rather than a hard line.

### Community-Specific Components
- **Progress Lozenge:** A wide, pill-shaped bar using `primary_container` for the fill and `surface_variant` for the track.
- **Member Avatars:** Always framed in a `surface_container_lowest` thick border (2px) to make them pop against any background color shift.

---

## 6. Do’s and Don’ts

### Do:
- **Use Asymmetry:** Place a large `display-md` heading on the left and a small `body-md` description offset to the right. It feels bespoke.
- **Embrace White Space:** If a section feels "busy," double the spacing token (e.g., move from `spacing-8` to `spacing-16`).
- **Use Tonal Progression:** Move from `surface` to `surface_container` as the user "drills down" into more specific content (e.g., Dashboard -> Course -> Lesson).

### Don’t:
- **Don't use Black (#000000):** Use `on_surface` (#2e2f2f) for all text to maintain the "warm" sun-baked mood.
- **Don't use Default Shadows:** Avoid the standard Figma/Sketch "drop shadow" preset. It looks cheap.
- **Don't Over-round:** While we use `ROUND_EIGHT`, avoid making everything a circle. Keep the structure "architectural" by using `md` (0.75rem) for main containers and `full` only for small interactive chips.

---

## Detailed Token Values

### Colors
**Base Theme:** Light Mode
**Primary Accent:** `#974200` (Dim: `#853900`)
**Custom Initial Color:** `#c2652a`

**Background & Surface:**
- `background`: `#f8f6f6`
- `on_background`: `#2e2f2f`
- `surface`: `#f8f6f6`
- `surface_bright`: `#f8f6f6`
- `surface_container`: `#e9e8e8`
- `surface_container_high`: `#e3e2e2`
- `surface_container_highest`: `#dddddc`
- `surface_container_low`: `#f2f0f0`
- `surface_container_lowest`: `#ffffff`
- `surface_dim`: `#d5d4d4`
- `surface_tint`: `#974200`
- `surface_variant`: `#dddddc`
- `on_surface`: `#2e2f2f`
- `on_surface_variant`: `#5b5b5b`
- `inverse_surface`: `#0d0e0e`
- `inverse_on_surface`: `#9d9d9d`

**Primary Colors:**
- `primary`: `#974200`
- `on_primary`: `#fff0e9`
- `primary_container`: `#ff7a1c`
- `on_primary_container`: `#3e1700`
- `primary_fixed`: `#ff7a1c`
- `primary_fixed_dim`: `#ef6d00`
- `on_primary_fixed`: `#000000`
- `on_primary_fixed_variant`: `#4d1e00`
- `inverse_primary`: `#ff7505`

**Secondary Colors:**
- `secondary`: `#8d4a00`
- `secondary_dim`: `#7b4000`
- `on_secondary`: `#fff0e7`
- `secondary_container`: `#ffc69b`
- `on_secondary_container`: `#6f3900`
- `secondary_fixed`: `#ffc69b`
- `secondary_fixed_dim`: `#ffb376`
- `on_secondary_fixed`: `#532900`
- `on_secondary_fixed_variant`: `#7d4100`

**Tertiary Colors:**
- `tertiary`: `#785600`
- `tertiary_dim`: `#694a00`
- `on_tertiary`: `#fff1dd`
- `tertiary_container`: `#f0b119`
- `on_tertiary_container`: `#4b3500`
- `tertiary_fixed`: `#f0b119`
- `tertiary_fixed_dim`: `#e0a300`
- `on_tertiary_fixed`: `#302000`
- `on_tertiary_fixed_variant`: `#573d00`

**Error Colors:**
- `error`: `#b02500`
- `error_dim`: `#b92902`
- `on_error`: `#ffefec`
- `error_container`: `#f95630`
- `on_error_container`: `#520c00`

**Outlines:**
- `outline`: `#777777`
- `outline_variant`: `#aeadad`

### Typography & Structure
- **Global Font**: INTER
- **Headline Font**: INTER
- **Body Font**: INTER
- **Label Font**: INTER
- **Roundness**: ROUND_EIGHT
- **Spacing Scale**: 2
