import { createAsyncThunk } from '@reduxjs/toolkit';

import { getContacts, addNewContact, deleteContactById } from 'services/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const contact = await addNewContact(data);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const contact = await deleteContactById(id);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
