// 1. Import Area

// import './somelocation' will be comming from some relative location
import './globals.css'

// Import {NamedImport} from 'library'; will be comming from node module
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
/*This is Javascript Object
{
  property:value,
  property:value;
}
*/
export const metadata: Metadata = {
  title: 'Find Businesses Near You on Local Search Engine - Justdial',
  description: 'Generated by create next appJustdial, India&#x27;s No. 1 local search engine, for Restaurants, Hotels, Salons, Real Estate, Travel, Healthcare, Education, B2B Businesses and more. Find addresses, phone numbers, reviews and ratings, photos, maps of businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
