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
  margin-bottom: 10%;
  padding-left: 50%;
  padding-right: 50%;
  width: 60%;
`;

export default function ArtPieceDetailsPage({
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
      <br />
      <br />
      <Comments comments={comments} />
      <br />
      <br />
      <CommentForm
        artPiecesInfo={artPiecesInfo}
        slug={slug}
        updateArtPiecesInfo={updateArtPiecesInfo}
      />
    </StyledContainerPage>
  );
}
