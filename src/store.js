import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

const store = configureStore({
<<<<<<< HEAD
    reducer: {
        user: userReducer,
    }
});

export default store;
=======
  reducer: {},
});
export default store;
>>>>>>> quyen-branch
