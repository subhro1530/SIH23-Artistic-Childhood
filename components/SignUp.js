// components/SignUp.js

import React from "react";
import Link from "next/link";
import styles from "../styles/SignUp.module.css"; // Import the styles for the component
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import { useState } from "react";
const SignUp = () => {
  return (
    <div className={styles.signUpCont}>
      <div className={styles.signUpText}>Sign up today.</div>
      <div className={styles.signUpBtnCont}>
        <button className={styles.signUpbtnWhite}>Learn More</button>
        <button className={styles.signUpbtnBlack}>Get Started</button>
      </div>
    </div>
  );
};
export default SignUp;
