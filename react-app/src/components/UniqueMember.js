import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col, Drawer, Tag, Button } from "antd";
import { getProjectId } from "../store/project";
import TaskForm from "./auth/TaskForm";
import "./styling/Search.css";

import Task from "./Task";

import Search from "./Search";

import { ConsoleSqlOutlined, UnorderedListOutlined } from "@ant-design/icons";
import "./styling/Project.css";

const UniqueMember = ({ member }) => {
  //   useEffect(() => {}, [dispatch]);
  return (
    <div>
      <p>
        {member.firstName}, {member.lastName}
      </p>
    </div>
  );
};

export default UniqueMember;
