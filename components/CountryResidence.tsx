import SelectComponent from "./SelectComponent";
import styles from "./main.module.scss";
import countrystyles from "./country.module.scss";


export default function CountryResidence() {
  return (
    <>
      <section className={countrystyles.countryOrigin__container}>
        <div className={styles.container__text}>
          <h3 className={styles.main__title}>
            Select your country <br />
            of residence
          </h3>
          
          <h5 className={styles.main__text}>In which country are you located?</h5>
        </div>
        <SelectComponent />
      </section>
    </>
  );
}
