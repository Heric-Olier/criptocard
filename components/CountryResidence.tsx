import SelectComponent from "./SelectComponent";
import styles from "./main.module.scss";
import countrystyles from "./country.module.scss";
import { useEffect, useContext } from "react";
import CardProfileContext from "@/app/context/cardProfileContext";



export default function CountryResidence() {

  const { setScreen } = useContext(CardProfileContext);

  useEffect(() => {
    setScreen("countryResidence");
  }, []);
    


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
        <SelectComponent/>
      </section>
    </>
  );
}
