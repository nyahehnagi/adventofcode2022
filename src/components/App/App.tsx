import React, { ReactElement } from "react";
import { Routes, Route } from "react-router-dom"
import CaloriesRoute from "../../routes/CaloriesRoute";
import CampCleanupRoute from "../../routes/CampCleanupRoute";
import RucksacksRoute from "../../routes/RucksacksRoute";
import RPSGameRoute from "../../routes/RPSGameRoute";
import StackingRoute from "../../routes/StackingRoute";
import ReceiverRoute from "../../routes/ReceiverRoute";
import Home from "../Home/Home";

const App = ():ReactElement => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="calories" element={ <CaloriesRoute/> } />
        <Route path="campcleanup" element={ <CampCleanupRoute/> } />
        <Route path="rucksacks" element={ <RucksacksRoute/> } />
        <Route path="rpsgame" element={ <RPSGameRoute/> } />
        <Route path="stacking" element={ <StackingRoute/> } />
        <Route path="receiver" element={ <ReceiverRoute/> } />
      </Routes>
    </div>

  );
};

export default App;
