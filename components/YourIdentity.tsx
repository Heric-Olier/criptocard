import styles from "./main.module.scss";
import identitystyles from "./identity.module.scss";
import detailsstyles from "./detailsstyles.module.scss";
import Identity from "./Identity";

export default function YourIdentity() {
  return (
    <>
      <section>
        <div className={styles.container__text}>
          <h3 className={styles.main__title}>
            Upload a proof <br />
            of your identity
          </h3>

          <h5 className={styles.main__text}>
            We require a valid government ID <br />
            (driver's license, passport, national ID)
          </h5>
        </div>
        <div className={identitystyles.inputFiles__container}>
          <form className={identitystyles.form__inputFiles}>
            {/*input one*/}
            <Identity
              icon="/arrow-up-icon.png"
              title="Front side of your document"
              text="Upload the front side of your document
                Supports: JPG, PNG, PDF"
              alt="arrow icon"
            />
            {/* <div className={identitystyles.inputFiles}>
              <img src="/arrow-up-icon.png" alt="arrow icon" />

              <h3>Front side of your document</h3>
              <p className={identitystyles.inputFiles__text}>
                Upload the front side of your document
                <br />
                Supports: JPG, PNG, PDF
              </p>
              <label>
                <input type="file" accept="image/*" />
              </label>
            </div> */}

            {/*input two*/}
            <Identity
              icon="/arrow-up-icon.png"
              title="Back side of your document"
              text="Upload the front side of your document
                Supports: JPG, PNG, PDF"
              alt="arrow icon"
            />
            {/* <div className={identitystyles.inputFiles}>
              <img src="/arrow-up-icon.png" alt="arrow icon" />

              <h3>Back side of your document</h3>
              <p className={identitystyles.inputFiles__text}>
                Upload the front side of your document
                <br />
                Supports: JPG, PNG, PDF
              </p>
              <label>
                <input type="file" accept="image/*" />
              </label>
            </div> */}

            {/*input three*/}
            <Identity
              title="Selfie holding your ID"
              alt="arrow icon"
              img="/capture-icon.png"
            />
            
            {/* <div className={identitystyles.inputFiles}>
              <h3>Take Selfie Holding Your ID</h3>
              <img className={identitystyles.selfie__icon} src="/capture-icon.png" alt="capture img" />
              <label>
                <input type="file" accept="image/*" capture="environment" />
              </label>
            </div> */}

            <div className={detailsstyles.terms__container}>
              <input type="checkbox" required />
              <h5 className={detailsstyles.terms__text}>
                I confirm that i uploaded valid government-issued photo ID. This
                ID include my picture, signature, name, date of birth, and
                address.
              </h5>
            </div>
            <button type="submit" className={styles.main__button}>
              Continue
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
