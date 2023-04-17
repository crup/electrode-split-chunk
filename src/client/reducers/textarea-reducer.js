export const showFakeComp = (store, action) => {
    if (action.type === "SHOW_FAKE_COMP") {
      return {
        value: action.value
      };
    }
    return store || { value: false };
};
