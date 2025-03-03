import Spotlight from "@/components/Spotlight";
import { useEffect } from "react";
import { useState } from "react";

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const [randomArtPiece, setRandomArtPiece] = useState([]);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    const randomIndex = getRandomInt(pieces.length);
    setRandomArtPiece(pieces[randomIndex]);
  }, [pieces]);

  if (!pieces) {
    return <div>Loading...</div>;
  }

  return (
    <>
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
