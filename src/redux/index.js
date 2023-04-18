import { configureStore } from "@reduxjs/toolkit";

const TOGGLECOLOR = "TOGGLECOLOR";
const TOGGLELINKSDISPLAY = "TOGGLELINKSDISPLAY";

export function toggleColor() {
  return { type: TOGGLECOLOR };
}

export function toggleLinksDisplay() {
  return { type: TOGGLELINKSDISPLAY };
}

const myState = {
  toggleColorTheme: false,
  toggleLinks: false,
};

function reducer(state = myState, action) {
  switch (action.type) {
    case TOGGLECOLOR:
      return {
        ...state,
        toggleColorTheme: !state.toggleColorTheme,
      };
    case TOGGLELINKSDISPLAY:
      return {
        ...state,
        toggleLinks: !state.toggleLinks,
      };
    default:
      return {
        ...state,
      };
  }
}

const store = configureStore({
  reducer: reducer,
});

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
