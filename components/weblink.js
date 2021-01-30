const WebLink = ({ href, children }) => {
  return (
    <span>
      {' '}
      <a
        href={href}
        className="bg-blue-400 hover:bg-blue-500 underline hover:text-white hover:no-underline rounded px-2"
        target="_blank"
        rel="noreferrer noopener">
        {children}
      </a>{' '}
    </span>
  );
};

export default WebLink;
