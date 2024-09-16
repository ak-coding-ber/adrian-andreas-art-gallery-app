import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10%;
  margin-top: 120px;
  padding-left: 5%;
  padding-right: 5%;
`;

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <StyledList>
      {pieces.map((piece) => {
        const { slug, imageSource, name, artist } = piece;

        return (
          <li key={slug}>
            <ArtPiecePreview
              image={imageSource}
              title={name}
              artist={artist}
              slug={slug}
              artPiecesInfo={artPiecesInfo}
              onToggleFavorite={onToggleFavorite}
            />
          </li>
        );
      })}
    </StyledList>
  );
}
