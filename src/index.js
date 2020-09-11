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

/*
But how does React know where in the DOM to put this div on the page?

[The next line]
instructs React to call the `Hi` function,
gets the returned JSX,
and inserts the corresponding HTML elements into the document
under the element with id “root”. 
*/
ReactDOM.render(<Hi />, document.querySelector("#root"));
