import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "./styling/RecentProjects.css";
import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";

const RecentProjects = () => {
  const [projects, setProjects] = useState();
  const dispatch = useDispatch();
  const getAllProjects = async () => {
    const res = await fetch("/api/projects/user");
    const data = await res.json();
    if (res.ok) {
      // projects = data.projects;
      setProjects(data.projects);
      // return data.projects.map((project) => {
      //   <NavLink to={`/projects/${project.projectId}`}>
      //     <div style={{ display: "flex", alignItems: "center" }}>
      //       <FontAwesomeIcon icon={faSquare} className="squircle" />
      //       <p className="drawer_text">{project.projectName}</p>
      //     </div>
      //   </NavLink>;
      // });
    }
  };

  useEffect(() => {
    getAllProjects();
  }, [dispatch]);

  return (
    <div className="projects">
      {projects &&
        projects.slice(0, 3).map((project) => {
          let color = "#35a7ff";
          if (project.color) {
            color = project.color;
          }
          return (
            <NavLink to={`/project/${project.id}`} key={project.id}>
              <button className="project_button">
                <div className="project" style={{ backgroundColor: color }}>
                  <UnorderedListOutlined
                    style={{ fontSize: "3.5vh", color: "white" }}
                  />
                </div>
                <h4>{project.projectName}</h4>
              </button>
            </NavLink>
          );
        })}
      <NavLink to="/project">
        <button className="add_project_button">
          <div className="add_project">
            <PlusOutlined
              style={{ fontSize: "3.5vh", color: "rgb(158, 166, 174)" }}
            />
          </div>
          <h4>Add Project</h4>
        </button>
      </NavLink>
    </div>
  );
};

export default RecentProjects;
