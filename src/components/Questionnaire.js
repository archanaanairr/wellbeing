import React, { useState } from 'react';
import '../App.css';

const questions = [
  "Over the past two weeks, how often have you felt down, depressed, or hopeless?",
  "Over the past two weeks, how often have you had little interest or pleasure in doing things you usually enjoy?",
  "Do you have trouble sleeping or sleeping too much?",
  "Have you felt tired or had little energy most days?",
  "Do you have trouble concentrating on tasks, such as reading the newspaper or watching TV?",
  "Have you experienced significant changes in your appetite or weight?",
  "Have you felt that you are a failure or have let yourself or others down?",
  "Have you had thoughts that you would be better off dead or of hurting yourself in some way?",
  "Do you find it difficult to complete daily tasks or responsibilities due to feeling overwhelmed?",
  "Do you feel anxious or worried frequently?"
];

const Questionnaire = ({ onScoreUpdate }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));

  const handleChange = (e, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    return answers.reduce((acc, value) => acc + parseInt(value, 10), 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = calculateScore();
    onScoreUpdate(score);
  };

  return (
    <form className="questionnaire" onSubmit={handleSubmit}>
      {questions.map((question, index) => (
        <div key={index}>
          <label>{question}</label>
          <select value={answers[index]} onChange={(e) => handleChange(e, index)} required>
            <option value="" disabled>Select</option>
            <option value="0">Not at all</option>
            <option value="1">Several days</option>
            <option value="2">More than half the days</option>
            <option value="3">Nearly every day</option>
          </select>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Questionnaire;
