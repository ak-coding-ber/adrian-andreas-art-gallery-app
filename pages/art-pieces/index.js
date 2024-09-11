import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
