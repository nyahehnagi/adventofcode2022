import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const Receiver = ({ data }: IData): ReactElement => {
  // convert string to array of chars (spread syntax)
  const chars = [...data];

  // From Stackoverflow
  // https://stackoverflow.com/questions/57001515/sliding-window-over-array-in-javascript
  function toWindows(inputArray: string[], size: number): string[][] {
    return Array.from(
      { length: inputArray.length - (size - 1) }, //get the appropriate length
      (_, index) => inputArray.slice(index, index + size) //create the windows
    );
  }

  // test all items in array are unique
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  const isUnique = (arr: string[]): boolean => {
    return arr.length === new Set(arr).size;
  };

  // return index of first unique item in toWindows(chars, 4)
  const findFirstUnique = (arr: string[][]): number => {
    let index = 0;
    for (const item of arr) {
      if (isUnique(item)) {
        return index;
      }
      index++;
    }
    return -1;
  };

  const getCharactersCount = (): number => {
    const windows = toWindows(chars, 4);
    const firstUnique = findFirstUnique(windows);
    return firstUnique + 4;
  };

  return (
    <div>
      <h2>Day 6: Receiver Data Stream</h2>
      <div>
        Number of characters that need to be processed before the first
        start-of-packet marker is detected: {getCharactersCount()}
      </div>
      <br></br>
      <Link to="/">Back</Link>
    </div>
  );
};

interface IData {
  data: string;
}

export default Receiver;
