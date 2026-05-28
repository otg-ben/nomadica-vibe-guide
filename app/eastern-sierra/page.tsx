import { easternSierra } from '@/data/eastern-sierra'
import VibeGuidePage from '@/components/VibeGuidePage'

const photos = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Mt_Whitney_from_Alabama_Hills-wideshot.jpg',
    alt: 'Mt. Whitney from Alabama Hills',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/17_27_040_mono_lake.jpg',
    alt: 'Mono Lake tufa towers',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Bodie_Ghost_Town_%2834717931084%29.jpg',
    alt: 'Bodie Ghost Town',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/5/55/A348%2C_Ancient_Bristlecone_Pine_Forest%2C_Inyo_National_Forest%2C_California%2C_USA%2C_2011.JPG',
    alt: 'Ancient Bristlecone Pine Forest, White Mountains',
  },
]

export default function EasternSierraPage() {
  return (
    <VibeGuidePage
      data={easternSierra}
      heroImage="https://upload.wikimedia.org/wikipedia/commons/b/b4/Mt_Whitney_from_Alabama_Hills-wideshot.jpg"
      heroAlt="Mt. Whitney from Alabama Hills, Eastern Sierra"
      photos={photos}
    />
  )
}
