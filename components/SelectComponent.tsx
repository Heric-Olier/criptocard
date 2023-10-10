import React, { use, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import styles from "./select.module.scss";
import axios from "axios";
import CardProfileContext from "@/app/context/cardProfileContext";

export default function SelectComponent() {
  const [countries, setCountries] = useState([]);
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<any>()

  const context:any = useContext(CardProfileContext)

  console.log("My context", context?.id, typeof(context?.id))

  useEffect(() => {
    axios.get('http://cryptomex-prod.eastus.cloudapp.azure.com:8000/api/countries/')
      .then(response => setCountries(response.data))
      .catch(error => {
        console.error("This is an error", error.status);
      })
  }, [])

  
  const updateCountry = ( country: any ) => {
    setSelectedCountry(country)
    setOpenSelect(!openSelect)
    context?.setCountryOrigin( country.id )
  } 

  const renderCountries = () => {
    return countries.map((country: any) => (
      <div
        key={country?.id}
        className={styles.select__option}
        onClick={() => updateCountry(country)}
      >
        <Image src={country?.icon_name} alt={country?.name} width={20} height={15} />
        
        <p>{country?.name}</p>
      </div>
    ))
  }
  return (
    <article className={styles.select__container}>
      <button
        className={styles.select}
        onClick={() => setOpenSelect(!openSelect)}
      >
        <div className={styles.countryAnd__flag}>
          {
            selectedCountry ? (
              <div
                key={selectedCountry?.id}
                className={styles.select__option}
              >
                <Image src={selectedCountry?.icon_name} alt={selectedCountry?.name} width={20} height={15} />
                
                <p>{selectedCountry?.name}</p>
              </div>
            ) : 'Choose here'
          }
          {/* <h3>{userData.country_origin}</h3> */}
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
