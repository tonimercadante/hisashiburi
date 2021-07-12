import styles from "./styles.module.scss";
import Image from "next/image";
import { ReactNode } from "react";

type CharacterProps = {
  name: string;
  imageUrl: string;
  children?: ReactNode;
};

export default function Character({
  name,
  imageUrl,
  children,
}: CharacterProps) {
  return (
    <div className={styles.characterCard}>
      <p className={styles.characterText}>{name}</p>
      <Image src={imageUrl} width="200" height="200" layout="responsive" />
    </div>
  );
}
