import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

import authReducer from "../features/auth/authSlice";
import infoReducer from "../features/info/infoSlice";

export const combinedReducers = combineReducers({
  auth: authReducer,
  info: infoReducer,
});

// const masterReducer = (state, action) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state, // use previous state
//       users: {
//         users: action.payload.users.users,
//       },
//     };
//     return nextState;
//   } else {
//     return combinedReducers(state, action);
//   }
// };

export const makeStore = () =>
  configureStore({
    // reducer: masterReducer,
    reducer: combinedReducers,
  });

export const wrapper = createWrapper(makeStore);
