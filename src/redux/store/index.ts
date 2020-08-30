import addPersonReducer from "../reducers/add-reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  addReducer: addPersonReducer,
});

export default allReducers;
