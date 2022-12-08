import React, { ReactElement } from "react";
import Treetops from "../components/Treetops/Treetops";
import data from "/data/day8.txt";

const TreetopsRoute = (): ReactElement => {
  return (
    <>
      <Treetops data={data} />
    </>
  );
};

export default TreetopsRoute;
