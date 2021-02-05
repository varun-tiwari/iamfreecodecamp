import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-end mt-8">
        <a href="#" className="py-1 text-sm sm:text-lg hover:underline">
          Scroll To Top
        </a>
      </div>
      <div className="flex flex-col items-center p-2 pt-6 bg-gray-500 border">
        <a href="#" target="_blank" rel="noreferrer noopener">
          <FaTwitter className="w-4 h-4 sm:w-8 sm:h-8 text-twitter-100 hover:text-twitter-200 transition duration-300 ease-in-out" />
        </a>
        <div className="font-bold text-lg">#iAmFreeCodeCamp</div>
        <div className="text-sm">
          <a
            className="hover:underline"
            href="https://eduardovedes.com"
            targe="_blank"
            rel="noopener noreferrer">
            eduardovedes.com
          </a>{' '}
          - eduardo.vedes@gmail.com
        </div>
        <div className="font-bold text-sm">2021</div>
      </div>
    </footer>
  );
};

export default Footer;
