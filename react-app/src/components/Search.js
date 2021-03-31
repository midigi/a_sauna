import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMembers } from "../store/search";
import { Button, Input, message } from "antd";
import "./styling/Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const sessionProjectId = useSelector(
    (state) => state.project.project.projects.id
  );

  const onSearch = async (e) => {
    e.preventDefault();
    dispatch(addMembers(search, sessionProjectId)).then((res) => {
      if (res.negative === "Not found") {
        message.error(`User ${search} not found`);
      } else {
        message.success(`User ${search} added to project!`);
      }
    });
  };

  return (
    <div className="search_bar">
      <form>
        <Input
          value={search}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        ></Input>
      </form>
      <Button onClick={onSearch}>Add Member</Button>
    </div>
  );
};

export default Search;
