import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../components/features/cards/userSlice';

export const store = configureStore({
    reducer: {
        cards: cardsReducer
    },
});