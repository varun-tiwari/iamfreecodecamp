import SocialNetworks from './social-networks';

const links = [
  { path: '#donate', label: 'Donate', isActive: false },
  { path: '#mentor', label: 'Mentor', isActive: false },
  { path: '#meet', label: 'Meet', isActive: false }
];

const NavigationBar = () => {
  return (
    <div className="text-blue-500 flex items-center justify-between p-2 sm:p-4 md:p-8">
      <div>
        <a href="/" className="text-sm sm:text-3xl hover:underline px-2 py-1">
          #iAmFreeCodeCamp
        </a>
      </div>
      <div className="flex items-center gap-2 sm:gap-8">
        {links.map(({ path, label }) => (
          <a
            key={path}
            href={path}
            className={`text-sm sm:text-2xl hover:bg-blue-500 hover:text-gray-50 px-2 py-1 transition duration-300 ease-in-out`}>
            {label}
          </a>
        ))}
        <SocialNetworks />
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
