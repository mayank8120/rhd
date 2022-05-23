import { changeMapState, search_result } from "./reducers";
import { combineReducers } from "redux";


export const rootreducer = combineReducers(
    {
        search_result: search_result,
        mapState: changeMapState
    }
);
