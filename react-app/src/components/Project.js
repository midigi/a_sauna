import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col, Drawer, Tag, Button, Modal } from "antd";
import { getProjectId } from "../store/project";
import TaskForm from "./auth/TaskForm";
import "./styling/Search.css";
import Member from "./Member";

import Task from "./Task";

import Search from "./Search";

import { UnorderedListOutlined, SettingFilled } from "@ant-design/icons";
import "./styling/Project.css";

const Project = () => {
  const project = useSelector((project) => project.project.project);
  const tasks = useSelector((state) => state.task.task);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  let color = "#35a7ff";
  function progress(input) {
    let count = input.length;
  }

  if (project) {
    if (project.projects.color) {
      color = project.projects.color;
    }
  }

  if (tasks) {
    progress(tasks);
  }

  const dispatch = useDispatch();
  const projectId = useParams();

  useEffect(() => {
    dispatch(getProjectId(projectId.id));
  }, [projectId]);

  return (
    project && (
      <div className="projects_page">
        <div></div>
        <Row style={{ paddingLeft: "1vh" }}>
          <Col span={2}>
            <div
              className="project_page_icon"
              style={{ backgroundColor: color }}
            >
              <UnorderedListOutlined
                style={{ fontSize: "2vh", color: "white" }}
              />
            </div>
          </Col>
          <Col span={16} className="projects_page_center">
            <h1 className="projects_page_title">
              {project.projects.projectName}
            </h1>
          </Col>
          <Col span={4} className="projects_page_center">
            <h2 className="projects_page_title">{project.projects.teamName}</h2>
          </Col>
          <Col span={1} className="projects_page_center">
            <button className="settings_button" onClick={showModal}>
              <SettingFilled className="settings_icon" />
            </button>
            <Modal
              title="Edit Project"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              width={"90%"}
              bodyStyle={{ height: "70vh" }}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <TaskForm projectId={project.projects.id}></TaskForm>
            <div className="scrollable">
              <Task id={project.projects.id}></Task>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "1vh" }}>
          <Col span={7}>
            <h2 className="center_search">Team Members</h2>
          </Col>
          <Col span={14} className="center_search">
            <Search />
            {/* <h2 className="center_title">Progress:</h2> */}
          </Col>
        </Row>
        <Row>
          <Col span={7}>{/* <Member id={project.projects.id}></Member> */}</Col>
          <Col span={14}>
            {/* <h2 className="center_title2">Progress:</h2> */}
          </Col>
        </Row>
      </div>
    )
  );
};

export default Project;
