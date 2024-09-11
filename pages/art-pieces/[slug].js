import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentArtPiece = pieces.find((piece) => piece.slug === slug);
  if (!currentArtPiece) {
    return null;
  }

  const queriedPiece = pieces.find((piece) => piece.slug === slug);
  const { imageSource, name, artist, year, genre } = queriedPiece;

  console.log("pieces inside ArtPeiceDetails", pieces);
  console.log("slug", slug);
  console.log("queriedPiece", queriedPiece);

  return (
    <>
      <ArtPieceDetails
        image={imageSource}
        title={name}
        artist={artist}
        year={year}
        genre={genre}
      />
    </>
  );
}
