import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  idsDictionary: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const newState = { ...state };
      newState.allIds = [...state.allIds];
      newState.allIds.append(action.payload.id);

      newState.idsDictionary = { ...state.idsDictionary };
      newState.idsDictionary[action.payload.id] = {
        content: action.payload.content,
        completed: false,
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.idsDictionary,
          [id]: {
            ...state.idsDictionary[id],
            completed: !state.idsDictionary[id].completed,
          },
        },
      };
    }
    default:
      return state;
  }
}
