import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function Spotlight({ image, artist, title }) {
  return (
    <>
      <p>
        <strong>{title}</strong> from {artist}
      </p>
      <Image
        src={image}
        alt={`image of ${title} from ${artist}`}
        width={240}
        height={300}
      />
      <FavoriteButton />
    </>
  );
}
