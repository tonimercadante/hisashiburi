import Head from "next/head";
import styles from "../styles/home.module.scss";

// load more episodes after api completed
// create a component to pass the time like 00:00
// layout change homepage component for api, bot and about
// fuzzy search
// deploy




export default function Home() {
  
  
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Hisashiburi - found the episodes your favorites characters appears
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

// type Characters = {
  //   id: number;
  //   name: string;
  //   lastName: string;
  //   icon: string;
  // };
  // const description =
  // "Discover when your<br> favorite charachters<br> are on screen!";
  // const quantity = "Browse over +100.000 characters";
{/* <HomePage /> */}
// const [characters, setCharacters] = useState<Characters[]>([]);
// const router = useRouter();
// let name = "Itachi Uchiha";
// let gaara = "Sabaku no Gaara";
// let minato = "Minato Namikaze";
// let icon = "/images/itachi.jpg";
// let gaaraUrl = "/images/gaara.jpg";
// let minatoUrl = "/images/minato.jpg";

{/* <main className={styles.home}>
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
          <Link href={`/?character=${char.id}`} as={`/characters/${char.id}`}>
            <a>
              <Character name={char.name} icon={char.icon} />
            </a>
          </Link>
          {char.name}
        </div>
      );
    })} */}
    {/* <Character name={gaara} icon={gaaraUrl} />
    <Character name={minato} icon={minatoUrl} />
    <Character name={name} icon={icon} />
    <Character name={gaara} icon={gaaraUrl} />
    <Character name={minato} icon={minatoUrl} />
    <Character name={name} icon={icon} />
    <Character name={gaara} icon={gaaraUrl} />
    <Character name={minato} icon={minatoUrl} />
    <Character name={name} icon={icon} />
    <Character name={gaara} icon={gaaraUrl} />
    <Character name={minato} icon={minatoUrl} /> */}
  {/* </div> */}
  
{/* </main> */}

{/* <Modal isOpen={!!router.query.character}>
  <h1>hi</h1>
</Modal> */}