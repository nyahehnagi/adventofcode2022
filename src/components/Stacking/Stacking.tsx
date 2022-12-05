import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const Stacking = ({ data }: IData): ReactElement => {
  // Starting data

  type Stack = string[];
  type Stacks = Stack[];

  const moves: string[] = data.split("\n");

  const performStackingPart1 = (): string => {
    const stack1: Stack = ["B", "Q", "C"];
    const stack2: Stack = ["R", "Q", "W", "Z"];
    const stack3: Stack = ["B", "M", "R", "L", "V"];
    const stack4: Stack = ["C", "Z", "H", "V", "T", "W"];
    const stack5: Stack = ["D", "Z", "H", "B", "N", "V", "G"];
    const stack6: Stack = ["H", "N", "P", "C", "J", "F", "V", "Q"];
    const stack7: Stack = ["D", "G", "T", "R", "W", "Z", "S"];
    const stack8: Stack = ["C", "G", "M", "N", "B", "W", "Z", "P"];
    const stack9: Stack = ["N", "J", "B", "M", "W", "Q", "F", "P"];
  
    const stacks: Stacks = [
      stack1,
      stack2,
      stack3,
      stack4,
      stack5,
      stack6,
      stack7,
      stack8,
      stack9,
    ];
    // Initial Setup
    //loop through each line in moves
    for (const move of moves) {
      // replace move with blank space
      let parsedMove = move.replace("move ", "");
      // replace "from" with comma
      parsedMove = parsedMove.replace(" from ", ",");
      // replace "to" with comma
      parsedMove = parsedMove.replace(" to ", ",");

      const moveArray = parsedMove.split(",");
      const cratesToMove = parseInt(moveArray[0]);
      const fromIndex = parseInt(moveArray[1]) - 1;
      const toIndex = parseInt(moveArray[2]) - 1;

      // pop n items from the stack to move from
      const spliceStart =
        stacks[fromIndex].length - cratesToMove < 0
          ? 0
          : stacks[fromIndex].length - cratesToMove;
      const poppedItems = stacks[fromIndex]
        .splice(spliceStart, cratesToMove)
        .reverse();
      // push n items to the stack to move to
      stacks[toIndex].push(...poppedItems);
    }
    // get the last item from each stack
    const lastItems = stacks.map((stack) => stack[stack.length - 1]);
    //convert last items to string
    return lastItems.join("");
  };

  const performStackingPart2 = (): string => {
    // Initial Setup
    const stack1: Stack = ["B", "Q", "C"];
    const stack2: Stack = ["R", "Q", "W", "Z"];
    const stack3: Stack = ["B", "M", "R", "L", "V"];
    const stack4: Stack = ["C", "Z", "H", "V", "T", "W"];
    const stack5: Stack = ["D", "Z", "H", "B", "N", "V", "G"];
    const stack6: Stack = ["H", "N", "P", "C", "J", "F", "V", "Q"];
    const stack7: Stack = ["D", "G", "T", "R", "W", "Z", "S"];
    const stack8: Stack = ["C", "G", "M", "N", "B", "W", "Z", "P"];
    const stack9: Stack = ["N", "J", "B", "M", "W", "Q", "F", "P"];
  
    const stacks: Stacks = [
      stack1,
      stack2,
      stack3,
      stack4,
      stack5,
      stack6,
      stack7,
      stack8,
      stack9,
    ];
    //loop through each line in moves
    for (const move of moves) {
      // replace move with blank space
      let parsedMove = move.replace("move ", "");
      // replace "from" with comma
      parsedMove = parsedMove.replace(" from ", ",");
      // replace "to" with comma
      parsedMove = parsedMove.replace(" to ", ",");

      const moveArray = parsedMove.split(",");
      const cratesToMove = parseInt(moveArray[0]);
      const fromIndex = parseInt(moveArray[1]) - 1;
      const toIndex = parseInt(moveArray[2]) - 1;

      // pop n items from the stack to move from
      const spliceStart =
        stacks[fromIndex].length - cratesToMove < 0
          ? 0
          : stacks[fromIndex].length - cratesToMove;
      const poppedItems = stacks[fromIndex]
        .splice(spliceStart, cratesToMove)
      // push n items to the stack to move to
      stacks[toIndex].push(...poppedItems);
    }
    // get the last item from each stack
    const lastItems = stacks.map((stack) => stack[stack.length - 1]);
    //convert last items to string
    return lastItems.join("");
  };

  return (
    <div>
      <h2>Day 5: Stacking Boxes</h2>
      <div>
        After the rearrangement procedure completes, what crate ends up on top
        of each stack? Part 1: {performStackingPart1()}
      </div>
      <div>
        After the rearrangement procedure completes, what crate ends up on top
        of each stack? Part 2: {performStackingPart2()}
      </div>
      <br></br>
      <Link to="/">Back</Link>
    </div>
  );
};

interface IData {
  data: string;
}

export default Stacking;
