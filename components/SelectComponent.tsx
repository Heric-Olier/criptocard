import React, { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/Context/GlobalContext";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import styles from "./select.module.scss";

const countries = [
  {
    key: "MX",
    label: "Mexico",
    img: "https://flagicons.lipis.dev/flags/4x3/mx.svg",
  },
  {
    key: "US",
    label: "United States",
    img: "https://flagicons.lipis.dev/flags/4x3/us.svg",
  },
  {
    key: "CA",
    label: "Canada",
    img: "https://flagicons.lipis.dev/flags/4x3/ca.svg",
  },
  {
    key: "CO",
    label: "Colombia",
    img: "https://flagicons.lipis.dev/flags/4x3/co.svg",
  },
  {
    key: "AR",
    label: "Argentina",
    img: "https://flagicons.lipis.dev/flags/4x3/ar.svg",
  },
  {
    key: "PE",
    label: "Peru",
    img: "https://flagicons.lipis.dev/flags/4x3/pe.svg",
  },
  {
    key: "VE",
    label: "Venezuela",
    img: "https://flagicons.lipis.dev/flags/4x3/ve.svg",
  },
  {
    key: "BR",
    label: "Brazil",
    img: "https://flagicons.lipis.dev/flags/4x3/br.svg",
  },
  {
    key: "CL",
    label: "Chile",
    img: "https://flagicons.lipis.dev/flags/4x3/cl.svg",
  },
  {
    key: "EC",
    label: "Ecuador",
    img: "https://flagicons.lipis.dev/flags/4x3/ec.svg",
  },
  {
    key: "GT",
    label: "Guatemala",
    img: "https://flagicons.lipis.dev/flags/4x3/gt.svg",
  },
  {
    key: "CU",
    label: "Cuba",
    img: "https://flagicons.lipis.dev/flags/4x3/cu.svg",
  },
  {
    key: "BO",
    label: "Bolivia",
    img: "https://flagicons.lipis.dev/flags/4x3/bo.svg",
  },
  {
    key: "DO",
    label: "Dominican Republic",
    img: "https://flagicons.lipis.dev/flags/4x3/do.svg",
  },
  {
    key: "HN",
    label: "Honduras",
    img: "https://flagicons.lipis.dev/flags/4x3/hn.svg",
  },
  {
    key: "PY",
    label: "Paraguay",
    img: "https://flagicons.lipis.dev/flags/4x3/py.svg",
  },
  {
    key: "SV",
    label: "El Salvador",
    img: "https://flagicons.lipis.dev/flags/4x3/sv.svg",
  },
  {
    key: "NI",
    label: "Nicaragua",
    img: "https://flagicons.lipis.dev/flags/4x3/ni.svg",
  },
  {
    key: "CR",
    label: "Costa Rica",
    img: "https://flagicons.lipis.dev/flags/4x3/cr.svg",
  },
  {
    key: "PR",
    label: "Puerto Rico",
    img: "https://flagicons.lipis.dev/flags/4x3/pr.svg",
  },
  {
    key: "PA",
    label: "Panama",
    img: "https://flagicons.lipis.dev/flags/4x3/pa.svg",
  },
  {
    key: "UY",
    label: "Uruguay",
    img: "https://flagicons.lipis.dev/flags/4x3/uy.svg",
  },
  {
    key: "JM",
    label: "Jamaica",
    img: "https://flagicons.lipis.dev/flags/4x3/jm.svg",
  },
  {
    key: "TT",
    label: "Trinidad and Tobago",
    img: "https://flagicons.lipis.dev/flags/4x3/tt.svg",
  },
  {
    key: "BS",
    label: "Bahamas",
    img: "https://flagicons.lipis.dev/flags/4x3/bs.svg",
  },
  {
    key: "BB",
    label: "Barbados",
    img: "https://flagicons.lipis.dev/flags/4x3/bb.svg",
  },
  {
    key: "HT",
    label: "Haiti",
    img: "https://flagicons.lipis.dev/flags/4x3/ht.svg",
  },
  {
    key: "GY",
    label: "Guyana",
    img: "https://flagicons.lipis.dev/flags/4x3/gy.svg",
  },
  {
    key: "BZ",
    label: "Belize",
    img: "https://flagicons.lipis.dev/flags/4x3/bz.svg",
  },
];

export default function SelectComponent() {
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    label: "Select Country",
    img: "",
  });

  const { userData, setUserData } = useGlobalContext();
  console.log(userData)

  return (
    <article className={styles.select__container}>
      <button
        className={styles.select}
        onClick={() => setOpenSelect(!openSelect)}
      >
        <div className={styles.countryAnd__flag}>
          {selectedCountry.img && (
            <img
              className={styles.country__flag}
              src={selectedCountry.img}
              alt={selectedCountry.label}
            />
          )}
          <h3>{userData.country_origin}</h3>
        </div>

        {openSelect ? (
          <ChevronUpIcon className={styles.select__icon} />
        ) : (
          <ChevronDownIcon className={styles.select__icon} />
        )}
      </button>
      {openSelect && (
        <div className={styles.select__optionsContainer}>
          {countries.map((country, index) => (
            <div
              key={index}
              className={styles.select__option}
              onClick={() => {
                setUserData((prev) => ({
                  ...prev,
                  country_origin: country.label,
                }));
                setOpenSelect(false);
              }}
            >
              <img
                className={styles.country__flag}
                src={country.img}
                alt={country.label}
              />
              <p>{country.label}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
