import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <Image
        src={image}
        alt={`image of ${title} from ${artist}`}
        width={240}
        height={300}
      />
      <h3>{`"${title}" by ${artist}`}</h3>
    </>
  );
}
