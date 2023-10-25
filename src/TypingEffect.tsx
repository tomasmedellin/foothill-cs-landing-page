// =====================
// TypingEffect Component
// This component creates a typing animation effect for a set of words.
// =====================
import React, { useState, useEffect } from "react";
import "./TypingEffect.css";

// List of words to be animated through the typing effect.
const words = ["students", "hackers", "programmers"];

const TypingEffect: React.FC = () => {
  // State variables for the current word, its substring, and the typing direction.
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    // Logic for the typing effect (typing, pausing, backspacing).
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      setTimeout(() => {
        setReverse(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setSubIndex(0);
      }, 250 * words[index].length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
    }, 200);

    // Cleanup function to clear the timeout.
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="typing-effect">
      <h1>Foothill Computer Science Club</h1>
      <h1>
        where&nbsp;
        <span className="typed-text">
          {words[index].substring(0, subIndex)}
        </span>
      </h1>
      <h1>meet up and hang out</h1>
    </div>
  );
};

export default TypingEffect;
