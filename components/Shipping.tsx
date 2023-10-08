import shipping from "./shipping.module.scss";

type ShippingType = {
  title: string;
  price: string;
  value: string;
};

export default function Shipping({ title, price, value }: ShippingType) {
  return (
    <label>
      <div className={shipping.container__text}>
        <input type="radio" name="myshipping" required value={value} />
        <h4>{title}</h4>
      </div>
      <h2>{price}</h2>
    </label>
  );
}
