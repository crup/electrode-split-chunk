// import reducer from "../../client/reducers/home.reducer";

import demo1Reducer from "../../client/reducers/demo1.reducer";

const store = (initialState, reducer) => {
    return new Promise(resolve => {
        resolve({
            reducer,
            initialState
        });
    });
};

export default () => {
  return store(
    {
      username: { value: "" },
      textarea: { value: "" },
      selectedOption: { value: "0-13" }
    }, demo1Reducer
  );
};
