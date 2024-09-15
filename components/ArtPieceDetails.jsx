import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

const StyledContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 30%;
`;

const StyledColorCircle = styled.div`
  background-color: ${({ $color }) => $color};
  width: 3rem;
  height: 3rem;
  border: solid 1px gray;
  border-radius: 50%;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  colors,
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
        // objectFit="cover"
        // fill
      />

      <StyledContainerInfo>
        <p>
          <strong>{`'${title}'`}</strong>
          <br />
          {` _ ${artist}`}
        </p>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          artPiecesInfo={artPiecesInfo}
          slug={slug}
        />
        <br />
        {colors.map((color, index) => {
          return (
            <div key={index}>
              <StyledColorCircle $color={color} />
            </div>
          );
        })}
      </StyledContainerInfo>
    </>
  );
}
