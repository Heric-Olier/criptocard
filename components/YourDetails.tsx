import styles from "./main.module.scss";
import detailsstyles from "./detailsstyles.module.scss";

export default function YourDetails() {
  return (
    <>
      <section className={detailsstyles.yourdetails__container}>
        <div className={styles.container__text}>
          <h3 className={styles.main__title}>Your details</h3>
        </div>
        <form className={detailsstyles.form}>
          <div className={detailsstyles.container__label}>
            <label className={detailsstyles.label}>
              Full name <span>*</span>
              <input type="text" required placeholder="Your full name" />
            </label>
          </div>

          <div className={detailsstyles.container__label}>
            <label className={detailsstyles.label}>
              Email <span>*</span>
              <input type="email" required placeholder="Your email address" />
            </label>
          </div>

          <div className={detailsstyles.container__label}>
            <label className={detailsstyles.label}>
              Confirm Email <span>*</span>
              <input type="email" required placeholder="Your email address" />
            </label>
          </div>

          <div className={detailsstyles.container__label}>
            <label className={detailsstyles.label}>
              Phone <span>*</span>
              <input type="number" required placeholder="Your phone number" />
            </label>
          </div>

          <div className={detailsstyles.container__labelRow}>
            <label className={detailsstyles.label__midLeft}>
              Telegram ID
              <input type="number" placeholder="Your telegram id" />
            </label>
            <label className={detailsstyles.label__midRight}>
              Whatsapp ID <span>*</span>
              <input type="number" placeholder="Your whatsapp id" />
            </label>
          </div>

          <div className={detailsstyles.container__label}>
            <label className={detailsstyles.label}>
              Birthday date <span>*</span>
              <input type="date" required placeholder="Your birthday date" />
            </label>
          </div>

          <div className={detailsstyles.container__label}>
            <label className={detailsstyles.label}>
              Mailing address <span>*</span>
              <input type="text" required placeholder="Your mailing address" />
            </label>
          </div>
          <div className={detailsstyles.terms__container}>
            <input type="checkbox" required />
            <h5 className={detailsstyles.terms__text}>
              I accept and authorize the terms and conditions and the personal
              data processing policies.
            </h5>
          </div>

          {/* <button type="submit">Submit</button> */}
        </form>
      </section>
    </>
  );
}
