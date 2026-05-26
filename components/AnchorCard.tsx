import RatingPill from './RatingPill'
import PlacePin from './PlacePin'
import type { AnchorExperience } from '@/data/mendocino'

type SeasonRating = 'Prime' | 'Good' | 'Variable' | 'Limited' | 'Not recommended'

const seasonBg: Record<SeasonRating, string> = {
  Prime:             'bg-emerald-600 text-white',
  Good:              'bg-sky-600 text-white',
  Variable:          'bg-amber-500 text-white',
  Limited:           'bg-gray-300 text-gray-600',
  'Not recommended': 'bg-red-200 text-red-700',
}

export default function AnchorCard({ anchor, placeName }: { anchor: AnchorExperience; placeName: string }) {
  const seasons = ['Spring', 'Summer', 'Fall', 'Winter'] as const
  const seasonKeys = ['spring', 'summer', 'fall', 'winter'] as const

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 space-y-4">
      <div className="flex items-start gap-3">
        <span className="text-2xl">{anchor.icon}</span>
        <div>
          <h3 className="font-semibold text-gray-900 text-base">{anchor.name}</h3>
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{anchor.elevation}</span>
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Peak: {anchor.peakSeason}</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">{anchor.description}</p>

      <div className={`flex gap-3 items-start rounded-lg px-4 py-3 text-sm ${
        anchor.alert.type === 'warning'
          ? 'bg-amber-50 border-l-4 border-l-amber-400'
          : 'bg-emerald-50 border-l-4 border-l-emerald-400'
      }`}>
        <span className="shrink-0">{anchor.alert.type === 'warning' ? '⚠️' : '✅'}</span>
        <p className="text-gray-700">{anchor.alert.text}</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          {seasons.map((s, i) => {
            const rating = anchor.seasons[seasonKeys[i]]
            return (
              <span
                key={s}
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${seasonBg[rating] ?? 'bg-gray-100 text-gray-600'}`}
              >
                {s}
              </span>
            )
          })}
        </div>
        <PlacePin placeId={anchor.placeId} label="View on map" />
      </div>
    </div>
  )
}
