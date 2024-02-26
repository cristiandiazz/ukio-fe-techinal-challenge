import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import { ApartmentProvider } from './context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ukio Apartments',
  description: 'Ukio Apartments Searcher',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApartmentProvider>
          {children}
        </ApartmentProvider>
      </body>
    </html>
  )
}
