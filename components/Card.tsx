import choosecard from "./choosecard.module.scss";

type CardType = {
  img: string;
  title: string;
  subtitle?: string;
  price: string;
  value: string;
};

export default function Card({ img, title, subtitle, price, value }: CardType) { 
  return (
    <label>
      <input type="radio" name="mycard" required value={value} />
      <div>
        <img src={img} alt={title} />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <h2>{price}</h2>
      </div>
    </label>
  );
}
