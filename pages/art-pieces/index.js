import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  console.log(artPiecesInfo);
  return (
    <>
      <ArtPieces
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
