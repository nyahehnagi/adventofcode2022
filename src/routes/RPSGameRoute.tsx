import React, { ReactElement } from "react";
import RPSGame from "../components/RPSGame/RPSGame";
import day2 from "/data/day2.txt";

const RPSGameRoute = (): ReactElement => {
  return (
    <>
      <RPSGame data={day2} />
    </>
  );
};

export default RPSGameRoute;
