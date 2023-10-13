import choosecard from "./choosecard.module.scss";
import CardProfileContext from "@/app/context/cardProfileContext";
import { useContext } from "react";

type CardType = {
  img: string;
  title: string;
  price: string;
  value: string;
  id?: number;
};

export default function Card({ img, title, price, value }: CardType) {
  const { cardType, setCardType }: any = useContext(CardProfileContext);

  console.log("cardType", cardType);

  return (


        <label>
          <input
            type="radio"
            required
            value={value}
            onChange={(e) => setCardType(e.target.value)}
            name="myCard"
            checked={cardType === value}
          />
          <div>
            <img src={img} alt={title} />
            <h4>{title}</h4>
            {title === "Gold" && (
              <h5>*24k gold plated solid silver with gems</h5>
            )}
            <h2>$ {price}</h2>
          </div>
        </label>

  
  );
}
