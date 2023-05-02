import { createStore, combineReducers } from "redux";

export const configureStore = (initialReducers, initialState, enhancer) => {
    const reducerManager = combineReducers(initialReducers);
    const store = createStore(reducerManager, Object.keys(initialReducers).reduce((pv, cv) => {
        return {
            ...pv,
            [cv]: initialState[cv]
        };
    }, {}), enhancer);
    if (typeof window === "object" && !store.injectReducer) {
        store.injectReducer = (asyncReducers = {}) => {
            store.replaceReducer(combineReducers(asyncReducers));
        };
    }
    return store;
};
