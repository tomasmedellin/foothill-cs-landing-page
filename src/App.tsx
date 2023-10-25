// =====================
// App Component
// This is the main component that wraps and renders the primary UI elements of the application.
// hey im a humanities major pls keep your expectations low - Tomas
// =====================
import React from 'react';
import './App.css';
import TypingEffect from './TypingEffect';
import Bottom from './Bottom';

function App() {
  // Render the TypingEffect and Bottom components inside a parent container.
  return (
    <div className="App">
      <TypingEffect />
      <Bottom />
    </div>
  );
}

export default App;
