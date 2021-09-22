import { configureStore } from "@reduxjs/toolkit";

import meteorite from "./meteorite";
export default configureStore({
  reducer: {
    meteorite,
  },
});
