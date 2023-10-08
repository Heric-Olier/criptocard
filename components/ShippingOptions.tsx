import Shipping from "./Shipping";
import styles from "./main.module.scss";
import shipping from "./shipping.module.scss";

export default function ShippingOptions() {
  return (
    <>
      <section className={shipping.container__shipping}>
        <div className={styles.container__text}>
          <h3 className={styles.main__title}>Shipping</h3>
          <h5 className={styles.main__text}>Delivery Method</h5>
        </div>
        <div className={shipping.container__shippingMethods}>
          <form className={shipping.form__shipping}>
            {/* Domestic Regular */}
            <Shipping title="Domestic Regular" price="$50 USD" value="domestic-regular"/>
            {/* <label>
              <div className={shipping.container__text}>
                <input type="radio" />
                <h4>Domestic Regular</h4>
              </div>
              <h2>$50 USD</h2>
            </label> */}

            {/* Domestic Priority */}
            <Shipping title="Domestic Priority" price="$75 USD" value="domestic-priority"/>
            {/* <label>
              <div className={shipping.container__text}>
                <input type="radio" />
                <h4>Domestic Priority</h4>
              </div>
              <h2>$75 USD</h2>
            </label> */}

            {/* International Regular */}
            <Shipping title="International Regular" price="$100 USD" value="international-regular"/>

            {/* <label>
              <div className={shipping.container__text}>
                <input type="radio" />
                <h4>International Regular</h4>
              </div>
              <h2>$100 USD</h2>
            </label> */}
            {/* International Priority */}
            <Shipping title="International Priority" price="$150 USD" value="international-priority"/>
            {/* <label>
              <div className={shipping.container__text}>
                <input type="radio" />
                <h4>International Priority</h4>
              </div>
              <h2>$150 USD</h2>
            </label> */}
            <button type="submit" className={shipping.button__shipping}>Next</button>
          </form>
        </div>
      </section>
    </>
  );
}
