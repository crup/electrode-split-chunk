import demo1Reducer from "../../client/reducers/demo1.reducer";

const store = initialState => {
    return new Promise(resolve => {
        resolve({
          reducer: {
            ...demo1Reducer
          },
          initialState
        });
    });
};

export default async () => {
  return store(
    {
      username: { value: "" },
      textarea: { value: "" },
      selectedOption: { value: "0-13" }
    }
  );
};
