"use client";

import CardProfileContext from "../context/cardProfileContext";

import styles from "./apply.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import ScreenRender from "./ScreenRender";
import { useContext } from 'react';

export const ApplyUI = () => {
  const { page, setPage }: any = useContext(CardProfileContext)
  const setPrevStep = () => {
    setPage(page - 1)
  }
  const setNextStep = () => {
    setPage(page + 1)
  }
  return (
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

        <button className={styles.main__buttonBack} onClick={setPrevStep}>
          <ChevronLeftIcon className={styles.main__icon} />
        </button>
        <ScreenRender />
        <button className={styles.main__buttonContinue} onClick={setNextStep}>
          Continue
        </button>
      </div>
      <img
        className={styles.main__backgroundImage}
        src="/cards-group-form.png"
        alt="cards group"
      />
    </section>
  )
}
