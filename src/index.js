import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Room = () => {
  const [lightSwitch, setLightSwitch] = useState(true);

  return (
    <div className="room">
      The lights in this room are {lightSwitch ? "ON" : "OFF"}.
    </div>
  );
};

ReactDOM.render(<Room />, document.getElementById("root"));
