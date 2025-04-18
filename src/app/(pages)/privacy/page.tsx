import Link from "next/link";

export default function PrivacyPage() {
  return (
    <section>
      <h1>Privacy Policy</h1>
      <p>Last updated: 04/07/2025</p>
      <h2>Who we are</h2>
      <p>Our website address is: https://www.kaymozceramics.com.</p>
      <h2>What personal data we collect and why we collect it</h2>
      <h3>Media</h3>
      <p>
        If you upload images to the website, you should avoid uploading images
        with embedded location data (EXIF GPS) included. Visitors to the website
        can download and extract any location data from images on the website.
      </p>
      <h3>Contact forms</h3>
      <p>
        The contact forms on the website collect information like names and
        email addresses, or more, for the purpose of providing a reply address.
        The information collected is stored on our servers indefinitely, but you
        always have the option to delete or download your collected data.
      </p>
      <h3>Cookies</h3>
      <p>
        If you leave a comment on our site you may opt-in to saving your name,
        email address and website in cookies. These are for your convenience so
        that you do not have to fill in your details again when you leave
        another comment. These cookies will last for one year.
      </p>
      <h3>Login</h3>
      <p>
        If you have an account and you log in to this site, we will set a
        temporary cookie to determine if your browser accepts cookies. This
        cookie contains no personal data and is discarded when you close your
        browser.
      </p>
      <p>
        When you log in, we will also set up several cookies to save your login
        information and your screen display choices. Login cookies last for two
        days, and screen options cookies last for a year. If you select
        “Remember Me”, your login will persist for two weeks. If you log out of
        your account, the login cookies will be removed.
      </p>
      If you edit or publish an article, an additional cookie will be saved in
      your browser. This cookie includes no personal data and simply indicates
      the post ID of the article you just edited. It expires after 1 day.
      <h3>Embedded content from other websites</h3>
      <p>
        Articles on this site may include embedded content (e.g. videos, images,
        articles, etc.). Embedded content from other websites behaves in the
        exact same way as if the visitor has visited the other website.
      </p>
      <p>
        These websites may collect data about you, use cookies, embed additional
        third-party tracking, and monitor your interaction with that embedded
        content, including tracking your interaction with the embedded content
        if you have an account and are logged in to that website.
      </p>
      <h3>Analytics</h3>
      <p>
        This website uses Google Analytics to collect user data related to page
        visits and interactions. Please refer to Google’s Privacy Policy for
        more details on how that data is stored and used.
      </p>
      <h3>Who we share your data with</h3>
      <p>
        The data collected by the website is shared with analytics plugins, such
        as Google Analytics, for the purposes of marketing the website. We do
        not sell the data we collect to anyone.
      </p>
      <h3>How long we retain your data</h3>
      <p>
        If you leave a comment, the comment and its metadata are retained
        indefinitely. This is so we can recognize and approve any follow-up
        comments automatically instead of holding them in a moderation queue.
      </p>
      <p>
        For users that register on our website (if any), we also store the
        personal information they provide in their user profile. All users can
        see, edit, or delete their personal information at any time (except they
        cannot change their username). Website administrators can also see and
        edit that information.
      </p>
      <h3>What rights you have over your data</h3>
      <p>
        If you have an account on this site, or have left comments, you can
        request to receive an exported file of the personal data we hold about
        you, including any data you have provided to us. You can also request
        that we erase any personal data we hold about you. This does not include
        any data we are obliged to keep for administrative, legal, or security
        purposes.
      </p>
      <h3>Where we send your data</h3>
      <p>
        Visitor comments may be checked through an automated spam detection
        service.
      </p>
      <h3>Additional information</h3>
      <h4>How we protect your data</h4>
      <p>
        This website utilizes an SSL certificate to encrypt all data passed to
        and from the server. This is to protect any data that may be
        transferred.
      </p>
      <h3>Questions?</h3>
      <p>
        If you have any questions about this Privacy Policy, please feel free to{" "}
        <Link href="/contact">contact us.</Link>
      </p>
    </section>
  );
}
