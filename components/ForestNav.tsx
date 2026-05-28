'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const forests = [
  { name: 'Mendocino NF',   href: '/',               region: 'Northern CA' },
  { name: 'Tahoe NF',       href: '/tahoe',          region: 'Northern CA' },
  { name: 'Eastern Sierra', href: '/eastern-sierra', region: 'Eastern CA'  },
]

export default function ForestNav() {
  const pathname = usePathname()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-2xl mx-auto px-4 py-2.5 flex items-center gap-2 overflow-x-auto scrollbar-hide">
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40 shrink-0 mr-1">Vibe Guides</span>
        {forests.map(f => {
          const active = pathname === f.href
          return (
            <Link
              key={f.href}
              href={f.href}
              className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                active
                  ? 'bg-white text-gray-900'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {f.name}
              <span className={`text-[10px] ${active ? 'text-gray-500' : 'text-white/40'}`}>{f.region}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
