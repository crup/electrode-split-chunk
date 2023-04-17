export const textarea = (store, action) => {
    if (action.type === "INPUT_TEXT_AREA") {
      return {
        value: action.value
      };
    }
    return store || { value: "" };
};
