import Head from "next/head";
import {Button, Card } from "react-bootstrap";
import { MemeCard } from "~/components/Card";
import { Hero } from "~/components/Hero";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>MEMEADAY</title>
        <meta name="description" content="AI Generated Memes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <div className="row">
        {memeData?.map((meme) => (
          <MemeCard key={meme?.name} url={meme?.url} name={meme?.name} description={meme?.description}/>
        ))}
        </div>
      </main>
    </>
  );
}





const memeData = [
  {
      "name": "Meme 1",
      "url": "https://i.imgflip.com/1bij.jpg",
      "description": "This is a meme"
  },

  {
      "name": "Meme 2",
      "url": "https://i.imgflip.com/1bij.jpg",
      "description": "This is a meme"
  },

  {
      "name": "Meme 3",
      "url": "https://i.imgflip.com/1bij.jpg",
      "description": "This is a meme"
  },

  {
      "name": "Meme 4",
      "url": "https://i.imgflip.com/1bij.jpg",
      "description": "This is a meme"
  },

  {
      "name": "Meme 5",
      "url": "https://i.imgflip.com/1bij.jpg",
      "description": "This is a meme"
  },

  {
      "name": "Meme 6",
      "url": "https://i.imgflip.com/1bij.jpg",
      "description": "This is a meme"
  },

  {
      "name": "Meme 7",
      "url": "https://i.imgflip.com/1bij.jpg",
      "description": "This is a meme"
  },

  {
      "name": "Meme 8",
      "url": "https://i.imgflip.com/1bij.jpg",
      "description": "This is a meme"
  },

  {
      "name": "Meme 9",
      "url": "https://i.imgflip.com/1bij.jpg",
      "description": "This is a meme"
  }


]