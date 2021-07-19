import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, ReactNode, SetStateAction } from "react";
import axios, { CancelTokenSource } from "axios";
import { api } from "../../../services/api";

type SearchProps = {
  setCharacters: Dispatch<Characters[]>;
  children?: ReactNode;
};
type Characters = {
  id: Number;
  name: String;
  lastName: String;
  icon: String;
};

export default function Search({ setCharacters, children }: SearchProps) {
  let cancelToken: CancelTokenSource;
  const handleSearch = async (e: { target: { value: any } }) => {
    const query = e.target.value;

    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("Operation canceled due to new request.");
    }
    cancelToken = axios.CancelToken.source();
    if (query.length < 3) {
      setCharacters([]);
    } else {
      try {
        const res = await api.get(`characters?q=${query}`, {
          cancelToken: cancelToken.token,
        });
        console.log("query: ", query);
        console.log(res.data);
        setCharacters(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <input type="text" placeholder="Search..." onChange={handleSearch} />
        <FontAwesomeIcon
          icon={faSearch}
          className={styles.searchIcon}
          size="3x"
        />
      </div>
    </div>
  );
}
