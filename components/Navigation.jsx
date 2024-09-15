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

const NavLink = styled.a`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.$isActive ? "#EAD8C3" : "white")};

  &:hover {
    background-color: ${(props) => (props.$isActive ? "#EAD8C3" : "#faf0e6")};
  }
`;

export default function Navigation({ currentPage }) {
  return (
    <>
      <StyledLayout>
        <NavLink
          href={"/"}
          className="link"
          $isActive={currentPage === "/" ? true : false}
        >
          Spotlight {}
        </NavLink>
        <NavLink
          href={"/art-pieces"}
          className="link"
          $isActive={currentPage === "/art-pieces" ? true : false}
        >
          Pieces
        </NavLink>
        <NavLink
          href={"/favorites"}
          className="link"
          $isActive={currentPage === "/favorites" ? true : false}
        >
          Favorites
        </NavLink>
      </StyledLayout>
    </>
  );
}
