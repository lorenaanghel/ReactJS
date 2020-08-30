export const ADD_PERSON = "ADD_PERSON";

const initialState = {
  persons: [],
};

const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON: {
      const { user: person } = action.payload;
      return {
        ...state,
        users: [...state.persons, person],
      };
    }
    default:
      return { state };
  }
};
export default addReducer;
