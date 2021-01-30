import SocialNetworks from './social-networks'


const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
        <div className="py-8">
          <div className="flex flex-col justify-center items-center">
            <div>
              <SocialNetworks />
            </div>
            <div className="py-1 text-sm sm:text-xl">
            <h3 className="text-center font-bold">
              eduardo.vedes@gmail.com
            </h3>
            <p>
              &#169; 2017 - 2021 - all rights reserved
            </p>
            </div>
          </div>
        </div>
    </footer>
  );
}

export default Footer
