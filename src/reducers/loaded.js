import { SET_LOADED } from "../actions/loaded";

export default function loaded(state = false, action) {
  switch (action.type) {
    case SET_LOADED:
      return true;
      break;
    default:
      return state;
  }
}
