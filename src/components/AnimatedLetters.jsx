import React from "react";

const AnimatedLetters = ({ letterClass, letterArray, idx }) => {
  return (
    <span>
      {letterArray.map((letter, index) => {
        return (
          <span
            className={letterClass}
            key={index + idx}
            style={{ "--delay": (index + idx) / 10 + "s" }}
          >
            {letter}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedLetters;
