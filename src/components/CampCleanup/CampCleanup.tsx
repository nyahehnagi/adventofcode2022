import React, { ReactElement } from "react";

const CampCleanup = ({ data }: IData): ReactElement => {

  return (
    <div>
      <h2>Day 4: Camp Cleanup</h2>
    </div>
  );
};

interface IData {
  data: string;
}

export default CampCleanup;
