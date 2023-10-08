import styles from "./main.module.scss";
import planstyles from "./chooseplan.module.scss";
import PlanCards from "./PlanCards";

export default function ChoosePlan() {
  return (
    <>
      <section>
        <div className={styles.container__text}>
          <h3 className={styles.main__title}>Choose your plan</h3>
          <h5 className={styles.main__text}>Unlock endless possibilities</h5>
        </div>
        <div className={planstyles.plan__cardsContainer}>
          
          {/*Card One*/}
          <PlanCards
            price="$5,000 USD"
            loadMax="LOAD MAX PER MONTH"
            description={[
              "$300 Anual Membership",
              "$5.000 Account Limit",
              "4.2% Exchange Fee*",
              "1% loading fee ( $10 minimum charge )",
              "$8 + 4.5% ATM Withdrawal",
              "$2.50 ATM Balance Inquiry",
              "$7 P2P Transfers",
              "$1.20 POS & Online Purchase",
              "4.5% FX Currency Exchange",
            ]}
            benefitOne="*7% loading fee if you don’t hold
              an HLGB or TFCS NFT"
            benefitTwo="TAKE OUT THE ENTIRE LINE 4%
              BUY SELL CRYPTO IT IS GONE NOW"
          />

          {/*Card Two*/}
          <PlanCards
            price="$25,000 USD"
            loadMax="LOAD MAX PER MONTH"
            description={[
              "$500 Anual Membership",
              "$25.000 Account Limit",
              "3.6% Exchange Fee",
              "1% loading fee ( $10 minimum charge )",
              "$7 + 4.5% ATM Withdrawal",
              "$2.50 ATM Balance Inquiry",
              "$6.50 P2P Transfers",
              "$1.00 POS & Online Purchase",
              "4.5% FX Currency Exchange",
            ]}
            benefitOne="*6% loading fee if you don’t hold
              an HLGB or TFCS NFT"
            benefitTwo="TAKE OUT THE ENTIRE LINE 3.75%
              BUY SELL CRYPTO IT IS GONE NOW"
          />

          {/*Card Three*/}
          <PlanCards
            price="$100,000 USD"
            loadMax="LOAD MAX PER MONTH"
            description={[
              "$700 Anual Membership",
              "$100.000 Account Limit",
              "3.6% Exchange Fee",
              "1% loading fee ( $10 minimum charge )",
              "$6 + 4.5% ATM Withdrawal",
              "$2.50 ATM Balance Inquiry",
              "$6.00 P2P Transfers",
              "$0.65 POS & Online Purchase",
              "4.5% FX Currency Exchange",
            ]}
            benefitOne="*5% loading fee if you don’t hold
              an HLGB or TFCS NFT"
            benefitTwo="TAKE OUT THE ENTIRE LINE 3%
              BUY SELL CRYPTO IT IS GONE NOW"
          />
        </div>
      </section>
    </>
  );
}
