import React from "react";
import "./SearchResultsList.css";
import SearchResult from "./SearchResult";

const SearchResultsList = ({ results }) => {
  console.log("object search" + results);
  return (
    <div className="results-list">
      {results.map((result) => {
        return (
          <SearchResult
            result={result.collegeName}
            resUrl={result.collegeUrl}
          />
        );
      })}
    </div>
  );
};

export default SearchResultsList;
