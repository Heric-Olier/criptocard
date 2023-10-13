import { useEffect, useState, useContext } from "react";
import axios from "axios";
import styles from "./main.module.scss";
import planstyles from "./chooseplan.module.scss";
import PlanCards from "./PlanCards";

export default function ChoosePlan() {
  const [plans, setPlans] = useState<any>([]);
  

  useEffect(() => {
    axios
      .get("http://cryptomex-prod.eastus.cloudapp.azure.com:8000/api/plans/")
      .then((response) => setPlans(response.data))
      .catch((error) => {
        console.error("This is an error", error.status);
      });
  }, []);

  const renderPlans = () => {
    return plans.map((plan: any) => (
      <PlanCards
        id={plan?.id}
        key={plan?.id}
        price={plan?.price}
        loadMax={"LOAD MAX PER MONTH"}
        description={plan?.benefits_list}
        benefitOne={plan?.benefit_one}
        benefitTwo={plan?.benefit_two}
      />
    ));
  };

  return (
    <>
      <section>
        <div className={styles.container__text}>
          <h3 className={styles.main__title}>Choose your plan</h3>
          <h5 className={styles.main__text}>Unlock endless possibilities</h5>
        </div>
        <div className={planstyles.plan__cardsContainer}>{renderPlans()}</div>
      </section>
    </>
  );
}
