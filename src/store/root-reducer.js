import { combineReducers } from "redux";

import { userInputsReducer } from "./user-inputs/user-inputs.reducer";

export const rootReducer = combineReducers({
  userInputs: userInputsReducer,
});
