'use client'

import { useEffect, useRef, useState } from 'react'

const photos = [
  { src: '/images/anthony-peak-lookout.jpg', alt: 'Anthony Peak lookout at 6,954 ft' },
  { src: '/images/lake-pillsbury-kayak.jpg', alt: 'Lake Pillsbury with snow-capped peaks' },
  { src: '/images/pills-basin-elk.png', alt: 'Tule elk herd at Gravelly Valley' },
  { src: '/images/summit-vista.jpg', alt: 'Summit view overlooking Lake Pillsbury' },
  { src: '/images/ridge-camp.jpg', alt: 'Dispersed camp on the upper ridges' },
  { src: '/images/tacoma-m1.jpg', alt: 'Built Tacoma on the M1 corridor' },
]

export default function PhotoGallery() {
  const [loaded, setLoaded] = useState<Record<number, boolean>>({})
  const [current, setCurrent] = useState(0)
  const imgRefs = useRef<(HTMLImageElement | null)[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    imgRefs.current.forEach((img, i) => {
      if (img?.complete && img.naturalWidth > 0) {
        setLoaded(prev => ({ ...prev, [i]: true }))
      }
    })
  }, [])

  const scrollTo = (index: number) => {
    const container = scrollRef.current
    if (!container) return
    const card = container.children[index] as HTMLElement
    if (!card) return
    container.scrollTo({ left: card.offsetLeft, behavior: 'smooth' })
    setCurrent(index)
  }

  const prev = () => scrollTo(Math.max(0, current - 1))
  const next = () => scrollTo(Math.min(photos.length - 1, current + 1))

  return (
    <div className="relative">
      {/* Arrow: prev */}
      {current > 0 && (
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-6 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
          aria-label="Previous photo"
        >
          ‹
        </button>
      )}

      {/* Arrow: next */}
      {current < photos.length - 1 && (
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-6 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
          aria-label="Next photo"
        >
          ›
        </button>
      )}

      <div ref={scrollRef} className="flex gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-1">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 text-white/80 text-xs font-medium">{photo.alt}</div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-3">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`rounded-full transition-all ${i === current ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40'}`}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
