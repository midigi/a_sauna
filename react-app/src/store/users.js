const GET_USERS = "users/get_users";
const UPDATE_USER = "users/update_user";

const getUsers = (users) => ({
  type: GET_USERS,
  payload: users,
});

// TODO PUT needs to be finalized
const updateUser = (about) => ({
  type: UPDATE_USER,
  about,
});

export const getAllUsers = () => async (dispatch) => {
  const res = await fetch("/api/users");
  const data = await res.json();
  dispatch(getUsers(data));
};

// TODO PUT needs to be finalized
export const update_user = data => async dispatch => {
  console.log("this is the data in the thunk", data)
  const response = await fetch(`/api/users/update`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  console.log("this is the response in the thunk", response)

  if (response.ok) {
    const about = await response.json();
    dispatch(updateUser(about));
    return about;
  }
}

const initialState = {};
function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      const allUsers = {};
      action.payload.forEach((user) => {
        allUsers[user.id] = user;
      });
      return allUsers;
    case UPDATE_USER:
      return { ...state, [action.about.id]: action.about,};
    default:
      return state;
  }
}

export default reducer;
