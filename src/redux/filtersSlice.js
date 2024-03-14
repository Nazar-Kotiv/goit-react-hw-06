import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  contacts: {
    items: [],
    filters: {
      name: "",
    },
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    changeFilter: (state, action) => {
      const filterValue = action.payload.toLowerCase();

      state.contacts.filters.name = filterValue;

      if (filterValue.trim() === "") {
        state.contacts.items = filtersInitialState.contacts.items;
      } else {
        state.contacts.items = filtersInitialState.contacts.items.filter(
          (contact) => contact.name.toLowerCase().includes(filterValue)
        );
      }
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
