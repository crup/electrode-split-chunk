// import reducer from "../../client/reducers/home.reducer";

export default function initTop() {
  return {
    initialState: {
      checkBox: { checked: false },
      number: { value: 999 },
      showFakeComp: { value: true }
    }
  };
}
