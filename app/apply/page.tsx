"use client";

import { useState, useEffect } from "react";
import { createContext } from "react";

import styles from "./apply.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CountryOrigin from "@/components/CountryOrigin";
import CountryResidence from "@/components/CountryResidence";
import ChoosePlan from "@/components/ChoosePlan";
import YourDetails from "@/components/YourDetails";
import YourIdentity from "@/components/YourIdentity";
import ChooseCard from "@/components/ChooseCard";
import ShippingOptions from "@/components/ShippingOptions";
import Summary from "@/components/OrderSummary";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const MAX_STEPS = 8;

export default function Apply() {
  const Context = createContext(null);

  const [formStep, useFormStep] = useState(1);
  const router = useRouter();

  const steps = [
    <CountryOrigin />,
    <CountryResidence />,
    <ChoosePlan />,
    <YourDetails />,
    <YourIdentity />,
    <ChooseCard />,
    <ShippingOptions />,
    <Summary />,
  ];

  const stepRender = steps[formStep - 1];

  const nextStep = () => {
    if (formStep < MAX_STEPS) useFormStep(formStep + 1);
    else router.push("/thank-you");
  };

  const prevStep = () => {
    if (formStep > 1) useFormStep(formStep - 1);
    else router.push("/");
  };

  useEffect(() => {
    if (formStep === 8) console.log("finished");
  }, [formStep]);

  const [userData, setUserData] = useState({
    country_origin: "USA",
    country_residence: "USA",
  });

  return (
    <Context.Provider value={{ userData, setUserData }}>
      <section className={styles.main__background}>
        <div className={styles.main__formContainer}>
          <Link href={"/"}>
            <Image
              className={styles.logo}
              src="/cryptospace-logo-web.png"
              alt="cryptospace logo"
              width={203}
              height={45}
            />
          </Link>

          <button className={styles.main__buttonBack} onClick={prevStep}>
            <ChevronLeftIcon className={styles.main__icon} />
          </button>
          {stepRender}
          <button className={styles.main__buttonContinue} onClick={nextStep}>
            Continue
          </button>
        </div>
        <img
          className={styles.main__backgroundImage}
          src="/cards-group-form.png"
          alt="cards group"
        />
      </section>
    </Context.Provider>
  );
}
