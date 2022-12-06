import React, { ReactElement } from "react";
import Receiver from "../components/Receiver/Receiver";
import data from "/data/day6.txt";

const ReceiverRoute = (): ReactElement => {
  return (
    <>
      <Receiver data={data} />
    </>
  );
};

export default ReceiverRoute;
