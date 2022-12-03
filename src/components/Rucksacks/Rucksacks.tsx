import React, { ReactElement } from "react";

const Rucksacks = ({ data }: IData): ReactElement => {
  const lines: string[] = data.split("\n");
  const characterValues: { [key: string]: number } = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52,
  };

  // split a string in half
  const splitString = (str: string): [string, string] => {
    const middle = Math.ceil(str.length / 2);
    const left = str.slice(0, middle);
    const right = str.slice(middle);
    return [left, right];
  };

  //find a character which appears in both strings
  const findCommonCharacter = (str1: string, str2: string): string => {
    const str1Array: string[] = str1.split("");
    const str2Array: string[] = str2.split("");
    const commonCharacters: string[] = str1Array.filter((char) =>
      str2Array.includes(char)
    );
    return commonCharacters[0];
  };

  //map over the lines and sum the values of the common characters
  const sumCommonCharacterValues = (): number => {
    let sum: number = 0;
    for (let i = 0; i < lines.length; i++) {
      const line: string = lines[i];
      const [left, right] = splitString(line);
      const commonCharacter: string = findCommonCharacter(left, right);
      sum += characterValues[commonCharacter];
    } //end for
    return sum;
  };

  // find a common character that appears in all 3 strings
  const findCommonCharacterInThreeStrings = (
    str1: string,
    str2: string,
    str3: string
  ): string => {
    const str1Array: string[] = str1.split("");
    const str2Array: string[] = str2.split("");
    const str3Array: string[] = str3.split("");
    const commonCharacters: string[] = str1Array.filter((char) =>
      str2Array.includes(char)
    );  
    const commonCharactersInThreeStrings: string[] = commonCharacters.filter(
      (char) => str3Array.includes(char)
    );
    return commonCharactersInThreeStrings[0];
  };

// get a group of 3 lines until the end of the array
  const getThreeLines = (index: number): [string, string, string] => {
    const line1: string = lines[index];
    const line2: string = lines[index + 1];
    const line3: string = lines[index + 2];
    return [line1, line2, line3];
  };

  // loop through the line array and get three lines at a time
  // find the common character in the three lines and sum the values
  const sumCommonCharacterValuesInThreeLines = (): number => {
    let sum: number = 0;
    for (let i = 0; i < lines.length; i += 3) {
      const [line1, line2, line3] = getThreeLines(i);
      const commonCharacter: string = findCommonCharacterInThreeStrings(
        line1,
        line2,
        line3
      );

      sum += characterValues[commonCharacter];
    } 
    return sum;
  };

  return (
    <div>
      <h2>Day 3: Rucksacks</h2>
      <div>
        Sum of item types that appears in both compartments of each rucksack:{sumCommonCharacterValues()}
      </div>
      <div>
        Sum of the priorities of the item types: {sumCommonCharacterValuesInThreeLines()}
      </div>
    </div>
  );
};

interface IData {
  data: string;
}

export default Rucksacks;
