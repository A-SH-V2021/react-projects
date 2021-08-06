import React, { useRef,useEffect } from "react";
import { useGlobalContext } from "../context/Context";
const SearchForm = () => {
  const { setSearchItem } = useGlobalContext();
  const searchItem = useRef("");
  const submitHandle = (e) => {
    e.preventDefault();
  };

  const searchHandle = () => {
    setSearchItem(searchItem.current.value);
  };

  useEffect(() => {
  searchItem.current.focus()
  }, [])
  
  return (
    <section className="section search" onSubmit={submitHandle}>
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchItem}
            onChange={searchHandle}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
