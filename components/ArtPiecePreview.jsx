import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <>
      <Link href={`/art-pieces/${slug}`}>
        <Image
          src={image}
          alt={`image of ${title} from ${artist}`}
          width={240}
          height={300}
        />
      </Link>
      <h3>{`'${title}' by ${artist}`}</h3>
    </>
  );
}
