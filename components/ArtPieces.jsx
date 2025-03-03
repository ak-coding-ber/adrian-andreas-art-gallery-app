import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  max-width: 1680px;
`;

const StyledList = styled.ul`
  padding-top: 145px;
  padding-bottom: 45px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10%;
  padding-left: 5%;
  padding-right: 5%;
  width: 100%;
`;

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <StyledDiv>
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
    </StyledDiv>
  );
}
