import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";
import styled from "styled-components";

const StyledContainerArtPieceInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 320px;
`;

const StyledContainerArtPiece = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50%;
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
    <StyledContainerArtPiece>
      <Link href={`/art-pieces/${slug}`}>
        <Image
          data-testid="spotlight-image"
          src={image}
          alt={`image of ${title} from ${artist}`}
          width={320}
          height={480}
        />
      </Link>
      <StyledContainerArtPieceInfo>
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
      </StyledContainerArtPieceInfo>
    </StyledContainerArtPiece>
  );
}
