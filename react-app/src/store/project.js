const SET_PROJECT = "project/setProject";
const GET_PROJECT = "project/getProject";

const setProject = (project) => ({
  type: SET_PROJECT,
  payload: project,
});

const getProject = (project) => ({
  type: GET_PROJECT,
  payload: project,
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
  return data;
};

export const getProjectId = (id) => async (dispatch) => {
  const res = await fetch(`/api/projects/${id}`, {
    method: "GET",
  });
  const data = await res.json();
  dispatch(getProject(data));
};

const initialState = { project: null };

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECT:
      return { ...state, project: action.payload };
    case GET_PROJECT:
      return { ...state, project: action.payload };
    default:
      return state;
  }
}

export default reducer;
