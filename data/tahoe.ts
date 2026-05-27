import type { VibeGuide } from './mendocino'

export const tahoe: VibeGuide = {
  title: 'Tahoe National Forest',
  badge: 'National Forest · Northern CA',
  quote:
    "California's most visited national forest packs granite peaks, snowmelt rivers, and 800 miles of roads into the northern Sierra. Come mid-July through October when the high passes open and the crowds thin above 6,000 feet.",

  vehicleRatings: [
    { type: 'AWD / Crossover', rating: 'Fair' },
    { type: 'Sprinter / Van', rating: 'Fair' },
    { type: 'Stock 4x4', rating: 'Good' },
    { type: 'Modified 4x4', rating: 'Best' },
  ],

  seasonRatings: [
    { season: 'Spring', rating: 'Fair', description: 'Snow lingers on high routes through May. Low-elevation roads open first.' },
    { season: 'Summer', rating: 'Best', description: 'High passes open July. Lakes warm enough to swim. Busy on holiday weekends.' },
    { season: 'Fall', rating: 'Good', description: 'Crowds drop after Labor Day. Aspens turn gold. Best dispersed camping windows.' },
    { season: 'Winter', rating: 'Poor', description: 'Most forest roads close November through April. Chains required on Hwy 49 crossings.' },
  ],

  crowdLevel: 8,

  darkSkies: {
    rating: 4,
    description:
      'Confirmed Bortle Class 2 at the Bowman Lake Basin and Jackson Meadows Reservoir — the Milky Way shows detailed structure and dark nebulae are visible to the naked eye. No designated dark sky parks inside the forest, but the Grouse Ridge area (FR 17) and Meadow Lake shoreline are the best spots: wide open horizons above tree line, above 6,000 feet. Stay away from the western edge near Nevada City and the I-80 corridor.',
  },

  attributeTags: [
    { icon: '🪨', label: 'Granite Sierra' },
    { icon: '🏊', label: 'Lakes & Swimming' },
    { icon: '🪵', label: 'Gold Rush History' },
    { icon: '🛣️', label: 'Forest Roads' },
    { icon: '🎣', label: 'Trout Fishing' },
    { icon: '🏔️', label: 'High Country' },
  ],

  overview: [
    'Tahoe National Forest runs along the crest of the northern Sierra Nevada from the North Fork of the American River to the Yuba River watershed. It covers approximately 850,000 acres and sees more visitors than any other California national forest. That popularity is earned: the combination of granite peaks, high-elevation lakes, swift rivers, and gold rush ghost towns is hard to match.',
    'The terrain is classic Sierra granite: steep canyon walls carved by glaciers, talus slopes, meadows fed by snowmelt, and ridgelines that top out near 9,000 feet. The western slopes — accessed from Hwy 49 towns like Grass Valley and Nevada City — are lower, denser, and greener. The eastern interior, above 6,500 feet, opens into exposed granite and lake-dotted high country that draws drivers and hikers from all over the state.',
    'About half the forest road network is unpaved. Stock 4x4 trucks handle the majority of it without issue. The Bowman Lake Road corridor, Sierra Buttes area, French Meadows, and Henness Pass route reward vehicles with good clearance and time to explore. AWD crossovers can reach the developed campground hubs and most paved forest routes, but dispersed camping in the backcountry is largely a stock 4x4 proposition.',
    'Main entry hubs: Truckee via I-80 (southeast), Nevada City and Grass Valley via Hwy 49 (west), Sierraville from the north. Fuel up in town before heading in — gaps between stations are long once you are on forest roads.',
  ],

  kbyg: [
    {
      type: 'warning',
      text: 'Most forest roads above 6,500 ft close by November and do not open until late June or early July. Check fs.usda.gov/tahoe for current road status before heading in.',
    },
    {
      type: 'warning',
      text: 'California Campfire Permit required for any open flame in dispersed areas — including portable gas stoves with a shutoff valve. Get one free at fs.usda.gov before your trip.',
    },
    {
      type: 'warning',
      text: 'Fire restrictions during Red Flag conditions can further limit or close dispersed camping. Check inciweb.wildfire.gov in summer.',
    },
    {
      type: 'info',
      text: 'No permit required for dispersed camping. Stay at least 100 feet from any lake, river, or stream channel. 14-day occupancy limit per calendar year.',
    },
    {
      type: 'info',
      text: 'Nearest full resupply: Nevada City and Grass Valley (western approach), Truckee (southeast). Downieville and Sierra City have limited options — fuel in Downieville is available but premium priced.',
    },
    {
      type: 'info',
      text: 'America the Beautiful passes cover day use and developed campgrounds. Dispersed camping is free.',
    },
    {
      type: 'good',
      text: 'Sierra Buttes Lookout is open to hikers and requires no permit. Drive up the Packer Lake Road area, then a short walk up the fire road and 180 metal stairs to the catwalk at 8,591 feet.',
    },
    {
      type: 'good',
      text: 'Malakoff Diggins State Historic Park sits on the forest boundary and gives excellent context for the hydraulic mining era. Easy day trip from Nevada City.',
    },
  ],

  popularAreas: [
    {
      name: 'Sierra Buttes & Upper Lakes',
      placeId: 'jackson-meadows',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Upper_Sardine_Lake_and_the_Sierra_Buttes%2C_California.jpg',
      description:
        'The northwest corner of the forest, centered on Hwy 49 between Bassetts and Sierra City. Granite spires rise above a chain of lakes including the Sardine Lakes, Packer Lake, and Salmon Lake. Dirt roads through the lake basin are accessible to high-clearance stock 4x4 trucks and serve as the main staging zone for the Sierra Buttes Lookout drive and hike. Crowds peak in July and August at the lake trailheads but thin out fast once you are on dirt.',
    },
    {
      name: 'Bowman Lake Basin',
      placeId: 'bowman-lake',
      photo: '',
      description:
        'North of Hwy 20, Bowman Lake Road climbs into a granite basin with more small alpine lakes than most people know about: Bowman, Faucherie, Sawmill, Carr, Culbertson, Bullpen, Deadman, and Feeley. The first 8 miles from Hwy 20 are paved but narrow. The next 3 miles are graded gravel. The final 3 miles past the Carr Lake turnoff to Bowman Lake are rough, single-lane, and rocky — stock 4x4 with skid plates, 10 mph. Grouse Ridge Road runs the ridgeline above with views toward the Buttes and is one of the best dark sky corridors in the forest.',
    },
    {
      name: 'French Meadows Reservoir',
      placeId: 'french-meadows',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/7/74/French_Meadows_and_Hell_Hole_Reservoirs.jpg',
      description:
        'A 2,000-acre reservoir at 5,218 feet in the Middle Fork American River drainage, about 35 miles northeast of Auburn. The primary 4x4 staging zone for the southwestern forest. Mosquito Ridge Road provides the main access and connects to the Middle Fork canyon and Foresthill Divide trails beyond. Dispersed sites along the reservoir fill fast on summer weekends.',
    },
    {
      name: 'Henness Pass Corridor',
      placeId: 'henness-pass',
      photo: '',
      description:
        'A historic trans-Sierra wagon road connecting Hwy 89 north of Truckee to the Sierra Valley and continuing west toward Camptonville. Forest Road 07 runs the unpaved sections — wide, bumpy, and dusty with occasional washboard. Under dry summer conditions it is passable for AWD crossovers. High-clearance 4x4 is recommended for the rougher washboard sections and any dispersed camping spurs off the main corridor. Numerous flat, forested pullouts between Kyburz Flat and Jackson Meadows make it one of the best van and truck camping corridors in the forest.',
    },
    {
      name: 'Foresthill Divide & Sugar Pine',
      placeId: 'foresthill-divide',
      photo: '',
      description:
        'The southwestern forest zone accessed from the town of Foresthill on Foresthill Divide Road. The road is paved for most of its length, turning to graded dirt as it heads north toward Robinson Flat and Soda Springs. AWD crossovers can handle it in summer. Sugar Pine Road branches off to Sugar Pine Reservoir, a warm-water bass fishery. The zone has an active OHV network and is less crowded than the French Meadows or Bowman Basin areas. Mosquito Ridge Road peels off toward Hell Hole Reservoir and provides access to remote Middle Fork American River trailheads.',
    },
    {
      name: 'South Yuba River Canyon',
      placeId: 'south-yuba',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/The_Diggins_at_Malakoff_Diggins_State_Park_in_California.JPG',
      description:
        'The South Yuba cuts a wild canyon through the western forest, accessible from Nevada City via North Bloomfield Road and from Hwy 49 at South Yuba River State Park. Multiple named swimming holes along the river are reachable by AWD. Malakoff Diggins State Historic Park sits above the canyon. The canyon offers the best low-elevation access in the forest and is usable from April through November.',
    },
  ],

  roadNetwork: {
    prose:
      'The forest has roughly 800 miles of road, about half unpaved. The main paved corridors — Hwy 49 along the west edge, I-80 through the south, and Hwy 89 to the east — serve as staging routes. From there, a dense web of forest roads branches into the interior. Stock 4x4 trucks can reach French Meadows, the Sierra Buttes lake basin, and the Bowman Lake Road corridor without modification (final 3 miles to Bowman Lake require high clearance and skid plates). Fuel gaps are real once you leave the highway towns.',
    vehicleRatings: [
      { type: 'AWD / Crossover', rating: 'Fair' },
      { type: 'Sprinter / Van', rating: 'Fair' },
      { type: 'Stock 4x4', rating: 'Good' },
      { type: 'Modified 4x4', rating: 'Best' },
    ],
    routes: [
      {
        name: 'Henness Pass',
        description:
          'Forest Road 07. Historic trans-Sierra wagon road from Hwy 89 (north of Truckee) west to Camptonville. Wide, unpaved, and bumpy in sections. AWD passable in dry summer conditions. One of the best low-traffic corridors in the forest.',
      },
      {
        name: 'FR 96 / Mosquito Ridge',
        description:
          'Primary access to French Meadows Reservoir. Paved to the reservoir (AWD crossover fine). Mosquito Ridge Road branches off — paved, narrow, cliff-clinging — and runs to Hell Hole Reservoir with Middle Fork American River trailheads along the way.',
      },
      {
        name: 'Foresthill Divide Rd',
        description:
          'Paved from Foresthill east to Robinson Flat, turning to graded dirt toward Soda Springs. AWD crossover passable in summer. Connects to Sugar Pine Road and the OHV network around the Foresthill Divide zone.',
      },
      {
        name: 'Bowman Lake Rd',
        description:
          'Leaves Hwy 20 and climbs north 14 miles to Bowman Lake. First 8 miles paved (narrow). Next 3 miles graded gravel to Carr Lake. Final 3 miles: rough, single-lane, rocky. Stock 4x4 with skid plates required for the full run. No trailers or boats past the pavement.',
      },
      {
        name: 'Gold Lake Hwy',
        description:
          'Paved road from Hwy 49 at Bassetts north through the lake country. Access to Sierra Buttes trailhead, Sardine Lakes, Packer Lake, and Salmon Lake. Gold Lake at the top is in Plumas NF. Dirt spurs off the main road vary from easy to moderate.',
      },
    ],
  },

  overlandRoutes: [
    {
      name: 'Tahoe Backcountry Discovery Trail',
      distance: '240 miles',
      duration: '3–5 days',
      vehicle: 'Stock 4x4+',
      vehicles: ['Stock 4x4', 'Modified 4x4'],
      season: 'July–Oct',
      description:
        'The OTG route through Tahoe NF runs from the Nevada City foothills to the Truckee area, linking the major high-country corridors. It crosses the Bowman Lake basin, climbs past the Buttes, and drops through the river canyons before reaching the eastern Sierra. Mostly dirt, with some sections that require stock 4x4 clearance at minimum.',
      link: 'https://www.overlandtrailguides.com/post/tahoe-backcountry-discovery-trail',
      photo: 'https://static.wixstatic.com/media/acf3a1_a2962c061406411482f1dbfd67af9213~mv2.jpg',
    },
  ],

  camping: {
    prose:
      'Dispersed camping is free and does not require a permit. Stay 100 feet from any lake, river, or stream. The best corridors are Bowman Lake basin, French Meadows Reservoir, the Henness Pass corridor between Kyburz Flat and Jackson Meadows, and the roads north of Packer Saddle in the Sierra Buttes area. Sites fill fast on summer weekends — aim for Tuesday through Thursday arrivals. A California Campfire Permit (free at fs.usda.gov) is required for any open flame, including gas stoves.',
    dispersedSpots: [
      {
        name: 'Bowman Lake North Shore',
        description: 'Granite bench sites in trees along the north shore. Vault toilet at main campground. No potable water.',
        placeId: 'camp-bowman-lake',
      },
      {
        name: 'French Meadows Reservoir East',
        description: 'Flat pull-outs along the east shore. Boat launch nearby. Good base for Middle Fork canyon roads.',
        placeId: 'camp-french-meadows-east',
      },
      {
        name: 'Grouse Ridge Road (FR 17)',
        description: 'Ridge sites with wide open sky — one of the best dark sky spots in the forest. Exposed to wind. No water.',
        placeId: 'camp-grouse-ridge',
      },
      {
        name: 'Henness Pass Corridor',
        description: 'Numerous flat, forested pullouts between Kyburz Flat and Jackson Meadows along Forest Road 07. Good for self-contained trucks and vans.',
        placeId: 'henness-pass',
      },
      {
        name: 'North of Packer Saddle',
        description: 'Upland dirt roads north of Packer Saddle have dispersed sites less crowded than the paved campgrounds at Jackson Meadows Reservoir.',
        placeId: 'camp-packer-lake',
      },
    ],
    developedCampgrounds: [
      {
        name: 'French Meadows Campground',
        description: '75 sites near the reservoir. Non-electric. Reserve on recreation.gov.',
        placeId: 'cg-french-meadows',
      },
      {
        name: 'Carr Lake Campground',
        description: 'Small FS campground in the Bowman Basin. First-come first-served. AWD crossovers can reach the Carr Lake turnoff.',
        placeId: 'cg-carr-lake',
      },
      {
        name: 'Jackson Creek Campground',
        description: 'Quiet campground near Jackson Meadows Reservoir. Tent and small RV sites.',
        placeId: 'cg-jackson-creek',
      },
      {
        name: 'Salmon Creek Campground',
        description: 'Off Gold Lake Highway near Sardine Lakes. Easy access to the Sierra Buttes trailhead area.',
        placeId: 'cg-salmon-creek',
      },
    ],
  },

  anchorExperiences: [
    {
      id: 'sierra-buttes-lookout',
      name: 'Sierra Buttes Lookout',
      icon: '🗼',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Upper_Sardine_Lake_and_the_Sierra_Buttes%2C_California.jpg',
      vehicles: ['Stock 4x4', 'Modified 4x4'],
      elevation: 'High (8,591 ft)',
      peakSeason: 'Jul–Sep',
      seasons: { spring: 'Limited', summer: 'Prime', fall: 'Prime', winter: 'Not recommended' },
      description:
        'You drive most of the way up. Take Packer Lake Road off Gold Lake Highway, follow the dirt road to the upper staging area, then walk the short fire road to the base of the staircase. From there it is 180 metal stairs bolted into the rock face to the catwalk at 8,591 feet. The lookout was decommissioned in 1995 and is no longer actively staffed, but it remains open as a historic hiking destination. The exposure on the catwalk is real. Views cover the Yuba drainage, Feather River country, and on clear days a slice of Nevada. Stock 4x4 required for the rough dirt road section.',
      alert: { type: 'good', text: 'No permit needed. Drive up, walk the fire road, climb the stairs. Open whenever the road is open.' },
      placeId: 'sierra-buttes-lookout',
    },
    {
      id: 'henness-pass-road',
      name: 'Henness Pass Road',
      icon: '🛤️',
      photo: '',
      vehicles: ['AWD / Crossover', 'Stock 4x4', 'Modified 4x4'],
      elevation: 'Mid to High (5,500–7,100 ft)',
      peakSeason: 'Jun–Oct',
      seasons: { spring: 'Variable', summer: 'Prime', fall: 'Good', winter: 'Not recommended' },
      description:
        'One of the original trans-Sierra emigrant roads, Henness Pass carried gold rush migrants and freight wagons between 1850 and the railroad era. Forest Road 07 connects Hwy 89 north of Truckee to the Sierra Valley and continues west toward Camptonville on a mix of paved and unpaved road. The unpaved sections are wide, bumpy, and dusty — passable for AWD crossovers in dry summer conditions. High-clearance is better for the washboard sections and the dispersed camping spurs. The route crosses the Sierra crest with almost no traffic and dozens of flat forested camping spots between Kyburz Flat and Jackson Meadows.',
      alert: { type: 'warning', text: 'Upper crossing closes in winter. Check road conditions at the Nevada County or Sierra County ranger districts before early-season attempts.' },
      placeId: 'henness-pass',
    },
    {
      id: 'hwy49-gold-towns',
      name: 'Hwy 49 — Downieville to Sierra City',
      icon: '🏘️',
      photo: '',
      vehicles: ['AWD / Crossover', 'Sprinter / Van', 'Stock 4x4', 'Modified 4x4'],
      elevation: 'Low to Mid (2,300–4,200 ft)',
      peakSeason: 'Apr–Nov',
      seasons: { spring: 'Good', summer: 'Good', fall: 'Good', winter: 'Variable' },
      description:
        'Hwy 49 follows the North Yuba River through a series of near-intact 1850s mining towns. Downieville sits at the confluence of the Downie River and the North Yuba: original stone buildings, a working courthouse, and a 19th-century gallows. Sierra City sits just below the Sierra Buttes and is the jumping-off point for the Sardine Lakes and Packer Lake basin. The drive between the two towns takes 45 minutes on a two-lane road that drops into the canyon and climbs back out through second-growth pines.',
      alert: { type: 'warning', text: 'Fuel in Downieville is limited and premium priced. Top off in Nevada City or Grass Valley before heading into the canyon.' },
      placeId: 'downieville',
    },
    {
      id: 'bowman-lake',
      name: 'Bowman Lake Basin',
      icon: '🏔️',
      photo: '',
      vehicles: ['Stock 4x4', 'Modified 4x4'],
      elevation: 'High (5,568 ft)',
      peakSeason: 'Jul–Oct',
      seasons: { spring: 'Limited', summer: 'Prime', fall: 'Good', winter: 'Not recommended' },
      description:
        'Bowman Lake anchors one of the densest clusters of alpine lakes in the northern Sierra: Faucherie, Sawmill, Carr, Culbertson, Bullpen, Deadman, and Feeley all sit within a few miles. The approach road filters out anything without real clearance — AWD crossovers can reach the Carr Lake turnoff (8 miles of pavement plus 3 miles of gravel), but the final 3 miles to Bowman Lake are rough, rocky, and single-lane with skid plates strongly recommended. Grouse Ridge Road runs the ridgeline above and is one of the best dark sky corridors in the forest.',
      alert: { type: 'warning', text: 'Final 3 miles to Bowman Lake require high-clearance stock 4x4. No trailers or boats past the paved section.' },
      placeId: 'bowman-lake',
    },
    {
      id: 'poker-flat-ohv',
      name: 'Poker Flat OHV Area',
      icon: '🚗',
      photo: '',
      vehicles: ['Stock 4x4', 'Modified 4x4'],
      elevation: 'Mid (4,000–5,800 ft)',
      peakSeason: 'Jun–Oct',
      seasons: { spring: 'Variable', summer: 'Prime', fall: 'Good', winter: 'Not recommended' },
      description:
        'A rugged 27-mile overland loop starting from Downieville and climbing into the gold-mining regions of Sierra County. Graded forest roads, rocky jeep tracks, and narrow shelf roads with exposure. A key obstacle is a steep, loose climb between Poker Flat and Howland Flat alongside a creek crossing that benefits from a spotter. High-clearance stock 4x4 with skid plates and all-terrain tires. The historic Poker Flat site — placer tailings and stone foundations in a narrow canyon — was made famous by Bret Harte\'s 1869 short story. Out-and-back from Downieville or connect north toward La Porte.',
      alert: { type: 'warning', text: 'High-clearance stock 4x4 with skid plates required. Confirm road conditions at the Downieville Ranger District before heading out.' },
      placeId: 'poker-flat-ohv',
    },
    {
      id: 'french-meadows-reservoir',
      name: 'French Meadows Reservoir',
      icon: '🏊',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/7/74/French_Meadows_and_Hell_Hole_Reservoirs.jpg',
      vehicles: ['Stock 4x4', 'Modified 4x4'],
      elevation: 'Mid (5,218 ft)',
      peakSeason: 'Jun–Oct',
      seasons: { spring: 'Variable', summer: 'Prime', fall: 'Good', winter: 'Not recommended' },
      description:
        'French Meadows is the primary southwest access point into the high Sierra interior. The reservoir covers 2,000 acres and the campgrounds around it serve as a base for the Middle Fork American River canyon and a dense network of forest roads heading north. Swimming off the east shore is good in July and August when the water warms. The access road is paved to the reservoir and dirt beyond.',
      alert: { type: 'warning', text: 'Dispersed sites fill by Friday afternoon most summer weekends. Arrive mid-week for the best options.' },
      placeId: 'french-meadows',
    },
  ],

  recOpportunities: [
    {
      icon: '🚙',
      name: 'OHV & Forest Roads',
      badge: 'Major network',
      description:
        'Tahoe NF has one of the densest unpaved road networks in the northern Sierra. The Bowman Basin, French Meadows, Poker Flat loop, and Henness Pass corridor keep stock 4x4 trucks busy for multiple days. Henness Pass (FR 07) gives AWD vehicles a genuine trans-Sierra route with almost no traffic. Foresthill Divide Road and the Sugar Pine area offer another full day of exploring accessible to AWD crossovers. Check with the Nevada City or Downieville ranger districts for current conditions before heading out.',
      placeIds: ['french-meadows', 'bowman-lake', 'poker-flat-ohv', 'henness-pass', 'foresthill-divide'],
    },
    {
      icon: '🏊',
      name: 'Lakes & Swimming',
      badge: 'Summer highlight',
      description:
        'River swimming is generally not safe until July when snowmelt flows drop to stable levels and granite riverbeds warm up. After that, the options are good. South Yuba Shangri-La (under the Hwy 49 bridge northwest of Nevada City) has granite boulders, natural water slides, and deep pools. Bridgeport and Edwards Crossing in South Yuba State Park are classic. Carr Lake in the Bowman Basin is warmer than the deeper alpine lakes and good for wading. Jackson Meadows Reservoir has gravel beaches and a designated swim area. The Sardine and Packer Lakes are scenic but stay cold due to snowmelt — best for a quick dip, not a long swim. Avoid the Middle Fork American River main stem: it is a high-flow whitewater corridor with underwater hazards.',
      placeIds: ['south-yuba', 'cg-carr-lake', 'jackson-meadows', 'sardine-lakes'],
    },
    {
      icon: '🎣',
      name: 'Fishing',
      badge: 'Good variety',
      description:
        'CDFW regularly stocks Boca Reservoir (rainbow, brown trout, kokanee salmon), Carr Lake, Culbertson Lake, Bullpen Lake, Deadman Lake, and Baltimore Lake (brook trout fingerlings every other year) with triploid rainbow trout. Bullards Bar Reservoir and Sugar Pine Reservoir are warm-water fisheries holding largemouth, smallmouth, and spotted bass — not stocked with trout. Wild and Heritage Trout Waters inside the forest include Lavezzola Creek and Pauley Creek near Downieville, Milton Reservoir on the Middle Fork Yuba, the Truckee River, and sections of the North Fork American River — all designated catch-and-release with barbless hooks and artificial lures only. Best trout action is spring (May–June) and fall (September–October); mid-summer fish go deep.',
      placeIds: ['boca-reservoir', 'bowman-lake', 'south-yuba'],
    },
    {
      icon: '🌙',
      name: 'Dark Skies',
      badge: 'Bortle Class 2 interior',
      description:
        'The forest interior at elevation is genuinely dark. Confirmed Bortle Class 2 at the Bowman Lake Basin and Jackson Meadows area — the Milky Way shows complex structure and dark nebulae are naked-eye visible. No certified dark sky parks exist inside the forest, but the Grouse Ridge Lookout area (FR 17) and Meadow Lake shoreline give wide unobstructed horizons above tree line. Best windows: late August through October when smoke clears and summer moisture drops. The western edge near Nevada City and anything near I-80 is too light-polluted to bother.',
      placeIds: ['camp-grouse-ridge', 'bowman-lake'],
    },
    {
      icon: '🥾',
      name: 'Day Hikes',
      badge: 'Summer highlight',
      description:
        'Sierra Buttes Lookout: drive to the upper staging area off Gold Lake Highway, short walk up the fire road, then 180 stairs to the catwalk at 8,591 ft. Stock 4x4 to trailhead. Loch Leven Lakes: 6 miles round trip, ~1,000 ft gain, off I-80 at Big Bend — cascading waterfalls, granite slabs, three alpine lakes. AWD accessible. Donner Lake Rim (Glacier Way segment): 4.5 miles, ~600 ft, trailhead off Glacier Way in Truckee — views looking down on Donner Lake and the Sierra Crest. AWD accessible. Sand Ridge and Baltimore Lake: 4.8 miles, ~700 ft, Grouse Ridge Trailhead on FR 17 — stock 4x4 required for the approach. Alpine granite walking with access to Baltimore Lake. Most high-country trailheads open by late June.',
      placeIds: ['sierra-buttes-lookout', 'loch-leven', 'donner-lake-rim', 'camp-grouse-ridge'],
    },
  ],

  historyCards: [
    {
      title: 'Nisenan and Washoe Homelands',
      photo: '',
      body: [
        'The Nisenan people — the southernmost branch of the Maidu — inhabited the western Sierra slopes from the American River north through the Yuba, Bear, and Feather river drainages. Their territory extended from the Sacramento Valley floor to the high-elevation crest. Documented village sites near the modern forest boundary include Tipotoya and Loyowisa near Grass Valley, Takema on the Bear River near Colfax, and Hangwite on the American River near Auburn. Bedrock mortar grinding stations and archaeological sites including the Hawley Lake petroglyphs (CA-SIE-1) are found throughout the forest.',
        'The Washoe Tribe held the high Sierra country to the east, centering on Lake Tahoe — Da ow a ga, meaning "edge of the lake" — and crossing the Sierra crest at Donner Pass for thousands of years. Both nations suffered catastrophic losses after 1848. Neither ceded their land by treaty. The Washoe Tribe is federally recognized today with a government presence in Gardnerville, Nevada.',
      ],
    },
    {
      title: 'Gold Rush and Hydraulic Mining',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/The_Diggins_at_Malakoff_Diggins_State_Park_in_California.JPG',
      body: [
        'The 1848 gold discovery at Sutter\'s Mill transformed what is now Tahoe National Forest within months. Placer mining in the Deer Creek and Nevada City drainages was so dense that by 1850 over 10,000 miners worked the creek beds, and the practice of miners excavating underground tunnels gave Nevada City\'s Coyote Street its name. Dutch Flat, established in 1851, boomed to over 5,000 residents and 40 claims within 1.5 miles. Forest City, on the North Fork of Oregon Creek inside the forest, became a National Register Historic District — uniquely, the land is entirely publicly owned and managed by the U.S. Forest Service.',
        'Hydraulic operations using high-pressure water cannons took over by the 1860s. Malakoff Diggins, north of Nevada City, became the largest hydraulic gold mine in the world. The downstream debris choked the Sacramento River system and destroyed farmland. A federal injunction in 1884 — Woodruff v. North Bloomfield Mining Company — effectively ended hydraulic mining in California, one of the first significant environmental rulings in American legal history.',
      ],
      placeId: 'malakoff-diggins',
    },
    {
      title: 'Sierra Buttes Fire Lookout',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Upper_Sardine_Lake_and_the_Sierra_Buttes%2C_California.jpg',
      body: [
        'In 1915, under Forest Supervisor Bigelow, the Tahoe National Forest received funding to construct a lookout on the Sierra Buttes and install a telephone line to Sierra City. Reaching the summit originally required climbing rickety wooden ladders. In 1920 Miss Rena Tomola served as the national forest lookout at the summit — an early example of women employed in wildfire detection. The current two-story, 14\'x14\' steel and concrete structure was built in 1963–64, with the staircase engineered by Richard Eacobacci using WWII-era vehicles to haul materials up Butcher Ranch Road.',
        'The lookout was decommissioned in 1995. Ken Ingle was the last official fire lookout to staff the tower, which was shut down due to reduced Forest Service funding and the difficulty of delivering fuel to the isolated summit. The tower remains open to hikers as a historic destination. No staffing, no permit required.',
      ],
      placeId: 'sierra-buttes-lookout',
    },
  ],

  watchBeforeYouGo: [
    {
      title: 'Return to the High Sierra — Tahoe National Forest Overland',
      source: 'Overland Trail Guides',
      youtubeId: 'FamZpksJGX0',
    },
  ],

  places: [
    { id: 'jackson-meadows', name: 'Jackson Meadows Reservoir', lat: 39.5779, lng: -120.5194, description: 'High-elevation reservoir in the northwest forest near the Sierra Buttes.' },
    { id: 'french-meadows', name: 'French Meadows Reservoir', lat: 39.0668, lng: -120.5004, description: 'Large reservoir at 5,218 ft. Primary southwest access point.' },
    { id: 'bowman-lake', name: 'Bowman Lake', lat: 39.4635, lng: -120.6272, description: 'High-country lake in the Bowman Basin, reached via Bowman Lake Road.' },
    { id: 'south-yuba', name: 'South Yuba River', lat: 39.2960, lng: -120.9850, description: 'Wild and scenic river with swimming holes at Shangri-La, Bridgeport, and Edwards Crossing.' },
    { id: 'sierra-buttes-lookout', name: 'Sierra Buttes Lookout', lat: 39.6080, lng: -120.6291, description: 'Historic fire lookout at 8,591 ft. Decommissioned 1995. Drive up, short hike, 180 stairs to catwalk.' },
    { id: 'malakoff-diggins', name: 'Malakoff Diggins State Historic Park', lat: 39.3960, lng: -120.9017, description: 'World\'s largest hydraulic gold mine site near North Bloomfield.' },
    { id: 'sardine-lakes', name: 'Sardine Lakes', lat: 39.6197, lng: -120.6305, description: 'Upper and Lower Sardine Lakes below Sierra Buttes. Cold due to snowmelt — scenic but not warm swimming.' },
    { id: 'boca-reservoir', name: 'Boca Reservoir', lat: 39.3932, lng: -120.0946, description: 'CDFW-stocked reservoir near Truckee with rainbow trout, brown trout, and kokanee salmon.' },
    { id: 'foresthill-divide', name: 'Foresthill Divide', lat: 39.0147, lng: -120.8166, description: 'Southwest forest zone accessed via Foresthill Divide Road. OHV network, Sugar Pine Reservoir, Mosquito Ridge Road.' },
    { id: 'loch-leven', name: 'Loch Leven Lakes Trailhead', lat: 39.3055, lng: -120.6033, description: 'Trailhead off I-80 at Big Bend. 6 mi RT, 1,000 ft gain. Waterfalls, granite slabs, three alpine lakes.' },
    { id: 'donner-lake-rim', name: 'Donner Lake Rim Trailhead (Glacier Way)', lat: 39.3205, lng: -120.2333, description: 'Trailhead off Glacier Way in Truckee. 4.5 mi, 600 ft gain. Views down to Donner Lake.' },
    { id: 'camp-french-meadows-east', name: 'French Meadows East Shore', lat: 39.0720, lng: -120.4810, description: 'Dispersed pull-outs along the east shore of French Meadows Reservoir.' },
    { id: 'camp-bowman-lake', name: 'Bowman Lake Dispersed', lat: 39.4640, lng: -120.6250, description: 'Dispersed camping along the north shore of Bowman Lake.' },
    { id: 'camp-grouse-ridge', name: 'Grouse Ridge Road (FR 17)', lat: 39.4340, lng: -120.6160, description: 'Ridgeline dispersed sites. Bortle Class 2 dark skies. Exposed, no water. Stock 4x4 required for FR 17.' },
    { id: 'camp-packer-lake', name: 'North of Packer Saddle', lat: 39.6095, lng: -120.6298, description: 'Dispersed sites on upland dirt roads north of Packer Saddle, less crowded than Jackson Meadows campgrounds.' },
    { id: 'cg-french-meadows', name: 'French Meadows Campground', lat: 39.0625, lng: -120.5108, description: 'Developed FS campground with 75 sites near the reservoir.' },
    { id: 'cg-carr-lake', name: 'Carr Lake Campground', lat: 39.4488, lng: -120.6396, description: 'Small first-come campground in the Bowman Basin. AWD can reach the turnoff.' },
    { id: 'cg-jackson-creek', name: 'Jackson Creek Campground', lat: 39.5817, lng: -120.5313, description: 'Campground near Jackson Meadows Reservoir.' },
    { id: 'cg-salmon-creek', name: 'Salmon Creek Campground', lat: 39.6201, lng: -120.6326, description: 'Off Gold Lake Highway near Sardine Lakes. Easy access to the Sierra Buttes area.' },
    { id: 'henness-pass', name: 'Henness Pass Road', lat: 39.4528, lng: -121.0522, description: 'Historic trans-Sierra wagon road (FR 07). AWD passable in dry conditions.' },
    { id: 'downieville', name: 'Downieville', lat: 39.5593, lng: -120.8304, description: 'Historic gold rush town at the North Yuba and Downie river confluence. Limited fuel.' },
    { id: 'sierra-city', name: 'Sierra City', lat: 39.5676, lng: -120.6326, description: 'Small town on Hwy 49 at the base of the Sierra Buttes.' },
    { id: 'poker-flat-ohv', name: 'Poker Flat OHV Area', lat: 39.4620, lng: -120.8750, description: '27-mile overland loop from Downieville. High-clearance stock 4x4 with skid plates required.' },
  ],
}
