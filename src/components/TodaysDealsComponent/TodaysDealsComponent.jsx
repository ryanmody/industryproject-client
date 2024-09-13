import React, { useState } from 'react';
import './TodaysDealsComponent.scss'; // Import the SCSS file for styling

function SuggestionBox() {
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const [fadeIn, setFadeIn] = useState(false);

  const handleClick = () => {
    // Start loading
    setLoading(true);
    setSuggestion('');
    setFadeIn(false);

    // Simulate delay (3 seconds) for loading
    setTimeout(() => {
      setLoading(false);
      setSuggestion('Suggestion: charger was well made and kept my phone charged!');

      // Small delay to allow the suggestion to render before applying fade-in
      setTimeout(() => {
        setFadeIn(true);
      }, 10);  // Slight delay before triggering the fade-in effect
    }, 3000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
      <input type="text" placeholder="Type something..." />
      <button onClick={handleClick}>Submit</button>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
        {loading && <span className="loading-icon" style={{ marginRight: '10px' }}>🔄 Loading...</span>}
        {suggestion && (
          <div className={`suggestion-box ${fadeIn ? 'fade-in' : ''}`}>
            {suggestion}
          </div>
        )}
      </div>
    </div>
  );
}

export default SuggestionBox;
