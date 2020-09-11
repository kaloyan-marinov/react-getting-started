import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/*
What makes this function a *component* is the fact that
it returns something that React can render.
That something is JSX.
*/
function App() {
  return (
    <div className="container">
      Hello, <strong>John Doe</strong>!
      <hr />
      <h4>What would you like to do today?</h4>
      <ul>
        <li>work</li>
        <li>relax</li>
        <li>do sports</li>
      </ul>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Task Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>17</td>
            <td>Meet friend for lunch</td>
          </tr>
          <tr>
            <td>30</td>
            <td>Cook dinner</td>
          </tr>
          <tr>
            <td>33</td>
            <td>Do laundry</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <h4>Is 4 + 10 equal to (computed_in_curly_braces=){5 + 10}?</h4>
    </div>
  );
}

/*
But how does React know where in the DOM to put this div on the page?

[The next line]
instructs React to call the `Hi` function,
gets the returned JSX,
and inserts the corresponding HTML elements into the document
under the element with id “root”. 
*/
ReactDOM.render(<App />, document.querySelector("#root"));
