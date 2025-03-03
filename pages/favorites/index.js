import ArtPieces from "@/components/ArtPieces";
// import {
//   EmptyMessage,
//   EmptyMessageContainer,
// } from "@/components/FavoritesStyles";
import styled from "styled-components";

const EmptyMessage = styled.p`
  font-size: 1rem;
  color: gray;
`;

const EmptyMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 220px;
`;

export default function FavoriteListingPage({
  artPiecesInfo,
  onToggleFavorite,
}) {
  const favoritePieces = artPiecesInfo.filter((piece) => piece.isFavorite);

  if (favoritePieces.length === 0) {
    return (
      <>
        <EmptyMessageContainer>
          <EmptyMessage>No favorites yet - have a look in Pieces!</EmptyMessage>
        </EmptyMessageContainer>
      </>
    );
  }
  return (
    <ArtPieces
      pieces={favoritePieces}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
