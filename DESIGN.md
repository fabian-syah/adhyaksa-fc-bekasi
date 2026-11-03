# DESIGN.md — Adhyaksa FC Bekasi Official Design System

## 1. Identity & Character
- **Subject**: Official Club Website of Adhyaksa FC Bekasi (Pegadaian Championship / Liga 2 Indonesia).
- **Home Ground**: Stadion Patriot Candrabhaga, Bekasi, Jawa Barat.
- **Design Archetype**: Modern Matchday Arena (High Energy, Athletic, Professional Broadcast Vibe).
- **Core Aesthetic**: Bold, authoritative, athletic, eliminating generic AI tropes (no rounded-full floating pill navbars, no generic purple/blue gradients, no non-functional elements, no em dashes).

## 2. Dials (Antislop Framework)
- **ENERGY**: 3 (High matchday intensity, sharp contrasts, dynamic stadium feel).
- **RHYTHM**: 3 (Varied section layouts: split match center, table grid, asymmetric news, card roster, sponsor wall).
- **MOTION**: 2 (Disciplined athletic reveals and micro-interactions, respecting reduced motion).

## 3. Color Palette
- **Forest Green (Club Identity)**: `#00933d` (Pitch Green), `#00732f` (Deep Green), `#052417` (Stadium Dark Green).
- **Club Gold (Prestige & Honor)**: `#f59e0b` / `#d97706` (Athletic Gold), `#fbbf24` (Highlight Gold).
- **Deep Base (Arena Dark)**: `#090e0c` (Base Surface), `#111a16` (Card Surface), `#182620` (Elevated Surface).
- **Borders & Dividers**: `rgba(255, 255, 255, 0.1)` (Subtle), `rgba(0, 147, 61, 0.35)` (Green Accent Border).
- **Text**: `#ffffff` (Primary Text), `#94a3b8` (Muted/Secondary), `#00d659` (Vibrant Pitch Status).

## 4. Typography
- **Headings & Display**: Anton (`--font-anton`) — condensed, impactful athletic lettering for scores, player numbers, and match titles.
- **Body & Interface**: Plus Jakarta Sans (`--font-plus-jakarta`) — crisp, modern legibility for match reports, table standings, metadata, and buttons.
- **Rules**:
  - No decorative spaced em dashes.
  - No all-caps without functional athletic purpose.
  - Numbers in tabular figures (`tabular-nums`) for timers and standings.

## 5. Official Partners Hierarchy
- **Official Sponsors**:
  - Main Tier: **BRI** (Bank Rakyat Indonesia), **Bank Mandiri**
  - Partner Tier: **bale**, **Siloam Hospitals**, **PSTORE**, **AirAlam**, **RS EMC Pekayon**
- **Official Apparel**:
  - **CALMA**

## 6. Layout & Information Architecture
1. **Matchday Top Strip**: Next match teaser + official shop & ticket shortcut.
2. **Athletic Club Header**: Official club crest, full-width desktop bar, mobile responsive drawer, active states.
3. **Hero Matchday Arena**: Bold matchday announcement, ticket action, stadium background with athletic framing.
4. **Match Centre & League Standings**:
   - Next Fixture countdown with opponent details & venue.
   - Latest Match result with scoreline.
   - Pegadaian Championship league table preview with Adhyaksa FC standing.
5. **Tim Utama (Squad Roster)**: Position tabs (Semua, Kiper, Bek, Gelandang, Penyerang) with squad numbers and real player photos.
6. **Berita & Pengumuman Resmi (Club News)**: Authentic football press releases, match previews, and announcements.
7. **Official Partners & Apparel Showcase**: Structured sponsor wall with high-fidelity vector emblems, golden frame accents, and prepared folder slots (`/images/sponsors/`).
8. **Pro Club Footer**: Official crest, stadium address, social media links, sponsor badge strip, copyright and legal.
