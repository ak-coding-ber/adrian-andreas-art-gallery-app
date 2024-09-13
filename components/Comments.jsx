import { uid } from "uid";
// import styled from "styled-components";

// const StyledList = styled.ul`
//   margin-bottom: 500px;
// `;

export default function Comments({ comments }) {
  return (
    <>
      <h1>Comments:</h1>;
      <ul>
        {comments.map((comment) => {
          if (comments.length === 0) {
            return null;
          }
          return (
            <li key={uid()}>
              <p>{comment.commentText}</p>
              <p>{comment.time}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// {comment}
