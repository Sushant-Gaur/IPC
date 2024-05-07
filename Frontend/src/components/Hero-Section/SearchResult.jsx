import React from "react";
import "./SearchList.css";

const SearchResult = ({ result, resUrl }) => {
  return (
    <a href={resUrl} className="search-result" target="_blank">
      {result}
    </a>
  );
};

export default SearchResult;
