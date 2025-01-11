import type { Metadata } from 'next'
import '@/styles/globals.css'
import { PropsWithChildren } from 'react'
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
    'Encontre tudo sobre os seus heróis favoritos da marvel em um lugar só.',
  keywords: 'Marvel,heroes,marvel heroes searcher,hero search',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <body className={`${fontDisplay.className} ${fontBody.className}`}>
        <Header />
        <div className="content-wrapper">{children}</div>
      </body>
    </html>
  )
}
