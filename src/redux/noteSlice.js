import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.push(action.payload); // Yeni notu state'e ekler
      },
      prepare: (content) => {
        return {
          payload: {
            id: nanoid(), // Unique ID oluştur
            content, // content nesnesini ekle
          },
        };
      },
    },
  },
});

export const { addNote, prepare } = noteSlice.actions;
export default noteSlice.reducer;
