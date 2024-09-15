import { uid } from "uid";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: lightgray;
  width: 380px;
  padding-top: 3px;
  padding-bottom: 3px;
  margin-left: -6%;
  border-radius: 15px;
  margin-bottom: 10px;
`;

const StyledComment = styled.p`
  // text-wrap: wrap;
  // width: 100%;
  // white-space: nowrap;
`;

const StyledDate = styled.p`
  font-size: 8px;
`;

export default function Comments({ comments }) {
  return (
    <>
      <h2>Comments:</h2>
      <ul>
        {comments.map((comment) => {
          if (comments.length === 0) {
            return null;
          }
          return (
            <StyledList key={uid()}>
              <StyledComment>{comment.commentText}</StyledComment>
              <StyledDate>{comment.time}</StyledDate>
            </StyledList>
          );
        })}
      </ul>
    </>
  );
}

// {comment}
