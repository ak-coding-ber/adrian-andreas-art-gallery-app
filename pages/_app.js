import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";
  const [loading, setLoading] = useState(true);

  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    // signal that the data fetch is complete and the page can be rendered
    setLoading(false);
    return res.json();
  };

  const { data, isLoading, error } = useSWR(URL, fetcher);

  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    if (data) {
      // console.log("inside useEffect", data);
      setPieces(data);
      // console.log("pieces inside useEffect", pieces);
    }
  }, [data]);

  // console.log("pieces outside useEffect", pieces);

  if (error) return <div>{error.message}</div>;

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={pieces} />
      <Layout />
    </>
  );
}
