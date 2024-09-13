import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  artPiecesInfo,
  onToggleFavorite,
  slug,
}) {
  return (
    <>
      <Link href={"/art-pieces"}>← back</Link>
      <br />
      <Image
        src={image}
        alt={`image of ${title} by ${artist}`}
        width={480}
        height={600}
      />
      <StyledContainer>
        <p>
          <strong>{`'${title}'`}</strong>
          <br />
          {` _ ${artist}`}
        </p>
        <br />
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          artPiecesInfo={artPiecesInfo}
          slug={slug}
        />
      </StyledContainer>
    </>
  );
}
