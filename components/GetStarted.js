// components/GetStarted.js

import React from "react";
import styles from "../styles/GetStarted.module.css";
import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import { useState } from "react";

const GetStarted = () => {
  const [myObj, setMyObj] = useState(null);
  function onLoad(spline) {
    const obj = spline.findObjectById("5bf7fb81-6117-422d-97d1-e247833be1ab");
    // or
    // const obj = spline.findObjectByName('my object');
    spline.setZoom(1.0);
    setMyObj(obj);
  }
  function moveObj() {
    console.log(myObj); // Spline Object => { name: 'my object', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }
    // move the object in 3D space
    myObj.position.x += 10;
  }
  return (
    <>
      <div className={styles.body}>
        <Spline className={styles.spline}
          scene="https://prod.spline.design/v7SnPwAqQXzmmhT4/scene.splinecode"
          onLoad={onLoad}
        />
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
