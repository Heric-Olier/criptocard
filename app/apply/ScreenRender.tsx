import CardProfileContext from "@/app/context/cardProfileContext";
import React, { useContext } from "react";
import CountryOrigin from "@/components/CountryOrigin";
import CountryResidence from "@/components/CountryResidence";
import ChoosePlan from "@/components/ChoosePlan";
import YourDetails from "@/components/YourDetails";
import YourIdentity from "@/components/YourIdentity";
import ChooseCard from "@/components/ChooseCard";
import ShippingOptions from "@/components/ShippingOptions";
import Summary from "@/components/OrderSummary";
import { useRouter } from "next/navigation";


export default function ScreenRender() {
  const { page }: any = useContext(CardProfileContext)
  const router = useRouter()
  const steps = [
    <CountryOrigin key={1}/>,
    <CountryResidence key={2}/>,
    <ChoosePlan key={3}/>,
    <YourDetails key={4}/>,
    <YourIdentity key={5}/>,
    <ChooseCard key={6}/>,
    <ShippingOptions key={7}/>,
    <Summary key={8}/>,
  ];
  
  if (page < 0) {
    console.log('return to start')
    router.push('/')
    return null
  }

  if (page >= steps.length) {
    console.log('thanks')
    router.push('/thank-you')
    return null
  }

  return steps[page]
}
