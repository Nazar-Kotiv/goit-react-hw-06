import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
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
