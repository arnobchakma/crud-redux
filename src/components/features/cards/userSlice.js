import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state, action) => {
            state.push(action.payload);
        },

        editTable: (state, action) => {
            const { id, title, description, date } = action.payload;
            const exitingTable = state.find(table => table.id === id);
            if (exitingTable) {
                exitingTable.id = id;
                exitingTable.title = title;
                exitingTable.description = description;
                exitingTable.date = date;
            }
        },

        deleteTable: (state, action) => {
            const { id } = action.payload;
            const exitingTable = state.find(table => table.id === id);
            if (exitingTable) {
                return state.filter((table) => table.id !== id);
            }
        }
    }
});

export const { addCard, editTable, deleteTable } = userSlice.actions;
export default userSlice.reducer;