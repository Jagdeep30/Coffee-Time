 
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/dataReducer";
import thunk from "redux-thunk";


const store = configureStore({
    reducer:reducers,
    middleware : [thunk]
});

export default store;