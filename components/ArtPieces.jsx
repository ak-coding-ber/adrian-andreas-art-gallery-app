import ArtPiecePreview from "./ArtPiecePreview";
import Link from "next/link";

export default function ArtPieces({ pieces }) {
  // console.log(pieces);
  return (
    <ul>
      {pieces.map((piece) => {
        const { slug, imageSource, name, artist } = piece;

        return (
          <li key={slug}>
            <ArtPiecePreview
              image={imageSource}
              title={name}
              artist={artist}
              slug={slug}
            />
          </li>
        );
      })}
    </ul>
  );
}
