import React from "react";
import ReactDOM from "react-dom";

/*
What makes this function a *component* is the fact that
it returns something that React can render.
That something is JSX.
*/
function Hi() {
  return <div>Hello world!</div>;
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
