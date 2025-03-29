import React, { useState } from "react";
import "./MathExercise.css"; // Import the CSS file for styling

const MathExercise = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [userInput, setUserInput] = useState("");
    const [feedback, setFeedback] = useState("");

    // Function to generate random addition problems
    const generateProblem = () => {
        const num1 = Math.floor(Math.random() * 11); // Random number between 0 and 10
        const num2 = Math.floor(Math.random() * (21 - num1)); // Ensure sum doesn't exceed 20
        const correctAnswer = num1 + num2;

        setQuestion(`${num1} + ${num2}`);
        setAnswer(correctAnswer);
        setUserInput("");
        setFeedback("");
    };

    // Function to check the answer
    const checkAnswer = () => {
        if (parseInt(userInput) === answer) {
            setFeedback("✅ Correct!");
            setTimeout(() => {
                generateProblem(); // Automatically generate a new problem
            }, 1000); // Add a short delay before generating the next problem
        } else {
            setFeedback(`❌ Incorrect. The correct answer is ${answer}`);
        }
    };

    return (
        <div className="math-exercise-container">
            <h2>Math Exercises</h2>
            <button onClick={generateProblem}>Generate Exercise</button>

            {question && (
                <div>
                    <h3>Solve: {question}</h3>
                    <input
                        type="number"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                    />
                    <button onClick={checkAnswer}>Check Answer</button>
                    <p>{feedback}</p>
                </div>
            )}
        </div>
    );
};

export default MathExercise;