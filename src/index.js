import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/*
When React renders a component, it passes the component’s props (short for “properties”)
as the first argument, as an object. The props object is just a plain JS object...

Inside a component that receives multiple props,
each one will be a separate property on the “props” object that’s passed in.
*/
const App = ({ firstName, lastName }) => {
  /*
  This is JavaScript’s destructuring syntax (added in ES6), not a React thing.

  What that says is: “I expect the first argument will be an object.
  Please extract the ‘firstName’ and 'lastName' properties out of it,
  and give them to me as variable called ‘firstName’ and 'lastName', respectively.”
  */
  return (
    <div className="container">
      Hello, {firstName} {lastName}!
    </div>
  );
};

const MediaCard = ({ title, body, imageUrl }) => {
  // Can't return all 3 elements at once - need to wrap them in a single parent element!
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <img src={imageUrl} />
    </div>
  );
};

const dogImage =
  "./static/depositphotos_44339023-stock-photo-american-staffordshire-terrier-sitting-isolated.jpg";

const Gate = ({ isOpen }) => {
  return <div>This gate is {isOpen ? "OPEN" : "CLOSED"}.</div>;
};

/*
You might then wonder, where do props come from? How do we pass them in?

You, the developer, get to pass props to a component when it is rendered.
*/
ReactDOM.render(<Gate isOpen={false} />, document.querySelector("#root"));
