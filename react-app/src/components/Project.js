import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col, Drawer, Tag, Button } from "antd";
import { getProjectId } from "../store/project";
import TaskForm from "./auth/TaskForm";

import Task from "./Task";

import Search from "./Search";

import { UnorderedListOutlined } from "@ant-design/icons";
import "./styling/Project.css";

const Project = () => {
  const project = useSelector((project) => project.project.project);
  const dispatch = useDispatch();
  const projectId = useParams();
  console.log(project);
  console.log(projectId.id);
  const testProject = {
    id: 1,
    projectName: "My First Project",
    teamName: "Best Group",
  };

  useEffect(() => {
    dispatch(getProjectId(projectId.id));
  }, [projectId]);

  return (
    project && (
      <div className="projects_page">
        <div></div>
        <Row style={{ paddingLeft: "1vh" }}>
          <Col span={2}>
            <div className="project_page_icon">
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
          <Col span={5} className="projects_page_center">
            <h2 className="projects_page_title">{project.projects.teamName}</h2>
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
        <Search />
      </div>
    )
  );
};

export default Project;
