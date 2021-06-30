import { GetStaticPaths, GetStaticProps } from "next";
import { apiResolver } from "next/dist/next-server/server/api-utils";
import { useRouter } from "next/router";
import { api } from "../../services/api";

// type Character = {
//   id: String;
//   name: String;
// };

// type CharacterProps = {
//   characterData: Character;
// };

export default function Characters({ data }) {
  const router = useRouter();
  //   const { characters } = router.query
  //     {console.log(router.query)}
  return (
    <div>
      {data.map((d) => (
        <div key={d.id}>
          <p>{d.name}</p>
          <p>{d.lastName}</p>
          <img src={d.cover} alt={d.cover} />
        </div>
      ))}
      <p>Characters: {router.query.character}</p>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(ctx) {
  const { character } = ctx.params;
  const { data } = await api.get(`characters?name=${character}`);

  return {
    props: { data },
  };
}
