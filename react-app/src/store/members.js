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

export const addMembers = (search, id) => async (dispatch) => {
  const res = await fetch(`/api/users/${search}/${id}`, { method: "GET" });
  const data = await res.json();
  if (data.negtive) {
    return data
  }
  if (data.member){
    dispatch(getMember(data.member));
  }
  return data;
};

const initialState = { members: [] };

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MEMBERS:
      return { ...state, members: [ ...state.members, action.payload] };
    default:
      return state;
  }
}

export default reducer;
