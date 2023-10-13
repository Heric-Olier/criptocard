import styles from "./main.module.scss";
import detailsstyles from "./detailsstyles.module.scss";
import { useState, useContext, useEffect } from "react";
import CardProfileContext from "@/app/context/cardProfileContext";

export default function YourDetails() {
  const {
    userData,
    setUserData,
  }: any = useContext(CardProfileContext);

  const [confirmEmail, setConfirmEmail] = useState("");

  const handleChanges = (e: any) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setConfirmEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Handle submit event", userData);
  };
  

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
              <input
                type="text"
                required
                placeholder="Your full name"
                value={userData.name}
                name="name"
                onChange={handleChanges}
              />
            </label>
          </div>

          <div className={detailsstyles.container__label}>
            <label className={detailsstyles.label}>
              Email <span>*</span>
              <input
                type="email"
                required
                placeholder="Your email address"
                value={userData.email}
                name="email"
                onChange={handleChanges}
              />
            </label>
          </div>

          <div className={detailsstyles.container__label}>
            <label className={detailsstyles.label}>
              Confirm Email <span>*</span>
              <input
                type="email"
                required
                placeholder="Your email address"
                value={confirmEmail}
                name="confirm-email"
                onChange={handleChanges}
              />
            </label>
          </div>

          <div className={detailsstyles.container__label}>
            <label className={detailsstyles.label}>
              Phone <span>*</span>
              <input
                type="number"
                required
                placeholder="Your phone number"
                value={userData.phone}
                name="phone"
                onChange={handleChanges}
              />
            </label>
          </div>

          <div className={detailsstyles.container__labelRow}>
            <label className={detailsstyles.label__midLeft}>
              Telegram ID
              <input
                className={detailsstyles.input__row}
                type="number"
                placeholder="Your telegram id"
                value={userData.telegram}
                name="telegram"
                onChange={handleChanges}
              />
            </label>
            <label className={detailsstyles.label__midRight}>
              Whatsapp ID <span>*</span>
              <input
                className={detailsstyles.input__row}
                type="number"
                required
                placeholder="Your whatsapp id"
                value={userData.whatsapp}
                name="whatsapp"
                onChange={handleChanges}
              />
            </label>
          </div>

          <div className={detailsstyles.container__label}>
            <label className={detailsstyles.label}>
              Birthday date <span>*</span>
              <input
                type="date"
                required
                placeholder="Your birthday date"
                value={userData.date_of_birth}
                name="date_of_birth"
                onChange={handleChanges}
              />
            </label>
          </div>

          <div className={detailsstyles.container__label}>
            <label className={detailsstyles.label}>
              Mailing address <span>*</span>
              <input
                type="text"
                required
                placeholder="Your mailing address"
                value={userData.residency}
                name="mailing_address"
                onChange={handleChanges}
              />
            </label>
          </div>
          <div className={detailsstyles.terms__container}>
            <input type="checkbox" required />
            <h5 className={detailsstyles.terms__text}>
              I accept and authorize the terms and conditions and the personal
              data processing policies.
            </h5>
          </div>

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
