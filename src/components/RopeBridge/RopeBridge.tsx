import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const RopeBridge = ({ data }: IData): ReactElement => {

  return (
    <div>
      <h2>Day 9: Rope Bridge</h2>
      <div>
        <>
        {console.time('Part1')}
        Part1
        {console.timeEnd('Part1')}
        </>
      </div>
      <div>
        <>
        Part 2
        </>
      </div>
      <br></br>
      <Link to="/">Back</Link>
    </div>
  );
};

interface IData {
  data: string;
}

export default RopeBridge;
