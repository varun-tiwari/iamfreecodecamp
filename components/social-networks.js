import Twitter from '../public/assets/icons/twitter.svg';
import Github from '../public/assets/icons/github.svg';
import Instagram from '../public/assets/icons/instagram.svg';

import {
  HREF_MY_TWITTER,
  HREF_MY_GITHUB,
  HREF_MY_INSTAGRAM
} from '../lib/constants';

const SocialNetworks = () => {
  return (
    <div className="flex">
      <a href={HREF_MY_TWITTER} target="_blank" rel="noreferrer noopener">
        <Twitter className="mr-2 w-6 h-6 sm:w-8 sm:h-8 hover:text-blue-500" />
      </a>
      <a href={HREF_MY_GITHUB} target="_blank" rel="noreferrer noopener">
        <Github className="mx-2 w-6 h-6 sm:w-8 sm:h-8 hover:text-blue-500" />
      </a>
      <a href={HREF_MY_INSTAGRAM} target="_blank" rel="noreferrer noopener">
        <Instagram className="ml-2 w-6 h-6 sm:w-8 sm:h-8 hover:text-blue-500" />
      </a>
    </div>
  );
};

export default SocialNetworks;
