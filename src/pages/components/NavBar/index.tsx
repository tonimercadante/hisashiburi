import styles from "./styles.module.scss";


export default function NavBar() {
    return(
        <nav className={styles.navBar}>
            <p>Hisashiburi</p>
            <ul>
                <li>Api</li>
                <li>Bot</li>
                <li>About</li>
            </ul>
        </nav>
    );
};