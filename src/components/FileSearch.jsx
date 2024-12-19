import React, { useEffect, useState } from "react";
import { searchInFile } from "../functions/functions";

const FileSearch = ({ value }) => {
  const [text, setText] = useState("///");
  useEffect(() => {
    const fetchData = async () => {
      const result = await searchInFile(value);
      setText(result);
    };
    fetchData();
  }, [value]);

  return <div className="">{text}</div>;
};

export default FileSearch;
