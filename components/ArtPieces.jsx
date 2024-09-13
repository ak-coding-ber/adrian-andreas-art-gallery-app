import ArtPiecePreview from "./ArtPiecePreview";
// import Link from "next/link";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(480px));
  grid-gap: 50px;
  padding: 50px;
  margin-bottom: 5%;
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
