import type { Metadata } from 'next'
import { Noto_Serif_Bengali } from 'next/font/google'
import './globals.css'
import LoadingScreen from './components/LoadingScreen'

const notoSerifBengali = Noto_Serif_Bengali({ 
  subsets: ['bengali'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'নওয়াপাড়া শংকরপাশা সরকারি মাধ্যমিক বিদ্যালয়',
  description: 'Official website of Nowapara Shankarpasha Government Secondary School',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={notoSerifBengali.className}>
        <LoadingScreen />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}

