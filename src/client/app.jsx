//
// This is the client side entry point for the React app.
//

import React from "react";
import { render, hydrate } from "react-dom";
import { routes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
// import rootReducer from "./reducers/home.reducer";
import { baseReducer } from "./reducers/base-reducer";
import { renderRoutes } from "react-router-config";
import { loadableReady } from "@loadable/component";
import { configureStore } from "./reducers/reducer-manager";

//

//
// Redux configure store with Hot Module Reload
//

const DEBUG = process.env.NODE_ENV === "development";
const middlewares = [];

const composeEnhancers =
    typeof window === "object" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        DEBUG ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extensions options like name
            // actionsBlacklist, actionsCreators, serialize...
        }) : compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));


const createReducer = asyncReducers => {
  return combineReducers({
    ...baseReducer,
    ...asyncReducers
  });
};

// const configureStore = initialState => {
//   const store = createStore(createReducer(), initialState, enhancer);

//   if (module.hot) {
//     module.hot.accept("./reducers/base-reducer", () => {
//       const nextRootReducer = require("./reducers/base-reducer").default;
//       store.replaceReducer(nextRootReducer);
//     });
//   }

//   return store;
// };

export const store = configureStore(createReducer(), window.__PRELOADED_STATE__, enhancer);

const start = App => {
  const jsContent = document.querySelector(".js-content");
  const reactStart = window.__PRELOADED_STATE__ && jsContent.innerHTML ? hydrate : render;

  loadableReady(() =>
    reactStart(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      jsContent
    )
  );
};

window.webappStart = () => start(() => renderRoutes(routes));

//
// Hot Module Reload setup
//
if (module.hot) {
  module.hot.accept("./routes", () => {
    const r = require("./routes");
    start(() => renderRoutes(r.routes));
  });
}
