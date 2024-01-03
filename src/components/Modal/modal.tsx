"use client";
import { ReactNode, useEffect } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

Modal.setAppElement("body");

export default function ModalWrapper({
  children,
  character,
}: {
  children?: ReactNode;
  character: any;
}) {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Modal
      bodyOpenClassName={styles.modalOpened}
      className={styles.modal}
      overlayClassName={styles.modalDetail}
      isOpen={true} // The modal should always be shown on page load, it is the 'page'
      // onRequestClose={closeModal}
      contentLabel="Post modal"
      preventScroll={true}
    >
      <>
        <div className={styles.characterBanner}>
          <Image
            alt={character.name}
            src={character.cover}
            quality="100"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className={styles.closeIcon} onClick={() => router.push("/")}>
            <FontAwesomeIcon icon={faTimes} className={styles.icon} size="2x" />
          </div>
        </div>

        <div className={styles.characterInfo}>
          <h2>{`${character.name} ${character.lastName}`}</h2>
          <p>Naruto Shippuden</p>
        </div>
        <hr />
        <div className={styles.episodes}>
          <h4>Episodes: </h4>
          {character.episodes.map((episode) => (
            <div key={episode.id} className={styles.episode}>
              <div className={styles.episodeDetails}>
                <div className={styles.episodeInfo}>
                  <p>{episode.number}.</p>
                  <p>{episode.title}</p>
                </div>
                <div className={styles.episodeDuration}>
                  <p>{episode.duration}</p>
                </div>
              </div>
              <div className={styles.bar}>
                {Object.entries(episode.parsedEp).map(([key, value], i) => (
                  <div
                    data-per={value.time}
                    style={{
                      width: `${value.percent}%`,
                      backgroundColor: value.inorout ? "#00c3ff" : "white",
                    }}
                    className={`${styles.bars} && ${
                      value.inorout ? styles.barsIn : ""
                    }`}
                    key={i}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    </Modal>
  );
}
