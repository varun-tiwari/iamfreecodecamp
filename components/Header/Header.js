import Link from 'next/link'
import { FaTwitter, FaDiscord } from 'react-icons/fa'

const Header = () => {
  return (
    <div className="text-blue-500 flex items-center justify-between pt-4 pb-8 sm:pb-16">
      <Link href="/">
        <a className="font-bold text-xl sm:text-2xl">#iamfreeCodeCamp</a>
      </Link>
      <div className="flex gap-4">
        <a
          href="https://twitter.com/iamfreecodecamp"
          target="_blank"
          rel="noreferrer noopener">
          <FaTwitter className="w-6 h-6 sm:w-8 sm:h-8 hover:text-twitter-200 text-twitter-100 transition duration-300 ease-in-out" />
        </a>
        <a
          href="https://discord.gg/kp3NQNKW9J"
          target="_blank"
          rel="noreferrer noopener">
          <FaDiscord className="w-6 h-6 sm:w-8 sm:h-8 hover:text-discord-200 text-discord-100 transition duration-300 ease-in-out" />
        </a>
      </div>
    </div>
  )
}

export default Header
