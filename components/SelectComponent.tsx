import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import styles from "./select.module.scss";
import axios from "axios";
import CardProfileContext from "@/app/context/cardProfileContext";

export default function SelectComponent() {
  const [countries, setCountries] = useState([]);
  const [openSelect, setOpenSelect] = useState(false);

  const {
    countryOrigin,
    setCountryOrigin,
    countryResidency,
    setCountryResidency,
    screen,
  } = useContext(CardProfileContext);

  useEffect(() => {
    axios
      .get(
        "http://cryptomex-prod.eastus.cloudapp.azure.com:8000/api/countries/",
      )
      .then((response) => setCountries(response.data))
      .catch((error) => {
        console.error("This is an error", error.status);
      });
  }, []);

  const updateCountry = (country: any) => {
    setOpenSelect(!openSelect);
    screen === "countryResidence"
      ? setCountryResidency(country)
      : setCountryOrigin(country);
  };

  const renderCountries = () => {
    return countries.map((country: any) => (
      <div
        key={country?.id}
        className={styles.select__option}
        onClick={() => updateCountry(country)}
      >
        <Image
          src={country?.icon_name}
          alt={country?.name}
          width={20}
          height={15}
        />

        <p>{country?.name}</p>
      </div>
    ));
  };

  const renderSelect = (countryType: any) => {
    console.log("adentro", countryType);
    return countryType ? (
      <div key={countryType?.id} className={styles.select__option}>
        <Image
          src={countryType?.icon_name}
          alt={countryType?.name}
          width={20}
          height={15}
        />
        <p>{countryType?.name}</p>
      </div>
    ) : (
      "Select Country"
    );
  };

  return (
    <article className={styles.select__container}>
      <button
        className={styles.select}
        onClick={() => setOpenSelect(!openSelect)}
      >
        <div className={styles.countryAnd__flag}>
          {screen === "countryResidence"
            ? renderSelect(countryResidency)
            : renderSelect(countryOrigin)}
        </div>

        {openSelect ? (
          <ChevronUpIcon className={styles.select__icon} />
        ) : (
          <ChevronDownIcon className={styles.select__icon} />
        )}
      </button>
      {openSelect && (
        <div className={styles.select__optionsContainer}>
          {renderCountries()}
        </div>
      )}
    </article>
  );
}
