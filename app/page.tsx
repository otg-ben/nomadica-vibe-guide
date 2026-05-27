import { mendocino } from '@/data/mendocino'
import RatingPill from '@/components/RatingPill'
import SeasonCard from '@/components/SeasonCard'
import KBYGItem from '@/components/KBYGItem'
import AnchorCard from '@/components/AnchorCard'
import RecCard from '@/components/RecCard'
import PlacePin from '@/components/PlacePin'
import Section from '@/components/Section'
import PhotoGallery from '@/components/PhotoGallery'

const placeMap = Object.fromEntries(mendocino.places.map(p => [p.id, p.name]))

const darkSkyLabels = ['', 'Poor', 'Fair', 'Good', 'Great', 'Exceptional']

export default function VibePage() {
  const g = mendocino

  return (
    <div className="min-h-screen bg-[#f7f4ef]">

      {/* Hero */}
      <div className="bg-gradient-to-b from-[#1a3d2b] to-[#2d6a4f] px-5 pt-10 pb-8">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-emerald-400 font-semibold mb-4">Trail Guide</p>
          <h1 className="text-5xl font-extrabold text-white leading-tight tracking-tight mb-2">
            {g.title}
          </h1>
          <span className="inline-block text-xs bg-white/15 text-white/80 rounded-full px-3 py-1 mb-8 tracking-wide">
            {g.badge}
          </span>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="bg-[#1a2d22] px-5 pb-6">
        <div className="max-w-2xl mx-auto">
          <PhotoGallery />
        </div>
      </div>

      {/* Quote */}
      <div className="bg-white px-5 py-8 border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <blockquote className="text-[17px] leading-relaxed text-gray-700 font-medium italic">
            &ldquo;{g.quote}&rdquo;
          </blockquote>
        </div>
      </div>

      {/* Ratings Dashboard */}
      <div className="bg-white px-5 py-8 border-b border-gray-100">
        <div className="max-w-2xl mx-auto space-y-6">

          {/* Vehicle Ratings */}
          <div className="bg-[#f7f4ef] rounded-2xl p-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Vehicle Accessibility</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {g.vehicleRatings.map(v => (
                <div key={v.type} className="flex items-center justify-between gap-2">
                  <span className="text-xs text-gray-600">{v.type}</span>
                  <RatingPill rating={v.rating as any} />
                </div>
              ))}
            </div>
          </div>

          {/* Seasons */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {g.seasonRatings.map(s => (
              <SeasonCard key={s.season} season={s.season} rating={s.rating as any} />
            ))}
          </div>

          {/* Crowd + Dark skies */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#f7f4ef] rounded-2xl px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Crowd Level</p>
              <div className="relative h-1.5 bg-gradient-to-r from-emerald-300 via-yellow-300 to-red-400 rounded-full mb-2">
                <div
                  className="absolute top-1/2 w-4 h-4 bg-white border-2 border-gray-500 rounded-full shadow-sm"
                  style={{ left: `${((g.crowdLevel - 1) / 8) * 100}%`, transform: 'translateX(-50%) translateY(-50%)' }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                <span>Uncrowded</span><span>Busy</span>
              </div>
            </div>
            <div className="bg-[#f7f4ef] rounded-2xl px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">🌙 Dark Skies</p>
              <div className="flex gap-1 items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-base ${i < g.darkSkies.rating ? 'text-gray-800' : 'text-gray-200'}`}>●</span>
                ))}
                <span className="text-xs text-gray-500 ml-1.5 font-semibold">{darkSkyLabels[g.darkSkies.rating]}</span>
              </div>
            </div>
          </div>

          {/* Attribute tags */}
          <div className="flex flex-wrap gap-2">
            {g.attributeTags.map(tag => (
              <span key={tag.label} className="inline-flex items-center gap-1.5 bg-[#f7f4ef] border border-gray-200 rounded-full px-3 py-1.5 text-sm text-gray-700 font-medium">
                <span>{tag.icon}</span><span>{tag.label}</span>
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Collapsible Sections */}
      <div className="max-w-2xl mx-auto px-5">

        <Section title="Overview">
          <div className="space-y-4">
            {g.overview.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-[15px]">{p}</p>
            ))}
          </div>
        </Section>

        <Section title="Popular Areas">
          <div className="space-y-6">
            {g.popularAreas.map(area => (
              <div key={area.name}>
                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="font-semibold text-gray-900">{area.name}</h3>
                  {area.placeId && <PlacePin placeId={area.placeId} label="Map" />}
                </div>
                <p className="text-gray-600 text-[15px] leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Road Network & Major Routes">
          <div className="space-y-5">
            <p className="text-gray-600 text-[15px] leading-relaxed">{g.roadNetwork.prose}</p>
            <div className="space-y-4">
              {g.roadNetwork.routes.map(r => (
                <div key={r.name} className="flex gap-4">
                  <span className="font-mono font-bold text-sm text-emerald-700 w-28 shrink-0 pt-0.5">{r.name}</span>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Featured Overland Routes">
          <div className="space-y-4">
            {g.overlandRoutes.map(route => (
              <div key={route.name} className="bg-[#f7f4ef] rounded-2xl p-5 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-gray-900">{route.name}</h3>
                  {route.link && route.link !== '#' && (
                    <a href={route.link} className="text-xs font-semibold text-emerald-700 border border-emerald-200 bg-white rounded-full px-3 py-1 shrink-0 hover:bg-emerald-50 transition-colors">
                      ↗ OTG Guide
                    </a>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-gray-400 font-medium">
                  <span>{route.distance}</span><span>·</span>
                  <span>{route.duration}</span><span>·</span>
                  <span>{route.season}</span>
                </div>
                {route.vehicles && route.vehicles.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {route.vehicles.map(v => (
                      <span key={v} className="text-xs bg-white border border-gray-200 text-gray-700 font-medium px-2.5 py-0.5 rounded-full">{v}</span>
                    ))}
                  </div>
                )}
                <p className="text-sm text-gray-600 leading-relaxed">{route.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Camping">
          <div className="space-y-6">
            <p className="text-gray-600 text-[15px] leading-relaxed">{g.camping.prose}</p>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Favorite Dispersed Spots</p>
              <div className="space-y-4">
                {g.camping.dispersedSpots.map(spot => (
                  <div key={spot.name} className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{spot.name}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{spot.description}</p>
                    </div>
                    <PlacePin placeId={spot.placeId} label="Map" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Developed Campgrounds</p>
              <div className="space-y-4">
                {g.camping.developedCampgrounds.map(cg => (
                  <div key={cg.name} className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{cg.name}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{cg.description}</p>
                    </div>
                    {cg.placeId && <PlacePin placeId={cg.placeId} label="Map" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section title="Anchor Experiences">
          <div className="space-y-4">
            {g.anchorExperiences.map(anchor => (
              <AnchorCard key={anchor.id} anchor={anchor} placeName={placeMap[anchor.placeId] ?? anchor.name} />
            ))}
          </div>
        </Section>

        <Section title="Recreational Opportunities">
          <div className="space-y-4">
            {g.recOpportunities.map(rec => (
              <RecCard key={rec.name} rec={rec} />
            ))}
          </div>
        </Section>

        <Section title="History & Culture">
          <div className="space-y-4">
            {g.history.map((p, i) => (
              <p key={i} className="text-gray-600 text-[15px] leading-relaxed">{p}</p>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {g.historyPlaceIds.map(id => (
                <PlacePin key={id} placeId={id} label={placeMap[id] ?? id} />
              ))}
            </div>
          </div>
        </Section>

        <Section title="Watch Before You Go">
          <div className="grid grid-cols-1 gap-4">
            {g.watchBeforeYouGo.map((v, i) => (
              <div key={v.youtubeId ?? i} className="bg-[#f7f4ef] rounded-2xl overflow-hidden">
                {v.youtubeId ? (
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.youtubeId}?rel=0`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <span className="text-white/60 text-3xl">▶</span>
                  </div>
                )}
                <div className="p-3">
                  <p className="text-xs font-semibold text-gray-900 leading-snug">{v.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{v.source}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Know Before You Go" defaultOpen={false}>
          <div className="space-y-3">
            {g.kbyg.map((item, i) => (
              <KBYGItem key={i} type={item.type as any} text={item.text} />
            ))}
          </div>
        </Section>

      </div>

      {/* Footer */}
      <div className="max-w-2xl mx-auto px-5 py-10 mt-4">
        <div className="flex justify-between items-center text-xs text-gray-400">
          <span className="font-bold tracking-[0.15em] uppercase text-gray-400">Trail Guide</span>
          <span>Mendocino National Forest · Draft</span>
        </div>
      </div>

    </div>
  )
}
