import Image from "next/image";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 10px;
  padding: 0;
`;

export default function FavoriteButton({
  slug,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const selectedPiece = artPiecesInfo.find((piece) => piece.slug === slug);
  const isFavorite = selectedPiece?.isFavorite;

  return (
    <>
      <StyledButton
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onToggleFavorite(slug, artPiecesInfo);
        }}
      >
        <Image
          src={isFavorite ? "/heart_black.png" : "/heart_transparent.png"}
          alt="like button"
          width={20}
          height={20}
        ></Image>
      </StyledButton>
    </>
  );
}
