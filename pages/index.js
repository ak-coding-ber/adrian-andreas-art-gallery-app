import Spotlight from "@/components/Spotlight";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

const StyledHeading = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 65px;
  animation: colorChange 5s infinite alternate;

  @keyframes colorChange {
    0% {
      color: red;
    }
    50% {
      color: green;
    }
    100% {
      color: blue;
    }
  }
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
  }, [pieces]);

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
