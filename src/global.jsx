import '@/styles'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'

import faviconLight from '@/assets/favicons/favicon-light.svg'
import faviconDark from '@/assets/favicons/favicon-dark.svg'

export default (props) => {
  const { children, title, url } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Foodieland | {title}</title>
        <script src="/src/main.js" type="module" />
        <link
          rel="icon"
          href={faviconLight}
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href={faviconDark}
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <Header url={url} />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
