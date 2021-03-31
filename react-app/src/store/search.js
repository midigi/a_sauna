import {getMembers} from "./members";

const ADD_MEMBERS = "members/getMembers";

const addMember = (inputs) => ({
  type: ADD_MEMBERS,
  payload: inputs,
});

export const addMembers = (search, id) => async (dispatch) => {
  const res = await fetch(`/api/users/${search}/${id}`, { method: "GET" });
  const data = await res.json();
  console.log("---added member data----", data.members)
  // dispatch(addMember(data));
  if (data.negtive) {
    return data
  }
  if (data.members){
    console.log("we made it!!!!")
    dispatch(getMembers(data.members));
  }
  // dispatch(getMembers(data.members));
  return data;
};

const initialState = { inputs: null };

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MEMBERS:
      return { ...state, inputs: action.payload };
    default:
      return state;
  }
}

export default reducer;
