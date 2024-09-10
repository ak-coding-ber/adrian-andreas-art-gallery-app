import Spotlight from "@/components/Spotlight";
import Link from "next/link";

export default function SpotlightPage({ pieces }) {
  if (!pieces?.length) {
    return <div>Loading...</div>;
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const randomIndex = getRandomInt(pieces.length);
  const spotlight = pieces[randomIndex];

  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight
        image={spotlight.imageSource}
        artist={spotlight.artist}
        title={spotlight.name}
      />
      <Link href={"/art-pieces"}>Art pieces</Link>
    </div>
  );
}
