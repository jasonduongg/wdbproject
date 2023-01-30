import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return (
        <div className = {styles.stick}>
        <ul className={styles.mainNav}>
            <div className={styles.navLeft}>
            <Link className={styles.navLeftElements} href = '/'>
                <div className={styles.logoContainer}>
                    <img className= {styles.logoPhoto} src='./images/Vectorlogo.png'></img>
                    <div className= {styles.logoTextContainer}>
                        <p className= {styles.logoText}>My Little Unicorn</p>
                    </div>
                </div>
            </Link>
            </div>
            <div className={styles.navRight}>
                <Link className={styles.navRightElements} href = '/about'>About Us</Link>
                <Link className={styles.navRightElements} href = '/gallery1'>Gallery</Link>
            </div>

        </ul>
        </div>
    )
}

export default Navbar