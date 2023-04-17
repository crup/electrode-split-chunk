//
// This is the client side entry point for the React app.
//

import React from "react";
import { render, hydrate } from "react-dom";
import { routes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { renderRoutes } from "react-router-config";
import { loadableReady } from "@loadable/component";

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

const configureStore = initialState => {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

const store = configureStore(window.__PRELOADED_STATE__);

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
