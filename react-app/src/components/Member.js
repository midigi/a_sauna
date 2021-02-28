import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col, Drawer, Tag, Button } from "antd";
import { getProjectId } from "../store/project";
import { getAllMembers } from "../store/members";
import TaskForm from "./auth/TaskForm";
import "./styling/Search.css";

import Task from "./Task";
import UniqueMember from "./UniqueMember";
import Search from "./Search";

import { ConsoleSqlOutlined, UnorderedListOutlined } from "@ant-design/icons";
import "./styling/Project.css";

const Member = ({ id }) => {
  const dispatch = useDispatch();
  const [members, setMembers] = useState(useSelector((state) => state.member));
  const testMember = [
    {
      about: "A busy, busy person, who needs asauna",
      email: "demo@asauna.com",
      firstName: "Demo",
      id: 1,
      lastName: "User",
      photoUrl:
        "https://st.depositphotos.com/1814084/1640/i/950/depositphotos_16404909-stock-photo-brad-pitt.jpg",
    },
  ];

  useEffect(() => {
    dispatch(getAllMembers(id)).then((res) => {
      console.log(res);
    });
  }, [members]);

  console.log(members);

  return (
    <div>
      {testMember.map((member) => {
        return <UniqueMember member={member}></UniqueMember>;
      })}
    </div>
  );
};

export default Member;
