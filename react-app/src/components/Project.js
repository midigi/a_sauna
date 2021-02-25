import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Drawer, Tag, Button } from "antd";
import TaskForm from "./auth/TaskForm";
import "./styling/Project.css";

const Project = () => {
  const testProject = {
    id: 1,
    projectName: "My First Project",
    teamName: "Best Group",
  };

  return (
    <div className="projects_page">
      <Row>
        <Col span={19}>
          <h1>{testProject.projectName}</h1>
        </Col>
        <Col span={5}>
          <h2>{testProject.teamName}</h2>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <TaskForm id={testProject.id}></TaskForm>
        </Col>
      </Row>
    </div>
  );
};

export default Project;
