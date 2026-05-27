import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ForestNav from '@/components/ForestNav'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Nomadica Vibe Guides',
  description: "Overlander vibe guides for national forests and public lands",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full ${inter.variable}`}>
      <body className="min-h-full font-[var(--font-inter)]">
        <ForestNav />
        {children}
      </body>
    </html>
  )
}
