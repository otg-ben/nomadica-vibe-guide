type Rating = 'Best' | 'Great' | 'Good' | 'Fair' | 'Variable' | 'Prime' | 'Limited' | 'Not recommended'

const colors: Record<Rating, string> = {
  Best:              'bg-emerald-600 text-white',
  Prime:             'bg-emerald-600 text-white',
  Great:             'bg-teal-600 text-white',
  Good:              'bg-sky-600 text-white',
  Fair:              'bg-amber-500 text-white',
  Variable:          'bg-amber-500 text-white',
  Limited:           'bg-orange-500 text-white',
  'Not recommended': 'bg-red-600 text-white',
}

export default function RatingPill({ rating }: { rating: Rating }) {
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide ${colors[rating] ?? 'bg-gray-400 text-white'}`}>
      {rating}
    </span>
  )
}
