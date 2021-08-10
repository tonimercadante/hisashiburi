import Modal from "react-modal";
import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import { ParsedUrlQuery } from "querystring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import getTimeData from "../../Utils/getTimeData";
import Image from "next/image";
import styles from "./styles.module.scss";
import { parseBody } from "next/dist/next-server/server/api-utils";

/* Possible approaches to the bar thing:
1. create a lot of bar and give them the absolute position and
then position then the way i need so i need to have a way to get
the starting position.
2. create a lot of bars close to each other like fragmenting the
time it appears like not appears at 0:00 to 4:00 then the bar
will have one color representing some percentage then from 4:00
to 8:40 the character appears, so we create a new bar and to 8:40
to the final he doesnt appears anymore, so we create a new bar to
/the end of the time
*/
Modal.setAppElement("#__next");

type Character = {
  id: number;
  name: string;
  lastName: string;
  icon: string;
  cover: string;
  episodes: Episodes[];
};
type Episodes = {
  id: number;
  title: string;
  season: number;
  number: number;
  arch: string;
  duration: string;
  apparitionTime: ApparitionTime[];
  parsedTime: ParsedTime[];
  parsedEp: parsedEp[];
};
type parsedEp = {
  percent: number;
  inorout: boolean;
  time: string;
};

type ParsedTime = {
  start: number;
  end: number;
};

type ApparitionTime = {
  start: string;
  end: string;
};

type CharacterProps = {
  characterData: Character;
};

export default function Characters({ characterData }: CharacterProps) {
  const router = useRouter();
  // console.log("router: ", router.query);
  // console.log("Props: ", characterData);
  useEffect(() => {
    router.prefetch("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const closeModal = () => {
    setTimeout(() => {
      router.push("/");
    }, 100);
  };
  return (
    <>
      <Modal
        bodyOpenClassName={styles.modalOpened}
        className={styles.modal}
        overlayClassName={styles.modalDetail}
        isOpen={true} // The modal should always be shown on page load, it is the 'page'
        onRequestClose={closeModal}
        contentLabel="Post modal"
        preventScroll={true}
      >
        {/* <div className={styles.modalDetail}> */}
        <div className={styles.characterBanner}>
          <Image
            src={characterData.cover}
            layout="fill"
            objectFit="cover"
            quality="100"
          />
          <div className={styles.closeIcon} onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} className={styles.icon} size="2x" />
          </div>
        </div>

        <div className={styles.characterInfo}>
          <h2>{`${characterData.name} ${characterData.lastName}`}</h2>
          <p>Naruto Shippuden</p>
        </div>
        <hr />
        <div className={styles.episodes}>
          <h4>Episodes: </h4>
          {characterData.episodes.map((episode) => (
            <div key={episode.id} className={styles.episode}>
              <div className={styles.episodeDetails}>
                <div className={styles.episodeInfo}>
                  <p>{episode.number}.</p>
                  <p>{episode.title}</p>
                </div>
                <div className={styles.episodeMore}>
                  <p>+</p>
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
                    >
                     
                    </div>
                  ))}
                </div>
            </div>
          ))}
        </div>
        {/* </div> */}
      </Modal>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { character } = ctx.params as IParams;
  const { data } = await api.get(`characters/${character}`);

  data.episodes.forEach(function (newdata: {
    parsedEp: { percent: number; inorout: boolean }[];
    apparitionTime: string;
    duration: string;
  }) {
    newdata.parsedEp = getTimeData(newdata.apparitionTime, newdata.duration);
    // console.log(newdata);
  });

  const characterData = {
    id: data.id,
    name: data.name,
    lastName: data.lastName,
    icon: data.icon,
    cover: data.cover,
    episodes: data.episodes,
  };

  return {
    props: {
      characterData,
    },
  };
};

// let a = [
//   { start: "3:00", end: "9:00" },
//   { start: "10:00", end: "12:00" },
// ];
// console.log("times from the working one", a)
// let total_duration = "20:00";
// let dataddd = getTimeData(a, total_duration);

{
  /* <div className={styles.episode}>
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
      {Object.entries(dataddd).map(([key, value], i) => (
        <div
          data-per={value.percent}
          style={{
            width: `${value.percent}%`,
            backgroundColor: value.inorout ? "#00c3ff" : "white",
          }}
          className={`${styles.bars} && ${
            value.inorout ? styles.barsIn : '' 
          }`}
          key={i}
        ></div>
      ))}
    </div>
  </div>
</div> */
}

// with own modal
// import Modal from "react-modal";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import styles from "./styles.module.scss";
// import Image from "next/image";
// import getTimeData from "../../Utils/getTimeData";
// import { GetStaticPaths, GetStaticProps } from "next";
// import { api } from "../../services/api";
// import { ParsedUrlQuery } from "querystring";
// // Possible approaches to the bar thing:
// // 1. create a lot of bar and give them the absolute position and
// // then position then the way i need so i need to have a way to get
// // the starting position.
// // 2. create a lot of bars close to each other like fragmenting the
// // time it appears like not appears at 0:00 to 4:00 then the bar
// // will have one color representing some percentage then from 4:00
// // to 8:40 the character appears, so we create a new bar and to 8:40
// // to the final he doesnt appears anymore, so we create a new bar to
// // the end of the time
// Modal.setAppElement("#__next");

