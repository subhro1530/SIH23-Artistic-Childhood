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
            src="/r1.png"
            width={600}
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
            Securing child rights in India demands concerted efforts, addressing
            challenges like child labor, education gaps, and healthcare
            disparities. Legal frameworks such as the Right to Education Act
            play a pivotal role. Collaborative initiatives by government and
            NGOs aim to eliminate exploitation, fostering an inclusive
            environment for every child`&apos;`s growth and well-being.
          </div>
          <div className={styles.btncont1}>
            <button className={styles.btn1_i}>Get Started</button>
          </div>
        </div>
      </div>
      <div className={styles.features_box2}>
        <div className={styles.content2_section}>
          <div className={styles.cr_title2}>
            Child Rights and their protection
          </div>
          <div className={styles.cr_text2}>
            Child rights advocate for a child`&apos;`s holistic development,
            encompassing education, protection from exploitation, and healthcare
            access. Ensuring their protection involves robust legal frameworks
            and collective societal commitment. Upholding child rights is
            fundamental, fostering a nurturing environment that empowers
            children to thrive, free from harm and discrimination.
          </div>
          <div className="btncont2">
            <button className={styles.btn2_i}>Get Started</button>
          </div>
        </div>
        <div className={styles.img2_section}>
          <Image
            src="/r2.png"
            alt="Child Rights"
            width={600}
            height={400}
            className={styles.img2}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
