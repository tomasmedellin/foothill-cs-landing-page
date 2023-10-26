// =====================
// TypingEffect Component
// This component creates a typing animation effect for a set of words.
// =====================
import React, { useState, useEffect } from "react";
import "./TypingEffect.css";

// List of words to be animated through the typing effect.
const words = ["students", "hackers", "programmers"];

const cursors = {"half": "▄", "full": "█"}

const cursor_blinks = 2;

const TypingEffect: React.FC = () => {
  // State variables for the current word, its substring, and the typing direction.
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [cursor, setCursor] = useState(cursors["half"]);

  useEffect(() => {
    // Logic for the typing effect (typing, pausing, backspacing).
    if (index === words.length) return;

    if (subIndex === words[index].length && direction === 1) {
      setDirection(0);
      for (let i = 1; i <= cursor_blinks; i++) {
        setTimeout(() => {
          setCursor(" ");
        }, (800 * i) - 400)
        setTimeout(() => {
          setCursor(cursors["half"]);
        }, 800 * i)  
      }
      setTimeout(() => {
        setDirection(-1);
      }, (800 * cursor_blinks) + 400)
      setTimeout(() => {
        setDirection(1);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setSubIndex(0);
      }, 225 * (words[index].length) + (800 * cursor_blinks) + 400);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (direction));
    }, 200);

    // Cleanup function to clear the timeout.
    return () => clearTimeout(timeout);
  }, [subIndex, index, direction, cursor]);

  return (
    <div className="typing-effect">
      <h1>Foothill Computer Science Club</h1>
      <h1>
        where&nbsp;
        <span className="typed-text">
          {words[index].substring(0, subIndex) + cursor}
        </span>
      </h1>
      <h1>meet up and hang out</h1>
    </div>
  );
};

export default TypingEffect;