// type Character = {
//   id: number;
//   name: string;
//   lastName: string;
//   icon: string;
//   cover: string;
//   episodes: Episodes[];
// };
// type Episodes = {
//   id: number;
//   title: string;
//   season: number;
//   episode: number;
//   arch: string;
//   duration: string;
//   apparitionTime: ApparitionTime[];
//   parsedTime: ParsedTime[];
//   parsedEp: parsedEp[];
// };
// type parsedEp = {
//   percent: number;
//   inorout: boolean;
// }

// type ParsedTime = {
//   start: number;
//   end: number;

// }

// type ApparitionTime = {
//   start: string;
//   end: string;
// }

// type CharacterProps = {
//   characterData: Character;
// };

// export default function Characters({ characterData }: CharacterProps) {
//   const router = useRouter();
//   // console.log("router: ", router.query);
//   // console.log("Props: ", characterData);
//   useEffect(() => {
//     router.prefetch("/");
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   const onRequestClos = () => {
//     setTimeout(() => {
//       router.push("/")
//     }, 1000);
//   }
//   return (
//     <>
//       <div className={styles.modal}
//         // style={{
//         //   overlay: {
//         //     zIndex: 3,
//         //     width: '100%',
//         //   },
//         //   content: {
//         //     width: '70%',
//         //     margin: 'auto',
//         //     left: 0,
//         //     right: 0,
//         //     padding: 0,
//         //     bottom: 0,
//         //     backgroundColor: '#060e18',
//         //     border: 0,
//         //     borderRadius: '2rem 2rem 0 0 ',

//         //   }
//         // }}
//         // isOpen={true} // The modal should always be shown on page load, it is the 'page'
//         // onRequestClose={onRequestClos}
//         // contentLabel="Post modal"
//         // className={styles.modal}
//         // overlayClassName={styles.modalOver}
//       >
//           <div className={styles.modalDetail}>
//           <div className={styles.characterBanner}>
//             <Image src={characterData.cover}
//               layout="fill"
//               objectFit="cover"
//               quality="100" />

//           </div>

//           <div className={styles.characterInfo}>
//               <h2>{`${characterData.name} ${characterData.lastName}`}</h2>
//               <p>Naruto Shippuden</p>
//             </div>
//             <hr />
//           <div className={styles.episodes}>
//             <h4>Episodes: </h4>
//             {characterData.episodes.map((episode) => (
//               <div key={episode.id} className={styles.episode}>
//                 <div className={styles.episodeDetails}>
//                   <div className={styles.episodeInfo}>
//                     <p>{episode.episode}</p>
//                     <p>{episode.title}</p>
//                   </div>
//                   <div className={styles.episodeMore}>
//                     <p>+</p>
//                   </div>
//                 </div>
//                 <div className={styles.episodeTimeBar}>
//                   <div className={styles.bar}>
//                     {Object.entries(episode.parsedEp).map(([key, value], i) => (
//                       <div
//                         data-per={value.percent}
//                         style={{
//                           width: `${value.percent}%`,
//                           backgroundColor: value.inorout ? "#00c3ff" : "white",
//                         }}
//                         className={`${styles.bars} && ${value.inorout ? styles.barsIn : ""
//                           }`}
//                         key={i}
//                       >                    {console.log(episode.parsedEp)}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}

//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// };

// interface IParams extends ParsedUrlQuery {
//   slug: string;
// }

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const { character } = ctx.params as IParams;
//   const { data } = await api.get(`characters/${character}`);

//   // console.log("KRL )_(_)QW*(@!*()#*()@!*()@#!*)(@#*(", character);
//   // console.log("THIS IS MYDATA : +++++ ", data);

//   console.log("test consolando: 1 ", data.episodes)
//   data.episodes.forEach(function (newdata: { parsedEp: { percent: number; inorout: boolean; }[]; apparitionTime: string; duration: string; }) {
//     newdata.parsedEp = getTimeData(newdata.apparitionTime, newdata.duration);
//   })
//   const characterData = {
//     id: data.id,
//     name: data.name,
//     lastName: data.lastName,
//     icon: data.icon,
//     cover: data.cover,
//     episodes: data.episodes,

//   };

//   return {
//     props: {
//       characterData,
//     },
//   };
// };

// // let a = [
// //   { start: "3:00", end: "9:00" },
// //   { start: "10:00", end: "12:00" },
// // ];
// // console.log("times from the working one", a)
// // let total_duration = "20:00";
// // let dataddd = getTimeData(a, total_duration);

// {/* <div className={styles.episode}>
//   <div className={styles.episodeDetails}>
//     <div className={styles.episodeInfo}>
//       <p>47.</p>
//       <p>Itachi-The rogue ninja</p>
//     </div>
//     <div className={styles.episodeMore}>
//       <p>+</p>
//     </div>
//   </div>
//   <div className={styles.episodeTimeBar}>
//     <div className={styles.bar}>
//       {Object.entries(dataddd).map(([key, value], i) => (
//         <div
//           data-per={value.percent}
//           style={{
//             width: `${value.percent}%`,
//             backgroundColor: value.inorout ? "#00c3ff" : "white",
//           }}
//           className={`${styles.bars} && ${
//             value.inorout ? styles.barsIn : ''
//           }`}
//           key={i}
//         ></div>
//       ))}
//     </div>
//   </div>
// </div> */}
