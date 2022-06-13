import { onIdTokenChanged } from 'firebase/auth';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/Layout';
import { auth } from '../firebase';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addUser } from '../redux/slice/authSlice';
import { fetchProfile } from '../redux/slice/profileSlice';
import { wrapper } from '../redux/store';
import '../styles/globals.css';

toast.configure();

const MyApp = ({ Component, pageProps }: AppProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { currentUser } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, async (user) => {
      if (user) {
        dispatch(addUser(user));
      } else {
        dispatch(addUser(undefined));
      }
      return true;
    });

    return unsubscribe;
  }, [dispatch, router]);

  useEffect(() => {
    if (!currentUser?.uid) return;
    dispatch(fetchProfile(currentUser.uid));
  }, [currentUser, dispatch]);

  if ((Component as any).getLayout) {
    return (Component as any).getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>RS Shonjoy</title>
        <meta name="rsshonjoy" content="RS Shonjoy | Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default wrapper.withRedux(MyApp);
