// components/GetStarted.js

import React from "react";
import styles from "../styles/GetStarted.module.css";

const GetStarted = () => {
  return (
    <>
      <div className={styles.body}>
        <h1 className={styles.heading}>
          Bal Adhikar FunQuest - Where Rights Shine Through Play!
        </h1>
        <p className={styles.para}>
          Explore amazing features and content. Get started now!
        </p>
        <div className={styles.buttons}>
          <button className={styles.getstarted}>Embark on the Quest</button>
          <button className={styles.learn}>Explore More</button>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
