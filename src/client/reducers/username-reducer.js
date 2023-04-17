export const username = (store, action) => {
    if (action.type === "INPUT_NAME") {
      return {
        value: action.value
      };
    }
    return store || { value: "" };
};
