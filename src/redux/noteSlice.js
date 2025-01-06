import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: {
      reducer: (state, action) => {
        console.log("action add note: ", action);
        state.push(action.payload); 
      },
      prepare: (content) => {
        return {
          payload: {
            id: nanoid(), 
            content: content, 
          },
        };
      },
    },
    editNote: {
      reducer: (state, action) => {
        console.log("edit slice", state);
        const { id, content } = action.payload;
        const note = state.find((n) => n.id === id); 
        console.log("found note: ", note);
        if (note) {
          console.log("edit slice payload content: ", content.title);

          note.content.title = content.title || note.content.title;
          note.content.description = content.description || note.content.description;
          note.content.email = content.email || note.content.email;
          note.content.image = content.image || note.content.image; 
        }
      },
    },
    removeNote: {
      reducer: (state, action) => {
        const id = action.payload;
        return state.filter((n) => n.id !== id); 
      },
    },
  },
});

export const { addNote, editNote, removeNote } = noteSlice.actions;
export default noteSlice.reducer;

// Selectors
export const selectAllNotes = (state) => state.notes;

export const selectNoteById = (state, noteId) =>
  state.notes.find((note) => note.id === noteId);
