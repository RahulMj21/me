import React from "react";

const Loader = ({ setLoading }) => {
  return (
    <main className="loader" onAnimationEnd={() => setLoading(false)}>
      <div className="pacman">
        <div className="eater"></div>
        <div className="food" style={{ "--i": 0 }}></div>
        <div className="food" style={{ "--i": 1 }}></div>
        <div className="food" style={{ "--i": 2 }}></div>
      </div>
    </main>
  );
};

export default Loader;
