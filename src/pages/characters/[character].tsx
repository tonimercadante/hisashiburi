import Modal from "react-modal";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import Image from "next/image";

Modal.setAppElement("#__next");

export default function Characters() {
  const router = useRouter();
  console.log(router.query);

  useEffect(() => {
    router.prefetch("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Modal
        isOpen={true} // The modal should always be shown on page load, it is the 'page'
        onRequestClose={() => router.push("/")}
        contentLabel="Post modal"
        className={styles.modal}
        overlayClassName={styles.modalOver}
      >
        <div className={styles.characterModal}>
          <div className={styles.characterBanner}>
            <Image src="/images/itachi_cover.jpg" width="1000" height="200" />
            <h2>Itachi Uchiha</h2>
          </div>
          <div className={styles.animemanga}>
            <p>Anime | Manga</p>
          </div>
          <div>
            <p>Naruto</p>
          </div>
          <div className={styles.episode}>
            <div className={styles.episodeDetails}>
              <div className={styles.episodeInfo}>
                <div className={styles.episodeNumberTitle}>
                  <p>47.</p>
                  <p>Itachi-The rogue ninja</p>
                </div>
                <div className={styles.episodeTimeBar}>
                  <p>bar</p>
                </div>
              </div>
            </div>
            <div className={styles.episodeMore}>
              <p>+</p>
            </div>
          </div>
        </div>

        {/* <Article id={articleId} pathname={router.pathname} /> */}
      </Modal>
    </>
  );
}
