import { FaTwitter } from 'react-icons/fa';

const links = [
  { path: '#donate', label: 'Donate', isActive: false },
  { path: '#mentor', label: 'Mentor', isActive: false },
  { path: '#meet', label: 'Meet', isActive: false }
];

const NavigationBar = () => {
  return (
    <div className="text-blue-500 flex items-center justify-between p-2 md:p-4">
      <div className="font-bold text-sm sm:text-xl md:text-2xl py-1">
        #iamfreeCodeCamp
      </div>
      <div className="flex items-center gap-0 sm:gap-4 ml-auto">
        {links.map(({ path, label }) => (
          <a
            key={path}
            href={path}
            className={`font-bold text-sm sm:text-xl md:text-2xl hover:bg-blue-500 hover:text-gray-50 px-2 py-1 transition duration-300 ease-in-out`}>
            {label}
          </a>
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

const HeaderImage = () => {
  return (
    <img
      className="border"
      src="/assets/header/header-image.jpg"
      alt="do something great"
    />
  );
};

export default function Header() {
  return (
    <div>
      <NavigationBar />
      <HeaderImage />
    </div>
  );
}
