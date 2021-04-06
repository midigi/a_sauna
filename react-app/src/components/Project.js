import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col, Button, message, Input, Modal } from "antd";
import { getProjectId } from "../store/project";
import TaskForm from "./auth/TaskForm";
import "./styling/Search.css";
import { HexColorPicker } from "react-colorful";
import MemberProfile from "../components/MemberProfile";
import Task from "./Task";
import Search from "./Search";
import { UnorderedListOutlined, SettingFilled } from "@ant-design/icons";
import "./styling/Project.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Project = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [colorEdit, setColorEdit] = useState("#aabbcc");
  const project = useSelector((project) => project.project.project);
  const [updatedProjectName, setUpdatedProjectName] = useState("");
  const [updatedTeamName, setUpdatedTeamName] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    await fetch(`/api/projects/edit/${project.projects.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ colorEdit, updatedProjectName, updatedTeamName }),
    });

    await dispatch(getProjectId(project.projects.id));
    setUpdatedProjectName("");
    setUpdatedTeamName("");
    setIsModalVisible(false);
  };

  const deleteProject = async () => {
    await fetch(`/api/projects/delete/${project.projects.id}`, {
      method: "DELETE",
    });
    message.success(`Project ${project.projects.projectName} deleted`);
    await history.push("/");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  let color = "#35a7ff";

  if (project) {
    if (project.projects) {
      if (project.projects.color) {
        color = project.projects.color;
      }
    }
  }

  const projectId = useParams();

  useEffect(() => {
    dispatch(getProjectId(projectId.id));
  }, [projectId, dispatch]);

  return project && project.projects ? (
    <div className="projects_page">
      <div></div>
      <Row style={{ paddingLeft: "1vh" }}>
        <Col span={2}>
          <div className="project_page_icon" style={{ backgroundColor: color }}>
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
            footer={[
              <Button key="back" onClick={handleCancel}>
                Cancel
              </Button>,
              <Button key="submit" type="primary" onClick={handleOk}>
                Submit
              </Button>,
            ]}
            width={"90vh"}
          >
            <Row>
              <Col span={11}>
                <h1>Project Name</h1>
                <Input
                  size="large"
                  placeholder={project.projects.projectName}
                  value={updatedProjectName}
                  onChange={(e) => setUpdatedProjectName(e.target.value)}
                ></Input>

                <h2>Team Name</h2>
                <Input
                  size="large"
                  value={updatedTeamName}
                  onChange={(e) => setUpdatedTeamName(e.target.value)}
                  placeholder={project.projects.teamName}
                ></Input>

                <Button
                  onClick={deleteProject}
                  danger
                  className="delete_project"
                >
                  Delete Project?
                </Button>
              </Col>
              <Col span={6} className="left_color_edit">
                <h2>Project Color</h2>
                <div className="selected_color_div">
                  <div
                    style={{
                      width: "5vh",
                      height: "5vh",
                      borderRadius: "3%",
                      backgroundColor: colorEdit,
                      marginRight: "2vh",
                    }}
                  ></div>
                  <h3>{colorEdit}</h3>
                </div>
              </Col>
              <Col span={6} className="right_project_edit">
                <HexColorPicker color={colorEdit} onChange={setColorEdit} />
              </Col>
            </Row>
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
        </Col>
      </Row>
      <MemberProfile />
    </div>
  ) : null;
};

export default Project;
