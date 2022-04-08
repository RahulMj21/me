import React, { useEffect, useState } from "react";

const AnimatedLetters = ({ letterClass, letterArray, idx }) => {
  return (
    <span>
      {letterArray.map((letter, index) => {
        return (
          <span className={`${letterClass} _${index + idx}`} key={index + idx}>
            {letter}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedLetters;
