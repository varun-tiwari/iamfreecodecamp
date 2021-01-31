import { useState } from 'react';

const links = [
  { path: '#donate', label: 'Donate', isActive: false },
  { path: '#mentor', label: 'Mentor', isActive: false },
  { path: '#meet', label: 'Meet', isActive: false }
];

const NavigationBar = () => {
  const [isActive, setIsActive] = useState(null);

  return (
    <div className="text-blue-500 flex items-center justify-between p-2 sm:p-4 md:p-8">
      <a href="#" className="text-lg sm:text-xl md:text-3xl hover:underline">
        #iAmFreeCodeCamp
      </a>
      <div className="flex gap-2 sm:gap-8">
        {links.map(({ path, label }) => (
          <a
            key={path}
            href={path}
            className={`text-sm sm:text-xl ${
              isActive === path
                ? 'bg-blue-500 text-gray-50'
                : 'hover:bg-blue-500 hover:text-gray-500'
            } px-2 py-1 cursor:pointer`}
            onClick={() => setIsActive(path)}>
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

const HeaderImage = () => {
  return (
    <div className="opacity-95">
      <img src="/assets/header/nebula.jpg" alt="do something great" />
      <div className="flex justify-center text-xs text-gray-400">
        <a
          className="underline hover:no-underline hover:text-blue-500 p-1"
          href="https://unsplash.com/@alex_andrews"
          target="_blank"
          rel="noopener noreferrer">
          Shout-out to Alex Andrews for this great image!
        </a>
      </div>
    </div>
  );
};

export default function Header() {
  return (
    <div>
      <NavigationBar />
      <HeaderImage />
      {/* <div className="flex items-center" style={{ marginLeft: 'auto' }}>
          <div className="mx-8">#iAmFreeCodeCamp</div>
          <Logo className="h-10 w-10" />
        </div> */}
    </div>
  );
}
