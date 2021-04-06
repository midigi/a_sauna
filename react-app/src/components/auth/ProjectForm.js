import React, { useState } from "react";
import { createProject } from "../../store/project";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Row, Col, Skeleton, Progress } from "antd";
import "./authStyling/form.css";

const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [teamName, setTeamName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const onProjectCreation = async (e) => {
    e.preventDefault();
    dispatch(createProject({ projectName, teamName })).then((res) => {
      history.push(`/project/${res.id}`);
    });
  };

  return (
    <div className="project_page">
      <form className="project_box" onSubmit={onProjectCreation}>
        <h1>Create Project</h1>
        <div>
          <label for="project_title">Project Title</label>
          <div></div>
          <input
            name="project_title"
            className="project_title"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "2vh", marginBottom: "3vh" }}>
          <label for="team_name">Team Name</label>
          <div></div>
          <input
            name="team_name"
            className="team_name"
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
        <div style={{ width: "100%" }}>
          <Button htmlType="submit" type="submit" block="true">
            Create Project
          </Button>
        </div>
      </form>
      <div className="skeleton">
        <div className="header_div">
          <span style={{ display: "flex" }}>
            {sessionUser.photoUrl != null ? (
              <img
                src={sessionUser.photoUrl}
                alt="UserPhoto"
                className="skeleton_picture"
              ></img>
            ) : (
              <img
                src="https://user-images.githubusercontent.com/70561117/108804980-ae2f4180-7553-11eb-8240-9746d71ad242.png"
                alt="Avatar"
                className="skeleton_picture"
              ></img>
            )}
            <h2 style={{ marginTop: "0.5vh" }}>{projectName}</h2>
          </span>
          <h2 style={{ marginTop: "0.5vh", justifySelf: "flex-start" }}>
            {teamName}
          </h2>
        </div>
        <Row>
          <Col span={1}></Col>
          <Col span={12}>
            <Skeleton paragraph={false}></Skeleton>
            <Skeleton paragraph={false}></Skeleton>
            <Skeleton paragraph={false}></Skeleton>
            <Skeleton paragraph={false}></Skeleton>
          </Col>
          <Col span={1}></Col>
          <Col
            span={10}
            style={{
              display: "flex",
              padding: "1vh",
            }}
          >
            <Row>
              <Col span={24}>
                <h3 style={{ width: "100%" }}>Members</h3>
              </Col>
              <Col
                span={24}
                style={{
                  display: "flex",
                  marginLeft: "-1vh",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ height: "30%", display: "flex", alignItems: "flex-end" }}>
          <Col span={16}></Col>
          <Col span={5}>
            <Progress type="circle" percent={75} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProjectForm;
