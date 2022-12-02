import React, { ReactElement } from "react";
import Calories from "../Calories/Calories";
import RPSGame from "../RPSGame/RPSGame";
import day1data from '/data/day1.txt';
import day2 from '/data/day2.txt';


const App = ():ReactElement => {
  return (
    <div>
      <h1>Advent of Code 2022</h1>
      <Calories data={day1data}/>
      <RPSGame data={day2}/>
    </div>
    
  );
};

export default App;
