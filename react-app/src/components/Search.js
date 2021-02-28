import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMembers } from "../store/search";
import { Button, message } from "antd";
import "./styling/Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const onSearch = async (e) => {
    e.preventDefault();
    dispatch(getMembers(search)).then((res) => {
      if (res.Member === "Not found") {
        message.error(`User ${search} not found`);
      } else {
        message.success(`User ${search} added to project!`);
      }
    });
  };

  return (
    <div className="search_bar">
      <form>
        <input
          value={search}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
      <Button onClick={onSearch}>Add User</Button>
    </div>
  );
};

export default Search;
