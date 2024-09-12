import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useState } from "react";
import { useEffect } from "react";
import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";

  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );

  function handleToggleFavoriteButton(slug, artPiecesInfo) {
    const updatedArtPiecesInfo = artPiecesInfo.map((piece) => {
      if (piece.slug !== slug) {
        return piece;
      }
      return {
        ...piece,
        isFavorite: !piece.isFavorite,
      };
    });
    updateArtPiecesInfo(updatedArtPiecesInfo);
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

  useEffect(() => {
    if (data) {
      if (artPiecesInfo.length === 0) {
        // Only set the data if the localStorage doesn't have it yet
        updateArtPiecesInfo(
          data.map((piece) => ({ slug: piece.slug, isFavorite: false }))
        );
      }
    }
  }, [data]);

  if (error) return <div>{error.message}</div>;
  if (isLoading) {
    return null;
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavoriteButton}
      />
      <Layout />
    </>
  );
}
