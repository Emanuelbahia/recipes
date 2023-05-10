//en el store se guarda todo el estado de la aplicacion
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/search/searchSlice";

export default configureStore({
  //el reducer se encarga de actualizar el estado
  reducer: {
    params: searchReducer,
  },
});
