import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://vrmultimarcassc.com.br'),
  title: 'VR Multimarcas | Sua Moto é Aqui',
  description: 'Revenda de motos Shineray 0km em Santo Amaro, São Paulo. Financiamento, garantia e test drive. Conquiste sua moto agora!',
  keywords: ['motos', 'shineray', 'são paulo', 'santo amaro', 'revenda', 'zero km', 'financiamento'],
  authors: [{ name: 'VR Multimarcas' }],
  creator: 'VR Multimarcas',
  publisher: 'VR Multimarcas',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vrmultimarcassc.com.br',
    title: 'VR Multimarcas | Sua Moto é Aqui',
    description: 'Revenda de motos Shineray 0km em Santo Amaro, São Paulo',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VR Multimarcas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VR Multimarcas | Sua Moto é Aqui',
    description: 'Revenda de motos Shineray 0km em Santo Amaro, São Paulo',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'VR Multimarcas',
              description: 'Revenda de motos Shineray 0km',
              url: 'https://vrmultimarcassc.com.br',
              telephone: '+5548998146981',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Santo Amaro, São Paulo',
                addressRegion: 'SP',
                addressCountry: 'BR',
              },
              areaServed: {
                '@type': 'City',
                name: 'São Paulo',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
