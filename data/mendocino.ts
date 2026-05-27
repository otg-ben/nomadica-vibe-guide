export type SeasonRating = 'Best' | 'Good' | 'Fair' | 'Inaccessible' | 'Variable'
export type VehicleRating = 'Best' | 'Good' | 'Fair' | 'Inaccessible' | 'Variable'
export type AnchorSeasonRating = 'Prime' | 'Good' | 'Variable' | 'Limited' | 'Not recommended'
export type CrowdLevel = number // 1–9
export type AlertType = 'warning' | 'info' | 'good'

export interface Place {
  id: string
  name: string
  lat: number
  lng: number
  description?: string
}

export interface AnchorExperience {
  id: string
  name: string
  icon: string
  photo?: string
  vehicles?: string[]
  elevation: string
  peakSeason: string
  seasons: { spring: AnchorSeasonRating; summer: AnchorSeasonRating; fall: AnchorSeasonRating; winter: AnchorSeasonRating }
  description: string
  alert: { type: 'warning' | 'good'; text: string }
  placeId: string
}

export interface RecOpportunity {
  icon: string
  name: string
  badge?: string
  description: string
  placeIds: string[]
}

export interface KBYGItem {
  type: AlertType
  text: string
}

export interface OverlandRoute {
  name: string
  distance: string
  duration: string
  vehicle: string
  vehicles?: string[]
  season: string
  description: string
  link?: string
}

export interface PopularArea {
  name: string
  description: string
  placeId?: string
  photo?: string
}

export interface RoadRoute {
  name: string
  description: string
}

export interface CampSpot {
  name: string
  description: string
  placeId: string
}

export interface VibeGuide {
  title: string
  badge: string
  quote: string
  vehicleRatings: { type: string; rating: VehicleRating }[]
  seasonRatings: { season: string; rating: SeasonRating; description: string }[]
  crowdLevel: CrowdLevel
  darkSkies: { rating: number; description: string }
  attributeTags: { icon: string; label: string }[]
  overview: string[]
  kbyg: KBYGItem[]
  popularAreas: PopularArea[]
  roadNetwork: {
    prose: string
    vehicleRatings: { type: string; rating: VehicleRating }[]
    routes: RoadRoute[]
  }
  overlandRoutes: OverlandRoute[]
  camping: {
    prose: string
    dispersedSpots: CampSpot[]
    developedCampgrounds: { name: string; description: string; placeId?: string }[]
  }
  anchorExperiences: AnchorExperience[]
  recOpportunities: RecOpportunity[]
  history: string[]
  historyPlaceIds: string[]
  watchBeforeYouGo: { title: string; source: string; youtubeId?: string }[]
  places: Place[]
}

