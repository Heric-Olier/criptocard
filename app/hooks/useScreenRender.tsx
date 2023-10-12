import CardProfileContext from "@/app/context/cardProfileContext";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CountryOrigin from "@/components/CountryOrigin";
import CountryResidence from "@/components/CountryResidence";
import ChoosePlan from "@/components/ChoosePlan";
import YourDetails from "@/components/YourDetails";
import YourIdentity from "@/components/YourIdentity";
import ChooseCard from "@/components/ChooseCard";
import ShippingOptions from "@/components/ShippingOptions";
import Summary from "@/components/OrderSummary";

const MAX_STEPS = 8;

export default function useScreenRender() {
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

  return {
    stepRender,
    nextStep,
    prevStep,
  };
}
