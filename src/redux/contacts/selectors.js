import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const filtredContacts = contacts.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(filter.trim().toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.trim().toLowerCase())
      );
    });
    return filtredContacts;
  }
);

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
