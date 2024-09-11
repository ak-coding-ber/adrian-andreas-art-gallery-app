import Image from "next/image";

export default function FavoriteButton({
  slug,
  isFavorite,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <button onClick={() => onToggleFavorite(slug)}>
        <Image
          src={isFavorite ? "/heart_black.png" : "/heart_transparent.png"}
          alt="like button"
          width={20}
          height={20}
        ></Image>
      </button>
    </>
  );
}
