// components/Features.js

import React from "react";
import Link from "next/link";
import styles from "../styles/Features.module.css"; // Import the styles for the component
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import { useState } from "react";
const Features = () => {
  return (
    <section className={styles.features_large}>
      <div className={styles.features_box1}>
        <div className={styles.img1_section}>
          <Image
            src="/r1.jpg"
            width={400}
            height={400}
            alt="Child Rights"
            className={styles.img1}
          />
        </div>
        <div className={styles.content1_section}>
          <div className={styles.cr_title1}>
            Realizing Child Rights in India
          </div>
          <div className={styles.cr_text1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et{" "}
          </div>
          <div className={styles.btncont1}>
            <button className={styles.btn1_i}>Get Started</button>
            <button className={styles.btn1_ii}>Learn More</button>
          </div>
        </div>
      </div>
      <div className={styles.features_box2}>
        <div className={styles.content2_section}>
          <div className={styles.cr_title2}>
            Child Rights and their protection
          </div>
          <div className={styles.cr_text2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et{" "}
          </div>
          <div className="btncont2">
          <button className={styles.btn2_i}>Get Started</button>
          <button className={styles.btn2_ii}>Learn More</button>
          </div>
        </div>
        <div className={styles.img2_section}>
          <Image
            src="/r2.jpg"
            alt="Child Rights"
            width={400}
            height={400}
            className={styles.img2}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
