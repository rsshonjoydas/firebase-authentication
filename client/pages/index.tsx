import { onIdTokenChanged, sendEmailVerification, signOut } from 'firebase/auth';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SEO from '../components/SEO';
import { auth } from '../firebase';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addUser } from '../redux/slice/authSlice';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { currentUser } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, async (user) => {
      if (user) {
        const providerId = user.providerData.some((p) => p.providerId === 'password');

        if (providerId && !user.emailVerified) {
          await sendEmailVerification(user);
          await signOut(auth);
          return router.push('/email-verified');
        }

        dispatch(addUser(user));
      } else {
        dispatch(addUser(undefined));
        return router.push('/login');
      }
      return true;
    });

    return unsubscribe;
  }, [dispatch, router]);

  return (
    <>
      <SEO />
      <h1 className="h-screen flex items-center justify-center bg-gray-100 text-lg font-semibold text-purple-500 font-cursive">
        RS Shonjoy
      </h1>
      <h4>
        <span className="text-purple-500">Currently logged in as:</span>{' '}
        <span className="text-green-400">{currentUser?.email}</span>{' '}
      </h4>
    </>
  );
};

export default Home;
