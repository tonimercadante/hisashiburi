import { GetStaticPaths, GetStaticProps } from "next";
import { apiResolver } from "next/dist/next-server/server/api-utils";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import styles from "./styles.module.scss";
//slider caurosel in the cover to switch photos of the character
// type Character = {
//   id: String;
//   name: String;
// };

// type CharacterProps = {
//   characterData: Character;
// };

export default function Characters({ data }) {
  let animeName = data.map((d) => d.anime[0]);
  const router = useRouter();
  //   const { characters } = router.query
  //     {console.log(router.query)}
  return (
    // <div>
    //   {data.map((d) => (
    //     <div key={d.id}>
    //       <p>{d.name}</p>
    //       <p>{d.lastName}</p>
    //       <img src={d.cover} alt={d.cover} />
    //       {d.episodes.map((episode) => (
    //         <div key={episode.id}>
    //           <p>{episode.title}</p>
    //           <p>{episode.episode}</p>

    //         </div>
    //       ))}
    //     </div>
    //   ))}
    //   <p>Characters: {router.query.character}</p>
    // </div>
    <>
      {data.map((d) => (
        <div key={d.id} className={styles.characterInfo}>
          <img src={d.cover} alt={d.cover} />

          <h1>{d.name}</h1>
          <div>
            <p>appearances</p>
            <p>{d.totalAppearances}</p>
          </div>
          <div>
            <p>Anime</p>
            <p>
              {d.anime.forEach((a) => (
                <p>{a}</p>
              ))}
            </p>
          </div>

          {d.episodes.map((episode) => (
            <div className={styles.episodesList}>
              <div className={styles.episode}>
                <div className={styles.episodeNumber}>
                  <p>{episode.episode}</p>
                </div>
                <div className={styles.episodeTitle}>
                  <p>{episode.title}</p>
                </div>
                <div className={styles.episodeDetails}>
                  <p>+</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}


    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(ctx) {
  const { character } = ctx.params;
  console.log("KRLLLLLL" + ctx.id);
  const { data } = await api.get(`characters/${character}`);

  return {
    props: { data },
  };
}
