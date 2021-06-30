import Image from "next/image";
import styles from "./styles.module.scss";

export default function Characters() {
  return (
    <div className={styles.characterInfo}>
      <div>
        <h1>Itachi</h1>
        <div>
          <p>appearances</p>
          <p>26</p>
        </div>
        <div>
          <p>Anime</p>
          <p>Naruto, Naruto Shippuden</p>
        </div>
      </div>
      
      <div className={styles.episodesList}>
        <h3>Anime Name</h3>
        <div className={styles.episode}>
          <div className={styles.episodeNumber}>
            <p>46</p>
          </div>
          <div className={styles.episodeTitle}>
            <p>Sandaime yo, Towa ni……!!</p>
          </div>
          <div className={styles.episodeDetails}>
            <p>+</p>
          </div>
        </div>

     
      

     
      </div>
    </div>
  );
}
