import demo1Reducer from "../../client/reducers/demo1.reducer";
import homereducer from "../../client/reducers/home.reducer";

export default function initTop() {
  return {
    reducer: {
      ...homereducer,
      ...demo1Reducer
    },
    initialState: {
      // checkBox: { checked: false },
      // number: { value: 999 },
      // username: { value: "" },
      // textarea: { value: "" },
      // selectedOption: { value: "0-13" },
      // showFakeComp: { value: true }
    }
  };
}
