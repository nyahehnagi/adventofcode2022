import React, { ReactElement } from "react";
import Calories from "../Calories/Calories";
import day1data from '/data/day1.txt';

const App = ():ReactElement => {
  return (
    <div>
      <h1>Advent of Code 2022</h1>
      <Calories data={day1data}/>
    </div>
    
  );
};

export default App;
