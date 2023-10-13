import shipping from "./shipping.module.scss";
import CardProfileContext from "@/app/context/cardProfileContext";
import { useContext } from "react";

type ShippingType = {
  title: string;
  price: string;
  value: string;
  id?: number;
};

export default function Shipping({ title, price, value }: ShippingType) {

  const { deliveryType, setDeliveryType }: any = useContext(CardProfileContext);

  console.log("deliveryType", deliveryType)

  return (
    <label>
      <div className={shipping.container__text}>
        <input
          type="radio"
          name="myshipping"
          required
          value={value}
          onChange={(e) => setDeliveryType(e.target.value)}
          checked={deliveryType === value}
        />
        <h4>{title}</h4>
      </div>
      <h2>$ {price}</h2>
    </label>
  );
}
