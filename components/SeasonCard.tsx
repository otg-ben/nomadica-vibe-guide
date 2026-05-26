import RatingPill from './RatingPill'

type SeasonRating = 'Prime' | 'Good' | 'Variable' | 'Limited' | 'Not recommended'

interface Props {
  season: string
  rating: SeasonRating
  description: string
}

export default function SeasonCard({ season, rating, description }: Props) {
  return (
    <div className="flex-1 min-w-0 bg-white rounded-xl border border-gray-100 p-4 text-center">
      <div className="font-semibold text-sm text-gray-900 mb-2">{season}</div>
      <div className="mb-2">
        <RatingPill rating={rating} />
      </div>
      <p className="text-xs text-gray-500 leading-snug">{description}</p>
    </div>
  )
}
