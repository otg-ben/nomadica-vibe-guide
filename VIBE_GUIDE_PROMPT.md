# Vibe Guide Build Prompt

Use this document to kick off a new vibe guide for any national forest or overland destination. The template, components, and rendering are fixed — only the content file changes. Your job is to populate `data/[location].ts` following the structure below.

---

## Step 1 — Get the facts from the human first

Before researching anything, ask the user to confirm:

- What vehicle types does this location suit? (AWD/Crossover, Sprinter/Van, Stock 4x4, Modified 4x4)
- What are the best seasons?
- What are the 3–4 anchor experiences (the defining things to do or see)?
- Are there any OTG (Overland Trail Guides) routes that cover this location? Get the exact URL.
- What are the actual go-to spots for stargazing, swimming, fishing, hiking? Do not guess these — wrong specific claims are worse than no claims.
- Are there any open/active fire or trail closures worth calling out?
- What are the nearest fuel and resupply towns?

**Do not proceed with writing until you have answers to vehicle types, seasons, and anchor experiences. Everything else can be researched, but those three shape the whole guide.**

---

## Step 2 — Research sources, in priority order

Run searches across these sources before writing any section. Do not use training data as a primary source for specific claims (trail names, spot recommendations, fishing conditions, crowd levels). Use it only for general geographic and ecological context.

| Source | Best for |
|---|---|
| `fs.usda.gov/[forest-name]` | Official campgrounds, OHV networks, road conditions, closures, permit requirements |
| `overlandtrailguides.com` | OTG route names, distances, durations, GPX links, hero images |
| `advrider.com` | Moto/dual-sport road intel, trip reports, specific trail conditions |
| `overlandbound.com` | Overland trip reports, camping spots, road network reviews |
| `ridersplanet-usa.com` | OHV trail ratings, difficulty, conditions |
| `alltrails.com` | Trail names, distances, elevation, recent conditions |
| `go-astronomy.com` | Bortle class rating for the forest |
| `wildlife.ca.gov` / `wildlife.ca.gov/fishing` | Fishing regulations, stocked lakes, species |
| `campendium.com`, `thedyrt.com`, `hipcamp.com` | Dispersed camp reviews, crowd levels, recent conditions |
| `wikipedia.org` | History, geography, tribal nations, forest establishment |
| `commons.wikimedia.org` | Public domain hero images for history cards |

**For each specific claim** (a named spot being good for X, a trail being rated Y, a lake being stocked), note which source it came from. If you can't find a source, flag it for human review rather than inventing it.

---

## Step 3 — The data structure

Create `data/[location].ts` matching this interface exactly. All fields are required unless marked optional (`?`).

