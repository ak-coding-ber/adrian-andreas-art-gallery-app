import { render, screen } from "@testing-library/react";
import { data } from "./mocks/ArtPiecesMockData";
import ArtPieces from "./ArtPieces";

// To get rid of warning messages regarding Image component

//........................................

const originalConsoleWarn = console.warn;

beforeAll(() => {
  console.warn = jest.fn((message) => {
    if (message.includes('legacy prop "layout"')) {
      // Ignore this specific warning
      return;
    }
    originalConsoleWarn(message);
  });
});

afterAll(() => {
  console.warn = originalConsoleWarn;
});

//........................................

describe("ArtPieces Component", () => {
  beforeEach(() => {
    // Render the component once before each test
    render(<ArtPieces pieces={data} artPiecesInfo={data} />);
  });
  test("All art pieces are displayed as a list.", () => {
    const allListItems = screen.getAllByRole("listitem");
    expect(allListItems.length).toBe(data.length);
  });

  test("Each art piece's image is displayed.", () => {
    const allImages = screen.getAllByTestId("preview-image");
    expect(allImages.length).toBe(data.length);
  });

  test("Each art piece's title is displayed.", () => {
    data.forEach((piece) => {
      const artistElement = screen.getByText(new RegExp(piece.name, "i"));
      expect(artistElement).toBeInTheDocument();
    });
  });

  test("Each art piece's artist is displayed.", () => {
    data.forEach((piece) => {
      const artistElement = screen.getByText(new RegExp(piece.artist, "i"));
      expect(artistElement).toBeInTheDocument();
    });
  });
});
