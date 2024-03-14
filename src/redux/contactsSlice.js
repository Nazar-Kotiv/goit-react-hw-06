import { createSlice, nanoid } from "@reduxjs/toolkit";
import { changeFilter } from "./filtersSlice";

const contactsInitialState = {
  contacts: {
    items: [],
    filters: {
      name: "",
    },
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeFilter, (state, action) => {
      const originalItems = contactsInitialState.contacts.items;
      const filterValue = action.payload.toLowerCase();

      state.contacts.items = filterValue
        ? originalItems.filter((contact) =>
            contact.name.toLowerCase().includes(filterValue)
          )
        : [...originalItems];
    });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
