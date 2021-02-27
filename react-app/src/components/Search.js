import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMembers } from "../store/search";

const Search = () => {
    const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const onSearch = async (e) => {
      e.preventDefault();
      dispatch(getMembers({search}))

  }


  return (
    <div>
      <form>
        <input 
        value={search}
        type="text"
         onChange={(e) => setSearch(e.target.value)}></input>
      </form>
    </div>
  );
};


export default Search