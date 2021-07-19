import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/home.module.scss";
import axios, { CancelTokenSource } from "axios";
import { api } from "../services/api";
//Components
import Search from "./components/Search";
import Character from "./components/Character";

export default function Home() {
  let name = "Itachi Uchiha";
  let gaara = "Sabaku no Gaara";
  let minato = "Minato Namikaze";
  let imageUrl = "/images/itachi.jpg";
  let gaaraUrl = "/images/gaara.jpg";
  let minatoUrl = "/images/minato.jpg";
  const description =
    "Discover when your<br> favorite charachters<br> are on screen!";
  const quantity = "Browse over +100.000 characters";


  const [characters, setCharacters] = useState([]);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Hisashiburi - found the episodes your favorites characters appears
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          <Search setCharacters={setCharacters}/>
        </div>

        <div className={styles.results}>
          <Link href="/characters/[character]" as={`/characters/1`}>
            <a><Character name={name} imageUrl={imageUrl} /></a>
          </Link>
          <Character name={gaara} imageUrl={gaaraUrl} />
          <Character name={minato} imageUrl={minatoUrl} />
          <Character name={name} imageUrl={imageUrl} />
          <Character name={gaara} imageUrl={gaaraUrl} />
          <Character name={minato} imageUrl={minatoUrl} />
          <Character name={name} imageUrl={imageUrl} />
          <Character name={gaara} imageUrl={gaaraUrl} />
          <Character name={minato} imageUrl={minatoUrl} />
          <Character name={name} imageUrl={imageUrl} />
          <Character name={gaara} imageUrl={gaaraUrl} />
          <Character name={minato} imageUrl={minatoUrl} />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
