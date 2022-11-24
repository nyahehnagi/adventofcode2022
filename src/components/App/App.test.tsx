import { render } from '@testing-library/react';
import React from 'react';
import App from "./App"; 

describe ("App", () => {
  it ("should render", () => {
    expect (App).toBeDefined ();
  });

  it ("should render the text Advent of Code 2022", () => {
    expect (render (<App />).baseElement.textContent).toBe ("Advent of Code 2022");
  } );

});
