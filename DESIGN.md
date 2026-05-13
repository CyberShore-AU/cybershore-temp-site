---
name: CyberShore
description: Local, understandable cybersecurity for Australian SMBs.
colors:
  primary: "#64ffda"
  neutral-bg: "#0a192f"
  neutral-surface: "#112240"
  text-primary: "#ccd6f6"
  text-secondary: "#8892b0"
  accent-hover: "#4cd8b8"
  glass-border: "rgba(100, 255, 218, 0.1)"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(2.5rem, 8vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.1
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
---

# Design System: CyberShore

## 1. Overview

**Creative North Star: "The Shoreline Sentinel"**

CyberShore’s visual system is built on the metaphor of a sturdy, watchful presence along the Australian coast. It rejects the delicate and ephemeral in favor of the solid and dependable. This is "Safe Harbour" security: a protected perimeter that feels as permanent as a headland.

The aesthetic balance is found between high-tech precision and local grounding. It avoids the "hacker" cliché by using bright, coastal teals against deep ocean navies, rather than neon greens on pitch black. The interface is spacious and clear, ensuring that security never feels like a burden of complexity.

**Key Characteristics:**
- **Sturdy & Solid**: Avoids excessive transparency; uses solid fills and strong borders.
- **Coastal Contrast**: Deep navies provide depth, while coastal teal acts as a beacon of action.
- **Tactile Confidence**: UI elements have weight and respond with purpose.

## 2. Colors

The palette is derived from the Australian shoreline at dusk: deep ocean depths and the bright flash of a maritime signal.

### Primary
- **Shoreline Teal** (#64ffda): The primary action color. Used for buttons, critical status, and key brand moments. It represents the "Harbour Light."

### Neutral
- **Ocean Depth** (#0a192f): The primary background color. Provides a calm, deep foundation.
- **Headland Blue** (#112240): Used for secondary surfaces and containers. Represents solid ground.
- **Coastal Mist** (#ccd6f6): Primary text color. High contrast for readability.
- **Deep Spray** (#8892b0): Secondary text for less critical information.

### Named Rules
**The 10% Beacon Rule.** Shoreline Teal is used sparingly—on ≤10% of any screen—to ensure it remains a high-signal indicator of action or safety.

## 3. Typography

**Display & Body Font:** Inter (with system-font fallbacks)

**Character:** Highly legible and professional. Inter’s geometric clarity reinforces the "Understandable" brand pillar without feeling overly clinical.

### Hierarchy
- **Display** (800, clamp(2.5rem, 8vw, 4.5rem), 1.1): Hero headlines. Should feel massive and immovable.
- **Body** (400, 1.25rem, 1.6): Primary reading. Max line length 65ch for focus.
- **Label** (600, 0.8rem, 2px letter-spacing): Caps. Used for "Launching Soon" tags and small navigational metadata.

## 4. Elevation

The system is moving away from ephemeral glassmorphism toward **Tonal Layering**. Depth is achieved through shifts in background color (Ocean Depth to Headland Blue) rather than shadows or blurs.

### Named Rules
**The Solid Foundation Rule.** Avoid translucency on primary containers. Surfaces should feel solid and opaque to reinforce the feeling of a "safe harbour."

## 5. Components

### Buttons
- **Character:** Tactile and Confident.
- **Shape:** Squared edges with a subtle radius (4px).
- **Primary:** Shoreline Teal background with Ocean Depth text. Bold weight.
- **States:** Solid hover shifts to a deeper teal; no transparency on hover.

### Cards / Containers
- **Corner Style:** Sturdy (8px).
- **Background:** Headland Blue (#112240).
- **Border:** Solid 1px border using a tinted variant of the accent color for definition.

### Navigation
- **Style:** Clear, uppercase typography. Anchored to the top with a solid Headland Blue background.

## 6. Do's and Don'ts

### Do:
- **Do** use solid background fills for all primary UI containers.
- **Do** maintain high contrast between text and background to satisfy "Understandable" goals.
- **Do** use nautical metaphors (waves, horizons) as grounding visual motifs.

### Don't:
- **Don't** use "hacker" clichés like matrix code or neon-on-black color schemes.
- **Don't** use border-left "stripes" as accents; use full, solid borders or background shifts.
- **Don't** rely on glassmorphism or high-blur transparency for critical UI elements; it feels too fragile for a "Sentinel."
