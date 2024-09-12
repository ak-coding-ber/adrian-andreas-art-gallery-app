import ArtPieces from "@/components/ArtPieces";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: 40px;
  margin-left: 50px;
`;

export default function ArtPiecesPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <div>
      <StyledHeading>Art Gallery</StyledHeading>
      <ArtPieces
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
