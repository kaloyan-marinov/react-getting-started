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

# `02/dynamic-and-reusable-components`

---

to customize a React component ... pass an argument with your dynamic stuff, and then
the component can do what it wants with that stuff.

Passing props is very similar to setting attributes on an HTML tag. A lot of JSX syntax
is borrowed from HTML.

Here’s a cool thing about props: you can pass whatever you want into them.

Be intentional about what type you’re passing in, because it will come out as the same
type!

This is a difference from HTML (where everything is a string) and some other
frameworks... React doesn’t parse props at all – they get passed through untouched,
just like function arguments.

[Using] JavaScript’s destructuring syntax [in the signature of React components is]
Useful for documentation purposes.

# `03/using-state-in-react-components`

---

React has a feature called **state** which allows components to keep track of values that can change

In order to add state to [a React] component, we can either turn it into a **class component**, or add state directly to the function with **hooks**.

### 1. How `useState` Works

- If you’ve been coding outside of React for any length of time, you likely know about variable scope: a variable declared at the top of a function will be wiped out, erased, forgotten as soon as that function returns.

- So... how is React able to remember the state in-between calls to the component?

- Before React calls your component, it sets up an array to keep track of which hooks get called. When you call `useState` in the component, React uses that array behind the scenes to keep track of its initial value, and the value as it changes over time.

- Remember I mentioned earlier that React is responsible for calling your component at render time? And that that means React can do some setup work beforehand? Keeping track of hooks is part of that work.

### 2. How the (state-)setter returned by `useState` works

The (state-)setter returned by `useState` has 2 jobs:

- first it changes the state
- then it re-renders the component

If you just change the [state] variable directly, React has no way of knowing that it changed, and it won’t re-render. Remember that the [state] is a regular old variable – not a special React thing! It will go out of scope at the end of the function and any changes to it would be lost.

So that’s why it’s important to call the (state-)setter, so that React can update the value of that hook’s state behind the scenes.
