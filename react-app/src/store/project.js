const SET_PROJECT = "project/setProject";
const REMOVE_PROJECT = "project/removeProject";

const setProject = (project) => ({
  type: SET_PROJECT,
  payload: project,
});

const removeProject = () => ({
  type: REMOVE_PROJECT,
});

export const createProject = ({ projectName, teamName }) => async (
  dispatch
) => {
  const res = await fetch("/api/projects/project", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ projectName, teamName }),
  });
  const data = await res.json();
  dispatch(setProject(data));
};

const initialState = { project: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_PROJECT:
      return { ...state, project: action.payload };
    case REMOVE_PROJECT:
    //ToDo
    default:
      return state;
  }
}

export default reducer;
