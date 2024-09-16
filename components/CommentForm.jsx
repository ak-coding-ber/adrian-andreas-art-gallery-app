import moment from "moment";
import styled from "styled-components";

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 320px;
  justify-content: space-between;
`;

export default function CommentForm({
  artPiecesInfo,
  slug,
  updateArtPiecesInfo,
}) {
  function handleSubmitComment(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const comment = formElements.userInput.value;
    const formattedDate = moment().format("DD-MM-YYYY, HH:mm");

    // console.log(comment);

    const updatedArtPiecesInfo = artPiecesInfo.map((piece) => {
      if (piece.slug !== slug) {
        return piece;
      }
      return {
        ...piece,
        comments: [
          ...piece.comments,
          { commentText: comment, time: formattedDate },
        ],
      };
    });
    updateArtPiecesInfo(updatedArtPiecesInfo);
    event.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmitComment}>
        <label htmlFor="textfield">Add comment:</label>
        <br />
        <br />
        <StyledFormContainer>
          <input
            name="userInput"
            id="textfield "
            type="text"
            style={{ width: "250px" }}
            placeholder="type here..."
          />
          <button type="submit">Send</button>
        </StyledFormContainer>
      </form>
    </>
  );
}
