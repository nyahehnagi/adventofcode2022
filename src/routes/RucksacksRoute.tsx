import React, { ReactElement } from "react";
import Rucksacks from "../components/Rucksacks/Rucksacks";
import day3 from "/data/day3.txt";

const RucksacksRoute = (): ReactElement => {
  return (
    <>
      <Rucksacks data={day3} />
    </>
  );
};

export default RucksacksRoute;
