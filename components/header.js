import Twitter from '../public/assets/icons/twitter.svg';

const links = [
  { path: '#donate', label: 'Donate', isActive: false },
  { path: '#mentor', label: 'Mentor', isActive: false },
  { path: '#meet', label: 'Meet', isActive: false }
];

const NavigationBar = () => {
  return (
    <div className="text-blue-500 flex items-center justify-between p-2 md:p-4">
      <a
        href="/"
        className="text-sm sm:text-xl md:text-2xl hover:underline py-1">
        #iAmFreeCodeCamp
      </a>
      <div className="flex items-center ml-auto">
        {links.map(({ path, label }) => (
          <a
            key={path}
            href={path}
            className={`text-sm sm:text-xl md:text-2xlhover:bg-blue-500 hover:text-gray-50 px-2 py-1 transition duration-300 ease-in-out`}>
            {label}
          </a>
        ))}
        <a href="#" target="_blank" rel="noreferrer noopener">
          <Twitter className="w-4 h-4 ml-6 sm:w-8 sm:h-8 hover:text-blue-400" />
        </a>
      </div>
    </div>
  );
};

const HeaderImage = () => {
  return (
    <img
      className="border"
      src="/assets/header/desk.jpg"
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
