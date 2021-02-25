const SET_TASK = "task/setTask";
const REMOVE_TASK = "task/removeTask";
const GET_TASK = "task/getTask";

const setTask = (task) => ({
  type: SET_TASK,
  payload: task,
});

const getTask = (task) => ({
  type: GET_TASK,
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
  const res = await fetch("/api/tasks/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ taskTitle, dueDate, priority, status, description }),
  });
  const data = await res.json();
  dispatch(setTask(data));
};

export const seeTask = () => async (dispatch) => {
  const res = await fetch('/api/tasks/');
  const data = await res.json();
  console.log("this is the data", data)
  dispatch(getTask(data.tasks));
}

const initialState = { task: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_TASK:
      {
        if (state.task){
          const newtask = [...state.task, action.payload]
          return {...state, task : newtask}
        }
        return { ...state, task: action.payload };
      }
    case GET_TASK:
      return { ...state, task: action.payload };
    case REMOVE_TASK:
    // ToDo
    default:
      return state;
  }
}

export default reducer;
