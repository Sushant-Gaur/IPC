import React, { useEffect, useState } from "react";
import collegeDatas from "../api/data.json";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [collegeData, setCollegeData] = useState([]);

  console.log(collegeData);
  useEffect(() => {
    setCollegeData(collegeDatas);
  }, []);

  const search = (department) => {
    const results = collegeData.filter((college) => {
      return college.department === department;
    });
    const collegeNames = results.map((college) => {
      return { collegeName: college.collegename, collegeUrl: college.url };
    });

    setResults(collegeNames);
    console.log("collegeNames: " + collegeNames);
  };
  const handleChange = (value) => {
    setInput(value);
    const filteredCollege = search(value.toLowerCase());
  };
  return (
    <div className="search">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
