const GET_MEMBERS = "members/get_members";

export const getMember = (member) => ({
  type: GET_MEMBERS,
  payload: member,
});

export const getAllMembers = (id) => async (dispatch) => {
  const res = await fetch(`/api/users/member/${id}`);
  const data = await res.json();
  if (res.ok) {
    const memberList = data.member;
    dispatch(getMember(memberList));
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
      console.log("this is the state.member", state.member)
      return { ...state, members: [...state.member, action.payload]};
    default:
      return state;
  }
}

export default reducer;
