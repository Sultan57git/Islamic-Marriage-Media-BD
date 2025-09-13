import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IslamicMarriageMediaBD - বাংলাদেশের সর্ববৃহৎ ইসলামিক ম্যারিজ মিডিয়া',
  description: 'দ্বীনদার জীবনসঙ্গী খুঁজুন আল্লাহর রহমতে। বিশ্বস্ত, নিরাপদ এবং সম্পূর্ণ ইসলামিক নীতিমালা অনুসরণে।',
  keywords: 'Islamic marriage, Bangladesh marriage, Muslim matrimony, Halal marriage, Islamic biodata, বিয়ে, বায়োডাটা, ইসলামিক বিবাহ',
  authors: [{ name: 'IslamicMarriageMediaBD Team' }],
  creator: 'IslamicMarriageMediaBD',
  publisher: 'IslamicMarriageMediaBD',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://islamicmarriagemediabd.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'bn-BD': '/bn-BD',
    },
  },
  openGraph: {
    title: 'IslamicMarriageMediaBD - বাংলাদেশের সর্ববৃহৎ ইসলামিক ম্যারিজ মিডিয়া',
    description: 'দ্বীনদার জীবনসঙ্গী খুঁজুন আল্লাহর রহমতে। বিশ্বস্ত, নিরাপদ এবং সম্পূর্ণ ইসলামিক নীতিমালা অনুসরণে।',
    url: 'https://islamicmarriagemediabd.vercel.app',
    siteName: 'IslamicMarriageMediaBD',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IslamicMarriageMediaBD',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IslamicMarriageMediaBD - বাংলাদেশের সর্ববৃহৎ ইসলামিক ম্যারিজ মিডিয়া',
    description: 'দ্বীনদার জীবনসঙ্গী খুঁজুন আল্লাহর রহমতে। বিশ্বস্ত, নিরাপদ এবং সম্পূর্ণ ইসলামিক নীতিমালা অনুসরণে।',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token_here',
    yandex: 'verification_token_here',
    yahoo: 'verification_token_here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#059669" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="IslamicMarriageMediaBD" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#059669" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Bengali fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "IslamicMarriageMediaBD",
              "alternateName": "Islamic Marriage Media Bangladesh",
              "url": "https://islamicmarriagemediabd.vercel.app",
              "description": "বাংলাদেশের সর্ববৃহৎ ইসলামিক ম্যারিজ মিডিয়া",
              "publisher": {
                "@type": "Organization",
                "name": "IslamicMarriageMediaBD",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://islamicmarriagemediabd.vercel.app/logo.png"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://islamicmarriagemediabd.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.className} font-bangla`}>
        <Providers>
          {children}
        </Providers>
        
        {/* Analytics and tracking scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Initialize analytics
              if (typeof window !== 'undefined') {
                // Add your analytics code here
                console.log('Analytics initialized');
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
