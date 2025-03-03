import { uid } from "uid";
import styled from "styled-components";

const StyledHeading = styled.h1`
  margin-bottom: 10px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: lightgray;
  width: 320px;
  padding: 0.75rem;
  border-radius: 15px;
  margin-bottom: 10px;
`;

const StyledComment = styled.p`
  overflow-wrap: break-word;
`;

const StyledDate = styled.p`
  font-size: 8px;
`;

export default function Comments({ comments }) {
  return (
    <>
      <StyledHeading>Comments:</StyledHeading>
      <ul>
        {comments.map((comment) => {
          if (comments.length === 0) {
            return null;
          }
          return (
            <StyledList key={uid()}>
              <li>
                <StyledComment>{comment.commentText}</StyledComment>
              </li>
              <li>
                <StyledDate>{comment.time}</StyledDate>
              </li>
            </StyledList>
          );
        })}
      </ul>
    </>
  );
}
