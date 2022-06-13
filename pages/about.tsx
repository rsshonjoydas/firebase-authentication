import { useAppSelector } from '../redux/hooks';
import { wrapper } from '../redux/store';

const About = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const { profile } = useAppSelector((state) => state.profile);

  return (
    <h4>
      <span className="text-purple-500">Currently logged in as:</span>{' '}
      <span className="text-green-400">{currentUser?.email}</span>{' '}
      <span className="text-green-400">{profile?.fullName}</span> <hr />
      <div className="container mx-auto flex flex-wrap my-6 justify-center">
        <h3 className="text-2xl capitalize font-medium py-5">Gray Buttons</h3>
        <div className="w-full text-center mx-auto">
          <button
            type="button"
            className="border border-gray-400 bg-gray-100 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-gray-500 bg-gray-200 text-gray-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-gray-600 bg-gray-300 text-gray-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-400 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-gray-400 bg-gray-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-500 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-gray-500 bg-gray-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-600 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-gray-600 bg-gray-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-700 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-gray-800 bg-gray-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-gray-900 bg-gray-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-700 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
        </div>
        <h3 className="text-2xl capitalize font-medium py-5">red Buttons</h3>
        <div className="w-full text-center mx-auto">
          <button
            type="button"
            className="border border-red-400 bg-red-100 text-red-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-200 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-red-500 bg-red-200 text-red-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-300 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-red-600 bg-red-300 text-red-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-400 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-red-400 bg-red-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-500 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-red-600 bg-red-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-700 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-red-700 bg-red-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-800 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-red-800 bg-red-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-900 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-red-900 bg-red-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-700 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
        </div>
        <h3 className="text-2xl capitalize font-medium py-5">orange Buttons</h3>
        <div className="w-full text-center mx-auto">
          <button
            type="button"
            className="border border-orange-400 bg-orange-100 text-orange-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-orange-200 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-orange-500 bg-orange-200 text-orange-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-orange-300 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-orange-600 bg-orange-300 text-orange-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-orange-400 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-orange-400 bg-orange-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-orange-500 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-orange-500 bg-orange-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-orange-600 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-orange-600 bg-orange-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-orange-700 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-orange-700 bg-orange-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-orange-800 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-orange-800 bg-orange-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-orange-900 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-orange-900 bg-orange-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-orange-700 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
        </div>
        <h3 className="text-2xl capitalize font-medium py-5">yellow Buttons</h3>
        <div className="w-full text-center mx-auto">
          <button
            type="button"
            className="border border-yellow-400 bg-yellow-100 text-yellow-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-200 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-yellow-500 bg-yellow-200 text-yellow-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-300 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-yellow-600 bg-yellow-300 text-yellow-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-400 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-yellow-400 bg-yellow-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-500 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-yellow-600 bg-yellow-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-700 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-yellow-700 bg-yellow-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-800 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-yellow-800 bg-yellow-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-900 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-yellow-900 bg-yellow-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-700 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
        </div>
        <h3 className="text-2xl capitalize font-medium py-5">green Buttons</h3>
        <div className="w-full text-center mx-auto">
          <button
            type="button"
            className="border border-green-400 bg-green-100 text-green-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-200 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-green-500 bg-green-200 text-green-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-300 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-green-600 bg-green-300 text-green-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-400 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-green-400 bg-green-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-500 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-green-600 bg-green-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-700 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-green-700 bg-green-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-800 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-green-800 bg-green-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-900 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-green-900 bg-green-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-700 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
        </div>
        <h3 className="text-2xl capitalize font-medium py-5">teal Buttons</h3>
        <div className="w-full text-center mx-auto">
          <button
            type="button"
            className="border border-teal-400 bg-teal-100 text-teal-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-200 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-teal-500 bg-teal-200 text-teal-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-300 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-teal-600 bg-teal-300 text-teal-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-400 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-teal-400 bg-teal-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-500 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-teal-600 bg-teal-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-700 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-teal-700 bg-teal-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-800 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-teal-800 bg-teal-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-900 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-teal-900 bg-teal-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-700 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
        </div>
        <h3 className="text-2xl capitalize font-medium py-5">blue Buttons</h3>
        <div className="w-full text-center mx-auto">
          <button
            type="button"
            className="border border-blue-400 bg-blue-100 text-blue-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-200 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-blue-500 bg-blue-200 text-blue-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-300 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-blue-600 bg-blue-300 text-blue-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-400 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-blue-400 bg-blue-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-500 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-blue-600 bg-blue-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-blue-700 bg-blue-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-800 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-blue-800 bg-blue-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-900 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-blue-900 bg-blue-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
        </div>
        <h3 className="text-2xl capitalize font-medium py-5">indigo Buttons</h3>
        <div className="w-full text-center mx-auto">
          <button
            type="button"
            className="border border-indigo-400 bg-indigo-100 text-indigo-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-200 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-indigo-500 bg-indigo-200 text-indigo-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-300 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-indigo-600 bg-indigo-300 text-indigo-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-400 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-indigo-400 bg-indigo-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-indigo-600 bg-indigo-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-indigo-700 bg-indigo-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-800 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-indigo-800 bg-indigo-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-900 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-indigo-900 bg-indigo-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
        </div>
        <h3 className="text-2xl capitalize font-medium py-5">purple Buttons</h3>
        <div className="w-full text-center mx-auto">
          <button
            type="button"
            className="border border-purple-400 bg-purple-100 text-purple-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-purple-200 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-purple-500 bg-purple-200 text-purple-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-purple-300 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-purple-600 bg-purple-300 text-purple-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-purple-400 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-purple-400 bg-purple-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-purple-500 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-purple-500 bg-purple-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-purple-600 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-purple-600 bg-purple-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-purple-700 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-purple-700 bg-purple-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-purple-800 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-purple-800 bg-purple-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-purple-900 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-purple-900 bg-purple-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-purple-700 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
        </div>
        <h3 className="text-2xl capitalize font-medium py-5">pink Buttons</h3>
        <div className="w-full text-center mx-auto">
          <button
            type="button"
            className="border border-pink-400 bg-pink-100 text-pink-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-pink-200 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-pink-500 bg-pink-200 text-pink-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-pink-300 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-pink-600 bg-pink-300 text-pink-800 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-pink-400 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-pink-400 bg-pink-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-pink-500 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-pink-500 bg-pink-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-pink-600 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-pink-600 bg-pink-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-pink-700 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-pink-700 bg-pink-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-pink-800 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-pink-800 bg-pink-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-pink-900 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
          <button
            type="button"
            className="border border-pink-900 bg-pink-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-pink-700 focus:outline-none focus:shadow-outline"
          >
            Buttons
          </button>
        </div>
      </div>
    </h4>
  );
};

export default wrapper.withRedux(About);
