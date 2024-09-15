import ArtPieces from "@/components/ArtPieces";
import styled from "styled-components";

const StyledHeading = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 65px;
  animation: colorChange 5s infinite alternate;

  @keyframes colorChange {
    0% {
      color: red;
    }
    50% {
      color: green;
    }
    100% {
      color: blue;
    }
  }
`;

export default function ArtPiecesPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  console.log(artPiecesInfo);
  return (
    <>
      <StyledHeading>Art Gallery</StyledHeading>
      <ArtPieces
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
