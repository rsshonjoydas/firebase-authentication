import Link from 'next/link';
import { LinkProps } from '../../interface/LinkPropsType';

const FooterItem = ({ label, href }: LinkProps) => (
  <li className="mb-2 cursor-pointer">
    <Link href={href}>
      <span className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">
        {label}
      </span>
    </Link>
  </li>
);

export default FooterItem;
