export default function initTop() {
  return {
    initialState: {
      checkBox: { checked: false },
      number: { value: 990 },
      username: { value: "" },
      textarea: { value: "" },
      selectedOption: { value: "0-13" }
      // showFakeComp: { value: true }
    }
  };
}
