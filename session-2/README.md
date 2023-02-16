# Session 2 - Functional components props 

## Creating functional components

Functional components are a way to define React components using just a function. They are simpler and often more concise than class components, and have been popularized with the introduction of React Hooks.

## Props

In React, "props" (short for "properties") is a mechanism for passing data from a parent component to a child component. Props are essentially a way to customize or configure a component based on the context in which it is being used.

## Fragments 

Fragments do not render in DOM. It is a way to group together a list of child elements without adding an extra node to the DOM. Fragments are useful when you have a list of elements that you want to render without having to wrap them in a parent container element.

`useState` is a hook that allows you to add state to a functional component. State is used to store and manage data that can change over time, such as user input, server responses, or the current page of a pagination component.

To use useState, you need to import it from the react module:

`import React, { useState } from 'react';`

The useState hook returns an array with two elements: the current state value, and a function to update the state.

## Method from Parent Component to Child Component as props

In ReactJS, you can pass a method from a parent component to a child component as a prop. This allows the child component to call the method and update the state of the parent component, or perform other actions.

