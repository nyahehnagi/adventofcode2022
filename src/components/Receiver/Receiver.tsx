import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const Receiver = ({ data }: IData): ReactElement => {
  // From Stackoverflow
  // https://stackoverflow.com/questions/57001515/sliding-window-over-array-in-javascript
  // https://stackoverflow.com/questions/52219405/how-to-create-windowed-slice-of-array-in-javascript
  function toWindows(inputArray: string[], size: number): string[][] {
    if (inputArray.length < size || size <= 0) {
      return [];
    }

    let arrayLength = inputArray.length;
    let result = [];
    for (let i = 0; i < arrayLength; i++) {
      let slicedArray = inputArray.slice(i, size + i);
      if (slicedArray && slicedArray.length === size) {
        result.push(slicedArray);
        continue;
      }
      break;
    }
    return result;
  }

  // test all items in array are unique
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  const isUnique = (arr: string[]): boolean => {
    return arr.length === new Set(arr).size;
  };

  // return index of first unique array in an array of arrays
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

  const getCharactersCount = (chars: string[], size: number): number => {
    const windows = toWindows(chars, size);
    const firstUnique = findFirstUnique(windows);
    return firstUnique + size;
  };

  return (
    <div>
      <h2>Day 6: Receiver Data Stream</h2>
      <div>
        Number of characters that need to be processed before the first
        start-of-packet marker is detected - 4:{" "}
        {getCharactersCount([...data], 4)}
      </div>
      <div>
        Number of characters that need to be processed before the first
        start-of-packet marker is detected - 14:{" "}
        {getCharactersCount([...data], 14)}
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
