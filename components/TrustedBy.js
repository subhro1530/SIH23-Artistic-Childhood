// components/TrustedBy.js

import React from "react";
import Link from "next/link";
import styles from "../styles/TrustedBy.module.css"; // Import the styles for the component
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import { useState } from "react";
const TrustedBy = () => {
  return (
    <div className={styles.trustedbyCont}>
      <div className={styles.trustedbyTitle}>Trusted by</div>
      <div className={styles.partnersLogoCont}>
        <div className={styles.logoCont}>
          <Image
            src="/CmpLogo.png"
            width={100}
            height={100}
            alt="Partner 1 "
            className={styles.logoimg}
          />
        </div>
        <div className={styles.logoCont}>
          <Image
            src="/CmpLogo.png"
            width={100}
            height={100}
            alt="Partner 2 "
            className={styles.logoimg}
          />
        </div>
        <div className={styles.logoCont}>
          <Image
            src="/CmpLogo.png"
            width={100}
            height={100}
            alt="Partner 3 "
            className={styles.logoimg}
          />
        </div>
        <div className={styles.logoCont}>
          <Image
            src="/CmpLogo.png"
            width={100}
            height={100}
            alt="Partner 4 "
            className={styles.logoimg}
          />
        </div>
        <div className={styles.logoCont}>
          <Image
            src="/CmpLogo.png"
            width={100}
            height={100}
            alt="Partner 5 "
            className={styles.logoimg}
          />
        </div>
      </div>
    </div>
  );
};
export default TrustedBy;
