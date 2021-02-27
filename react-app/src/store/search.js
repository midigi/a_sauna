const GET_MEMBERS = "members/getMembers";

const getBanana = (inputs) => ({
  type: GET_MEMBERS,
  payload: inputs,
});

export const getMembers = (search) => async (dispatch) => {
  const res = await fetch(`/api/users/${search}`, { method: "GET" });
  const data = await res.json();

  dispatch(getBanana(data));
};

const initialState = { inputs: null };

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MEMBERS:
      return { ...state, inputs: action.payload };
  }
}

export default reducer;
