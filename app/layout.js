import dynamic from 'next/dynamic'
const HeaderModule = dynamic(() => import("./components/header"));
const FooterBlock = dynamic(() => import("./components/footer"));

export const metadata = {
  title: 'Light Technology Kazakhstan',
  description: 'Light Technology Kazakhstan - ваш надежный партнер в сфере АСУТП. Мы специализируемся на автоматизации технологических процессов, обеспечивая эффективность и безопасность вашего производства.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <HeaderModule />
          {children}
        <FooterBlock />
      </body>
    </html>
  )
}
