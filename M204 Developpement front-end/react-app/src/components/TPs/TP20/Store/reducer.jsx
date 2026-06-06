import { createSlice } from '@reduxjs/toolkit';

const VoituresSlice = createSlice({
    name: 'Voitures',
    initialState: { 
        Voitures: [
            {id:1,marque:"BMW"},
            {id:2,marque:"GOLF 8"},
            {id:3,marque:"AUDI"},
            {id:4,marque:"ALPHA ROMEO"}
        ]
    },
    reducers: {
        Ajouter: (state, action) => {
            state.Voitures = [...state.Voitures, action.payload];
        }, 
        Supprimer: (state, action) => {
            state.Voitures = state.Voitures.filter(e => e.id !== action.payload);
        },
        Modifier: (state, action) => {
            state.Voitures = state.Voitures.map(e => {
                if (e.id === action.payload.oldId) {
                    return action.payload.newData;
                } else {
                    return e;
                }
            });
        },
        Delete: (state, action) => {
            state.Voitures = state.Voitures.filter(e => e.id !== action.payload);
        }
    },
});

export const { Ajouter, Supprimer, Modifier, Delete } = VoituresSlice.actions;
export default VoituresSlice.reducer;
