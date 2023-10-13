import styles from "./main.module.scss";
import choosecard from "./choosecard.module.scss";
import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

export default function ChooseCard() {
  const [cardType, setCardType] = useState<any>([]);

  useEffect(() => {
    axios
      .get(
        "http://cryptomex-prod.eastus.cloudapp.azure.com:8000/api/card-types/",
      )
      .then((response) => setCardType(response.data))
      .catch((error) => {
        console.error("This is an error", error.status);
      });
  }, []);

  const renderCards = () => {
    return cardType.map((card: any) => (
      <Card
        id={card?.id}
        key={card?.id}
        img={card?.card_image}
        title={card?.name}
        price={card?.price}
        value={card?.id}
      />
    ));
  };

  return (
    <>
      <section>
        <div className={styles.container__text}>
          <h3 className={styles.main__title}>Choose your card</h3>
        </div>
        <div className={choosecard.container__cards}>
          <form>
            {renderCards()}
            <button type="submit" className={choosecard.button__chooseCard}>
              Next
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
