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
      <ul
        className={
          click ? `${styles.navItens} ${styles.activated}` : styles.navItens
        }
      >
        <li>
          <Link href="/" className={styles.anim} onClick={Close}>

            <p
              className={
                router.pathname == "/"
                  ? `${styles.anim} ${styles.active}`
                  : styles.anim
              }
            >
              Home
            </p>

          </Link>
        </li>
        <p className={styles.bar}>/</p>
        <li>
          <Link href="/api-info" className={styles.anim} onClick={Close}>

            <p
              className={
                router.pathname == "/api-info"
                  ? `${styles.anim} ${styles.active}`
                  : styles.anim
              }
            >Api</p>

          </Link>
        </li>
        <p className={styles.bar}>/</p>
        <li>
          <Link href="/bot" className={styles.anim} onClick={Close}>

            <p
              className={
                router.pathname == "/bot"
                  ? `${styles.anim} ${styles.active}`
                  : styles.anim
              }
            >Bot</p>

          </Link>
        </li>
        <p className={styles.bar}>/</p>
        <li>
          <Link href="/about" className={styles.anim} onClick={Close}>

            <p
              className={
                router.pathname == "/about"
                  ? `${styles.anim} ${styles.active}`
                  : styles.anim
              }
            >About</p>

          </Link>
        </li>
      </ul>
      <div onClick={handleClick} className={styles.mobileMenu}>
        <div
          className={click ? `${styles.bar1} ${styles.change}` : styles.bar1}
        ></div>
        <div
          className={click ? `${styles.bar2} ${styles.change}` : styles.bar2}
        ></div>
        <div
          className={click ? `${styles.bar3} ${styles.change}` : styles.bar3}
        ></div>
      </div>
      {/* {click ? (

) : (
  
)} */}
    </nav>
  );
}
