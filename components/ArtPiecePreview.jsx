import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ArtPiecePreview({
  slug,
  image,
  title,
  artist,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const selectedPiece = artPiecesInfo.find((piece) => piece.slug === slug);

  // console.log(selectedPiece.isFavorite);

  // console.log("slug", slug, "isFavorite", isFavorite);
  // console.log("onToggleFavorite", onToggleFavorite);

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
      <FavoriteButton
        isFavorite={selectedPiece.isFavorite}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      />
      <h3>{`'${title}' by ${artist}`}</h3>
    </>
  );
}
