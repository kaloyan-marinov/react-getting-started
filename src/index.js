import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/*
When React renders a component, it passes the component’s props (short for “properties”)
as the first argument, as an object. The props object is just a plain JS object...

Inside a component that receives multiple props,
each one will be a separate property on the “props” object that’s passed in.
*/
function App(props) {
  return (
    <div className="container">
      Hello, {props.firstName} {props.lastName}!
    </div>
  );
}

/*
You might then wonder, where do props come from? How do we pass them in?

You, the developer, get to pass props to a component when it is rendered.
*/
ReactDOM.render(
  <App firstName={"John"} lastName={"Doe"} />,
  document.querySelector("#root")
);
