import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";
import styled from "styled-components";

const StyledContainerArtPiece = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20%;
  margin-top: 120px;

  :hover .fixed-height-image {
    transform: scale(1.1);
  }

  .fixed-height-image {
    height: 480px;
    width: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
`;

const StyledContainerImage = styled.div`
  width: 320px;
  height: 480px;
  overflow: hidden;
  border: 1px solid darkgray;
`;

const StyledContainerArtPieceInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 320px;
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
        <StyledContainerImage>
          <Image
            data-testid="spotlight-image"
            src={image}
            alt={`image of ${title} from ${artist}`}
            width={320}
            height={480}
            className="fixed-height-image"
          />
        </StyledContainerImage>
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
