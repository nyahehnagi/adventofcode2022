import React, { ReactElement } from "react";
import { Routes, Route } from "react-router-dom"
import CaloriesRoute from "../../routes/CaloriesRoute";
import CampCleanupRoute from "../../routes/CampCleanupRoute";
import Home from "../Home/Home";

import RPSGame from "../RPSGame/RPSGame";
import Rucksacks from "../Rucksacks/Rucksacks";
import day2 from '/data/day2.txt';
import day3 from '/data/day3.txt';


// TODO add routing
const App = ():ReactElement => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="calories" element={ <CaloriesRoute/> } />
        <Route path="campcleanuo" element={ <CampCleanupRoute/> } />
      </Routes>
    </div>

  );
};

export default App;
