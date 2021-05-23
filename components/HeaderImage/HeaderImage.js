const HeaderImage = () => {
  return (
    <div>
      <img
        className="border border-gray-200 shadow-xl h-200px sm:h-300px md:h-400px lg:h-500px w-full object-cover object-bottom rounded-md"
        src="/assets/header/header-image-3.jpg"
        alt="do something great"
      />
      <a
        className="flex text-xs justify-end text-gray-700 underline hover:no-underline"
        href="https://unsplash.com/@brookecagle"
        target="_blank"
        rel="noopener noreferrer">
        Credits to: Brooke Cagle
      </a>
    </div>
  )
}

export default HeaderImage
