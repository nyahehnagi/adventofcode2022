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
      // + sign in front of a string converts it to a number
      const [start1, end1, start2, end2] = [+a[0], +a[1], +b[0], +b[1]];
    
      if ((start1 <= start2 && end1 >= end2) || (start1 >= start2 && end1 <= end2)) overlaps++;
      if (end1 >= start2 && end2 >= start1) partialOverlaps++;
    }
    return [overlaps, partialOverlaps]

  };

  return (
    <div>
      <h2>Day 4: Camp Cleanup</h2>
      <div>The total pairs that contain the other - Part 1: {calculateCount()[0]}</div>
      <div>The total pairs that overlap - Part 2: {calculateCount()[1]}</div>
    </div>
  );
};

interface IData {
  data: string;
}

export default CampCleanup;
