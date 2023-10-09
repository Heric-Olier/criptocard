import { ReactNode, createContext, useState } from 'react';
import { CardProfileType } from '../types/CardProfileTypes.d';



const CardProfileContext = createContext<CardProfileType | null>(null)

const CardProfileProvider = ( { children }: any ) => {
  // Context states
  const [countryOrigin, setCountryOrigin] = useState('')
  const [residency, setResidency] = useState('')
  const [name, setName] = useState('')
  const [documentImage, setDocumentImage] = useState('')
  const [cardType, setCardType] = useState('')
  const [deliveryType, setDeliveryType] = useState('')
  const [plan, setPlan] = useState('')
  const [seller, setSeller] = useState('')
  const [totalPrice, setTotalPrice] = useState(0)

  const states = {
    countryOrigin,
    residency,
    name,
    documentImage,
    cardType,
    deliveryType,
    plan,
    seller,
    totalPrice,
  }

  const setStates = {
    setCountryOrigin,
    setResidency,
    setName,
    setDocumentImage,
    setCardType,
    setDeliveryType,
    setPlan,
    setSeller,
    setTotalPrice,
  }

  const profile = {
    ...states,
    ...setStates
  }

  return (
    <CardProfileContext.Provider value={profile}>
      { children }
    </CardProfileContext.Provider>
  )
}

export {
  CardProfileContext as default,
  CardProfileProvider
}