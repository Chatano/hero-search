import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ReactNode } from 'react'
import { Fredoka, Changa } from 'next/font/google'
import { Header } from '@/components/header'

const fontDisplay = Changa({ subsets: ['latin'] })
const fontBody = Fredoka({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Hero Search',
    default: 'Hero Search',
  },
  description:
    'Find everything about your favorite Marvel heroes in one place.',
  keywords: 'Marvel,heroes,marvel heroes searcher,hero search',
}

interface Props {
  children: ReactNode
  drawer: ReactNode
}

export default function RootLayout({ children, drawer }: Props) {
  return (
    <html lang="en">
      <body className={`${fontDisplay.className} ${fontBody.className}`}>
        <Header />
        <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {children}
        </div>
        {drawer}
      </body>
    </html>
  )
}
