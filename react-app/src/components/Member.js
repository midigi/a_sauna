import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col, Drawer, Tag, Button } from "antd";
import { getProjectId } from "../store/project";
import TaskForm from "./auth/TaskForm";
import "./styling/Search.css";

import Task from "./Task";
import UniqueMember from "./UniqueMember";
import Search from "./Search";

import { ConsoleSqlOutlined, UnorderedListOutlined } from "@ant-design/icons";
import "./styling/Project.css";

const Member = ({ id }) => {
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

  console.log(id);
  let memberList;
  const [members, setMembers] = useState();
  const dispatch = useDispatch();
  const getAllMembers = async () => {
    const res = await fetch(`/api/users/member/${id}`);
    const data = await res.json();
    if (res.ok) {
      if (data.members.length > 0) {
        memberList = data.members;
        console.log(memberList);
      } else {
        return;
      }
    }
  };

  getAllMembers();
  //   useEffect(() => {}, [dispatch]);
  return (
    <div>
      {testMember.map((member) => {
        return <UniqueMember member={member}></UniqueMember>;
      })}
    </div>
  );
};

export default Member;
