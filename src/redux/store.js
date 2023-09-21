import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { datareducer } from "./datareducer";
import { dislikereducer } from "./dislikereducer";
import { likereducer } from "./likereducer";

// Combine reducers if you have multiple reducers in the future
const rootReducer = combineReducers({
  data: datareducer,
  counter: likereducer,
  count: dislikereducer,
});

// Load initial state from localStorage (if it exists)
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState, // Use the persisted state as preloadedState
});

// Subscribe to changes in the Redux store and save the state to localStorage
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
