---
name: Efficient Frontier Institutional
colors:
  surface: '#121315'
  surface-dim: '#121315'
  surface-bright: '#38393b'
  surface-container-lowest: '#0d0e10'
  surface-container-low: '#1a1c1d'
  surface-container: '#1e2021'
  surface-container-high: '#292a2b'
  surface-container-highest: '#343536'
  on-surface: '#e3e2e4'
  on-surface-variant: '#d2c5b2'
  inverse-surface: '#e3e2e4'
  inverse-on-surface: '#2f3032'
  outline: '#9b8f7e'
  outline-variant: '#4e4637'
  surface-tint: '#f0bf64'
  primary: '#f4c367'
  on-primary: '#412d00'
  primary-container: '#d6a84f'
  on-primary-container: '#583e00'
  inverse-primary: '#7c5800'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#eac770'
  on-tertiary: '#3e2e00'
  tertiary-container: '#ccab58'
  on-tertiary-container: '#543f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdea6'
  primary-fixed-dim: '#f0bf64'
  on-primary-fixed: '#271900'
  on-primary-fixed-variant: '#5e4200'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#ffdf95'
  tertiary-fixed-dim: '#e6c36c'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#594400'
  background: '#121315'
  on-background: '#e3e2e4'
  surface-variant: '#343536'
  surface-card: '#11151B'
  surface-slate: '#0B0D10'
  border-muted: '#2A2E35'
  text-primary: '#F8F5EC'
  text-secondary: '#B8B8B2'
  accent-bronze: '#9C6B21'
  status-success: '#22C55E'
  status-error: '#EF4444'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  data-tabular:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 80px
  component-gap: 16px
---

## Brand & Style

The design system is engineered to evoke the atmosphere of a high-stakes institutional trading floor—specifically bridging the gap between a Bloomberg Terminal's data density and the refined elegance of a private wealth management firm. The brand personality is disciplined, quantitative, and intellectually rigorous.

The chosen style is **Corporate / Modern** with a **Tactile** edge. It utilizes a "Deep Charcoal" environment to reduce eye strain during long analytical sessions, punctuated by metallic gold accents that signify premium quality and "Bloomberg Cyan" for critical data visualization. A signature visual motif is the "Efficient Frontier" curve: a mathematical trajectory that appears as subtle background masking, decorative borders, and progress indicators, reinforcing the narrative of risk-adjusted growth.

**Key Brand Pillars:**
- **Institutional Authority:** Using geometric precision and monospaced data.
- **Academic Rigor:** Clean, structured layouts that prioritize information hierarchy.
- **Risk Awareness:** A focus on "protection" over "prediction," avoiding vibrant "neon" greens or gambling-adjacent tropes.

## Colors

The palette is anchored in a dark-mode-first architecture to provide a high-contrast, professional backdrop for complex financial data.

- **Primary Background (#050607):** A deep, neutral charcoal that provides maximum contrast for gold accents.
- **Surface Strategy:** Layers are defined by `surface-slate` for secondary sections and `surface-card` for interactive elements. This creates a clear hierarchy of depth.
- **Metallic Gold Accents:** `primary_color_hex` (Soft Metallic Gold) is used for primary actions and key brand moments. `Highlight Gold` is reserved for hover states and critical calls to attention.
- **Bloomberg Cyan (#38BDF8):** Used exclusively for quantitative data, charts, and technical indicators to maintain an "institutional" feel.
- **Typography:** Headlines utilize the warm `text-primary` (Off-white) to prevent the harshness of pure white, while metadata and descriptions use `text-secondary`.

## Typography

This design system employs a three-font strategy to balance character, legibility, and technical precision.

1.  **Sora (Headings):** Chosen for its geometric confidence and premium feel. It should be used for all page titles and section headers to establish authority.
2.  **Inter (Body):** The workhorse for educational content. Its high x-height ensures readability across long-form guides and membership descriptions.
3.  **JetBrains Mono (Data/Labels):** Used for all numerical values, pricing, and small metadata. This monospaced choice reinforces the "Quantitative" aspect of the brand, mimicking the look of code or professional trading terminals.

**Scaling Rules:**
- Large display text (`display-lg`) should scale down significantly on mobile to maintain vertical flow.
- All pricing and percentages must use `data-tabular` to ensure digits align vertically in lists and tables.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop to maintain the "controlled" and "disciplined" nature of financial reporting, transitioning to a fluid model for mobile.

- **Desktop:** 12-column grid with a 1280px max-width. Large gutters (24px) prevent the UI from feeling cluttered despite high data density.
- **Rhythm:** A base-8 horizontal and vertical rhythm is used. Section padding is generous (80px+) to allow the "Efficient Frontier" curve motifs to breathe in the background.
- **Mobile:** Margins shrink to 16px. Cards should stack vertically, and horizontal scrolling is permitted for "Certifications" or "Data Tables" to maintain numerical integrity.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** rather than heavy shadows. In a dark fintech environment, shadows often look muddy; instead, we use lightness to indicate elevation.

- **Level 0 (Base):** `#050607` - The main canvas.
- **Level 1 (Sections):** `#0B0D10` - Used for secondary content blocks or "About" sections.
- **Level 2 (Cards/Inputs):** `#11151B` - Floating elements. These receive a subtle `border-muted` (#2A2E35) stroke to define their edges.
- **Accents:** The "Efficient Frontier" curve can be used as a gold-tinted "Ambient Shadow" or glow behind primary CTA buttons to give them a sense of light-source energy.

## Shapes

The shape language is **Soft (0.25rem)**. This sharp-but-not-harsh approach mirrors the precision of financial charts. 

- **Standard Elements:** Buttons, input fields, and small cards use a 4px (0.25rem) radius.
- **Large Containers:** Pricing cards or hero images use `rounded-lg` (8px) to feel slightly more approachable.
- **The "Curve":** While UI containers are structured and rectangular, the "Efficient Frontier" decorative elements are always organic, sweeping arcs, creating a sophisticated contrast between "The Math" (Grid) and "The Trajectory" (Curve).

## Components

### Buttons
- **Primary:** Solid `primary_color_hex` (Gold) with Black text. Sora Bold. 4px radius.
- **Secondary (Outline):** 1px stroke of Gold with Gold text. Used for "Meet Our Analysts."
- **Ghost/Link:** Text with a JetBrains Mono "arrow" suffix (e.g., ->).

### Cards
- **Institutional Cards:** Background `#11151B`, Border `#2A2E35`. No shadow. Use JetBrains Mono for "Pillar" titles to look like terminal headers.
- **Founder Profiles:** Professional portraits should use a grayscale filter with a subtle gold "rim light" effect or overlay to ensure consistency between different lighting conditions.

### Input Fields & Forms
- **Style:** Dark background (`#0B0D10`), subtle border. On focus, the border changes to `Bloomberg Cyan` or `Gold`.
- **Labels:** Always use `label-caps` (JetBrains Mono) above the field for an institutional, form-like appearance.

### Data Visualizations
- All lines should be 2px thick.
- Main trajectory: Gold.
- Support/Secondary data: Bloomberg Cyan.
- Background grid: Subtle `#2A2E35` dashed lines.

### Memberships
- Pricing must be the largest element, set in JetBrains Mono.
- Use a "Gold Chip" label for the most popular or "Premium" tier.