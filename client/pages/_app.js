import '../styles.css';
import 'draft-js/dist/Draft.css';
import Head from 'next/head';

import Header from '../components/Header';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/react-draft-wysiwyg@1.12.3/dist/react-draft-wysiwyg.css"
        />
      </Head>
      <>
        <Header />
        <Component {...pageProps} />
      </>
    </>
  );
}
