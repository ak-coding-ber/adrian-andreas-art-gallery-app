import Link from "next/link";
import Image from "next/image";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <Link href={"/art-pieces"}>← back</Link>
      <br />
      <Image
        src={image}
        alt={`image of ${title} by ${artist}`}
        width={480}
        height={600}
      />
      <ul>
        <li>
          {artist}: '{title}'
        </li>
        <li>year: {year}</li>
        <li>genre: {genre}</li>
      </ul>
    </>
  );
}
