import Link from "next/link";
import styles from "./About.module.scss";

export default function AboutPage() {
  return (
    <section className={styles.section}>
      <h1>About Kay Moz</h1>
      <p>
        I love creating art that people interact with every day. It brings me so
        much joy knowing that my creations become a part of your home. They sit
        on your windowsills, bringing life and light into the room. They are
        shared over cups of coffee with friends and meals with family.
      </p>

      <p>
        I not only hope my ceramics bring you personal joy, but will have a
        larger impact on Long Island. I love Jesus and strive to follow His
        example to show unconditional love to the poor and oppressed, of any
        faith, or none. I've gone on many service trips to third-world countries
        that have been eye-opening and impactful but left me feeling like I was
        overlooking the need right here in my own community. There is poverty,
        brokenness and so much need right here on this island that I love. I
        don't want to ignore that. My desire is that Kay Moz Ceramics will help
        empower and advocate for those in need and those who have dedicated
        their lives to serving those on Long Island.
      </p>

      <p>
        My goal is to create work that breeds hospitality in our homes and our
        community.
      </p>

      <div className={styles.line} />

      <h2>What is Bethany House?</h2>
      <p>
        Bethany House was started by three nuns who opened their doors to a
        frightened family after their house burned down in 1978. Since then,
        they have grown <em>400%</em>(!) from a nightly bed capacity of
        seventeen to eighty-five. They exist to strengthen and assist homeless
        women and children on Long Island who are deprived of the basic
        resources required for natural and healthy growth and development. They
        provide a homelike atmosphere, care, and comprehensive services combine
        to encourage the individual or family to attain self-sufficiency and
        restore human dignity. For more info about what they do check out{" "}
        <Link href="https://www.youtube.com/watch?v=1V7QMDTfbas">
          this video
        </Link>{" "}
        on <Link href="https://bhny.org/">their website</Link>.
      </p>

      <h2>How is Kay Moz Ceramics partnering with them?</h2>
      <p>
        15% of every sale is going to Bethany House. At checkout you will see
        how much of your purchase is going to them, and you can increase your
        donation there as well.
      </p>
      <p>
        We are also giving out information at our craft fair booths and here on
        the website for anyone who is in need of their services, knows someone
        who is, or wants get more involved in what Bethany House is doing.
      </p>

      <h2>How can you help?</h2>
      <p>
        By purchasing from <Link href="/shop">our shop</Link>, you are donating
        to Bethany House. We also give you a chance to easily donate more at
        checkout. Feel free to <Link href="/contact">contact us</Link> if you
        have any questions or would like more information.
      </p>
      <p>
        If you would like to give directly to Bethany House, please click{" "}
        <Link href="https://bhny.org/donate">here</Link> to visit their donation
        page. For more information, please visit Bethany House on{" "}
        <Link href="https://www.facebook.com/BethanyHouseNY/">Facebook</Link> or
        their <Link href="https://bhny.org/">official website</Link>.
      </p>
    </section>
  );
}
