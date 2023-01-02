import '../styles/globals.css'
import Layout from './Layout/Layout'

export default function App({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
