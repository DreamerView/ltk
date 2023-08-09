import dynamic from 'next/dynamic'
const HeaderModule = dynamic(() => import("./components/header"));
const FooterBlock = dynamic(() => import("./components/footer"));

export const metadata = {
  title: 'Light Technology Kazakhstan',
  description: 'Light Technology Kazakhstan - ваш надежный партнер в сфере АСУТП. Мы специализируемся на автоматизации технологических процессов, обеспечивая эффективность и безопасность вашего производства.',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fff' },
    { media: '(prefers-color-scheme: dark)', color: '#fff' },
  ],
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
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
