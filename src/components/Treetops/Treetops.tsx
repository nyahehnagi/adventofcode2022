import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
// Mindful that I am changing the arrays with reverse() and transpose()
// which could cause a problem 
const Treetops = ({ data }: IData): ReactElement => {
  const treeMatrix: Tree[][] = [];

  type Tree = {
    treeId: number;
    height: number;
    visibleTreesToRight: number;
    visibleTreesToLeft: number;
    visibleTreesUp: number;
    visbleTreesDown: number;
  };

  const transpose = (matrix: Tree[][]) => {
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < i; j++) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
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
          visibleTreesToRight: 0,
          visibleTreesToLeft: 0,
          visibleTreesUp: 0,
          visbleTreesDown: 0,
        };
        row.push(tree);
        treeIdCounter++;
      });
      treeMatrix.push(row);
    });
    console.log("New Tree Matri", treeMatrix);
  };

  setUpTreeData();

  const getVisibleTreesFromTree = (array: Tree[]): number[] => {
    let visibleTreeArray: number[] = [];
    console.log(array);
    // look at each tree in the array
    for (let i = 0; i < array.length; i++) {
      // look at trees to the right of the current tree
      let visibleTreeCount = 0;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j].height < array[i].height) {
          // add a count to the current tree
          visibleTreeCount++;
        } else if (
          array[j].height === array[i].height ||
          j === array.length - 1
        ) {
          // add a count to the current tree
          visibleTreeCount++;
          break;
        } else {
          break;
        }
      }
      visibleTreeArray.push(visibleTreeCount);
    }
    return visibleTreeArray;
  };

  const calculateHighestScenicScore = (matrix: Tree[][]): number => {
    // tree count from the left and right
    for (let i = 0; i < matrix.length; i++) {
      const visibleFromTheRight = getVisibleTreesFromTree(matrix[i]);
      //apply values to the tree objects
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j].visibleTreesToRight = visibleFromTheRight[j];
      }
      let reverseRow: Tree[] = matrix[i];
      reverseRow.reverse();
      const visibleFromTheLeft = getVisibleTreesFromTree(reverseRow);
      // put it back to how it was
      //apply values to the tree objects
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j].visibleTreesToLeft = visibleFromTheLeft[j];
      }
    }
    // Tree count from the top and bottom
    transpose(matrix);
    for (let i = 0; i < matrix.length; i++) {
      const visibleFromTheBottom = getVisibleTreesFromTree(matrix[i]);
      //apply values to the tree objects
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j].visbleTreesDown = visibleFromTheBottom[j];
      }
      let reverseRow: Tree[] = matrix[i];
      reverseRow.reverse();
      const visibleFromTheTop = getVisibleTreesFromTree(reverseRow);

      //apply values to the tree objects
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j].visibleTreesUp = visibleFromTheTop[j];
      }
    }
    transpose(matrix);

    // mulitiply the values of each tree
    let highestScenicScore = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        const tree: Tree = matrix[i][j];
        const scenicScore =
          tree.visibleTreesToRight *
          tree.visibleTreesToLeft *
          tree.visibleTreesUp *
          tree.visbleTreesDown;
        if (scenicScore > highestScenicScore) {
          highestScenicScore = scenicScore;
        }
      }
    }
    return highestScenicScore;
  };

  const getVisibleTreesFromEdges = (array: Tree[]): Tree[] => {
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
      visibleTrees = visibleTrees.concat(getVisibleTreesFromEdges(matrix[i]));
      let reverseRow: Tree[] = matrix[i];
      reverseRow.reverse();
      visibleTrees = visibleTrees.concat(getVisibleTreesFromEdges(reverseRow));
    }

    // Trees visible from the top and bottom
    transpose(matrix);
    for (let i = 0; i < matrix.length; i++) {
      visibleTrees = visibleTrees.concat(getVisibleTreesFromEdges(matrix[i]));
      let reverseRow: Tree[] = matrix[i];
      reverseRow.reverse();
      visibleTrees = visibleTrees.concat(getVisibleTreesFromEdges(reverseRow));
    }
    // remove duplicate trees
    return new Set(visibleTrees).size;
  };

  return (
    <div>
      <h2>Day 8: Treetop Tree House</h2>
      <div>
        Trees that are visible from outside the grid:
        {calculateVisibleTrees(treeMatrix)}
      </div>
      <div>
        Highest scenic score possible for any tree:
        {calculateHighestScenicScore(treeMatrix)}
      </div>
      <br></br>
      <Link to="/">Back</Link>
    </div>
  );
};

interface IData {
  data: string;
}

export default Treetops;
