import React, { ReactElement } from "react";
import Stacking from "../components/Stacking/Stacking";
import data from "/data/day5.txt";

const StackingRoute = (): ReactElement => {
  return (
    <>
      <Stacking data={data} />
    </>
  );
};

export default StackingRoute;
