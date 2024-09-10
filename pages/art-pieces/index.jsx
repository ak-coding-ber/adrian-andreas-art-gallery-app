import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({ pieces }) {
  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={pieces} />
    </div>
  );
}
