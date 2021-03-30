const GET_MEMBERS = "members/getMembers";

const getBanana = (inputs) => ({
  type: GET_MEMBERS,
  payload: inputs,
});

export const getMembers = (search, id) => async (dispatch) => {
  const res = await fetch(`/api/users/${search}/${id}`, { method: "GET" });
  const data = await res.json();
  dispatch(getBanana(data));
  return data;
};

const initialState = { inputs: null };

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MEMBERS:
      return { ...state, inputs: action.payload };
    default:
      return state;
  }
}

export default reducer;
