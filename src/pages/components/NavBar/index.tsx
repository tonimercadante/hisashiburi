import styles from "./styles.module.scss";
import Link from "next/link";

export default function NavBar() {
    return(
        <nav className={styles.navBar}>
            <p>Hisashiburi</p>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li>/</li>
                <li><Link href="/api-info"><a>Api</a></Link></li>
                <li>/</li>
                <li><Link href="/bot"><a>Bot</a></Link></li>
                <li>/</li>
                <li><Link href="/about"><a>About</a></Link></li>
            </ul>
        </nav>
    );
};