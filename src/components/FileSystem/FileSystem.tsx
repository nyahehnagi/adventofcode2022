import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const FileSystem = ({ data }: IData): ReactElement => {
  let currentPath = ["/"];
  let parserIndex = 1;
  let fileSystem = new Map();
  fileSystem.set("/", new Map());
  let fileSystemSizes = new Map();
  fileSystemSizes.set("/", 0);

  const isPrompt = (prompt: string): boolean => {
    return prompt === "$";
  };

  const parseCommand = (command: string, lines: string[]) => {
    if (command === "ls") {
      let listedEntries: string[] = [];
      //move forward one to look at directores and files
      parserIndex++;
      while (parserIndex < lines.length) {
        if (lines[parserIndex].split("")[0] === "$") break;
        listedEntries.push(lines[parserIndex]);
        parserIndex++;
      }
      // parserIndex--;
      // add directories and files to current directory
      for (const entry of listedEntries) {
        const parts = entry.split(" ");
        if (parts[0] === "dir") {
          // set directory key
          //convert current path to string
          let dirKey = currentPath.join("") + parts[1];
          if (!fileSystem.has(dirKey)) {
            fileSystem.set(dirKey, new Map());
            fileSystemSizes.set(dirKey, 0);
          }
        }
        // must be a file
        else {
          // get map of files from current directory
          let currentPathStr = currentPath.join("");
          console.log("currentPathStr: " + currentPathStr);
          let dirFiles = fileSystem.get(currentPathStr);
          let fileSize = parseInt(parts[0]);
          let fileName = parts[1];
          if (!dirFiles.has(fileName)) {
            dirFiles.set(fileName, fileSize);
            fileSystemSizes.set(
              currentPathStr,
              fileSystemSizes.get(currentPathStr) + fileSize
            );
            updateParentDirectoriesSizes(fileSize);
          }
        }
      }
    } // end ls

    if (command === "cd") {
      // change current directory
      if (lines[parserIndex].split(" ")[2] === "..") {
        currentPath.pop();
      } else {
        const newDir = lines[parserIndex].split(" ")[2];
        currentPath.push(newDir);
      }
      parserIndex++;
    }

    console.dir("returning parserIndex: " + parserIndex);
  };

  const updateParentDirectoriesSizes = (fileSize: number) => {
    let currentPathStr = currentPath.join("");
    let parentPath = currentPath.slice(0, currentPath.length - 1);
    while (parentPath.length !== 0) {
      let parentPathStr = parentPath.join("");
      fileSystemSizes.set(
        parentPathStr,
        fileSystemSizes.get(parentPathStr) + fileSize
      );
      parentPath.pop();
    }
  };

  const parseData = (data: string): any => {
    const lines = data.split("\n");

    while (parserIndex < lines.length) {
      let lineParts = lines[parserIndex].split(" ");
      console.log("index: " + parserIndex + " line: " + lines[parserIndex]);
      if (isPrompt(lineParts[0])) {
        console.log("Calling parseCommand with currentPath: " + currentPath);
        parseCommand(lineParts[1], lines);
      }
    }

    return fileSystem;
  };

  const getFileSizesLessThan = (size: number): number => {
    let sum = 0;
    for (const [key, value] of fileSystemSizes) {
      if (value <= size) {
        sum += value;
      }
    }
    return sum;
  };

  const getMaxSizedDirectory = (): number => {
    return fileSystemSizes.get("/");
  };

  const getSmallestDirectoryGreaterThan = (size: number): number => {
    let min = 70000000;
    for (const [key, value] of fileSystemSizes) {
      if (value > size && value < min) {
        min = value;
      }
    }
    return min;
  };

  parseData(data);

  return (
    <div>
      <h2>Day 7: No Space Left On Device</h2>
      <div>
        What is the sum of the total sizes of those directories where their size
        is less than or equal to 100000: {getFileSizesLessThan(100000)}
      </div>
      <div>
        What is the total size of the directory:{" "}
        {getSmallestDirectoryGreaterThan(
          30000000 - (70000000 - getMaxSizedDirectory())
        )}
      </div>
      <br></br>
      <Link to="/">Back</Link>
    </div>
  );
};

interface IData {
  data: string;
}

export default FileSystem;
