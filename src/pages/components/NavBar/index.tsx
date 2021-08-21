import styles from "./styles.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NavBar() {
  const router = useRouter();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <nav className={styles.navBar}>
      <p className={styles.logo}>Hisashiburi</p>
      <ul className={click ? `${styles.navItens} ${styles.activated}` : styles.navItens}>
        <li>
          <Link href="/">
            <a
              className={router.pathname == "/" ? styles.active : styles.anim}
              onClick={Close}
            >
              <p>Home</p>
            </a>
          </Link>
        </li>
        <p className={styles.bar}>/</p>
        <li>
          <Link href="/api-info">
            <a
              className={
                router.pathname == "/api-info" ? styles.active : styles.anim
              }
              onClick={Close}
            >
              <p>Api</p>
            </a>
          </Link>
        </li>
        <p className={styles.bar}>/</p>
        <li>
          <Link href="/bot">
            <a
              className={
                router.pathname == "/bot" ? styles.active : styles.anim
              }
              onClick={Close}
            >
              <p>Bot</p>
            </a>
          </Link>
        </li>
        <p className={styles.bar}>/</p>
        <li>
          <Link href="/about">
            <a
              className={
                router.pathname == "/about"
                  ? `${styles.active} ${styles.anim}`
                  : styles.anim
              }
              onClick={Close}
            >
              <p>About</p>
            </a>
          </Link>
        </li>
      </ul>
      <div onClick={handleClick} className={styles.mobileMenu}>
        <div className={click ? `${styles.bar1} ${styles.change}` : styles.bar1}></div>
        <div className={click ? `${styles.bar2} ${styles.change}` : styles.bar2}></div>
        <div className={click ? `${styles.bar3} ${styles.change}` : styles.bar3}></div>
      </div>
      {/* {click ? (

) : (
  
)} */}
    </nav>
  );
}
