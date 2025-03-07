function Flashcard({ question, answer, image, category, showAnswer, onClick }) {
  return (
    <div className={`flashcard ${category.toLowerCase()}`} onClick={onClick}>
      {image && <img src={image} alt={category} className="flashcard-image" />}
      <p>{showAnswer ? answer : question}</p>
    </div>
  );
}

export default Flashcard;
