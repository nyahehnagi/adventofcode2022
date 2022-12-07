import React, { ReactElement } from "react";
import FileSystem from "../components/FileSystem/FileSystem";
import data from "/data/day7test.txt";

const FileSystemRoute = (): ReactElement => {
  return (
    <>
      <FileSystem data={data} />
    </>
  );
};

export default FileSystemRoute;
