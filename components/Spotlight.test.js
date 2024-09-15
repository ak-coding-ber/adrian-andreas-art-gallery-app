import { render, screen } from "@testing-library/react";
import { data } from "./mocks/ArtPiecesMockData";
import Spotlight from "./Spotlight";

const artPiece = data[0];

describe("Spotlight Component", () => {
  test("The art piece image is displayed.", () => {
    render(
      <Spotlight
        image={artPiece.imageSource}
        altText={"Test Text"}
        artist={artPiece.artist}
        title={artPiece.name}
        artPiecesInfo={data}
        slug={artPiece.slug}
      />
    );

    const imageElement = screen.getByTestId("spotlight-image");
    expect(imageElement).toBeInTheDocument();
  });

  test("The art piece artist is displayed.", () => {
    const expectedText = artPiece.artist;

    render(
      <Spotlight
        image={artPiece.imageSource}
        altText={"Test Text"}
        artist={artPiece.artist}
        title={artPiece.name}
        artPiecesInfo={data}
        slug={artPiece.slug}
      />
    );

    const paragraphElement = screen.getByText((content) => {
      return content.includes(artPiece.artist);
    });

    expect(paragraphElement).toBeInTheDocument();
  });
});
