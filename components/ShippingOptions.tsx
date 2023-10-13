import Shipping from "./Shipping";
import styles from "./main.module.scss";
import shipping from "./shipping.module.scss";
import { useContext, useEffect, useState } from "react";
import CardProfileContext from "@/app/context/cardProfileContext";
import axios from "axios";

export default function ShippingOptions() {
  const [delivery, setDelivery] = useState<any>([]);

  useEffect(() => {
    axios
      .get(
        "http://cryptomex-prod.eastus.cloudapp.azure.com:8000/api/delivery-types/",
      )
      .then((response) => setDelivery(response.data))
      .catch((error) => {
        console.error("This is an error", error.status);
      });
  }, []);

  const renderShipping = () => {
    return delivery.map((delivery: any) => (
      <Shipping
        id={delivery?.id}
        key={delivery?.id}
        title={delivery?.name}
        price={delivery?.price}
        value={delivery?.id}
      />
    ));
  };

  const {
    userData,
    page,
    setPage,
    countryOrigin,
    countryResidency,
    documentImage,
    deliveryType,
    cardType,
    plan,
    seller,
  }: any = useContext(CardProfileContext);

  const handleSubmit = (e: any) => {
    const formData = new FormData();

    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("telegram", userData.telegram);
    formData.append("whatsapp", userData.whatsapp);
    formData.append("date_of_birth", userData.date_of_birth);
    formData.append("residency", countryResidency.id);
    formData.append("country_origin", countryOrigin.id);
    formData.append("plan", plan);
    formData.append("card_type", cardType);
    formData.append("delivery_type", deliveryType);
    formData.append("seller", "2991a96e-9382-4e3b-862d-452296216a8a");
    formData.append("totalPrice", 0);
    formData.append("document_selfie", documentImage.document_selfie);
    formData.append("document_back", documentImage.document_back);
    formData.append("document_front", documentImage.document_front);

    e.preventDefault();
    // setPage(page + 1);
    console.log("Handle submit event", userData);
    axios
      .post(
        `http://cryptomex-prod.eastus.cloudapp.azure.com:8000/api/preregistration/`,
        formData,
      )
      .then((res) => res.data)
      .catch((error) => {
        if (error) {
          console.log(error);
        } else {
          console.log(error);
        }
      });
  };
  console.log(documentImage, "documentImagessssss");

  return (
    <>
      <section className={shipping.container__shipping}>
        <div className={styles.container__text}>
          <h3 className={styles.main__title}>Shipping</h3>
          <h5 className={styles.main__text}>Delivery Method</h5>
        </div>
        <div className={shipping.container__shippingMethods}>
          <form className={shipping.form__shipping}>
            {renderShipping()}
            <button
              type="submit"
              className={shipping.button__shipping}
              onClick={handleSubmit}
            >
              Next
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
