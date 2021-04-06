import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Avatar, Modal } from "antd";
import { getProjectId } from "../store/project";
import TaskForm from "./auth/TaskForm";
import "antd/dist/antd.css";
import "./styling/User.css";

import Task from "./Task";

import Search from "./Search";

import { ConsoleSqlOutlined, UnorderedListOutlined } from "@ant-design/icons";
import "./styling/Project.css";

const UniqueMember = ({ member }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const sessionProject = useSelector((state) => state.project.project.projects);

  const showModal = () => {
    setIsModalVisible(true);
    console.log(member);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <button className="button_clear" onClick={showModal}>
        <Avatar size={80} className="team_members">
          <p className="member_text">
            {member.firstName[0]}
            {member.lastName[0]}
          </p>
        </Avatar>
      </button>
      <Modal
        title={`${member.firstName}'s Profile`}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="profile_header">
          <Avatar size={130} src={member.photoUrl}></Avatar>
          <div className="name_header">
            <strong className="first_name">{member.firstName}</strong>
            <p className="last_name">{member.lastName}</p>
          </div>

          <a
            className="email_button"
            href={`mailto:${member.email}?subject=A message from ${sessionUser.firstName} about the ${sessionProject.projectName} project.`}
          >
            Send email
          </a>
        </div>
        {/* <strong className="about_me">About</strong>
        <p>{member.about}</p> */}
      </Modal>
    </div>
  );
};

export default UniqueMember;
