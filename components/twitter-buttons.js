export const TweetDonation = ({ size = 'large' }) => {
  return (
    <div className="flex justify-end sm:pt-4">
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-size={size}
        data-text="#iamfreeCodeCamp Challenge 1 accepted! This year I&#39;m donating $XX monthly to improve nonprofit sustainability and help more students to learn how to code during these hard times. Thank you @freeCodeCamp, thank you @ossia! 💙"
        data-url="https://iamfreecodecamp.org"
        data-hashtags="iamfreeCodeCamp #freeCodeCamp"
        data-show-count="false">
        Tweet
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"></script>
    </div>
  );
};

export const TweetMentorship = ({ size = 'large' }) => {
  return (
    <div className="flex justify-end sm:pt-4">
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-size={size}
        data-text="#iamfreeCodeCamp Challenge 2 accepted! I&#39;m making myself available to mentor a freeCodeCamp student on a weekly basis! Please RT for reach! DMs are open everyone! Thank you @freeCodeCamp, thank you @ossia! 💙"
        data-url="https://iamfreecodecamp.org"
        data-hashtags="iamfreeCodeCamp #freeCodeCamp"
        data-show-count="false">
        Tweet
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"></script>
    </div>
  );
};

export const TweetMeeting = ({ size = 'large' }) => {
  return (
    <div className="flex justify-end">
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-size={size}
        data-text="#iamfreeCodeCamp Challenge 3 accepted! I&#39;m making myself available to meet other freeCodeCamp Alumni! RT for reach! DMs are open everyone! Thank you @freeCodeCamp, thank you @ossia! 💙"
        data-url="https://iamfreecodecamp.org"
        data-hashtags="iamfreeCodeCamp #freeCodeCamp"
        data-show-count="false">
        Tweet
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"></script>
    </div>
  );
};
