import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  console.log(pieces);
  return (
    <ul>
      {pieces.map((piece) => {
        const { slug, imageSource, name, artist } = piece;

        return (
          <li key={slug}>
            <ArtPiecePreview image={imageSource} title={name} artist={artist} />
          </li>
        );
      })}
    </ul>
  );
}
