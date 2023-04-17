export const selectedOption = (store, action) => {
    if (action.type === "SELECT_OPTION") {
      return {
        value: action.value
      };
    }
    return store || { value: "0-13" };
  };
