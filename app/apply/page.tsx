"use client";

import styles from "./apply.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { CardProfileProvider } from "../context/cardProfileContext";
import useScreenRender from "@/app/hooks/useScreenRender";

export default function Apply() {
  const { stepRender, nextStep, prevStep } = useScreenRender();

  return (
    <CardProfileProvider>
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

          <button className={styles.main__buttonBack} onClick={prevStep}>
            <ChevronLeftIcon className={styles.main__icon} />
          </button>
          {stepRender}
          <button className={styles.main__buttonContinue} onClick={nextStep}>
            Continue
          </button>
        </div>
        <img
          className={styles.main__backgroundImage}
          src="/cards-group-form.png"
          alt="cards group"
        />
      </section>
    </CardProfileProvider>
  );
}
