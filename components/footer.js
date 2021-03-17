import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="h-8 flex justify-end items-center">
        <a href="#" className="py-1 text-xs sm:text-sm hover:underline">
          Scroll To Top
        </a>
      </div>
      <div className="flex flex-col justify-center items-center p-6 bg-gray-500 border">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://vercel.com?utm_source=iamfreecodecamp&utm_campaign=oss">
          <div className="flex items-center py-4">
            <span className="text-sm font-bold mx-1">Powered by</span>
            <img
              className="h-4"
              src="/assets/vercel/logo.svg"
              alt="vercel logo"
            />
          </div>
        </a>
        <div>
          <a
            href="https://twitter.com/iamfreecodecamp"
            target="_blank"
            rel="noreferrer noopener">
            <FaTwitter className="w-4 h-4 sm:w-8 sm:h-8 text-twitter-100 hover:text-twitter-200 transition duration-300 ease-in-out" />
          </a>
        </div>
        <div className="font-bold text-lg">#iamfreeCodeCamp</div>
        <div className="text-sm">iamfreecodecamp@gmail.com</div>
      </div>
    </footer>
  );
};

export default Footer;
