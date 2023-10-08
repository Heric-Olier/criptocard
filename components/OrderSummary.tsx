import styles from "./main.module.scss";
import summary from "./summary.module.scss";

export default function Summary() {
  return (
    <>
      <section className={summary.container__summary}>
        <div className={styles.container__text}>
          <h3 className={styles.main__title}>Order Summary</h3>
          <h5 className={summary.order__text}>ORDER #1234</h5>
        </div>
        {/* Summary one */}
        <div className={summary.container__summaryItems}>
          <div className={summary.container__textImage}>
            <img src="/icon-plan.png" alt="icon plan" />
            <h4>
              Plan Card <br />
              $25.000 USD
            </h4>
          </div>
          <h2>$500 USD</h2>
        </div>

        {/* Summary two */}
        <div className={summary.container__summaryItems}>
          <div className={summary.container__textImage}>
            <img src="/icon-card.png" alt="icon card" />
            <h4>Steel Card Black</h4>
          </div>
          <h2>$300 USD</h2>
        </div>

        {/* Summary three */}
        <div className={summary.container__summaryItems}>
          <div className={summary.container__textImage}>
            <img src="/icon-shipping.png" alt="icon shipping" />
            <h4>
              Shipping International
              <br />
              Regular
            </h4>
          </div>
          <h2>$100 USD</h2>
        </div>

        <div className={summary.container__summaryTotal}>
          <h4>Total</h4>
          <h2>$900 USD</h2>
        </div>
      </section>
    </>
  );
}
