import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  filters: {
    name: "",
  },
};

const filterSlise = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    filteredPhonebooks: (state, action) => {
      state.contact.items = state.contact.items.filter((contact) =>
        contact.name.toLowerCase().includes(contact.name.toLowerCase())
      );
    },
  },
});

export const { filteredPhonebooks } = filterSlise.actions;
export const filterRerucer = filterSlise.reducer;
