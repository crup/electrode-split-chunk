import { combineReducers } from "redux";
import { checkBox } from "./checkbox-reducer";
import { number } from "./number-reducer";
import { textarea } from "./textarea-reducer";
import { selectedOption } from "./selectedoption-reducer";
import { showFakeComp } from "./fakecomp-reducer";
import { username } from "./username-reducer";


export default combineReducers({
  checkBox,
  number,
  username,
  textarea,
  selectedOption,
  showFakeComp
});
