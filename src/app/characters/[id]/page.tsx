// import React, { useEffect } from "react";
// import { useRouter } from "next/router";

import Image from "next/image";
import styles from "./styles.module.scss";
import type { ReactElement } from "react";

import getTimeData from "../../lib/utils";
import { getCharacterData } from "../../lib/data";
import ModalWrapper from "../../../components/Modal/modal";
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

export default async function Characters({
  params,
}: {
  params: { id: string };
}) {
  const character = await getCharacterData(params.id);
  // const router = useRouter();

  // useEffect(() => {
  //   router.prefetch("/");
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // const closeModal = () => {
  //   setTimeout(() => {
  //     router.push("/");
  //   }, 100);
  // };
  return (
    <>
      <ModalWrapper character={character} />
    </>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// };
