import PlacePin from './PlacePin'
import type { RecOpportunity } from '@/data/mendocino'

const badgeColors: Record<string, string> = {
  'Major network':            'bg-emerald-100 text-emerald-800',
  'Summer highlight':         'bg-sky-100 text-sky-800',
  'Fall highlight':           'bg-amber-100 text-amber-800',
  'Limited opportunities':    'bg-gray-100 text-gray-600',
  'Not a hiking destination': 'bg-gray-100 text-gray-600',
  '4 / 5 rating':             'bg-indigo-100 text-indigo-800',
  'Bortle Class 2':           'bg-indigo-100 text-indigo-800',
  'Fair by CA standards':     'bg-yellow-100 text-yellow-800',
}

export default function RecCard({ rec, placeMap }: { rec: RecOpportunity; placeMap: Record<string, string> }) {

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{rec.icon}</span>
          <h3 className="font-semibold text-gray-900 text-sm">{rec.name}</h3>
        </div>
        {rec.badge && (
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${badgeColors[rec.badge] ?? 'bg-gray-100 text-gray-600'}`}>
            {rec.badge}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{rec.description}</p>
      {rec.placeIds.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {rec.placeIds.map(id => (
            <PlacePin key={id} placeId={id} label={placeMap[id] ?? id} />
          ))}
        </div>
      )}
    </div>
  )
}
