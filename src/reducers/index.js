import { combineReducers } from "redux";
import {cartState} from "./cartReducer";

const rootReducer = combineReducers({
    cartState
});

export default rootReducer;
