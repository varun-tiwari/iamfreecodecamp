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
        <a
          href="https://twitter.com/iamfreecodecamp"
          target="_blank"
          rel="noreferrer noopener">
          <FaTwitter className="w-4 h-4 sm:w-8 sm:h-8 text-twitter-100 hover:text-twitter-200 transition duration-300 ease-in-out" />
        </a>
        <div className="font-bold text-lg">#iamfreeCodeCamp</div>
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
        <div className="flex">
          <div className="font-bold text-sm my-auto mr-1">2021 - </div>
          <div className="text-sm flex">
            <span>Powered by</span>
            <img
              className="w-12 ml-1 relative top-px"
              src="/assets/vercel/logo.svg"
              alt="vercel logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
