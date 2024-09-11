import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useState } from "react";
import { useEffect } from "react";
import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";

  function handleToggleFavoriteButton(slug) {
    updateArtPiecesInfo((draft) => {
      const item = draft.find((item) => item.slug === slug);
      if (item) {
        item.isFavorite = !item.isFavorite; // Mutate draft, Immer handles immutability
      }
    });
    // const currentPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    // if (!currentPiece) {
    //   updateArtPiecesInfo([...artPiecesInfo, { slug: slug, isFavorite: true }]);
    //   return;
    // }
    // updateArtPiecesInfo(
    //   artPiecesInfo.map((piece) =>
    //     piece.slug === slug
    //       ? { slug: slug, isFavorite: !piece.isFavorite }
    //       : piece
    //   )
    // );
  }

  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    return res.json();
  };

  const { data, isLoading, error } = useSWR(URL, fetcher);

  const [pieces, setPieces] = useState([]);
  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );

  useEffect(() => {
    if (data) {
      setPieces(data);
      updateArtPiecesInfo(
        data.map((piece) => ({ slug: piece.slug, isFavorite: false }))
      );
    }
  }, [data]);

  // console.log("artPiecesInfo", artPiecesInfo);

  if (error) return <div>{error.message}</div>;

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavoriteButton}
      />
      <Layout />
    </>
  );
}
