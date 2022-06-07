import { combineReducers } from "redux";
import diceReducer from "./diceReducer";
const rootReducer = combineReducers({ diceReducer });
export default rootReducer;
