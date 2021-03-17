import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaTwitter } from 'react-icons/fa';

const links = [
  { path: '/team', label: 'Team', isActive: false },
  { path: '/mentors', label: 'Mentors', isActive: false }
];

const NavigationBar = () => {
  const router = useRouter();
  const activeClasses = 'bg-blue-500 text-gray-50';
  return (
    <div className="text-blue-500 flex items-center justify-between py-4">
      <Link href="/">
        <a className="font-bold text-sm sm:text-xl md:text-2xl">
          #iamfreeCodeCamp
        </a>
      </Link>
      <div className="flex items-center gap-0 sm:gap-4 ml-auto">
        {links.map(({ path, label }) => (
          <Link key={path} href={path}>
            <a
              className={`${
                router.pathname === path ? activeClasses : null
              } font-bold text-sm sm:text-xl md:text-2xl hover:bg-blue-500 hover:text-gray-50 px-2 py-1 transition duration-300 ease-in-out`}>
              {label}
            </a>
          </Link>
        ))}
        <a
          href="https://twitter.com/iamfreecodecamp"
          target="_blank"
          rel="noreferrer noopener">
          <FaTwitter className="w-4 h-4 sm:ml-6 sm:w-8 sm:h-8 hover:text-twitter-200 text-twitter-100 transition duration-300 ease-in-out" />
        </a>
      </div>
    </div>
  );
};

export default function Header() {
  return <NavigationBar />;
}
