'use client'

import { useState } from 'react'

const photos = [
  { src: '/images/lake-pillsbury-kayak.jpg', alt: 'Kayaking on Lake Pillsbury with snow-capped mountains' },
  { src: '/images/anthony-peak-lookout.jpg', alt: 'Anthony Peak fire lookout at 6,954 ft' },
  { src: '/images/summit-overlook-vehicles.jpg', alt: 'Summit overlook with Lake Pillsbury below' },
  { src: '/images/summit-vista.jpg', alt: 'Wide vista from the summit ridge' },
  { src: '/images/tacoma-m1.jpg', alt: 'Built Tacoma on the M1 corridor' },
]

export default function PhotoGallery() {
  const [loaded, setLoaded] = useState<Record<number, boolean>>({})

  return (
    <div className="relative">
      <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-1">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="snap-start shrink-0 relative overflow-hidden rounded-xl bg-gray-800"
            style={{ width: 'calc(90vw)', maxWidth: '420px', aspectRatio: '4/3' }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className={`w-full h-full object-cover transition-opacity duration-500 ${loaded[i] ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setLoaded(prev => ({ ...prev, [i]: true }))}
              onError={(e) => {
                // show placeholder gradient if image missing
                const el = e.currentTarget.parentElement
                if (el) el.setAttribute('data-placeholder', 'true')
              }}
            />
            {/* overlay for mood */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 text-white/70 text-xs font-medium">{photo.alt}</div>
          </div>
        ))}
      </div>
      {/* scroll hint dots */}
      <div className="flex justify-center gap-1.5 mt-3">
        {photos.map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-gray-300" />
        ))}
      </div>
    </div>
  )
}
