import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import Link from "next/link";
import axios, { CancelTokenSource } from "axios";
import { api } from "../services/api";
import { useState } from "react";

// 1. Improve our ui
// 1.1 Search bar
// 1.2 Font size
// 1.3 Font shadows
// 1.4 Bg image correct position
// 1.5 shadow transition betwen bg image and bg color
// 1.6 character card 
// 1.7 modal improvements
// 2. Implement our modal with next
// add a load more button to prevent unecessary api calls for windows resize
// 3. Find an best id or search for anime then character name or
// id and name but should we do this because would be easy to anyone predic
// and do alot of reqs to our server
// authenticate our api? use redirect?
// change the anime that a character appears and put it in the episodes and array then
// separe our search component and show a serch result page
// birds fliyng, if found some data, they don't come back
// 4. fuzzy search
// graphql
// todo:
// THEN I KNOW WHAT hehe almost forgot but i wont cv
// axios cancel request
// on change not working on mobile
// useRef for the search
// when use context
// use next api to build our api

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [isActive, setIsActive] = useState(false);

  let cancelToken;
  const handleSearch = async (e) => {
    if (query == 0) {
      setCharacters([]);
    }
    const query = e.target.value;
    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("Operation canceled due to new request.");
    }
    cancelToken = axios.CancelToken.source();

    try {
      const res = await api.get(`characters?q=${query}`, {
        cancelToken: cancelToken.token,
      });
      console.log(res.data);
      setCharacters(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.Home}>
      <div>
        <h1>hisashiburi</h1>
      </div>
      <input
        type="search"
        name=""
        className={styles.search}
        onChange={handleSearch}
      />
      <div className={styles.characterResults}>
        {characters.length > 0 &&
          characters.map((character) => {
            return (
              <div className={styles.characterCard} key={character.id}>
                <Link href={{
                  pathname: '/characters/[character]',
                  query: { character: character.id },
                }}>
                  <a>
                  <Image
                    className={styles.characterImage}
                    width={100}
                    height={100}
                    src={character.icon}
                    alt=""
                  />
                  <p>
                    {character.name} {character.lastName}
                  </p>
                </a>
                </Link>
              </div>
            );
          })} : {
            <h1>no data</h1>
          }
      </div>
    </div>
  );
}
