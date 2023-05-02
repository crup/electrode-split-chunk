const store = initialState => {
    return new Promise(resolve => {
        resolve({
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
