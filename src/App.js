import React, { useState } from 'react';
import './App.css';  // Corrected to match the file name
import AssessmentHeading from './components/AssessmentHeading';
import Questionnaire from './components/Questionnaire';
import Recommendations from './components/Recommendations';

const App = () => {
  const [score, setScore] = useState(null);

  const handleScoreUpdate = (calculatedScore) => {
    setScore(calculatedScore);
  };

  return (
    <div>
      <AssessmentHeading />
      <Questionnaire onScoreUpdate={handleScoreUpdate} />
      {score !== null && <Recommendations score={score} />}
    </div>
  );
};

export default App;



