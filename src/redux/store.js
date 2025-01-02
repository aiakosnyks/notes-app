import counterReducer from './counterSlice';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore ({
    reducer: {
        counter: counterReducer,
    }
});

