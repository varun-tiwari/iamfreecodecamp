import Link from 'next/link';
import { useRouter } from 'next/router';
import SocialNetworks from './social-networks';
import Logo from '../public/assets/header/fcc_secondary_large.svg';

const NavLink = ({ href, children }) => {
  const { pathname } = useRouter();
  const isActive =
    href === pathname ? 'rounded bg-blue-500 text-white' : 'none';
  return (
    <Link href={href}>
      <a
        className={`py-1 px-4 hover:bg-blue-500 hover:text-white rounded ${isActive}`}>
        {children}
      </a>
    </Link>
  );
};

export default function Header() {
  return (
    <div className="flex items-center py-4 sm:py-10 pr-4">
      <NavLink href="/">About</NavLink>
      <NavLink href="/writing">Writing</NavLink>
      <div className="flex items-center" style={{ marginLeft: 'auto' }}>
        <Logo className="h-8 w-auto" />
      </div>
    </div>
  );
}
