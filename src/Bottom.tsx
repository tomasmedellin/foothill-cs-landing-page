// ======================
// Bottom (Footer) Component
// This component displays the footer section of the landing page.
// ======================

import React from 'react';
import './Bottom.css';

const Bottom: React.FC = () => {
  // This component returns a div element with the "bottom" class.
  // The footer contains a div with the "bottom-icons" class which holds the icon links.
  return (
    <div className="bottom">
      <div className="bottom-icons">
        {/* Discord link */}
        <a href="https://discord.gg/vkmuQsme4x" target="_blank" rel="noopener noreferrer">
          {/* Discord image icon */}
          <img src="https://www.freeiconspng.com/thumbs/discord-icon/silver-discord-token-icon-16.png" alt="Discord Icon" className="icon-placeholder" />
        </a>
      </div>
    </div>
  );
};

// Export the Bottom component to be used in other parts of the app.
export default Bottom;
