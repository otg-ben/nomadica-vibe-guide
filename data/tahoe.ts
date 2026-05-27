import type { VibeGuide } from './mendocino'

export const tahoe: VibeGuide = {
  title: 'Tahoe National Forest',
  badge: 'National Forest · Northern CA',
  quote:
    "California's most visited national forest packs granite peaks, snowmelt rivers, and 800 miles of roads into the northern Sierra. Come mid-July through October when the high passes open and the crowds thin above 6,000 feet.",

  vehicleRatings: [
    { type: 'AWD / Crossover', rating: 'Fair' },
    { type: 'Sprinter / Van', rating: 'Fair' },
    { type: 'Stock 4x4', rating: 'Best' },
    { type: 'Modified 4x4', rating: 'Best' },
  ],

  seasonRatings: [
    { season: 'Spring', rating: 'Fair', description: 'Snow lingers on high routes through May. Low-elevation roads open first.' },
    { season: 'Summer', rating: 'Best', description: 'High passes open July. Lakes warm enough to swim. Busy on holiday weekends.' },
    { season: 'Fall', rating: 'Good', description: 'Crowds drop after Labor Day. Aspens turn gold. Best dispersed camping windows.' },
    { season: 'Winter', rating: 'Inaccessible', description: 'Most forest roads close November through April. Chains required on Hwy 49 crossings.' },
  ],

  crowdLevel: 7,

  darkSkies: {
    rating: 3,
    description:
      'Light pollution from Sacramento and the I-80 corridor limits the western edge. Head to the Jackson Meadows area or east toward the Nevada border for darker skies. No official Bortle rating on record for the forest interior.',
  },

  attributeTags: [
    { icon: '🪨', label: 'Granite Sierra' },
    { icon: '🏊', label: 'Lakes & Swimming' },
    { icon: '🪵', label: 'Gold Rush History' },
    { icon: '🛣️', label: 'Jeep Trails' },
    { icon: '🎣', label: 'Trout Fishing' },
    { icon: '🏔️', label: 'High Country' },
  ],

  overview: [
    'Tahoe National Forest runs along the crest of the northern Sierra Nevada from the North Fork of the American River to the Yuba River watershed. It covers roughly 932,000 acres and sees more visitors than any other California national forest. That popularity is earned: the combination of granite peaks, high-elevation lakes, swift rivers, and gold rush ghost towns is hard to match.',
    'The terrain is classic Sierra granite: steep canyon walls carved by glaciers, talus slopes, meadows fed by snowmelt, and ridgelines that top out near 9,000 feet. The forest splits into two distinct zones. The western slopes, accessed from Hwy 49 towns like Grass Valley and Nevada City, are lower, denser, and greener. The eastern interior, above 6,500 feet, opens into exposed granite and the kind of lake-dotted high country that draws hikers and 4x4 drivers from all over the state.',
    'About half the forest road network is unpaved. Stock 4x4 trucks handle the majority of it without issue, but the most interesting routes — Fordyce Jeep Trail, the Bowman Lake Road corridor, and the upper Jackson Meadows area — reward vehicles with good clearance and lockers. AWD crossovers and vans can access the developed campground hubs and most paved forest routes, but dispersed camping in the backcountry is largely a 4x4 proposition.',
    'The main entry hubs are Truckee (south, via I-80), Nevada City and Grass Valley (west, via Hwy 49), and Sierraville (north). Fuel is available in all three towns. French Meadows Reservoir and the Jackson Meadows area are the two most popular 4x4 staging zones. Get there before 10am on summer weekends to find dispersed sites along the reservoir.',
  ],

  kbyg: [
    {
      type: 'warning',
      text: 'Most forest roads above 6,500 ft close by November and do not open until late June or early July. Check fs.usda.gov/tahoe for current road status before heading in.',
    },
    {
      type: 'warning',
      text: 'Fordyce Jeep Trail requires a modified 4x4 with lockers. It is not a trail for stock trucks or first-time wheelers. Multiple recovery incidents happen each season.',
    },
    {
      type: 'warning',
      text: 'Fire restrictions can close dispersed camping during Red Flag conditions. Check inciweb.wildfire.gov and the forest hotline before your trip in summer.',
    },
    {
      type: 'info',
      text: 'No permit required for dispersed camping. The standard rules apply: 150 feet from water, no camping in the same spot more than 14 days, pack out everything.',
    },
    {
      type: 'info',
      text: 'Nearest fuel from the western side: Nevada City, Grass Valley, Auburn. From the north: Truckee, Sierraville. Long gaps exist between towns once you are in the forest interior.',
    },
    {
      type: 'info',
      text: 'America the Beautiful passes (Annual, Senior, Access) are accepted at all developed campgrounds. Dispersed camping is free.',
    },
    {
      type: 'good',
      text: 'The Sierra Buttes Lookout is open to the public when staffed in summer. The catwalk at 8,591 feet puts you above the surrounding peaks. No permit required — just hike up.',
    },
    {
      type: 'good',
      text: 'Malakoff Diggins State Historic Park sits on the forest boundary and gives excellent context for the hydraulic mining era. Easy day trip from Nevada City.',
    },
  ],

  popularAreas: [
    {
      name: 'Jackson Meadows & Gold Lake Road',
      placeId: 'jackson-meadows',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Upper_Sardine_Lake_and_the_Sierra_Buttes%2C_California.jpg',
      description:
        'The northwest corner of the forest, centered on Hwy 49 between Bassetts and Sierraville. This is the Sierra Buttes country: granite spires rising above a chain of lakes including Gold Lake, Sardine Lakes, Packer Lake, and Salmon Lake. The network of dirt roads between the lakes is accessible to stock 4x4 trucks and serves as a base for the Sierra Buttes Lookout hike. Gold Lake is stocked with rainbow trout by CDFW. Crowds peak in July and August at the lake trailheads but thin out fast once you are on dirt.',
    },
    {
      name: 'French Meadows Reservoir',
      placeId: 'french-meadows',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/7/74/French_Meadows_and_Hell_Hole_Reservoirs.jpg',
      description:
        'A 2,000-acre reservoir sitting at 5,218 feet in the Middle Fork American River drainage, southwest of Tahoe City. The reservoir is the primary 4x4 staging zone for the southwestern forest. Forest Road 96 runs the ridge above it and connects to trails toward Rubicon Springs. Dispersed sites along the reservoir fill fast on summer weekends — arrive Friday afternoon or Tuesday through Thursday. The Rubicon Trail runs along the southern perimeter and links down to El Dorado National Forest.',
    },
    {
      name: 'Bowman Lake Road Corridor',
      placeId: 'bowman-lake',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Rubicon_River_flowing_through_cataract_to_Hell_Hole_Reservoir.jpg',
      description:
        'Bowman Lake Road leaves Hwy 20 north of Nevada City and climbs into a basin ringed with small high-country lakes: Bowman, Faucherie, Sawmill, Carr, Feeley, and others. The road is rough and requires a truck with decent clearance. Beyond the lakes, Grouse Ridge Road runs the ridge with views toward the Buttes and connects to the South Yuba River canyon below. This corridor is less crowded than the Jackson Meadows area because the approach road keeps out vehicles that are not up to it.',
    },
    {
      name: 'South Yuba River Canyon',
      placeId: 'south-yuba',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/The_Diggins_at_Malakoff_Diggins_State_Park_in_California.JPG',
      description:
        'The South Yuba cuts a wild canyon through the western forest, accessible from Nevada City via North Bloomfield Road and from Hwy 49 at the South Yuba River State Park. Swimming holes at Bridgeport and Edwards Crossing are popular in summer. Malakoff Diggins State Historic Park sits above the canyon and marks the site of the world\'s largest hydraulic gold mine. The canyon offers some of the best low-elevation access in the forest for AWD vehicles and vans.',
    },
  ],

  roadNetwork: {
    prose:
      'The forest has roughly 800 miles of road, about half unpaved. The main paved corridors — Hwy 49 along the west edge, I-80 through the south, and Hwy 89 to the east — serve as staging routes. From there, a dense web of forest roads branches into the interior. Most of the interesting overland country sits above 5,000 feet and requires some clearance. Stock 4x4 trucks can reach French Meadows, the Jackson Meadows lake basin, and the Bowman Lake Road corridor without modification. The Fordyce Jeep Trail and the upper Rubicon are a different category: technical rock, water crossings, and genuine recovery risk. Avoid both without a modified rig and a second vehicle. Fuel gaps are real once you leave the highway towns.',
    vehicleRatings: [
      { type: 'AWD / Crossover', rating: 'Fair' },
      { type: 'Sprinter / Van', rating: 'Fair' },
      { type: 'Stock 4x4', rating: 'Best' },
      { type: 'Modified 4x4', rating: 'Best' },
    ],
    routes: [
      {
        name: 'Henness Pass Rd',
        description:
          'Historic wagon road crossing the Sierra from the Truckee Meadows to the Yuba River. Paved in sections, dirt in others. Connects Hwy 89 near Truckee to Sierraville and beyond. Open most of the year at lower elevations.',
      },
      {
        name: 'FR 96 / Middle Fork',
        description:
          'The main access road into the French Meadows area. Paved to the reservoir, then dirt beyond toward Rubicon Springs. Stock 4x4 can reach French Meadows; the Rubicon connector requires more.',
      },
      {
        name: 'Bowman Lake Rd',
        description:
          'Leaves Hwy 20 and climbs north into the lake basin. Rocky and rutted in sections. High-clearance truck required. Connects to Grouse Ridge Road at the top.',
      },
      {
        name: 'Gold Lake Rd',
        description:
          'Paved road running through the Jackson Meadows lake chain. Access to Sierra Buttes, Sardine Lakes, Packer Lake, and Gold Lake. Dirt spurs off the main road vary from easy to moderate.',
      },
      {
        name: 'Fordyce Creek Tr',
        description:
          'Technical jeep trail from the Hwy 20 / Hwy 80 junction area up to Fordyce Lake. Rock ledges, water crossings, high-center terrain. Modified 4x4 with lockers only. Do not attempt solo.',
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
        'The OTG route through Tahoe NF runs from the Nevada City foothills to the Truckee area, linking the major high-country corridors. It crosses the Bowman Lake basin, climbs past the Buttes, and drops through the river canyons before reaching the eastern sierra. Mostly dirt, with some technical sections that require stock 4x4 clearance at minimum.',
      link: 'https://www.overlandtrailguides.com/post/tahoe-backcountry-discovery-trail',
      photo: 'https://static.wixstatic.com/media/acf3a1_a2962c061406411482f1dbfd67af9213~mv2.jpg',
    },
  ],

  camping: {
    prose:
      'Dispersed camping is free and does not require a permit. The best corridors are along French Meadows Reservoir, the Bowman Lake basin, the Jackson Meadows lake chain, and the Grouse Ridge Road ridgeline. Sites fill fast on summer weekends — aim for Tuesday through Thursday arrivals, or get there by Friday afternoon. Developed campgrounds are available at French Meadows, Carr Lake, Jackson Creek, and Rucker Lake, among others. Most book up weeks in advance on recreation.gov for summer weekends.',
    dispersedSpots: [
      {
        name: 'French Meadows Reservoir East',
        description: 'Flat pull-outs along the east shore. Boat launch nearby. Good base for Rubicon access.',
        placeId: 'camp-french-meadows-east',
      },
      {
        name: 'Bowman Lake Shore',
        description: 'Multiple spots along the north shore. Dark and quiet on weeknights. Rocky approach.',
        placeId: 'camp-bowman-lake',
      },
      {
        name: 'Grouse Ridge Road',
        description: 'Ridge dispersed sites with views toward the Buttes. Exposed to wind. No water nearby.',
        placeId: 'camp-grouse-ridge',
      },
      {
        name: 'Packer Lake Saddle Area',
        description: 'Sites near the saddle below Sierra Buttes. Quick hike up to the lookout from camp.',
        placeId: 'camp-packer-lake',
      },
    ],
    developedCampgrounds: [
      {
        name: 'French Meadows Campground',
        description: '75 sites, near the reservoir. Non-electric. Reserve on recreation.gov.',
        placeId: 'cg-french-meadows',
      },
      {
        name: 'Carr Lake Campground',
        description: 'Small FS campground in the Bowman Basin. First-come first-served.',
        placeId: 'cg-carr-lake',
      },
      {
        name: 'Jackson Creek Campground',
        description: 'Quiet campground near Jackson Meadows Reservoir. Tent and small RV sites.',
        placeId: 'cg-jackson-creek',
      },
      {
        name: 'Salmon Creek Campground',
        description: 'Just off Gold Lake Road near Sardine Lakes. Easy access to the Buttes trailhead.',
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
      vehicles: ['Hiking only'],
      elevation: 'High (8,591 ft)',
      peakSeason: 'Jul–Sep',
      seasons: { spring: 'Limited', summer: 'Prime', fall: 'Prime', winter: 'Not recommended' },
      description:
        'The Sierra Buttes rise above the Gold Lake basin as a jagged granite outcrop visible from 100 miles away. The historic fire lookout at 8,591 feet is still active in summer and is open to visitors when staffed. The hike from Packer Lake Saddle is about 5 miles round trip with 1,500 feet of gain. The final approach climbs a steel staircase bolted into the rock face to the catwalk — exposure is real and not suitable for anyone uncomfortable with heights. Views cover the Yuba River drainage, the Feather River country, and on clear days a slice of Nevada.',
      alert: { type: 'good', text: 'Lookout is open to public when staffed (typically weekends July–September). No permit needed.' },
      placeId: 'sierra-buttes-lookout',
    },
    {
      id: 'fordyce-jeep-trail',
      name: 'Fordyce Jeep Trail',
      icon: '🚙',
      photo: '',
      vehicles: ['Modified 4x4'],
      elevation: 'High (7,200 ft)',
      peakSeason: 'Jul–Sep',
      seasons: { spring: 'Not recommended', summer: 'Prime', fall: 'Good', winter: 'Not recommended' },
      description:
        'Fordyce is a full day of technical wheeling between Hwy 20 and Fordyce Lake. The trail climbs through granite boulders, creek crossings, and shelf roads with exposure. It draws built trucks from all over the state. Recovery incidents are common — this is not a trail for first-timers or stock vehicles. Go with a second vehicle and recovery gear. The payoff is a remote high-country lake in a granite basin with no crowds.',
      alert: { type: 'warning', text: 'Modified 4x4 with lockers required. Do not attempt solo or without recovery equipment.' },
      placeId: 'fordyce-trail',
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
        'French Meadows is the primary western access point for the high sierra interior. The reservoir covers 2,000 acres and the campgrounds around it serve as base camp for the Rubicon Trail, Middle Fork American River canyon, and a network of forest roads heading north toward the Buttes. Swimming off the east shore is good in July and August when the water warms. The access road is paved to the reservoir — dirt beyond.',
      alert: { type: 'warning', text: 'Dispersed sites along the reservoir fill by Friday afternoon most summer weekends. Arrive mid-week for the best options.' },
      placeId: 'french-meadows',
    },
    {
      id: 'malakoff-diggins',
      name: 'Malakoff Diggins',
      icon: '⛏️',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/The_Diggins_at_Malakoff_Diggins_State_Park_in_California.JPG',
      vehicles: ['AWD / Crossover', 'Sprinter / Van', 'Stock 4x4', 'Modified 4x4'],
      elevation: 'Low (3,200 ft)',
      peakSeason: 'Apr–Nov',
      seasons: { spring: 'Good', summer: 'Good', fall: 'Good', winter: 'Variable' },
      description:
        'Malakoff Diggins is the largest hydraulic gold mine site in the world. Operators blasted away entire hillsides with high-pressure water cannons between 1866 and 1884, leaving a 600-acre canyon of eroded spires and gravel mounds that looks nothing like the surrounding forest. The state historic park sits on the forest boundary, near the ghost town of North Bloomfield. Day use fee applies. Easy paved access from Nevada City makes this a viable stop for any rig.',
      alert: { type: 'good', text: 'Day use fee waived with California State Parks annual pass or America the Beautiful pass.' },
      placeId: 'malakoff-diggins',
    },
  ],

  recOpportunities: [
    {
      icon: '🚙',
      name: 'OHV & Jeep Trails',
      badge: 'Major network',
      description:
        'Tahoe NF has one of the most developed OHV networks in the northern Sierra. The Fordyce Jeep Trail is the prestige run — technical, remote, modified-only. Below that level, the Bowman Basin, French Meadows, and Jackson Meadows corridors keep stock 4x4 trucks busy for multiple days. The forest connects to El Dorado NF to the south via the Rubicon Trail, making end-to-end traverses possible. Trail conditions vary: check with the Nevada City Ranger District before any technical route.',
      placeIds: ['fordyce-trail', 'french-meadows', 'bowman-lake'],
    },
    {
      icon: '🏊',
      name: 'Lakes & Swimming',
      badge: 'Summer highlight',
      description:
        'The northern Sierra lake chain is the main draw for summer visitors. Gold Lake, Sardine Lake, Packer Lake, Salmon Lake, and Bowman Lake all have swimming access. The Sardine Lakes are the most photographed but also the most crowded. Feeley and Carr lakes in the Bowman basin are quieter and accessible with a 4x4. Water temperatures in the upper lakes are cold until mid-July. South Yuba River swimming holes at Bridgeport and Edwards Crossing are warmer and reachable by AWD.',
      placeIds: ['gold-lake', 'sardine-lakes', 'bowman-lake', 'south-yuba'],
    },
    {
      icon: '🎣',
      name: 'Fishing',
      badge: 'Fair by CA standards',
      description:
        'CDFW stocks Gold Lake, Sardine Lakes, and several smaller lakes with rainbow trout through summer. Catches are fair to good in June and July, slower by August as water warms. The Middle Fork American River and South Yuba hold wild trout but fishing pressure is high near access points. Regulations vary by water body — check current CDFW regs before fishing any lake or stream in the forest.',
      placeIds: ['gold-lake', 'south-yuba', 'french-meadows'],
    },
    {
      icon: '🌙',
      name: 'Dark Skies',
      badge: 'Fair by CA standards',
      description:
        'Light pollution from Sacramento and the I-80 corridor makes the western forest a poor choice for stargazing. The Jackson Meadows area and the Bowman Basin are noticeably darker — on clear nights the Milky Way is visible from ridge camps above 7,000 feet. The best windows are late August through September when summer moisture drops and smoke clears. No designated dark sky preserves in the forest.',
      placeIds: ['camp-grouse-ridge', 'jackson-meadows'],
    },
    {
      icon: '🥾',
      name: 'Hiking',
      badge: 'Summer highlight',
      description:
        'The Sierra Buttes Lookout trail is the signature hike — 5 miles round trip with 1,500 feet of gain from Packer Lake Saddle, ending at a catwalk lookout with exposure. The Grouse Ridge loop covers granite slabs and lake views with less foot traffic. South Yuba River Trail near Bridgeport is a low-elevation option when the high country is still under snow. Most trailheads are accessible by late June.',
      placeIds: ['sierra-buttes-lookout', 'south-yuba', 'camp-grouse-ridge'],
    },
  ],

  historyCards: [
    {
      title: 'Nisenan and Washoe Homelands',
      photo: '',
      body: [
        'The northern Sierra Nevada was home to the Nisenan people — the southernmost branch of the Maidu — whose villages occupied the river canyons and foothills from the American River north through the Yuba and Bear River drainages. The Washoe Tribe of Nevada and California held the high sierra country to the east, including the Lake Tahoe basin, and made seasonal trips into the mountains for hunting and gathering.',
        'Both nations suffered catastrophic losses after 1848. Gold rush miners flooded their territory within months of the Sutter\'s Mill discovery, and the violence that followed — including state-sponsored militia campaigns in the 1850s — reduced the Nisenan population by more than 90 percent in under a decade. The Washoe Tribe survived but lost access to most of their traditional territory. Neither group ceded their land by treaty. The Washoe Tribe is federally recognized today and maintains a government presence in Gardnerville, Nevada.',
      ],
    },
    {
      title: 'Gold Rush and Hydraulic Mining',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/The_Diggins_at_Malakoff_Diggins_State_Park_in_California.JPG',
      body: [
        'The 1848 discovery of gold at Sutter\'s Mill brought 300,000 people to California within three years. The foothills and canyons of what is now Tahoe National Forest were among the most intensively mined regions in the state. Placer mining quickly gave way to hydraulic operations — enormous water cannons fed by a network of ditches that blasted entire hillsides into sluice boxes.',
        'Malakoff Diggins, operated north of Nevada City from 1866 to 1884, used this method on an industrial scale and became the largest hydraulic gold mine in the world. Debris from the operations choked the Yuba and Sacramento rivers, destroying downstream farmland. A federal court injunction in 1884 (Woodruff v. North Bloomfield Mining Company) effectively ended hydraulic mining in California — one of the first major environmental rulings in American legal history. The scarred canyon at Malakoff is still largely bare today.',
      ],
      placeId: 'malakoff-diggins',
    },
    {
      title: 'Sierra Buttes Fire Lookout',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Upper_Sardine_Lake_and_the_Sierra_Buttes%2C_California.jpg',
      body: [
        'The Sierra Buttes Lookout was built by the U.S. Forest Service in the early 20th century as part of a network of fire detection stations across the northern Sierra. At 8,591 feet, it has unobstructed views across millions of acres of forest and was an essential communication node before aerial detection made ground lookouts less critical.',
        'The lookout is still staffed by volunteers in summer and is one of the few in the Sierra where visitors can climb to the catwalk. The final approach involves a steel staircase bolted into the rock face — an original USFS structure now considered historic. The Tahoe National Forest Association helps fund ongoing maintenance.',
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
    { id: 'south-yuba', name: 'South Yuba River', lat: 39.2960, lng: -120.9850, description: 'Wild and scenic river with swimming holes at Bridgeport and Edwards Crossing.' },
    { id: 'sierra-buttes-lookout', name: 'Sierra Buttes Lookout', lat: 39.6080, lng: -120.6291, description: 'Historic fire lookout at 8,591 ft with catwalk open to visitors when staffed.' },
    { id: 'fordyce-trail', name: 'Fordyce Jeep Trail', lat: 39.3491, lng: -120.5040, description: 'Technical OHV trail from Hwy 20 area to Fordyce Lake. Modified 4x4 required.' },
    { id: 'malakoff-diggins', name: 'Malakoff Diggins State Historic Park', lat: 39.3960, lng: -120.9017, description: 'World\'s largest hydraulic gold mine site near North Bloomfield.' },
    { id: 'gold-lake', name: 'Gold Lake', lat: 39.6477, lng: -120.6267, description: 'Stocked trout lake in the Gold Lake basin. Paved access from Gold Lake Road.' },
    { id: 'sardine-lakes', name: 'Sardine Lakes', lat: 39.6197, lng: -120.6305, description: 'Upper and Lower Sardine Lakes below Sierra Buttes. Popular swimming and photography spot.' },
    { id: 'camp-french-meadows-east', name: 'French Meadows East Shore', lat: 39.0720, lng: -120.4810, description: 'Dispersed pull-outs along the east shore of French Meadows Reservoir.' },
    { id: 'camp-bowman-lake', name: 'Bowman Lake Dispersed', lat: 39.4640, lng: -120.6250, description: 'Dispersed camping along the north shore of Bowman Lake.' },
    { id: 'camp-grouse-ridge', name: 'Grouse Ridge Road', lat: 39.4340, lng: -120.6160, description: 'Ridgeline dispersed sites with views. Exposed. No water nearby.' },
    { id: 'camp-packer-lake', name: 'Packer Lake Saddle', lat: 39.6095, lng: -120.6298, description: 'Dispersed sites near the Sierra Buttes trailhead.' },
    { id: 'cg-french-meadows', name: 'French Meadows Campground', lat: 39.0625, lng: -120.5108, description: 'Developed FS campground with 75 sites near the reservoir.' },
    { id: 'cg-carr-lake', name: 'Carr Lake Campground', lat: 39.4488, lng: -120.6396, description: 'Small first-come campground in the Bowman Basin.' },
    { id: 'cg-jackson-creek', name: 'Jackson Creek Campground', lat: 39.5817, lng: -120.5313, description: 'Campground near Jackson Meadows Reservoir.' },
    { id: 'cg-salmon-creek', name: 'Salmon Creek Campground', lat: 39.6201, lng: -120.6326, description: 'Campground off Gold Lake Road near the Sardine Lakes trailhead.' },
  ],
}
