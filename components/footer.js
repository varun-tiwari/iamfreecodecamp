import SocialNetworks from './social-networks';

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-end mt-8">
        <a href="#" className="py-2 px-1 text-sm sm:text-lg hover:underline">
          Scroll To Top
        </a>
      </div>
      <div className="flex flex-col justify-center items-center h-32 bg-gray-500 border">
        <SocialNetworks />
      </div>
    </footer>
  );
};

export default Footer;
