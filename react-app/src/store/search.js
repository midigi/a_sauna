import {getMember} from "./members";

const ADD_MEMBERS = "members/getMember";

const addMember = (inputs) => ({
  type: ADD_MEMBERS,
  payload: inputs,
});

export const addMembers = (search, id) => async (dispatch) => {
  const res = await fetch(`/api/users/${search}/${id}`, { method: "GET" });
  const data = await res.json();
  console.log("---added member data----", data.member)
  // dispatch(addMember(data));
  if (data.negtive) {
    return data
  }
  if (data.member){
    console.log("we made it!!!!")
    dispatch(getMember(data.member));
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
