source: https://daveceddia.com/react-getting-started-tutorial/

# Introducton

---

React is a UI library created by Facebook. It helps you create interactive web
applications made up of **components**.

A component is written as a plain JavaScript function... React supports a special syntax
called JSX, which looks a lot like HTML, but it is turned into real JavaScript code by a
compiler.

A web page is made up of components laid out in a nested “tree” structure. Just like
HTML elements can contain other elements, React components can contain other components
(and native elements like `div`s and `button`s).

One of the defining features of React is the idea of **one-way data flow**...

In the one-way data flow model, data is only ever passed _down_ the tree, from a
component to its children... With React you’d pass that data into the top-level
component, and that one would pass it down, and so on.

... JSX is heavily inspired by HTML (with the you-must-close-every-tag strictness of
XML)...

# `01/hello-world`

---

in the stock Create React App config, Webpack is what kicks off Babel

Before React runs, ... [Babel] converts the JSX into function calls.

1. **This code is pure JavaScript.** At the end of the day, the fancy JSX syntax turns
   into regular JS... Outside of the JSX syntax, there’s not much “React specific” code
   in React apps.

2. **You don’t call your own components; React does.** _React_ is responsible for
   calling your component function. It’ll do that at render time – in other words,
   somewhere in the depths of the `ReactDOM.render` function,

This idea that React is responsible for calling your components means that it is able to
run some setup/teardown code before and after. You’ll see why that matters when we talk
about Hooks in a bit.
