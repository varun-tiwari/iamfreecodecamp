import { FaDiscord, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="h-8 mt-6 flex justify-end items-center">
        <a href="#" className="py-1 text-xs sm:text-sm hover:underline">
          Scroll To Top
        </a>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center h-auto sm:h-24 px-6 py-2 bg-gray-500 border shadow-lg rounded-md">
        <div className="flex items-center gap-2">
          <a
            href="https://twitter.com/iamfreecodecamp"
            target="_blank"
            rel="noreferrer noopener">
            <FaTwitter className="w-6 h-6 sm:w-8 sm:h-8 text-twitter-100 hover:text-twitter-200 transition duration-300 ease-in-out" />
          </a>
          <a
            href="https://discord.gg/kp3NQNKW9J"
            target="_blank"
            rel="noreferrer noopener">
            <FaDiscord className="w-6 h-6 sm:w-8 sm:h-8 text-discord-100 hover:text-discord-200 transition duration-300 ease-in-out" />
          </a>
        </div>
        <div className="flex  flex-col items-center">
          <div className="font-bold text-xs sm:text-lg">#iamfreeCodeCamp</div>
          <div className="text-sm">iamfreecodecamp@gmail.com</div>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://vercel.com?utm_source=iamfreecodecamp&utm_campaign=oss">
          <div className="flex flex-col items-center sm:py-4">
            <span className="text-sm font-bold mx-1">Powered by</span>
            <img
              className="h-4"
              src="/assets/vercel/logo.svg"
              alt="vercel logo"
            />
            <span className="text-sm">Thanks guys, you rock!</span>
          </div>
        </a>
      </div>
    </footer>
  )
}

export default Footer
