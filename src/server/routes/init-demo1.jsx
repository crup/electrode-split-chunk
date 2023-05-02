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
      username: { value: "" },
      textarea: { value: "" },
      selectedOption: { value: "0-13" }
    }
  );
};
