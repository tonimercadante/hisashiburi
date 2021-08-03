import Search from "../Search";
import Character from "../Character";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

type Characters = {
    id: number;
    name: string;
    lastName: string;
    icon: string;
  };

export default function HomePage() {
    const quantity = "Browse over +100.000 characters";
    const [characters, setCharacters] = useState<Characters[]>([]);


  return (
    <>
      <main className={styles.home}>
        <div className={styles.banner}>
          <Image
            className={styles.bannerImage}
            src="/images/header-image.png"
            layout="fill"
            objectFit="cover"
            quality="100"
          />
          <h1>
            Discover when your
            <br /> favorite characters
            <br /> are on screen!
          </h1>
          <h3>{quantity}</h3>
          <Search setCharacters={setCharacters} />
        </div>

        <div className={styles.results}>
          {characters.map((char) => {
            return (
              <div key={char.id}>
                <Link
                  href={{
                    pathname: '/characters/[character]',
                    query: { character: char.id },
                  }}
                >
                  <a>
                    <Character name={char.name} icon={char.icon} />
                  </a>
                </Link>
              </div>
            );
          })}
          
        </div>
      </main>

      <footer className={styles.footer}></footer>
     
    </>
  );
}
