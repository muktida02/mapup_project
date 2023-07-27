// Action Types
export const TOGGLE_NIGHT_MODE = 'TOGGLE_NIGHT_MODE';
export const SELECT_REGION = 'SELECT_REGION';
export const LOAD_REGION_INFO = 'LOAD_REGION_INFO';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

// Action Creators
export const toggleNightMode = () => {
  return {
    type: TOGGLE_NIGHT_MODE,
  };
};

export const selectRegion = (region) => {
  return {
    type: SELECT_REGION,
    payload: region,
  };
};

export const loadRegionInfo = (regionInfo) => {
  return {
    type: LOAD_REGION_INFO,
    payload: regionInfo,
  };
};

export const toggleSidebar = () => {
  return {
    type: TOGGLE_SIDEBAR,
  };
};
