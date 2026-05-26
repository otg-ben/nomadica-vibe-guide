import Link from 'next/link'

export default function PlacePin({ placeId, label }: { placeId: string; label: string }) {
  return (
    <Link
      href={`/place/${placeId}`}
      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-gray-200 bg-white text-xs text-gray-700 hover:border-emerald-500 hover:text-emerald-700 transition-colors"
    >
      <span>📍</span>
      <span>{label}</span>
    </Link>
  )
}
