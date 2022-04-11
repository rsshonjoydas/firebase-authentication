import FooterData from '../../adapters/data/FooterData';
import SocialIcons from '../SocialIcons';
import FooterItem from './FooterItem';

const Footer = () => (
  <footer className="footer-1 bg-gray-100 py-8 sm:py-12 bottom-0">
    <div className="container mx-auto px-4 border-t">
      <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
          <h5 className="text-xl font-bold mb-6 link">Features</h5>
          <ul className="list-none footer-links">
            {FooterData.features.map((data) => (
              <FooterItem key={data.id} href={data.path} label={data.label} />
            ))}
          </ul>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
          <h5 className="text-xl font-bold mb-6 link">Resources</h5>
          <ul className="list-none footer-links">
            {FooterData.resources.map((data) => (
              <FooterItem key={data.id} href={data.path} label={data.label} />
            ))}
          </ul>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
          <h5 className="text-xl font-bold mb-6 link">About</h5>
          <ul className="list-none footer-links">
            {FooterData.about.map((data) => (
              <FooterItem key={data.id} href={data.path} label={data.label} />
            ))}
          </ul>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
          <h5 className="text-xl font-bold mb-6 link">Help</h5>
          <ul className="list-none footer-links">
            {FooterData.help.map((data) => (
              <FooterItem key={data.id} href={data.path} label={data.label} />
            ))}
          </ul>
        </div>
        <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
          <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left link">
            Stay connected
          </h5>
          <div className="flex sm:justify-center xl:justify-start">
            <SocialIcons />
          </div>
        </div>
      </div>

      <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
        <div className="sm:w-full px-4 md:w-1/6">
          <strong>FWR</strong>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
          <h6 className="font-bold mb-2">Address</h6>
          <address className="not-italic mb-4 text-sm">123 6th St. Melbourne, FL 32904</address>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
          <h6 className="font-bold mb-2">Free Resources</h6>
          <p className="mb-4 text-sm">
            Use our HTML blocks for <strong>FREE</strong>
            <em>All are MIT License</em>
          </p>
        </div>
        <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
          <button
            type="button"
            className="px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded text-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
