import { createSlice } from "@reduxjs/toolkit";
//el reducer actualiza el estado
const initialState = {
  q: "", //el estado inicial va a ser vacio.
};

export const searchSlice = createSlice({
  name: "params",
  initialState: initialState,
  reducers: {
    // con esta funcion, el reducer toma el estado inicial de mi aplicacion, en la props q,
    // y lo actualizo con lo que me vino en el payload (son los datos que mando al estado) del action! Despues lo exporto.
    setParams: (state, action) => {
      state.q = action.payload.q;
    },
  },
});

export const { setParams } = searchSlice.actions;

//al reducer lo exporto al store.js, que es el que me actualiza el estado
export default searchSlice.reducer;
