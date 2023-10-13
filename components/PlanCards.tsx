import styles from "./main.module.scss";
import planstyles from "./chooseplan.module.scss";
import CircleIcon from "./CircleIcon";
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import CardProfileContext from "@/app/context/cardProfileContext";
import { useContext } from "react";



type PlanCardsType = {
  price: string;
  id: number;
  loadMax: string;
  description: string[];
  benefitOne: string;
  benefitTwo: string;
};

export default function PlanCards({
  price,
  loadMax,
  description,
  benefitOne,
  benefitTwo,
  id,
}: PlanCardsType) {

  const { plan, setPlan }: any = useContext(CardProfileContext);
  const selected = plan === id ? planstyles.plan__cardsSelected : planstyles.plan__cards;

  console.log("id", id)
  return (
    <article className={selected}
      onClick={() => setPlan(id)}
    >
      <h2 className={planstyles.plan__cardsPrice}>$ {price}</h2>
      <h3 className={planstyles.plan__cardsText}>{loadMax}</h3>
      {Array.isArray(description) ? (
        <ul className={planstyles.plan__cardsDescription}>
          {description?.map((item, index) => {
            return (
              <li key={index}>
                <CheckCircleIcon className={planstyles.plan__cardsIcon} />
                {item}
                <br />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={planstyles.plan__cardsDescription}>{description}</p>
      )}
      <div className={planstyles.plan__cardsBenefits}>
        <h4 className={planstyles.plan__cardsBenefitOne}>{benefitOne}</h4>
        <h4 className={planstyles.plan__cardsBenefitTwo}>{benefitTwo}</h4>
      </div>
    </article>
  );
}
