'use client'

import { useState } from 'react'

interface Props {
  title: string
  defaultOpen?: boolean
  children: React.ReactNode
}

export default function Section({ title, defaultOpen = true, children }: Props) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <section>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-4 py-6 text-left group"
      >
        <span className={`w-7 h-7 shrink-0 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-300 ${open ? 'rotate-45 border-emerald-500 text-emerald-600' : 'border-gray-300 text-gray-400 group-hover:border-emerald-400 group-hover:text-emerald-500'}`}>
          +
        </span>
        <h2 className="text-[22px] font-black text-gray-900 group-hover:text-emerald-700 transition-colors tracking-tight">{title}</h2>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="pb-10 pl-11">
            {children}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100" />
    </section>
  )
}
