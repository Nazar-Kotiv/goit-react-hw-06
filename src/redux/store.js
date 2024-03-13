import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterRerucer } from "./filtersSlice";
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterRerucer,
  },
});
