import { NextPage } from 'next';
import Link from 'next/link';
import Header from '../components/Header';

const NotFound = () => (
  <div className="bg-gradient-to-r from-purple-300 to-blue-200">
    <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
        <div className="border-t border-gray-200 text-center pt-8">
          <h1 className="text-9xl font-bold text-purple-400">404</h1>
          <h1 className="text-6xl font-medium py-8">oops! Page not found</h1>
          <p className="text-2xl pb-8 px-12 font-medium">
            Oops! The page you are looking for does not exist. It might have been moved or deleted.
          </p>
          <Link href="/">
            <span className="cursor-pointer whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 mr-6">
              Go back home
            </span>
          </Link>
          <Link href="/support">
            <span className="mt-4 cursor-pointer whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-indigo-700 bg-indigo-200 hover:bg-indigo-100">
              Contact support
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;

NotFound.getLayout = function PageLayout(page: NextPage) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};
