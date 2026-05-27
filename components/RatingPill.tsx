type Rating =
  | 'Best'
  | 'Good'
  | 'Fair'
  | 'Variable'
  | 'Inaccessible'
  | 'Prime'
  | 'Great'
  | 'Limited'
  | 'Not recommended'
  | 'Closed'

const colors: Record<Rating, string> = {
  Best:              'bg-emerald-700 text-white',
  Prime:             'bg-emerald-700 text-white',
  Great:             'bg-emerald-600 text-white',
  Good:              'bg-green-500 text-white',
  Fair:              'bg-yellow-400 text-gray-900',
  Variable:          'bg-slate-400 text-white',
  Inaccessible:      'bg-red-600 text-white',
  Closed:            'bg-red-600 text-white',
  Limited:           'bg-gray-300 text-gray-600',
  'Not recommended': 'bg-red-200 text-red-700',
}

export default function RatingPill({ rating }: { rating: Rating }) {
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide ${colors[rating] ?? 'bg-gray-400 text-white'}`}>
      {rating}
    </span>
  )
}
