import React, { ReactElement } from "react";
import Calories from "../Calories/Calories";
import RPSGame from "../RPSGame/RPSGame";
import Rucksacks from "../Rucksacks/Rucksacks";
import day1data from '/data/day1.txt';
import day2 from '/data/day2.txt';
import day3 from '/data/day3.txt';


// TODO add routing
const App = ():ReactElement => {
  return (
    <div>
      <h1>Advent of Code 2022</h1>
      <Calories data={day1data}/>
      <RPSGame data={day2}/>
      <Rucksacks data={day3}/>
    </div>
    
  );
};

export default App;
