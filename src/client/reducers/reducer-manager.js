import { createStore, combineReducers } from "redux";

export const configureStore = (initialReducers, initialState, enhancer) => {
    const reducerManager = combineReducers(initialReducers);
    const store = createStore(reducerManager, initialState, enhancer);
    if (typeof window === "object" && !store.injectReducer) {
        store.asyncReducers = {};
        store.injectReducer = (key, asyncReducer) => {
            store.asyncReducers[key] = asyncReducer;
            store.replaceReducer(combineReducers(store.asyncReducers));
        };
    }
    return store;
};
