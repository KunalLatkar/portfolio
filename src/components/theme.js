import React from 'react';
import './theme.css';

export default function ThemeToggle({ theme, onToggle }) {
  const getPosition = () => {
    if (theme === 'morning') return 0;
    if (theme === 'evening') return 1;
    return 2; // night
  };

  const position = getPosition();

  return (
    <div className="theme-switch-wrapper">
      <div className="theme-switch" onClick={onToggle}>
        <div className={`slider-pos pos-${position}`}>
          <span className="theme-icon">
            {theme === 'morning' ? '☀️' : theme === 'evening' ? '🌗' : '🌑'}
          </span>
        </div>
      </div>
      <span className="theme-label">
        {theme === 'morning' ? '☀️ Morning' : theme === 'evening' ? '🌗 Evening' : '🌑 Night'}
      </span>
    </div>
  );
}
