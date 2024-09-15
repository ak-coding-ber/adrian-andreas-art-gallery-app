import ArtPieces from "@/components/ArtPieces";
import styled from "styled-components";
import {
  EmptyMessage,
  EmptyMessageContainer,
} from "@/components/FavoritesStyles";

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

export default function FavoriteListingPage({
  artPiecesInfo,
  onToggleFavorite,
}) {
  const favoritePieces = artPiecesInfo.filter((piece) => piece.isFavorite);

  if (favoritePieces.length === 0) {
    return (
      <>
        <StyledHeading>Art Gallery</StyledHeading>
        <EmptyMessageContainer>
          <EmptyMessage>No favorites yet - have a look in Pieces!</EmptyMessage>
        </EmptyMessageContainer>
      </>
    );
  }
  return (
    <>
      <StyledHeading>Art Gallery</StyledHeading>
      <ArtPieces
        pieces={favoritePieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
