import { persistStore, persistReducer } from "redux-persist";
import { createStore, combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// import { createWrapper } from "next-redux-wrapper";
// import { devToolsEnhancer } from "redux-devtools-extension";

import * as reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todoList"],
};

const allReducers = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = createStore(persistedReducer, []);
// const makeStore = () => store;
// export const wrapper = createWrapper(makeStore, { debug: true });
export const persistor = persistStore(store);
