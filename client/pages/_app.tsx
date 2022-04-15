import type { AppProps } from 'next/app';
import Head from 'next/head';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/Layout';
import { wrapper } from '../redux/store';
import '../styles/globals.css';

toast.configure();

const MyApp = ({ Component, pageProps }: AppProps) => {
  if ((Component as any).getLayout) {
    return (Component as any).getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      {/* <Provider store={store}> */}
      <Head>
        <title>RS Shonjoy</title>
        <meta name="rsshonjoy" content="RS Shonjoy | Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </Provider> */}
    </>
  );
};

export default wrapper.withRedux(MyApp);
