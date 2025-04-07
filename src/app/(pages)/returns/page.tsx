import Link from "next/link";

export default function ReturnsPage() {
  return (
    <section>
      <h1>Return Policy</h1>
      <p>
        If you are not 100% satisfied with your order, we will gladly issue a
        refund upon the return of your item/s. Please email us at
        <Link href={"mailto:support@kaymozceramics.com"}>
          support@kaymozceramics.com
        </Link>{" "}
        with your intention to return within 30 days of receiving your item.
      </p>

      <p>
        We can totally sympathize that shopping online can be tricky -
        especially when getting a sense of glaze color. If you're ordering a
        large item and remain undecided on color, we recommend first purchasing
        a small item in the colors you're curious about to see the glaze in
        person. Kay Moz Ceramics is not responsible for shipping fees if you
        receive an item you don't like. This includes but is not limited to
        glaze preference or form preference.
      </p>

      <p>
        If you believe you have been sent an item that should be considered a
        misfit, please send a photograph to{" "}
        <Link href={"mailto:support@kaymozceramics.com"}>
          support@kaymozceramics.com
        </Link>{" "}
        so that we can assess the pottery and determine next steps.
      </p>

      <p>
        If you received a piece of pottery as a gift and would like something
        different, you're more than welcome to send it back to us for store
        credit.
      </p>

      <p>
        If you aren't as in love with a glaze color as you thought you'd be, you
        can send it back our way. You can either exchange the item for something
        else or return it for a full refund.
      </p>

      <p>
        If your pottery arrives broken, please take a photograph of the damage
        and send the pictures over to{" "}
        <Link href={"mailto:support@kaymozceramics.com"}>
          support@kaymozceramics.com
        </Link>
        . We'll get a replacement out to you as quick as humanly possible!
      </p>

      <p>
        Unless you are returning or exchanging an item that arrived defective or
        damaged, you will be responsible for shipping costs. Please note that
        the responsibility for getting breakable items back to us safely falls
        on you. We are unable to exchange items that are returned to us in
        anything less than like-new condition. If you're worried about your
        packaging skills, bring your returns to a trusted shipper to package for
        you. The cost of shipping is non-refundable.
      </p>
    </section>
  );
}
