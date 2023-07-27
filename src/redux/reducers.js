import { TOGGLE_NIGHT_MODE, SELECT_REGION, LOAD_REGION_INFO, TOGGLE_SIDEBAR } from './actions';

const initialState = {
  nightMode: false,
  selectedRegion: null,
  regionInfo: null,
  collapsed: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NIGHT_MODE:
      return {
        ...state,
        nightMode: !state.nightMode,
      };
    case SELECT_REGION:
      return {
        ...state,
        selectedRegion: action.payload,
      };
    case LOAD_REGION_INFO:
      return {
        ...state,
        regionInfo: action.payload,
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        collapsed: !state.collapsed,
      };
    default:
      return state;
  }
};

export default rootReducer;
