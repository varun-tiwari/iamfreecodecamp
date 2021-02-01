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
      <a
        href="/"
        onClick={() => setIsActive(null)}
        className="text-sm sm:text-3xl px-2 py-1">
        #iAmFreeCodeCamp
      </a>
      <div className="flex gap-2 sm:gap-8">
        {links.map(({ path, label }) => (
          <a
            key={path}
            href={path}
            className={`text-sm sm:text-2xl ${
              isActive === path
                ? 'bg-blue-500 text-blue-100'
                : 'hover:bg-blue-500 hover:text-blue-100'
            } px-2 py-1 transition duration-300 ease-in-out`}
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
      {/* <div className="flex items-center" style={{ marginLeft: 'auto' }}>
          <div className="mx-8">#iAmFreeCodeCamp</div>
          <Logo className="h-10 w-10" />
        </div> */}
    </div>
  );
}
