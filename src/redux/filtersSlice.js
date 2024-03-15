import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    changeFilter: {
      reducer: (state, action) => {
        state.filters.name = action.payload;
      },
      // return {
      //   ...state,
      //   filters: {
      //     ...state.filters,
      //     name: action.payload,
      //   },
      // };
    },
  },
});
export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
