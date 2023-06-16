import {ADD_POSITIONS} from "../constants/positions";

export const addPositions = (positions) => ({
    type: ADD_POSITIONS,
    positions
});