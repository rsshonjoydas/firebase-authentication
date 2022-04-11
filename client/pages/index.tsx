import type { NextPage } from 'next';
import SEO from '../components/SEO';

const Home: NextPage = () => (
  <>
    <SEO />
    <h1 className="h-screen flex items-center justify-center bg-gray-100 text-lg font-semibold text-purple-500 font-cursive">
      RS Shonjoy
    </h1>
  </>
);

export default Home;
