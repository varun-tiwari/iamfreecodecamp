import SocialNetworks from './social-networks';

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-end">
        <a href="#" className="text-sm hover:underline">
          To Top
        </a>
      </div>
      <div className="py-8 bg-gray-500 border">
        <div className="flex flex-col justify-center items-center">
          <div>
            <SocialNetworks />
          </div>
          <div className="py-1 text-sm sm:text-xl">
            <h3 className="text-sm text-center font-bold">
              eduardo.vedes@gmail.com
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
