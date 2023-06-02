import { useState } from "react";
import data from "../data.json";

function App() {
  const [questions] = useState(data);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = questions[currentQuestion];
  const [guesses, setGuesses] = useState(0);

  const handleClick = (selectedAnswerIndex) => {
    const isCorrect = question.answerOption[selectedAnswerIndex].isCorrect;

    if (isCorrect) {
      setGuesses(guesses + 1);
    }

    if (currentQuestion >= questions.length - 1) {
      alert("Your score is " + (guesses + (isCorrect ? 1 : 0)));
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <>
      <main className="flex justify-center items-center min-h-screen">
        <article className=" bg-gray-800 py-2 px-24 text-center rounded-xl">
          <h1 className="text-white text-2xl">
            Question {currentQuestion + 1}/{questions.length}
          </h1>
          <h3 className="text-xl text-gray-300">{question.question}</h3>
          <div className="flex justify-between">
            <div className="flex justify-start mr-14">
              <img className="max-w-full rounded-lg" src={question.image} />
            </div>
            <div className="grid-cols-1 grid ">
              {question.answerOption.map((item, index) => (
                <button
                  onClick={() => handleClick(index)}
                  className="bg-white py-2 px-2 rounded-md text-sm mb-2 "
                  key={index}
                >
                  {item.answer}{" "}
                </button>
              ))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export default App;
