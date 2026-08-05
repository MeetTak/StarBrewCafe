# STARBREW CAFE — Website Project Brief

## About the Brand

**StarBrew Cafe** is a modern specialty cafe in Kishangarh, India.
Tagline: **"Enjoy Brewtiful Moments"**
Instagram: [@starbrew.kishangarh](https://www.instagram.com/starbrew.kishangarh/)

The cafe blends specialty coffee culture with a casual, youthful hangout vibe. It serves hot and iced coffees, sodas, smoothies, chai, and a food menu of cafe bites. The brand voice is warm, playful, and confident — never corporate or stiff.

---

## Design System

### Typography

| Role | Font Choice | Usage |
|------|------------|-------|
| **Headings** | Bold geometric sans-serif (Montserrat 700–900) | Page titles, section headers, menu category names. Must feel modern and authoritative — mirrors the circular "STARBREW" lockup. |
| **Body** | Clean sans-serif (Inter or Montserrat 400) | Menu descriptions, paragraphs, footer text. Highly legible at small sizes. |
| **Accent / Script** | Handwriting script matching the logo's cursive element | **USE SPARINGLY** — taglines ("Enjoy Brewtiful Moments"), pull-quotes, decorative callouts only. Never for menus, navigation, or body text. Adds artisanal warmth. |

### Color Palette

| Color | Hex (approx.) | Role |
|-------|---------------|------|
| **Black** | `#0A0A0A` | Primary backgrounds, text on light sections. Creates the moody urban canvas that makes food and green pop. |
| **Emerald Green** | `#2E7D32` | Logo green. Used for: CTAs / buttons, price highlights, hover states, decorative steam lines, active nav indicators, and accent borders. Represents freshness and life. |
| **Off-White / Cream** | `#FAF7F2` | Light section backgrounds, card surfaces. Warm, not clinical white. |
| **Warm Gray** | `#B0A89A` | Secondary text, dividers, subtle borders. |

Use black as the dominant tone (dark-mode-first aesthetic). Green is the accent — it should feel like a spark of life against the darkness. Never use green for large background fills.

### Photography & Imagery

- **Mood:** Cinematic, high-contrast, dramatic shadows with intentional key-light sources.
- **Focus:** Textures — latte foam swirls, rising steam, coffee bean close-ups, green leaves, condensation on cold drinks.
- **Treatment:** Dark / moody backgrounds. Desaturate slightly except for greens and warm food tones which stay vibrant.
- **No:** Stock-looking flat-lay photos, overly bright/white backgrounds, clip art, or generic cafe illustrations.

---

## Website Structure

### Pages / Sections

1. **Hero** — Full-viewport dark background with a hero image or looping video of the cafe. Large heading + script tagline + CTA ("View Our Menu" or "Visit Us").
2. **About** — Short brand story. Who StarBrew is, the vibe, what makes it different. Keep it to 2–3 short paragraphs max. Include an interior/ambiance photo.
3. **Menu** — Organized by category (Coffee, Cold Drinks, Chai & Tea, Bites). Each item: name, short description, price. Use a card or list layout with the emerald green for prices. Include a note that menu/prices are subject to change.
4. **Gallery** — Grid of moody, cinematic photos (interior, drinks, food, the space). Lightbox on click.
5. **Visit Us** — Location, hours, embedded Google Map, contact info (phone, Instagram link). Simple and direct.
6. **Footer** — Logo, social links, copyright, "Made with love in Kishangarh."

### Single-page scroll layout is preferred (sections with smooth-scroll nav), but can be multi-page if complexity requires it.

---

## Tech Stack

- **Framework:** Next.js (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion for scroll reveals, parallax, and hover effects
- **Fonts:** Google Fonts (Montserrat + a script font like Dancing Script or Pacifico)
- **Deployment:** Vercel
- **Images:** Use `next/image` with proper optimization. Placeholder blur for loading states.

---

## UX & Interaction Guidelines

- **Dark-mode-first:** The default experience is dark backgrounds. Light sections (like menu cards) float on top as contrast.
- **Scroll animations:** Subtle fade-up on section entry. Parallax on hero. No aggressive or distracting motion — the food is the star.
- **Hover states:** Buttons scale slightly + brighten green. Menu cards get a soft green border glow.
- **Mobile-first:** Design for phone screens first. The cafe's audience is young and mobile-native. Hamburger nav on mobile, horizontal nav on desktop.
- **Performance:** Target 90+ Lighthouse score. Lazy-load images below the fold. Minimize JS bundle.
- **Accessibility:** Ensure sufficient contrast ratios (especially green-on-black — test this). Alt text on all images. Keyboard-navigable.

---

## Brand Voice (for copy)

- Warm, confident, slightly playful. Like a friend who knows great coffee.
- Short sentences. No filler words.
- Use "brew" puns sparingly and only when they land naturally.
- Speak to the customer directly ("your morning ritual", "grab a seat").
- Never corporate-speak. Never "we leverage" or "our synergy."

---

## File & Code Conventions

- Use lowercase-kebab-case for file and folder names.
- Components in `src/components/`, pages in `src/app/`.
- Keep components small and focused. One component per file.
- Tailwind classes in the JSX — no separate CSS files unless absolutely necessary.
- Extract repeated color values to `tailwind.config.ts` as custom theme colors (`starbrew-black`, `starbrew-green`, `starbrew-cream`, etc.).
- Images in `public/images/` organized by section (`/hero`, `/menu`, `/gallery`, etc.).

---

## Reference Assets

Place brand assets in `public/brand/`:
- `logo.png` / `logo.svg` — StarBrew logo
- `logo-white.png` — White version for dark backgrounds
- Hero images and gallery photos

---

## Online Ordering System

### Customer-Facing Ordering Flow
- Menu browsable by category with add-to-cart, quantity controls, and item customizations (milk type, sugar level, hot/iced, size)
- Persistent cart (sidebar drawer on desktop, bottom sheet on mobile) with live subtotal
- Checkout: phone number → OTP verify → order summary → payment
- Payment via **Razorpay** (UPI, cards, net banking, wallets — all in one; best fit for India)
- Post-order confirmation screen with order ID and estimated prep time
- Order status tracking page: Received → Preparing → Ready for Pickup
- WhatsApp notification on order confirmation and when order is ready

### Admin Panel (protected `/admin` route, staff only)
- Live orders queue with ability to accept, advance status, or cancel orders
- Menu management: add/edit/remove items, toggle availability (mark sold out without deleting)
- Basic sales dashboard: orders today, revenue today, top items
- Access controlled by role (`admin` | `staff`) stored in the database

---

## User Accounts

### Auth Strategy
- **Primary:** Phone number + OTP (Supabase Auth) — phone-first makes sense for India
- **Secondary:** Google Sign-In as a convenience option
- No password-based auth — reduces friction and support overhead

### Account Features
- Order history with one-tap reorder
- Saved favorite items
- Profile: name, phone, email (optional)
- Loyalty points balance and tier badge

---

## Loyalty & Rewards Program

- Earn **1 point per ₹10 spent**
- Redeem points at checkout as a discount (50 points = ₹50 off)
- Three tiers:
  - **Regular** — 0–499 points
  - **Brewtiful** — 500–1499 points (5% bonus points per order)
  - **StarBrew Elite** — 1500+ points (10% bonus points + free drink on birthday)
- Birthday reward: free drink triggered automatically 1 day before birthday
- Points never expire as long as account is active within 12 months

---

## Notifications

| Channel | Trigger | Tool |
|---------|---------|------|
| WhatsApp | Order confirmed, order ready | WhatsApp Business API (Interakt or AiSensy) |
| Push (web) | Order status updates, promos | Firebase Cloud Messaging (FCM) |
| In-app | Loyalty milestone, birthday reward | Toasts / notification bell in nav |

---

## Reviews & Ratings

- Logged-in users can rate any item they have ordered (1–5 stars + optional text)
- Average stars shown on menu item cards
- Admin can flag and hide abusive reviews from the admin panel
- No anonymous reviews

---

## Tech Stack (Full)

| Layer | Tool |
|-------|------|
| Framework | Next.js 14+ (App Router) with TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Database | **Supabase** (Postgres + Row Level Security) |
| Auth | Supabase Auth (phone OTP + Google OAuth) |
| Payments | **Razorpay** |
| File Storage | Supabase Storage (menu images, brand assets) |
| Notifications | WhatsApp Business API + Firebase Cloud Messaging |
| State (cart) | **Zustand** |
| Fonts | Google Fonts (Montserrat + Dancing Script) |
| Deployment | Vercel |
| Images | `next/image` with Supabase Storage CDN or Cloudinary |

---

## Folder Structure (expanded)

```
src/
  app/
    (public)/          # home, menu, gallery, visit-us
    (auth)/            # login, verify-otp
    (account)/         # profile, order-history, loyalty
    order/             # cart, checkout, confirmation, track/[orderId]
    admin/             # orders queue, menu management, dashboard
  components/
    ui/                # buttons, inputs, cards, modals
    menu/              # MenuCard, CategoryTabs, CartDrawer, ItemCustomizer
    order/             # OrderStatusStepper, OrderConfirmation
    account/           # LoyaltyBadge, OrderHistoryItem
    admin/             # OrderQueueCard, MenuEditor, SalesDashboard
  lib/
    supabase.ts
    razorpay.ts
    whatsapp.ts
  hooks/               # useCart, useAuth, useOrder, useLoyalty
  store/               # Zustand cart + order store
  types/               # shared TypeScript types
public/
  brand/
  images/
    hero/ menu/ gallery/
```

---

## Phased Rollout

**Phase 1 — Core (ship first)**
- Brochure site (Hero, About, Menu display, Gallery, Visit Us)
- Online ordering with Razorpay
- Phone OTP auth
- WhatsApp order notifications
- Admin orders queue

**Phase 2 — Engagement**
- User account dashboard + order history
- Loyalty program + tier badges
- Item ratings & reviews
- Push notifications

**Phase 3 — Growth**
- Table reservations
- Admin analytics dashboard
- Promo/discount code system
- Birthday reward automation

---

## Out of Scope (for now)

- Blog or news section
- Multi-language support
- Delivery tracking (pickup-only for now)
- Third-party delivery integrations (Swiggy/Zomato)

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
