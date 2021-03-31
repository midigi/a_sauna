const GET_MEMBERS = "members/get_members";

export const getMembers = (members) => ({
  type: GET_MEMBERS,
  payload: members,
});

export const getAllMembers = (id) => async (dispatch) => {
  const res = await fetch(`/api/users/member/${id}`);
  const data = await res.json();
  if (res.ok) {
    const memberList = data.members;
    dispatch(getMembers(memberList));
  }
};

const initialState = { members: []};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MEMBERS:
      // const allMembers = {};
      // action.payload.forEach((user) => {
      //   allMembers[user.id] = user;
      // });
      // return allMembers;
      return { ...state, members: [...state.members, action.payload]};
    default:
      return state;
  }
}

export default reducer;
