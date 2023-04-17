export const checkBox = (store, action) => {
    if (action.type === "TOGGLE_CHECK") {
      return {
        checked: !store.checked
      };
    }
    return store || { checked: false };
};
