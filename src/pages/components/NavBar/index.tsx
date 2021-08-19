import styles from "./styles.module.scss";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className={styles.navBar}>
      <p className={styles.logo}>Hisashiburi</p>
      <ul>
        <li>
          <Link href="/">
            <a className={router.pathname == "/" ? styles.active : styles.anim}>
              <p>Home</p>
            </a>
          </Link>
        </li>
        <p className={styles.bar}>/</p>
        <li>
          <Link href="/api-info">
            <a className={router.pathname == "/api-info" ? styles.active : styles.anim}>
              <p>Api</p>
            </a>
          </Link>
        </li>
        <p className={styles.bar}>/</p>
        <li>
          <Link href="/bot">
            <a className={router.pathname == "/bot" ? styles.active : styles.anim}>
              <p>Bot</p>
            </a>
          </Link>
        </li>
        <p className={styles.bar}>/</p>
        <li>
          <Link href="/about">
            <a className={router.pathname == "/about" ? `${styles.active} ${styles.anim}` : styles.anim}>
              <p>About</p>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
