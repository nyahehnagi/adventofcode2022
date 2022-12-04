import React, { ReactElement } from "react";

const CampCleanup = ({ data }: IData): ReactElement => {

  const lines: string[] = data.split("\n");

  const calculateCount = (): [number, number] => {
    let overlaps = 0;
    let partialOverlaps = 0;
    for (const line of lines) {
      const pairs = line.split(",");
      const a = pairs[0].split("-");
      const b = pairs[1].split("-");
      const [as, ae, bs, be] = [+a[0], +a[1], +b[0], +b[1]];
    
      if ((as <= bs && ae >= be) || (as >= bs && ae <= be)) overlaps++;
      if (ae >= bs && be >= as) partialOverlaps++;
    }
    console.log(overlaps);
    return [overlaps, partialOverlaps]

  };

  return (
    <div>
      <h2>Day 4: Camp Cleanup</h2>
      <div>The total pairs that contain the other - Part 1: {calculateCount()[0]}</div>
      <div>The total pairs that overlap - Part 1: {calculateCount()[1]}</div>
    </div>
  );
};

interface IData {
  data: string;
}

export default CampCleanup;
