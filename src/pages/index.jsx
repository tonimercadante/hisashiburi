import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import Link from "next/link";
import axios, { CancelTokenSource } from "axios";
import { api } from "../services/api";
import { useState } from "react";

// 1. generate our dynamic route from the results we got.

// watch dev ed ignite game;
// birds fliyng, if found some data, they don't come back
// WE WILL MAKE A SEARCH PER EACH KEY TYPED AND THEN
// SHOW THE CHARACTERS DOWN DOING THE ANIMATION LIKE NETFLIX
// graphql
// todo:
// implement search
// dinamy routing and path
// get path // aparently we can use getStaticPaths to generate our
// pages without using getStaticProps or serverside which is good
// improve our json file
// episode list
// prettify
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
      <input type="search" name="" className={styles.search} onChange={handleSearch} />
      <div className={styles.characterResults}>
        {characters.length > 0 &&
          characters.map((character) => {
            return (
              <div className={styles.characterCard}key={character.id}>
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
              </div>
            );
          })}
      </div>
    </div>
  );
}
