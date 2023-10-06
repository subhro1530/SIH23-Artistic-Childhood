// components/Pricing.js

import React from "react";
import Link from "next/link";
import styles from "../styles/Pricing.module.css"; // Import the styles for the component
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import { useState } from "react";
const Pricing = () => {
  return (
    <div className={styles.pricing_Cont}>
      <div className={styles.personal_Cont}>
        <div className={styles.personal_Title}>Personal</div>
        <div className={styles.personal_pricing_tag}>
          <div className={styles.pricing}>$5</div>
          <div className={styles.tag}>p/month</div>
        </div>
        <div className={styles.points_Container}>
          <div className={styles.firstPoint}>
            <div className={styles.svgContainer}>
              <Image
                src="/circle-check-solid.svg"
                width={30}
                height={30}
                alt="Circle-check-solid"
                className={styles.svg}
              />
            </div>
            <div className={styles.pointText}>2 games</div>
          </div>
          <div className={styles.secondPoint}>
            <div className={styles.svgContainer}>
              <Image
                src="/circle-check-solid.svg"
                width={30}
                height={30}
                alt="Circle-check-solid"
                className={styles.svg}
              />
            </div>
            <div className={styles.pointText}>Analytics</div>
          </div>
          <div className={styles.thirdPoint}>
            <div className={styles.svgContainer}>
              <Image
                src="/circle-check-solid.svg"
                width={30}
                height={30}
                alt="Circle-check-solid"
                className={styles.svg}
              />
            </div>
            <div className={styles.pointText}>Insights Panel</div>
          </div>
          <div className={styles.fourthPoint}>
            <div className={styles.svgContainer}>
              <Image
                src="/circle-check-solid.svg"
                width={30}
                height={30}
                alt="Circle-check-solid"
                className={styles.svg}
              />
            </div>
            <div className={styles.pointText}>Share Features</div>
          </div>
        </div>
        <div className={styles.btncont}>
          <button className={styles.btnWhite}>Get Started</button>
        </div>
      </div>
      <div className={styles.professional_Cont}>
        <div className={styles.professional_Title}>Professional</div>
        <div className={styles.professional_pricing_tag}>
          <div className={styles.pricing}>$10</div>
          <div className={styles.tag}>p/month</div>
        </div>
        <div className={styles.points_Container}>
          <div className={styles.firstPoint}>
            <div className={styles.svgContainer}>
              <Image
                src="/circle-check-solid.svg"
                width={30}
                height={30}
                alt="Circle-check-solid"
                className={styles.svg}
              />
            </div>
            <div className={styles.pointText}>5 games</div>
          </div>
          <div className={styles.secondPoint}>
            <div className={styles.svgContainer}>
              <Image
                src="/circle-check-solid.svg"
                width={30}
                height={30}
                alt="Circle-check-solid"
                className={styles.svg}
              />
            </div>
            <div className={styles.pointText}>Analytics</div>
          </div>
          <div className={styles.thirdPoint}>
            <div className={styles.svgContainer}>
              <Image
                src="/circle-check-solid.svg"
                width={30}
                height={30}
                alt="Circle-check-solid"
                className={styles.svg}
              />
            </div>
            <div className={styles.pointText}>Insights Panel</div>
          </div>
          <div className={styles.fourthPoint}>
            <div className={styles.svgContainer}>
              <Image
                src="/circle-check-solid.svg"
                width={30}
                height={30}
                alt="Circle-check-solid"
                className={styles.svg}
              />
            </div>
            <div className={styles.pointText}>Share Features</div>
          </div>
        </div>
        <div className={styles.btncont}>
          <button className={styles.btnBlack}>Get Started</button>
        </div>
      </div>
      <div className={styles.business_Cont}>
        <div className={styles.business_Title}>Business</div>
        <div className={styles.business_pricing_tag}>
          <div className={styles.pricing}>$50</div>
          <div className={styles.tag}>p/month</div>
        </div>
        <div className={styles.points_Container}>
          <div className={styles.firstPoint}>
            <div className={styles.svgContainer}>
              <Image
                src="/circle-check-solid.svg"
                width={30}
                height={30}
                alt="Circle-check-solid"
                className={styles.svg}
              />
            </div>
            <div className={styles.pointText}>12 games</div>
          </div>
          <div className={styles.secondPoint}>
            <div className={styles.svgContainer}>
              <Image
                src="/circle-check-solid.svg"
                width={30}
                height={30}
                alt="Circle-check-solid"
                className={styles.svg}
              />
            </div>
            <div className={styles.pointText}>Analytics</div>
          </div>
          <div className={styles.thirdPoint}>
            <div className={styles.svgContainer}>
              <Image
                src="/circle-check-solid.svg"
                width={30}
                height={30}
                alt="Circle-check-solid"
                className={styles.svg}
              />
            </div>
            <div className={styles.pointText}>Insights Panel</div>
          </div>
          <div className={styles.fourthPoint}>
            <div className={styles.svgContainer}>
              <Image
                src="/circle-check-solid.svg"
                width={30}
                height={30}
                alt="Circle-check-solid"
                className={styles.svg}
              />
            </div>
            <div className={styles.pointText}>Share Features</div>
          </div>
        </div>
        <div className={styles.btncont}>
          <button className={styles.btnWhite}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
