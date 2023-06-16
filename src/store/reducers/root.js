import {combineReducers} from 'redux'
import {positionReducer} from "./positions";
import {filtersReducer} from "./filters";

export const rootReduces = combineReducers({
    positions: positionReducer,
    filters: filtersReducer
});