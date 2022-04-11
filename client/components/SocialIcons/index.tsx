import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const SocialIcons = () => (
  <>
    <Link href="https://www.facebook.com/rsshonjoydas">
      <span className="cursor-pointer w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600">
        <FontAwesomeIcon icon={faFacebook} />
      </span>
    </Link>
    <Link href="https://twitter.com/rsshonjoydas">
      <span className="cursor-pointer w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
        <FontAwesomeIcon icon={faTwitter} />
      </span>
    </Link>
    <Link href="https://www.instagram.com/rsshonjoydas/">
      <span className="cursor-pointer w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-500 hover:border-red-500">
        <FontAwesomeIcon icon={faInstagram} />
      </span>
    </Link>
    <Link href="https://www.linkedin.com/in/rsshonjoydas/">
      <span className="cursor-pointer w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-500 hover:border-blue-500">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </span>
    </Link>
    <Link href="https://github.com/rsshonjoydas">
      <span className="cursor-pointer w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-gray-400 hover:border-gray-400">
        <FontAwesomeIcon icon={faGithub} />
      </span>
    </Link>
  </>
);

export default SocialIcons;
