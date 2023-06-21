import {createSlice} from "@reduxjs/toolkit";


const positionSlice = createSlice({
    name: '@@position',
    initialState: [],
    reducers: {
        addPositions: (_, action) => {
            return action.payload;
        }
    }
});

export const {addPositions} = positionSlice.actions;
export const positionReducer = positionSlice.reducer;
export const selectVisiblePositions = (state, filters = []) => {
    if (filters.length === 0) return state.position;
    return state.position.filter(pos => {
        const posFilers = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);
        return filters.every(filter => posFilers.includes(filter))
    });
}