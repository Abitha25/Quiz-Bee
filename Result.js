import React from "react";

const Result = ({score, playAgain,msg}) => (
  <div className="score-board">
    <div className="score">You scored {score} / 5 correct answers!{msg}
    </div>
    <button className="playBtn" onClick={playAgain}>
      Play again!
    </button>
  </div>
);

export default Result;
