import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Room = () => {
  const [lightSwitch, setLightSwitch] = useState(true);
  const [temperature, setTemperature] = useState(22);

  /*
  FYI!! when you pass functions to props,
  [be carefuly] that you don’t inadvertently [pass a] call [of] the function [instead]:
  - Wrapping with an arrow function delays execution until the click
  - Unwrapped call ... will happen before the button is even rendered!
  */
  const brightness = lightSwitch ? "lit" : "dark";
  return (
    <div className={`room ${brightness}`}>
      The room is {brightness}.
      <br />
      <button onClick={() => setLightSwitch(!lightSwitch)}>flip</button>
      <br />
      <button onClick={() => setLightSwitch(true)}>ON</button>
      <button onClick={() => setLightSwitch(false)}>OFF</button>
      <br />
      <button onClick={() => setTemperature(temperature - 1)}>-</button>
      The temperature is {temperature}.
      <button onClick={() => setTemperature(temperature + 1)}>+</button>
    </div>
  );
};

ReactDOM.render(<Room />, document.getElementById("root"));
