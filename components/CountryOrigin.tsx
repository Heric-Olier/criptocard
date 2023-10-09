import SelectComponent from "./SelectComponent";
import styles from "./main.module.scss";
import countrystyles from "./country.module.scss";
import { useContext } from "react";
import CardProfileContext from "@/app/context/cardProfileContext";

export default function CountryOrigin() {
  const context = useContext(CardProfileContext)

  console.log("My context", context?.countryOrigin)
  return (
    <>
      <section className={countrystyles.countryOrigin__container}>
        <div className={styles.container__text}>
          <h3 className={styles.main__title}>
            Welcome, thanks
            <br /> for choosing us.
          </h3>
          <h4
            className={styles.main__subtitle}
          >{`Let’s get started with you application`}</h4>
          <h5 className={styles.main__text}>Select your origin country</h5>
        </div>
          <SelectComponent />
      </section>
    </>
  );
}
