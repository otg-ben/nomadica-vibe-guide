import { mendocino } from '@/data/mendocino'
import RatingPill from '@/components/RatingPill'
import SeasonCard from '@/components/SeasonCard'
import KBYGItem from '@/components/KBYGItem'
import AnchorCard from '@/components/AnchorCard'
import RecCard from '@/components/RecCard'
import PlacePin from '@/components/PlacePin'
import SectionHeader from '@/components/SectionHeader'

const placeMap = Object.fromEntries(mendocino.places.map(p => [p.id, p.name]))

export default function VibePage() {
  const g = mendocino

  return (
    <div className="min-h-screen bg-[#f8f5f0]">

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1b4332] via-[#2d6a4f] to-[#40916c] px-6 py-12 text-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-emerald-300 font-semibold mb-3">Trail Guide</p>
          <h1 className="text-4xl font-bold mb-2">{g.title}</h1>
          <span className="inline-block text-sm bg-white/20 rounded-full px-3 py-1 mb-6">{g.badge}</span>
          <blockquote className="text-base leading-relaxed text-white/90 italic border-l-2 border-emerald-400 pl-4">
            {g.quote}
          </blockquote>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-10 space-y-12">

        {/* Season ratings */}
        <section className="space-y-3">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {g.seasonRatings.map(s => (
              <SeasonCard key={s.season} season={s.season} rating={s.rating as any} description={s.description} />
            ))}
          </div>

          {/* Crowd + Dark skies */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">Crowd Level</p>
              <div className="relative h-2 bg-gradient-to-r from-emerald-200 via-yellow-200 to-red-300 rounded-full mb-2">
                <div
                  className="absolute top-1/2 w-4 h-4 bg-white border-2 border-gray-400 rounded-full shadow"
                  style={{ left: `${((g.crowdLevel - 1) / 8) * 100}%`, transform: 'translateX(-50%) translateY(-50%)' }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>Uncrowded</span>
                <span>Busy</span>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">🌙 Dark Skies</p>
              <p className="text-xs text-gray-500 mb-2">{g.darkSkies.description}</p>
              <div className="flex gap-1 items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-lg ${i < g.darkSkies.rating ? 'text-gray-800' : 'text-gray-200'}`}>●</span>
                ))}
                <span className="text-sm text-gray-500 ml-1">{g.darkSkies.rating} / 5</span>
              </div>
            </div>
          </div>

          {/* Attribute tags */}
          <div className="flex flex-wrap gap-2">
            {g.attributeTags.map(tag => (
              <span key={tag.label} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-sm text-gray-700">
                <span>{tag.icon}</span>
                <span>{tag.label}</span>
              </span>
            ))}
          </div>
        </section>

        {/* Overview */}
        <section className="space-y-3">
          <SectionHeader>Overview</SectionHeader>
          {g.overview.map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed text-[15px]">{p}</p>
          ))}
        </section>

        {/* Know Before You Go */}
        <section className="space-y-3">
          <SectionHeader>Know before you go</SectionHeader>
          {g.kbyg.map((item, i) => (
            <KBYGItem key={i} type={item.type as any} text={item.text} />
          ))}
        </section>

        {/* Popular Areas */}
        <section className="space-y-4">
          <SectionHeader>Popular areas</SectionHeader>
          {g.popularAreas.map(area => (
            <div key={area.name}>
              <h3 className="font-semibold text-gray-900 mb-1">{area.name}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{area.description}</p>
            </div>
          ))}
        </section>

        {/* Road Network */}
        <section className="space-y-4">
          <SectionHeader>Road network &amp; major routes</SectionHeader>
          <div className="bg-white rounded-xl border border-gray-100 p-4 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">Vehicle Accessibility</p>
            {g.roadNetwork.vehicleRatings.map(v => (
              <div key={v.type} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{v.type}</span>
                <RatingPill rating={v.rating as any} />
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-[15px] leading-relaxed">{g.roadNetwork.prose}</p>
          <div className="space-y-3">
            {g.roadNetwork.routes.map(r => (
              <div key={r.name} className="flex gap-4">
                <span className="font-mono font-bold text-sm text-gray-900 w-28 shrink-0">{r.name}</span>
                <p className="text-sm text-gray-600 leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Overland Routes */}
        <section className="space-y-4">
          <SectionHeader>⬡ Featured overland routes</SectionHeader>
          {g.overlandRoutes.map(route => (
            <div key={route.name} className="bg-white rounded-xl border border-gray-100 p-5 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-gray-900">{route.name}</h3>
                {route.link && (
                  <a href={route.link} className="text-xs font-medium text-emerald-700 border border-emerald-200 rounded-full px-2.5 py-1 shrink-0 hover:bg-emerald-50 transition-colors">
                    ↗ OTG Guide
                  </a>
                )}
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                <span>{route.distance}</span><span>·</span>
                <span>{route.duration}</span><span>·</span>
                <span>{route.vehicle}</span><span>·</span>
                <span>{route.season}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{route.description}</p>
            </div>
          ))}
        </section>

        {/* Camping */}
        <section className="space-y-4">
          <SectionHeader>Camping</SectionHeader>
          <p className="text-gray-600 text-[15px] leading-relaxed">{g.camping.prose}</p>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">Favorite Dispersed Spots</p>
            <div className="space-y-3">
              {g.camping.dispersedSpots.map(spot => (
                <div key={spot.name} className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{spot.name}</p>
                    <p className="text-sm text-gray-500">{spot.description}</p>
                  </div>
                  <PlacePin placeId={spot.placeId} label="View on map" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">Developed Campgrounds Worth Knowing</p>
            <div className="space-y-3">
              {g.camping.developedCampgrounds.map(cg => (
                <div key={cg.name}>
                  <p className="font-semibold text-sm text-gray-900">{cg.name}</p>
                  <p className="text-sm text-gray-500">{cg.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Anchor Experiences */}
        <section className="space-y-4">
          <SectionHeader>Anchor experiences</SectionHeader>
          {g.anchorExperiences.map(anchor => (
            <AnchorCard key={anchor.id} anchor={anchor} placeName={placeMap[anchor.placeId] ?? anchor.name} />
          ))}
        </section>

        {/* Recreational Opportunities */}
        <section className="space-y-4">
          <SectionHeader>Recreational opportunities</SectionHeader>
          {g.recOpportunities.map(rec => (
            <RecCard key={rec.name} rec={rec} />
          ))}
        </section>

        {/* History & Culture */}
        <section className="space-y-4">
          <SectionHeader>History &amp; culture</SectionHeader>
          {g.history.map((p, i) => (
            <p key={i} className="text-gray-600 text-[15px] leading-relaxed">{p}</p>
          ))}
          <div className="flex flex-wrap gap-2">
            {g.historyPlaceIds.map(id => (
              <PlacePin key={id} placeId={id} label={placeMap[id] ?? id} />
            ))}
          </div>
        </section>

        {/* Watch Before You Go */}
        <section className="space-y-4">
          <SectionHeader>Watch before you go</SectionHeader>
          <div className="grid grid-cols-2 gap-3">
            {g.watchBeforeYouGo.map(v => (
              <div key={v.title} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <span className="text-white text-3xl">▶</span>
                </div>
                <div className="p-3">
                  <p className="text-xs font-semibold text-gray-900 leading-snug">{v.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{v.source}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-6 border-t border-gray-200 flex justify-between items-center text-xs text-gray-400">
          <span className="font-bold tracking-widest uppercase text-gray-500">Trail Guide</span>
          <span>Mendocino National Forest · Draft</span>
        </footer>

      </div>
    </div>
  )
}
