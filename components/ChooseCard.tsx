import styles from "./main.module.scss";
import choosecard from "./choosecard.module.scss";
import Card from "./Card";

export default function ChooseCard() {
  return (
    <>
      <section>
        <div className={styles.container__text}>
          <h3 className={styles.main__title}>Choose your card</h3>
        </div>
        <div className={choosecard.container__cards}>
          <form>
            {/* Plastic Card */}
            <Card
              img="/plastic-card.png"
              title="Plastic Card"
              price="$50 USD"
              value="plastic"
            />
            {/* <label>
              <input type="radio" required />
              <div>
                <img src="/plastic-card.png" alt="plastic-card" />
                <h4>Plastic Card</h4>
                <h2>$50 USD</h2>
              </div>
            </label> */}
            {/* Steel Card */}
            <Card
              img="/steel-card.png"
              title="Steel Card"
              price="$300 USD"
              value="steel"
            />
            {/* <label>
              <input type="radio" required />
              <div>
                <img src="/steel-card.png" alt="gold-card" />
                <h4>Steel Card</h4>
                <h2>$300 USD</h2>
              </div>
            </label> */}
            {/* Gold Card */}
            <Card
              img="/gold-card.png"
              title="Gold Card"
              subtitle="*24k gold plated solid silver with gems"
              price="$2.000 USD"
              value="gold"
            />
            {/* <label>
              <input type="radio" required />
              <div>
                <img src="/gold-card.png" alt="gold-card" />
                <h4>Gold Card</h4>
                <h5>*24k gold plated solid silver with gems</h5>
                <h2>$2.000 USD</h2>
              </div>
            </label> */}
            <button type="submit" className={choosecard.button__chooseCard}>
              Next
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
