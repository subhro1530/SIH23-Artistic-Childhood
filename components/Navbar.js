// components/Navbar.js

import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css"; // Import the styles for the component
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import { useState } from "react";
const Navbar = () => {
  const [myObj, setMyObj] = useState(null);
  function onLoad(spline) {
    const obj = spline.findObjectById("5bf7fb81-6117-422d-97d1-e247833be1ab");
    // or
    // const obj = spline.findObjectByName('my object');
    spline.setZoom(0.12);
    setMyObj(obj);
  }
  function moveObj() {
    console.log(myObj); // Spline Object => { name: 'my object', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }
    // move the object in 3D space
    myObj.position.x += 10;
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Spline
          scene="https://prod.spline.design/clTNjovJSq68QqCB/scene.splinecode"
          onLoad={onLoad}
        />
        <div className={styles.head}>
          <div className={styles.top}>
            Bal Adhikar
          </div>
          <div className={styles.bottom}>
            FunQuest
          </div>
        </div>
      </div>
      <div className={styles.links}>
        <Link href="/gameplay">Gameplay</Link>
        <Link href="/modules">Modules</Link>
        <Link href="/community">Community</Link>
        <Link href="/contact">Contact Page</Link>
      </div>
      <div className={styles.auth}>
        <Link href="/login">Login/Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
