import React, { useState, useEffect } from "react";

//include images into your bundle

//create your first component
const Trafficlight = () => {
  const [color, setColor] = useState("Red");

  return (
    <div className="trafficlight">
        <div 
	         onClick={() => setColor("red")}
	         className= {
			 "light red" + (color === "red" ? " glow " : "")}>
	        </div>
        <div 
	         onClick={() => setColor("yellow")}
	         className={
			 "light yellow" + (color === "yellow" ? " glow " : "")}>
	        </div>
        <div 
	         onClick={() => setColor("green")}
	         className={
			 "light green" + (color === "green" ? " glow " : "")}>
	        </div>
    </div>
  );
};

export default Trafficlight;
