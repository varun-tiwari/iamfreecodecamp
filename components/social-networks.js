import Twitter from '../public/assets/icons/twitter.svg';

const SocialNetworks = () => {
  return (
    <div className="flex">
      <a href="#" target="_blank" rel="noreferrer noopener">
        <Twitter className="mr-2 w-6 h-6 sm:w-8 sm:h-8 hover:text-blue-400" />
      </a>
    </div>
  );
};

export default SocialNetworks;
