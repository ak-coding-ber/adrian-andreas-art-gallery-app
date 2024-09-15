import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";
import CommentForm from "@/components/CommentForm";
import Comments from "@/components/Comments";
import styled from "styled-components";

const StyledContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 30%;
`;

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

  const { imageSource, name, artist, colors, comments } = currentArtPiece;

  console.log("Current Art Piece", currentArtPiece);

  return (
    <StyledContainerPage>
      <ArtPieceDetails
        image={imageSource}
        title={name}
        artist={artist}
        colors={colors}
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
    </StyledContainerPage>
  );
}
