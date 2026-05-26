'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

// Fix Leaflet default marker icon in Next.js
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})

interface Props {
  lat: number
  lng: number
  name: string
  description?: string
}

export default function PlaceMap({ lat, lng, name, description }: Props) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      style={{ width: '100%', height: '100%', minHeight: '60vh' }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={icon}>
        <Popup>
          <strong>{name}</strong>
          {description && <><br /><span className="text-xs">{description}</span></>}
        </Popup>
      </Marker>
    </MapContainer>
  )
}
