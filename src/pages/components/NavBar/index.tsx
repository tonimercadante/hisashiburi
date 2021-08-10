import styles from "./styles.module.scss";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <p className={styles.logo}>Hisashiburi</p>
      <ul>
        <li>
          <Link href="/">
            <a className={styles.anim}>
              {" "}
              <p>Home</p>
            </a>
          </Link>
        </li>
        <p className={styles.bar}>/</p>
        <li>
          <Link href="/api-info">
            <a className={styles.anim}>
              <p>Api</p>
            </a>
          </Link>
        </li>
        <p className={styles.bar}>/</p>
        <li>
          <Link href="/bot">
            <a className={styles.anim}>
              <p>Bot</p>
            </a>
          </Link>
        </li>
        <p className={styles.bar}>/</p>
        <li>
          <Link href="/about">
            <a className={styles.anim}>
              <p>About</p>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
