import { LOGO_LOADED, MODEL_LOADED } from "../actions/loaded";

export default function loaded(state = { logo: false, model: false }, action) {
  switch (action.type) {
    case LOGO_LOADED:
      return {
        ...state,
        logo: true
      };
      break;
    case MODEL_LOADED:
      return {
        ...state,
        model: true
      };
      break;
    default:
      return state;
  }
}
