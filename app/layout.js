import dynamic from 'next/dynamic'
const HeaderModule = dynamic(() => import("./components/header"));
const FooterBlock = dynamic(() => import("./components/footer"));

const title = `Light Technology Kazakhstan`;
const description = `Light Technology Kazakhstan - ваш надежный партнер в сфере АСУТП. Мы специализируемся на автоматизации технологических процессов, обеспечивая эффективность и безопасность вашего производства.`;

export const metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  title: title,
  description: description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fff' },
    { media: '(prefers-color-scheme: dark)', color: '#fff' },
  ],
  openGraph: {
    title: title,
    description: description,
    type: 'article',
    publishedTime: new Date(),
    authors: [title],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: title,
  applicationName: title,
  referrer: 'origin-when-cross-origin',
  keywords: ['LTK', 'ltkz', 'Light Technology'],
  authors: [{ name: title, url: 'https://ltkz.kz' }],
  colorScheme: 'light',
  creator: title,
  publisher: title,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  manifest:"/site.webmanifest"
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#409cff"/>
        <meta name="apple-mobile-web-app-title" content="Light Technology Kazakhstan"/>
        <meta name="application-name" content="Light Technology Kazakhstan"/>
        <meta name="msapplication-TileColor" content="#2d89ef"/>
      </head>
      <body>
        <HeaderModule />
          {children}
        <FooterBlock />
      </body>
    </html>
  )
}
