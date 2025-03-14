import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Session } from "../../types";

type sessionsState = {
  items: Session[];
};

const initialState: sessionsState = {
  items: [],
};

export const sessionsSlice = createSlice({
  name: "sessions",
  initialState,
  reducers: {
    setSessions(state, action: PayloadAction<Session[]>) {
      state.items = action.payload;
    },
  },
});

export const { setSessions } = sessionsSlice.actions;
