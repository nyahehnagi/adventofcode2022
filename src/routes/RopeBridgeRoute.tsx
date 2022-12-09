import React, { ReactElement } from "react";
import RopeBridge from "../components/RopeBridge/RopeBridge";
import data from "/data/day9.txt";

const RopeBridgeRoute = (): ReactElement => {
  return (
    <>
      <RopeBridge data={data} />
    </>
  );
};

export default RopeBridgeRoute;
