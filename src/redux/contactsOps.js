import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://666065685425580055b3b5cc.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "tasks/addContact",
  async (values, thunkAPI) => {
    try {
      const res = await axios.post("", {
        name: values.name,
        number: values.number,
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "tasks/deleteContact",
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`${id}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
