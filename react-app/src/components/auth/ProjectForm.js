import React, { useState } from "react";
import { createProject } from "../../store/project";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [teamName, setTeamName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const onProjectCreation = async (e) => {
    e.preventDefault();
    dispatch(createProject({ projectName, teamName }));
    await history.push("/");
  };

  return (
    <div>
      <form onSubmit={onProjectCreation}>
        <div>Create Project</div>
        <div>
          <input
            name="project_title"
            type="text"
            placeholder="Project Title"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div>
          <input
            name="team_name"
            type="text"
            placeholder="Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Create Project</button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
