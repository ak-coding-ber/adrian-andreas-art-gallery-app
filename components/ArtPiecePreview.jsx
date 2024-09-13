import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default function ArtPiecePreview({
  slug,
  image,
  title,
  artist,
  artPiecesInfo,
  onToggleFavorite,
}) {
  // const selectedPiece = artPiecesInfo.find((piece) => piece.slug === slug);

  // console.log(selectedPiece.isFavorite);
  // console.log("slug", slug, "isFavorite", isFavorite);
  // console.log("onToggleFavorite", onToggleFavorite);

  return (
    <>
      <Link href={`/art-pieces/${slug}`}>
        <Image
          src={image}
          alt={`image of ${title} from ${artist}`}
          width={480}
          height={320}
          layout="responsive"
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
