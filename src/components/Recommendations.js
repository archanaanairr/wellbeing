import React from 'react';
import '../App.css';

const Recommendations = ({ score }) => {
  let recommendationsText = '';
  let link = '';

  if (score < 10) {
    recommendationsText = 'You seem to be doing well, but maintaining a healthy lifestyle is important.';
    link = 'https://timesofindia.indiatimes.com/readersblog/rambling-chaos/healthy-lifestyle-45897/';
  } else if (score <= 20) {
    recommendationsText = 'Consider exploring treatment options to support your mental well-being.';
    link = 'https://www.medicalnewstoday.com/articles/321385#treatment-options';
  } else {
    recommendationsText = 'It’s important to address your symptoms. Understanding the stages of depression might help.';
    link = 'https://www.medicalnewstoday.com/articles/stages-of-depression';
  }

  return (
    <div className="recommendations">
      <div className="score-display">
        <h2>Your Score: {score}</h2>
      </div>
      <h2>Recommendations</h2>
      <ul>
        <li>{recommendationsText}</li>
      </ul>
      <a href={link} className="resources-button" target="_blank" rel="noopener noreferrer">
        Explore Resources
      </a>
    </div>
  );
};

export default Recommendations;
