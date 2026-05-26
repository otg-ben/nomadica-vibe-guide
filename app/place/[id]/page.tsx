import { mendocino } from '@/data/mendocino'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PlaceMapWrapper from '@/components/PlaceMapWrapper'

export function generateStaticParams() {
  return mendocino.places.map(p => ({ id: p.id }))
}

export default async function PlacePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const place = mendocino.places.find(p => p.id === id)
  if (!place) notFound()

  return (
    <div className="min-h-screen bg-[#f8f5f0] flex flex-col">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span>←</span>
          <span>Back to guide</span>
        </Link>
        <span className="text-gray-200">|</span>
        <span className="text-sm font-semibold text-gray-900 truncate">{place.name}</span>
      </div>

      {/* Map */}
      <div className="flex-1 relative" style={{ minHeight: '60vh' }}>
        <PlaceMapWrapper lat={place.lat} lng={place.lng} name={place.name} description={place.description} />
      </div>

      {/* Place info card */}
      <div className="bg-white border-t border-gray-100 px-5 py-5">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start gap-2 mb-1">
            <span className="text-lg">📍</span>
            <h1 className="text-lg font-semibold text-gray-900">{place.name}</h1>
          </div>
          {place.description && (
            <p className="text-sm text-gray-500 leading-relaxed ml-7">{place.description}</p>
          )}
          <div className="mt-3 ml-7 text-xs text-gray-400">
            {place.lat.toFixed(4)}° N, {Math.abs(place.lng).toFixed(4)}° W
          </div>
        </div>
      </div>
    </div>
  )
}
