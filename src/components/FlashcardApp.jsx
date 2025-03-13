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
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [streak, setStreak] = useState(0);
  const [masteredCards, setMasteredCards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState(flashcards);

  const handleNextClick = () => {
    setCurrentCard((prev) => (prev + 1) % shuffledCards.length);
    setUserInput("");
    setFeedback("");
    setShowAnswer(false);
  };

  const handlePrevClick = () => {
    setCurrentCard(
      (prev) => (prev - 1 + shuffledCards.length) % shuffledCards.length
    );
    setUserInput("");
    setFeedback("");
    setShowAnswer(false);
  };

  const handleSubmit = () => {
    const correctAnswer = shuffledCards[currentCard].answer
      .toLowerCase()
      .trim();
    const userAnswer = userInput.toLowerCase().trim();

    if (userAnswer === correctAnswer) {
      setFeedback("✅ Correct!");
      setStreak((prev) => prev + 1);
    } else {
      setFeedback(
        `❌ Incorrect! The correct answer is: ${shuffledCards[currentCard].answer}`
      );
      setStreak(0); // Reset streak on incorrect answer
    }
  };

  const handleShuffle = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCurrentCard(0); // Reset to first card in shuffled set
  };

  const markAsMastered = () => {
    if (!masteredCards.includes(currentCard)) {
      setMasteredCards([...masteredCards, currentCard]);
    }
  };

  return (
    <div className="app-container">
      <h1>Brain Boost: Flashcards!</h1>
      <p className="subtitle">Expand your knowledge, one card at a time.</p>

      <p className="streak">🔥 Streak: {streak}</p>

      <Flashcard
        question={shuffledCards[currentCard].question}
        answer={shuffledCards[currentCard].answer}
        image={shuffledCards[currentCard].image}
        category={shuffledCards[currentCard].category}
        showAnswer={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <div className="input-container">
        <input
          type="text"
          placeholder="Type your answer here..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {feedback && <p className="feedback">{feedback}</p>}

      <div className="button-container">
        <button className="button prev" onClick={handlePrevClick}>
          Previous
        </button>
        <button className="button next" onClick={handleNextClick}>
          Next
        </button>
        <button className="button shuffle" onClick={handleShuffle}>
          Shuffle
        </button>
        <button className="button mastered" onClick={markAsMastered}>
          {masteredCards.includes(currentCard)
            ? "✅ Mastered"
            : "Mark as Mastered"}
        </button>
      </div>
    </div>
  );
}

export default FlashcardApp;
