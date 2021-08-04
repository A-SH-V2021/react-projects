import React from "react";
import { useGlobalContext } from "../context/Context";
const SearchForm = () => {

    const { setSearchItem } = useGlobalContext();
  return (
    <div>
      <h2>searchform</h2>
    </div>
  );
};

export default SearchForm;
