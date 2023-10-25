// =====================
// Bottom Component
// This component renders the footer of the application, containing icon placeholders (or actual icons).
// =====================
import React from 'react';
import './Bottom.css';

const Bottom: React.FC = () => {
  // Render the footer with icon placeholders (links).
  return (
    <div className="bottom">
      <div className="bottom-icons">
        <a href="https://discord.gg/vkmuQsme4x" target="_blank" rel="noopener noreferrer" className="icon-placeholder">Discord</a>
        <span className="icon-placeholder">Twitter</span>
      </div>
    </div>
  );
};

export default Bottom;
