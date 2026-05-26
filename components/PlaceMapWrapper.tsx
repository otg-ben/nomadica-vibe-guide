'use client'

import dynamic from 'next/dynamic'

const PlaceMap = dynamic(() => import('./PlaceMap'), { ssr: false })

export default function PlaceMapWrapper(props: { lat: number; lng: number; name: string; description?: string }) {
  return <PlaceMap {...props} />
}
