import { combineReducers } from "redux";
// import appReducer from "./app";
import authReducer from "./auth";
import tasksReducer from "./tasks";
// import pharmacyReducers from "./pharmacy";

const rootReducer = combineReducers({
  // app: appReducer,
  auth: authReducer,
  tasks: tasksReducer
});

export default rootReducer;
