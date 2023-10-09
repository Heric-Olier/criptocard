export type CardProfileType = {
  countryOrigin: string,
  residency: string,
  name: string,
  documentImage: string,
  cardType: string,
  deliveryType: string,
  plan: string,
  seller: string,
  totalPrice: number
  setCountryOrigin: (value: string) => void,
  setResidency: (value: string) => void,
  setName: (value: string) => void,
  setDocumentImage: (value: string) => void,
  setCardType: (value: string) => void,
  setDeliveryType: (value: string) => void,
  setPlan: (value: string) => void,
  setSeller: (value: string) => void,
  setTotalPrice: (value: number) => void,
}