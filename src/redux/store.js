import counterReducer from './counterSlice';
import notesReducer from './noteSlice';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore ({
    reducer: {
        counter: counterReducer,
        notes: notesReducer,
    }
});

