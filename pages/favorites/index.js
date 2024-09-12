import ArtPieces from "@/components/ArtPieces";

export default function FavoriteListingPage({
  artPiecesInfo,
  onToggleFavorite,
}) {
  const favoritePieces = artPiecesInfo.filter((piece) => piece.isFavorite);

  if (favoritePieces.length === 0) {
    return <p>You have no Art Pieces selected as your favorite!</p>;
  }
  return (
    <ArtPieces
      pieces={favoritePieces}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
