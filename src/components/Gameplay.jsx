import React, { useState } from "react";
import Totalscore from "./Totalscore";
import Numberselector from "./Numberselector";
import Rolldice from "./Rolldice";
import Rules from "./Rules";

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showrules, setShowrules] = useState(false);

  const showRules = () => {
    setShowrules(true);
  };
  const hideRules = () => {
    setShowrules(false);
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("*You have not selected any number.");

      return;
    }
    setError("");

    const randomNumber = getRandomNumber(1, 7);

    setCurrentDice(randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <main className="h-full w-full bg-red-500 overflow-y-scroll overflow-hidden no-scrollbar -mt-10"> 
      <div className="top-bar md:flex md:mt-10 justify-between">
        <Totalscore score={score} />
        <Numberselector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>


      <Rolldice currentDice={currentDice} rollDice={rollDice} />

      <div className="buttons flex flex-col justify-center items-center ">
        <button
          className="reset-score text-2xl px-14 mt-10 py-2 border border-5 border-black bg-black rounded-lg text-white font-normal hover:bg-white hover:text-black duration-300
     ease-linear"
          onClick={resetScore}
        >
          Reset Score
        </button>
        <button
          className="show-rules text-2xl px-14 mt-2 py-2 border border-5 border-black bg-white rounded-lg text-black font-normal hover:bg-black hover:text-white duration-300 ease-linear"
          onClick={showRules}
        >
          Show Rules
        </button>
      </div>

      {showrules && <Rules hideRules={hideRules} />}
    </main>
  );
};

export default Gameplay;
