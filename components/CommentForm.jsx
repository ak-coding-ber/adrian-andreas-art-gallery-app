import moment from "moment";

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
        <input
          name="userInput"
          id="textfield "
          type="text"
          placeholder="type here..."
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
