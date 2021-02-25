const SET_TASK = "task/setTask";
const REMOVE_TASK = "task/removeTask";

const setTask = (task) => ({
  type: SET_TASK,
  payload: task,
});

const removeTask = () => ({
  type: REMOVE_TASK,
});

export const createTask = ({
  taskTitle,
  dueDate,
  priority,
  status,
  description,
}) => async (dispatch) => {
  const res = await fetch("/api/tasks/task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ taskTitle, dueDate, priority, status, description }),
  });
  const data = await res.json();
  dispatch(setTask(data));
};

const initialState = { task: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_TASK:
      return { ...state, task: action.payload };
    case REMOVE_TASK:
    // ToDo
    default:
      return state;
  }
}

export default reducer;
