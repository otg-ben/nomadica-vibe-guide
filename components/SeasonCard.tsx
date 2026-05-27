import RatingPill from './RatingPill'

type SeasonRating = 'Best' | 'Good' | 'Fair' | 'Variable' | 'Inaccessible' | 'Closed'

interface Props {
  season: string
  rating: SeasonRating
}

export default function SeasonCard({ season, rating }: Props) {
  return (
    <div className="flex-1 min-w-0 bg-white rounded-xl border border-gray-100 p-4 text-center">
      <div className="font-semibold text-sm text-gray-900 mb-2">{season}</div>
      <RatingPill rating={rating} />
    </div>
  )
}
