import Modal from "react-modal";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import Image from "next/image";
import getTimeData from "../../Utils/getTimeData";
// Possible approaches to the bar thing:
// 1. create a lot of bar and give them the absolute position and
// then position then the way i need so i need to have a way to get
// the starting position.
// 2. create a lot of bars close to each other like fragmenting the
// time it appears like not appears at 0:00 to 4:00 then the bar
// will have one color representing some percentage then from 4:00
// to 8:40 the character appears, so we create a new bar and to 8:40
// to the final he doesnt appears anymore, so we create a new bar to
// the end of the time
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

          <div className={styles.episodes}>
            <h2>Naruto</h2>
            <div className={styles.titles}>
              <p className={styles.episodesText}>Episodes (7)</p>
              <p className={styles.episodesText}>Season 1</p>
            </div>
            <div className={styles.episode}>
              <div className={styles.episodeDetails}>
                <div className={styles.episodeInfo}>
                  <p>47.</p>
                  <p>Itachi-The rogue ninja</p>
                </div>
                <div className={styles.episodeMore}>
                  <p>+</p>
                </div>
              </div>
              <div className={styles.episodeTimeBar}>
                <div className={styles.bar}>
                  {Object.entries(data).map(([key, value], i) => (
                    <div
                      data-per={value.percent} 
                      style={{
                        width: `${value.percent}%`,
                        backgroundColor: value.inorout ? "#00c3ff" : "white",
                      }}
                      className={`${styles.bars} && ${value.inorout ? styles.barsIn : ''}`}
                      key={i}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Article id={articleId} pathname={router.pathname} /> */}
      </Modal>
    </>
  );
}
let times = [
  { start: 180, end: 540 },
  { start: 600, end: 720 },
];
let total_duration = 1200;
let data = getTimeData(times, total_duration);
