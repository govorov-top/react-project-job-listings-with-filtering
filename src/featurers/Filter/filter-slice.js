import {createSlice} from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: '@@filters',
    initialState: [],
    reducers: {
        addFilter: (state, action) => {
            if (!state.includes(action.payload))
                state.push(action.payload);
        },
        removeFilter: (state, action) => {
            return state.filter(item => item !== action.payload);
        },
        clearFilter: () => {
            return [];
        },
    }
});

export const {addFilter,removeFilter,clearFilter} = filterSlice.actions
export const filterReducer = filterSlice.reducer;
export const selectAllFilters = (state) => state.filters;