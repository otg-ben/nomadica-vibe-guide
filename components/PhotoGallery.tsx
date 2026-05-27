'use client'

import { useEffect, useRef, useState } from 'react'

const photos = [
  { src: '/images/anthony-peak-lookout.jpg', alt: 'Anthony Peak lookout at 6,954 ft' },
  { src: '/images/lake-pillsbury-kayak.jpg', alt: 'Lake Pillsbury with snow-capped peaks' },
  { src: '/images/summit-vista.jpg', alt: 'Summit view overlooking Lake Pillsbury' },
  { src: '/images/ridge-camp.jpg', alt: 'Dispersed camp on the upper ridges' },
  { src: '/images/tacoma-m1.jpg', alt: 'Built Tacoma on the M1 corridor' },
]

export default function PhotoGallery() {
  const [loaded, setLoaded] = useState<Record<number, boolean>>({})
  const imgRefs = useRef<(HTMLImageElement | null)[]>([])

  useEffect(() => {
    imgRefs.current.forEach((img, i) => {
      if (img?.complete && img.naturalWidth > 0) {
        setLoaded(prev => ({ ...prev, [i]: true }))
      }
    })
  }, [])

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
              ref={el => { imgRefs.current[i] = el }}
              src={photo.src}
              alt={photo.alt}
              className={`w-full h-full object-cover transition-opacity duration-500 ${loaded[i] ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setLoaded(prev => ({ ...prev, [i]: true }))}
              onError={(e) => {
                const el = e.currentTarget.parentElement
                if (el) el.setAttribute('data-placeholder', 'true')
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 text-white/70 text-xs font-medium">{photo.alt}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-1.5 mt-3">
        {photos.map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-gray-300" />
        ))}
      </div>
    </div>
  )
}
