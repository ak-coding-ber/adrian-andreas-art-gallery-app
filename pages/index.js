import useSWR from "swr";
import Spotlight from "@/components/Spotlight";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art";

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

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  const randomIndex = getRandomInt(data.length);
  const spotlight = data[randomIndex];

  // console.log(randomArtPiece);
  console.log("Spotlight", spotlight);

  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight
        image={spotlight.imageSource}
        artist={spotlight.artist}
        title={spotlight.name}
      />
    </div>
  );
}
