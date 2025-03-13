function Flashcard({ question, answer, image, category, showAnswer, onClick }) {
  // Normalize category names for CSS classes
  const categoryClass = category.toLowerCase().replace(/\s+/g, "-"); // Convert spaces to hyphens

  return (
    <div className={`flashcard ${categoryClass}`} onClick={onClick}>
      {image && <img src={image} alt={category} className="flashcard-image" />}
      <p>{showAnswer ? answer : question}</p>
    </div>
  );
}

export default Flashcard;
