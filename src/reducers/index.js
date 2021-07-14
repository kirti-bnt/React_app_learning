import CounterReducer from "./Counter";
import IsProduct from "./IsProduct";
import { combineReducers } from "redux";
import DisplayProductReducer from "./DisplayProductReducer";

const allReducers=combineReducers({
    counter:CounterReducer,
    ProductState:IsProduct,
    showproduct:DisplayProductReducer
})

export default allReducers;
