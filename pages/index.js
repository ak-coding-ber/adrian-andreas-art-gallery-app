import Spotlight from "@/components/Spotlight";
import Link from "next/link";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: 40px;
  margin-left: 50px;
`;

export default function SpotlightPage({ pieces }) {
  if (!pieces?.length) {
    return <div>Loading...</div>;
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const randomIndex = getRandomInt(pieces.length);
  const spotlight = pieces[randomIndex];

  return (
    <>
      <StyledHeading>Art Gallery</StyledHeading>
      <Spotlight
        image={spotlight.imageSource}
        artist={spotlight.artist}
        title={spotlight.name}
      />
    </>
  );
}
