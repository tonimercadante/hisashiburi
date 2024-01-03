import conn from "./db";
import getTimeData from "./utils";

export async function getCharacterData(id: string) {
  const query = "SELECT * FROM character WHERE id = $1";
  const values = [id];
  const result = await conn.query(query, values);
  console.log("ttt", result.rows);

  const res = await fetch("http://localhost:3333/characters/" + id);
  const data = await res.json();
  data.episodes.forEach(function (newdata: {
    parsedEp: { percent: number; inorout: boolean }[];
    apparitionTime: string;
    duration: string;
  }) {
    newdata.parsedEp = getTimeData(newdata.apparitionTime, newdata.duration);
  });

  return {
    id: data.id,
    name: data.name,
    lastName: data.lastName,
    icon: data.icon,
    cover: data.cover,
    episodes: data.episodes,
  };
}
