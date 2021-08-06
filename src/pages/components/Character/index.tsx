import styles from "./styles.module.scss";
import Image from "next/image";
import { ReactNode } from "react";

type CharacterProps = {
  name: string;
  icon: string;
  children?: ReactNode;
};

export default function Character({
  name,
  icon,
  children,
}: CharacterProps) {
  return (
    <div className={styles.characterCard}>
      <p className={styles.characterText}>{`${name}`}</p>
      <Image src={icon} width="200" height="200" />
    </div>
  );
}
