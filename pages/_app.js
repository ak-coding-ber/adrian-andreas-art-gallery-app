import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";
  const router = useRouter();
  const currentPage = router.pathname;

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

  if (data) {
    if (artPiecesInfo.length === 0) {
      // Only set the data if the localStorage doesn't have it yet
      updateArtPiecesInfo(
        data.map((piece) => ({
          ...piece,
          slug: piece.slug,
          isFavorite: false,
          comments: [],
        }))
      );
    }
  }

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
        updateArtPiecesInfo={updateArtPiecesInfo}
      />
      <Layout currentPage={currentPage} />
    </>
  );
}
