import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default function Spotlight({
  image,
  artist,
  title,
  artPiecesInfo,
  onToggleFavorite,
  slug,
}) {
  return (
    <>
      <p>
        <strong>{title}</strong> from {artist}
      </p>
      <Link href={`/art-pieces/${slug}`}>
        <Image
          src={image}
          alt={`image of ${title} from ${artist}`}
          width={240}
          height={300}
        />
      </Link>
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
