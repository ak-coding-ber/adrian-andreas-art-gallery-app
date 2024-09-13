import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";
import CommentForm from "@/components/CommentForm";
import Comments from "@/components/Comments";

export default function ArtPieceDetailsPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
  updateArtPiecesInfo,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const currentArtPiece = artPiecesInfo.find((piece) => piece.slug === slug);
  if (!currentArtPiece) {
    return null;
  }

  const { imageSource, name, artist, year, genre, comments } = currentArtPiece;

  console.log("Current Art Piece", currentArtPiece);

  return (
    <>
      <ArtPieceDetails
        image={imageSource}
        title={name}
        artist={artist}
        year={year}
        genre={genre}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      />
      <Comments comments={comments} />
      <CommentForm
        artPiecesInfo={artPiecesInfo}
        slug={slug}
        updateArtPiecesInfo={updateArtPiecesInfo}
      />
    </>
  );
}
