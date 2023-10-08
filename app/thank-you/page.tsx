import stylesmain from "@/app/apply/apply.module.scss";
import thanksstyles from "./thank-you.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function ThanksPage() {
  return (
    <>
      <section className={stylesmain.main__background}>
        <div className={stylesmain.main__formContainer}>
          <Link href={"/"}>
            <Image
              className={stylesmain.logo}
              src="/cryptospace-logo-web.png"
              alt="cryptospace logo"
              width={203}
              height={45}
            />
          </Link>
          <div className={thanksstyles.container__text}>
            <h3 className={thanksstyles.thanks__title}>Thanks for applying</h3>
            <p className={thanksstyles.thanks__text}>
              Thank you for completing the form to apply for a Cryptospace card.
              Your information is being reviewed, and you will receive a
              response within 3-5 business days.
            </p>
          </div>
        </div>
        <img
          className={stylesmain.main__backgroundImage}
          src="/cards-group-form.png"
          alt="cards group"
        />
      </section>
    </>
  );
}
