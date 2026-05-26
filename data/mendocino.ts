export type SeasonRating = 'Prime' | 'Good' | 'Variable' | 'Limited' | 'Not recommended'
export type VehicleRating = 'Best' | 'Great' | 'Good' | 'Fair' | 'Not recommended'
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
  elevation: string
  peakSeason: string
  seasons: { spring: SeasonRating; summer: SeasonRating; fall: SeasonRating; winter: SeasonRating }
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
  season: string
  description: string
  link?: string
}

export interface PopularArea {
  name: string
  description: string
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
    developedCampgrounds: { name: string; description: string }[]
  }
  anchorExperiences: AnchorExperience[]
  recOpportunities: RecOpportunity[]
  history: string[]
  historyPlaceIds: string[]
  watchBeforeYouGo: { title: string; source: string }[]
  places: Place[]
}

export const mendocino: VibeGuide = {
  title: 'Mendocino National Forest',
  badge: 'National Forest · Northern CA',
  quote:
    "One of California's most accessible national forests. Mendocino NF is an overlander's paradise packed with a dense network of soft-roading dirt trails and ridge-top drives that sees a fraction of the crowds you'll find in busier locations like the central and eastern Sierra.",
  vehicleRatings: [
    { type: 'AWD / Crossover', rating: 'Great' },
    { type: 'Van / Sprinter', rating: 'Great' },
    { type: 'Stock 4x4', rating: 'Best' },
    { type: 'Built 4x4', rating: 'Best' },
  ],
  seasonRatings: [
    { season: 'Spring', rating: 'Good', description: 'Wildflowers peak, roads muddy at elevation through April' },
    { season: 'Summer', rating: 'Prime', description: 'Upper forest open, Eel River swimming, long days' },
    { season: 'Fall', rating: 'Good', description: 'Elk rut in Gravelly Valley, cooler temps, less fire risk' },
    { season: 'Winter', rating: 'Variable', description: 'Upper roads snow-closed, low elevations accessible' },
  ],
  crowdLevel: 5,
  darkSkies: {
    rating: 4,
    description: 'Minimal light pollution · Excellent Milky Way visibility',
  },
  attributeTags: [
    { icon: '🛣️', label: 'Soft-road friendly' },
    { icon: '⛺', label: 'Dispersed camping' },
    { icon: '🐾', label: 'Wildlife viewing' },
    { icon: '📅', label: '4-season access' },
    { icon: '🏍️', label: 'OHV network' },
  ],
  overview: [
    "Mendocino National Forest holds a distinction no other California national forest can claim: it is the only one not crossed by a paved road or highway. That single fact shapes everything about the experience here. You won't drift through on the way to somewhere else. You have to mean it — and that intention is exactly what keeps the crowds away and the solitude intact.",
    'The landscape shifts dramatically as you gain elevation. At the lower edges, the forest opens into blue oak savanna and rolling grass hills, golden in summer, green after the winter rains. Climb higher and the oaks give way to ponderosa pine, then mixed conifer — Douglas fir, white fir, black oak — the air cooling noticeably as the ridges come into view. The upper forest has the feel of true backcountry: wide skies, long views, and the kind of quiet you don\'t find within two hours of San Francisco.',
    "This is a soft-roader's paradise. More than 98% of the roads in the forest are graded dirt and gravel — accessible to most high-clearance vehicles without lockers or skid plates. If you're just getting into overlanding, Mendocino is one of the best places in California to find your footing. The roads are forgiving, the forest is expansive, and you can explore for days without running out of new ground to cover.",
    "Lake Pillsbury anchors the social heart of the forest — the place most people head first, with dispersed camping right on the water and no reservation required. The Eel River corridor below Scott Dam offers some of the best riverside camping in the region, popular for summer swimming and just hanging out along the water. And for the moto crowd, the OHV network is genuinely extensive — one of the largest in Northern California. Ukiah and Willits are your best supply stops coming in from the west. Covelo, tucked into Round Valley on the eastern edge, is the quieter gateway — a small ranching town with deep ties to the land and to the Wailaki and Yuki peoples who have called this valley home for thousands of years.",
  ],
  kbyg: [
    { type: 'warning', text: 'Two significant fires have burned through parts of the forest in recent years. Some areas carry heavy deadfall and remain under closure — others are entirely untouched. Check current closure maps before finalizing your route.' },
    { type: 'warning', text: 'Lake Pillsbury water levels are significantly down — adjust boating and swimming expectations accordingly.' },
    { type: 'warning', text: 'Fire restrictions are typically active June–October — check Mendocino NF alerts before departure.' },
    { type: 'info', text: 'No paved road passes through the forest. Plan your route and download offline maps before you lose cell signal.' },
    { type: 'info', text: 'OHV traffic peaks on weekends around Stonyford and the Lake Pillsbury area — go Tuesday–Thursday for a quieter experience.' },
    { type: 'good', text: 'No fee or permit required for dispersed camping or day use anywhere in the forest.' },
  ],
  popularAreas: [
    {
      name: 'Lake Pillsbury Basin',
      description: "The social hub of the forest and the first stop for most visitors. Lake Pillsbury sits at 1,800 feet in the eastern interior and offers some of the best no-reservation dispersed camping in California — pull right up to the shoreline, no reservation, no fee. The lake has a boat launch and draws swimmers, kayakers, and anglers throughout the warmer months. Weekends get busy in summer; midweek visits feel like a different place entirely. Note that water levels have been down significantly in recent years — check conditions before bringing a boat.",
    },
    {
      name: 'Eel River Corridor — below Scott Dam',
      description: "The stretch of the Eel River below Scott Dam is one of the best summer destinations in the forest. Riverside dispersed camps sit right along the bank — you set up camp, walk twenty feet, and you're in the water. Swimming holes are excellent through the summer months, and the canyon has a wild, unhurried feel. Popular for both overnight camping and day use, this corridor draws a loyal crowd who come back every season.",
    },
    {
      name: 'Stonyford',
      description: 'The heart of the southern OHV network and the staging area for riders coming into the forest from the east. Multiple developed campgrounds sit near the trailhead, and the area buzzes with moto activity when trails are open. The Stony Creek OHV area is one of the largest dedicated trail networks in Northern California — a destination in its own right for the dirt bike and dual-sport crowd.',
    },
  ],
  roadNetwork: {
    prose: 'The forest road network is extensive and mostly forgiving — wide graded gravel on the primary corridors, narrowing to rougher dirt as you push deeper. Surface conditions shift significantly with rainfall; roads that are straightforward in September can be impassable by December. Upper elevations above 5,000 ft close seasonally with snow, typically November through April.',
    vehicleRatings: [
      { type: 'AWD / Crossover', rating: 'Great' },
      { type: 'Van / Sprinter', rating: 'Great' },
      { type: 'Stock 4x4', rating: 'Best' },
      { type: 'Built 4x4', rating: 'Best' },
    ],
    routes: [
      { name: 'M1', description: 'The primary north-south spine of the forest. Runs the full length from Upper Lake in the south up through Hull Mountain and Anthony Peak toward Covelo in the north. This is the backbone of any Mendocino trip and the route the BDT follows.' },
      { name: 'FH7 / Hwy 162', description: 'The major east-west connector on the northern end. Hwy 162 transitions to FH7 at the forest boundary — a large graded gravel road from Covelo westward out toward the Central Valley. The primary gateway for visitors approaching from the east.' },
      { name: 'M10', description: 'East-west connector crossing the middle of the forest, linking the western side to the Letts Lake area. One of the few roads that traverses the full width of the forest.' },
      { name: 'M6', description: 'Runs through the Game Refuge — one of the most scenic corridors in the entire forest. Follows the headwaters of the Eel River with some riverside camp access along the way. See Anchor Experiences.' },
      { name: 'Potter Valley Rd', description: 'The primary western gateway. The most common entry route — Hwy 101 north to Ukiah, east through Potter Valley, into the forest toward Lake Pillsbury. Where most first-timers come in.' },
    ],
  },
  overlandRoutes: [
    {
      name: 'Mendocino Backcountry Discovery Trail',
      distance: '167 mi',
      duration: '2–3 days',
      vehicle: 'Soft-road / Stock 4x4',
      season: 'Late Apr – Nov',
      description: 'The original California BDT — first released in the mid-1990s, over a decade before the KTM Backcountry Discovery Routes. Runs the entire length of M1 from Upper Lake south to Covelo north, passing through Hull Mountain, Anthony Peak, Bald Mountain, and the Black Butte and Eel Rivers. One of the best introductory overland routes in California — wide dirt and gravel roads, epic scenery, no technical surprises.',
      link: '#',
    },
    {
      name: 'Mendocino Grand Circuit',
      distance: '300+ mi',
      duration: '4–5 days',
      vehicle: 'Stock 4x4+',
      season: 'May – Oct',
      description: 'The full exploration of the forest — visits all four corners including the remote northern boundary, the Game Refuge, the Eel River corridor, fire lookouts, and the Hull Mountain summit. Takes everything the BDT covers and extends it deep into the lesser-traveled edges of the forest.',
      link: '#',
    },
  ],
  camping: {
    prose: 'Dispersed camping is generally permitted throughout the forest — no fee, no reservation, no permit required. This is one of California\'s most liberal dispersed camping environments and a big part of why the forest has a loyal following. Pull off when you find a spot that works, pack out what you pack in.',
    dispersedSpots: [
      { name: 'Skunk Rock', description: 'A favorite pull-off with good dispersed camping access.', placeId: 'skunk-rock' },
      { name: 'Eel River Camp', description: 'Riverside camp along the Eel — great summer swimming access.', placeId: 'eel-river-camp' },
      { name: 'Headwaters Camp', description: 'Remote and quiet — upper Eel River headwaters area.', placeId: 'headwaters-camp' },
    ],
    developedCampgrounds: [
      { name: 'Oak Flat', description: 'A well-positioned campground best visited in spring and fall when temperatures are comfortable. Good base for exploring the southern forest.' },
      { name: 'Board Tree', description: 'Another solid developed option — quieter, good access to the surrounding road network.' },
    ],
  },
  anchorExperiences: [
    {
      id: 'hull-mountain',
      name: 'Hull Mountain',
      icon: '⛰️',
      elevation: 'High (6,873 ft)',
      peakSeason: 'May–Oct',
      seasons: { spring: 'Good', summer: 'Prime', fall: 'Prime', winter: 'Limited' },
      description: "The spine of the forest. M1 climbs from the valley floor through open oak woodland and into mixed pine, the views widening at every turn until the summit ridge opens in three directions. Soft-road to the approach but stock 4x4 is recommended for the upper section. Nearby sits the grave of pioneer James Hull — mauled by a grizzly bear in 1854, one of the last recorded grizzly attacks in California — worth knowing about before you drive past it.",
      alert: { type: 'warning', text: 'Snow closes the upper section November through April most years.' },
      placeId: 'hull-mountain',
    },
    {
      id: 'anthony-peak',
      name: 'Anthony Peak Lookout',
      icon: '🔭',
      elevation: 'High (6,954 ft)',
      peakSeason: 'Jun–Oct',
      seasons: { spring: 'Limited', summer: 'Prime', fall: 'Prime', winter: 'Limited' },
      description: 'The highest point in the forest, topped by a restored fire lookout that feels like the edge of the world on a clear day. The view spans from the Sierra Nevada to the Pacific. Access road is passable by most high-clearance vehicles when dry. After dark, Anthony Peak is one of the premier stargazing spots in Northern California — minimal light pollution, wide open skies, and elevation that puts you above any valley haze.',
      alert: { type: 'good', text: '360° panoramic views reachable by road. One of the best stargazing sites in the forest.' },
      placeId: 'anthony-peak',
    },
    {
      id: 'm6-corridor',
      name: 'M6 Game Refuge Corridor',
      icon: '🌿',
      elevation: 'Mid elevation',
      peakSeason: 'Spring & Fall',
      seasons: { spring: 'Prime', summer: 'Good', fall: 'Prime', winter: 'Variable' },
      description: 'One of the most scenic stretches of road in the entire forest. M6 winds through the Game Refuge — a protected area where hunting has long been prohibited, which gives the landscape a different quality. Wildlife is unhurried here. The road follows the headwaters of the Eel River, passing through open meadows and oak-lined corridors with long views into the surrounding ridges. Early mornings in spring and fall are when this drive really delivers.',
      alert: { type: 'good', text: "One of Mendocino NF's most rewarding and undervisited corridors." },
      placeId: 'm6-corridor',
    },
    {
      id: 'gravelly-valley',
      name: 'Elk Viewing — Gravelly Valley',
      icon: '🦌',
      elevation: 'Low / mid elevation',
      peakSeason: 'Oct–Mar',
      seasons: { spring: 'Limited', summer: 'Limited', fall: 'Prime', winter: 'Good' },
      description: 'The Tule elk herd descends from the high country in fall and spends the winter in Gravelly Valley. Early mornings in October and November are the sweet spot — dozens of animals in the open meadows along the main road, often close enough to watch without leaving your rig. One of the best and most accessible wildlife experiences in Northern California, and you can drive right to it.',
      alert: { type: 'good', text: 'Best shoulder-season wildlife experience in Northern California.' },
      placeId: 'gravelly-valley',
    },
  ],
  recOpportunities: [
    {
      icon: '🏍️',
      name: 'OHV & moto trails',
      badge: 'Major network',
      description: 'Mendocino NF has one of the most extensive OHV networks in Northern California, split across two distinct systems. The Upper Lake District fans out from the Lake Pillsbury area with hundreds of miles of signed trails for dirt bikes and dual-sport riders across open ridge country. The Stonyford / Stony Creek SVRA anchors the southern end — a dedicated staging area with facilities for bikes, ATVs, and side-by-sides. Both networks range from beginner-friendly doubletrack to challenging technical singletrack. Weekend traffic is significant — midweek visits are noticeably quieter.',
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
      description: 'Lake Pillsbury is the main paddling destination — flatwater, no reservation required, shore camping available. Water levels have been low in recent years so check conditions before making the trip. Some visitors run SUP on the Eel River below Scott Dam at the riverside camps when flows allow — calm stretches between swimming holes make for a mellow float.',
      placeIds: ['lake-pillsbury-launch', 'eel-river-sup'],
    },
    {
      icon: '🎣',
      name: 'Fishing',
      badge: 'Limited opportunities',
      description: "Fishing is possible but Mendocino NF is not a destination fishery — don't plan a trip around it. Lake Pillsbury has bass and some trout. The Eel River holds steelhead seasonally but access and regulations are complex. If fishing is your priority, surrounding regions offer better options.",
      placeIds: ['lake-pillsbury-launch'],
    },
    {
      icon: '🥾',
      name: 'Hiking',
      badge: 'Not a hiking destination',
      description: "Mendocino NF is not known for hiking — the draw here is the roads, not the trails. Snow Mountain Wilderness has routes but they're unremarkable by Northern California standards. One worth knowing about is Bloody Rock — a short, accessible hike to an outcrop with significant history tied to the Wailaki people and the forced relocations of the 1860s. More place of meaning than demanding trail, but worth the stop if you're in the area.",
      placeIds: ['bloody-rock'],
    },
    {
      icon: '🌌',
      name: 'Dark skies & stargazing',
      badge: '4 / 5 rating',
      description: 'The upper forest ridges are excellent for stargazing — minimal light pollution, elevations above 5,000 ft, and wide open skies. Anthony Peak is the premier spot. The M1 ridge from Hull Mountain northward is consistently good all along the upper elevations. Summer and fall offer the clearest skies and warmest nights.',
      placeIds: ['anthony-peak', 'm1-ridge'],
    },
  ],
  history: [
    "The Round Valley area near Covelo was home to the Wailaki, Yuki, Nomlaki, and Pomo peoples for thousands of years before the 1860s forced relocations — one of the most brutal episodes in California's history. The Round Valley Reservation remains an active tribal community today. Bloody Rock, within the forest, is one of several sites tied directly to that history.",
    "The forest is also scattered with traces of early pioneer settlement — historic homesteads and cabins tucked into the backcountry from families who ranched and logged these hills in the late 1800s and early 1900s. The Atchison Cabin is one of the better-known examples, though its condition post-fire should be confirmed before planning a visit. The grave of James Hull — mauled by a grizzly in 1854, one of the last recorded grizzly attacks in California — sits near the mountain that bears his name along the M1 corridor. The forest itself was established in 1907 by Theodore Roosevelt, originally as the Stony Creek Reserve.",
  ],
  historyPlaceIds: ['bloody-rock', 'james-hull-grave', 'anthony-peak', 'atchison-cabin'],
  watchBeforeYouGo: [
    { title: 'Mendocino Backcountry Discovery Trail — the original California BDT', source: 'Overland Trail Guides' },
    { title: 'Lake Pillsbury dispersed camping — everything you need to know', source: 'Community pick' },
  ],
  places: [
    { id: 'hull-mountain', name: 'Hull Mountain', lat: 39.5619, lng: -122.9284, description: 'Summit ridge at 6,873 ft — the spine of the forest.' },
    { id: 'anthony-peak', name: 'Anthony Peak Lookout', lat: 39.8614, lng: -122.9764, description: 'Highest point in the forest at 6,954 ft. Premier stargazing.' },
    { id: 'gravelly-valley', name: 'Gravelly Valley — Elk Viewing', lat: 39.4850, lng: -122.9200, description: 'Tule elk winter range. Best Oct–Mar, early mornings.' },
    { id: 'm6-corridor', name: 'M6 Game Refuge Corridor', lat: 39.6500, lng: -122.8800, description: 'Scenic corridor through the Game Refuge along the Eel headwaters.' },
    { id: 'skunk-rock', name: 'Skunk Rock', lat: 39.4700, lng: -122.9500, description: 'Favorite dispersed camping pull-off.' },
    { id: 'eel-river-camp', name: 'Eel River Camp', lat: 39.5200, lng: -122.9600, description: 'Riverside dispersed camp — walk-to swimming access.' },
    { id: 'headwaters-camp', name: 'Headwaters Camp', lat: 39.6800, lng: -122.8600, description: 'Remote upper Eel River headwaters camp.' },
    { id: 'upper-lake-ohv', name: 'Upper Lake OHV Trailhead', lat: 39.3800, lng: -122.9100, description: 'Northern OHV network staging area.' },
    { id: 'stonyford-svra', name: 'Stonyford SVRA Staging Area', lat: 39.3780, lng: -122.5400, description: 'Southern OHV network — bikes, ATVs, side-by-sides.' },
    { id: 'eel-river-scott-dam', name: 'Eel River — below Scott Dam', lat: 39.5050, lng: -122.9750, description: 'Best swimming access in the forest. June–September.' },
    { id: 'eel-river-headwaters', name: 'Eel River Headwaters', lat: 39.6900, lng: -122.8700, description: 'Colder, cleaner water with more solitude.' },
    { id: 'lake-pillsbury-launch', name: 'Lake Pillsbury Boat Launch', lat: 39.4167, lng: -122.9080, description: 'Main paddling and fishing access. No reservation required.' },
    { id: 'eel-river-sup', name: 'Eel River SUP — below Scott Dam', lat: 39.5100, lng: -122.9700, description: 'Flatwater SUP when flows allow.' },
    { id: 'bloody-rock', name: 'Bloody Rock', lat: 39.7500, lng: -123.1000, description: 'Outcrop with deep Wailaki history. Worth the short hike.' },
    { id: 'm1-ridge', name: 'M1 Ridge — Hull Mountain North', lat: 39.6200, lng: -122.9300, description: 'Excellent stargazing corridor along the upper ridge.' },
    { id: 'james-hull-grave', name: 'James Hull Grave Site', lat: 39.5650, lng: -122.9290, description: 'Pioneer grave near Hull Mountain — mauled by a grizzly, 1854.' },
    { id: 'atchison-cabin', name: 'Atchison Cabin', lat: 39.6100, lng: -122.9100, description: 'Historic pioneer cabin — verify condition before visiting.' },
  ],
}
