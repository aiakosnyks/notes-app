import { createSlice, nanoid } from "@reduxjs/toolkit";
import reducer from "./counterSlice";

const initialState = [];

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: {
      reducer: (state, action) => {
        console.log('action add note: ', action)
        state.push(action.payload); // Yeni notu state'e ekler
      },
      prepare: (content) => {
        return {
          payload: {
            id: nanoid(), // Unique ID oluştur
            content: content, // content nesnesini ekle
          },
        };
      },
    },
    editNote: {
      reducer: (state, action) => {
        console.log("edit slice", state);
        const { id, content } = action.payload;
        const note = state.find((n) => n.id === id); // Find the note by id
        console.log('found note: ',note);
        if (note) {
          console.log('edit slice payload content: ',content.title);

          note.content.title = content.title || note.content.title ;
          note.content.description = content.description || note.content.description;
          note.content.email = content.email || note.content.email;
        }
      }
    },
    removeNote: {
      reducer: (state, action) => {
      const id = action.payload;
      return state.filter((n) => n.id !== id); // Belirtilen id'yi hariç tutan yeni bir state döner
      },    
    },
  }
});

export const { addNote, editNote, removeNote } = noteSlice.actions;
export default noteSlice.reducer;

export const selectAllNotes = (state) => state.notes;

export const selectNoteById = (state, noteId) =>
  state.notes.find((note) => note.id === noteId);
