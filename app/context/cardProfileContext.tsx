import { createContext, useState } from "react";
import { CardProfileType } from "../types/CardProfileTypes.d";

const CardProfileContext = createContext<CardProfileType | null>(null);

const CardProfileProvider = ({ children }: any) => {
  // Context states
  const [countryOrigin, setCountryOrigin] = useState("");
  const [countryResidency, setCountryResidency] = useState("");
  const [screen, setScreen] = useState("");
  const [page, setPage] = useState(0);
  const [userData, SetuserData] = useState<any>({
    name: "",
    email: "",
    telegram: "",
    whatsapp: "",
    date_of_birth: null,
    residency: null
  });
  const [documentImage, setDocumentImage] = useState("");
  const [cardType, setCardType] = useState("");
  const [deliveryType, setDeliveryType] = useState("");
  const [plan, setPlan] = useState("");
  const [seller, setSeller] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const states = {
    countryOrigin,
    countryResidency,
    userData,
    documentImage,
    cardType,
    deliveryType,
    plan,
    seller,
    totalPrice,
    screen,
    page,
  };

  const setStates = {
    setCountryOrigin,
    setCountryResidency,
    setUserData: SetuserData,
    setDocumentImage,
    setCardType,
    setDeliveryType,
    setPlan,
    setSeller,
    setTotalPrice,
    setScreen,
    setPage,
  };

  const profile = {
    ...states,
    ...setStates,
  };

  return (
    <CardProfileContext.Provider value={profile}>
      {children}
    </CardProfileContext.Provider>
  );
};

export { CardProfileContext as default, CardProfileProvider };
