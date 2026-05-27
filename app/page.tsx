import { mendocino } from '@/data/mendocino'
import RatingPill from '@/components/RatingPill'
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

      {/* Hero — full bleed photo */}
      <div className="relative min-h-[70vh] overflow-hidden">
        <img
          src="/images/anthony-peak-lookout.jpg"
          alt="Mendocino National Forest"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-10 max-w-2xl mx-auto">
          <p className="text-[11px] tracking-[0.25em] uppercase text-emerald-400 font-semibold mb-3">Trail Guide</p>
          <h1 className="text-5xl font-black text-white leading-none tracking-tight mb-4">{g.title}</h1>
          <span className="inline-block text-xs bg-white/20 backdrop-blur-sm text-white/90 rounded-full px-3 py-1.5 tracking-wide font-medium">{g.badge}</span>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="bg-[#111] px-5 py-5">
        <div className="max-w-2xl mx-auto">
          <PhotoGallery />
        </div>
      </div>

      {/* Quote */}
      <div className="bg-white px-6 py-12 border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-xl leading-relaxed text-gray-800 font-medium italic">&ldquo;{g.quote}&rdquo;</p>
        </div>
      </div>

      {/* Ratings Dashboard */}
      <div className="bg-white px-6 pb-8 border-b border-gray-100">
        <div className="max-w-2xl mx-auto space-y-7">

          {/* Vehicle Ratings */}
          <div className="pt-7">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Vehicle Accessibility</p>
            <div className="grid grid-cols-2 gap-1.5">
              {g.vehicleRatings.map(v => {
                const tileClass = v.rating === 'Best' ? 'bg-emerald-700 text-white'
                  : v.rating === 'Good' ? 'bg-emerald-100 text-emerald-800'
                  : v.rating === 'Fair' ? 'bg-yellow-100 text-yellow-800'
                  : v.rating === 'Variable' ? 'bg-orange-100 text-orange-700'
                  : 'bg-red-100 text-red-700'
                return (
                  <div key={v.type} className={`rounded-xl py-3 px-3 text-center ${tileClass}`}>
                    <p className="text-xs font-black leading-tight">{v.type}</p>
                    <p className="text-[10px] font-semibold mt-0.5 opacity-60">{v.rating}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="h-px bg-gray-100" />

          {/* Seasons */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Best Seasons</p>
            <div className="grid grid-cols-4 gap-1.5">
              {g.seasonRatings.map(s => {
                const tileClass = s.rating === 'Best' ? 'bg-emerald-700 text-white'
                  : s.rating === 'Good' ? 'bg-emerald-100 text-emerald-800'
                  : s.rating === 'Fair' ? 'bg-yellow-100 text-yellow-800'
                  : s.rating === 'Variable' ? 'bg-orange-100 text-orange-700'
                  : 'bg-red-100 text-red-700'
                return (
                  <div key={s.season} className={`rounded-xl py-3 px-1 text-center ${tileClass}`}>
                    <p className="text-[10px] font-bold tracking-wide opacity-60">{s.season}</p>
                    <p className="text-xs font-black mt-1 leading-tight">{s.rating}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="h-px bg-gray-100" />

          {/* Crowd + Dark skies */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Crowd Level</p>
              <div className="relative h-1.5 bg-gradient-to-r from-emerald-300 via-yellow-300 to-red-400 rounded-full mb-2">
                <div
                  className="absolute top-1/2 w-3.5 h-3.5 bg-white border-2 border-gray-600 rounded-full shadow"
                  style={{ left: `${((g.crowdLevel - 1) / 8) * 100}%`, transform: 'translateX(-50%) translateY(-50%)' }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                <span>Uncrowded</span><span>Busy</span>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">🌙 Dark Skies</p>
              <div className="flex gap-1 items-center mt-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-sm ${i < g.darkSkies.rating ? 'text-gray-900' : 'text-gray-200'}`}>●</span>
                ))}
                <span className="text-xs text-gray-600 ml-1.5 font-bold">{darkSkyLabels[g.darkSkies.rating]}</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-100" />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pb-1">
            {g.attributeTags.map(tag => (
              <span key={tag.label} className="inline-flex items-center gap-1.5 bg-[#f7f4ef] rounded-full px-3 py-1.5 text-sm text-gray-700 font-medium">
                <span>{tag.icon}</span><span>{tag.label}</span>
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Collapsible Sections */}
      <div className="max-w-2xl mx-auto px-6">

        <Section title="Overview">
          <div className="space-y-4">
            {g.overview.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-[15px]">{p}</p>
            ))}
          </div>
        </Section>

        <Section title="Popular Areas">
          <div className="space-y-4">
            {g.popularAreas.map(area => (
              <div key={area.name} className="rounded-2xl overflow-hidden shadow-sm bg-white">
                {area.photo && (
                  <div className="relative h-44 overflow-hidden">
                    <img src={area.photo} alt={area.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 flex items-end justify-between gap-2">
                      <h3 className="font-black text-white text-base leading-tight">{area.name}</h3>
                      {area.placeId && <PlacePin placeId={area.placeId} label="Map" />}
                    </div>
                  </div>
                )}
                <div className="px-4 py-4">
                  {!area.photo && (
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-gray-900">{area.name}</h3>
                      {area.placeId && <PlacePin placeId={area.placeId} label="Map" />}
                    </div>
                  )}
                  <p className="text-gray-600 text-[14px] leading-relaxed">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Anchor Experiences">
          <div className="space-y-4">
            {g.anchorExperiences.map(anchor => (
              <AnchorCard key={anchor.id} anchor={anchor} placeName={placeMap[anchor.placeId] ?? anchor.name} />
            ))}
          </div>
        </Section>

        <Section title="Road Network & Major Routes">
          <div className="space-y-5">
            <div className="rounded-xl overflow-hidden h-36">
              <img src="/images/tacoma-m1.jpg" alt="M1 corridor" className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-600 text-[15px] leading-relaxed">{g.roadNetwork.prose}</p>
            <div className="space-y-4">
              {g.roadNetwork.routes.map(r => (
                <div key={r.name} className="flex gap-4">
                  <span className="font-mono font-black text-sm text-emerald-700 w-24 shrink-0 pt-0.5">{r.name}</span>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Featured Overland Routes">
          <div className="space-y-4">
            {g.overlandRoutes.map(route => (
              <div key={route.name} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {route.photo && (
                  <div className="relative h-44 overflow-hidden">
                    <img src={route.photo} alt={route.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 flex items-end justify-between gap-2">
                      <h3 className="font-black text-white text-base leading-tight">{route.name}</h3>
                      {route.link && route.link !== '#' && (
                        <a href={route.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-white border border-white/50 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 shrink-0 hover:bg-white/30 transition-colors whitespace-nowrap">
                          ↗ OTG Guide
                        </a>
                      )}
                    </div>
                  </div>
                )}
                <div className="p-5 space-y-3">
                  {!route.photo && (
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-black text-gray-900 text-base">{route.name}</h3>
                      {route.link && route.link !== '#' && (
                        <a href={route.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-700 border border-emerald-200 bg-emerald-50 rounded-full px-3 py-1 shrink-0 hover:bg-emerald-100 transition-colors">
                          ↗ OTG Guide
                        </a>
                      )}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 text-xs text-gray-400 font-semibold">
                    <span>{route.distance}</span><span>·</span>
                    <span>{route.duration}</span><span>·</span>
                    <span>{route.season}</span>
                  </div>
                  {route.vehicles && route.vehicles.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {route.vehicles.map(v => (
                        <span key={v} className="text-xs bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold px-2.5 py-0.5 rounded-full">{v}</span>
                      ))}
                    </div>
                  )}
                  <p className="text-sm text-gray-600 leading-relaxed">{route.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Camping">
          <div className="space-y-6">
            <p className="text-gray-600 text-[15px] leading-relaxed">{g.camping.prose}</p>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Favorite Dispersed Spots</p>
              <div className="space-y-2">
                {g.camping.dispersedSpots.map(spot => (
                  <div key={spot.name} className="bg-white rounded-xl shadow-sm px-4 py-3 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-bold text-sm text-gray-900">{spot.name}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{spot.description}</p>
                    </div>
                    <PlacePin placeId={spot.placeId} label="Map" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Developed Campgrounds</p>
              <div className="space-y-2">
                {g.camping.developedCampgrounds.map(cg => (
                  <div key={cg.name} className="bg-white rounded-xl shadow-sm px-4 py-3 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-bold text-sm text-gray-900">{cg.name}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{cg.description}</p>
                    </div>
                    {cg.placeId && <PlacePin placeId={cg.placeId} label="Map" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section title="Recreational Opportunities">
          <div className="space-y-3">
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
          <div className="space-y-4">
            {g.watchBeforeYouGo.map((v, i) => (
              <div key={v.youtubeId ?? i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
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
                <div className="px-4 py-3">
                  <p className="text-xs font-bold text-gray-900 leading-snug">{v.title}</p>
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
      <div className="max-w-2xl mx-auto px-6 py-10 mt-4">
        <div className="flex justify-between items-center text-xs text-gray-400">
          <span className="font-black tracking-[0.15em] uppercase">Trail Guide</span>
          <span>Mendocino National Forest · Draft</span>
        </div>
      </div>

    </div>
  )
}
