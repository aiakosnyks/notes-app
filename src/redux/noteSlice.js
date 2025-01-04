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
    editNote: {
        reducer: (state, action) => {
            state.values
        }
    }
  },
});

export const { addNote, prepare, editNote } = noteSlice.actions;
export default noteSlice.reducer;

export const selectAllNotes = (state) => state.notes;

export const selectNoteById = (state, noteId) =>
  state.notes.find(note => note.id === noteId);
