import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

const StyledContainerArtPieceInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 320px;
`;

const StyledContainerArtPiece = styled.div`
  margin-bottom: 50%;
  .fixed-height-image {
    height: 480px;
    width: 100%;
    object-fit: cover;
  }
`;

const StyledContainerImage = styled.div`
  width: 320px;
  height: 480px;
`;

export default function ArtPiecePreview({
  slug,
  image,
  title,
  artist,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <StyledContainerArtPiece>
      <Link href={`/art-pieces/${slug}`}>
        <StyledContainerImage>
          <Image
            data-testid="preview-image"
            src={image}
            alt={`image of ${title} from ${artist}`}
            className="fixed-height-image"
            width={320}
            height={480}
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
