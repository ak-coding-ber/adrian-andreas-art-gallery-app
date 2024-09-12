import styled from "styled-components";

const StyledForm = styled.form`
  margin-bottom: 500px;
`;

export default function CommentForm({
  //   onSubmitComment,
  artPiecesInfo,
  slug,
  updateArtPiecesInfo,
}) {
  function handleSubmitComment(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const comment = formElements.userInput.value;

    const updatedArtPiecesInfo = artPiecesInfo.map((piece) => {
      if (piece.slug !== slug) {
        return piece;
      }
      return {
        ...piece,
        comments: [...piece.comments, comment],
      };
    });
    updateArtPiecesInfo(updatedArtPiecesInfo);
    event.target.reset();
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmitComment}>
        <label htmlFor="textfield">Add comment:</label>
        <input
          name="userInput"
          id="textfield "
          type="text"
          placeholder="type here..."
        />
        <button type="submit">Send</button>
      </StyledForm>
    </>
  );
}
