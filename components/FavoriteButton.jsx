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
  isFavorite,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <StyledButton onClick={() => onToggleFavorite(slug)}>
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
