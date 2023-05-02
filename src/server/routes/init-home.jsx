import homeReducer from "../../client/reducers/home.reducer";

const store = initialState => {
    return new Promise(resolve => {
        resolve({
          reducer: {
            ...homeReducer
          },
          initialState
        });
    });
};

export default async () => {
  return store(
    {
      checkBox: { checked: true },
      number: { value: 888 },
      showFakeComp: { value: true }
    }
  );
};
