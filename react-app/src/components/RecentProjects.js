import React from "react";
import "./styling/RecentProjects.css";
import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";

const test = { projectName: "First Project" };

const RecentProjects = () => {
  return (
    <div className="projects">
      <button className="project_button">
        <div className="project">
          <UnorderedListOutlined
            style={{ fontSize: "3.5vh", color: "white" }}
          />
        </div>
        <h4>{test.projectName}</h4>
      </button>
      <button className="add_project_button">
        <div className="add_project">
          <PlusOutlined
            style={{ fontSize: "3.5vh", color: "rgb(158, 166, 174)" }}
          />
        </div>
        <h4>Add Project</h4>
      </button>
    </div>
  );
};

export default RecentProjects;
