import { mendocino } from '@/data/mendocino'
import VibeGuidePage from '@/components/VibeGuidePage'

const photos = [
  { src: '/images/anthony-peak-lookout.jpg', alt: 'Anthony Peak lookout at 6,954 ft' },
  { src: '/images/lake-pillsbury-kayak.jpg', alt: 'Lake Pillsbury with snow-capped peaks' },
  { src: '/images/pills-basin-elk.png', alt: 'Tule elk herd at Gravelly Valley' },
  { src: '/images/summit-vista.jpg', alt: 'Summit view overlooking Lake Pillsbury' },
  { src: '/images/ridge-camp.jpg', alt: 'Dispersed camp on the upper ridges' },
  { src: '/images/tacoma-m1.jpg', alt: 'Built Tacoma on the M1 corridor' },
]

export default function MendocinoPage() {
  return (
    <VibeGuidePage
      data={mendocino}
      heroImage="/images/anthony-peak-lookout.jpg"
      heroAlt="Anthony Peak lookout tower, Mendocino National Forest"
      photos={photos}
      roadNetworkImage="/images/tacoma-m1.jpg"
      roadNetworkImageAlt="Built Tacoma on the M1 corridor"
    />
  )
}
