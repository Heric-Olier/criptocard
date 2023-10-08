import variables from "../scss/variables.module.scss";
import styles from "./home.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      {/* Hero */}

      <section className={styles.hero}>
        <div className={styles.hero__infoContainer}>
          <Link href={"/"}>
            <Image
              className={styles.logo}
              src="/logo-prestabit-global.png"
              alt="cryptospace logo"
              width={210}
              height={40}
            />
          </Link>
          <h2 className={styles.hero__title}>
            Real People.
            <br />
            Real Money
          </h2>
          <Link className={styles.hero__button} href="/apply">
            Get Started
          </Link>
        </div>
        <img
          className={styles.hero__image}
          src="/cards-home-real.png"
          alt="home image"
        />
      </section>

      {/* Features */}

      <section className={styles.features}>
        <div className={styles.features__containerText}>
          <h5 className={styles.features__title}>Features</h5>
          <h2 className={styles.features__text}>
            Transfer your USDT & USDC to your card and spend globally
          </h2>
          <div>
            <Image
              className={styles.features__icon}
              src="/tether-logo.png"
              alt="tether logo"
              width={64}
              height={64}
            />
            <Image
              className={styles.features__icon}
              src="/usdc-logo.png"
              alt="tether logo"
              width={64}
              height={64}
            />
            <Link className={styles.features__button} href="/">
              Get Started
            </Link>
          </div>
        </div>
        <div className={styles.features__cardContainer}>
          <div className={styles.features__card}>
            <img
              className={styles.card__icons}
              src="/icon-features-card-1.png"
              alt="icon features card"
            />
            <h5 className={styles.features__title}>Works Globally</h5>
          </div>
          <div className={styles.features__card}>
            <img
              className={styles.card__icons}
              src="/icon-features-card-2.png"
              alt="icon features card"
            />
            <h5 className={styles.features__title}>Get the VIP treatment</h5>
          </div>
          <div className={styles.features__card}>
            <h5 className={styles.features__title}>Lower fees</h5>
            <img
              className={styles.card__icons}
              src="/icon-features-card-3.png"
              alt="icon features card"
            />
            <h5 className={styles.features__title}>
              Discounts for TFCS &<br /> HLGB holders
            </h5>
          </div>
          <div className={styles.features__card}>
            <h5 className={styles.features__title}>Real people</h5>
            <img
              className={styles.card__icons}
              src="/icon-features-card-4.png"
              alt="icon features card"
            />
            <h5 className={styles.features__title}>Talk to real humans</h5>
          </div>

          <div className={styles.features__card}>
            <img
              className={styles.card__icons}
              src="/icon-features-card-5.png"
              alt="icon features card"
            />
          </div>
          <div className={styles.features__card}>
            <img
              className={styles.card__icons}
              src="/icon-features-card-6.png"
              alt="icon features card"
            />
            <h5 className={styles.features__title}>Peer to Peer Transfer</h5>
          </div>
        </div>
      </section>

      {/* NFT */}

      <section className={styles.nft}>
        <h2 className={styles.features__text}>
          Save up to 40% on card loading fees when you hold HappyLand Gummy
          Bears NFT
        </h2>
        <div className={styles.nft__infoContainer}>
          <div className={styles.nft__textContainer}>
            <div className={styles.nft__textContent}>
              <img src="/check-icon.png" alt="check icon" />
              <h3
                className={styles.nft__text}
              >{`Hold a (HLGB) NFT get 20% off loading fee`}</h3>
            </div>
            <div className={styles.nft__textContent}>
              <img src="/check-icon.png" alt="check icon" />
              <h3
                className={styles.nft__text}
              >{`Hold a (TFCS) NFT get 20% off loading fee`}</h3>
            </div>
            <div className={styles.nft__textContent}>
              <img src="/check-icon.png" alt="check icon" />
              <h3
                className={styles.nft__text}
              >{`Combine to get up to 40% off`}</h3>
            </div>
          </div>
          <div className={styles.nft__buttonContainer}>
            <Link className={styles.nft__buttonOne} href="/">
              Get HappyLand
              <br /> gummy bears
            </Link>
            <Link className={styles.nft__buttonTwo} href="/">
              Get Tales from <br />
              CryptoSpace Gummies
            </Link>
          </div>
          <img
            className={styles.nft__image}
            src="/nft-image.png"
            alt="nft image"
          />
        </div>
      </section>

      {/* TERMS */}

      <section className={styles.terms__container}>
        <h4 className={styles.terms__text}>
          Copyright 2022 Cryptospace, all rights reserved.
        </h4>
        <Link href={"/terms"} className={styles.terms__conditions}>
          Terms & Conditions 
        </Link>
      </section>
    </>
  );
}