export const mendocino: VibeGuide = {
  title: 'Mendocino National Forest',
  badge: 'National Forest · Northern CA',
  quote:
    "One of California's most accessible national forests. Mendocino NF is an overlander's paradise packed with a dense network of soft-roading dirt trails and ridge-top drives that sees a fraction of the crowds you'll find in busier locations like the central and eastern Sierra.",
  vehicleRatings: [
    { type: 'AWD / Crossover', rating: 'Good' },
    { type: 'Sprinter / Van', rating: 'Good' },
    { type: 'Stock 4x4', rating: 'Best' },
    { type: 'Modified 4x4', rating: 'Best' },
  ],
  seasonRatings: [
    { season: 'Spring', rating: 'Good', description: '' },
    { season: 'Summer', rating: 'Best', description: '' },
    { season: 'Fall', rating: 'Good', description: '' },
    { season: 'Winter', rating: 'Variable', description: '' },
  ],
  crowdLevel: 4,
  darkSkies: {
    rating: 4,
    description: '',
  },
  attributeTags: [
    { icon: '🛣️', label: 'Softroading' },
    { icon: '⛺', label: 'Dispersed camping' },
    { icon: '🐾', label: 'Wildlife viewing' },
    { icon: '📅', label: '4-season access' },
    { icon: '🏍️', label: 'OHV network' },
    { icon: '🚣', label: 'Paddling' },
  ],
  overview: [
    "Mendocino National Forest holds a distinction no other California national forest can claim: it is the only one not crossed by a paved road or highway. That single fact shapes everything about the experience here. You won't drift through on the way to somewhere else. You have to mean it — and that intention is exactly what keeps the crowds away and the solitude intact.",
    "The landscape shifts dramatically as you gain elevation. At the lower edges, the forest opens into blue oak savanna and rolling grass hills, golden in summer, green after the winter rains. Climb higher and the oaks give way to ponderosa pine, then mixed conifer — Douglas fir, white fir, black oak — the air cooling noticeably as the ridges come into view. The upper forest has the feel of true backcountry: wide skies, long views, and the kind of quiet you don't find within two hours of San Francisco.",
    "This is a soft-roader's paradise. More than 98% of the roads in the forest are graded dirt and gravel — accessible to most vehicles without lockers or skid plates. If you're just getting into overlanding, Mendocino is one of the best places in California to find your footing. The roads are forgiving, the forest is expansive, and you can explore for days without running out of new ground to cover.",
    "Lake Pillsbury anchors the social heart of the forest — the place most people head first, with camping right on the water and no reservation required. The Eel River corridor below Scott Dam offers some of the best riverside camping in the region, popular for summer swimming and just hanging out along the water. And for the moto crowd, the OHV network is genuinely extensive — one of the largest in Northern California. Ukiah and Willits are your best supply stops coming in from the west. Covelo, tucked into Round Valley on the eastern edge, is the quieter gateway — a small ranching town with deep ties to the land and to the Wailaki and Yuki peoples who have called this valley home for thousands of years.",
  ],
  kbyg: [
    { type: 'warning', text: 'Two significant fires have burned through parts of the forest in recent years. Some areas carry heavy deadfall and remain under closure — others are entirely untouched. Check current closure maps before finalizing your route.' },
    { type: 'warning', text: 'Lake Pillsbury water levels are significantly down due to structural concerns with Scott Dam — adjust boating expectations accordingly.' },
    { type: 'warning', text: 'Fire restrictions are typically active June–October — check Mendocino NF alerts before departure.' },
    { type: 'info', text: 'No paved road passes through the forest. Plan your route and download offline maps before you lose cell signal.' },
    { type: 'info', text: 'OHV traffic peaks on weekends around Stonyford and the Lake Pillsbury area — go Tuesday–Thursday for a quieter experience.' },
    { type: 'good', text: 'No fee or permit required for dispersed camping or day use anywhere in the forest.' },
  ],
  popularAreas: [
    {
      name: 'Lake Pillsbury Basin',
      placeId: 'lake-pillsbury-launch',
      photo: '/images/lake-pillsbury-kayak.jpg',
      description: "Lake Pillsbury is the social hub of the forest and the first destination for most visitors. The lake was once a powerboat destination, but water levels have been intentionally reduced due to structural concerns with Scott Dam — expect a quieter, more paddling-and-shoreline scene than years past. What it hasn't lost is the camping. Numerous developed campgrounds ring the lake, and it gets genuinely busy through the summer — midweek visits feel like a different place entirely. The campgrounds also serve as popular basecamps for the Upper Lake OHV network that fans out across the surrounding ridges. Target shooting at the old airstrip at the southern end of the lake is a well-known local tradition. And the fishing holds up: CDFW stocks the lake with rainbow trout each fall and spring, and it carries a strong largemouth bass population.",
    },
    {
      name: 'Eel River Corridor — Below Scott Dam',
      placeId: 'eel-river-scott-dam',
      photo: '/images/forest-camp.jpg',
      description: "The Eel River below Scott Dam is one of those spots that used to be known only to locals — and increasingly isn't. Word has gotten out, and for good reason: the water is warm, the swimming holes are excellent, and you can set up a riverside camp and walk twenty feet to the water. It gets busy, especially on weekends from Memorial Day through Labor Day — go Tuesday through Thursday if you're after solitude. The shoulder season has a completely different character: fewer people, cooler water, and the specific quiet that comes when summer crowds disappear.",
    },
    {
      name: 'Stonyford',
      placeId: 'stonyford-svra',
      photo: '/images/tacoma-m1.jpg',
      description: "Stonyford anchors the eastern end of the forest and serves as the primary staging area for the Stony Creek OHV network — one of the largest dedicated trail systems in Northern California. Multiple developed campgrounds sit near the trailhead, and the area buzzes with moto activity when trails are open. Whether you're on a dirt bike, dual-sport, ATV, or side-by-side, this is a destination in its own right. The trail network ranges from beginner-friendly doubletrack to genuinely technical singletrack. Come midweek if you want the trails to yourself.",
    },
  ],
  roadNetwork: {
    prose: "More than 98% of the road network in Mendocino NF is unpaved — wide graded gravel on the primary corridors, narrowing to rougher dirt as you push into the interior. The vast majority is manageable in something like a Subaru Outback or a stock RAV4. The OHV trail network includes some moderate-difficulty routes for those looking to push harder, and a handful of non-OHV roads in the forest also qualify as moderate. Surface conditions shift significantly with rainfall — roads that are easy in September can be impassable by December. Upper elevations close seasonally with snow, typically November through April.",
    vehicleRatings: [
      { type: 'AWD / Crossover', rating: 'Good' },
      { type: 'Sprinter / Van', rating: 'Good' },
      { type: 'Stock 4x4', rating: 'Best' },
      { type: 'Modified 4x4', rating: 'Best' },
    ],
    routes: [
      { name: 'M1', description: 'The primary north-south spine of the forest. Runs from Upper Lake in the south through the Pillsbury Basin, past Hull Mountain, along the Black Butte and Eel Rivers near Black Butte River Ranch, and up to the far northern section near Indian Dick Work Station. Connects the major hubs: Middle Creek Campground and OHV Staging Area, Pillsbury Basin, Hull Mountain, and the confluence of the Black Butte and Eel Rivers. The backbone of any Mendocino trip and the route the BDT follows.' },
      { name: 'FH7 / Hwy 162', description: 'The major east-west connector on the northern end. Hwy 162 transitions to FH7 at the forest boundary — wide graded gravel from Covelo westward. The primary gateway from the east and the route that gets you out to the Black Butte River Ranch area.' },
      { name: 'M10', description: 'East-west connector crossing the middle of the forest, linking the western side to the Letts Lake area — which connects into the greater Stonyford trail network to the south. One of the few roads that traverses the full width of the forest.' },
      { name: 'M6', description: 'Runs through the Game Refuge — one of the most scenic corridors in the entire forest. Follows the headwaters of the Eel River with riverside camp access along the way. See Anchor Experiences.' },
      { name: 'Potter Valley Rd', description: 'The primary western gateway. The most common entry route — Hwy 101 to Ukiah, east through Potter Valley, into the forest toward Lake Pillsbury. Where most first-timers come in.' },
    ],
  },
  overlandRoutes: [
    {
      name: 'Mendocino Backcountry Discovery Trail',
      distance: '167 mi',
      duration: '2–3 days',
      vehicle: 'Soft-road / Stock 4x4',
      vehicles: ['AWD / Crossover', 'Sprinter / Van', 'Stock 4x4'],
      season: 'Late Apr – Nov',
      description: 'The original California BDT — first released in the mid-1990s, over a decade before the KTM Backcountry Discovery Routes. Runs the entire length of M1 from Upper Lake south to Covelo north, passing through Hull Mountain, Bald Mountain, and the Black Butte and Eel Rivers. One of the best introductory overland routes in California — wide dirt and gravel roads, epic scenery, no technical surprises.',
      link: '#',
    },
    {
      name: 'Mendocino Grand Circuit',
      distance: '300+ mi',
      duration: '4–5 days',
      vehicle: 'Stock 4x4+',
      vehicles: ['Stock 4x4'],
      season: 'May – Oct',
      description: 'The full exploration of the forest — visits all four corners including the remote northern boundary, the Game Refuge, the Eel River corridor, fire lookouts, and the Hull Mountain summit. Takes everything the BDT covers and extends it deep into the lesser-traveled edges of the forest.',
      link: '#',
    },
  ],
  camping: {
    prose: "Dispersed camping is generally permitted throughout the forest — no fee, no reservation, no permit required. This is one of California's most liberal dispersed camping environments and a big part of why the forest has a loyal following. Pull off when you find a spot that works, pack out what you pack in.",
    dispersedSpots: [
      { name: 'Skunk Rock', description: 'A favorite dispersed pull-off in the northern forest with good access off the main corridor.', placeId: 'skunk-rock' },
      { name: 'Eel Riverfront Camp', description: 'Riverside dispersed camp right on the Eel — walk-to swimming access all summer.', placeId: 'eel-riverfront-camp' },
      { name: 'Horse Creek Camp', description: 'Remote and quiet — upper Eel River headwaters area near the Game Refuge.', placeId: 'horse-creek-camp' },
      { name: 'Ridge Camp (Anthony Peak)', description: 'A spectacular camp on an exposed ridgeline with sweeping views of the surrounding coast ranges. One of the best stargazing spots in the forest.', placeId: 'ridge-camp' },
    ],
    developedCampgrounds: [
      { name: 'Oak Flat Campground', description: 'Best visited during the shoulder seasons — great chance to spot elk grazing throughout Gravelly Valley, especially during the week when the crowds are away. Comes with a fee.', placeId: 'oak-flat' },
      { name: 'Board Tree Campground', description: 'A free campground with expansive views of the mountains to the south and west. Quieter than the lake campgrounds and a good base for the surrounding road network.', placeId: 'board-tree' },
    ],
  },
  anchorExperiences: [
    {
      id: 'hull-mountain',
      name: 'Hull Mountain',
      icon: '⛰️',
      photo: '/images/summit-vista.jpg',
      vehicles: ['AWD / Crossover', 'Sprinter / Van', 'Stock 4x4'],
      elevation: 'High (6,873 ft)',
      peakSeason: 'May–Oct',
      seasons: { spring: 'Good', summer: 'Prime', fall: 'Prime', winter: 'Limited' },
      description: "One of the most popular and most photographed destinations in the forest. M1 climbs from the valley floor through open oak woodland and into mixed pine, the views widening at every turn until the summit ridge opens across the Coast Ranges and down to Lake Pillsbury. The final stretch gets rockier — AWDs and Crossovers should stay left to avoid the rock garden near the top. At the summit, the fire lookout is long gone but the old concrete piers and wooden sign remain. The 360° views rival anything in the forest.",
      alert: { type: 'warning', text: 'Snow closes the upper section November through April most years.' },
      placeId: 'hull-mountain',
    },
    {
      id: 'anthony-peak',
      name: 'Anthony Peak Lookout',
      icon: '🔭',
      photo: '/images/anthony-peak-lookout.jpg',
      vehicles: ['AWD / Crossover', 'Sprinter / Van', 'Stock 4x4'],
      elevation: 'High (6,954 ft)',
      peakSeason: 'Jun–Oct',
      seasons: { spring: 'Limited', summer: 'Prime', fall: 'Prime', winter: 'Limited' },
      description: "The highest point in the forest and the site of the last manned fire lookout in Mendocino NF. On a clear day you can see the Pacific to the west and Lassen Peak to the east — a genuine 360° view from a structure that still feels earned when you pull up. After dark, Anthony Peak is one of the best stargazing spots in Northern California — minimal light pollution, elevation above valley haze, wide open skies in every direction.",
      alert: { type: 'warning', text: 'Snow closes the upper section November through April most years.' },
      placeId: 'anthony-peak',
    },
    {
      id: 'm6-corridor',
      name: 'M6 Game Refuge Corridor',
      icon: '🌿',
      photo: '/images/forest-camp.jpg',
      vehicles: ['AWD / Crossover', 'Sprinter / Van', 'Stock 4x4'],
      elevation: 'Mid elevation',
      peakSeason: 'Spring & Fall',
      seasons: { spring: 'Prime', summer: 'Good', fall: 'Prime', winter: 'Variable' },
      description: "One of the most scenic stretches of road in the entire forest. M6 winds through the Game Refuge — a protected area where hunting has long been prohibited, and the wildlife knows it. Bear sightings are common in this part of the forest; a mama bear with cubs is a regular report from those staying at Horse Creek Camp. The road follows the headwaters of the Eel River through open meadows and oak-lined corridors with long views into the surrounding ridges. Early mornings in spring and fall are when this drive really delivers.",
      alert: { type: 'good', text: "One of Mendocino NF's most rewarding and undervisited corridors." },
      placeId: 'm6-corridor',
    },
    {
      id: 'gravelly-valley',
      name: 'Elk Viewing — Gravelly Valley / Pillsbury Basin',
      icon: '🦌',
      photo: '/images/elk-gravelly-valley.jpg',
      elevation: 'Low / mid elevation',
      peakSeason: 'Oct–Mar',
      seasons: { spring: 'Limited', summer: 'Limited', fall: 'Prime', winter: 'Good' },
      description: "The Tule elk herd descends from the high country in fall and grazes throughout Gravelly Valley and the Pillsbury Basin through the off-season. With lake levels reduced in recent years, the herd now regularly forages across the exposed meadows where the water has receded — creating some unexpectedly close viewing opportunities right from the main road. Best in the off-season when the crowds are away. Oak Flat is a great base for elk viewing; they're commonly spotted grazing throughout the valley.",
      alert: { type: 'good', text: 'Best shoulder-season wildlife experience in Northern California.' },
      placeId: 'gravelly-valley',
    },
  ],
  recOpportunities: [
    {
      icon: '🏍️',
      name: 'OHV & moto trails',
      badge: 'Major network',
      description: 'Mendocino NF has one of the most extensive OHV networks in Northern California, split across two distinct systems. The Upper Lake District fans out from the Lake Pillsbury area with hundreds of miles of signed trails for dirt bikes and dual-sport riders across open ridge country. The Stonyford / Stony Creek SVRA anchors the eastern end — a dedicated staging area with facilities for bikes, ATVs, and side-by-sides. Both networks range from beginner-friendly doubletrack to challenging technical singletrack. Weekend traffic is significant — midweek visits are noticeably quieter.',
      placeIds: ['upper-lake-ohv', 'stonyford-svra'],
    },
    {
      icon: '🏊',
      name: 'Swimming holes',
      badge: 'Summer highlight',
      description: 'The Eel River is the star. Below Scott Dam the river runs through a canyon with excellent swimming access right from dispersed campsites along the bank — set up camp, walk to the water. The Eel River headwaters area offers colder, cleaner water with more solitude. Best June through September when flows drop and temperatures climb.',
      placeIds: ['eel-river-scott-dam', 'eel-river-headwaters'],
    },
    {
      icon: '🚣',
      name: 'Paddling — kayak, canoe & SUP',
      description: 'Lake Pillsbury is the main paddling destination — flatwater, no reservation required, shore camping available. Water levels have been low in recent years so check conditions before making the trip. Some visitors run SUP on the Eel River below Scott Dam when flows allow — calm stretches between swimming holes make for a mellow float.',
      placeIds: ['lake-pillsbury-launch', 'eel-river-sup'],
    },
    {
      icon: '🌌',
      name: 'Dark skies & stargazing',
      badge: '4 / 5 rating',
      description: 'The upper forest ridges are exceptional for stargazing — minimal light pollution, elevations above 5,000 ft, and wide open skies. Anthony Peak is the premier spot. Ridge Camp near Anthony Peak is one of the best places in the forest to sleep under the stars. The M1 ridge from Hull Mountain northward is consistently dark all along the upper elevations. Summer and fall offer the clearest skies and warmest nights.',
      placeIds: ['anthony-peak', 'ridge-camp', 'm1-ridge'],
    },
    {
      icon: '🎣',
      name: 'Fishing',
      badge: 'Good opportunities',
      description: 'Better than its reputation. Lake Pillsbury is stocked by CDFW with rainbow trout each fall and spring, and holds a strong largemouth bass population — including some genuine slabs. The Eel River holds steelhead seasonally but access and regulations are complex. Letts Lake, in the middle of the forest, is another stocked option worth knowing about.',
      placeIds: ['lake-pillsbury-launch'],
    },
    {
      icon: '🥾',
      name: 'Hiking',
      badge: 'Not a hiking destination',
      description: "Mendocino NF is not known for hiking — the draw here is the roads, not the trails. Snow Mountain Wilderness has routes but they're unremarkable by Northern California standards. One worth knowing about is Bloody Rock — a short, accessible hike to an outcrop with significant history tied to the Wailaki people and the forced relocations of the 1860s. More place of meaning than demanding trail, but worth the stop if you're in the area.",
      placeIds: ['bloody-rock'],
    },
  ],
  history: [
    "The Round Valley area near Covelo was home to the Wailaki, Yuki, Nomlaki, and Pomo peoples for thousands of years before the 1860s forced relocations — one of the most brutal episodes in California's history. The Round Valley Reservation remains an active tribal community today. Bloody Rock, within the forest, is one of several sites tied directly to that history.",
    "The forest is scattered with traces of early pioneer settlement — historic homesteads and cabins from families who ranched and logged these hills in the late 1800s and early 1900s. The Atchison Cabin is one of the better-known examples, though its condition post-fire should be confirmed before planning a visit. The forest itself was established in 1907 by Theodore Roosevelt, originally as the Stony Creek Reserve.",
  ],
  historyPlaceIds: ['bloody-rock', 'anthony-peak', 'atchison-cabin'],
  watchBeforeYouGo: [
    { title: 'Mendocino Backcountry Discovery Trail', source: 'Overland Trail Guides', youtubeId: 'r0kc7EEW8kU' },
    { title: 'Mendocino National Forest', source: 'Community pick', youtubeId: 'u19uyFuUK28' },
    { title: 'Mendocino National Forest', source: 'Community pick', youtubeId: 'hKQm4P9gYTY' },
  ],
  places: [
    { id: 'hull-mountain', name: 'Hull Mountain', lat: 39.5619, lng: -122.9284, description: 'Summit ridge at 6,873 ft — one of the most photographed destinations in the forest.' },
    { id: 'anthony-peak', name: 'Anthony Peak Lookout', lat: 39.8614, lng: -122.9764, description: 'Highest point in the forest at 6,954 ft. Last manned lookout. Premier stargazing.' },
    { id: 'gravelly-valley', name: 'Gravelly Valley — Elk Viewing', lat: 39.4850, lng: -122.9200, description: 'Tule elk winter range. Best Oct–Mar, early mornings.' },
    { id: 'm6-corridor', name: 'M6 Game Refuge Corridor', lat: 39.6500, lng: -122.8800, description: 'Scenic corridor through the Game Refuge along the Eel headwaters.' },
    { id: 'skunk-rock', name: 'Skunk Rock', lat: 39.719788, lng: -123.052419, description: 'Favorite dispersed camping pull-off in the northern forest.' },
    { id: 'eel-riverfront-camp', name: 'Eel Riverfront Camp', lat: 39.407298, lng: -122.989393, description: 'Riverside dispersed camp — walk-to swimming access.' },
    { id: 'horse-creek-camp', name: 'Horse Creek Camp', lat: 39.525399, lng: -122.851802, description: 'Remote upper Eel River headwaters camp near the Game Refuge.' },
    { id: 'ridge-camp', name: 'Ridge Camp (Anthony Peak)', lat: 39.839420, lng: -122.956370, description: 'Exposed ridgeline camp with sweeping coast range views. Exceptional stargazing.' },
    { id: 'oak-flat', name: 'Oak Flat Campground', lat: 39.443522, lng: -122.953223, description: 'Developed campground — great base for elk viewing in Gravelly Valley. Fee required.' },
    { id: 'board-tree', name: 'Board Tree Campground', lat: 39.654320, lng: -122.836110, description: 'Free campground with expansive mountain views to the south and west.' },
    { id: 'upper-lake-ohv', name: 'Upper Lake OHV Trailhead', lat: 39.3800, lng: -122.9100, description: 'Northern OHV network staging area.' },
    { id: 'stonyford-svra', name: 'Stonyford SVRA Staging Area', lat: 39.3780, lng: -122.5400, description: 'Eastern OHV network — bikes, ATVs, side-by-sides.' },
    { id: 'eel-river-scott-dam', name: 'Eel River — below Scott Dam', lat: 39.5050, lng: -122.9750, description: 'Best swimming access in the forest. June–September.' },
    { id: 'eel-river-headwaters', name: 'Eel River Headwaters', lat: 39.6900, lng: -122.8700, description: 'Colder, cleaner water with more solitude.' },
    { id: 'lake-pillsbury-launch', name: 'Lake Pillsbury', lat: 39.4167, lng: -122.9080, description: 'Main paddling and fishing access. No reservation required.' },
    { id: 'eel-river-sup', name: 'Eel River SUP — below Scott Dam', lat: 39.5100, lng: -122.9700, description: 'Flatwater SUP when flows allow.' },
    { id: 'bloody-rock', name: 'Bloody Rock', lat: 39.7500, lng: -123.1000, description: 'Outcrop with deep Wailaki history. Worth the short hike.' },
    { id: 'm1-ridge', name: 'M1 Ridge — Hull Mountain North', lat: 39.6200, lng: -122.9300, description: 'Excellent stargazing corridor along the upper ridge.' },
    { id: 'atchison-cabin', name: 'Atchison Cabin', lat: 39.6100, lng: -122.9100, description: 'Historic pioneer cabin — verify condition before visiting.' },
  ],
}
