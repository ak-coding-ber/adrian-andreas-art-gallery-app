import Spotlight from "@/components/Spotlight";
import { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";

const StyledHeading = styled.h1`
  font-size: 40px;
  margin-left: 50px;
`;

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const [randomArtPiece, setRandomArtPiece] = useState([]);
  useEffect(() => {
    const randomIndex = getRandomInt(pieces.length);
    setRandomArtPiece(pieces[randomIndex]);
  }, []);

  if (!pieces) {
    return <div>Loading...</div>;
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <>
      <StyledHeading>Art Gallery</StyledHeading>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
        title={randomArtPiece.name}
        slug={randomArtPiece.slug}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
