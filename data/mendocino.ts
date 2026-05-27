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
    rating: 5,
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
    { type: 'warning', text: 'The Soda Springs store at Lake Pillsbury has closed as of early 2026 — it was the only mid-forest fuel stop. Carry extra fuel for any north-south M1 traverse. Jerry cans are not optional.' },
    { type: 'warning', text: 'Two significant fires have burned through parts of the forest in recent years (August Complex 2020, Ranch Fire 2018). Some areas carry heavy deadfall and remain under closure. Check current closure maps before finalizing your route.' },
    { type: 'warning', text: 'Blue-green algae blooms hit Lake Pillsbury and sections of the lower Eel in late summer (typically August–September). Check the state HAB tracker at mywaterquality.ca.gov before swimming or paddling.' },
    { type: 'warning', text: 'Fire restrictions are typically active June–October — check Mendocino NF alerts before departure.' },
    { type: 'info', text: 'No paved road passes through the forest — Mendocino is the only national forest in California you cannot drive through on pavement. Download offline maps before you lose cell signal.' },
    { type: 'info', text: 'OHV traffic peaks on weekends around Stonyford and the Lake Pillsbury area. Midweek visits are noticeably quieter.' },
    { type: 'info', text: 'A persistent landslide north of Eel River Station currently blocks the full north-south M1 loop. The Espee Ridge Road bypass near the Doe Lake turnoff adds about 3 miles. Check current conditions before the trip.' },
    { type: 'good', text: 'No fee or permit required for dispersed camping or day use anywhere in the forest.' },
  ],
  popularAreas: [
    {
      name: 'Lake Pillsbury Basin',
      placeId: 'lake-pillsbury-launch',
      photo: '/images/pillsbury-basin.png',
      description: "Lake Pillsbury is still the social hub of the forest and the first stop for most first-timers. The powerboat crowd has thinned since water levels dropped, but the camping is intact — developed sites ring the lake, no reservation required. The bass fishery is legitimately good in spring (Horseshoe Gulch and the Rice Fork arm), and CDFW stocks rainbow trout each fall and spring. One thing to watch: the lake is prone to blue-green algae blooms in August and September when the water warms and drops — check the state HAB tracker before you go. The Upper Lake OHV network uses the Pillsbury basin campgrounds as staging, so the area has a split personality: peaceful mid-week lake scene, and a buzzing moto hub on weekends. One big development to know about: PG&E submitted dam surrender paperwork to FERC in 2025, with removal targeted for 2028. If the dams come out, the lake drains. Make the trip while it's still there.",
    },
    {
      name: 'Eel River Corridor — Below Scott Dam',
      placeId: 'eel-river-scott-dam',
      photo: '/images/eel-river-corridor.png',
      description: "The Eel River below Scott Dam is one of those spots that used to be known only to locals — and increasingly isn't. Word has gotten out, and for good reason: the water is warm, the swimming holes are excellent, and you can set up a riverside camp and walk twenty feet to the water. It gets busy, especially on weekends from Memorial Day through Labor Day — go Tuesday through Thursday if you're after solitude. The shoulder season has a completely different character: fewer people, cooler water, and the specific quiet that comes when summer crowds disappear.",
    },
    {
      name: 'Stonyford',
      placeId: 'stonyford-svra',
      photo: '/images/stonyford.png',
      description: "Stonyford is built for serious riders. The Grindstone District system runs 200-plus miles across 53 numbered trails covering roughly 90,000 acres, and the difficulty is real — ratings are systematically undergraded, so blue trails tend to ride like black diamonds. Rocky, off-camber, steep in places, with creek crossings and brush tunnels. Trail 36 (Steam Donkey) is the one people come for: cliff-edge single-track with a historic steam engine visible in the hillside below. Multiple campgrounds sit at the staging area. Peak season runs fall through spring — summer at lower elevations gets hot. Come midweek if you want the place to yourself.",
    },
  ],
  roadNetwork: {
    prose: "Mendocino is the only national forest in California with no paved through-road. Every route into and through the interior is graded dirt or gravel. That distinction defines the character of the place, and it's the main reason the crowds stay thin. Most of the primary corridors are wide and well-maintained, manageable for a stock AWD crossover in dry conditions. Roads narrow and roughen as you push into the backcountry, and the Hull Mountain spur and a handful of northern routes add some challenge, but nothing on the main network demands lockers or skid plates. Conditions shift fast with weather — routes that are straightforward in September can be impassable by November. One logistics note that matters: the Soda Springs store at Lake Pillsbury closed in early 2026, taking out the only mid-forest fuel stop. Carry extra fuel for any M1 traverse.",
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
    prose: "Dispersed camping is permitted throughout most of the forest with no fee, no reservation, and no permit required — same as most national forests in California. The difference here is the sheer amount of road to explore. The strongest corridor in the forest for dispersed camping is M1 between Hull Mountain and the Black Butte River confluence. You're above 4,000 feet, the road is wide enough to pull a rig off, and once you're set up you're unlikely to see another person. Little Doe, Howard Lake, and Hammerhorn Lake are the named primitive camps worth knowing in this stretch. Further south, the Lake Pillsbury basin fills up on weekends from May through Labor Day — expect company. The Eel River Campground at the Middle Fork / Black Butte confluence is a favorite for overlanders doing the BDT or Grand Circuit and doubles as river access.",
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
      photo: '/images/hull-mtn.png',
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
      peakSeason: 'May–Oct',
      seasons: { spring: 'Limited', summer: 'Prime', fall: 'Prime', winter: 'Limited' },
      description: "The highest point in Mendocino County and the last staffed fire lookout in the forest. The structure was built in 1934 by the CCC, enclosed in 1941 and staffed year-round as an enemy aircraft observation post during WWII, then ran continuously until structural deterioration forced a shutdown in 1990. Volunteers and the Forest Service restored it in 1993 and it's been active since. On a clear day you can see the Pacific to the west and Lassen to the east. After dark it's exceptional — the forest sits in a Bortle Class 2 zone, and at 6,958 feet you're above the valley haze with 360 degrees of unobstructed sky. One more thing worth knowing: the Anthony Peak lupine grows here and nowhere else on earth.",
      alert: { type: 'warning', text: 'Snow closes the upper section November through April most years.' },
      placeId: 'anthony-peak',
    },
    {
      id: 'm6-corridor',
      name: 'M6 Game Refuge Corridor',
      icon: '🌿',
      photo: '/images/pillsbury-basin-elk.png',
      vehicles: ['AWD / Crossover', 'Sprinter / Van', 'Stock 4x4'],
      elevation: 'Mid elevation',
      peakSeason: 'Apr–Nov',
      seasons: { spring: 'Prime', summer: 'Good', fall: 'Prime', winter: 'Variable' },
      description: "One of the most scenic stretches of road in the entire forest. M6 winds through the Game Refuge — a protected area where hunting has long been prohibited, and the wildlife knows it. Bear sightings are common in this stretch; a mama bear with cubs is a regular report from riders and campers at Horse Creek Camp. The road follows the headwaters of the Eel River through open meadows and oak corridors with long views into the surrounding ridges. Early mornings in spring and fall are when this drive really delivers.",
      alert: { type: 'good', text: "One of Mendocino NF's most rewarding and undervisited corridors." },
      placeId: 'm6-corridor',
    },
    {
      id: 'gravelly-valley',
      name: 'Elk Viewing — Gravelly Valley / Pillsbury Basin',
      icon: '🦌',
      photo: '/images/pills-basin-elk.png',
      elevation: 'Low / mid elevation',
      peakSeason: 'Oct–Mar',
      seasons: { spring: 'Limited', summer: 'Limited', fall: 'Prime', winter: 'Good' },
      description: "The Tule elk herd descends from the high country in fall and grazes throughout Gravelly Valley and the Pillsbury Basin through the off-season. With lake levels reduced in recent years, the herd now regularly forages across the exposed meadows where the water has receded — creating some unexpectedly close viewing opportunities right from the main road. Best in the off-season when the crowds are away. Oak Flat is a great base for elk viewing; they're commonly spotted grazing throughout the valley.",
      alert: { type: 'good', text: 'One of the best locations for elk viewing in northern California.' },
      placeId: 'gravelly-valley',
    },
  ],
  recOpportunities: [
    {
      icon: '🏍️',
      name: 'OHV & Moto',
      badge: 'Major network',
      description: "Two separate systems, each worth a dedicated trip. The Stonyford OHV area (Grindstone Ranger District) covers 200-plus miles across 53 numbered trails and roughly 90,000 acres. Ratings run green, blue, and black, but riders consistently report real-world difficulty runs harder than posted — what's labeled blue tends to ride like a black diamond. Rocky terrain, off-camber sections, steep climbs, creek crossings, and some genuinely technical single-track. Trail 36 (Steam Donkey) is the standout: cliff-edge single-track with a historic steam engine visible in the hillside. On the west side, the Upper Lake system runs 135-plus miles through the south basin and another 33 miles of northern trails that stay open year-round. Middle Creek is where families and beginners come — more forgiving terrain, good staging, easier access. A 40-mile designated corridor connects both systems east to west. One scheduling note: the south basin closes annually May 18 through September 8.",
      placeIds: ['upper-lake-ohv', 'stonyford-svra'],
    },
    {
      icon: '💧',
      name: 'Lakes, Rivers & Swimming',
      badge: 'Summer highlight',
      description: "Lake Pillsbury is the main flatwater destination — paddling, shore swimming, and camping all in one place. Best window is June through early July before the water warms and algae risk climbs. August and September can bring blue-green algae blooms that make swimming and paddling unsafe — check mywaterquality.ca.gov before you go. For river swimming, the confluence of the Middle Fork Eel and Black Butte River at Eel River Campground has deep holes and summer water temps that hit the low 70s. That's the spot. On the south end, Stony Creek Falls has a clean plunge pool at its base — one of the more reliable named spots in the forest. Kayak and canoe at Lake Pillsbury; SUP on the calmer Eel stretches below Scott Dam when flows allow.",
      placeIds: ['lake-pillsbury-launch', 'eel-river-scott-dam', 'stonyford-svra'],
    },
    {
      icon: '🌌',
      name: 'Dark Skies & Stargazing',
      badge: 'Bortle Class 2',
      description: "Mendocino National Forest sits in a Bortle Class 2 zone — the second darkest classification on the scale, shared by only a handful of California sites. At Class 2, the Milky Way casts visible shadows and naked-eye limiting magnitude clears 7.1. Anthony Peak at 6,958 feet is the high point in every sense: above the valley haze, 360-degree unobstructed horizon, well clear of every major light dome in the region. Hammerhorn Lake in the northern forest is a favorite among astrophotographers for its open sky and easy access. The entire M1 corridor north of Hull Mountain runs ridge-top above 4,000 feet with ridgelines blocking both the Sacramento Valley and Clear Lake glow to the east. Summer and fall deliver the clearest nights. Spring is hit or miss.",
      placeIds: ['anthony-peak', 'ridge-camp', 'm1-ridge'],
    },
    {
      icon: '🎣',
      name: 'Fishing',
      badge: 'Fair by CA standards',
      description: "Lake Pillsbury is the best bet in the forest. CDFW stocks rainbow trout each fall and spring, and the largemouth bass fishery is solid in spring — Horseshoe Gulch and the Rice Fork arm are productive. Letts Lake at 4,500 feet is a quieter option that holds trout through summer and is worth knowing about. The Eel River within the forest between Potter Valley and Lake Pillsbury is landlocked above Scott Dam, which has blocked anadromous fish since 1921 — what you're fishing for is resident rainbow trout with complicated PG&E-fenced access. The true Eel steelhead fishery is well downstream near Fortuna, outside the forest entirely. Big development: PG&E submitted dam surrender paperwork in 2025, with removal targeted for 2028. When the dams come out, the lake drains and a new free-flowing fishery opens up eventually — but that's years out.",
      placeIds: ['lake-pillsbury-launch'],
    },
    {
      icon: '🥾',
      name: 'Hiking',
      badge: 'Not a hiking destination',
      description: "Mendocino NF is not a hiking destination — the roads are the draw, not the trails. Snow Mountain Wilderness has routes but they're unremarkable by Northern California standards. One trail worth making time for is Bloody Rock: a 4.8-mile out-and-back to a basaltic outcrop above the upper Eel River canyon with serious history tied to the Yuki people and the 1859 Mendocino War. More a place of meaning than a demanding trail, but the views are genuinely good and the context makes it stick with you.",
      placeIds: ['bloody-rock'],
    },
  ],
  history: [
    "Bloody Rock is a basaltic promontory inside the forest above the upper Eel River canyon — sheer drops of 150 feet or more on three sides. In the fall of 1859, somewhere between 30 and 65 Yuki — members of the Onkolukomno'm band who had fled the Round Valley Reservation — were cornered here by a group of armed settlers. The precise events are disputed; every account came from the perpetrators. One version says those trapped chose to jump. Historians now believe they were more likely forced down and executed elsewhere. The site is accessible via a 4.8-mile hike and is worth making time for — it's a place of real beauty and genuinely dark history at the same time.",
    "The Yuki people had lived in and around Round Valley and the upper Eel River headwaters for at least 10,000 years before contact. Their population was somewhere between 6,000 and 20,000 in 1854. By 1864 it was roughly 300. The Round Valley Settler Massacres of 1856 to 1859 were organized and partially funded by the California government — the state legislature appropriated money to pay a mercenary expedition that killed more than 280 people in six months alone. The Round Valley Indian Tribes, headquartered in Covelo at the forest's edge, carries the living legacy. Eel River Station, within the national forest, sits on what was a major Yuki village site. The Nome Cult Trail, which passes through the forest above 6,000 feet, was the forced march route used in 1863 to relocate 461 Concow Maidu to Round Valley — only 277 arrived.",
    "Anthony Peak's fire lookout was built in 1934 by the California Conservation Corps — a 14-by-14-foot live-in cab on a ten-foot wood tower, with a catwalk on all four sides. Enclosed in 1941 and staffed year-round as an enemy aircraft observation post during WWII, it ran continuously until structural deterioration led to its condemnation in 1990. Volunteers and the Forest Service restored it in 1993; it was rededicated the following year and is now the last active staffed fire lookout in Mendocino National Forest. The summit also hosts the Anthony Peak lupine — a rare wildflower found nowhere else on earth.",
    "The forest was established in 1907 by Theodore Roosevelt, originally as the Stony Creek Reserve. It was renamed twice before settling on Mendocino — Herbert Hoover signed the final name change by executive order in 1932 to avoid confusion with the state of California itself.",
  ],
  historyPlaceIds: ['bloody-rock', 'anthony-peak'],
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