```ts
export const [location]: VibeGuide = {
  title: '',           // e.g. 'Mendocino National Forest'
  badge: '',           // e.g. 'National Forest · Northern CA'
  quote: '',           // 1–2 sentence hook. Plain voice. No em dashes. No AI slop.

  vehicleRatings: [
    { type: 'AWD / Crossover', rating: 'Good' },    // Best | Good | Fair | Inaccessible | Variable
    { type: 'Sprinter / Van',  rating: 'Good' },
    { type: 'Stock 4x4',       rating: 'Best' },
    { type: 'Modified 4x4',    rating: 'Best' },
  ],

  seasonRatings: [
    { season: 'Spring', rating: 'Good',     description: '' },
    { season: 'Summer', rating: 'Best',     description: '' },
    { season: 'Fall',   rating: 'Good',     description: '' },
    { season: 'Winter', rating: 'Variable', description: '' },
  ],

  crowdLevel: 4,  // 1 (empty) to 9 (packed). Be honest. Source from trip reports if possible.

  darkSkies: {
    rating: 3,    // 1–5. Source from go-astronomy.com Bortle class: Class 1=5, Class 2=5, Class 3=4, Class 4=3, Class 5+=2
    description: '',
  },

  attributeTags: [
    { icon: '🛣️', label: 'Softroading' },
    // Add 4–6 tags that define this location. Icons and labels only.
  ],

  overview: [
    // 3–5 short paragraphs. See writing rules below.
    // Para 1: The defining fact about this place. Why it's different.
    // Para 2: Landscape/terrain. What it looks and feels like.
    // Para 3: Road network. What vehicles can do here.
    // Para 4: Key hubs — main lake/river/town, camping situation, entry points.
  ],

  kbyg: [
    // 4–8 items. Mix of warning, info, good.
    // warning: closures, hazards, permit requirements, seasonal access issues
    // info: logistics, timing, crowd patterns, fuel stops
    // good: free access, no reservation needed, notable perks
    { type: 'warning', text: '' },
    { type: 'info',    text: '' },
    { type: 'good',    text: '' },
  ],

  popularAreas: [
    // 2–4 named sub-areas or hubs within the forest/location.
    // Each gets a description paragraph and ideally a photo.
    // Source descriptions from FS website + trip reports.
    {
      name: '',
      placeId: '',
      photo: '',   // local path preferred: '/images/[name].jpg'
      description: '',
    },
  ],

  roadNetwork: {
    prose: '',
    // Cover: what makes this network distinctive, general difficulty,
    // vehicle recommendations, seasonal conditions, key logistics (fuel, closures).
    vehicleRatings: [
      { type: 'AWD / Crossover', rating: 'Good' },
      { type: 'Sprinter / Van',  rating: 'Good' },
      { type: 'Stock 4x4',       rating: 'Best' },
      { type: 'Modified 4x4',    rating: 'Best' },
    ],
    routes: [
      // Named roads/corridors only. Source from FS maps or OTG routes.
      { name: '', description: '' },
    ],
  },

  overlandRoutes: [
    // OTG routes only. Get exact URLs and hero images from overlandtrailguides.com.
    // Do not include third-party routes without confirming with user first.
    {
      name: '',
      distance: '',
      duration: '',
      vehicle: '',
      vehicles: [],
      season: '',
      description: '',
      link: '',    // exact URL from overlandtrailguides.com — verify it returns 200
      photo: '',   // Wix CDN URL from OTG website, or local image
    },
  ],

  camping: {
    prose: '',
    // Cover: dispersed rules, best corridors, crowd patterns, developed vs. dispersed tradeoffs.
    dispersedSpots: [
      // 3–5 named dispersed spots. Source from trip reports or user knowledge.
      // Do not invent spot names. If you don't have sourced spots, ask the user.
      { name: '', description: '', placeId: '' },
    ],
    developedCampgrounds: [
      // Named FS campgrounds only. Verify on fs.usda.gov.
      { name: '', description: '', placeId: '' },
    ],
  },

  anchorExperiences: [
    // 3–5 defining experiences. These are the things that make this location worth the trip.
    // Each gets a photo, vehicle list, elevation, best season window, description, and alert.
    // Source descriptions from trip reports + FS + OTG where possible.
    {
      id: '',
      name: '',
      icon: '',
      photo: '',
      vehicles: [],
      elevation: '',       // e.g. 'High (6,873 ft)' or 'Low / mid elevation'
      peakSeason: '',      // e.g. 'May–Oct'
      seasons: { spring: 'Good', summer: 'Prime', fall: 'Prime', winter: 'Limited' },
      description: '',
      alert: { type: 'warning', text: '' },  // or type: 'good'
      placeId: '',
    },
  ],

  recOpportunities: [
    // Cover the main recreational categories relevant to this location.
    // Standard set: OHV & Moto, Lakes/Rivers/Swimming, Dark Skies, Fishing, Hiking.
    // Add or remove based on what's actually relevant. Drop categories that don't apply.
    // Badge options: 'Major network' | 'Summer highlight' | 'Fall highlight' |
    //   'Limited opportunities' | 'Not a hiking destination' | 'Bortle Class 2' |
    //   'Fair by CA standards' | or any custom string
    {
      icon: '',
      name: '',
      badge: '',
      description: '',
      placeIds: [],
    },
  ],

  historyCards: [
    // 2–3 cards. Cover indigenous history first, then notable landmarks or events.
    // For indigenous history: always name the specific tribal nation(s), not generic terms.
    // Source from Wikipedia, tribal nation websites, FS cultural resources pages.
    // Photos: local images preferred. Wikimedia Commons for historical photos (check resolution — minimum ~600px wide).
    {
      title: '',
      photo: '',   // optional
      body: [''],  // array of paragraphs
      placeId: '', // optional
    },
  ],

  watchBeforeYouGo: [
    // YouTube videos only. Prioritize OTG content, then community trip reports.
    // Get youtubeId from the video URL: youtube.com/watch?v=[youtubeId]
    { title: '', source: 'Overland Trail Guides', youtubeId: '' },
  ],

  places: [
    // Every placeId referenced anywhere in the guide must have an entry here.
    // lat/lng should be accurate. Use Google Maps or OSM to verify coordinates.
    { id: '', name: '', lat: 0, lng: 0, description: '' },
  ],
}
```

---

## Step 4 — Writing rules (non-negotiable)

These apply to every field with prose content.

**Never use:**
- Em dashes ( — ). Use a period or rewrite the sentence.
- "One of the most/best..." as an opener
- "sweeping views", "spectacular", "stunning"
- "defines the character of", "shapes everything about"
- "genuinely good/great/special"
- "in equal measure", "at its best", "rival anything"
- Any construction that reads like an AI wrote it

**Do use:**
- Short, declarative sentences
- Specific facts over vague praise — distances, elevations, species, dates
- Second person where it fits naturally ("you can", "go Tuesday") — but don't force it
- The payoff first, context second
- Plain verbs: "runs", "climbs", "drops", "gets busy", "closes in November"

**Voice check:** Read it out loud. If it sounds like a brochure or a Wikipedia article, rewrite it. It should sound like a knowledgeable friend giving you the real version.

---

## Step 5 — What to flag for human review

Before submitting the draft, list every claim that:

- Names a specific spot as good for an activity (stargazing, swimming, fishing, etc.) **without a found internet source**
- States a difficulty rating, crowd level, or season window based on training data alone
- Uses a photo from an external URL (Flickr, Wikimedia, etc.) that hasn't been checked for license or resolution
- Refers to an OTG route link that hasn't been confirmed to return a 200 response

Format the flag list as a simple bullet list at the end of your draft so the user can review before anything goes live.

---

## Step 6 — Images

**Local images** (in `public/images/`) are always preferred over external URLs.

For hero images on history cards and popular areas, check in this order:
1. User-provided photos
2. Wikimedia Commons (verify resolution — minimum 800px wide for hero cards)
3. Flickr with Creative Commons license
4. OTG Wix CDN (for OTG route cards only)

Never use images from sites with hotlink protection or unknown licensing for production. Flag any temporary external URLs for replacement.

---

## Step 7 — Places array

Every `placeId` used anywhere in the data must have a corresponding entry in the `places` array with accurate coordinates. Use Google Maps or OpenStreetMap to verify lat/lng before adding. Do not guess coordinates.
