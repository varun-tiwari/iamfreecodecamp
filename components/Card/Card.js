import { FaTwitter, FaLinkedin } from 'react-icons/fa'

const Card = ({ person }) => (
  <figure
    className="border border-gray-200 md:flex rounded-lg overflow-hidden shadow-lg"
    key={person.name}>
    <img
      src={person.image}
      className="w-40 lg:w-44 h-auto md:rounded-none mx-auto rounded-full object-cover mt-4 md:m-0"
      alt="members of team"
    />
    <div className="m-4 text-center md:text-left md:flex flex-col justify-between">
      <div className="font-bold text-twitter-100 text-lg">{person.name}</div>
      <div>{person.description}</div>
      <div className="flex py-2 justify-center sm:justify-start">
        <a
          href={`https://twitter.com/${person.twitter}`}
          target="_blank"
          rel="noreferrer noopener"
          className="my-auto">
          <FaTwitter className="w-5 h-5 hover:text-twitter-200 text-twitter-100 transition duration-300 ease-in-out" />
        </a>
        <a
          href={`https://www.linkedin.com/in/${person.linkedIn}/`}
          target="_blank"
          rel="noreferrer noopener">
          <FaLinkedin className="w-5 h-55 ml-4  hover:text-linkedIn-200 text-linkedIn-100 transition duration-300 ease-in-out" />
        </a>
      </div>
    </div>
  </figure>
)

export default Card
