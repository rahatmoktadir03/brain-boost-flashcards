import { useState } from "react";
import Flashcard from "./Flashcard";
import "../App.css";

const flashcards = [
  {
    category: "Computer Science",
    question: "What is the time complexity of binary search?",
    answer: "O(log n)",
    image:
      "https://images.squarespace-cdn.com/content/v1/5efc3845201cfd62a7cad809/b04f4b21-f887-4e54-a0f0-75ca9d7dd7d8/Screen+Shot+2022-01-04+at+11.01.17+PM.png",
  },
  {
    category: "Computer Science",
    question: "What is a Turing Machine?",
    answer:
      "A mathematical model of computation that manipulates symbols on a tape.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Turing_Machine.png",
  },
  {
    category: "Computer Science",
    question: "What is the most popular programming language?",
    answer: "Python",
    image:
      "https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-png-transparent.png",
  },

  {
    category: "Environmental Science",
    question: "What is the largest carbon sink on Earth?",
    answer: "The ocean.",
    image:
      "https://purepng.com/public/uploads/large/purepng.com-seasealegwaternightoceanblueh2obeach-481522277867o2uhx.png",
  },
  {
    category: "Environmental Science",
    question: "Define eutrophication.",
    answer:
      "Excessive nutrients in water causing dense plant growth and oxygen depletion.",
    image:
      "https://earthhow.com/wp-content/uploads/2017/07/Eutrophication-Process-1-678x378.png",
  },
  {
    category: "Environmental Science",
    question: "What is the greenhouse effect?",
    answer: "A process where gases trap heat in Earth's atmosphere.",
    image:
      "https://banner2.cleanpng.com/20180816/xje/49fe8b0a54fdf45b1118165a19100001.webp",
  },

  {
    category: "Math",
    question: "What is the Riemann Hypothesis?",
    answer: "A conjecture about the distribution of prime numbers.",
    image: "https://gettocode.com/wp-content/uploads/2021/11/image.png",
  },
  {
    category: "Math",
    question: "What is this symbol?",
    answer: "Pi",
    image:
      "https://e7.pngegg.com/pngimages/650/617/png-clipart-pi-day-mathematics-circumference-pi-miscellaneous-angle.png",
  },
  {
    category: "Math",
    question: "What is this symbol?",
    answer: "Omega",
    image: "https://banner2.cleanpng.com/20180406/avw/avgbueeja.webp",
  },

  {
    category: "History",
    question: "What was the primary cause of the fall of the Roman Empire?",
    answer:
      "A mix of political instability, economic decline, and barbarian invasions.",
    image:
      "https://e7.pngegg.com/pngimages/867/84/png-clipart-colosseum-rome-italy-colosseum-rome-world-landmarks-rome-thumbnail.png",
  },
  {
    category: "History",
    question: "Who was the leader of the Soviet Union during World War II?",
    answer: "Joseph Stalin.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/StalinCropped1943.jpg",
  },
  {
    category: "History",
    question: "What was the significance of the Treaty of Westphalia?",
    answer:
      "It marked the end of the Thirty Years' War and established modern state sovereignty.",
    image:
      "https://cdn.britannica.com/52/137252-050-3FDF5FB6/Swearing-Oath-Ratification-copper-oil-Treaty-of-1648.jpg",
  },
];

function FlashcardApp() {
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  const handleNextClick = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
    setShowAnswer(false);
  };

  const handlePrevClick = () => {
    setCurrentCard(
      (prev) => (prev - 1 + flashcards.length) % flashcards.length
    );
    setShowAnswer(false);
  };

  return (
    <div className="app-container">
      <h1>Brain Boost: Flashcards!</h1>
      <p className="subtitle">Expand your knowledge, one card at a time.</p>
      <Flashcard
        question={flashcards[currentCard].question}
        answer={flashcards[currentCard].answer}
        image={flashcards[currentCard].image}
        category={flashcards[currentCard].category}
        showAnswer={showAnswer}
        onClick={handleCardClick}
      />
      <div className="button-container">
        <button className="button prev" onClick={handlePrevClick}>
          Previous
        </button>
        <button className="button next" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default FlashcardApp;
