import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <input type="text" placeholder="Search..." />
        <FontAwesomeIcon
          icon={faSearch}
          className={styles.searchIcon}
          size="3x"
        />
      </div>
    </div>
  );
}
