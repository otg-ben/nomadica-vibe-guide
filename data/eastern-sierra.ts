import type { VibeGuide } from './mendocino'

export const easternSierra: VibeGuide = {
  title: 'Eastern Sierra & Owens Valley',
  badge: 'Regional Guide · Eastern California',
  forestUrl: 'https://www.fs.usda.gov/inyo',
  quote:
    "The eastern Sierra face drops from 14,000-foot granite peaks to the Owens Valley floor in 15 horizontal miles. Between Bridgeport and Lone Pine: a gold rush ghost town, an ancient inland sea, the world's oldest trees, premier fly fishing, and 200 miles of volcanic and granite desert terrain.",

  vehicleRatings: [
    { type: 'AWD / Crossover', rating: 'Good' },
    { type: 'Sprinter / Van', rating: 'Good' },
    { type: 'Stock 4x4', rating: 'Best' },
    { type: 'Modified 4x4', rating: 'Best' },
  ],

  seasonRatings: [
    { season: 'Spring', rating: 'Fair', description: 'Mono Lake and Owens Valley accessible from March. Bodie Road and high passes snow-closed through May. Lower elevation routes open early.' },
    { season: 'Summer', rating: 'Best', description: 'All routes open by July. High-elevation access at peak. Owens Valley midday heat runs into the 90s. Plan early starts for Alabama Hills and low-desert objectives.' },
    { season: 'Fall', rating: 'Good', description: 'Crowds drop after Labor Day. Aspens peak mid-October on the June Lake Loop and the eastern canyons. Best photography light. Snow possible above 8,000 ft after mid-October.' },
    { season: 'Winter', rating: 'Variable', description: 'Owens Valley, Alabama Hills, and Mono Basin stay accessible. Bodie Road closes at the gate. High passes closed. Best season for solitude at low elevations.' },
  ],

  crowdLevel: 7,

  darkSkies: {
    rating: 4,
    description:
      'White Mountains at 10,000–11,200 ft: Bortle Class 1–2, same range as the Great Basin desert. Alabama Hills: Bortle Class 2–3. Mono Basin: Bortle Class 3. Volcanic Tablelands north of Bishop: Bortle Class 3. The Owens Valley floor around Bishop and Lone Pine carries some town light pollution but remains usable. Reserve 5/5 for Black Rock Desert and Massacre Rim. This region rates 4/5.',
  },

  attributeTags: [
    { icon: '🎣', label: 'Fly fishing' },
    { icon: '🌋', label: 'Volcanic terrain' },
    { icon: '🏜️', label: 'High desert' },
    { icon: '🌌', label: 'Dark skies' },
    { icon: '⛺', label: 'Dispersed camping' },
    { icon: '🏔️', label: 'Sierra access' },
  ],

  overview: [
    "The Eastern Sierra runs 200 miles along the fault-block escarpment from Bridgeport in the north to Lone Pine and Whitney Portal at the southern end. The Sierra Nevada crest drops from 14,000-foot peaks to the Owens Valley floor at 4,000 feet over a horizontal distance of 10 to 15 miles. The exposure on the east face is unlike anything visible from the western slope.",
    "This is a multi-jurisdiction region. Inyo National Forest manages most of the federal land. Bodie State Historic Park manages the ghost town. Mono Lake Tufa State Natural Reserve protects the lake's tufa towers. The BLM Bishop Field Office oversees the Alabama Hills and Volcanic Tablelands. LADWP controls Crowley Lake and most of the Owens Valley water infrastructure. Each managing agency has its own rules, and they are different from one to the next.",
    "US-395 is the main corridor and it passes through or near every gateway from Bridgeport south to Lone Pine. The paved side routes handle the most-visited destinations: Bodie Road (Hwy 270), the June Lake Loop (Hwy 158), Hwy 168 to Bishop Creek, Rock Creek Road, and Whitney Portal Road. Get off the pavement and the region opens up. The Volcanic Tablelands, Mazourka Canyon, the roads into the White Mountains, and the BLM land east of the highway are where the crowds thin.",
    "Dispersed camping is more restricted here than in most California national forests. The June Lake Loop, Mammoth Lakes basin, Bishop Creek canyons, Convict Lake, and Rock Creek all prohibit dispersed camping. Alabama Hills requires a free permit and has designated sites only since 2019. The Volcanic Tablelands north of Bishop and BLM land around Crowley Lake offer the most accessible dispersed camping near the main corridor.",
  ],

  kbyg: [
    { type: 'warning', text: 'Alabama Hills requires a free Recreation Area Permit for camping. Designated sites only. Pick up a permit at the Lone Pine Visitor Center or self-register at the Movie Road kiosk. No camping outside designated sites.' },
    { type: 'warning', text: 'Dispersed camping is prohibited at the June Lake Loop, Mammoth Lakes basin, Bishop Creek canyons, Convict Lake, and Rock Creek. These are day-use areas in Inyo NF. The Volcanic Tablelands north of Bishop and BLM land near Crowley Lake are the primary dispersed camping zones.' },
    { type: 'warning', text: 'Bodie Road (Hwy 270) closes at the gate 3 miles from the park when snow falls. The unplowed section to the ghost town requires snowshoes or skis in winter. Check Bodie State Park website before heading north.' },
    { type: 'warning', text: 'Papoose Flat (via Mazourka Canyon from Independence or Death Valley Road near Big Pine) requires a modified 4x4. Loose shale switchbacks, narrow shelf road, no room to turn around in sections. Not appropriate for stock vehicles.' },
    { type: 'info', text: 'Fuel gaps are real. Bridgeport, Lee Vining, Mammoth, Bishop, Big Pine, Independence, and Lone Pine are the gas stops on US-395. There is nothing between Big Pine and Lone Pine for 60 miles heading south.' },
    { type: 'info', text: 'LADWP owns most of the Owens Valley floor and Crowley Lake. Day use is generally permitted but camping and off-road travel are restricted on LADWP parcels. Stick to designated recreation areas.' },
    { type: 'info', text: 'Cell signal drops in the canyons and along most dirt routes. Download CalTopo, Gaia GPS, or the Inyo NF Motor Vehicle Use Map before leaving Bishop or Lone Pine.' },
    { type: 'good', text: 'Ancient Bristlecone Pine Forest is free. No reservation required. Schulman Grove Visitor Center is open seasonally June through mid-October. Arrive before 9am or after 4pm to avoid the tour bus crowd.' },
    { type: 'good', text: 'Travertine Hot Springs south of Bridgeport is a free BLM soak with Sierra views and no fee. Tiered rock pools, no facilities. The best no-cost hot spring in the region.' },
  ],

  popularAreas: [
    {
      name: 'Bodie State Historic Park',
      placeId: 'bodie-ghost-town',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Bodie_California_State_Park_07.jpg',
      description:
        "The best-preserved ghost town in the American West, maintained in a state of arrested decay since becoming a California State Park in 1962. At its peak in 1879, Bodie held 8,500 residents and 65 saloons. Today roughly 200 original buildings stand with interiors exactly as the last residents left them. The park does not restore buildings — only stabilizes them. Bodie Road (Hwy 270) is paved for most of its length with the final 3 miles graded gravel, accessible to AWD crossovers in summer. Day-use fee required.",
    },
    {
      name: 'Mono Lake Tufa Reserve',
      placeId: 'mono-lake-south-tufa',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/17_27_040_mono_lake.jpg',
      description:
        "Mono Lake has no outlet. Water leaves only through evaporation, which has concentrated salts and carbonates to three times the salinity of the ocean over 700,000 years. Tufa towers form where underwater freshwater springs meet the alkaline lakewater and calcium carbonate precipitates. LADWP began diverting the lake's feeder streams in 1941 and the lake dropped 45 feet, exposing the towers. A 1994 State Water Board order requires flow restoration. The lake is rising but remains below its 1941 level. South Tufa off US-395 south of Lee Vining charges a day-use fee. Navy Beach on the south shore and the north shore tufa area off Cemetery Road are free.",
    },
    {
      name: 'Ancient Bristlecone Pine Forest',
      placeId: 'schulman-grove',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/5/55/A348%2C_Ancient_Bristlecone_Pine_Forest%2C_Inyo_National_Forest%2C_California%2C_USA%2C_2011.JPG',
      description:
        "The White Mountains above 10,000 feet support the world's oldest living trees. Methuselah grows somewhere in the Schulman Grove and is 4,855 years old as of 2023. Its location is kept unlabeled to protect it from vandalism. The oldest bristlecones survive at the most extreme elevations on dolomitic soil where cold temperatures and poor nutrients limit competition. Dead wood here persists for thousands of years — the bleached snags in the Patriarch Grove are older than most of the living trees. Road to Schulman Grove is paved. Patriarch Grove requires high-clearance vehicle and is 12 miles further.",
    },
    {
      name: 'Alabama Hills',
      placeId: 'alabama-hills',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Arches_in_Alabama_Hills_California.jpg',
      description:
        "Rounded granite and metamorphic boulders directly below the eastern face of the Sierra Nevada, with Mt. Whitney visible above the rock from multiple angles. Named by Southern sympathizers who celebrated the CSS Alabama's raiding exploits during the Civil War. Hollywood location scouts arrived in the 1920s and have never stopped coming back. Over 400 films shot here. The arches are concentrated on the north side of Movie Flat Road. Free day use. Camping requires a free permit and designated sites only.",
    },
    {
      name: 'Volcanic Tablelands',
      placeId: 'volcanic-tablelands',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Volcanic_Tablelands_%2826960900493%29.jpg',
      description:
        "A broad basalt plateau north of Bishop carved by the Long Valley eruption 760,000 years ago. Cut by Fish Slough and a network of BLM dirt roads accessible to AWD and above. The Chidago Canyon petroglyph site has over 50 rock art panels attributed to the ancestral Paiute. The tablelands offer the most accessible dispersed camping near Bishop with Bortle Class 3 dark skies and wide open horizons. Off-road vehicle use restricted to designated routes.",
    },
    {
      name: 'June Lake Loop',
      placeId: 'june-lake',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/High_Sierra%2C_June_Lake%2C_CA_2016_%2828916188940%29.jpg',
      description:
        "A 16-mile paved loop (Hwy 158) west of US-395 connecting June Lake, Gull Lake, Silver Lake, and Grant Lake below the Reversed Peak ridgeline. Aspen groves turn gold mid-October and draw photographers from across the state. June Mountain Ski Area anchors the north end. Good food and lodging in June Lake town for a base camp. No dispersed camping on the loop. Camping is in the developed sites around the lakes.",
    },
    {
      name: 'Bishop Creek Canyon',
      placeId: 'bishop-creek',
      photo: '',
      description:
        "West of Bishop, Hwy 168 climbs into a canyon with three forks: North, Middle, and South. The canyon holds nine lakes above 9,000 feet including North Lake, South Lake, and Lake Sabrina. The entire creek system is managed as a fly-fishing corridor and is the primary High Sierra backcountry trailhead zone above Bishop. Day use only in the canyon. No dispersed camping.",
    },
    {
      name: 'Whitney Portal',
      placeId: 'whitney-portal',
      photo: '',
      description:
        "The base camp for Mt. Whitney at 14,505 feet, the highest peak in the contiguous United States. The portal road climbs from Lone Pine at 3,700 feet to the trailhead at 8,360 feet. The Whitney Zone requires a permit for overnight trips and a day-hike permit for summit attempts from May 1 through November 1. Permits are allocated by lottery in February. Walk-up permits are available at the portal on a very limited basis. The Whitney Portal Store and the North Fork of Lone Pine Creek fishing are worth the drive regardless of summit plans.",
    },
    {
      name: 'Crowley Lake & Hot Creek',
      placeId: 'crowley-lake',
      photo: '',
      description:
        "Crowley Lake sits at 6,781 feet in the Long Valley Caldera. LADWP owns the water. The lake holds brown trout, rainbow trout, and Sacramento perch. Opening Day in late April draws over 1,000 anglers. Hot Creek, 3 miles south of Mammoth Airport, is a designated fly-fishing-only catch-and-release stream known for large wild brown trout. Swimming in Hot Creek is prohibited due to active thermal venting and unstable banks.",
    },
  ],

  roadNetwork: {
    prose:
      'US-395 is the spine. From Bridgeport south to Lone Pine it passes through every major gateway and fuel stop. The paved side routes handle the most popular destinations: Bodie Road (Hwy 270), the June Lake Loop (Hwy 158), Hwy 168 to Bishop Creek, Rock Creek Road, and Whitney Portal Road. Most AWD crossovers can handle the standard dirt routes in dry conditions. A handful of the more remote objectives demand more. Papoose Flat via Mazourka Canyon or Death Valley Road near Big Pine is modified 4x4 only. The White Mountain Road to Patriarch Grove is high-clearance required. Fuel in every town along US-395 before heading off the pavement.',
    vehicleRatings: [
      { type: 'AWD / Crossover', rating: 'Good' },
      { type: 'Sprinter / Van', rating: 'Good' },
      { type: 'Stock 4x4', rating: 'Best' },
      { type: 'Modified 4x4', rating: 'Best' },
    ],
    routes: [
      {
        name: 'US-395 (Main Corridor)',
        description: 'The spine of the region. Two-lane highway from Bridgeport south through Bishop to Lone Pine, paved and well-maintained. Every major gateway, fuel stop, and side road is accessed from US-395. Long gaps between stations on the southern section — fuel in town before heading off-highway.',
      },
      {
        name: 'Bodie Road (Hwy 270)',
        description: 'Paved for 10 miles from US-395 with the final 3 miles graded gravel. AWD accessible in summer. The gate 3 miles from the park closes when snow falls. Stock 4x4 handles the unpaved section without issue.',
      },
      {
        name: 'Volcanic Tablelands (BLM)',
        description: 'A network of BLM dirt roads north of Bishop off US-395. AWD crossovers handle the main tablelands routes in dry conditions. High-clearance preferred for the Fish Slough and petroglyph access roads. Good dispersed camping access. Off-road restricted to designated routes.',
      },
      {
        name: 'Mazourka Canyon Road',
        description: 'Leaves Independence east of US-395 and climbs into the Inyo Mountains. Lower canyon is graded gravel and AWD-passable. Upper section toward Papoose Flat is modified 4x4: narrow shelf, loose shale, exposed switchbacks. Low traffic and remote.',
      },
      {
        name: 'Death Valley Road / Waucoba Rd (Big Pine to Papoose Flat)',
        description: 'North of Big Pine, accesses Papoose Flat from the west side of the Inyos. Modified 4x4 required for the upper section. Connects to Mazourka Canyon on the south. An alternative Papoose Flat approach if coming from the Big Pine side.',
      },
      {
        name: 'White Mountain Road',
        description: 'Leaves Hwy 168 east of Bishop and climbs to the Ancient Bristlecone Pine Forest. Paved to Schulman Grove. Unpaved past Schulman to Patriarch Grove, high-clearance required for that section. Road typically open June through October.',
      },
    ],
  },

  overlandRoutes: [
    {
      name: 'Eastern Sierra Traverse',
      distance: '~180 mi',
      duration: '3–5 days',
      vehicle: 'Stock 4x4+',
      vehicles: ['Stock 4x4', 'Modified 4x4'],
      season: 'Jun–Oct',
      description:
        'Runs the eastern face of the Sierra from Bridgeport south through the volcanic tablelands, Owens Valley, and down to Alabama Hills near Lone Pine. Links Bodie, Mono Lake, the June Lake Loop, Mammoth, Bishop, the Volcanic Tablelands, and Alabama Hills on a mix of paved and unpaved. Not a technical route but demands solid navigation once off the US-395 corridor.',
      link: 'https://www.overlandtrailguides.com',
      photo: '',
    },
    {
      name: 'Mammoth Backcountry Discovery Trail',
      distance: '~60 mi',
      duration: '1–2 days',
      vehicle: 'Stock 4x4+',
      vehicles: ['Stock 4x4', 'Modified 4x4'],
      season: 'Jul–Oct',
      description:
        'A loop route through the high country above Mammoth Lakes connecting the lakes basin to the backcountry east of the crest via forest roads and unpaved corridors. Passes through volcanic terrain, aspen groves, and high-elevation meadows. Designed as a day or overnight loop from the Mammoth area. High routes close by November.',
      link: '',
      photo: '',
    },
  ],

  camping: {
    prose:
      'Dispersed camping is significantly more restricted in this region than in most California national forests. The June Lake Loop, Mammoth Lakes basin, Bishop Creek canyons, Convict Lake, and Rock Creek are day-use only. Alabama Hills has designated sites and requires a free permit. The two primary dispersed camping zones are the Volcanic Tablelands north of Bishop (BLM) and BLM land east of US-395 near Crowley Lake. Outside these areas, developed campgrounds are the main option. The Inyo NF campground network is strong and the creek-corridor sites book fast in summer.',
    dispersedSpots: [
      {
        name: 'Volcanic Tablelands (North Bishop)',
        description: 'BLM land off US-395 north of Bishop. Best dispersed camping in the Bishop area. Bortle Class 3 dark skies. Petroglyph panels at Chidago Canyon nearby. Off-road restricted to designated routes.',
        placeId: 'volcanic-tablelands',
      },
      {
        name: 'Crowley Lake BLM',
        description: 'BLM land east of US-395 near Crowley Lake. Flat, open terrain. Good for self-contained rigs. LADWP boundary lines are not always marked — stay on designated BLM parcels.',
        placeId: 'crowley-lake',
      },
      {
        name: 'Alabama Hills (Permitted)',
        description: 'Designated dispersed sites in the BLM Alabama Hills Recreation Area. Free permit required. Pick up at the Lone Pine Visitor Center or self-register at the Movie Road kiosk. Sites assigned on arrival.',
        placeId: 'alabama-hills',
      },
    ],
    developedCampgrounds: [
      {
        name: 'Lundy Lake Campground',
        description: 'West of Hwy 167, north of Lee Vining. Aspen-lined lake with good brook trout fishing. First-come first-served. Quiet by Eastern Sierra standards.',
        placeId: 'lundy-lake',
      },
      {
        name: 'Convict Lake Campground',
        description: 'Good base for fly fishing Convict Creek and day hiking above the lake. Sites book out in summer. No dispersed camping in the area.',
        placeId: 'convict-lake-cg',
      },
      {
        name: 'Grandview Campground (White Mountains)',
        description: 'Free campground at 8,600 feet on White Mountain Road, on the way to the Bristlecone Pine Forest. No water. First-come first-served. Cold nights even in summer. Good dark skies.',
        placeId: 'grandview-cg',
      },
      {
        name: 'Tuttle Creek Campground',
        description: 'Free BLM campground south of Lone Pine. Good base for Alabama Hills and Whitney Portal. Minimal facilities. Open year-round.',
        placeId: 'tuttle-creek-cg',
      },
      {
        name: 'Millpond County Park (Bishop)',
        description: 'Mono County park north of Bishop. Good base for the Volcanic Tablelands and Bishop Creek trips. Inexpensive. Reservations recommended in summer.',
        placeId: 'millpond',
      },
    ],
  },

  anchorExperiences: [
    {
      id: 'bodie-ghost-town',
      name: 'Bodie State Historic Park',
      icon: '🏚️',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Bodie_Ghost_Town_%2834717931084%29.jpg',
      vehicles: ['AWD / Crossover', 'Sprinter / Van', 'Stock 4x4', 'Modified 4x4'],
      elevation: 'High (8,375 ft)',
      peakSeason: 'Jun–Sep',
      seasons: { spring: 'Variable', summer: 'Prime', fall: 'Good', winter: 'Not recommended' },
      description:
        "In 1879, Bodie was a working town with 8,500 residents and 65 saloons. The Standard Mine struck a major vein in 1876 and the rush was on. By 1882 the population had already begun to fall. Fires in 1892 and 1932 destroyed much of the original town. What stands today is about 5% of the original structures: roughly 200 buildings maintained in arrested decay. The Park Service does not restore buildings. Interiors hold the furniture, tools, and personal effects of the last residents exactly as they were left. The Bodie Museum has period artifacts and the mine headframe still stands above town. The 13-mile drive from US-395 on Bodie Road (Hwy 270) is mostly paved. Final 3 miles are graded gravel, AWD-accessible in summer.",
      alert: { type: 'warning', text: 'Road closes at the gate 3 miles from the park when snow falls. Unplowed winter section requires snowshoes or skis. Check Bodie State Park website for current access.' },
      placeId: 'bodie-ghost-town',
    },
    {
      id: 'mono-lake',
      name: 'Mono Lake Tufa Reserve',
      icon: '🌊',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/17_27_040_mono_lake.jpg',
      vehicles: ['AWD / Crossover', 'Sprinter / Van', 'Stock 4x4', 'Modified 4x4'],
      elevation: 'Mid (6,382 ft)',
      peakSeason: 'Apr–Oct',
      seasons: { spring: 'Good', summer: 'Prime', fall: 'Prime', winter: 'Good' },
      description:
        "Mono Lake is 700,000 years old and has no outlet. The tufa towers are calcium carbonate formations that grew underwater where freshwater springs met the alkaline lakewater. When LADWP began diverting the lake's feeder streams in 1941, the lake dropped 45 feet and exposed the towers. The Mono Lake Committee's legal fight won a 1994 State Water Board order requiring flow restoration. The lake is still 17 feet below its 1941 level. South Tufa (off US-395 south of Lee Vining) charges a day-use fee and has the most accessible tower clusters. Navy Beach on the south shore and the north shore tufa area off Cemetery Road are free. The lake is hypersaline — buoyant, not drinkable. Brine shrimp in the lake support over 2 million migratory birds annually.",
      alert: { type: 'good', text: 'Best light at sunrise and sunset when the tufa catches long shadows. Navy Beach south shore is free and less crowded than the main South Tufa area.' },
      placeId: 'mono-lake-south-tufa',
    },
    {
      id: 'bristlecone-pines',
      name: 'Ancient Bristlecone Pine Forest',
      icon: '🌲',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/5/55/A348%2C_Ancient_Bristlecone_Pine_Forest%2C_Inyo_National_Forest%2C_California%2C_USA%2C_2011.JPG',
      vehicles: ['Stock 4x4', 'Modified 4x4'],
      elevation: 'High (10,000–11,200 ft)',
      peakSeason: 'Jun–Sep',
      seasons: { spring: 'Not recommended', summer: 'Prime', fall: 'Good', winter: 'Not recommended' },
      description:
        "The White Mountains east of Bishop hold the world's oldest living individual trees. Methuselah, the oldest confirmed tree on earth, is 4,855 years old as of 2023. Its location is unlabeled. The oldest bristlecones survive at the most extreme elevations on dolomitic soil where cold temperatures and minimal nutrients block competition from other species. What kills trees at lower elevation (fungal rot, insect infestation) cannot survive at 11,000 feet. Dead wood here persists 5,000 years. The bleached snags in the Patriarch Grove are older than most of the living trees around them. The Patriarch, the world's largest bristlecone pine by volume, grows at Patriarch Grove, 12 miles past Schulman Grove on unpaved road. High-clearance required for Patriarch Road. Schulman Grove is paved and AWD-accessible.",
      alert: { type: 'warning', text: 'Road to Patriarch Grove is unpaved and requires high-clearance vehicle. Schulman Grove is paved. Visitor center open June through mid-October. No fee.' },
      placeId: 'schulman-grove',
    },
    {
      id: 'alabama-hills-arches',
      name: 'Alabama Hills',
      icon: '🪨',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Arches_in_Alabama_Hills_California.jpg',
      vehicles: ['AWD / Crossover', 'Sprinter / Van', 'Stock 4x4', 'Modified 4x4'],
      elevation: 'Mid (4,400 ft)',
      peakSeason: 'Oct–May',
      seasons: { spring: 'Prime', summer: 'Good', fall: 'Prime', winter: 'Good' },
      description:
        "The Alabama Hills sit below the eastern face of the Sierra Nevada with Mt. Whitney visible above the boulders. The geology is a mix of rounded, weathered granite and older metamorphic rock. Hollywood found this location in the 1920s and over 400 films have been shot here since. The arches are concentrated on the north side of Movie Flat Road. The Lone Pine Film History Museum in town has the full catalog of productions. Sunrise from the rocks with Whitney in alpenglow is the shot. The hills are accessible year-round. Summer midday heat pushes into the 90s. Best seasons are fall and spring when the light is lower and the temperature is reasonable.",
      alert: { type: 'warning', text: 'Camping requires a free Recreation Area Permit. Designated sites only. Self-register at the Movie Road kiosk or pick up a permit at the Lone Pine Visitor Center. No camping outside designated sites.' },
      placeId: 'alabama-hills',
    },
    {
      id: 'eastern-sierra-fly-fishing',
      name: 'Fly Fishing: Hot Creek, Bishop Creek & Owens River',
      icon: '🎣',
      photo: '',
      vehicles: ['AWD / Crossover', 'Sprinter / Van', 'Stock 4x4', 'Modified 4x4'],
      elevation: 'Mid (4,000–9,000 ft)',
      peakSeason: 'Apr–Oct',
      seasons: { spring: 'Good', summer: 'Prime', fall: 'Prime', winter: 'Variable' },
      description:
        "Hot Creek, 3 miles south of Mammoth Airport, is catch-and-release fly-fishing only with a resident population of wild brown trout that run large. Swimming prohibited due to thermal venting and unstable banks. Bishop Creek's three forks above Bishop hold rainbow and brown trout in nine high-altitude lakes — North Lake and Lake Sabrina produce consistently. The Owens River gorge south of Crowley Lake is a tailwater with stable flows and good brown trout through early summer. Crowley Lake draws over 1,000 anglers on Opening Day (late April) for its brown and rainbow trout. Convict Creek is accessible without technical driving and holds stocked and wild fish. California fishing license required. Check current CDFW regulations for gear restrictions before each outing.",
      alert: { type: 'good', text: 'Hot Creek is catch-and-release, barbless hooks, artificial lures only. The Owens River gorge and Hot Creek are the two highest-quality wild trout waters in the region.' },
      placeId: 'hot-creek',
    },
    {
      id: 'volcanic-tablelands-petroglyphs',
      name: 'Volcanic Tablelands & Chidago Canyon Petroglyphs',
      icon: '🌋',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Volcanic_Tablelands_%2826960900493%29.jpg',
      vehicles: ['AWD / Crossover', 'Stock 4x4', 'Modified 4x4'],
      elevation: 'Mid (4,300–4,700 ft)',
      peakSeason: 'Mar–Nov',
      seasons: { spring: 'Prime', summer: 'Good', fall: 'Prime', winter: 'Good' },
      description:
        "The Volcanic Tablelands north of Bishop formed from the Long Valley eruption 760,000 years ago, leaving a broad basalt plateau cut by Fish Slough and the Owens River. Fish Slough is a State Ecological Reserve with riparian habitat for migratory birds and endemic fish species. The Chidago Canyon petroglyph site has over 50 rock art panels attributed to the ancestral Paiute, considered among the most significant petroglyph concentrations in the eastern Sierra. The tablelands provide the best dispersed camping access near Bishop with Bortle Class 3 dark skies and no tree cover blocking the horizon. BLM roads are dirt and AWD-accessible in dry conditions. Off-road travel restricted to designated routes.",
      alert: { type: 'warning', text: 'Petroglyph panels are fragile. Do not touch, chalk, or photograph with flash. Vandalism is a federal offense and the site is actively monitored.' },
      placeId: 'volcanic-tablelands',
    },
    {
      id: 'kavanaugh-ridge',
      name: 'Kavanaugh Ridge',
      icon: '⛰️',
      photo: '',
      vehicles: ['Stock 4x4', 'Modified 4x4'],
      elevation: 'High (9,000+ ft)',
      peakSeason: 'Jun–Oct',
      seasons: { spring: 'Limited', summer: 'Prime', fall: 'Good', winter: 'Not recommended' },
      description:
        "A stock 4x4 out-and-back that rewards with some of the widest views of the High Sierra in the region. The route climbs steadily from the valley floor through pinyon pine and open scrub into high-elevation terrain where the Sierra crest unfolds from north to south. The Palisades, Split Mountain, and the peaks above Big Pine Creek are visible from the ridge. At the top the foreground falls away and you get the full vertical scale of the eastern escarpment below you. The road is maintained but rough in places. Stock 4x4 with decent clearance handles it in dry conditions. Not a destination to rush.",
      alert: { type: 'warning', text: 'Road may be snow-covered or impassable through late spring. Check conditions before heading out. No services on the route.' },
      placeId: 'kavanaugh-ridge',
    },
    {
      id: 'coyote-flat',
      name: 'Coyote Flat',
      icon: '🏔️',
      photo: '',
      vehicles: ['Stock 4x4', 'Modified 4x4'],
      elevation: 'High (10,000+ ft)',
      peakSeason: 'Jul–Oct',
      seasons: { spring: 'Not recommended', summer: 'Prime', fall: 'Good', winter: 'Not recommended' },
      description:
        "A high plateau west of Big Pine at 10,000-plus feet with direct views into the Palisades, the highest section of the Sierra Nevada crest. Most people come up via the northern approach off Glacier Lodge Road: rough dirt, stock 4x4 or high-clearance 4x4. The southern approach is significantly steeper and demands a modified 4x4. Funnel Lake sits in a granite cirque on the plateau and is worth the extra miles — shallow, cold, and sitting below the crest with no one around. The Green Lake viewpoint adds another angle on the Sierra face. Road opens by mid-July most years depending on snowpack. Short season but access is direct for anyone with the right vehicle.",
      alert: { type: 'warning', text: 'Southern approach requires modified 4x4. Northern approach via Glacier Lodge Road is passable for stock 4x4 and high-clearance. Route is snow-closed through at least late June most years.' },
      placeId: 'coyote-flat',
    },
    {
      id: 'papoose-flat-anchor',
      name: 'Papoose Flat',
      icon: '🪨',
      photo: '',
      vehicles: ['Stock 4x4', 'Modified 4x4'],
      elevation: 'High (9,000–10,000 ft)',
      peakSeason: 'Jun–Oct',
      seasons: { spring: 'Not recommended', summer: 'Prime', fall: 'Good', winter: 'Not recommended' },
      description:
        "A remote high-elevation flat in the Inyo Mountains with views west across the Owens Valley to the Sierra crest. Two approaches, each with a different vehicle requirement. From Mazourka Canyon Road out of Independence, a stock 4x4 can reach Papoose Flat: the canyon road is rough but manageable on the lower and middle sections. The Narrows approach from the north is a different story — tight, rocky, loose shelf road that requires a modified 4x4. The payoff either way is a high, quiet plateau well removed from the US-395 corridor. Very little traffic. The views west from the flat put the full eastern Sierra escarpment in frame.",
      alert: { type: 'warning', text: 'The Narrows (northern approach) requires a modified 4x4. Mazourka Canyon from Independence is stock 4x4 capable for most of the route. Confirm current road conditions before heading out — the upper sections see minimal maintenance.' },
      placeId: 'papoose-flat',
    },
    {
      id: 'mammoth-hot-springs',
      name: 'Mammoth Area Hot Springs',
      icon: '♨️',
      photo: '',
      vehicles: ['AWD / Crossover', 'Sprinter / Van', 'Stock 4x4', 'Modified 4x4'],
      elevation: 'Mid (6,800–7,200 ft)',
      peakSeason: 'Year-round',
      seasons: { spring: 'Prime', summer: 'Good', fall: 'Prime', winter: 'Good' },
      description:
        "The Long Valley Caldera between Mammoth and Bishop concentrates most of the region's accessible hot springs. Crab Cooker sits in an open meadow near the Hot Creek area with a high-temperature pool fed by geothermal vents. Wild Willy's (also called Crowley Hot Springs) off Hot Creek Road is the most popular free soak in the area: a rock-lined pool at a comfortable soaking temperature with open views across the Long Valley. Shepherd's Hot Spring is a cooler, quieter option near Mammoth that runs at about 100°F. Most soaks are accessible to any vehicle on the dirt access roads. Morning soaks in winter with snow on the ground and steam rising off the pools are worth planning a cold-season trip around. The actual Hot Creek soaking pool has been closed since 2006 due to thermal eruptions and unstable banks — swimming there is not permitted.",
      alert: { type: 'warning', text: 'Temperatures at Crab Cooker and some other vents run very hot. Test water before entering. The main Hot Creek soaking area has been closed since 2006 — do not enter.' },
      placeId: 'crab-cooker',
    },
  ],

  recOpportunities: [
    {
      icon: '🎣',
      name: 'Fly Fishing',
      badge: 'World-class trout',
      description:
        'Hot Creek is catch-and-release, fly-fishing only with a wild brown trout population that draws anglers from across the western states. Bishop Creek holds rainbow and brown trout across nine high-altitude lakes in the three-fork canyon above Bishop. The Owens River gorge south of Crowley Lake is a tailwater with consistent flows and strong brown trout through early summer. Crowley Lake is the headline Opening Day fishery. Convict Creek is the easiest access with stocked and wild fish. California fishing license required. CDFW regulations vary by water body — confirm current gear restrictions before fishing any creek or lake in the Inyo NF system.',
      placeIds: ['hot-creek', 'bishop-creek', 'crowley-lake', 'convict-lake-cg'],
    },
    {
      icon: '🌌',
      name: 'Dark Skies',
      badge: 'Bortle Class 1–2 (White Mtns)',
      description:
        'The White Mountains at 10,000–11,200 feet rate Bortle Class 1–2, on par with the Great Basin desert. Alabama Hills runs Class 2–3 under Whitney. Mono Basin and the Volcanic Tablelands north of Bishop are Class 3. Grandview Campground at 8,600 feet is a free, no-water site on White Mountain Road and one of the best dark sky bases in the region. The Volcanic Tablelands have wide open horizons with no tree cover. Best windows: new moon periods in August through October after summer smoke clears.',
      placeIds: ['schulman-grove', 'grandview-cg', 'alabama-hills', 'volcanic-tablelands'],
    },
    {
      icon: '🚙',
      name: 'Overland & Dirt Roads',
      badge: 'Multi-day routes',
      description:
        'The Eastern Sierra Traverse links Bridgeport to Lone Pine over 3–5 days on a mix of paved and dirt, hitting Bodie, Mono Lake, June Lake, the Volcanic Tablelands, and Alabama Hills. The Mammoth Backcountry Discovery Trail loops through the high country above Mammoth in 1–2 days. Mazourka Canyon from Independence and the Death Valley Road near Big Pine reach Papoose Flat for modified 4x4s looking for a remote objective with minimal traffic. The Volcanic Tablelands BLM roads north of Bishop are the easiest-access dirt network for vehicles based in Bishop.',
      placeIds: ['volcanic-tablelands', 'alabama-hills', 'bodie-ghost-town'],
    },
    {
      icon: '🥾',
      name: 'Day Hikes',
      badge: 'High Sierra access',
      description:
        'Whitney Portal Trailhead at 8,360 feet launches the Mt. Whitney summit route (22 miles RT, 6,100 ft gain). Day-hike permits required May 1 through November 1. The North Fork of Lone Pine Creek above the portal has fishing and solitude without summit permits. Convict Lake Loop (2.6 miles, flat) circles the lake with views into the Morrison Formation. Methuselah Trail at Schulman Grove (4.5 miles, 800 ft gain) winds through the bristlecone forest. June Lake Loop aspen groves are walk-in from any lake trailhead in October. Most High Sierra trailheads above Bishop require wilderness permits for overnight use.',
      placeIds: ['whitney-portal', 'convict-lake-cg', 'schulman-grove', 'june-lake'],
    },
    {
      icon: '♨️',
      name: 'Hot Springs',
      badge: 'Multiple sites',
      description:
        "The Long Valley Caldera area north of Bishop concentrates the region's geothermal activity and most of its hot springs. Travertine Hot Springs south of Bridgeport is a free BLM site with tiered rock pools and Sierra views — the best no-cost option in the region. Wild Willy's Hot Springs (also called Crowley Hot Springs) off Hot Creek Road is a free rock-lined outdoor soak near Mammoth. Shepherd's Hot Spring near Mammoth is a maintained, cooler pool. Benton Hot Springs, 45 miles north of Bishop on Hwy 120, is on private land and requires a reservation. The Hot Creek soaking pool has been closed since 2006 due to thermal eruptions and unstable banks.",
      placeIds: ['travertine-hot-springs', 'wild-willys-hot-springs'],
    },
  ],

  historyCards: [
    {
      title: 'The Paiute and Shoshone Homelands',
      photo: '',
      body: [
        "The Owens Valley Paiute (Nüümü) lived in the Owens Valley for thousands of years before contact, with territory running from the Sierra crest east across the valley and into the White and Inyo Mountains. The valley floor was not simply a hunting ground. The Paiute maintained elaborate irrigation ditch systems that diverted Sierra streams to water native plant plots — a form of intensive land management that Spanish explorers and early Anglo settlers both documented before destroying.",
        "The Owens Valley Paiute War of 1862–63 followed settler encroachment and the destruction of the irrigation systems. After the conflict, the U.S. Army forced several hundred Paiute on a 200-mile march south to Fort Tejon. Many died on the march. The Paiute returned to the valley within years, but the land base was gone. The Bishop Paiute Tribe, Lone Pine Paiute-Shoshone Tribe, and Fort Independence Indian Community are the federally recognized tribal governments today, each holding a reservation that represents a fraction of the original territory.",
      ],
    },
    {
      title: 'Bodie: Boom, Bust, and Arrested Decay',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Bodie_Ghost_Town_%2834717931084%29.jpg',
      body: [
        "Waterman Body discovered gold at the site in 1859 but the real rush did not begin until the Standard Company struck a major vein in 1876. By 1879, Bodie held 8,500 residents and was producing gold and silver at rates worth hundreds of millions in today's dollars. The town ran 65 saloons. The Bodie Miners' Union, organized in 1878, became one of the first significant labor unions in the western mining industry.",
        "By 1882, ore grades declined and the population fell fast. Fires in 1892 and 1932 destroyed large sections. The last mining operation ceased in 1942. California made Bodie a state park in 1962. The arrested decay policy means buildings are stabilized where they stand but not restored. Interiors hold the furniture, tools, and personal effects of the last residents exactly as they were left.",
      ],
      placeId: 'bodie-ghost-town',
    },
    {
      title: 'The Los Angeles Water Wars',
      photo: '',
      body: [
        "In 1905, the Los Angeles Department of Water and Power began secretly buying land and water rights in the Owens Valley. By 1913, the Los Angeles Aqueduct had been completed, redirecting the Owens River 233 miles south. The farming economy of the Owens Valley collapsed within a decade. Owens Lake, once navigable, dried completely by 1926. In the 1920s, Owens Valley ranchers dynamited the aqueduct multiple times in protest. The bombings failed to reverse the diversions.",
        "LADWP extended the aqueduct to Mono Lake in 1941, diverting the Eastern Sierra streams that fed the lake. Mono Lake dropped 45 feet over five decades. In 1994, after years of litigation by the Mono Lake Committee, the State Water Resources Control Board ordered LADWP to restore flows. Owens Lake remains dry, though LADWP now floods portions of the lakebed to control dust. The dry lakebed is the largest single source of particulate matter air pollution in the United States.",
      ],
    },
    {
      title: "Alabama Hills: Hollywood's Backlot",
      photo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Arches_in_Alabama_Hills_California.jpg',
      body: [
        "The Alabama Hills got their name from Southern sympathizers in the Owens Valley who celebrated the raiding exploits of the Confederate warship CSS Alabama during the Civil War. They named the hills and a nearby mine Alabama before the war ended. The Union loyalists named the adjacent ridge Kearsarge after the Union warship that sank the Alabama in 1864.",
        "Hollywood discovered the hills in 1920. Tom Mix filmed there in the early silent era and every major Western star through the 1930s to 1960s followed. Over 400 films have used the location. The diversity of rock formations and the Sierra backdrop behind them allowed the hills to double for Monument Valley, the Middle East, and various alien planets across the decades. The Lone Pine Film History Museum catalogs the full production history.",
      ],
      placeId: 'alabama-hills',
    },
  ],

  watchBeforeYouGo: [
    { title: 'Eastern Sierra Traverse', source: 'Overland Trail Guides', youtubeId: 'rScN8rKQEOo' },
  ],

  places: [
    { id: 'bodie-ghost-town', name: 'Bodie State Historic Park', lat: 38.2124, lng: -119.0129, description: 'Best-preserved ghost town in the American West. State park day-use fee. Final 3 miles unpaved.' },
    { id: 'mono-lake-south-tufa', name: 'Mono Lake South Tufa', lat: 37.9579, lng: -119.0179, description: 'Main tufa tower access. Day-use fee. Navy Beach on south shore is free.' },
    { id: 'mono-lake-navy-beach', name: 'Mono Lake Navy Beach', lat: 37.9445, lng: -119.0100, description: 'Free south shore access. Tufa views, buoyant swimming in hypersaline water.' },
    { id: 'mono-lake-north-shore', name: 'Mono Lake North Shore (Cemetery Rd)', lat: 38.0070, lng: -119.0350, description: 'Free north shore tufa access. Less visited than South Tufa.' },
    { id: 'june-lake', name: 'June Lake', lat: 37.7857, lng: -119.0738, description: 'Hub of the June Lake Loop. Aspen groves peak mid-October. Town has lodging and food.' },
    { id: 'schulman-grove', name: 'Ancient Bristlecone Pine Forest (Schulman Grove)', lat: 37.4464, lng: -118.1602, description: "World's oldest living trees. Paved to Schulman Grove. High-clearance required to reach Patriarch Grove." },
    { id: 'patriarch-grove', name: 'Patriarch Grove', lat: 37.5246, lng: -118.1713, description: "World's largest bristlecone pine by volume. High-clearance required. 12 miles past Schulman Grove." },
    { id: 'alabama-hills', name: 'Alabama Hills', lat: 36.6062, lng: -118.1186, description: 'BLM Recreation Area. Free day use. Free permit required for camping. Arches on north side of Movie Flat Road.' },
    { id: 'volcanic-tablelands', name: 'Volcanic Tablelands', lat: 37.4520, lng: -118.3820, description: 'BLM land north of Bishop. Dispersed camping, Chidago Canyon petroglyphs, Bortle Class 3 dark skies.' },
    { id: 'hot-creek', name: 'Hot Creek', lat: 37.6588, lng: -118.8278, description: 'Fly-fishing only, catch-and-release. Wild brown trout. Swimming prohibited due to thermal venting.' },
    { id: 'bishop-creek', name: 'Bishop Creek Canyon', lat: 37.2924, lng: -118.5892, description: 'Three forks, nine lakes above 9,000 ft. Day use only. Prime fly fishing for rainbow and brown trout.' },
    { id: 'crowley-lake', name: 'Crowley Lake', lat: 37.5969, lng: -118.7217, description: 'LADWP reservoir at 6,781 ft. Major Opening Day brown and rainbow trout fishery.' },
    { id: 'convict-lake-cg', name: 'Convict Lake', lat: 37.5879, lng: -118.8481, description: 'Developed camping, fly fishing, hiking. No dispersed camping in the area.' },
    { id: 'whitney-portal', name: 'Whitney Portal', lat: 36.5863, lng: -118.2389, description: 'Mt. Whitney trailhead at 8,360 ft. Day-hike permit required May 1 to Nov 1. Whitney Portal Store on site.' },
    { id: 'travertine-hot-springs', name: 'Travertine Hot Springs', lat: 38.2680, lng: -119.1930, description: 'Free BLM hot springs south of Bridgeport. Tiered rock pools with Sierra views. No fee.' },
    { id: 'wild-willys-hot-springs', name: "Wild Willy's Hot Springs", lat: 37.6248, lng: -118.8562, description: 'Free outdoor hot spring near Hot Creek Road. Rock-lined pool. No facilities.' },
    { id: 'lundy-lake', name: 'Lundy Lake', lat: 38.0410, lng: -119.2360, description: 'Aspen-lined lake west of Hwy 167 near Lee Vining. Brook trout fishing. First-come camping.' },
    { id: 'grandview-cg', name: 'Grandview Campground', lat: 37.4783, lng: -118.1916, description: 'Free FS campground at 8,600 ft on White Mountain Road. No water. Good dark skies.' },
    { id: 'tuttle-creek-cg', name: 'Tuttle Creek Campground', lat: 36.5704, lng: -118.1649, description: 'Free BLM campground south of Lone Pine. Year-round. Good base for Alabama Hills.' },
    { id: 'millpond', name: 'Millpond County Park', lat: 37.4182, lng: -118.4442, description: 'Mono County park north of Bishop. Base for Volcanic Tablelands and Bishop Creek. Reservations recommended in summer.' },
    { id: 'papoose-flat', name: 'Papoose Flat', lat: 37.1850, lng: -118.0930, description: 'Remote plateau in the Inyos. Modified 4x4 required. Access via Mazourka Canyon or Death Valley Road.' },
    { id: 'mazourka-canyon', name: 'Mazourka Canyon Road', lat: 36.8100, lng: -118.1050, description: 'Lower canyon AWD-passable. Upper section toward Papoose Flat requires modified 4x4.' },
    { id: 'lee-vining', name: 'Lee Vining', lat: 37.9537, lng: -119.1183, description: 'Gateway town to Mono Lake and Tioga Pass. Fuel, food, lodging on US-395.' },
    { id: 'bishop-town', name: 'Bishop', lat: 37.3635, lng: -118.3953, description: 'Main resupply hub. Full services, gear shops, White Mountain Interagency Visitor Center.' },
    { id: 'lone-pine-town', name: 'Lone Pine', lat: 36.6061, lng: -118.0630, description: 'Southern gateway. Fuel, food, Lone Pine Film History Museum, Alabama Hills Visitor Center.' },
    { id: 'kavanaugh-ridge', name: 'Kavanaugh Ridge', lat: 37.1480, lng: -118.1050, description: 'Stock 4x4 out-and-back with wide views of the High Sierra crest. Eastern Inyo Mountains.' },
    { id: 'coyote-flat', name: 'Coyote Flat', lat: 37.1720, lng: -118.4360, description: 'High plateau at 10,000+ ft west of Big Pine. Sierra Palisades views. Northern approach stock 4x4; southern approach modified 4x4.' },
    { id: 'funnel-lake', name: 'Funnel Lake', lat: 37.1900, lng: -118.4650, description: 'Granite cirque lake on Coyote Flat. Cold, shallow, below the Sierra crest. Stock 4x4 approach from north.' },
    { id: 'crab-cooker', name: 'Crab Cooker Hot Spring', lat: 37.6640, lng: -118.8410, description: 'Free geothermal soak in the Long Valley Caldera near Mammoth. High temperature — test before entering.' },
  ],
}
