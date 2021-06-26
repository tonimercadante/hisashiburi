import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import Link from "next/link";
// birds fliyng, if found some data, they don't come back
// What would be the best search for us??
// WE WILL MAKE A SEARCH PER EACH KEY TYPED AND THEN
// SHOW THE CHARACTERS DOWN DOING THE ANIMATION LIKE NETFLIX
// graphql
// todo:
// finish reading next docs: done, only auth part left
// implement search
// get path
// improve our json file
// episode list
// prettify
// THEN I KNOW WHAT hehe almost forgot but i wont cv
// axios cancel request

type Character = {
  id: number;
  name: string;
  icon: string;
};

type HomeProps = {
  characters: Character[];
};

export default function Home(props: HomeProps) {
  console.log(props.characters);

  return (
    <div className={styles.Home}>
      <div>
        <h1>hisashiburi</h1>
      </div>
      <form>
        <input type="search" name="" />
      </form>
      <div className={styles.characterResults}>
        {props.characters.map((character) => (
          <div className={styles.characterIconWrapper} key={character.id}>
            <div className={styles.characterImage}>
              <Link href="/characters/itachi">
                <a>
                  <Image width="200" height="200" src={character.icon} alt="" />
                </a>
              </Link>
            </div>
            <div>
              <p>{character.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:3001/character?lastName=Uchiha");
  const data = await res.json();

  return {
    props: {
      characters: data,
    },
    revalidate: 10,
  };
}
