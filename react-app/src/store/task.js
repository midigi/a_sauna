const SET_TASK = "task/setTask";
const GET_TASK = "task/getTask";

const setTask = (task) => ({
  type: SET_TASK,
  payload: task,
});

const getTask = (task) => ({
  type: GET_TASK,
  payload: task,
});

export const markComplete = (taskId, description) => async () => {
  const res = await fetch(`/api/tasks/${taskId}`, {
    method: "PUT",
    body: JSON.stringify({ description }),
  });
  return await res.json();
};
export const createTask = ({
  taskTitle,
  dueDate,
  priority,
  status,
  description,
  projectId,
}) => async (dispatch) => {
  const res = await fetch("/api/tasks/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      taskTitle,
      dueDate,
      priority,
      status,
      description,
      projectId,
    }),
  });
  const data = await res.json();
  dispatch(setTask(data));
};

export const deleteTask = (taskId) => async () => {
  const res = await fetch(`/api/tasks/${taskId}`, {
    method: "DELETE",
  });
  await res.json();
};

export const seeTask = () => async (dispatch) => {
  const res = await fetch("/api/tasks/");
  const data = await res.json();
  dispatch(getTask(data.tasks));
};

export const seeProjectTask = (id) => async (dispatch) => {
  const res = await fetch(`/api/tasks/project/${id}`);
  const data = await res.json();
  dispatch(getTask(data.tasks));
  return data;
};

const initialState = { task: null };

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TASK: {
      if (state.task) {
        const newtask = [...state.task, action.payload];
        return { ...state, task: newtask };
      }
      return { ...state, task: action.payload };
    }
    case GET_TASK:
      return { ...state, task: action.payload };
    default:
      return state;
  }
}

export default reducer;
