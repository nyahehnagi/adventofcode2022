import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const Treetops = ({ data }: IData): ReactElement => {
  const treeMatrix: Tree[][] = [];

  type Tree = {
    treeId: number;
    height: number;
  };

  const setUpTreeData = () => {
    let treeIdCounter = 1;

    const lines: string[] = data.split("\n");

    lines.forEach((line) => {
      const row: Tree[] = [];
      line.split("").forEach((char) => {
        const tree: Tree = {
          treeId: treeIdCounter,
          height: parseInt(char),
        };
        row.push(tree);
        treeIdCounter++;
      });
      treeMatrix.push(row);
    });
  };

  setUpTreeData();

  console.log(treeMatrix);

  function transpose(matrix: Tree[][]) {
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < i; j++) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  }

  const getVisibleTrees = (array: Tree[]): Tree[] => {
    let visibleTrees: Tree[] = [];
    let maxTreeHeight = 0;

    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        visibleTrees.push(array[i]);
        maxTreeHeight = array[i].height;
      } else {
        if (array[i].height > maxTreeHeight) {
          visibleTrees.push(array[i]);
          maxTreeHeight = array[i].height;
        }
      }
    }

    return visibleTrees;
  };

  const calculateVisibleTrees = (matrix: Tree[][]): number => {
    let visibleTrees: Tree[] = [];

    // Trees visible from the left and right
    for (let i = 0; i < matrix.length; i++) {
      visibleTrees = visibleTrees.concat(getVisibleTrees(matrix[i]));
      let reverseRow: Tree[] = matrix[i];
      reverseRow.reverse();
      visibleTrees = visibleTrees.concat(getVisibleTrees(reverseRow));
    }

    // Trees visible from the top and bottom
    transpose(matrix);
    for (let i = 0; i < matrix.length; i++) {
      visibleTrees = visibleTrees.concat(getVisibleTrees(matrix[i]));
      let reverseRow: Tree[] = matrix[i];
      reverseRow.reverse();
      visibleTrees = visibleTrees.concat(getVisibleTrees(reverseRow));
    }

    return new Set(visibleTrees).size;
  };

  return (
    <div>
      <h2>Day 8: Treetop Tree House</h2>
      <div></div>
      Trees that are visible from outside the grid:{" "}
      {calculateVisibleTrees(treeMatrix)}
      <br></br>
      <Link to="/">Back</Link>
    </div>
  );
};

interface IData {
  data: string;
}

export default Treetops;
