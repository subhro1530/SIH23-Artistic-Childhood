// components/Footer.js

import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css"; // Import the styles for the component
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import { useState } from "react";
const Footer = () => {
    return(
        <div className={styles.footerCont}>
            <div className={styles.footerItemContainer}>
                <div className={styles.footerItemSection}>
                    <div className={styles.itemTitle}>Product</div>
                    <div className={styles.itemList}>
                        <div className={styles.List1}>Features</div>
                        <div className={styles.List2}>Learn</div>
                        <div className={styles.List3}>Plugins</div>
                    </div>
                </div>
                <div className={styles.footerItemSection}>
                    <div className={styles.itemTitle}>Templates</div>
                    <div className={styles.itemList}>
                        <div className={styles.List1}>Blog</div>
                        <div className={styles.List2}>Personal</div>
                        <div className={styles.List3}>Startup</div>
                    </div>
                </div>
                <div className={styles.footerItemSection}>
                    <div className={styles.itemTitle}>Resources</div>
                    <div className={styles.itemList}>
                        <div className={styles.List1}>Updates</div>
                        <div className={styles.List2}>Community</div>
                        <div className={styles.List3}>Contact</div>
                    </div>
                </div>
            </div>
            <div className={styles.whiteHorizontalLine}></div>
            <div className={styles.LastSection}>
                <div className={styles.copyrightSection}>&copy; 2023 Bal Adhikar Fun Quest, Inc.</div>
                <div className={styles.socialmediaSection}></div>
            </div>
        </div>
    );
};
export default Footer;
