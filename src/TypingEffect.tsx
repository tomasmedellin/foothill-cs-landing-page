// =====================
// TypingEffect Component
// This component creates a typing animation effect for a set of words.
// =====================
import React, { useState, useEffect } from "react";
import "./TypingEffect.css";

// List of words to be animated through the typing effect.
const words = ["students", "hackers", "programmers"];

const cursor = "▂";

const cursor_blinks = 3;

const TypingEffect: React.FC = () => {
  // State variables for the current word, its substring, and the typing direction.
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [current_cursor, setCursor] = useState(cursor);

  useEffect(() => {
    // Logic for the typing effect (typing, pausing, backspacing).
    if (index === words.length) return;

    if (subIndex === words[index].length && direction === 1) {
      setDirection(0);
      for (let i = 1; i <= cursor_blinks; i++) {
        setTimeout(() => {
          setCursor(" ");
        }, 1000 * i - 500);
        setTimeout(() => {
          setCursor(cursor);
        }, 1000 * i);
      }
      setTimeout(() => {
        setDirection(-1);
      }, 1000 * cursor_blinks);
      setTimeout(() => {
        setDirection(1);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setSubIndex(0);
      }, 225 * words[index].length + 1000 * cursor_blinks + 500);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + direction);
    }, 200);

    // Cleanup function to clear the timeout.
    return () => clearTimeout(timeout);
  }, [subIndex, index, direction, current_cursor]);

  return (
    <div className="typing-effect">
      <h1 className="club-name">Foothill Computer Science&nbsp;Club</h1>
      <h2 className="tagline">
        where&nbsp;
        <span className="typed-text">
          {words[index].substring(0, subIndex) + current_cursor}
        </span>
      </h2>
      <h2 className="tagline">meet up and hang out</h2>
    </div>
  );
};

export default TypingEffect;
