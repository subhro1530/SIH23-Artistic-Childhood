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
    <div className={styles.container}>
      {/* Block 1 */}
      <div className={styles.block}>
        <h4 className={styles.head}>Personal</h4>
        <h1 className={styles.heading}>
          Rs. 299 <p className={styles.para}>p/month</p>
        </h1>
        <div className={styles.points}>
          <div className={styles.line}>
            <Image
                src="/circle-check-solid.svg"
                width={20}
                height={20}
                alt="Circle-check-solid"
                className={styles.svg}
              />


            <p>Unlimited Games</p>
          </div>
          <div className={styles.line}>
            <Image
                src="/circle-check-solid.svg"
                width={20}
                height={20}
                alt="Circle-check-solid"
                className={styles.svg}
              />


            <p>All resource available</p>
          </div>
          <div className={styles.line}>
            <Image
                src="/circle-check-solid.svg"
                width={20}
                height={20}
                alt="Circle-check-solid"
                className={styles.svg}
              />


            <p>Access to Chatbot</p>
          </div>
          <button className={styles.button}>Begin</button>
        </div>
      </div>
      {/* Block 2 */}
      <div className={styles.block}>
        <h4 className={styles.head}>Professional</h4>
        <h1 className={styles.heading}>
          Rs. 499 <p className={styles.para}>p/month</p>
        </h1>
        <div className={styles.points}>
          <div className={styles.line}>
            <Image
              src="/circle-check-solid.svg"
              width={20}
              height={20}
              alt="Circle-check-solid"
              className={styles.svg}
            />

            <p>Unlimited Games</p>
          </div>
          <div className={styles.line}>
            <Image
                src="/circle-check-solid.svg"
                width={20}
                height={20}
                alt="Circle-check-solid"
                className={styles.svg}
              />


            <p>All resource available</p>
          </div>
          <div className={styles.line}>
            <Image
                src="/circle-check-solid.svg"
                width={20}
                height={20}
                alt="Circle-check-solid"
                className={styles.svg}
              />


            <p>Access to Chatbot</p>
          </div>
          <div className={styles.line}>
            <Image
                src="/circle-check-solid.svg"
                width={20}
                height={20}
                alt="Circle-check-solid"
                className={styles.svg}
              />


            <p>Live Chat with our agents</p>
          </div>
          <div className={styles.line}>
            <Image
                src="/circle-check-solid.svg"
                width={20}
                height={20}
                alt="Circle-check-solid"
                className={styles.svg}
              />


            <p>1 to 1 learning support</p>
          </div>
          <button className={styles.button}>Begin</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
