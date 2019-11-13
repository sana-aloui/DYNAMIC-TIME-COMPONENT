import React from "react";

function Time({ mis }) {
  let s = mis / 1000;
  let hours = Math.floor(s / (60 * 60));
  let restm = s % (60 * 60);
  let minutes = Math.floor(restm / 60);
  let rests = restm % 60;
  return (
    <div>
      <div className="value">
        <span>{String(hours).padStart(2, "0")}:</span>

        <span>{String(minutes).padStart(2, "0")}:</span>

        <span>{String(rests).padStart(2, "0")}</span>
      </div>
      <div className="name">
        <p> Hour </p>
        <p> Minute </p>
        <p> Second </p>

      </div>
    </div>
  );
}
export default Time;
