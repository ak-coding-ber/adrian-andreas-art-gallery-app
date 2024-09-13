import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

const artPiecesInfo = [
  {
    slug: "orange-red-and-green",
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    year: "2018",
    genre: "Abstract Painting",
    colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
    dimensions: {
      height: 2432,
      width: 1920,
      type: "jpg",
    },
    isFavorite: false,
    comments: [
      {
        commentText: "sdsds",
        time: "13-09-2024, 10:52",
      },
      {
        commentText: "sdsds",
        time: "13-09-2024, 10:53",
      },
      {
        commentText: "wewe",
        time: "13-09-2024, 10:53",
      },
    ],
  },
];

const artPiece = artPiecesInfo[0];

test("The art piece image is displayed", () => {
  render(
    <Spotlight
      image={artPiece.imageSource}
      altText={"Test Text"}
      artist={artPiece.artist}
      title={artPiece.name}
      artPiecesInfo={artPiecesInfo}
      slug={artPiece.slug}
    />
  );
});

test("the art piece artist is displayed", () => {
  const expectedText = artPiece.artist;

  render(
    <Spotlight
      image={artPiece.imageSource}
      altText={"Test Text"}
      artist={artPiece.artist}
      title={artPiece.name}
      artPiecesInfo={artPiecesInfo}
      slug={artPiece.slug}
    />
  );

  // Use a custom function matcher to check if the artist name exists in the paragraph
  const paragraphElement = screen.getByText((content, element) => {
    return content.includes(artPiece.artist);
  });

  // Assert that the paragraph containing the artist's name is rendered
  expect(paragraphElement).toBeInTheDocument();
});
