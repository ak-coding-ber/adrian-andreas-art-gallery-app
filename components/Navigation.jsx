import Link from "next/link";
import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 10%;
  bottom: 0;
  background-color: white;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid black;

  .link {
    text-decoration: none;
    font-size: 30px;
    color: black;
  }
`;

export default function Navigation() {
  return (
    <>
      <StyledLayout>
        <Link href={"/"} className="link">
          Spotlight
        </Link>
        <Link href={"/art-pieces"} className="link">
          Pieces
        </Link>
        <Link href={"/favorites"} className="link">
          Favorites
        </Link>
      </StyledLayout>
    </>
  );
}
