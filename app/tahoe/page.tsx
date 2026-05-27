import { tahoe } from '@/data/tahoe'
import VibeGuidePage from '@/components/VibeGuidePage'

const photos = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Upper_Sardine_Lake_and_the_Sierra_Buttes%2C_California.jpg',
    alt: 'Upper Sardine Lake and the Sierra Buttes',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/7/74/French_Meadows_and_Hell_Hole_Reservoirs.jpg',
    alt: 'French Meadows and Hell Hole Reservoirs from the air',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Rubicon_River_flowing_through_cataract_to_Hell_Hole_Reservoir.jpg',
    alt: 'Rubicon River flowing to Hell Hole Reservoir',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/The_Diggins_at_Malakoff_Diggins_State_Park_in_California.JPG',
    alt: 'Malakoff Diggins hydraulic mine canyon',
  },
]

export default function TahoePage() {
  return (
    <VibeGuidePage
      data={tahoe}
      heroImage="https://upload.wikimedia.org/wikipedia/commons/2/21/Upper_Sardine_Lake_and_the_Sierra_Buttes%2C_California.jpg"
      heroAlt="Upper Sardine Lake and the Sierra Buttes, Tahoe National Forest"
      photos={photos}
    />
  )
}
