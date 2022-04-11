import Link from 'next/link';
import { LinkProps } from '../../interface/LinkPropsType';

const NavbarItem = ({ label, href }: LinkProps) => (
  <Link href={href}>
    <span className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
      {label}
    </span>
  </Link>
);

export default NavbarItem;
